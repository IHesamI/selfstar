import React from "react";
import { Status } from "../../../config";
import { useLang } from "../../../hooks/useLang";

export default function SetStatus({ previousStatus ,onChange}) {
  const lang = useLang();
  return (
    <div className="flex flex-row justify-center gap-5">
      {Object.entries(Status)
        .filter(([_, status]) => status != "seen")
        .map(([statusKey, status]) => (
          <div key={status}>
            <div
              className={`flex justify-center cursor-pointer p-1 gap-1`}
              onClick={() => {
                onChange(statusKey);
              }}
            >
              <input
                className="pointer-events-none"
                type="checkbox"
                checked={statusKey == previousStatus}
              />
              <span
                className={`${status} badge h-fit p-1 text-center items-center`}
              >
                {lang(status)}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}
