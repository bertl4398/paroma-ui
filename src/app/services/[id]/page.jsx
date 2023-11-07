"use client";
import { useState, useEffect } from "react";
import columns from "@/components/patients/columns";
import { Separator } from "@/components/ui/separator";
import FileUpload from "@/components/fileupload";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";

const ServicePage = ({ params }) => {
  const { toast } = useToast();
  const [data, setData] = useState(null);
  const [service, setService] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  useEffect(() => {
    fetch(`http://localhost:4000/services/${params.id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:4000/patients")
      .then((res) => res.json())
      .then((data) => {
        setData(
          data[0].entry.map((e) => ({
            id: e.resource.id,
            birthDate: e.resource.birthDate,
            familyName: e.resource.name[0].family,
            givenName: e.resource.name[0].given[0],
          }))
        );
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  return (
    <>
      <h1 className="text-4xl text-nav font-semibold">
        {service?.name} - Consent Management
      </h1>
      <Separator className="mt-2 mb-4" />
      <p>Add patient and consent to this service.</p>
      <div className="container mx-auto py-10">
        <div>
          <div className="flex items-center py-4">
            <Input
              placeholder="Filter given name..."
              value={table.getColumn("givenName")?.getFilterValue() ?? ""}
              onChange={(event) =>
                table.getColumn("givenName")?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                        </TableHead>
                      );
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => (
                    <TableRow
                      key={row.id}
                      data-state={row.getIsSelected() && "selected"}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
          <FileUpload />
          <div className="flex items-center justify-end space-x-2 py-4">
            <Button
              onClick={() => {
                toast({
                  title: "Consent created!",
                  description: `Consent for ${service?.name} and patient ${table
                    .getSelectedRowModel()
                    .rows?.map(
                      (r) =>
                        `${r.getValue("familyName")}, ${r.getValue(
                          "givenName"
                        )}`
                    )} created.`,
                });
              }}
            >
              Create Consent
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicePage;
