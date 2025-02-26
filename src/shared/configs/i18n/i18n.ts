import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import commonEN from '@locales/en/common.json';
import commonRU from '@locales/ru/common.json';

const resources = {
    en: { common: commonEN },
    ru: { common: commonRU }
}

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: i18n.language || 'ru',
    debug: IS_DEV,

    interpolation: {
      escapeValue: false,
    }
});
