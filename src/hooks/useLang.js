import { useSelector } from "react-redux";
import { langKeys } from "../Utils/langProvider";
import { useMemo } from "react";
import { convertPersian } from "../Utils/prettyString";

export function useLang() {
  const lang = useSelector((state) => state.lang);
  const isRtl = useMemo(() => lang == "fa", [lang]);

  const getTranslation = (key) => {
    return langKeys[key][lang];
  };
  getTranslation.dateConverter = (month, year) => {
    if (isRtl) {
      year = convertPersian(year);
    } else {
      year = Number.parseInt(year) + 621;
    }
    return `${langKeys["months"][lang][month]} ${year} `;
  };
  getTranslation.isRtl = isRtl;
  return getTranslation;
}
