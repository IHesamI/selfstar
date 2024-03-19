import React from "react";
import "./common.css";
export default function LinkWithBorder({ link, title,color='white' }) {
  return (
    <div className={`link-with-border  border-b-[${color}]`}>
      <a href={link}>{title}</a>
    </div>
  );
}
