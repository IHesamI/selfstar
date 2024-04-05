import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLang } from "../../hooks/useLang";
import { dashbaordTabs } from "../../config";
import EditProfile from "./panel/EditProfile";
import Events from "./panel/Events";
import NewArticles from "./panel/NewArticles";
import NewRequest from "./panel/NewRequest";
import ThesisUpload from "./panel/thesisUpload";
import DefaultTab from "./panel/DefaultTab";

export default function Dashboard() {
  const lang = useLang();
  const [leftColumn, setLeftColumn] = useState(null);
  const handleChangeTab = (tab) => {
    setLeftColumn(tab);
  };
  const navigate = useNavigate();
  const renderTab = useCallback(() => {
    switch (leftColumn) {
      case dashbaordTabs.profile:
        return <EditProfile />;

      case dashbaordTabs.events:
        return <Events />;

      case dashbaordTabs.newArticle:
        return <NewArticles />;

      case dashbaordTabs.newRequest:
        return <NewRequest />;

      case dashbaordTabs.uploadThesis:
        return <ThesisUpload />;
      default:
        return <DefaultTab handleSelectTab={handleChangeTab} />;
    }
  }, [leftColumn]);
  const handleExit = useCallback(() => {
    // TODO DESTORY UserSlice
    navigate("/login");
  }, []);
  return (
    <div dir={lang.isRtl ? "rtl" : "ltr"} className="flex flex-row sm:flex-col">
      <div className="flex flex-col sm:flex-row w-max bg-[var(--footer-background)] text-white">
        <button
          onClick={() => handleChangeTab(dashbaordTabs.profile)}
          className={`dashboard-tab-button border-t-[1px] border-gray-600 py-3 ${
            dashbaordTabs.profile == leftColumn && "bg-gray-500"
          }`}
        >
          {lang("profile")}
        </button>
        <button
          onClick={() => handleChangeTab(dashbaordTabs.newRequest)}
          className={`dashboard-tab-button ${
            dashbaordTabs.newRequest == leftColumn && "bg-gray-500"
          }`}
        >
          {lang("requests")}
        </button>
        <button
          onClick={() => handleChangeTab(dashbaordTabs.newArticle)}
          className={`dashboard-tab-button ${
            dashbaordTabs.newArticle == leftColumn && "bg-gray-500"
          }`}
        >
          {lang("articles")}
        </button>
        <button
          onClick={() => handleChangeTab(dashbaordTabs.uploadThesis)}
          className={`dashboard-tab-button ${
            dashbaordTabs.uploadThesis == leftColumn && "bg-gray-500"
          }`}
        >
          {lang("uploadthesis")}
        </button>
        <button
          onClick={() => handleChangeTab(dashbaordTabs.events)}
          className={`dashboard-tab-button ${
            dashbaordTabs.events == leftColumn && "bg-gray-500"
          }`}
        >
          {lang("eventsAndSlides")}
        </button>
        <button
          className="dashboard-tab-button flex flex-row justify-between"
          onClick={handleExit}
        >
          {lang("exit")}
        </button>
        <button
          onClick={() => handleChangeTab(undefined)}
          className="dashboard-tab-button flex flex-row justify-between"
        >
          {lang("back")}
          <svg
            style={{ transform: !lang.isRtl && "rotate(180deg)" }}
            height="16px"
            fill="white"
            id="Layer_1"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
          </svg>
        </button>
      </div>
      {renderTab()}
    </div>
  );
}
