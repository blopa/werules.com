import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const PATH = process.env.NEXT_PUBLIC_BASE_PATH ? `/${process.env.NEXT_PUBLIC_BASE_PATH}` : '';

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        backend: {
            loadPath: `${PATH}/locales/{{lng}}/{{ns}}.json`,
        },
        debug: true,
        fallbackLng: 'en-US',
        interpolation: {
            escapeValue: false,
        },
    });


export default i18n;