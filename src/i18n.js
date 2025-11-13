import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import es from "../locales/es.json";
import esExtra from "../locales/es-extra.json";
import esDocs from "../locales/es-docs.json";
import en from "../locales/en.json";
import enDocs from "../locales/en-docs.json";

i18n
  .use(LanguageDetector) // Detecta idioma del navegador
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: { ...es, ...esExtra, ...esDocs } },
      en: { translation: { ...en, ...enDocs } },
    },
    fallbackLng: "en", // Por defecto inglés si no detecta otro idioma
    detection: {
      // Prioriza preferencia del usuario almacenada
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });

export default i18n
