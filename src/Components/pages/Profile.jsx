import React from "react";
import { useParams } from "react-router-dom";
import Avatar from "./Avatar";
import { useLang } from "../../hooks/useLang";

export default function Profile() {
  const { id } = useParams();
  const user = {
    firstName: "رحمان",
    lastName: "امین زاده",
    email: "zarp@gmail.com",
    cv: "B.Sc., IT Engineering, TBU, 2008 - 2012. M.Sc., IT Engineering-Enterprise Architecture, SBU 2012 - 2014. Ph.D. Candidate of Software Engineering, SBU, 2015 - current.",
  };
  const lang = useLang();
  const renderTtile = () => {
    return `${user.firstName} ${user.lastName}`;
  };

  return (
    <div dir={lang.isRtl ? "rtl" : "ltr"} className="section-padding py-10">
      <div className="flex flex-row gap-5">
        <Avatar />
        <div className="flex flex-col h-auto justify-center items-center text-start gap-3 text-gray-500">
          <h1 className="w-full text-gray-700">{renderTtile()}</h1>
          <h2 className="w-full">{user.email}</h2>
          <h3>{user.cv}</h3>
        </div>
      </div>
    </div>
  );
}
