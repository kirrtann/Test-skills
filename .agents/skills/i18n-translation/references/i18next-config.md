# i18next Configuration Reference

## Full `src/i18n.ts` template

```typescript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // ── Locales ────────────────────────────────────────────────────
    lng: 'en', // default locale — change to user's choice
    fallbackLng: 'en',
    supportedLngs: ['en', 'hi'], // replace with actual locale list

    // ── Namespaces ─────────────────────────────────────────────────
    ns: ['common', 'auth', 'errors'],
    defaultNS: 'common',

    // ── Backend (loads JSON from /public/locales) ──────────────────
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    // ── Language detection order ───────────────────────────────────
    detection: {
      order: ['querystring', 'localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupQuerystring: 'lang',
      lookupLocalStorage: 'i18nextLng',
    },

    // ── Interpolation ──────────────────────────────────────────────
    interpolation: {
      escapeValue: false, // React already escapes
    },

    // ── Debug (turn off in production) ────────────────────────────
    debug: process.env.NODE_ENV === 'development',

    // ── Missing key handler ────────────────────────────────────────
    missingKeyHandler: (lngs, ns, key) => {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`[i18n] Missing key: ${ns}:${key} for locale(s): ${lngs}`);
      }
    },
  });

export default i18n;
```

## `src/main.tsx` — import before rendering

```tsx
import './i18n'; // must import before <App />
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## TypeScript augmentation (`src/i18n.d.ts`)

Read [`i18next-types.md`](i18next-types.md) for the full type-safe setup.

## React Suspense wrapper (needed with HttpBackend)

```tsx
// App.tsx
import { Suspense } from 'react';

export default function App() {
  return (
    <Suspense fallback={<div>Loading translations...</div>}>
      <YourRoutes />
    </Suspense>
  );
}
```

## Changing language programmatically

```typescript
import i18n from './i18n';

// Switch language
await i18n.changeLanguage('hi');

// Get current language
const current = i18n.language; // 'hi'
const base = i18n.language.split('-')[0]; // 'hi' (strips region)
```
