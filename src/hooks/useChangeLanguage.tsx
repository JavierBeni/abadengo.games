import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useStore } from "../store";
import { isSupportedLanguage, localizedPath } from "../utils/localizedRoutes";

const usePersistedLanguage = () => {
  const { i18n } = useTranslation();
  const modifyLanguage = useStore((state) => state.modifyLanguage);
  const location = useLocation();
  const navigate = useNavigate();

  const changeLanguage = (lng: string) => {
    if (!isSupportedLanguage(lng)) return;
    void i18n.changeLanguage(lng);
    modifyLanguage(lng);
    navigate(localizedPath(`${location.pathname}${location.search}${location.hash}`, lng));
  };

  return { i18n, changeLanguage };
};

export default usePersistedLanguage;