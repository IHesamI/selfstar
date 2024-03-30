import React, { useState } from "react";
import { useLang } from "../../../hooks/useLang";
import Modal from "../../common/Modal";

export default function DeleteLink() {
  const [isOpen, setisOpen] = useState(false);
  const lang = useLang();

  const handleClose = () => {
    setisOpen(false);
  };

  const openModal = () => {
    setisOpen(true);
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        title={lang("deleteLinkTitle")}
      >
        <div className="flex flex-col text-start gap-7">
          <p>{lang("deleteLink")}</p>
          <div className="flex flex-row justify-between">
            <button className="bg-red-600 px-3 py-2 text-white w-fit rounded-lg hover:bg-red-800">
              {lang("click")}
            </button>
            <button
              onClick={handleClose}
              className="bg-blue-600 hover:bg-blue-700 px-3 py-2 text-white w-fit rounded-lg"
            >
              {lang("cancel")}
            </button>
          </div>
        </div>
      </Modal>
      <button onClick={openModal}>
        <svg
          className="hover:fill-black"
          fill="#ff0000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="15px"
          height="15px"
        >
          <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" />
        </svg>
      </button>
    </>
  );
}
