import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const SUPPORTED_LOCALES = ['en', 'fr'] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

const instance = i18n.use(initReactI18next);

// Browser-only plugins — guard against Next.js SSR
if (typeof window !== 'undefined') {
  instance.use(HttpBackend).use(LanguageDetector);
}

instance.init({
  supportedLngs: SUPPORTED_LOCALES,
  fallbackLng: DEFAULT_LOCALE,
  defaultNS: 'common',
  ns: ['common', 'errors'],
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
  detection: {
    order: ['localStorage', 'navigator'],
    caches: ['localStorage'],
  },
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
