import React from "react";
import { useLang } from "../hooks/useLang";

export default function CopyRight() {
  const lang = useLang();
  return (
    <div
      dir={lang.isRtl ? "rtl" : "ltr"}
      className="text-white flex flex-row justify-between bg-[var(--copy-right-background)] section-padding py-4"
    >
      <p>{lang("copyRight")}</p>
      &#174;
    </div>
  );
}
