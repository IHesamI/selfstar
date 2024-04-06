import React, { useState, useCallback } from "react";
import AddEvents from "./AddEvents";
import NewEvent from "../../../assets/image/NewEvent";
import { useLang } from "../../../hooks/useLang";
import EventsTable from "./EventsTable";

export default function Events() {
  const lang = useLang();

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
          <EventsTable headers={["title", "description","eventDate",'location','action']} data={[
            {
              title:"همایش بین المللی خود تطبیقی",
              description:"    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus id omnis qui iure accusamus, libero eveniet amet! Laborum alias totam consequuntur perspiciatis eos, doloribus temporibus tenetur ipsa ea quibusdam.",
              eventDate:'1403/05/23',
              location:"    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus id omnis qui iure accusamus, libero eveniet amet! Laborum alias totam consequuntur perspiciatis eos, doloribus temporibus tenetur ipsa ea quibusdam.",

            }
          ]} />
        </div>
      )}
    </>
  );
}
