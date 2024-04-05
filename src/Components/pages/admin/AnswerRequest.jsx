import React from "react";
import { useLang } from "../../../hooks/useLang";
import SetStatus from "./SetStatus";
import BackArrow from "../../../assets/image/BackArrow";

export default function AnswerRequest({ data, handleBack }) {
  const { title, description, requestDate, author } = data;
  const lang = useLang();
  return (
    <div className="flex flex-col w-full">
      <button onClick={handleBack} className="place-self-end text-gray-300">
        <BackArrow size={20} color={'#5e5e5e'} />
      </button>
      <div className="flex flex-col w-full items-center gap-5 mb-5">
        <div className="flex flex-col gap-6 p-5 w-[70%] border-[1px] border-gray-300">
          <div className="flex flex-row text-gray-500">
            <h1 className="text-gray-700 text-center w-full">{title}</h1>
          </div>
          <div className="flex flex-row text-gray-500">
            <span htmlFor="title">{lang("author")}&nbsp;:&nbsp;</span>
            <h1 className="text-gray-700">{author}</h1>
          </div>
          <div className="flex flex-col text-gray-500 gap-2">
            <span htmlFor="title">{lang("description")}</span>
            <h1 className="text-gray-700">{description}</h1>
          </div>
          <div className="w-full flex justify-end">
            <h3>{requestDate}</h3>
          </div>
        </div>
        <div className="flex flex-col w-[70%] gap-5">
          <div className="flex flex-col w-full gap-3">
            <span className="text-gray-500 px-5">{lang("answerRequest")}</span>
            <textarea
              className="w-full border-[1px] border-gray-300 resize-none min-h-[10rem] p-2 outline-none"
              name=""
              id=""
            ></textarea>
          </div>
          <div className="flex flex-col w-full gap-3">
            <span className="text-gray-500 px-5">{lang("setStatus")}</span>
            <SetStatus previousStatus={0} />
          </div>
          <button className="bg-blue-500 w-fit p-2 rounded-lg text-white hover:bg-opacity-85 place-self-end">
            {lang("click")}
          </button>
        </div>
      </div>
    </div>
  );
}
