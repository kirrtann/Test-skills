# next-intl Configuration Reference

## File structure

```
app/
  [locale]/
    layout.tsx      ← NextIntlClientProvider lives here
    page.tsx
messages/
  en.json
  hi.json
i18n.ts             ← request config (server-side)
middleware.ts       ← locale routing
next.config.js      ← plugin
```

---

## `i18n.ts` — request config

```typescript
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default,
}));
```

---

## `middleware.ts` — locale routing

```typescript
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'hi'], // replace with your locales
  defaultLocale: 'en',
  localePrefix: 'always', // /en/... and /hi/...
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
```

---

## `next.config.js`

```javascript
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin('./i18n.ts');

/** @type {import('next').NextConfig} */
module.exports = withNextIntl({
  // your other Next.js config
});
```

---

## `app/[locale]/layout.tsx` — provider

```tsx
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Fetch messages server-side to avoid hydration mismatch
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
```

---

## Usage in Server Components

```tsx
import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations('common');
  return <h1>{t('welcome')}</h1>;
}
```

## Usage in Client Components

```tsx
'use client';
import { useTranslations } from 'next-intl';

export function WelcomeBanner({ name }: { name: string }) {
  const t = useTranslations('common');
  return <p>{t('welcomeUser', { name })}</p>;
}
```

---

## `messages/en.json` structure

next-intl uses a **single file per locale** with namespaces as top-level keys:

```json
{
  "common": {
    "welcome": "Welcome",
    "itemCount": "{count, plural, one {# item} other {# items}}"
  },
  "auth": {
    "login": "Log In"
  },
  "errors": {
    "generic": "Something went wrong."
  }
}
```

---

## RTL support

```tsx
// app/[locale]/layout.tsx
const rtlLocales = ['ar', 'he', 'fa', 'ur'];
const dir = rtlLocales.includes(locale) ? 'rtl' : 'ltr';

return (
  <html lang={locale} dir={dir}>
    ...
  </html>
);
```
