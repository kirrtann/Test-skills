# CSS / React (plain)

Add `@font-face` + variable to `src/index.css` or `src/styles/global.css`:

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

body {
  font-family: var(--font-inter);
}
```

Usage anywhere: `font-family: var(--font-inter);`
