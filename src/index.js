import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './Locales/en.json'; // Load English translations
import trTranslations from './Locales/tr.json'; // Load French translations
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      tr: {
        translation: trTranslations,
      },
    },
    lng: 'en', // Set the default language
    fallbackLng: 'en', // Fallback to English if a translation is missing
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

