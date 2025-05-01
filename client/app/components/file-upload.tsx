"use client";
import * as React from "react";
import { Upload } from "lucide-react";

const FileUploadComponent = () => {
  const handelFileUploadButtonClick = () => {
    const el = document.createElement("input");
    el.setAttribute("type", "file");
    el.setAttribute("accept", "application/pdf");
    el.addEventListener("change", async (ev) => {
      if (el.files && el.files.length > 0) {
        const file = el.files.item(0);

        if (file) {
          const formData = new FormData();
          formData.append("pdf", file);
          await fetch("http://localhost:8080/upload/pdf", {
            method: "POST",
            body: formData,
          });
          console.log("File Uploaded");
        }
      }
    });
    el.click();
  };
  return (
    <>
      <div className="bg-slate-900 text-white shadow-2xl flex justify-center items-center p-4 rounded-lg border-white border-2">
        <div
          onClick={handelFileUploadButtonClick}
          className="flex justify-center items-center flex-col"
        >
          <h3 className="font-bold">Upload Your PDF</h3>
          <Upload size={34} />
        </div>
      </div>
    </>
  );
};

export default FileUploadComponent;
