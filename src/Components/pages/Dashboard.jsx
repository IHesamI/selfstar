import React from "react";
import { useLang } from "../../hooks/useLang";

export default function Dashboard() {
  const lang = useLang();
  return (
    <div dir={lang.isRtl ? "rtl" : "ltr"} className="flex flex-row">
      <div className="flex flex-col">
        <button>{lang("profile")}</button>
        <button>{lang("newRequest")}</button>
        <button>{lang("profile")}</button>
        <button>{lang("profile")}</button>
        <button>{lang("profile")}</button>
      </div>
      <div>leftCol</div>
    </div>
  );
}
