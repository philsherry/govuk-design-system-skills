---
category: foundations
description: The npm package that provides the CSS, JavaScript, fonts, and Nunjucks macros for GOV.UK Design System components. Every GOV.UK service and prototype depends on it.
govuk-frontend: "5.x"
keywords:
  - "CSS"
  - "JavaScript"
  - "Nunjucks"
  - "Sass"
  - "frontend"
  - "gov.uk frontend"
  - "govuk"
  - "installation"
  - "npm package"
  - "setup"
last-reviewed: "2026-04-03"
name: GOV.UK Frontend
source: "https://frontend.design-system.service.gov.uk/"
---

# GOV.UK Frontend

> The npm package that provides the CSS, JavaScript, fonts, and Nunjucks macros for GOV.UK Design System components. Every GOV.UK service and prototype depends on it.
> Source: https://frontend.design-system.service.gov.uk/

## Overview

GOV.UK Frontend is the npm package that powers the GOV.UK Design System. It provides production-ready CSS, JavaScript, Nunjucks template macros, fonts, and image assets for every component and style in the design system. The Government Digital Service (GDS) maintains it, and it follows semantic versioning.

When you install GOV.UK Frontend, you get everything you need to build GOV.UK-compliant pages: a page template, a responsive grid, typography styles, spacing utilities, colour variables, and every component from accordions to warning text. The Prototype Kit includes it as a dependency, so prototypes get it automatically. Production services install it directly via npm.

GOV.UK Frontend and the GOV.UK Design System are separate but related. The Design System is the documentation — the guidance, patterns, and examples. GOV.UK Frontend is the implementation — the code you install and use. The Design System tells you what to build; GOV.UK Frontend gives you the building blocks.

## When to use

- Every GOV.UK service that passes through a service assessment must use GOV.UK Frontend.
- Every GOV.UK Prototype Kit prototype uses it automatically.
- Any Node.js project that needs GOV.UK-styled components and patterns.
- Any project (regardless of tech stack) that needs GOV.UK-compliant HTML and CSS — use the precompiled CSS and JavaScript files.

## When not to use

- Internal tools that are not part of a GOV.UK service and do not need to meet the GOV.UK Service Standard. Even then, consider using it for consistency.
- Projects where the GOV.UK brand and Crown copyright do not apply (e.g. non-government projects). GDS Transport font licensing covers gov.uk domains only.

## Installation

### npm (recommended)

```bash
npm install govuk-frontend --save
```

This installs the package into `node_modules/govuk-frontend/`. The key directories inside are:

- `dist/govuk/` — compiled CSS, JavaScript, and assets ready for use
- `dist/govuk/components/` — individual component Sass partials
- `dist/govuk/assets/` — fonts, images, and manifest

### Precompiled files

If you do not use npm, download the precompiled CSS and JavaScript from the GOV.UK Frontend GitHub releases page. Copy `govuk-frontend.min.css` and `govuk-frontend.min.js` into your project and link them in your HTML.

### Prototype Kit

The Prototype Kit installs GOV.UK Frontend automatically. You do not need to install it separately. The kit also handles Nunjucks macro imports, asset paths, and JavaScript initialisation for you.

## Importing CSS

### Full import via Sass

Add one line to your Sass file to import everything:

```scss
@import "node_modules/govuk-frontend/dist/govuk";
```

If you add `node_modules/govuk-frontend/dist` to your Sass load paths, you can shorten this to:

```scss
@import "govuk";
```

### Individual component imports

To reduce CSS output, import only what you need. The import order matters:

