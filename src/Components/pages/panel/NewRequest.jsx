import React from "react";
import AddRequests from "./AddRequests";
import RequestsTable from "../../common/RequestsTable";
import { Status } from "../../../config";

export default function NewRequest() {
  return (
    <div className="flex flex-col section-padding w-full pt-7 mb-6 gap-5">
      <AddRequests />
      <div className="max-h-[40rem] overflow-y-auto">
        <RequestsTable
          headers={["title", "description", "status", "action"]}
          data={[
            {
              title: "درخواست تعیین زمان دفاع پایان نامه",
              description:
                "سلام وقت شما بخیر لطفا برای جلسه دفاع پایان نامه برای ماه آینده زمانی را برای من تعیین کنید",
              status: 0,
            },
            {
              title: "درخواست بررسی اسلاید های دوره جلسه دفاع",
              description:
                "سلام وقت بخیر لطفا اسلاید های مورد نظر را بررسی کرده و به من اطلاع دهید",
              status: 2,
            },
            {
              title: "درخواست تایید دانشجو",
              description:
                "رحمان امین زاده درخواست تایید دسترسی به اکانت را دارد.رحمان امین زاده درخواست تایید دسترسی به اکانت را دارد.رحمان امین زاده درخواست تایید دسترسی به اکانت را دارد.رحمان امین زاده درخواست تایید دسترسی به اکانت را دارد.رحمان امین زاده درخواست تایید دسترسی به اکانت را دارد.",
              status: 1,
            },
            {
              title: "درخواست تمدید زمان پروژه",
              description:
                "سلام وقت شما بخیر با توجه به مشکلات پیش آمده لطفا زمان پروژه را تمدید کنید متشکرم.",
              status: 3,
            },
          ]}
        />
      </div>
    </div>
  );
}
