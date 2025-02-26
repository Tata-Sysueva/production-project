import commonEN from '@locales/en/common.json';
import commonRU from '@locales/ru/common.json';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';


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
