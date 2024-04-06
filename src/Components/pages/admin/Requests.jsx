import React, { useCallback } from "react";
import { useLang } from "../../../hooks/useLang";
import RequestTable from "./RequestTable";

export default function Requests() {
  const lang = useLang();
  const data = [
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
  ];
  const handleSelectRequest = useCallback(() => {}, []);
  return (
    <div className="section-padding mt-5 w-full flex flex-col gap-5">
      <h1 className="text-gray-500">{lang("allRequests")}</h1>
      <RequestTable
        onSelectRow={handleSelectRequest}
        headers={["title", "description", "requestDate"]}
        data={data}
      />
    </div>
  );
}