```scss
// 1. Base (settings, tools, helpers — outputs no CSS on its own)
@import "govuk-frontend/dist/govuk/base";

// 2. Core (typography, links — about 10% of total output)
@import "govuk-frontend/dist/govuk/core/all";

// 3. Objects (page template, grid, form groups — about 5%)
@import "govuk-frontend/dist/govuk/objects/all";

// 4. Individual components (about 70% when all included)
@import "govuk-frontend/dist/govuk/components/button/button";
@import "govuk-frontend/dist/govuk/components/input/input";
@import "govuk-frontend/dist/govuk/components/error-message/error-message";

// 5. Utilities (about 1%)
@import "govuk-frontend/dist/govuk/utilities/all";

// 6. Overrides (about 15%)
@import "govuk-frontend/dist/govuk/overrides/all";
```

### Precompiled CSS

Link the minified CSS in your HTML `<head>`:

```html
<link rel="stylesheet" href="/path-to/govuk-frontend.min.css">
```

### Dart Sass

GOV.UK Frontend requires Dart Sass (not the deprecated Node Sass). To suppress deprecation warnings from GOV.UK Frontend's dependencies, pass the `--quiet-deps` flag on the command line or set `quietDeps: true` in the JavaScript API options.

## Importing JavaScript

### The body class script

Add this script at the top of your `<body>` element, before any other scripts:

```html
<script>
  document.body.className += ' js-enabled' + ('noModule' in HTMLScriptElement.prototype ? ' govuk-frontend-supported' : '');
</script>
```

This adds `js-enabled` and `govuk-frontend-supported` classes. Components check for `govuk-frontend-supported` before initialising, which protects older browsers from running JavaScript they cannot handle.

### Initialise all components with initAll()

The simplest approach — initialise every component on the page:

```javascript
import { initAll } from 'govuk-frontend'
initAll()
```

You can pass configuration to specific components:

```javascript
initAll({
  characterCount: {
    maxLength: 500
  }
})
```

### Initialise individual components with createAll()

Import only the components you need to reduce bundle size:

```javascript
import { createAll, SkipLink, CharacterCount } from 'govuk-frontend'

createAll(SkipLink)
createAll(CharacterCount, { maxLength: 500 })
```

### Initialise a specific DOM scope

When you add new markup dynamically (e.g. in a modal), initialise that section:

```javascript
import { initAll } from 'govuk-frontend'

const $modal = document.querySelector('.app-modal')
if ($modal) {
  initAll({ scope: $modal })
}
```

Or with individual components:

```javascript
import { createAll, CharacterCount } from 'govuk-frontend'

createAll(CharacterCount, { maxLength: 500 }, $modal)
```

### Manual initialisation

For full control, instantiate components directly:

```javascript
import { CharacterCount } from 'govuk-frontend'

const $counts = document.querySelectorAll('[data-module="govuk-character-count"]')
$counts.forEach(($count) => {
  try {
    new CharacterCount($count, { maxLength: 500 })
  } catch (error) {
    console.error('CharacterCount failed to initialise:', error)
  }
})
```

### Error handling

Both `initAll()` and `createAll()` accept error callbacks:

```javascript
initAll({
  onError(error, context) {
    // context.component is the component class
    // context.element is the DOM element
    console.error(error, context)
  }
})

createAll(SkipLink, undefined, undefined, (error, context) => {
  console.error(error, context)
})
```

### The data-module attribute

Every GOV.UK Frontend component that requires JavaScript uses a `data-module` attribute on its root element. The value follows the pattern `govuk-[component-name]`:

- `data-module="govuk-accordion"`
- `data-module="govuk-button"`
- `data-module="govuk-character-count"`
- `data-module="govuk-exit-this-page"`
- `data-module="govuk-password-input"`

`initAll()` finds every element with a `data-module` attribute and initialises the matching component. If you use Nunjucks macros, the macro adds the `data-module` attribute for you. If you write HTML by hand, you must add it yourself.

### ES modules and script type

GOV.UK Frontend JavaScript uses ES module syntax. Your `<script>` tag must have `type="module"`:

```html
<script type="module">
  import { initAll } from '/path-to/govuk-frontend.min.js'
  initAll()
</script>
```

### UMD bundle

