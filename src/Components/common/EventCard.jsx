import React from "react";
import DateIcon from "../../assets/image/DateIcon";
import SchoolIcon from "../../assets/image/SchoolIcon";

export default function EventCard({ title, date, location }) {
  return (
    <div className=" pointer-events-none flex flex-col gap-5 shadow-lg w-full max-w-[19rem] overflow-hidden max-h[100%] p-4">
      <h1 className="select-none event-card-title pointer-events-none">
        {title}
      </h1>
      <div className="text-start flex flex-row gap-5 items-start select-none">
        <span>
          <DateIcon color="#909090" />
        </span>
        {date}
      </div>
      <div className="flex flex-row gap-5 text-start select-none items-start">
        <span>
          <SchoolIcon color="#909090" />
        </span>
        {location}
      </div>
    </div>
  );
}
