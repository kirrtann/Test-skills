# SCSS

Add to `src/styles/_fonts.scss` (create if missing), then `@use` it in `main.scss` / `global.scss`:

```scss
// _fonts.scss
@font-face {
  font-family: 'Inter';
  src:
    url('/assets/fonts/Inter/Inter-Regular.woff2') format('woff2'),
    url('/assets/fonts/Inter/Inter-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

// _variables.scss  (add or create)
$font-inter: 'Inter', sans-serif;

// CSS custom property (optional but recommended)
:root {
  --font-inter: #{$font-inter};
}
```

```scss
// main.scss / global.scss
@use 'fonts';
@use 'variables';

body {
  font-family: $font-inter;
}
```

Usage: `font-family: $font-inter;` or `font-family: var(--font-inter);`
