import UploadFile from "../../common/UploadFile";
import { useLang } from "../../../hooks/useLang";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { postThesisApi } from "../../../api/apis";

export default function ThesisUpload() {
  const lang = useLang();
  const {profile} = useSelector((state) => state.user);
  const thesisRef = useRef({});
  
  const onInput = (key, value) => {
    thesisRef.current = { ...thesisRef.current, [key]: value };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postThesisApi({ ...thesisRef.current, user_id: 1 }).then((res) =>
      console.error(res.data)
    );
  };

  return (
    <form onSubmit={handleSubmit} method="post" className="flex flex-col section-padding w-full mb-10 ">
      <div className="flex flex-col pt-5 w-full gap-5">
        <h1 className="pt-[1rem] pb-[1rem]">{lang("uploadthesis")}</h1>
        <div className="flex flex-col pt-5 w-[60%] gap-5 text-gray-700 border-t-[1px]">
          <div className="flex flex-col gap-1">
            <label htmlFor="title">{lang("thesisTitle")}</label>
            <input
              onChange={(e) => onInput("title", e.target.value)}
              className="w-full border-[1px] p-1 border-gray-500 outline-none resize-none rounded-sm"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="description">{lang("description")}</label>
            <textarea
              className="w-full border-[1px] p-1 border-gray-500 outline-none resize-none rounded-sm"
              name=""
              id="description"
              cols="30"
              rows="10"
              onChange={(e) => onInput("description", e.target.value)}
            ></textarea>
          </div>
        </div>
        <UploadFile />
      </div>
      <div className="w-[60%] flex justify-end">
        <button type="submit" className="w-fit flex flex-row gap-4 bg-blue-600 p-3 rounded-lg items-center text-white hover:bg-opacity-85">
          {lang("click")}
        </button>
      </div>
    </form>
  );
}
