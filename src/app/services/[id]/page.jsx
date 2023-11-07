import columns from "@/components/patients/columns";
import DataTable from "@/components/patients/data-table";
import { Separator } from "@/components/ui/separator";

async function getPatients() {
  const res = await fetch("http://localhost:4000/patients");
  return res.json();
}

async function getService(id) {
  const res = await fetch(`http://localhost:4000/services/${id}`);
  return res.json();
}

const ServicePage = async ({ params }) => {
  const patients = await getPatients();
  const service = await getService(params.id);

  const data = patients[0].entry.map((e) => ({
    id: e.resource.id,
    birthDate: e.resource.birthDate,
    familyName: e.resource.name[0].family,
    givenName: e.resource.name[0].given[0],
  }));

  return (
    <>
      <h1 className="text-4xl text-nav font-semibold">
        {service.name} - Consent Management
      </h1>
      <Separator className="mt-2 mb-4" />
      <p>Add patient and consent to this service.</p>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </>
  );
};

export default ServicePage;
