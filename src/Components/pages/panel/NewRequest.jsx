import React, { useEffect, useState } from "react";
import AddRequests from "./AddRequests";
import RequestsTable from "../../common/RequestsTable";
import { Status } from "../../../config";
import { getRequestApi } from "../../../api/apis";

export default function NewRequest() {
  const [requests,setRequests]=useState([]);
  useEffect(() => {
    const fetchRquests = () => {
      getRequestApi(1).then((res) => setRequests(res.data));
    };
    fetchRquests();
  });
  return (
    <div className="flex flex-col section-padding w-full pt-7 mb-6 gap-5">
      <AddRequests setRequests={setRequests} />
      <div className="max-h-[40rem] overflow-y-auto">
        <RequestsTable
          headers={["title", "description", "status", "action"]}
          data={requests}
          setRequests={setRequests}
        />
      </div>
    </div>
  );
}
