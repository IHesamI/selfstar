import React, { useCallback, useRef } from "react";
import { useLang } from "../../../hooks/useLang";
import Avatar from "../Avatar";
import { useSelector } from "react-redux";
import UserLink from "./UserLink";
import AddLink from "./AddLink";

export default function EditProfile() {
  // const user = {name:'حسن',lastName:'قلی زاده'}
  // useSelector((state) => state.user);
  const lang = useLang();
  const inputRef = useRef(null);

  const handleChangePicture = useCallback(() => {
    inputRef.current.click();
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
  }, []);
  return (
    <div
      dir={lang.isRtl ? "rtl" : "ltr"}
      className="flex flex-row mt-10 m-auto justify-start px-[10rem] gap-[15rem] w-full"
    >
      <div className="flex flex-col text-center gap-5 ">
        <Avatar
          image={
            "http://selfstar.sbu.ac.ir/wp-content/uploads/ultimatemember/21/profile_photo-190.jpg?1520178315"
          }
        />
        <button
          onClick={handleChangePicture}
          className="bg-blue-500 text-white py-2 rounded-sm hover:bg-blue-400"
        >
          {lang("newProfilePicture")}
        </button>
        <input ref={inputRef} type="file" className="hidden" />
        <div>
          <AddLink />
          <div className="flex flex-col text-start gap-1 h-[9rem] overflow-y-auto overflow-x-hidden">
            <UserLink title={"Google"} link={"zarp.com"} />
            <UserLink title={"Google"} link={"zarp.com"} />
            <UserLink title={"Google"} link={"zarp.com"} />
          </div>
        </div>
      </div>
      <form method="POST" onSubmit={handleSubmit}>
        <div className="w-max flex flex-col gap-10 mb-5 border-b-[1px] border-gray-600">
          <div className="dashboard-fields-row text-center w-full justify-center bg-gray-600 text-white rounded-t-lg py-1">
            {lang("ProfileTitle")}
          </div>

          <div className="dashboard-fields-row">
            <div className="dashboard-fields-container">
              <label htmlFor="firstName">{lang("name")}</label>
              <input id="firstName" type="text" />
            </div>
            <div className="dashboard-fields-container">
              <label htmlFor="lastName">{lang("lastName")}</label>
              <input id="lastName" type="text" />
            </div>
          </div>
          <div className="dashboard-fields-row">
            <div className="dashboard-fields-container w-full">
              <label htmlFor="email">{lang("email")}</label>
              <input id="email" type="email" />
            </div>
          </div>
          <div className="dashboard-fields-row">
            <div className="dashboard-fields-container">
              <label htmlFor="password">{lang("newPassword")}</label>
              <input id="password" type="password" />
            </div>
            <div className="dashboard-fields-container">
              <label htmlFor="newPassword">{lang("newPasswordConfirm")}</label>
              <input id="newPassword" type="password" />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={lang.changeLang}
              className="w-fit text-white bg-blue-600 px-5 py-2 rounded-md mb-5 hover:bg-blue-700"
            >
              {lang("fillEnglishProfile")}
            </button>
            <button className="w-fit text-white bg-blue-600 px-5 py-2 rounded-md mb-5 hover:bg-blue-700">
              {lang("click")}
            </button>
          </div>
          {/* <div className="dashboard-fields-row text-center w-full justify-center bg-gray-600 text-white rounded-b-sm h-5"></div> */}
        </div>
      </form>
    </div>
  );
}
