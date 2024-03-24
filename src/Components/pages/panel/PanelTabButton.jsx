import React from "react";

export default function PanelTabButton({ title, imgSrc, alt }) {
  return (
    <div
      title={title}
      className="flex flex-row justify-center p-5 border-[1px] rounded-lg hover:shadow-lg cursor-pointer"
    >
      <img className="w-[96px]" src={imgSrc} alt={alt} />
    </div>
  );
}
