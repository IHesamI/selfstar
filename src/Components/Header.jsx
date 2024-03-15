import React, { useEffect } from "react";
import { useLang } from "../hooks/useLang";
import logo from "../assets/image/Persian_Logo.png";
import "./section.css";
export default function Header() {
  const lang = useLang();
  useEffect(() => {}, [window.location]);
  return (
    <div className="flex flex-row justify-between pt-2 section-padding">
      <a href="">
        <img src={logo} alt="آزمایشگاه خود تبطیقی داشنگاه شهید بهشتی" />
      </a>
      <div dir="rtl" className="flex flex-row gap-3">
        <a href="">{lang("homePage")}</a>
        <a href="/">{lang("contents")}</a>
        <a href="/">{lang("aboutUs")}</a>
        <a href="/">{lang("members")}</a>
        <a href="/">{lang("signIn")}</a>
      </div>
    </div>
  );
}
