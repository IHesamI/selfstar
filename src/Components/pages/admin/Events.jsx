import React, { useState, useCallback } from "react";
import AddEvents from "./AddEvents";
import NewEvent from "../../../assets/image/NewEvent";
import { useLang } from "../../../hooks/useLang";

export default function Events() {
  const lang = useLang();

  const [isOpen, setIsOpen] = useState(true);
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
        <div className="section-padding mt-5">
          <button
            onClick={handleOpen}
            className="bg-blue-500 p-3 text-white rounded-md flex flex-row gap-1"
          >
            <NewEvent color="white" />
            {lang("addEvent")}
          </button>
        </div>
      )}
    </>
  );
}
