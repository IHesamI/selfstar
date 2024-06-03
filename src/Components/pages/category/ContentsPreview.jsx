import React from "react";
import { useLang } from "../../../hooks/useLang";
import "../pages.css";
export default function ContentsPreview({
  categories,
  title,
  description,
  publishedDate,
  link,
}) {
  const lang = useLang();
  function prettyCategories() {
    return lang("categories") + " " + categories.map(lang).join(" ,");
  }

  return (
    <div className="flex flex-col max-w-[40%] sm:max-w-full xsm:max-w-[90%]">
      <a className="hover:text-blue-600" href={link}>
        <h2 className="text-[25px]">{title}</h2>
      </a>
      <div className="flex flex-row gap-3 text-gray-500 text-[10px] mt-3 mb-7">
        {publishedDate}
        <div className="flex border-l-[1px] border-gray-300" />
        {prettyCategories()}
      </div>
      <p className="text-gray-400  text-justify contnet-description">
        {description}
      </p>
      <a className="pt-[1rem] text-[13px] hover:text-blue-600" href={link}>
        {lang("continue")}
      </a>
    </div>
  );
}
