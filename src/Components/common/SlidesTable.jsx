import React, { useCallback, useRef, useState } from "react";

import EditModal from "../common/EditModal";
import DeleteModal from "../common/DeleteModal";
import FileDownloadIcon from "../../assets/image/FileDownloadIcon";
import UploadFile from "./UploadFile";
import { useLang } from "../../hooks/useLang";
import { deleteSlideApi, editSlideApi, sendEvent } from "../../api/apis";
import { downloadPrefixUlr } from "../../config";

export default function SlidesTable({ headers, data, setSlides }) {
  const lang = useLang();
  const [isEditOpen, setisEditOpen] = useState(false);
  
  const [editSlide, setEditSlide] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();
    editSlideApi(editSlide.slide_id, editInputRef.current).then((res) => {
      const resultSlide = res.data;
      setSlides((slides) =>
        slides.map((slide) => {
          if (resultSlide.slide_id == slide.slide_id) return resultSlide;
          return slide;
        })
      );
    }).finally(()=>setisEditOpen(false));
  };
  // const handleInput=useCallback((key,value)=>{},[]);
  const editInputRef = useRef({});
  const onEditOpen = (id) => {
    setEditSlide(data.find((item) => item.slide_id == id));
  };
  const handleInput = (key, value) => {
    editInputRef.current = { ...editInputRef.current, [key]: value };
  };
  const handleDelete = (id) => {
    sendEvent("click", "delete-slide");
    deleteSlideApi(id).then(() => {
      setSlides((slides) => slides.filter((item) => item.slide_id != id));
    });
  };
  return (
    <>
      <table className="table max-h-[35rem]">
        <thead>
          <tr className="border-[1px] border-gray-500 border-collapse">
            {headers.map((item) => (
              <th
                key={item}
                className="text-start border-[1px] p-1 border-gray-300 border-collapse "
              >
                {lang(item)}
              </th>
            ))}
          </tr>
        </thead>
        {data.length != 0 ? (
          <tbody>
            {data.map((slide, index) => (
              <tr key={slide.slide_id} className="text-gray-700">
                {headers.map((field) => {
                  return field == "file" ? (
                    <td key={field} className="file">
                      <a
                        className="flex flex-row p-3 gap-2 hover:bg-gray-100 cursor-pointer"
                        href={
                          slide["file_url"]
                            ? `${downloadPrefixUlr}${slide["file_url"]}`
                            : ""
                        }
                      >
                        <FileDownloadIcon color={"#121212"} />
                        <span>{lang("download")}</span>
                      </a>
                    </td>
                  ) : field != "action" ? (
                    <td key={field} className={`${field}`}>
                      {slide[field]}
                    </td>
                  ) : (
                    <td key={field}>
                      <div className="flex flex-row items-center justify-center gap-2">
                        <EditModal
                          isEditOpen={isEditOpen}
                          setisEditOpen={setisEditOpen}
                          onOpenClick={onEditOpen}
                          id={slide.slide_id}
                          modalTitle={lang("editSlide")}
                          title={slide["title"]}
                          description={slide["description"]}
                        >
                          <form action="PUT" onSubmit={(e) => handleSubmit(e)}>
                            <div className="flex flex-col text-start gap-5">
                              <div className="dashboard-fields-row">
                                <div className="dashboard-fields-container">
                                  <label htmlFor="title">{lang("title")}</label>
                                  <input
                                    id="title"
                                    type="text"
                                    defaultValue={editSlide.title}
                                    onChange={(e) =>
                                      handleInput("title", e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="dashboard-fields-row">
                                <div className="dashboard-fields-container">
                                  <label htmlFor="slideBody">
                                    {lang("description")}
                                  </label>
                                  <textarea
                                    className="border-[1px] border-gray-400 h-[7rem] resize-none p-1"
                                    id="slideBody"
                                    defaultValue={editSlide.description}
                                    onChange={(e) =>
                                      handleInput("description", e.target.value)
                                    }
                                  ></textarea>
                                </div>
                              </div>
                              <div className="dashboard-fields-row">
                                <UploadFile />
                              </div>
                              <button
                                type="submit"
                                className="bg-blue-600 px-3 py-2 text-white w-fit rounded-lg"
                              >
                                {lang("click")}
                              </button>
                            </div>
                          </form>
                        </EditModal>
                        <DeleteModal
                          handleDelete={handleDelete}
                          id={slide.slide_id}
                          modalTitle={lang("deleteslideTitle")}
                          text={lang("deleteslide")}
                        />
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        ) : (
          <tfoot className="table-row-group w-full h-[3rem] relative">
            <div className="absolute w-full top-3 text-center pointer-events-none">
              <span className="text-gray-500">{lang("noslide")}</span>
            </div>
          </tfoot>
        )}
      </table>
    </>
  );
}
