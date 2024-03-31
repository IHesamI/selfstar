import React from "react";
import UploadFile from "../../common/UploadFile";
import { useLang } from "../../../hooks/useLang";

export default function ThesisUpload() {
  const lang = useLang();

  return (
    <div className="flex flex-col section-padding w-full mb-10 ">
      <div className="flex flex-col pt-5 w-full gap-5">
        <h1 className="pt-[1rem] pb-[1rem]">{lang("uploadthesis")}</h1>
        <div className="flex flex-col pt-5 w-[60%] gap-5 text-gray-700 border-t-[1px]">
          <div className="flex flex-col gap-1">
            <label htmlFor="title">{lang("thesisTitle")}</label>
            <input
              className="w-full border-[1px] p-1 border-gray-500 outline-none resize-none rounded-sm"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="description">{lang("description")}</label>
            <textarea
              className="w-full border-[1px] p-1 border-gray-500 outline-none resize-none rounded-sm"
              name=""
              id="description"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <UploadFile />
      </div>
      <div className="w-[60%] flex justify-end">
        <button className="w-fit flex flex-row gap-4 bg-blue-600 p-3 rounded-lg items-center text-white hover:bg-opacity-85">
          {lang("click")}
        </button>
      </div>
    </div>
  );
}
