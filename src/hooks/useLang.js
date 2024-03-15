import { useSelector } from "react-redux";
import { zarp } from "../Utils/langProvider";
import { useMemo } from "react";
export function useLang() {
  const lang = useSelector((state) => state.lang);
  console.error(lang);
  const isRtl = useMemo(() => lang == "fa",[lang]);

  const getTranslation = (key) => {
    return zarp[key][lang];
  };
  getTranslation.isRtl = isRtl;
  return getTranslation;
}
