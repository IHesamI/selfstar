import React from "react";
import { useLang } from "../../hooks/useLang";
import { Status } from "../../config";

export default function StatusComp({status}) {
    const lang=useLang();
    return (
    <td>
      <div className="flex justify-center">
        <span
          className={`${
            Status[status]
          } badge h-fit p-1 text-center items-center`}
        >
          {lang(Status[status])}
        </span>
      </div>
    </td>
  );
}
