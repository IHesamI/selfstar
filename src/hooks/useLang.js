import { useSelector } from "react-redux";
import { zarp } from "../Utils/langProvider";
export function useLang() {
  const lang = useSelector((state) => state.lang);

  const getTranslation = (key) => {
    return zarp[key][lang];
  };

  return getTranslation;
}
