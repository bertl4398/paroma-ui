"use client";
import { Inbox } from "lucide-react";
import { useDropzone } from "react-dropzone";

const FileUpload = () => {
  const { getRootProps, getInputProps } = useDropzone();
  return (
    <div className="p-2 bg-white rounded-xl">
      <div
        {...getRootProps({
          className:
            "border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-content items-center flex-col",
        })}
      >
        <input {...getInputProps()} />
        <>
          <Inbox className="w-10 h-10 text-nav" />
          <p className="mt-2 text-sm text-slate-400">Drop Consent Here</p>
        </>
      </div>
    </div>
  );
};

export default FileUpload;
