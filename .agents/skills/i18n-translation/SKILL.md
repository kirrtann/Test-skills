---
name: i18n-translation
description: >
  Full Language Translation (i18n) setup skill. Use this skill whenever a user wants to add
  internationalization, localization, multi-language support, or translation to their app.
  Triggers include: "add i18n", "add translations", "support multiple languages", "locale
  switching", "i18next setup", "next-intl setup", "pluralization", "translate my app",
  "add language files", "create locale JSON files", "RTL support", or any mention of making
  an app available in more than one language. Always use this skill — even for partial requests
  like "just add a language switcher" or "generate translation JSON files".
---

# i18n Translation Skill

Sets up complete internationalization: namespace structure, pluralization, locale-switching, and bilingual starter JSON files. Covers **i18next** (React/Vanilla) and **next-intl** (Next.js App Router).

---

## Step 0 — Ask the user (if not already known)

Before writing any code, collect:

1. **Library**: i18next · next-intl · both?
2. **Default locale**: e.g. `en`, `hi`, `gu`, `es`
3. **Second locale**: the other language to scaffold JSON for
4. **Namespaces needed** (suggest defaults if user is unsure): `common`, `auth`, `errors`, `home`
5. **Any existing translation keys** they want to migrate?

Then confirm before proceeding.

---

## Step 1 — Scaffold locale JSON files

Ask for the two locales, then generate **two matching JSON files** for every namespace.

Read → [`references/locale-templates.md`](references/locale-templates.md) for full template content and pluralization patterns before generating files.

### File naming conventions

| Library   | Path pattern                               |
| --------- | ------------------------------------------ |
| i18next   | `public/locales/{locale}/{namespace}.json` |
| next-intl | `messages/{locale}.json`                   |

### Pluralization key patterns

**i18next** uses `_one` / `_other` (or `_zero`, `_few`, etc. per locale CLDR rules):

```json
{
  "itemCount": "{{count}} item",
  "itemCount_one": "{{count}} item",
  "itemCount_other": "{{count}} items"
}
```

**next-intl** uses ICU message syntax:

```json
{
  "itemCount": "{count, plural, one {# item} other {# items}}"
}
```

For **Hindi / Gujarati**, CLDR plural categories are `one` (1) and `other` (0, 2–∞). Always include both.

---

## Step 2 — Install & configure the library

### i18next (React + react-i18next)

```bash
npm install i18next react-i18next i18next-http-backend i18next-browser-languagedetector
```

Create `src/i18n.ts` — read [`references/i18next-config.md`](references/i18next-config.md) for the full config template.

Key settings to customise:

- `lng` — default locale
- `fallbackLng` — fallback locale
- `ns` — array of namespace strings
- `defaultNS` — primary namespace
- `backend.loadPath` — `/locales/{{lng}}/{{ns}}.json`

Wrap `<App />` in `<I18nextProvider i18n={i18n}>`.

### next-intl (Next.js App Router)

```bash
npm install next-intl
```

Files to create / edit:

- `i18n.ts` (request config)
- `middleware.ts` (locale routing)
- `next.config.js` (plugin)
- `app/[locale]/layout.tsx` (NextIntlClientProvider)

Read [`references/next-intl-config.md`](references/next-intl-config.md) for full boilerplate.

---

## Step 3 — Locale Switcher component

Generate a `<LocaleSwitcher />` component based on the chosen library.

**i18next version** (React):

```tsx
import { useTranslation } from 'react-i18next';

export function LocaleSwitcher({ locales }: { locales: string[] }) {
  const { i18n } = useTranslation();
  return (
    <select value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
      {locales.map((l) => (
        <option key={l} value={l}>
          {l.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
```

**next-intl version** (App Router):

```tsx
'use client';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export function LocaleSwitcher({ locales }: { locales: string[] }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (next: string) => {
    const segments = pathname.split('/');
    segments[1] = next;
    router.push(segments.join('/'));
  };

  return (
    <select value={locale} onChange={(e) => switchLocale(e.target.value)}>
      {locales.map((l) => (
        <option key={l} value={l}>
          {l.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
```

---

## Step 4 — Usage patterns to show the user

### Basic translation

```tsx
// i18next
const { t } = useTranslation('common');
<p>{t('welcome')}</p>;

// next-intl
const t = useTranslations('common');
<p>{t('welcome')}</p>;
```

### Pluralization

```tsx
// i18next
t('itemCount', { count: 3 }); // → "3 items"

// next-intl
t('itemCount', { count: 3 }); // uses ICU under the hood
```

### Interpolation

```tsx
// i18next
t('greeting', { name: 'Raj' }); // key: "Hello, {{name}}!"

// next-intl
t('greeting', { name: 'Raj' }); // key: "Hello, {name}!"
```

### Namespaces (i18next only)

```tsx
const { t } = useTranslation(['common', 'auth']);
t('auth:loginButton');
```

---

## Step 5 — Output checklist

Deliver all of these:

- [ ] `public/locales/{defaultLocale}/common.json` + `auth.json` + `errors.json`
- [ ] `public/locales/{secondLocale}/common.json` + `auth.json` + `errors.json`
- [ ] `src/i18n.ts` (i18next) **or** `i18n.ts` + `middleware.ts` (next-intl)
- [ ] `<LocaleSwitcher />` component
- [ ] Brief usage snippet shown in chat

If the user has existing keys to migrate, run them through the correct JSON format and pluralize as needed.

---

## Edge cases & tips

- **RTL languages** (Arabic, Hebrew): add `dir="rtl"` to `<html>` based on locale. Use `useLocale()` or `i18n.language` to derive direction.
- **Date / number formatting**: recommend `Intl.DateTimeFormat` / `Intl.NumberFormat` rather than custom keys.
- **TypeScript types**: for i18next, point to [`references/i18next-types.md`](references/i18next-types.md) for the `declare module` augmentation pattern.
- **SSR hydration mismatch** (next-intl): always pass `locale` and `messages` to `NextIntlClientProvider` in the server layout — never lazy-load on client.
- **Missing key warnings**: set `missingKeyHandler` in i18next or `onError` in next-intl to surface gaps during development.
