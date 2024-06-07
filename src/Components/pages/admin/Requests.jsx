import { useEffect, useState } from "react";
import RequestsComponent from "./RequestsComponent";
import { getAllRequestsApi } from "../../../api/apis";
export default function Requests() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchRequests = () => {
      getAllRequestsApi().then((res) => setData(res.data));
    };
    fetchRequests();
  }, []);
  return <RequestsComponent data={data} langKey={"allRequests"} />;
}