For projects using CommonJS or AMD, GOV.UK Frontend also provides a UMD bundle:

```javascript
const { Accordion } = require('govuk-frontend')
```

### Content Security Policy

If your Content Security Policy blocks inline scripts, allow the body class script using one of:

- **Hash (recommended):** Add `sha256-GUQ5ad8JK5KmEWmROf3LZd9ge94daqNvd8xy9YS1iDw=` to your `script-src` directive
- **Nonce:** Set the `cspNonce` variable in your Nunjucks context, and the page template adds nonce attributes automatically

## Importing fonts and images

### Serve from node_modules (recommended)

Set up a static file route so requests to `/assets` serve from the GOV.UK Frontend assets directory. In Express.js:

```javascript
const path = require('path')
app.use('/assets', express.static(
  path.join(__dirname, '/node_modules/govuk-frontend/dist/govuk/assets')
))
```

### Copy files into your project

Copy these directories into your application's public assets:

- `node_modules/govuk-frontend/dist/govuk/assets/images/` — Crown logos, favicon, and the govuk-crest image
- `node_modules/govuk-frontend/dist/govuk/assets/fonts/` — GDS Transport font files (WOFF and WOFF2)
- `node_modules/govuk-frontend/dist/govuk/assets/manifest.json` — asset manifest

If you copy files, automate the copy step in your build process so they stay in sync when you update GOV.UK Frontend.

### Custom asset paths

If your asset directory structure differs from the default `/assets/` path, set Sass variables before the main import:

```scss
// Single parent folder
$govuk-assets-path: "/my-assets/";

// Or separate folders for fonts and images
$govuk-images-path: "/static/images/";
$govuk-fonts-path: "/static/fonts/";

@import "govuk-frontend/dist/govuk";
```

## Sass API reference

GOV.UK Frontend exposes a comprehensive Sass API. Use these functions and mixins in your custom stylesheets instead of hard-coding values — they ensure your custom styles stay consistent with the design system and respond as expected at breakpoints.

### Spacing

The most commonly used function. Returns a pixel value from the GOV.UK spacing scale (0 to 9):

```scss
.my-element {
  margin-bottom: govuk-spacing(6);  // 30px
  padding: govuk-spacing(4);        // 20px
}
```

Responsive margin and padding mixins apply different values at different breakpoints:

```scss
.my-element {
  @include govuk-responsive-margin(6, "bottom");
  @include govuk-responsive-padding(4);
}
```

### Colour

Fetch colours from the GOV.UK palette:

```scss
.my-element {
  color: govuk-colour("red");
  background-color: govuk-colour("light-grey");
}
```

Functional colours use CSS custom properties and respond to system themes:

```scss
.my-element {
  color: govuk-functional-colour("text");
  border-color: govuk-functional-colour("border");
}
```

Government organisation colours:

```scss
.my-header {
  background-color: govuk-organisation-colour("home-office");
}
```

### Typography

The `govuk-font` mixin sets font family, size, weight, and line height in one call:

```scss
.my-heading {
  @include govuk-font($size: 24, $weight: bold);
}

.my-body {
  @include govuk-font($size: 19);
}
```

For the font size only (with responsive scaling):

```scss
.my-element {
  @include govuk-font-size($size: 16);
}
```

Tabular (monospaced) numbers for alignment in tables:

```scss
.my-table-cell {
  @include govuk-font-tabular-numbers;
}
```

### Media queries

Wrap styles in responsive breakpoints using named breakpoints or custom values:

```scss
.my-element {
  display: none;

  @include govuk-media-query($from: tablet) {
    display: block;
  }

  @include govuk-media-query($until: desktop) {
    font-size: 14px;
  }

  @include govuk-media-query($from: tablet, $until: desktop) {
    width: 50%;
  }
}
```

The named breakpoints are:

| Name | Min-width |
|------|-----------|
| `mobile` | 320px |
| `tablet` | 641px |
| `desktop` | 769px |

