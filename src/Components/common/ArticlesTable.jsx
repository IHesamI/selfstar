import React from "react";
import { useLang } from "../../hooks/useLang";
import { Status } from "../../config";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import FileDownloadIcon from "../../assets/image/FileDownloadIcon";
import UploadFile from "./UploadFile";

export default function ArticlesTable({ headers, data }) {
  const lang = useLang();
  //   function renderField(field) {
  //     const result = lang(field);
  //     if (result) {
  //       return result;
  //     } else {
  //       return field;
  //     }
  //   }

  return (
    <>
      <table className="table max-h-[35rem]">
        <thead>
          <tr className="border-[1px] border-gray-500 border-collapse">
            {headers.map((item, index) => (
              <th
                key={index}
                className="text-start border-[1px] p-1 border-gray-300 border-collapse "
              >
                {lang(item)}
              </th>
            ))}
          </tr>
        </thead>
        {data.length != 0 ? (
          <tbody>
            {data.map((article,index) => (
              <tr key={index} className="text-gray-700">
                {Object.keys(article).map((field) => {
                  return field == "file" ? (
                    <td key={field} className="file">
                      <a
                        className="flex flex-row p-3 gap-2 hover:bg-gray-100"
                        href={article[field]}
                      >
                        <FileDownloadIcon color={"#121212"} />
                        <span>{lang("download")}</span>
                      </a>
                    </td>
                  ) : (
                    <td key={field} className={`${field}`}>
                      {article[field]}
                    </td>
                  );
                })}
                <td className="w-[10%]">
                  <div className=" flex flex-row items-center justify-center gap-2">
                    <EditModal modalTitle={lang("editArticle")}>
                      <form action="">
                        <div className="flex flex-col text-start gap-5">
                          <div className="dashboard-fields-row">
                            <div className="dashboard-fields-container">
                              <label htmlFor="title">{lang("title")}</label>
                              <input id="title" type="text" />
                            </div>
                          </div>
                          <div className="dashboard-fields-row">
                            <UploadFile />
                          </div>
                          <button className="bg-blue-600 px-3 py-2 text-white w-fit rounded-lg">
                            {lang("click")}
                          </button>
                        </div>
                      </form>
                    </EditModal>
                    <DeleteModal
                      modalTitle={lang("deleteArticleTitle")}
                      text={lang("deleteArticle")}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tfoot className="table-row-group w-full h-[3rem] relative">
            <div className="absolute w-full top-3 text-center pointer-events-none">
              <span className="text-gray-500">{lang("noarticle")}</span>
            </div>
          </tfoot>
        )}
      </table>
    </>
  );
}
