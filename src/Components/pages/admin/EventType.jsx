import React, { useState } from "react";

export default function EventType() {
  const [type, setType] = useState(null);
  const setTypePrivate = (e) => {
    setType(e.target.checked ? "private":'');
  };
  const setTypePublic = (e) => {
    setType(e.target.checked ? "public":'');
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row w-fit  gap-3">
        <input onChange={setTypePublic} type="checkbox" checked={type=='public'} className="w-fit" />
        <span>عمومی</span>
      </div>
      <div className="flex flex-row w-fit gap-3">
        <input onChange={setTypePrivate} type="checkbox" checked={type=='private'} className="w-fit" />
        <span>شخصی</span>
      </div>
    </div>
  );
}