### Layout

Grid column mixin:

```scss
.my-column {
  @include govuk-grid-column(one-third);
}
```

Available widths: `one-quarter`, `one-third`, `one-half`, `two-thirds`, `three-quarters`, `full`.

Container width:

```scss
.my-container {
  @include govuk-width-container;
}
```

Clearfix:

```scss
.my-wrapper {
  @include govuk-clearfix;
}
```

### Accessibility

Visually hide content while keeping it accessible to screen readers:

```scss
.my-hidden-label {
  @include govuk-visually-hidden;
}
```

Visually hidden but visible when focused (for skip links):

```scss
.my-skip-link {
  @include govuk-visually-hidden-focusable;
}
```

Focus state mixins for custom interactive elements:

```scss
.my-link:focus {
  @include govuk-focused-text;
}

.my-image-link:focus {
  @include govuk-focused-box;
}

.my-input:focus {
  @include govuk-focused-form-input;
}
```

### Links

Apply GOV.UK link styles to custom elements:

```scss
.my-link {
  @include govuk-link-common;
  @include govuk-link-style-default;
  @include govuk-link-decoration;

  &:hover {
    @include govuk-link-hover-decoration;
  }
}
```

Link style variants:

- `govuk-link-style-default` — blue with visited purple
- `govuk-link-style-muted` — secondary text colour
- `govuk-link-style-text` — body text colour (for navigation)
- `govuk-link-style-inverse` — white on dark backgrounds
- `govuk-link-style-no-visited-state` — no visited colour change
- `govuk-link-style-no-underline` — underline only on hover
- `govuk-link-style-error` — error (red) colour
- `govuk-link-style-success` — success (green) colour

### Settings variables

Key Sass variables you can override before importing GOV.UK Frontend:

| Variable | Default | Description |
|----------|---------|-------------|
| `$govuk-assets-path` | `"/assets/"` | Path to fonts and images |
| `$govuk-global-styles` | `false` | Auto-style paragraphs and links without classes |
| `$govuk-font-family` | `"GDS Transport", arial, sans-serif` | Primary font stack |
| `$govuk-page-width` | `1020px` | Maximum page width |
| `$govuk-gutter` | `30px` | Grid gutter width |
| `$govuk-breakpoints` | `(mobile: 320px, tablet: 641px, desktop: 769px)` | Responsive breakpoints |
| `$govuk-root-font-size` | `16px` | Root font size for rem calculations |

Set these before the `@import` line:

```scss
$govuk-assets-path: "/static/";
$govuk-global-styles: true;

@import "govuk-frontend/dist/govuk";
```

## Configuration

### Via Nunjucks macros

Pass options to component macros. Each component's SKILLS.md file documents the Nunjucks macro API:

```njk
{{ govukButton({
  text: "Save and continue",
  classes: "govuk-button--start"
}) }}
```

### Via HTML data attributes

Configure components through `data-` attributes on the HTML element:

```html
<div data-module="govuk-character-count" data-maxlength="500">
```

### Via JavaScript

Pass configuration objects when initialising:

```javascript
initAll({
  characterCount: {
    maxLength: 500
  }
})
```

The precedence order (highest to lowest): HTML data attributes, JavaScript config, Nunjucks defaults.

## Versioning and updates

GOV.UK Frontend follows semantic versioning:

- **Major** versions (e.g. 4.x to 5.x) contain breaking changes — renamed classes, removed components, changed APIs. Read the migration guide before updating.
- **Minor** versions (e.g. 5.1 to 5.2) add new features without breaking existing code.
- **Patch** versions (e.g. 5.2.0 to 5.2.1) fix bugs without changing the API.

Check your current version:

```bash
npm list govuk-frontend
```

Update to the latest version:

```bash
npm update govuk-frontend
```

Update to a specific version:

```bash
npm install govuk-frontend@5.8.0
```

