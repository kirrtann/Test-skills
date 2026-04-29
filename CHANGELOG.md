# CHANGELOG

## Project File Structure

_Last updated: 2026-04-29 06:05 UTC_

```
.
├── .agents/
│   └── skills/
│       └── git-commit-changelog/
│           └── SKILL.md
├── .env.example
├── .env.local
├── .env.production
├── .env.stage
├── .husky/
│   └── pre-commit
├── .vscode/
│   ├── extensions.json
│   └── settings.json
├── e2e/
│   ├── home.spec.ts
│   └── pages/
│       └── HomePage.ts
├── eslint.config.mjs
├── next.config.js
├── next.config.ts
├── next-env.d.ts
├── package.json
├── playwright.config.ts
├── postcss.config.mjs
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── providers.tsx
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   └── hospital/
│   │       ├── page.tsx
│   │       ├── about/
│   │       │   └── page.tsx
│   │       └── contact/
│   │           └── page.tsx
│   ├── components/
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
└── tsconfig.json
```

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
