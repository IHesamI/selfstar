import { useState } from "react";
import { useLang } from "../../../hooks/useLang";
import SelectWithSearch from "./SelectWithSearch";

export default function EventType({choosenStudent}) {
  const lang = useLang();
  const [type, setType] = useState("public");
  const setTypePrivate = (e) => {
    setType("private");
  };
  const setTypePublic = () => {
    setType("public");
  };
  return (
    <div className="flex flex-col gap-2">
      <div
        onClick={setTypePublic}
        className="flex flex-row w-fit gap-3 cursor-pointer"
      >
        <input
          className="pointer-events-none w-fit"
          type="checkbox"
          checked={type == "public"}
          readOnly
        />
        <span>{lang("public")}</span>
      </div>
      <div
        onClick={setTypePrivate}
        className="flex flex-row w-fit gap-3 cursor-pointer"
      >
        <input
          className="pointer-events-none w-fit"
          type="checkbox"
          checked={type == "private"}
          readOnly
        />
        <span>{lang("private")}</span>
      </div>
      {type == "private" ? <SelectWithSearch handleChoose={choosenStudent} /> : <></>}
    </div>
  );
}
