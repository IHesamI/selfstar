import React from "react";
import { useLang } from "../../hooks/useLang";

export default function ErrorPage() {
  const lang = useLang();
  return (
    <div className="w-full h-full flex flex-col justify-center items-center py-[7rem] pointer-events-none">
      <h1 className="text-[10rem] text-gray-500">404</h1>
      <h1 className="text-[3rem] text-gray-400">{lang("padgeNotFound")}</h1>
    </div>
  );
}
