import React from "react";
import DeleteModal from "../../common/DeleteModal";
import { useLang } from "../../../hooks/useLang";

export default function EventsTable({ headers, data }) {
  const lang = useLang();
  const handleDelete = () => {
    // TODO
  };
  return (
    <>
      <table className="table max-h-[35rem] w-full">
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
              <tr key={index} className="text-gray-700">
                {headers.map((field) => {
                  return field == "file" ? (
                    <td key={field} className="file">
                      <a
                        className="flex flex-row p-3 gap-2 hover:bg-gray-100"
                        href={slide[field]}
                      >
                        {/* <FileDownloadIcon color={"#121212"} /> */}
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
                        <DeleteModal
                          modalTitle={lang("deleteEventTitle")}
                          text={lang("deleteEvent")}
                          handleDelete={handleDelete}
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
