import React, { useState } from "react";
import UserLink from "../pages/panel/UserLink";
import AddLink from "../pages/panel/AddLink";

export default function LinkContainer({links,setLinks}) {

  return (
    <div className="w-full">
      <AddLink setLinks={setLinks} />
      <div className="flex flex-col text-start gap-1 h-[9rem] max-w-[13rem] overflow-y-auto overflow-x-hidden">
        {links.map((item, index) => (
          <UserLink
            key={item.title + item.link + index}
            index={index}
            setLinks={setLinks}
            title={item.title}
            link={item.link}
          />
        ))}
        {/* <UserLink title={"Google"} link={"google.com"} />
          <UserLink title={"ایران داک"} link={"iranDoc.ir"} />
          <UserLink title={"Google"} link={"google.com"} />
          <UserLink title={"Google"} link={"google.com"} />
          <UserLink title={"Google"} link={"google.com"} />
          <UserLink title={"Google"} link={"google.com"} />
          <UserLink title={"Google"} link={"google.com"} />
          <UserLink title={"Google"} link={"google.com"} />
          <UserLink title={"Google"} link={"google.com"} />
          <UserLink title={"Google"} link={"google.com"} /> */}
      </div>
    </div>
  );
}
