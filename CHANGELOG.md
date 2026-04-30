# CHANGELOG

## Project File Structure

_Last updated: 2026-04-30 06:23 UTC_

```
.
├── .agents/
│   └── skills/
│       ├── git-commit-changelog/
│       │   └── SKILL.md
│       └── i18n-translation/
│           ├── SKILL.md
│           └── references/
│               ├── locale-json.md
│               ├── locale-switcher.md
│               └── templates.md
├── .env.example
├── .env.local
├── .env.production
├── .env.stage
├── .eslintignore
├── .gitignore
├── .husky/
│   ├── pre-commit
│   └── pre-push
├── .prettierignore
├── .prettierrc
├── .vscode/
│   ├── extensions.json
│   └── settings.json
├── CHANGELOG.md
├── e2e/
│   ├── home.spec.ts
│   └── pages/
│       └── HomePage.ts
├── eslint.config.mjs
├── next.config.js
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── playwright.config.ts
├── playwright-report/
│   ├── data/
│   │   ├── 0f56a99bc31b335044428ce88d126148dfa2dafa.png
│   │   ├── 1702cac9b637e378efb5b754794f09a41469dd88.png
│   │   ├── 1b9d59d67fff4d1284ba98a73a4d2c9442687e5c.png
│   │   ├── 24c0576bbe0b5eea7bdfbbe2a57c33f1c8799382.png
│   │   ├── 2a5c152082a341ca848ec0123aac5e98a67c5b73.md
│   │   ├── 4510e108286d1487494b835f1b9e1ddcf1d3e9a9.png
│   │   ├── 49e474875b39901e54ec64ea22f146bf3269bbb6.png
│   │   ├── 725362cf4e5853d7d657872368de92760f8107ac.png
│   │   ├── 991608bee066f534f01f3328b9621526cfb5fd15.md
│   │   ├── a2052647a94500ed2df2150467dbb2872bbdf7c1.md
│   │   ├── bdfcb6749aeab61f3adfb6cc254c91534ecdbaae.png
│   │   ├── bf838ce8cfb70576cbb542ead474a84e6fa525c0.md
│   │   ├── cb276412c03bdf73b0adf90154080c414a9461a3.md
│   │   ├── d7da6fc58ac8cb7b4d1504d98f734108594b27c2.png
│   │   └── fcdfd5a135c7417a1e0523420179936345522295.md
│   └── index.html
├── postcss.config.mjs
├── public/
│   └── locales/
│       ├── en/
│       └── fr/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── providers.tsx
│   │   ├── appointment/
│   │   │   └── page.tsx
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   └── hospital/
│   │       ├── page.tsx
│   │       ├── about/
│   │       │   └── page.tsx
│   │       └── contact/
│   │           └── page.tsx
│   ├── components/
│   │   ├── LocaleSwitcher.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Sidebar.tsx
│   │   └── ui/
│   │       ├── AppointmentForm.tsx
│   │       ├── Button.tsx
│   │       └── DataTable.tsx
│   ├── constants/
│   │   └── index.ts
│   ├── hooks/
│   │   └── api/
│   │       ├── index.ts
│   │       └── useUsers.ts
│   ├── i18n/
│   │   ├── config.ts
│   │   ├── index.ts
│   │   ├── types.ts
│   │   ├── utils.ts
│   │   └── locales/
│   │       ├── en/
│   │       │   ├── auth.json
│   │       │   ├── common.json
│   │       │   └── dashboard.json
│   │       ├── fr/
│   │       │   ├── auth.json
│   │       │   ├── common.json
│   │       │   └── dashboard.json
│   │       ├── gu/
│   │       │   ├── auth.json
│   │       │   ├── common.json
│   │       │   └── dashboard.json
│   │       └── hi/
│   │           ├── auth.json
│   │           ├── common.json
│   │           └── dashboard.json
│   ├── lib/
│   │   ├── config.ts
│   │   ├── utils.ts
│   │   └── api/
│   │       ├── client.ts
│   │       ├── endpoints.ts
│   │       └── types.ts
│   ├── services/
│   │   ├── index.ts
│   │   └── userService.ts
│   ├── store/
│   │   ├── index.ts
│   │   └── useAppStore.ts
│   └── types/
│       └── index.ts
├── tailwind.config.ts
├── test-results/
│   ├── home-Home-page-loads-and-shows-main-heading-chromium/
│   │   ├── error-context.md
│   │   └── test-failed-1.png
│   ├── home-Home-page-loads-and-shows-main-heading-firefox/
│   │   ├── error-context.md
│   │   └── test-failed-1.png
│   ├── home-Home-page-loads-and-shows-main-heading-Mobile-Chrome/
│   │   ├── error-context.md
│   │   └── test-failed-1.png
│   ├── home-Home-page-navigate-to-dashboard-chromium/
│   │   ├── error-context.md
│   │   └── test-failed-1.png
│   ├── home-Home-page-navigate-to-dashboard-firefox/
│   │   ├── error-context.md
│   │   └── test-failed-1.png
│   ├── home-Home-page-navigate-to-dashboard-Mobile-Chrome/
│   │   ├── error-context.md
│   │   └── test-failed-1.png
│   ├── home-Home-page-shows-stack-overview-cards-chromium/
│   │   ├── error-context.md
│   │   └── test-failed-1.png
│   ├── home-Home-page-shows-stack-overview-cards-firefox/
│   │   ├── error-context.md
│   │   └── test-failed-1.png
│   ├── home-Home-page-shows-stack-overview-cards-Mobile-Chrome/
│   │   ├── error-context.md
│   │   └── test-failed-1.png
│   └── .last-run.json
├── tsconfig.json
└── tsconfig.tsbuildinfo
```

