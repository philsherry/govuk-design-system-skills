---
category: foundations
description: The npm package that provides the CSS, JavaScript, fonts, and Nunjucks macros for NHS Design System components.
keywords:
  - "CSS"
  - "JavaScript"
  - "Nunjucks"
  - "Sass"
  - "frontend"
  - "installation"
  - "nhs uk frontend"
  - "nhsuk"
  - "npm package"
  - "setup"
last-reviewed: "2026-04-03"
name: NHS UK Frontend
nhsuk-frontend: "9.x"
source: "https://github.com/nhsuk/nhsuk-frontend"
---

# NHS UK Frontend

> The npm package that provides the CSS, JavaScript, fonts, and Nunjucks macros for NHS Design System components.
> Source: <https://github.com/nhsuk/nhsuk-frontend>

## Overview

NHS UK Frontend is the npm package that powers the NHS Design System. It provides production-ready CSS, JavaScript, Nunjucks template macros, fonts, and image assets for every component and style in the design system. NHS Digital maintains it.

When you install NHS UK Frontend, you get everything you need to build NHS-compliant pages: a page template, a responsive grid, typography styles, spacing utilities, colour variables, and every component from action links to warning callouts.

NHS UK Frontend and the NHS Design System are separate but related. The Design System is the documentation — the guidance, patterns, and examples. NHS UK Frontend is the implementation — the code you install and use.

## When to use

- Every public-facing NHS digital service should use NHS UK Frontend.
- Any Node.js project that needs NHS-styled components and patterns.
- Any project (regardless of tech stack) that needs NHS-compliant HTML and CSS — use the precompiled CSS and JavaScript files.

## When not to use

- Services that are not part of the NHS and do not need to meet NHS branding requirements.
- Projects where the NHS brand does not apply. Frutiger font licensing covers NHS services only.

## Installation

### npm (recommended)

```bash
npm install nhsuk-frontend --save
```

This installs the package into `node_modules/nhsuk-frontend/`.

### Precompiled files

If you do not use npm, download the precompiled CSS and JavaScript from the NHS UK Frontend GitHub releases page. Copy them into your project and link them in your HTML.

## Importing CSS

### Full import via Sass

```scss
@import "node_modules/nhsuk-frontend/packages/nhsuk";
```

If you add `node_modules/nhsuk-frontend/packages` to your Sass load paths:

```scss
@import "nhsuk";
```

### Individual component imports

To reduce CSS output, import only what you need:

```scss
// Core (required)
@import "nhsuk-frontend/packages/core/all";

// Individual components
@import "nhsuk-frontend/packages/components/button/button";
@import "nhsuk-frontend/packages/components/input/input";
@import "nhsuk-frontend/packages/components/error-message/error-message";
```

### Precompiled CSS

Link the minified CSS in your HTML `<head>`:

```html
<link rel="stylesheet" href="/path-to/nhsuk-frontend.min.css">
```

## Importing JavaScript

### Initialise all components

```html
<script src="/path-to/nhsuk.min.js"></script>
```

NHS UK Frontend JavaScript initialises components automatically when the script loads. Components with `data-module` attributes on their root elements activate on page load.

### The body class script

Add this at the top of your `<body>` element:

```html
<script>
  document.body.className += ' js-enabled';
</script>
```

This adds the `js-enabled` class. Components check for this class before initialising, which preserves a no-JS baseline.

### Components that require JavaScript

- Buttons (double-submit prevention)
- Character Count
- Checkboxes (conditional reveal)
- Details (older browser support)
- Error Summary (focus management)
- Header (mobile navigation)
- Radios (conditional reveal)
- Skip Link (focus management)
- Tabs

All other components are CSS-only and require no JavaScript.

## Importing fonts and images

### Serve from node_modules (recommended)

Set up a static file route so requests to `/nhsuk-frontend/assets` serve from the package. In Express.js:

```javascript
const path = require('path')
app.use('/nhsuk-frontend/assets', express.static(
  path.join(__dirname, '/node_modules/nhsuk-frontend/packages/assets')
))
```

### Copy files into your project

Copy the assets directory from the package into your public assets:

- `node_modules/nhsuk-frontend/packages/assets/logos/` — NHS logo SVGs
- `node_modules/nhsuk-frontend/packages/assets/icons/` — Icon SVGs
- `node_modules/nhsuk-frontend/packages/assets/fonts/` — Frutiger font files

### Custom asset paths

Set Sass variables before the main import:

```scss
$nhsuk-assets-path: "/my-assets/";

@import "nhsuk-frontend/packages/nhsuk";
```

## Sass API reference

### Spacing

```scss
.my-element {
  margin-bottom: nhsuk-spacing(6);
  padding: nhsuk-spacing(4);
}
```

### Colour

```scss
.my-element {
  color: $color_nhsuk-black;
  background-color: $color_nhsuk-grey-5;
}
```

### Typography

```scss
.my-heading {
  @include nhsuk-font($size: 24, $weight: bold);
}

.my-body {
  @include nhsuk-font($size: 19);
}
```

### Media queries

```scss
.my-element {
  display: none;

  @include mq($from: tablet) {
    display: block;
  }
}
```

### Settings variables

Key Sass variables you can override before importing:

| Variable | Default | Description |
|---|---|---|
| `$nhsuk-assets-path` | `"/nhsuk-frontend/assets/"` | Path to fonts, images, and icons |
| `$nhsuk-include-font-face` | `true` | Load Frutiger font-face declarations |
| `$nhsuk-font` | `"Frutiger W01", arial, sans-serif` | Primary font stack |

## Versioning and updates

NHS UK Frontend follows semantic versioning:

- **Major** versions contain breaking changes — renamed classes, removed components, changed APIs.
- **Minor** versions add new features without breaking existing code.
- **Patch** versions fix bugs without changing the API.

Check your current version:

```bash
npm list nhsuk-frontend
```

Update to the latest version:

```bash
npm update nhsuk-frontend
```

## Accessibility

- NHS UK Frontend components meet WCAG 2.2 Level-AA. Using the components as documented inherits this accessibility work.
- The page template includes `lang="en"` on the `<html>` element, a skip link, and correct landmark structure.
- Focus states use the NHS yellow-and-black style and meet the 3:1 contrast ratio required by WCAG 2.2 SC 1.4.11.
- JavaScript components degrade gracefully. When JavaScript is unavailable, the HTML remains functional.

## Do and do not

**Do:**

- Install via npm and keep it updated.
- Use the Sass API functions instead of hard-coding values.
- Include the body class script before any other JavaScript.
- Test your service without JavaScript to verify progressive enhancement works.
- Check the changelog before updating.

**Do not:**

- Override NHS UK Frontend CSS with `!important` unless no other option exists.
- Copy-paste component CSS from browser DevTools — use the Sass imports instead.
- Hard-code spacing values — use `nhsuk-spacing()`.
- Hard-code colours — use Sass variables.
- Forget the `data-module` attribute on interactive components.

## Related

- [Foundations](../SKILLS.md) — Design principles and technology stack
- [Prototype Kit](../prototype-kit/SKILLS.md) — Prototyping with NHS UK Frontend
- [Page Template](../../styles/page-template/SKILLS.md) — HTML document structure
- [Layout](../../styles/layout/SKILLS.md) — Grid system and page width
- [Spacing](../../styles/spacing/SKILLS.md) — The spacing scale and override classes
- [Colour](../../styles/colour/SKILLS.md) — The colour palette
- [Typeface](../../styles/typeface/SKILLS.md) — Frutiger and font loading
- [Accessibility](../../accessibility/SKILLS.md) — WCAG 2.2 and NHS accessibility requirements
