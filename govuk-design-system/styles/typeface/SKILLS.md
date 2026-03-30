---
category: styles
description: GOV.UK services use GDS Transport as their primary typeface. The Crown licences this font for use on gov.uk domains only and it loads via GOV.UK Frontend. Arial is the fallback for environments where GDS Transport is unavailable.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Typeface
---

# Typeface

> GOV.UK services use GDS Transport as their primary typeface. The Crown licences this font for use on gov.uk domains only and it loads via GOV.UK Frontend. Arial is the fallback for environments where GDS Transport is unavailable.
> Source: https://design-system.service.gov.uk/styles/typeface/

---

## Overview

GDS Transport is the typeface designed specifically for the GOV.UK brand. It conveys trust and authority while remaining highly legible at all sizes. As a Crown-licensed typeface, you may only use it on websites hosted on the `gov.uk` domain. GOV.UK Frontend handles font loading automatically when you configure the font path.

For services that cannot use GDS Transport — such as internal tools or services on non-gov.uk domains — the fallback is Arial, a system font available on all major operating systems.

---

## When to use this style

Use GDS Transport on any public-facing service hosted on a `gov.uk` domain. GOV.UK Frontend includes the font loading logic; you do not need to source the font files separately if you are using the npm package.

---

## When not to use this style

Do not use GDS Transport on websites hosted outside the `gov.uk` domain. The Crown licence prohibits use on non-gov.uk domains. Services on other domains should use Arial as their primary typeface.

---

## How it works

### Font loading via GOV.UK Frontend

When you import GOV.UK Frontend's Sass, it adds font-face declarations for GDS Transport automatically. The build serves the font files (in WOFF2 and WOFF formats) from the `/assets/fonts/` path.

If you use the pre-compiled CSS, copy the font files from `node_modules/govuk-frontend/dist/govuk/assets/fonts/` to your public assets directory and ensure the path matches the location you have configured.

### Configuring the font path in Sass

Before importing GOV.UK Frontend, set the `$govuk-assets-path` or `$govuk-fonts-path` Sass variable to point to the location where your font files live:

```scss
$govuk-assets-path: "/assets/";

@import "node_modules/govuk-frontend/govuk/all";
```

Or set the fonts path directly:

```scss
$govuk-fonts-path: "/assets/fonts/";

@import "node_modules/govuk-frontend/govuk/all";
```

### Disabling GDS Transport

If your service is not on a gov.uk domain, disable GDS Transport to prevent loading a font your service is not licensed to use:

```scss
$govuk-include-default-font-face: false;

@import "node_modules/govuk-frontend/govuk/all";
```

GOV.UK Frontend will then use Arial throughout.

### Font stack

GOV.UK Frontend uses the following font stack:

```text
GDS Transport, arial, sans-serif
```

GDS Transport loads first. Arial is the fallback. `sans-serif` is the generic family fallback for systems where Arial is also unavailable.

### Font variants

GDS Transport includes two weights used by GOV.UK Frontend:

| Weight | Usage |
|---|---|
| Regular (400) | Body text, labels, hints |
| Bold (700) | Headings, strong emphasis |

GDS Transport has no italic variant. Italics render in Arial italic.

### Crown copyright

Redistribution of GDS Transport font files is not permitted. The font files come with the GOV.UK Frontend npm package solely for use on gov.uk domains under the terms of the Crown licence.

---

## Code Examples

### Sass configuration for a gov.uk service

```scss
// Set path before importing govuk-frontend
$govuk-assets-path: "/public/assets/";

@import "govuk-frontend/govuk/all";
```

### Sass configuration for a non-gov.uk service

```scss
// Disable GDS Transport; Arial will be used throughout
$govuk-include-default-font-face: false;

@import "govuk-frontend/govuk/all";
```

### Referencing the font family in custom Sass

When writing custom styles that must match the GOV.UK typeface, use the `$govuk-font-family` variable:

```scss
.my-component {
  font-family: $govuk-font-family; // GDS Transport, arial, sans-serif
}
```

---

## Accessibility

- GDS Transport remains legible at small sizes and under high contrast settings. Do not override letter-spacing, line-height, or font-size in ways that reduce legibility.
- Users who apply a custom typeface via browser or operating system settings will see their chosen font instead of GDS Transport. Ensure that layouts do not break when a different typeface replaces it.
- Do not use CSS font-smoothing properties to alter the rendering of GDS Transport — this can reduce contrast and legibility for some users.

---

## Do / Don't

**Do:**
- Configure the font file path in Sass before importing GOV.UK Frontend.
- Copy font files from the GOV.UK Frontend package to your public assets directory.
- Use `$govuk-include-default-font-face: false` on non-gov.uk domains.
- Use the `$govuk-font-family` Sass variable when referencing the font in custom styles.

**Don't:**
- Use GDS Transport on non-gov.uk domains.
- Redistribute the GDS Transport font files outside the GOV.UK Frontend package.
- Set `font-family` values manually — use the provided Sass variable.
- Apply synthetic bold or italic CSS properties to GDS Transport.

---

## Related Components / Patterns

- [Type scale style](https://design-system.service.gov.uk/styles/type-scale/)
- [Typography – headings](https://design-system.service.gov.uk/styles/typography/)
- [Typography – paragraphs](https://design-system.service.gov.uk/styles/typography/)
- [GOV.UK Frontend font configuration](https://github.com/alphagov/govuk-frontend)
