import { useEffect, useState } from "react";
import RequestsComponent from "./RequestsComponent";
import { getAllEventsApi, getDeactives } from "../../../api/apis";
import { formatTime } from "../../../Utils/timeUtil";
import ShowActiveRequestTable from "./showActiveRequestTable";
export default function DefaultTab() {
  
  const [events, setEvents] = useState([]);
  const [deactives, setDeactives] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getAllEventsApi();
      const properEvent = response.data.map(item=>({...item,event_time:formatTime(item.event_time)}))
      setEvents(properEvent);
      const deactives = await getDeactives();
      console.error(deactives);
      setDeactives(deactives);
    };
    fetchEvents();
  }, []);

  return (
    <>
      <RequestsComponent data={events} langKey={"newRequests"} />
      <ShowActiveRequestTable headers={[]} />
    </>
  );
}
