import React, { useState, useCallback, useEffect } from "react";
import AddEvents from "./AddEvents";
import NewEvent from "../../../assets/image/NewEvent";
import { useLang } from "../../../hooks/useLang";
import EventsTable from "./EventsTable";
import { getAllEventsApi} from "../../../api/apis";
import { formatTime } from "../../../Utils/timeUtil";

export default function Events() {
  const lang = useLang();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getAllEventsApi();
      const properEvent = response.data.map(item=>({...item,event_time:formatTime(item.event_time)}))
      setEvents(properEvent);
    };
    fetchEvents();
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleBack = useCallback(() => {
    setIsOpen(false);
  }, []);
  return (
    <>
      {isOpen ? (
        <AddEvents handleBack={handleBack} />
      ) : (
        <div className="section-padding mt-5 w-full gap-5 flex flex-col">
          <button
            onClick={handleOpen}
            className="w-fit bg-blue-500 p-3 text-white rounded-md flex flex-row gap-1 hover:opacity-80"
          >
            <NewEvent color="white" />
            {lang("addEvent")}
          </button>
          <EventsTable
            headers={[
              "title",
              "description",
              "event_time",
              "location",
              "action",
            ]}
            data={events}
          />
        </div>
      )}
    </>
  );
}
