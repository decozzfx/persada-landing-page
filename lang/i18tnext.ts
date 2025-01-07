import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import id from "./locales/id.json";

export const langObj = {
  English: "en",
  Indonesia: "id",
};

const resources = {
  en: { translation: en },
  id: { translation: id },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v4",
  resources,
  lng: langObj.English, // default language to use.
  fallbackLng: langObj.English,
});

export default i18next;
