import React from "react";
import "./section.css";
import { useLang } from "../hooks/useLang";
import logo from "../assets/image/Persian_Logo.png";
import LinkWithBorder from "./common/LinkWithBorder";

export default function Footer() {
  const lang = useLang();
  return (
    <div
      dir={lang.isRtl ? "rtl" : "ltr"}
      className="text-white bg-[var(--footer-background)] section-padding py-[3rem] flex flex-row text-justify gap-[2rem] text-xs sm:flex-col"
    >
      <div className="footer-column-container">
        <h4 className="footer-column-title">{lang("aboutUs")}</h4>
        <div className="border-b-[1px] border-b-white pb-3 px-5 w-fit">
          <img src={logo} alt="آزمایشگاه خود تبطیقی داشنگاه شهید بهشتی" />
        </div>
        <p className="text-[14px] leading-7">
          آزمایشگاه سلف‌استار با هدف ارائه چارچوب، استاندارد و بسترهاي
          نرم‌افزاري خودتطبیق براي سازمان‌ها و شرکت‌هاي دولتي توسط تني چند از
          اساتيد، فارغ‌التحصيلان و دانشجويان دانشکده مهندسی و علوم کامپيوتر
          دانشگاه شهيد بهشتي که در زمينه سیستم های خودتطبیق فعاليت مي‌نمايند،
          شکل گرفته است.
        </p>
        <a className="hover:text-blue-600" href="about-us">
          {lang("continue")}
        </a>
      </div>
      <div className="footer-column-container">
        <h4 className="footer-column-title">{lang("newArticles")}</h4>
        <div>
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
      <div className="footer-column-container">
        <h4 className="footer-column-title">
          {lang("categories")}
          <div>
            <LinkWithBorder title={lang("slides")} link={"/123123"} />
            <LinkWithBorder title={lang("thesis")} link={"/123123"} />
            <LinkWithBorder title={lang("seminar")} link={"/123123"} />
            <LinkWithBorder title={lang("articles")} link={"/123123"} />
          </div>
        </h4>
      </div>
    </div>
  );
}