---

## 2026-04-30 — refactor(header): replace hardcoded nav labels with i18n translation keys [update]

**Commit:** `51b3976`
**Date:** 2026-04-30 06:23 UTC
**Action:** update

### Changes

- NEW: `.agents/skills/i18n-translation/SKILL.md` — Agent skill definition for scaffolding i18n setup workflows
- NEW: `.agents/skills/i18n-translation/references/locale-json.md` — Reference docs for locale JSON structure
- NEW: `.agents/skills/i18n-translation/references/locale-switcher.md` — Reference docs for the LocaleSwitcher component pattern
- NEW: `.agents/skills/i18n-translation/references/templates.md` — Locale JSON templates reference
- NEW: `src/components/LocaleSwitcher.tsx` — Language switcher component that stores preference in localStorage
- NEW: `src/i18n/config.ts` — i18next configuration with EN/FR/HI/GU language support
- NEW: `src/i18n/index.ts` — i18n module entry point; exports initialized i18next instance
- NEW: `src/i18n/types.ts` — TypeScript types for locale keys and namespaces
- NEW: `src/i18n/utils.ts` — Utility helpers for locale detection and switching
- NEW: `src/i18n/locales/en/auth.json` — English auth namespace translation strings
- NEW: `src/i18n/locales/en/common.json` — English common namespace translation strings
- NEW: `src/i18n/locales/en/dashboard.json` — English dashboard namespace translation strings
- NEW: `src/i18n/locales/fr/auth.json` — French auth namespace translation strings
- NEW: `src/i18n/locales/fr/common.json` — French common namespace translation strings
- NEW: `src/i18n/locales/fr/dashboard.json` — French dashboard namespace translation strings
- NEW: `src/i18n/locales/gu/auth.json` — Gujarati auth namespace translation strings
- NEW: `src/i18n/locales/gu/common.json` — Gujarati common namespace translation strings
- NEW: `src/i18n/locales/gu/dashboard.json` — Gujarati dashboard namespace translation strings
- NEW: `src/i18n/locales/hi/auth.json` — Hindi auth namespace translation strings
- NEW: `src/i18n/locales/hi/common.json` — Hindi common namespace translation strings
- NEW: `src/i18n/locales/hi/dashboard.json` — Hindi dashboard namespace translation strings
- UPDATE: `package.json` — Added `i18next` and `react-i18next` runtime dependencies
- UPDATE: `package-lock.json` — Lockfile updated for new i18n packages
- UPDATE: `src/components/layout/Header.tsx` — Replaced hardcoded nav labels with `t('nav.*')` translation keys; added `useTranslation` hook and `LocaleSwitcher` component

