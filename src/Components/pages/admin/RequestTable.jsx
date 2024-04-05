import React from "react";
import { useLang } from "../../../hooks/useLang";
import RequestTableRow from "./RequestTableRow";

export default function RequestTable({ headers, data, onSelectRow }) {
  const lang = useLang();
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
              <RequestTableRow
              onSelect={onSelectRow}
                request={request}
                headers={headers}
                index={index}
              />
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
