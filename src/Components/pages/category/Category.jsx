import React from "react";
import { Outlet } from "react-router-dom";
import "../pages.css";
import { useLang } from "../../../hooks/useLang";
import LinkWithBorder from "../../common/LinkWithBorder";

export default function Category() {
  const lang = useLang();
  return (
    <div
      dir={lang.isRtl ? "rtl" : "ltr"}
      className="flex flex-row section-padding"
    >
      <div className="category-search-section border-[1px] border-gray-300 rounded-lg w-min h-fit">
        <div
          dir={lang.isRtl ? "rtl" : "ltr"}
          className="relative flex flex-row"
        >
          <div className="absolute start-0">
            <button>
              <svg
                className="fill-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32px"
                height="32px"
              >
                <path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z" />
              </svg>
            </button>
          </div>
          <input
            placeholder={lang("search")}
            className={`border-[1px] border-gray-300 rounded-sm block ${
              lang.isRtl ? "pr-[2rem]" : "pl-[2rem]"
            } outline-none pb-[0.5rem]`}
            type="text"
          />
        </div>
        <div className="flex flex-col text-gray-500">
          <p className="text-[10px] mt-[3rem]">{lang("recentContent")}</p>
          <div className="text-[13px]">
            <LinkWithBorder
              title={
                "ارائه مدلی برای انتخاب بهترین الگوی سازماندهی برای سامانه های چندعاملی با توجه به شرایط محیطی در زمان اجرا"
              }
              link={"/123123"}
            />
            <LinkWithBorder
              title={
                "یک راهکار برای اجرای سیاست های ترمیمی در مولفه های سرویس دارای نقص، با درنظرداشتن اهداف سراسری فرایند"
              }
              link={"/123123"}
            />
            <LinkWithBorder
              title={"خودسازماندهی در سیستم‌های چندعامله"}
              link={"/123123"}
            />
            <LinkWithBorder
              title={
                "ارائه مدلی برای دستیابی به خودتطبیقی در سیستم های مدیریت ارتباط با مشتری"
              }
              link={"/123123"}
            />
          </div>
        </div>
        <div className="date-container">
          <p className="text-[10px] mt-[3rem]">{lang("history")}</p>
          <div className="flex flex-col text-gray-500">
            <a href="/">{lang.dateConverter("10", "1398")}</a>
            <a href="/">{lang.dateConverter("3", "1398")}</a>
            <a href="/">{lang.dateConverter("12", "1396")}</a>
            <a href="/">{lang.dateConverter("7", "1396")}</a>
            <a href="/">{lang.dateConverter("12", "1395")}</a>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
