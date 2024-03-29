import React from "react";

export default function PanelTabButton({ title, imgSrc, alt }) {
  return (
    <div
      title={title}
      className="grid text-center gap-4 justify-center w-[11rem] pt-5 px-5 border-[1px] rounded-lg hover:shadow-lg cursor-pointer"
    >
      <img className="w-[96px] justify-self-center" src={imgSrc} alt={alt} />
      <p className="border-t-[1px] mb-2 pt-1 items-center">{title}</p>
    </div>
  );
}
