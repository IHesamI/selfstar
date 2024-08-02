import { downloadPrefixUlr } from "../../config";
import { useLang } from "../../hooks/useLang";
import noThumbnail from "../../assets/image/noThumbnail.png";
import { downlaodFile } from "../../Utils/downlaodFiles";

export default function Contents({ item }) {
  const { title, enTitle, thubmnail, id } = item;
  const lang = useLang();
  return (
    <div
      dir={lang.isRtl ? "ltr" : "rtl"}
      className="flex flex-col items-end w-[49%] rounded-lg border-gray-400 border-[1px] p-2 xlg:w-full justify-between"
    >
      <div className="flex flex-col gap-3 w-full">
        <div className="mb-3 w-full bg-white">
          <img
            className="w-full h-[350px]"
            src={thubmnail ? downlaodFile(thubmnail) : noThumbnail}
            alt=""
          />
        </div>
        <div className="bg-blue-500 p-2 rounded-lg text-white max-w-[50%] text-ellipsis w-fit whitespace-nowrap overflow-hidden place-self-end">
          <h4
            className="text-ellipsis overflow-hidden"
            dir={lang.isRtl ? "rtl" : "ltr"}
          >
            {lang.isRtl ? title : enTitle}
          </h4>
        </div>
      </div>
      <a
        className="flex items-end self-start bg-blue-500 p-2 text-white rounded-lg"
        href={`/blog/${id}`}
      >
        <div>{lang("continue")}</div>
      </a>
    </div>
  );
}