---

## 2026-04-30 — fix(deps): drop i18next packages and remove locale infrastructure [delete]

**Commit:** `65d00c0`
**Date:** 2026-04-30 03:57 UTC
**Action:** delete

### Changes

- DELETE: `.agents/skills/i18n-translation/SKILL.md` — Removed the i18n agent skill definition
- DELETE: `.agents/skills/i18n-translation/references/i18next-config.md` — Removed i18next config reference docs
- DELETE: `.agents/skills/i18n-translation/references/i18next-types.md` — Removed TypeScript type reference for i18next
- DELETE: `.agents/skills/i18n-translation/references/locale-templates.md` — Removed locale JSON template reference
- DELETE: `.agents/skills/i18n-translation/references/next-intl-config.md` — Removed next-intl config reference docs
- DELETE: `public/locales/en/common.json` — Removed English common translation strings
- DELETE: `public/locales/en/errors.json` — Removed English error translation strings
- DELETE: `public/locales/fr/common.json` — Removed French common translation strings
- DELETE: `public/locales/fr/errors.json` — Removed French error translation strings
- DELETE: `src/components/ui/LocaleSwitcher.tsx` — Removed locale switcher UI component
- DELETE: `src/i18n/config.ts` — Removed i18next configuration module
- UPDATE: `package.json` — Dropped i18next, react-i18next, i18next-http-backend, i18next-browser-languagedetector dependencies
- UPDATE: `src/app/providers.tsx` — Removed I18nextProvider wrapper and i18n import; app now renders QueryClientProvider directly
- UPDATE: `src/components/layout/Header.tsx` — Replaced `t()` translation calls with hardcoded English strings; removed LocaleSwitcher and useTranslation import

---

## 2026-04-29 — feat(i18n): add i18next internationalization with EN/FR locales [new]

**Commit:** `3dfb57e`
**Date:** 2026-04-29 11:31 UTC
**Action:** new

### Changes

- NEW: `public/locales/en/common.json` — English translation strings for common UI text
- NEW: `public/locales/en/errors.json` — English translation strings for error messages
- NEW: `public/locales/fr/common.json` — French translation strings for common UI text
- NEW: `public/locales/fr/errors.json` — French translation strings for error messages
- NEW: `src/i18n/config.ts` — i18next configuration with EN/FR language support and namespace setup
- NEW: `src/components/ui/LocaleSwitcher.tsx` — Locale switcher UI component for toggling between EN and FR
- NEW: `.agents/skills/i18n-translation/SKILL.md` — Agent skill definition for full i18n setup workflows
- NEW: `.agents/skills/i18n-translation/references/i18next-config.md` — Reference docs for i18next config patterns
- NEW: `.agents/skills/i18n-translation/references/i18next-types.md` — TypeScript type definitions reference for i18next
- NEW: `.agents/skills/i18n-translation/references/locale-templates.md` — Locale JSON template structures reference
- NEW: `.agents/skills/i18n-translation/references/next-intl-config.md` — Reference docs for next-intl config patterns
- UPDATE: `package.json` — Added i18n dependencies (i18next, react-i18next, i18next-http-backend, i18next-browser-languagedetector)
- UPDATE: `package-lock.json` — Lockfile updated for new i18n packages
- UPDATE: `src/app/layout.tsx` — Integrated i18n provider at root layout level
- UPDATE: `src/app/providers.tsx` — Added I18nextProvider wrapping the app with i18n instance
- UPDATE: `src/components/layout/Header.tsx` — Added LocaleSwitcher component to the site header

