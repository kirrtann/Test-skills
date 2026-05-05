---
name: font-import
description: Import and apply custom fonts in React or Next.js projects. Use this skill whenever a user wants to add, register, or use a font file (TTF, OTF, WOFF, WOFF2) in their project — even if they just say "add this font", "use this font in my project", "apply custom font", or drop a font file. Handles placing fonts in the correct public directory, generating @font-face declarations, CSS variables, and wiring the font into CSS, SCSS, or Tailwind config. Always trigger when a font file extension is mentioned or a font file is uploaded.
---

# Font Import Skill

## Overview

1. Check if font file exists in `/public/assets/fonts/` — if yes, **do not move or copy it**
2. If missing, place it there
3. Generate `@font-face` + CSS variable
4. Wire into the project's styling system (CSS / SCSS / Tailwind)

---

## Step 1 — Locate Font File

**Already in public folder?**

```
/public/assets/fonts/<FontName>/<font-file.ext>
```

→ Use path as-is. Never modify existing files in `public/`.

**Not there?** Copy/move to:

```
/public/assets/fonts/<FontName>/
└── <font-file.ext>
```

`<FontName>` = font family name in PascalCase (e.g. `Inter`, `MyBrandFont`).

Supported formats: `.ttf` `.otf` `.woff` `.woff2`

---

## Step 2 — Generate @font-face

```css
@font-face {
  font-family: '<FontName>';
  src:
    url('/assets/fonts/<FontName>/<file>.woff2') format('woff2'),
    url('/assets/fonts/<FontName>/<file>.ttf') format('truetype');
  font-weight: <weight>; /* 400 if unknown */
  font-style: normal;
  font-display: swap;
}
```

Detect weight from filename keywords: `thin`=100, `light`=300, `regular`/`normal`=400, `medium`=500, `semibold`=600, `bold`=700, `black`=900. Default: 400.

---

## Step 3 — CSS Variable

Always create a variable:

```css
--font-<fontname>: '<FontName>', sans-serif;
```

Example: `--font-inter: 'Inter', sans-serif;`

---

## Step 4 — Apply by Project Type

Read references file for the detected stack before writing code.

| Stack detected                           | Read                                              |
| ---------------------------------------- | ------------------------------------------------- |
| Tailwind (tailwind.config.js/ts present) | `references/tailwind.md`                          |
| SCSS (.scss files present)               | `references/scss.md`                              |
| Plain CSS / React default                | `references/css.md`                               |
| Next.js + any above                      | `references/nextjs.md` then the CSS/Tailwind file |

**Detect stack**: check for `tailwind.config.*`, `*.scss`, `globals.css`, `_app.tsx`, `layout.tsx`.

---

## Output Checklist

- [ ] Font file is in `/public/assets/fonts/<FontName>/`
- [ ] `@font-face` block written with correct path
- [ ] CSS variable `--font-<name>` defined
- [ ] Variable wired into body or config
- [ ] User shown how to use: `font-family: var(--font-<name>)` or Tailwind class
