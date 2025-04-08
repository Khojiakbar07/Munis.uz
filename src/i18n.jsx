import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import uz from "./locales/uz/translation.json";
import ru from "./locales/ru/translation.json";
import en from "./locales/ru/translation.json";

i18n
.use(initReactI18next)
  .init({
    resources: {
      uz: { translation: uz },
      ru: { translation: ru },
      en: { translation: en },
    },
    lng:localStorage.getItem('i18nextLng') || "uz",
    fallbackLng: "uz",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
