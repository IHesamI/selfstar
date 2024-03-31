import React from "react";
import { useLang } from "../../hooks/useLang";
import { Status } from "../../config";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

export default function RequestsTable({ headers, data }) {
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
            {data.map((request, index) => (
              <tr key={index} className="text-gray-700">
                {Object.keys(request).map((field) => {
                  return field == "status" ? (
                    <td key={field}>
                      <div className="flex justify-center">
                        <span
                          className={`${
                            Status[request[field]]
                          } badge h-fit p-1 text-center items-center`}
                        >
                          {lang(Status[request[field]])}
                        </span>
                      </div>
                    </td>
                  ) : (
                    <td key={field} className={`${field}`}>
                      {request[field]}
                    </td>
                  );
                })}
                <td>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <EditModal
                      modalTitle={lang("editRequest")}
                      title={request["title"]}
                      description={request["description"]}
                    >
                      <form action="">
                        <div className="flex flex-col text-start gap-5">
                          <div className="dashboard-fields-row">
                            <div className="dashboard-fields-container">
                              <label htmlFor="title">{lang("title")}</label>
                              <input id="title" type="text" />
                            </div>
                          </div>
                          <div className="dashboard-fields-row">
                            <div className="dashboard-fields-container">
                              <label htmlFor="requestBody">
                                {lang("description")}
                              </label>
                              <textarea
                                className="border-[1px] border-gray-400 h-[7rem] resize-none p-1"
                                id="requestBody"
                              ></textarea>
                            </div>
                          </div>
                          <button className="bg-blue-600 px-3 py-2 text-white w-fit rounded-lg">
                            {lang("click")}
                          </button>
                        </div>
                      </form>
                    </EditModal>
                    <DeleteModal
                      modalTitle={lang("deleteRequestTitle")}
                      text={lang("deleteRequest")}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tfoot className="table-row-group w-full h-[3rem] relative">
            <div className="absolute w-full top-3 text-center pointer-events-none">
              <span className="text-gray-500">{lang("noRequest")}</span>
            </div>
          </tfoot>
        )}
      </table>
    </>
  );
}
