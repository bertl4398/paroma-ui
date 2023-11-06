import FileUpload from "@/components/fileupload";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

async function getPatient() {
  const response = await fetch("https://hapi.fhir.org/baseR5/Patient/81707");

  return response.json();
}

const Consent = async () => {
  const patient = await getPatient();
  console.log(patient);
  return (
    <>
      <h1 className="text-4xl text-nav font-semibold">Consent Management</h1>
      <Separator className="mt-2 mb-4" />
      <Label htmlFor="patientsearch">Search Patient</Label>
      <Input
        id="patientsearch"
        type="search"
        placeholder="Search..."
        className="md:w-[100px] lg:w-[300px]"
      />
      <Separator className="my-4" />
      <div className="flex flex-row space-x-2 items-center">
        <Label htmlFor="identifier">Identifier</Label>
        <Input
          className="basis-1/4"
          id="identifier"
          disabled
          type="text"
          placeholder="Identifier"
        />
        <Label htmlFor="lastupdated">Last Updated</Label>
        <Input
          className="basis-1/4"
          id="lastupdated"
          disabled
          type="text"
          placeholder="Last Updated"
        />
      </div>
      <div className="flex flex-row space-x-2 items-center">
        <Label htmlFor="familyname">Family Name</Label>
        <Input id="familyname" disabled type="text" placeholder="Family Name" />
        <Label htmlFor="givenname">Given Name</Label>
        <Input id="givenname" disabled type="text" placeholder="Given Name" />
        <Label htmlFor="birthdate">Birth Date</Label>
        <Input id="birthdate" disabled type="text" placeholder="Birth Date" />
        <Label htmlFor="gender">Gender</Label>
        <Input id="gender" disabled type="text" placeholder="Gender" />
      </div>
      <Separator className="my-4" />
      <div>
        <FileUpload />
      </div>
    </>
  );
};

export default Consent;
