---
category: foundations
description: The npm package that provides HMRC-specific CSS, JavaScript, and Nunjucks macros that layer on top of GOV.UK Frontend.
hmrc-frontend: "7.x"
keywords:
  - "CSS"
  - "JavaScript"
  - "Nunjucks"
  - "Sass"
  - "frontend"
  - "hmrc-frontend"
  - "installation"
  - "npm package"
  - "setup"
last-reviewed: "2026-04-03"
name: HMRC Frontend
source: "https://github.com/hmrc/hmrc-frontend"
---

# HMRC Frontend

> The npm package that provides HMRC-specific CSS, JavaScript, and Nunjucks macros that layer on top of GOV.UK Frontend.
> Source: <https://github.com/hmrc/hmrc-frontend>

## Overview

HMRC Frontend is the npm package that powers the HMRC Design System. It provides CSS, JavaScript, and Nunjucks template macros for HMRC-specific components that sit alongside GOV.UK Frontend. HMRC maintains it.

HMRC Frontend does not replace GOV.UK Frontend. It adds to it. When you install `hmrc-frontend`, it declares `govuk-frontend` as a peer dependency. Your project needs both packages installed.

HMRC Frontend provides components for:

- Tax identifier input patterns (with format hints and validation guidance)
- The internal header
- Timeline component for showing event histories
- Currency input prefix (the pound sign before an input)
- Notification badge
- HMRC banner and research banner
- Page heading pattern (with section and heading combined)
- Service timeout dialog
- Welsh language toggle

## When to use

- Every HMRC tax service that needs HMRC-specific components.
- GOV.UK Prototype Kit projects that prototype HMRC services.
- Any project that needs HMRC Design System patterns alongside GOV.UK Frontend.

## When not to use

- Services that do not need HMRC-specific components — use `govuk-frontend` alone.
- Non-government services that have no connection to HMRC.

## Installation

### npm (recommended)

```bash
npm install hmrc-frontend govuk-frontend
```

This installs both packages into `node_modules/`.

If your project already has `govuk-frontend` installed (for example, via the GOV.UK Prototype Kit), install only `hmrc-frontend`:

```bash
npm install hmrc-frontend
```

### Check your installed version

```bash
npm list hmrc-frontend
```

## Importing CSS

### Full import via Sass

Import HMRC Frontend after GOV.UK Frontend in your main stylesheet:

```scss
@import "node_modules/govuk-frontend/govuk/all";
@import "node_modules/hmrc-frontend/hmrc/all";
```

If you add both package paths to your Sass load paths:

```scss
@import "govuk-frontend/govuk/all";
@import "hmrc-frontend/hmrc/all";
```

Order matters — `govuk-frontend` must come first because HMRC Frontend references GOV.UK variables and mixins.

### Individual component imports

To reduce CSS output, import only the HMRC components you need:

```scss
// GOV.UK core (required)
@import "govuk-frontend/govuk/all";

// HMRC components (as needed)
@import "hmrc-frontend/hmrc/components/internal-header/internal-header";
@import "hmrc-frontend/hmrc/components/currency-input/currency-input";
@import "hmrc-frontend/hmrc/components/timeline/timeline";
```

### Precompiled CSS

If you do not use Sass, link the precompiled CSS files. Include GOV.UK Frontend CSS first, then HMRC Frontend CSS:

```html
<link rel="stylesheet" href="/path-to/govuk-frontend.min.css">
<link rel="stylesheet" href="/path-to/hmrc-frontend.min.css">
```

## Importing JavaScript

### Initialise all components

Include HMRC Frontend JavaScript after GOV.UK Frontend JavaScript:

```html
<script type="module" src="/path-to/govuk-frontend.bundle.min.js"></script>
<script src="/path-to/hmrc-frontend.min.js"></script>
```

GOV.UK Frontend v5 uses ES modules. HMRC Frontend uses a UMD bundle. Both initialise components via `data-module` attributes.

### The body class script

Add this at the top of your `<body>` element (same as GOV.UK Frontend):

```html
<script>
  document.body.className += ' js-enabled' +
    ('noModule' in HTMLScriptElement.prototype ? ' govuk-frontend-supported' : '');
</script>
```

### Components that require JavaScript

HMRC components that use JavaScript:

- Service timeout dialog (countdown and redirect)
- Character count (inherits from GOV.UK Frontend)

All other HMRC components are CSS-only.

## Nunjucks macros

HMRC Frontend provides Nunjucks macros for its components. Import and use them alongside GOV.UK macros:

```njk
{% from "hmrc/components/currency-input/macro.njk" import hmrcCurrencyInput %}
{% from "hmrc/components/timeline/macro.njk" import hmrcTimeline %}
```

Macro names follow the pattern `hmrc` + PascalCase component name:

- `hmrcCurrencyInput`
- `hmrcTimeline`
- `hmrcInternalHeader`
- `hmrcNotificationBadge`
- `hmrcBanner`
- `hmrcResearchBanner`
- `hmrcPageHeading`
- `hmrcLanguageSelect`

In the GOV.UK Prototype Kit, you may need to add `hmrc-frontend` to the Nunjucks template paths in your project configuration to make macros available without full paths.

## Class name conventions

HMRC Frontend uses the `hmrc-` prefix for all its class names, following BEM conventions:

- Block: `hmrc-timeline`
- Element: `hmrc-timeline__event`
- Modifier: `hmrc-timeline__event--has-documents`

GOV.UK Frontend classes use the `govuk-` prefix. Never mix prefixes — a `govuk-` class comes from `govuk-frontend` and an `hmrc-` class comes from `hmrc-frontend`.

## Versioning and updates

HMRC Frontend follows semantic versioning:

- **Major** versions contain breaking changes.
- **Minor** versions add new features without breaking existing code.
- **Patch** versions fix bugs without changing the API.

Update to the latest version:

```bash
npm update hmrc-frontend
```

Check the [HMRC Frontend changelog](https://github.com/hmrc/hmrc-frontend/blob/main/CHANGELOG.md) before updating. Major version upgrades may require changes to your Sass imports, macro calls, or HTML structure.

## Accessibility

HMRC Frontend components meet WCAG 2.2 Level-AA. Using the components as documented inherits this accessibility work.

HMRC Frontend relies on GOV.UK Frontend's focus state styles — the yellow-and-black focus indicator. Do not override these styles on HMRC components.

## Do and do not

**Do:**

- Install `govuk-frontend` and `hmrc-frontend` together.
- Import GOV.UK Sass before HMRC Sass.
- Use GOV.UK components for all core interface elements.
- Use HMRC components only when a GOV.UK equivalent does not exist.
- Check the changelog before updating.

**Do not:**

- Override GOV.UK Frontend CSS with HMRC-specific changes — use HMRC Frontend's own classes.
- Hard-code spacing or colour values — use the GOV.UK Sass API (`govuk-spacing()`, `govuk-colour()`).
- Forget the `data-module` attribute on HMRC components that require JavaScript.
- Use HMRC macros without installing `hmrc-frontend` in your project.

## Related

- [Foundations](../SKILLS.md) — HMRC Design System overview and additive relationship
- [GOV.UK Frontend](../../../govuk-design-system/foundations/SKILLS.md) — GOV.UK Design System foundations
- [GOV.UK Prototype Kit](../../../govuk-design-system/foundations/prototype-kit/SKILLS.md) — Prototyping setup
