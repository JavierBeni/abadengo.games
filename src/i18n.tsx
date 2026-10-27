import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./locales/en/translation.json";
import esTranslation from "./locales/es/translation.json";
import plTranslation from "./locales/pl/translation.json";

const routeLanguage = window.location.pathname.split("/")[1];
const initialLanguage = ["en", "es", "pl"].includes(routeLanguage) ? routeLanguage : "en";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      es: { translation: esTranslation },
      pl: { translation: plTranslation },
    },
    lng: initialLanguage,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
