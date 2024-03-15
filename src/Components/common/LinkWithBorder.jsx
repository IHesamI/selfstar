import React from "react";
import "./common.css";
export default function LinkWithBorder({ link, title }) {
  return (
    <div className="link-with-border">
      <a href={link}>{title}</a>
    </div>
  );
}
