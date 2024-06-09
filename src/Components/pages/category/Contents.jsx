import { useEffect, useState } from "react";
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
import { getArticleByIdApi, getSlideByIdApi, getThesisByIdApi, sendEvent } from "../../../api/apis";
import { formatTime } from "../../../Utils/timeUtil";
import { downloadPrefixUlr } from "../../../config";

export default function Contents() {
  const lang = useLang();
  const { id, category } = useParams();

  const [contentData, setContentData] = useState(null);
  console.error();
  const getDataByCategory = async () => {
    switch (category) {
      case "articles":
        return getArticleByIdApi(id);
      case "slides":
        return getSlideByIdApi(id);
      case "thesis":
        return getThesisByIdApi(id);
    }
  };

  useEffect(() => {
    const fetchData = () => {
      getDataByCategory().then((res) => {
        console.error(res);
        if (!res.data) return;
        const { data } = res;
        let info = { ...data, ...data.user.profiles };
        setContentData(info);
      });
    };
    fetchData();
  }, []);

  function prettyCategories() {
    return (
      lang("categories") + " " + lang(category)
    );
  }

  function renderAuthor() {
    return lang("writer") + " " + `${contentData?.name_fa} ${contentData?.last_name_fa}`;
  }
  return (
    <div className="section-padding pb-3 sm:mt-5 sm:gap-3">
      {contentData && (
        <div
          dir={lang.isRtl ? "rtl" : "ltr"}
          className="flex flex-col sm:gap-3"
        >
          <div className="flex flex-row gap-1">
            <img
              className="w-16 h-16 rounded-full"
              src={
                contentData?.avatar_url
                  ? `${downloadPrefixUlr}${contentData?.avatar_url}`
                  : profilePicture
              }
              alt={contentData?.avatar_url}
            />
            <div className="flex flex-col justify-center gap-3">
              <h2>{renderAuthor()}</h2>
              <div className="flex flex-row gap-3 text-gray-500 text-[10px]">
                {formatTime(contentData.createAt)}
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
          {contentData?.file_url && (
            <div className="flex flex-col gap-3">
              <button
                onClick={() => sendEvent("click", "download")}
                className="hover:text-blue-600 text-right"
              >
                <a href={`${downloadPrefixUlr}${contentData.file_url}`}>
                  {lang("download")}
                </a>
              </button>
              {/* <div>{lang("downloadCounter")}</div> */}
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
