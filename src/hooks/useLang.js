import { useSelector } from "react-redux";
import { langKeys } from "../Utils/langProvider";
import { useMemo } from "react";
export function useLang() {
  const lang = useSelector((state) => state.lang);
  const isRtl = useMemo(() => lang == "fa", [lang]);

  const getTranslation = (key) => {
    return langKeys[key][lang];
  };
  getTranslation.isRtl = isRtl;
  return getTranslation;
}
