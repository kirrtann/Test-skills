# i18next TypeScript Types Reference

## Full type-safe setup

Create `src/i18n.d.ts` to get autocomplete and type-checking on all translation keys.

### Step 1 — Import your default locale JSON

```typescript
// src/i18n.d.ts
import 'i18next';
import common from '../public/locales/en/common.json';
import auth from '../public/locales/en/auth.json';
import errors from '../public/locales/en/errors.json';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      auth: typeof auth;
      errors: typeof errors;
    };
  }
}
```

### Step 2 — Usage with full type safety

```tsx
const { t } = useTranslation('auth');
t('login'); // ✅ typed
t('loginXYZ'); // ❌ TypeScript error — key doesn't exist
```

### Step 3 — `tsconfig.json` — ensure JSON import works

```json
{
  "compilerOptions": {
    "resolveJsonModule": true,
    "moduleResolution": "bundler"
  }
}
```

---

## next-intl TypeScript

next-intl infers types automatically from your messages files. No extra declaration needed if you use `getTranslations` / `useTranslations` with the namespace string.

For stricter typing, create `global.d.ts`:

```typescript
// global.d.ts
import en from './messages/en.json';

type Messages = typeof en;

declare global {
  interface IntlMessages extends Messages {}
}
```
