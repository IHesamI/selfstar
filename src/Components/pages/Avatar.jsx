import ProfilePicture from "../../assets/image/profilePicture.png";
import { downloadPrefixUlr } from "../../config";

export default function Avatar({ image, canDelete ,imageInput}) {
  return (
    <img
      className={`image-container ${
        image && canDelete ? "hover:opacity-85 hover:cursor-pointer" : ""
      }`}
      src={
        imageInput
          ? imageInput
          : image
          ? `${downloadPrefixUlr}${image}`
          : ProfilePicture
      }
      onDoubleClick={canDelete ? canDelete : null}
      alt=""
    />
  );
}
