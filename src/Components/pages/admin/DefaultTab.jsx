import { useEffect, useState } from "react";
import RequestsComponent from "./RequestsComponent";
import { getAllEventsApi, getAllRequestsApi, getDeactives } from "../../../api/apis";
import { formatTime } from "../../../Utils/timeUtil";
import ShowActiveRequestTable from "./showActiveRequestTable";
import { convertToTableData } from "../../../Utils/convertDeactives";
export default function DefaultTab() {
  
  const [events, setEvents] = useState([]);
  const [deactives, setDeactives] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getAllRequestsApi();
      const properEvent = response.data.map(item=>({...item,event_time:formatTime(item.event_time)}))
      setEvents(properEvent);
      const deactivesResponse = await getDeactives();
      console.error(convertToTableData(deactivesResponse.data));
      setDeactives(convertToTableData(deactivesResponse.data));
    };
    fetchEvents();
  }, []);
console.error(deactives);
  return (
    <div className="flex flex-col gap-10 w-full">
      <RequestsComponent data={events} langKey={"newRequests"} />
      <ShowActiveRequestTable setData={setDeactives}  data={deactives} headers={["title"]} />
    </div>
  );
}
