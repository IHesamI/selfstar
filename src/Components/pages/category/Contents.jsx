import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLang } from "../../../hooks/useLang";
import profilePicture from "../../../assets/image/profilePicture.png";
import {
  XIcon,
  FacebookIcon,
  TelegramIcon,
  WhatsappIcon,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

export default function Contents() {
  const lang = useLang();
  const { id } = useParams();

  const [contentData, setContentData] = useState(null);

  useEffect(() => {
    console.error(id);
    setTimeout(() => {
      setContentData({
        author: "مژده توسلی",
        title: "هم‌جوشی اطلاعات در سامانه‌های چندعامله‌ی خودتطبیق",
        downloadLink: "/123213123",
        publishedDate: "اسفند ۵ام, ۱۳۹۶",
        categories: ["seminar"],
        description:
          "سامانه‌های چندعامله یا MAS ترکیبی از چندین عامل هستند که هریک از این عامل‌ها برای انجام بخشی از وظایف و در راستای رسیدن به یک هدف سراسری عمل می‌کنند. سامانه‌های چندعامله در زمینه‌هایی که نیاز به استفاده از محاسبات پیچیده داشته باشد می‌توانند به‌خوبی عمل کنند. گاهی سامانه‌های چندعامله می‌توانند بهتر از سیستم‌های متمرکز وظایفی را انجام دهند. زیرا این سیستم از چندین عامل بهره می‌گیرد که هریک از این عامل‌ها بخشی از مسئله را حل می‌کنند یکی از ویژگی‌های سامانه‌های چندعامله این است که می‌توان انواع کنترل‌ها را بر روی آن اعمال کرد، بنابراین می‌توان خودتطبیقی را بر این سامانه اعمال نمود. یک سامانه‌ی خودتطبیق باید بتواند مولفه‌های تحت کنترل خود را پایش و تحلیل کند، درمورد آن مولفه براساس دانش موجود تصمیم‌گیری کند و نتایج را در اختیار بخش اجرا قرار دهد تا این بخش تغییرات لازم را بر روی هریک از مولفه‌ها اعمال نماید.         هریک از عامل‌ها در سامانه‌های چندعامله توانایی‌های ادراکی، ابزارهای حسگر متفاوت و موقعیت مکانی متفاوتی دارند و قادر هستند با این توانایی‌ها، اطلاعاتی را درمورد پیرامون خود جمع‌آوری کنند. یکی از چالش‌هایی که در تجمیع اطلاعات این عامل‌ها وجود دارد، متضاد بودن داده‌هایی است که هریک از این عامل‌ها درمورد بخش‌های مشترک جمع‌آوری می‌کنند. بنابراین این مشکل توسط هم‌جوشی اطلاعات و استراتژی‌های آن حل می‌شود.",
      });
    }, 0);
  }, []);

  function prettyCategories() {
    return (
      lang("categories") + " " + contentData.categories.map(lang).join(" ,")
    );
  }

  function renderAuthor() {
    return lang("writer") + " " + contentData?.author;
  }

  return (
    <div className="section-padding pb-3 sm:mt-5 sm:gap-3">
      {contentData && (
        <div dir={lang.isRtl ? "rtl" : "ltr"} className="flex flex-col sm:gap-3">
          <div className="flex flex-row gap-1">
            <img
              className="w-16 h-16 rounded-full"
              src={contentData?.authorImg || profilePicture}
              alt={contentData?.author}
            />
            <div className="flex flex-col justify-center gap-3">
              <h2>{renderAuthor()}</h2>
              <div className="flex flex-row gap-3 text-gray-500 text-[10px]">
                {contentData.publishedDate}
                <div className="flex border-l-[1px] border-gray-300" />
                {prettyCategories()}
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl mb-4">{contentData?.title}</h1>
            <p className="text-sm leading-10 text-gray-400 text-justify">
              {contentData?.description}
            </p>
          </div>
          {contentData?.downloadLink && (
            <div className="flex flex-col gap-3">
              <button className="hover:text-blue-600 text-right">
                {lang("download")}
              </button>
              <div>{lang("downloadCounter")}</div>
            </div>
          )}

          <div className="flex flex-row justify-center sm:w-full mt-5">
            <form
              action="POST"
              className="comment-form flex flex-col sm:flex-col sm:gap-3 sm:w-full border-[1px] sm:border-none text-gray-500 border-gray-300 p-5 gap-5"
            >
              <div>{lang("comment")}</div>
              <div className="flex flex-row gap-5 sm:flex-col">
                <textarea
                  className="outline-none border-gray-300 border-[1px] rounded-md resize-none p-1"
                  name=""
                  id=""
                  cols="70"
                  rows="10"
                ></textarea>
                <div className="flex flex-col justify-between sm:flex-col">
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="email">{lang("email")}</label>
                      <input type="email" name="email" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="name">{lang("name")}</label>
                      <input type="text" name="name" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-end sm:mt-5">
                    <button className="bg-blue-500 text-white py-2 px-3 rounded-lg">
                      {lang("click")}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-row items-center justify-between border-b-[1px] mb-3 border-gray-300 mt-3 p-3">
            <p>{lang("shareLink")}</p>
            <div className="flex flex-row">
              <TwitterShareButton url={window.location}>
                <XIcon size={32} />
              </TwitterShareButton>
              <FacebookShareButton url={window.location}>
                <FacebookIcon size={32} />
              </FacebookShareButton>
              <TelegramShareButton url={window.location}>
                <TelegramIcon size={32} />
              </TelegramShareButton>
              <WhatsappShareButton url={window.location}>
                <WhatsappIcon size={32} />
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