After updating, check the changelog for any changes that affect your service. For major version updates, follow the migration guide on the GOV.UK Frontend documentation site.

## How GOV.UK Frontend fits into the wider ecosystem

### GOV.UK Design System

The Design System is the documentation. GOV.UK Frontend is the code. The Design System tells you when to use a component, how it should behave, and what accessibility requirements it has. GOV.UK Frontend gives you the HTML, CSS, JavaScript, and Nunjucks macros to build it.

### GOV.UK Prototype Kit

The Prototype Kit installs GOV.UK Frontend as a dependency and configures everything automatically — Sass compilation, asset paths, Nunjucks macro imports, and JavaScript initialisation. When you write `{{ govukButton({ text: "Continue" }) }}` in a prototype, the kit resolves that to GOV.UK Frontend's button macro without any import line.

### GOV.UK Frontend and the Service Standard

Point 13 of the GOV.UK Service Standard requires services to "use and contribute to open standards, common components and patterns". GOV.UK Frontend is the common component library that satisfies this requirement. Service assessors expect to see GOV.UK Frontend class names and markup patterns in your code.

## Accessibility

- GOV.UK Frontend components meet WCAG 2.2 Level-AA. If you use the components as documented, your implementation inherits this accessibility work.
- The page template includes `lang="en"` on the `<html>` element, a skip link, and correct landmark structure.
- Focus states use the GOV.UK yellow-and-black style (3px yellow outline with a 3px black bottom border on text elements) and meet the 3:1 contrast ratio required by WCAG 2.2 SC 1.4.11.
- JavaScript components degrade gracefully. When JavaScript is unavailable, the HTML remains functional — accordions show all content expanded, character counts hide the counter, and buttons work as standard `<button>` elements.
- The `govuk-frontend-supported` body class ensures components only enhance when the browser supports ES modules. Older browsers get the non-JavaScript experience.

## Do and Do not

**Do:**

- Install via npm and keep it updated.
- Use the Sass API functions (`govuk-spacing()`, `govuk-colour()`, `govuk-font()`) instead of hard-coding values.
- Use `initAll()` unless you have a specific reason to initialise individual components.
- Include the body class script before any other JavaScript.
- Test your service without JavaScript to verify progressive enhancement works.
- Check the changelog before updating, and always before major versions.

**Do not:**

- Do not override GOV.UK Frontend CSS with `!important` unless there is no other option. If you need to change a component's appearance, check whether there is a supported modifier class or Sass variable first.
- Do not copy-paste component CSS from browser DevTools. Use the Sass imports instead — they include responsive behaviour and print styles that DevTools does not show.
- Do not hard-code spacing values. Use `govuk-spacing()` so your custom styles match the design system scale.
- Do not hard-code colours. Use `govuk-colour()` or `govuk-functional-colour()` so your styles stay consistent if the palette changes.
- Do not forget the `data-module` attribute on interactive components. Without it, JavaScript initialisation does nothing.
- Do not use Node Sass. The Node Sass maintainers deprecated it, and it does not support modern Sass features that GOV.UK Frontend requires. Use Dart Sass.

## Related

- [Foundations](../SKILLS.md) — Design principles and technology stack
- [Prototype Kit](../prototype-kit/SKILLS.md) — Rapid prototyping with GOV.UK Frontend
- [Page Template](../../styles/page-template/SKILLS.md) — The HTML document structure GOV.UK Frontend provides
- [Layout](../../styles/layout/SKILLS.md) — Grid system and page width
- [Spacing](../../styles/spacing/SKILLS.md) — The spacing scale and override classes
- [Colour](../../styles/colour/SKILLS.md) — The colour palette
- [Typeface](../../styles/typeface/SKILLS.md) — GDS Transport and font loading
- [Accessibility](../../accessibility/SKILLS.md) — WCAG 2.2 and GOV.UK accessibility requirements
