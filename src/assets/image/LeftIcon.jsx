import React from "react";

export default function LeftIcon({ color = "white", rotation }) {
  return (
    <svg
      style={{ transform: rotation && "rotate(180deg)" }}
      height="25px"
      fill={color}
      id="Layer_1"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 " />
    </svg>
  );
}
