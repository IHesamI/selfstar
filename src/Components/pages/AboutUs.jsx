import React, { useEffect } from "react";
import { useLang } from "../../hooks/useLang";
import currentReasearch from "../../assets/image/current-research-1.jpg";
import groupServices from "../../assets/image/selfstar-group-services-2.jpg";
import sendMailIcon from "../../assets/image/sendMail.png";
import Location from "../../assets/image/location.png";
import link from "../../assets/image/link.png";
import { useSelector } from "react-redux";

export default function AboutUs() {
  useEffect(() => {}, []);
  const lang = useLang();
  const { aboutUs } = useSelector((state) => state.site);
  function handleEmailCopy() {
    navigator.clipboard.writeText("nazemi@sbu.ac.ir");
  }
  console.error(aboutUs);
  return (
    <div
      dir={lang.isRtl ? "rtl" : "ltr"}
      className="flex flex-col section-padding gap-5"
    >
      <h1 className="font-normal text-[20px] my-10">{lang("aboutUsTitle")}</h1>
      <p className="flex text-gray-400 text-justify">
        {aboutUs[lang.langType][0]}
      </p>
      <img
        src={currentReasearch}
        alt="گروه تحقیقاتی سلف استار دانشگاه شهید بهشتی"
        />
      <div className="text-[10px] mt-1 mb-[5rem]">{lang("creator")}</div>
      <p className="flex text-[15px] text-gray-500 text-justify">
      {aboutUs[lang.langType][1]}
        </p>
      <img
        src={groupServices}
        alt="گروه تحقیقاتی سلف استار دانشگاه شهید بهشتی"
      />
      <div className="text-[10px] mt-1 mb-[5rem]">{lang("creator")}</div>
      <div className="flex flex-row medium:flex-col sm:flex-col mb-5 gap-[5rem]">
        <div className="flex flex-col gap-5 w-min">
          <iframe
            className="w-[600px] h-[450px] medium:w-[400px] medium:h-[400px] sm:w-[300px] sm:h-[300px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d821.4264994681657!2d51.39369261920803!3d35.80233259436246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e062a032efa25%3A0x569ba59d4107186e!2sFaculty%20of%20Computer%20Engineering%20and%20Science%2C%20SBU!5e0!3m2!1sen!2sam!4v1710870129050!5m2!1sen!2sam"
            style={{ border: 0, outline: "none" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
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
              <p className="flex h-full justify-center items-center">
                nazemi@sbu.ac.ir
              </p>
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
              <a className="hover:text-blue-600" href="">
                <p>{lang("selfStarhistory")}</p>
              </a>
            </div>
            <div className="flex flex-row gap-3">
              <img
                className="w-8 h-8 bg-gray-300 rounded-full p-1 "
                src={link}
                alt=""
              />
              <a className="hover:text-blue-600" href="">
                <p>{lang("selfSystems")}</p>
              </a>
            </div>
            <div className="flex flex-row gap-3">
              <img
                className="w-8 h-8 bg-gray-300 rounded-full p-1 "
                src={link}
                alt=""
              />
              <a className="hover:text-blue-600" href="">
                <p>{lang("selfAnalysersSystems")}</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
