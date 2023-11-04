"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { name: "high", value: 5 },
  { name: "medium", value: 2 },
  { name: "low", value: 3 },
];

const COLORS = ["#f44336", "#ff9800", "#4caf50"];

const Compliance = () => {
  return (
    <>
      <h1 className="text-4xl text-nav font-semibold">Compliance Check</h1>
      <Separator className="mb-4" />
      <div className="grid grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Compliance Checks</CardTitle>
          </CardHeader>
          <CardContent>
            <p>10 checks of 20 failed</p>
            <div className="h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart width={800} height={400}>
                  <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={30}
                    outerRadius={80}
                    fill="#8884d8"
                    paddingAngle={1}
                    dataKey="value"
                  >
                    {data.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
          <CardFooter className="flex space-x-4">
            <p className="text-[#f44336]">high</p>
            <p className="text-[#ff9800]">medium</p>
            <p className="text-[#4caf50]">low</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>GDPR Compliance</CardTitle>
          </CardHeader>
          <CardContent>
            <p>GDPR compliance: 50%</p>
            <p>Non-compliance: 50%</p>
            <div className="mt-4">
              <Progress value={50} />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Risk Level</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row text-4xl font-bold justify-between">
            <p className="text-red-500">High</p>
            <FontAwesomeIcon icon={faFaceFrown} className="text-red-500 pt-1" />
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Compliance;
