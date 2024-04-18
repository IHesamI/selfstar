import { useDispatch, useSelector } from "react-redux";
import { langKeys } from "../Utils/langProvider";
import { useCallback, useMemo } from "react";
import { convertPersian } from "../Utils/prettyString";
import { setLang } from "../Store/store";

export function useLang() {
  const lang = useSelector((state) => state.lang);
  const isRtl = lang == "fa";
  const dispatch = useDispatch();

  const getTranslation = (key) => {
    return langKeys[key][lang];
  };

  getTranslation.dateConverter = useCallback((month, year) => {
    if (isRtl) {
      year = convertPersian(year);
    } else {
      year = Number.parseInt(year) + 621;
    }
    return `${langKeys["months"][lang][month]} ${year} `;
  }, []);

  getTranslation.getOtherLang = (key) => {
    const otherKey = isRtl ? "en" : "fa";
    return langKeys[key][otherKey];
  };
  getTranslation.getByKey = (key) => {
    return langKeys[key];
  };
  getTranslation.changeLang = useCallback(() => {
    const resultlang = isRtl ? "en" : "fa";
    dispatch(setLang({ lang: resultlang }));
  }, [isRtl]);

  getTranslation.isRtl = isRtl;
  return getTranslation;
}
