# Tailwind CSS

## 1. Add @font-face to global CSS (globals.css / index.css)

```css
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
```

## 2. Extend tailwind.config.js / tailwind.config.ts

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        // or shorthand:
        // inter: ['Inter', 'sans-serif'],
      },
    },
  },
};
```

## 3. Usage

```html
<p class="font-inter">Hello</p>
```

Or in CSS: `font-family: var(--font-inter);`

## Tailwind v4 (CSS-first config)

```css
/* globals.css */
@import 'tailwindcss';

@font-face {
  font-family: 'Inter';
  src: url('/assets/fonts/Inter/Inter-Regular.woff2') format('woff2');
  font-display: swap;
}

:root {
  --font-inter: 'Inter', sans-serif;
}

@theme {
  --font-family-inter: var(--font-inter);
}
```

Usage: `class="font-inter"`
