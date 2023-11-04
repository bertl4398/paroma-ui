import FileUpload from "@/components/fileupload";
import { Separator } from "@/components/ui/separator";

const Consent = () => {
  return (
    <>
      <h1 className="text-4xl text-nav font-semibold">Consent Management</h1>
      <Separator className="mb-4" />
      <div>
        <FileUpload />
      </div>
    </>
  );
};

export default Consent;
