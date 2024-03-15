import React, { useEffect } from "react";
import { useLang } from "../hooks/useLang";
import { useDispatch } from "react-redux";
import logo from "../assets/image/Persian_Logo.png";
import "./section.css";
import world from "../assets/image/world.png";
import { setLang } from "../Store/store";
export default function Header() {
  const dispatch = useDispatch();
  const lang = useLang();
  useEffect(() => {
    console.error(window.location);
  }, [window.location]);
  function handleChangeLang() {
    const resultlang = lang.isRtl ? "en" : "fa";
    console.error("wtf", resultlang);
    dispatch(setLang({ lang: resultlang }));
  }
  return (
    <div
      dir={lang.isRtl ? "ltr" : "rtl"}
      className="flex flex-row justify-between py-5 section-padding"
    >
      <a href="">
        <img src={logo} alt="آزمایشگاه خود تطبیق داشنگاه شهید بهشتی" />
      </a>
      <div dir={lang.isRtl ? "rtl" : "ltr"} className="links-section flex flex-row gap-5">
        <a href="">{lang("homePage")}</a>
        <a href="/">{lang("contents")}</a>
        <a href="/">{lang("aboutUs")}</a>
        <a href="/">{lang("members")}</a>
        <a href="/">{lang("signIn")}</a>
        <button
          onClick={handleChangeLang}
          className="flex flex-row items-center gap-1"
        >
          <img
            className="w-4 h-4"
            src={world}
            alt="آزمایشگاه تطبیق دانشگاه شهید بهشتی"
          />
          {lang("language")}
        </button>
      </div>
    </div>
  );
}
