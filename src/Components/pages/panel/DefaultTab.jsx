import React from "react";
import PanelTabButton from "./PanelTabButton";
import Profile from "../../../assets/image/profile.svg";
import upload from "../../../assets/image/upload.svg";
import events from "../../../assets/image/events.svg";
import newRequest from "../../../assets/image/newRequest.svg";
import newArticle from "../../../assets/image/newArticle.svg";
import { useLang } from "../../../hooks/useLang";
import { dashbaordTabs } from "../../../config";
export default function DefaultTab({ handleSelectTab }) {
  const lang = useLang();
  return (
    <div className="flex flex-row w-full justify-center my-5">
      <div className="flex flex-wrap justify-center items-center w-full gap-5 basis-1/2">
        <PanelTabButton
          title={lang("profile")}
          imgSrc={Profile}
          alt={"پروفایل کاربر سامانه سلف استار"}
          handleSelectTab={handleSelectTab}
          tab={dashbaordTabs.profile}
        />
        <PanelTabButton
          title={lang("uploadthesis")}
          imgSrc={upload}
          alt={"پایان نامه ها و مقالات سامانه سلف استار"}
          handleSelectTab={handleSelectTab}
          tab={dashbaordTabs.uploadThesis}
        />
        <PanelTabButton
          title={lang("eventsAndSlides")}
          imgSrc={events}
          alt={"رویداد ها و سمینار های خود تطبیقی , سامانه سلف استار"}
          handleSelectTab={handleSelectTab}
          tab={dashbaordTabs.events}
        />
        <PanelTabButton
          title={lang("newRequest")}
          imgSrc={newRequest}
          alt={"مقالات  سامانه سلف استار"}
          handleSelectTab={handleSelectTab}
          tab={dashbaordTabs.newRequest}
        />
        <PanelTabButton
          title={lang("newArticle")}
          imgSrc={newArticle}
          alt={"مقالات  سامانه سلف استار"}
          handleSelectTab={handleSelectTab}
          tab={dashbaordTabs.newArticle}
        />
      </div>
    </div>
  );
}
