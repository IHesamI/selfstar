import React from "react";
import { useLang } from "../../hooks/useLang";

export default function Contents({ title, description, link }) {
  const lang = useLang();

  return (
    <div
      dir={lang.isRtl ? "ltr" : "rtl"}
      className="flex flex-col items-end w-[49%] rounded-lg border-gray-400 border-[1px] p-2 xlg:w-full justify-between"
    >
      <div className="flex flex-col gap-3">
        <div className="bg-blue-500 p-2 rounded-lg text-white max-w-[50%] text-ellipsis w-fit whitespace-nowrap overflow-hidden place-self-end">
          <h4
            className="text-ellipsis overflow-hidden"
            dir={lang.isRtl ? "rtl" : "ltr"}
          >
            {title}
          </h4>
        </div>
        <div className="mb-3">
          <p
            dir={lang.isRtl ? "rtl" : "ltr"}
            className="text-justify content-description"
          >
            {description}
          </p>
        </div>
      </div>
      <a
        className="flex items-end self-start bg-blue-500 p-2 text-white rounded-lg"
        href={link}
      >
        <div>{lang("continue")}</div>
      </a>
    </div>
  );
}
