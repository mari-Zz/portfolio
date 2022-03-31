import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

import translationEn from "./locales/en/translation.json";
import translationKa from "./locales/ka/translation.json";

const resources = {
  en: {
    translation: translationEn,
  },
  ka: {
    translation: translationKa,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    resources,
    supportedLngs: ["en", "ka"],
    fallbackLng: "en",
    keySeparator: false,
    detection: {
      order: ["cookie", "htmlTag", "localStorage", "path", "subdomain"],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

const loading = () => {
  <div>loading..</div>;
};

ReactDOM.render(
  <Suspense fallback={loading}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);

reportWebVitals();
