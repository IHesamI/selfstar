import PDFIcon from "../../../assets/image/PDFIcon";
import { downloadPrefixUlr } from "../../../config"

export default function ResumeFile({resume_url }) {
  return (
    <div className="flex flex-row mt-5 gap-5">
      <a className="peer" href={`${downloadPrefixUlr}${resume_url}`}>
        <PDFIcon />
      </a>
    </div>
  );
}
