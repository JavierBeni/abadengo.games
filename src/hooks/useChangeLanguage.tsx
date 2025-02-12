import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useStore } from "../store";

const usePersistedLanguage = () => {
  const { i18n } = useTranslation();
  const { language, modifyLanguage } = useStore();
  useEffect(() => {
    if (language && language !== i18n.language) {
      i18n.changeLanguage(language);
    }
  }, [i18n, language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    modifyLanguage(lng);
  };

  return { i18n, changeLanguage };
};

export default usePersistedLanguage;