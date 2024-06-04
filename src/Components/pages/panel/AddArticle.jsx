import React, { useRef, useState } from "react";
import Modal from "../../common/Modal";
import { useLang } from "../../../hooks/useLang";
import UploadFile from "../../common/UploadFile";
import { postArticleApi, uploadFile } from "../../../api/apis";

export default function AddArticle({setArticles}) {
  const lang = useLang();

  const [open, setOpen] = useState(false);
  const inputRef=useRef({});
  const handleSubmit = (e) => {
    e.preventDefault();
    postArticleApi({ ...inputRef.current, user_id: 1 })
      .then((res) => {
        uploadFile('article',inputFile.current,1)
        return res;
      })
      .finally(handleClose);
  };

  const handleInput = (key, value) => {
    inputRef.current = { ...inputRef.current, [key]: value };
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const inputFile=useRef();
  return (
    <>
      <Modal onClose={handleClose} isOpen={open} title={lang("addArtcile")}>
        <form onSubmit={handleSubmit} className="form-add h-[13rem]" action="POST">
          <div className="flex flex-col text-start gap-5">
            <div className="dashboard-fields-row">
              <div className="dashboard-fields-container">
                <label htmlFor="title">{lang("title")}</label>
                <input id="title" type="text" onChange={(e)=>handleInput('title',e.target.value)}/>
              </div>
            </div>
            <div className="dashboard-fields-row">
              <div className="dashboard-fields-container">
                <UploadFile inputFile={inputFile} />
              </div>
            </div>
            <button type="submit" className="bg-blue-600 px-3 py-2 text-white w-fit rounded-lg">
              {lang("click")}
            </button>
          </div>
        </form>
      </Modal>
      <button
        onClick={handleOpen}
        className=" w-fit bg-blue-600 text-white p-4 flex flex-row gap-1 rounded-lg hover:shadow-lg"
      >
        <svg
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="25px"
          height="25px"
        >
          <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z" />
        </svg>
        {lang("newArticle")}
      </button>
    </>
  );
}
