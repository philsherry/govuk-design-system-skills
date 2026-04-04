---
category: styles
description: NHS services use the Frutiger typeface for brand consistency and readability. Arial serves as the fallback for environments where Frutiger is unavailable.
keywords:
  - "Frutiger"
  - "GDS Transport"
  - "font"
  - "font family"
  - "typeface"
last-reviewed: "2026-04-03"
name: Typeface
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/styles/typography"
---

# Typeface

> NHS services use the Frutiger typeface for brand consistency and readability. Arial serves as the fallback for environments where Frutiger is unavailable.
> Source: <https://service-manual.nhs.uk/design-system/styles/typography>

## Overview

Frutiger is the typeface specified in the NHS identity guidelines. It conveys the NHS brand while remaining highly legible at all sizes and across screen types. NHS UK Frontend includes Frutiger font files and handles font loading automatically.

For services that cannot use Frutiger — such as internal tools without the NHS font licence — the fallback is Arial, a system font available on all major operating systems.

## When to use this style

Use Frutiger on all NHS-branded digital services. NHS UK Frontend includes the font loading logic; you do not need to source the font files separately when using the npm package.

## When not to use this style

Do not use Frutiger on services that are not part of the NHS. The NHS font licence restricts use to NHS services. Non-NHS services should use Arial or another appropriate system font.

## How it works

### Font loading via NHS UK Frontend

When you import NHS UK Frontend's CSS, it adds font-face declarations for Frutiger automatically. The build serves the font files from the assets path.

If you use the pre-compiled CSS, copy the font files from the NHS UK Frontend package to your public assets directory and ensure the path matches the location you have configured.

### Font stack

NHS UK Frontend uses the following font stack:

```text
"Frutiger W01", arial, sans-serif
```

Frutiger loads first. Arial is the fallback. `sans-serif` is the generic family fallback for systems where Arial is also unavailable.

### Font variants

Frutiger includes the following weights used by NHS UK Frontend:

| Weight | Usage |
|---|---|
| Light (300) | Specific display contexts |
| Regular (400) | Body text, labels, hints |
| Bold (700) | Headings, strong emphasis |

### Configuring the font path

Set the asset path before importing NHS UK Frontend:

```scss
$nhsuk-assets-path: "/assets/";

@import "nhsuk-frontend/packages/nhsuk";
```

### Disabling Frutiger

If your service does not have a licence for Frutiger, disable it to prevent loading an unlicensed font:

```scss
$nhsuk-include-font-face: false;

@import "nhsuk-frontend/packages/nhsuk";
```

NHS UK Frontend then uses Arial throughout.

### NHS logo font

The NHS logo uses a specific version of the NHS typeface (Frutiger Bold). Do not recreate the NHS logo typographically — always use the official SVG logo provided by NHS UK Frontend.

## Code examples

### Sass configuration for an NHS service

```scss
// Set path before importing nhsuk-frontend
$nhsuk-assets-path: "/public/assets/";

@import "nhsuk-frontend/packages/nhsuk";
```

### Sass configuration for a service without Frutiger

```scss
// Disable Frutiger; Arial appears throughout
$nhsuk-include-font-face: false;

@import "nhsuk-frontend/packages/nhsuk";
```

### Referencing the font family in custom Sass

When writing custom styles that must match the NHS typeface, use the font family variable:

```scss
.my-component {
  font-family: $nhsuk-font; // "Frutiger W01", arial, sans-serif
}
```

## Accessibility

- Frutiger remains legible at small sizes and under high contrast settings. Do not override letter-spacing, line-height, or font-size in ways that reduce legibility.
- Users who apply a custom typeface via browser or operating system settings see their chosen font instead of Frutiger. Ensure that layouts do not break when a different typeface replaces it.
- Do not use CSS font-smoothing properties to alter the rendering of Frutiger — this can reduce contrast and legibility for some users.
- Ensure minimum text size of 16px for body content to support readability for users with low vision.

## Do and do not

**Do:**

- Configure the font file path before importing NHS UK Frontend.
- Copy font files from the NHS UK Frontend package to your public assets directory.
- Use `$nhsuk-include-font-face: false` on non-NHS services.
- Use the font family variable when referencing the font in custom styles.

**Do not:**

- Use Frutiger on non-NHS services.
- Redistribute the Frutiger font files outside the NHS UK Frontend package.
- Set `font-family` values manually — use the provided variable.
- Apply synthetic bold or italic CSS properties to Frutiger.
- Recreate the NHS logo using Frutiger text — always use the SVG logo.

## Related components and patterns

- [Typography style](https://service-manual.nhs.uk/design-system/styles/typography)
- [Colour style](https://service-manual.nhs.uk/design-system/styles/colour)
- [Page template](https://service-manual.nhs.uk/design-system/styles/page-template)
- [NHS UK Frontend on GitHub](https://github.com/nhsuk/nhsuk-frontend)
