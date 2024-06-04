import ProfilePicture from "../../assets/image/ProfilePicture.png";
import { downloadPrefixUlr } from "../../config";

export default function Avatar({ image, canDelete }) {
  return (
    <img
      className={`image-container ${
        image && canDelete ? "hover:opacity-85 hover:cursor-pointer" : ""
      }`}
      src={image ? `${downloadPrefixUlr}${image}` : ProfilePicture}
      onDoubleClick={canDelete ? canDelete : null}
      alt=""
    />
  );
}
