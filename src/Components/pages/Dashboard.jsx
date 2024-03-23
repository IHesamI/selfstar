import React, { useState } from "react";
import { useLang } from "../../hooks/useLang";
import { dashbaordTabs } from "../../config";
import EditProfile from "./panel/EditProfile";
import Events from "./panel/Events";
import NewArticles from "./panel/NewArticles";
import NewRequest from "./panel/NewRequest";
import ThesisUpload from "./panel/thesisUpload";

export default function Dashboard() {
  const lang = useLang();
  const [leftColumn, setLeftColumn] = useState(dashbaordTabs.Profile);

  const renderTab = () => {
    switch (leftColumn) {
      case dashbaordTabs.Profile:
        return <EditProfile />;

      case dashbaordTabs.events:
        return <Events />;

      case dashbaordTabs.newArticle:
        return <NewArticles />;

      case dashbaordTabs.newRequest:
        return <NewRequest />;

      case dashbaordTabs.uploadThesis:
        return <ThesisUpload />;
    }
  };

  const handleChangeTab = (tab) => {
    setLeftColumn(tab);
  };
  return (
    <div dir={lang.isRtl ? "rtl" : "ltr"} className="flex flex-row">
      <div className="flex flex-col w-max bg-[var(--footer-background)] text-white">
        <button
          onClick={() => handleChangeTab(dashbaordTabs.Profile)}
          className="dashboard-tab-button border-t-[1px] border-gray-600 py-3"
        >
          {lang("profile")}
        </button>
        <button
          onClick={() => handleChangeTab(dashbaordTabs.newRequest)}
          className="dashboard-tab-button"
        >
          {lang("newRequest")}
        </button>
        <button
          onClick={() => handleChangeTab(dashbaordTabs.newArticle)}
          className="dashboard-tab-button"
        >
          {lang("newArticle")}
        </button>
        <button
          onClick={() => handleChangeTab(dashbaordTabs.uploadThesis)}
          className="dashboard-tab-button"
        >
          {lang("uploadthesis")}
        </button>
        <button
          onClick={() => handleChangeTab(dashbaordTabs.events)}
          className="dashboard-tab-button border-b-0"
        >
          {lang("events")}
        </button>
      </div>
      <div>{renderTab()}</div>
    </div>
  );
}
