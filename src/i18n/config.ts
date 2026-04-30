import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// ── Add/remove languages here ──────────────────────────
export const LANGUAGES = {
  en: 'English',
  fr: 'Français',
  hi: 'हिन्दी',
  gu: 'ગુજરાતી',
} as const;

export type LangCode = keyof typeof LANGUAGES;
export const DEFAULT_LANG: LangCode = 'en';

// ── Import all locale JSON files directly ──────────────
// No HTTP backend — bundled at build time, no network calls
import enAuth from './locales/en/auth.json';
import enCommon from './locales/en/common.json';
import enDashboard from './locales/en/dashboard.json';
import frAuth from './locales/fr/auth.json';
import frCommon from './locales/fr/common.json';
import frDashboard from './locales/fr/dashboard.json';
import guAuth from './locales/gu/auth.json';
import guCommon from './locales/gu/common.json';
import guDashboard from './locales/gu/dashboard.json';
import hiAuth from './locales/hi/auth.json';
import hiCommon from './locales/hi/common.json';
import hiDashboard from './locales/hi/dashboard.json';

i18n.use(initReactI18next).init({
  lng: (localStorage.getItem('lang') as LangCode) ?? DEFAULT_LANG,
  fallbackLng: DEFAULT_LANG,
  defaultNS: 'common',
  ns: ['common', 'auth', 'dashboard'],
  resources: {
    en: { common: enCommon, auth: enAuth, dashboard: enDashboard },
    fr: { common: frCommon, auth: frAuth, dashboard: frDashboard },
    hi: { common: hiCommon, auth: hiAuth, dashboard: hiDashboard },
    gu: { common: guCommon, auth: guAuth, dashboard: guDashboard },
  },
  interpolation: { escapeValue: false },
});

export default i18n;
