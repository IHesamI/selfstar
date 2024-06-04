import  { useCallback, useRef, useState } from "react";
import Modal from "../../common/Modal";
import { useLang } from "../../../hooks/useLang";

export default function AddLink({setLinks}) {
  const lang = useLang();
  const [isOpen, setisOpen] = useState(false);
  const formRef=useRef({});
  const handleClose = useCallback(() => {
    setisOpen(false);
  }, []);

  const hanldeChange = (key, value) => {
    formRef.current = { ...formRef.current, [key]: value };
  };

  const handleClick = () => {
    setLinks((state) => [...state, formRef.current]);
    setisOpen(false);
  };
  

  return (
    <div className="">
      <Modal isOpen={isOpen} onClose={handleClose} title={lang("addLinkTitle")}>
        <div
          dir={lang.isRtl ? "rtl" : "ltr"}
          className="flex flex-col text-start gap-5"
        >
          <div className="dashboard-fields-row">
            <div className="dashboard-fields-container">
              <label htmlFor="firstName">{lang("title")}</label>
              <input id="title" type="text" onChange={(e)=>{hanldeChange('title',e.target.value)}}/>
            </div>
          </div>
          <div className="dashboard-fields-row">
            <div className="dashboard-fields-container">
              <label htmlFor="link">{lang("link")}</label>
              <input id="link" type="text"  onChange={(e)=>{hanldeChange('link',e.target.value)}}/>
            </div>
          </div>
          <button
          onClick={handleClick}
          className="bg-blue-600 px-3 py-2 text-white w-fit rounded-lg">
            {lang("click")}
          </button>
        </div>
      </Modal>
      <button
        onClick={() => {
          setisOpen(true);
        }}
        className="flex flex-row hover:bg-blue-400 bg-blue-500 text-white p-2 px-5 w-full text-center justify-center gap-2 rounded-t-lg"
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
        <h3 className="flex items-center text-start text-white self-stretch">
          {lang("addLink")}
        </h3>
      </button>
    </div>
  );
}
