import React from "react";
import ProfilePicture from "../../assets/image/ProfilePicture.png";

export default function Avatar({ image }) {
  return (
      <img className="image-container" src={image || ProfilePicture} alt="" />
  );
}
