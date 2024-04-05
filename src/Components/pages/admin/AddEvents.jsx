import React, { useCallback, useState } from "react";
import { useLang } from "../../../hooks/useLang";
import NewEvent from "../../../assets/image/NewEvent";
import Modal from "../../common/Modal";
import EventType from "./EventType";

export default function AddEvents() {
  const lang = useLang();
  const [isOpen, setIsOpen] = useState(true);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  return (
    <div className="section-padding mt-5">
      <Modal title={lang("addEvent")} isOpen={isOpen} onClose={handleClose}>
        <form className="flex flex-col text-start gap-5" action="POST">
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
              <label htmlFor="title">{lang("description")}</label>
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
            onClick={handleOpen}
            className="w-fit bg-blue-500 p-3 text-white rounded-md flex flex-row gap-1"
          >
            {lang("click")}
          </button>
        </form>
      </Modal>
      <button
        onClick={handleOpen}
        className="bg-blue-500 p-3 text-white rounded-md flex flex-row gap-1"
      >
        <NewEvent color="white" />
        {lang("addEvent")}
      </button>
    </div>
  );
}
