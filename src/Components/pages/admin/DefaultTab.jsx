import React, { useCallback, useState } from "react";
import { useLang } from "../../../hooks/useLang";
import RequestTable from "./RequestTable";
import AnswerRequest from "./AnswerRequest";
export default function DefaultTab() {
  const lang = useLang();
  const [data, SetData] = useState([
    {
      title: "درخواست تایید دانشجو",
      description: "رحمان امین زاده درخواست تایید دسترسی به اکانت را دارد.",
      requestDate: "1403/01/17",
      author: "رحمان امین زاده",
    },
    {
      title: "درخواست تعیین زمان جلسه دفاع",
      description:
        "سلام وقت شما بخیر درخواست تعیین جلسه دفاع را برای هفته آینده داشتم ",
      requestDate: "1403/03/25",
      author: "مژده صالحی",
    },
  ]);
  const [requestToRespond, setRequestToRespond] = useState(null);
  const handleSelectRequest = useCallback((index) => {
    setRequestToRespond(index);
  }, []);
  const handleDeselect = useCallback(() => {
    setRequestToRespond(null);
  }, []);
  return (
    <div className="section-padding pt-5 w-full">
      {requestToRespond != null ? (
        <AnswerRequest
          handleBack={handleDeselect}
          data={data[requestToRespond]}
        />
      ) : (
        <div className="flex flex-col gap-5">
          <h1 className="text-gray-500">{lang("newRequests")}</h1>
          <RequestTable
            onSelectRow={handleSelectRequest}
            headers={["title", "description", "requestDate"]}
            data={data}
          />
        </div>
      )}
    </div>
  );
}
