import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LANGUAGE_STORAGE_KEY = "language";

const usePersistedLanguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (savedLanguage && savedLanguage !== i18n.language) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lng);
  };

  return { i18n, changeLanguage };
};

export default usePersistedLanguage;