import { useState, useCallback } from "react";
import { useLang } from "../../hooks/useLang";
import { adminTabs } from "../../config";
import Events from "./admin/Events";
import Requests from "./admin/Requests";
import DefaultTab from "./admin/DefaultTab";
import Students from "./admin/Students";
import { useNavigate } from "react-router-dom";
import Index from "./admin/SiteEditing/Index";
import ChartLogs from "./panel/ChartLogs";

export default function Admin() {
  const lang = useLang();
  const navigate = useNavigate();
  function handleExit() {
    return navigate("/login");
  }
  const [leftColumn, setLeftColumn] = useState(adminTabs.chartLogs);
  const handleChangeTab = (tab) => {
    setLeftColumn(tab);
  };
  const renderTab = useCallback(() => {
    switch (leftColumn) {
      case adminTabs.events:
        return <Events />;
      case adminTabs.requests:
        return <Requests />;
      case adminTabs.siteEdit:
        return <Index />;
      case adminTabs.students:
        return <Students />;
      case adminTabs.chartLogs:
        return <ChartLogs/>;
      default:
        return <DefaultTab />;
    }
  }, [leftColumn]);
  return (
    <div dir={lang.isRtl ? "rtl" : "ltr"} className="flex flex-row sm:flex-col h-max min-h-max">
      <div className="flex flex-col sm:flex-row w-max bg-[var(--footer-background)] h-[100vh] min-h-full sm:min-h-fit sm:h-fit text-white">
        <button
          onClick={() => handleChangeTab(adminTabs.requests)}
          className={`dashboard-tab-button ${
            adminTabs.requests == leftColumn && "bg-gray-500"
          }`}
        >
          {lang("requests")}
        </button>
        <button
          onClick={() => handleChangeTab(adminTabs.siteEdit)}
          className={`dashboard-tab-button ${
            adminTabs.siteEdit == leftColumn && "bg-gray-500"
          }`}
        >
          {lang("editSite")}
        </button>
        <button
          onClick={() => handleChangeTab(adminTabs.events)}
          className={`dashboard-tab-button ${
            adminTabs.events == leftColumn && "bg-gray-500"
          }`}
        >
          {lang("events")}
        </button>
        <button
          onClick={() => handleChangeTab(adminTabs.chartLogs)}
          className={`dashboard-tab-button ${
            adminTabs.chartLogs == leftColumn && "bg-gray-500"
          }`}
        >
          {lang("chartLogs")}
        </button>
        {/* <button
          onClick={() => handleChangeTab(adminTabs.students)}
          className={`dashboard-tab-button ${
            adminTabs.students == leftColumn && "bg-gray-500"
          }`}
        >
          {lang("students")}
        </button> */}
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
