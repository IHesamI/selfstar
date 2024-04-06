import React, { useCallback, useState } from "react";
import { useLang } from "../../../hooks/useLang";
import Modal from "../../common/Modal";
import EventType from "./EventType";
import BackArrow from "../../../assets/image/BackArrow";

export default function AddEvents({ handleBack }) {
  const lang = useLang();

  return (
    <div className="flex flex-col gap-5 section-padding mt-5 w-full">
      <div className="flex flex-row justify-between text-gray-500 font-bold">
        <h1>{lang('addEvent')}</h1>
        <button onClick={handleBack} className="flex w-fit">
          <BackArrow size={20} color={"#5e5e5e"} />
        </button>
      </div>

      {/* <Modal title={lang("addEvent")} isOpen={isOpen} onClose={handleClose}> */}
      <form className="flex flex-col text-start gap-5 w-full" action="POST">
        <div className="dashboard-fields-row">
          <div className="dashboard-fields-container">
            <label htmlFor="title">{lang("title")}</label>
            <input type="text" id="title" />
          </div>
        </div>
        <div className="dashboard-fields-row">
          <div className="dashboard-fields-container">
            <div className="dashboard-fields-row mb-3">
              <div className="dashboard-fields-container">
                <EventType />
              </div>
            </div>
            <label htmlFor="title">{lang("description")}</label>
            <textarea
              className="border-[1px] border-gray-300 resize-none p-1"
              id="description"
              cols="30"
              rows="5"
            ></textarea>
          </div>
        </div>
        <div className="dashboard-fields-row">
          <div className="dashboard-fields-container">
            <label htmlFor="title">{lang("eventDate")}</label>
            <input type="date" id="date" />
          </div>
        </div>
        <div className="dashboard-fields-row">
          <div className="dashboard-fields-container">
            <label htmlFor="location">{lang("location")}</label>
            <textarea
              className="border-[1px] border-gray-300 resize-none p-1"
              type="location"
              id="text"
            />
          </div>
        </div>
        <button
          // onClick={handleOpen}
          className="w-fit bg-blue-500 p-3 text-white rounded-md flex flex-row gap-1"
        >
          {lang("click")}
        </button>
      </form>
      {/* </Modal> */}
    </div>
  );
}