---

## 2026-04-29 — feat(dashboard): redesign header and stat cards with gradient hero and trend indicators [update]

**Commit:** `d3a993b`
**Date:** 2026-04-29 06:58 UTC
**Action:** update

### Changes

- UPDATE: `src/app/dashboard/page.tsx` — Replaced flat header with an indigo-to-cyan gradient hero banner (greeting, decorative circles, glass-effect "New Appointment" button); split stat card `color` prop into `iconBg`, `iconColor`, and `accent` (left border); added `FiTrendingUp`/`FiTrendingDown` indicators to stat cards; added per-doctor `avatarBg` colours; polished appointments table header (font weights, padding, subtitle line, "View all" pill); changed page background from `bg-gray-50` to `bg-slate-50`

---

## 2026-04-29 — docs(skill): add git push step and --no-verify guidance [update]

**Commit:** `42ea0f1`
**Date:** 2026-04-29 06:50 UTC
**Action:** update

### Changes

- UPDATE: `.agents/skills/git-commit-changelog/SKILL.md` — Added step 6 (git push --no-verify), push trigger phrases, --no-verify security note, and fixed bullet indentation in agent behavior section
- UPDATE: `CHANGELOG.md` — Refreshed project file structure snapshot to include test-result screenshots, playwright-report data files, and .husky/pre-push

---

## 2026-04-29 — feat(hospital): redesign app as MediCare hospital platform with booking [new]

**Commit:** `fe3c528`
**Date:** 2026-04-29 06:27 UTC
**Action:** new

### Changes

- NEW: `CHANGELOG.md` — Changelog file tracking all commits with per-file details and project structure
- NEW: `src/app/appointment/page.tsx` — Standalone appointment booking page for MediCare Hospital
- UPDATE: `src/app/page.tsx` — Redesigned as MediCare Hospital landing page with hero section, services grid, stats banner, and info cards
- UPDATE: `src/app/dashboard/page.tsx` — Overhauled into a hospital admin dashboard with patient stats, appointment lists, and doctor availability
- UPDATE: `src/app/hospital/about/page.tsx` — Expanded about page with hospital story, values, and team section
- UPDATE: `src/app/hospital/contact/page.tsx` — Expanded contact page with map placeholder, contact form, and office details
- UPDATE: `src/app/layout.tsx` — Updated site title/metadata to MediCare Hospital branding
- UPDATE: `src/components/layout/Header.tsx` — Updated nav links and branding for MediCare Hospital
- UPDATE: `src/components/layout/Sidebar.tsx` — Updated sidebar links to reflect hospital navigation structure
- UPDATE: `.agents/skills/git-commit-changelog/SKILL.md` — Revised skill instructions with improved changelog format and per-file change guidance

---

## 2026-04-29 — feat(hospital): add hospital booking pages and appointment form [new]

**Commit:** `125cc61`
**Date:** 2026-04-29 06:05 UTC
**Action:** new

### Changes

- NEW: `.agents/skills/git-commit-changelog/SKILL.md` — Git commit + changelog skill definition for conventional commits and CHANGELOG.md automation
- NEW: `src/app/hospital/page.tsx` — Hospital home page with intro heading, description, and embedded AppointmentForm
- NEW: `src/app/hospital/about/page.tsx` — About page for the hospital section
- NEW: `src/app/hospital/contact/page.tsx` — Contact page for the hospital section
- NEW: `src/components/ui/AppointmentForm.tsx` — Form component for booking appointments (fields: name, email, phone, department, date, message)
- UPDATE: `src/app/page.tsx` — Added "Hospital Booking" navigation link; changed Documentation button style from `btn-secondary` to `btn-ghost`
