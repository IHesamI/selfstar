import React from "react";
import PanelTabButton from "./PanelTabButton";
import Profile from "../../../assets/image/profile.svg";
import upload from "../../../assets/image/upload.svg";
import events from "../../../assets/image/events.svg";
import newRequest from "../../../assets/image/newRequest.svg";
import newArticle from "../../../assets/image/newArticle.svg";
import { useLang } from "../../../hooks/useLang";
export default function DefaultTab() {
  const lang = useLang();
  return (
    <div className="flex flex-row w-full justify-center my-5">
      <div className="flex flex-wrap justify-center items-center w-full gap-5 basis-1/2">
        <PanelTabButton
          title={lang("profile")}
          imgSrc={Profile}
          alt={"پروفایل کاربر سامانه سلف استار"}
        />
        <PanelTabButton
          title={lang("uploadthesis")}
          imgSrc={upload}
          alt={"پایان نامه ها و مقالات سامانه سلف استار"}
        />
        <PanelTabButton
          title={lang("events")}
          imgSrc={events}
          alt={"رویداد ها و سمینار های خود تطبیقی , سامانه سلف استار"}
        />
        <PanelTabButton
          title={lang("newRequest")}
          imgSrc={newRequest}
          alt={"مقالات  سامانه سلف استار"}
        />
        <PanelTabButton
          title={lang("newArticle")}
          imgSrc={newArticle}
          alt={"مقالات  سامانه سلف استار"}
        />
      </div>
    </div>
  );
}
