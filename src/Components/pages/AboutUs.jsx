import React, { useEffect } from "react";
import { useLang } from "../../hooks/useLang";
import currentReasearch from "../../assets/image/current-research-1.jpg";
import groupServices from "../../assets/image/selfstar-group-services-2.jpg";
import sendMailIcon from "../../assets/image/sendMail.png";
import Location from "../../assets/image/location.png";
import link from "../../assets/image/link.png";

export default function AboutUs() {
  useEffect(() => {}, []);
  const lang = useLang();
  function handleEmailCopy() {
    navigator.clipboard.writeText("nazemi@sbu.ac.ir");
  }
  return (
    <div
      dir={lang.isRtl ? "rtl" : "ltr"}
      className="flex flex-col section-padding gap-5"
    >
      <h1 className="font-normal text-[20px] my-10">{lang("aboutUsTitle")}</h1>
      <p className="flex text-gray-400 text-justify">
        گروه تحقیقاتی سلف‌استار از سال ۱۳۸۷ با هدف ارائه چارچوب، استاندارد و
        بسترهای نرم‌افزاری خودتطبیق برای سازمان‌ها و شرکت‌های دولتی توسط تنی چند
        از اساتید، فارغ‌التحصیلان و دانشجویان دانشکده برق و کامپیوتر دانشگاه
        شهید بهشتی که در زمینه سیستم های خودتطبیق فعالیت می‌نمایند، شکل گرفته
        است. این گروه به سرپرستی دکتر اسلام ناظمی در دانشکده مهندسی و علوم
        کامپیوتر دانشگاه شهید بهشتی در حال فعالیت است. در حال حاضر تعدادی از
        اعضای گروه فارغ‌التحصیل شده و تعدادی دیگر مشغول فعالیت هستند که جزییات
        آن‌ها از اینجا در دسترس است. به طور کلی زمینه‌های فعالیت گروه در شکل زیر
        قابل مشاهده است:
      </p>
      <img
        src={currentReasearch}
        alt="گروه تحقیقاتی سلف استار دانشگاه شهید بهشتی"
      />
      <div className="text-[10px] mt-1 mb-[5rem]">{lang("creator")}</div>
      <p className="flex text-[15px] text-gray-500 text-justify">
        همچنین گروه تخقیقاتی سلف‌‌استار خدمات تجاری و آکادمیک مختلفی را نیز
        ارائه می‌دهد که اهم آن‌ها در شکل زیر قابل ملاحظه است:
      </p>
      <img
        src={groupServices}
        alt="گروه تحقیقاتی سلف استار دانشگاه شهید بهشتی"
      />
      <div className="text-[10px] mt-1 mb-[5rem]">{lang("creator")}</div>
      <div className="flex flex-row mb-5 gap-[5rem]">
        <div className="flex flex-col gap-5 w-min">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.4264994681657!2d51.39369261920803!3d35.80233259436246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e062a032efa25%3A0x569ba59d4107186e!2sFaculty%20of%20Computer%20Engineering%20and%20Science%2C%20SBU!5e0!3m2!1sen!2sam!4v1710870129050!5m2!1sen!2sam"
            width="600"
            height="450"
            style={{ border: 0, outline: "none" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col border-[1px] border-gray-300 p-5 rounded-lg gap-6 h-fit">
            <h1 className="font-bold mb-3">{lang("contactUs")}</h1>
            <div className="flex flex-row gap-3">
              <img
                className="w-8 h-8 bg-gray-300 rounded-full p-1 "
                src={Location}
                alt=""
              />
              <p>{lang("address")}</p>
            </div>
            <div
              className="flex flex-row gap-3 cursor-pointer"
              onClick={handleEmailCopy}
              title={lang("copyEmail")}
            >
              <img
                className="w-8 h-8 bg-gray-300 rounded-full p-1 "
                src={sendMailIcon}
                alt=""
              />
              <p>nazemi@sbu.ac.ir</p>
            </div>
          </div>
          <div className="flex flex-col border-[1px] border-gray-300 p-5 rounded-lg gap-6 h-fit">
            <h1 className="font-bold mb-3">{lang("moreInfo")}</h1>
            <div className="flex flex-row gap-3">
              <img
                className="w-8 h-8 bg-gray-300 rounded-full p-1 "
                src={link}
                alt=""
              />
              <a href="">
                <p>{lang("selfStarhistory")}</p>
              </a>
            </div>
            <div className="flex flex-row gap-3">
              <img
                className="w-8 h-8 bg-gray-300 rounded-full p-1 "
                src={link}
                alt=""
              />
              <a href="">
                <p>{lang("selfSystems")}</p>
              </a>
            </div>
            <div className="flex flex-row gap-3">
              <img
                className="w-8 h-8 bg-gray-300 rounded-full p-1 "
                src={link}
                alt=""
              />
              <a href="">
                <p>{lang("selfAnalysersSystems")}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
