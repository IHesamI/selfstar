import React, { useEffect } from "react";
import { useLang } from "../hooks/useLang";
import { useDispatch } from "react-redux";
import logo from "../assets/image/Persian_Logo.png";
import "./section.css";
import world from "../assets/image/world.png";
import menu from "../assets/image/menu.png";
import { setLang } from "../Store/store";
export default function Header() {
  const dispatch = useDispatch();
  const lang = useLang();
  useEffect(() => {}, [window.location]);

  return (
    <div
      dir={lang.isRtl ? "ltr" : "rtl"}
      className="header-container flex flex-row justify-between py-5 section-padding shadow-md"
    >
      <a href="#">
        <img src={logo} alt="آزمایشگاه خود تطبیق داشنگاه شهید بهشتی" />
      </a>
      <div className="lg:hidden  peer">
        <button data-dropdown-toggle="dropdown" id="dropdownDefaultButton">
          <img
            className="w-4 h-4 flex items-center"
            src={menu}
            alt="آزمایشگاه خودتطبیق دانشگاه شهید بهشتی"
          />
        </button>
      </div>
      <div
        dir={lang.isRtl ? "rtl" : "ltr"}
        className="links-section focus-within::flex flex-row gap-5 sm:dropdown-menu lg:flex peer-has-[:focus]:flex sm:shadow-lg"
      >
        <a href="#">{lang("homePage")}</a>
        <div className="flex flex-col relative items-center sm:items-start justify-center group sm:w-full">
          <div className=" hover:text-blue-600 cursor-pointer z-20 sm:w-full sm:border-b-[1px] sm:border-gray-500">
            {lang("contents")}
          </div>
          <div
            className={`absolute sm:sticky w-max  ${
              lang.isRtl ? "right-[-3rem]" : "left-[-3rem]"
            } z-10 pt-[6rem] hidden group-hover:flex hover:flex sm:flex-col sm:pt-0 sm:w-full`}
          >
            <div className=" bg-gray-500 text-black sm:w-full sm:bg-white sm:text-black gap-5 flex flex-row sm:flex-col sm:border-none sm:text-start border-t-blue-500  border-t-[2px]">
              <a className="header-dropdown-menu " href="#/category/seminar">
                {lang("seminar")}
              </a>
              <a className="header-dropdown-menu " href="#/category/articles">
                {lang("articles")}
              </a>
              <a className="header-dropdown-menu " href="#/category/thesis">
                {lang("thesis")}
              </a>
              <a className="header-dropdown-menu " href="#/category/slides">
                {lang("slides")}
              </a>
            </div>
          </div>
        </div>
        <a href="#/about-us">{lang("aboutUs")}</a>
        <a href="#/members">{lang("members")}</a>
        <a href="#/login">{lang("signIn")}</a>
        <button
          onClick={lang.changeLang}
          className="flex flex-row items-center gap-1 hover:text-blue-600 z-10"
        >
          <img
            className="w-4 h-4"
            src={world}
            alt="آزمایشگاه خودتطبیق دانشگاه شهید بهشتی"
          />
          {lang("language")}
        </button>
      </div>
    </div>
  );
}
