# Next.js

Next.js serves `/public` at root — font paths work as `/assets/fonts/...` automatically.

## App Router (layout.tsx + globals.css)

```css
/* app/globals.css */
@font-face {
  font-family: 'Inter';
  src:
    url('/assets/fonts/Inter/Inter-Regular.woff2') format('woff2'),
    url('/assets/fonts/Inter/Inter-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

:root {
  --font-inter: 'Inter', sans-serif;
}

body {
  font-family: var(--font-inter);
}
```

Make sure `globals.css` is imported in `app/layout.tsx`:

```tsx
import './globals.css';
```

## Pages Router (\_app.tsx + styles/globals.css)

Same CSS, imported in `pages/_app.tsx`:

```tsx
import '../styles/globals.css';
```

## With Tailwind — also update tailwind.config

See `tailwind.md` for the `fontFamily` extension.

## With SCSS — use \_fonts.scss pattern

See `scss.md`.

> **Note**: Prefer local font files over `next/font` when the font is already self-hosted in `/public/assets/fonts/`.
