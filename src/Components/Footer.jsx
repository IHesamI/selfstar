import React, { useEffect, useState } from "react";
import "./section.css";
import { useLang } from "../hooks/useLang";
import logo from "../assets/image/Persian_Logo.png";
import LinkWithBorder from "./common/LinkWithBorder";
import { useSelector } from "react-redux";
import { getLatestCategoriesApi } from "../api/apis";

export default function Footer() {
  const lang = useLang();
  const {footer}=useSelector(state=>state.site)
  const [latestArticles, setlatestArticles] = useState([]);
  useEffect(() => {
    const fetchLatest = async () => {
      const result = await getLatestCategoriesApi();
      setlatestArticles(result.data)
    };
    fetchLatest();
  }, []);
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
        <p className="text-[14px] leading-7">{footer[lang.langType]}</p>
        <a className="hover:text-blue-600" href="about-us">
          {lang("continue")}
        </a>
      </div>
      <div className="footer-column-container">
        <h4 className="footer-column-title">{lang("newArticles")}</h4>
        <div>
          {latestArticles.map((article) => (
            <LinkWithBorder
              key={article.article_id}
              title={article.title}
              link={`/category/${article.id}`}
            />
          ))}
        </div>
      </div>
      <div className="footer-column-container">
        <h4 className="footer-column-title">
          {lang("categories")}
          <div>
            <LinkWithBorder title={lang("slides")} link={"/category/slides"} />
            <LinkWithBorder title={lang("thesis")} link={"/category/thesis"} />
            {/* <LinkWithBorder title={lang("seminar")} link={"/123123"} /> */}
            <LinkWithBorder
              title={lang("articles")}
              link={"/category/articles"}
            />
          </div>
        </h4>
      </div>
    </div>
  );
}
