---
category: foundations
description: Core principles, technology stack, and guidance for building GOV.UK services.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: GOV.UK Design System — Foundations
---

# GOV.UK Design System — Foundations

> Core principles, technology stack, and guidance for building GOV.UK services.
> Source: https://design-system.service.gov.uk/get-started/

---

## Overview

The GOV.UK Design System provides styles, components, and patterns for building accessible, consistent, and usable government services. The Government Digital Service (GDS) maintains it, and it sets the standard for all public-facing services on GOV.UK.

GOV.UK Frontend backs the Design System — an npm package (`govuk-frontend`) that delivers production-ready HTML, Sass, and JavaScript for every component. Teams building services on GOV.UK should use the Design System as the starting point for their interface, diverging only when clear evidence from user research shows that a different approach works better for their users.

The Design System covers three areas:

- **Styles** — Visual foundations: layout, spacing, colour, typography, and images.
- **Components** — Reusable interface elements: buttons, form inputs, navigation, notifications.
- **Patterns** — Higher-level guidance for recurring design problems, combining components with content and interaction guidance.

---

## When to use the Design System

Use the GOV.UK Design System when:

- Building any public-facing UK government service that must meet the GOV.UK Service Standard.
- Building internal government tools that should align with the GOV.UK accessibility and consistency bar.
- Prototyping a government service for user research — use the GOV.UK Prototype Kit, which ships with GOV.UK Frontend pre-installed.
- You need accessible, tested components without building them from scratch.
- Your service faces assessment against the GOV.UK Service Standard — assessors expect you to use the Design System.

---

## When not to use the Design System

Do not use the GOV.UK Design System when:

- Building a service or product that is not a UK government service and has no requirement to look like GOV.UK.
- Applying the GOV.UK crown logotype, GDS Transport typeface, or the `.govuk-` class namespace to non-government contexts — this violates HM Government identity guidelines.

If your service is not on GOV.UK but must use accessible patterns like those in the Design System, you can use the underlying HTML structure and adapt the visual layer to your own brand.

---

## How it works

GOV.UK Frontend is the npm package that implements the Design System. It contains:

- Sass source files for every component, compiled into a single stylesheet.
- Nunjucks macros for server-side rendering of every component.
- Vanilla JavaScript ES modules for components that require client-side behaviour.
- GDS Transport font files and the GOV.UK crown image.

The package does not depend on any JavaScript framework. It works alongside any server-side language or framework that can serve HTML. Node.js projects can use the Nunjucks macros; other environments use the plain HTML output.

---

## The 10 GOV.UK Design Principles

The GOV.UK Design Principles underpin all design and content decisions across government services.

1. **Start with user needs** — Research what users actually need, not what they say they want or what government thinks they need. Design for those real needs.

2. **Do less** — Government should only do what only government can do. If there is a better service elsewhere, point users to it. Concentrate resources on what matters.

3. **Design with data** — Use analytics and research to understand how users use services and how to improve them. Measure success with real usage metrics, not assumptions.

4. **Do the hard work to make it simple** — Making something look simple is hard. Do the hard work so users do not have to.

5. **Iterate. Then iterate again** — Build the best services iteratively. Launch, learn, and improve. Never treat a service as finished.

6. **This is for everyone** — Accessible design is good design. Build services that work for everyone, including people with disabilities, low digital literacy, or limited connectivity.

7. **Understand context** — Design for the context in which users will use the service — on the bus, in a hurry, under stress — not in ideal conditions.

8. **Build digital services, not websites** — A service is not a website. Design the whole experience, from the user's first awareness of a need through to their final interaction with government.

9. **Be consistent, not uniform** — Use the same language and design patterns wherever possible, but not at the expense of the user's experience of a specific service. Consistency reduces confusion; rigid uniformity can cause it.

10. **Work in the open: it produces better outcomes** — Share code, designs, data, and learning. The more government works in the open, the better the outcomes for everyone.

---

## Technology Stack

GOV.UK Frontend uses standard web technologies with minimal dependencies.

| Layer | Technology |
|---|---|
| Package management | npm |
| CSS preprocessor | Sass (SCSS syntax) |
| Templating | Nunjucks (server-side, Node.js) |
| JavaScript | Vanilla ES modules (no framework dependency) |
| HTML | Semantic HTML5 |
| Fonts | GDS Transport (served from your own assets) |

**Package name:** `govuk-frontend`

**Key paths inside the package:**

| Path | Contents |
|---|---|
| `govuk-frontend/govuk/all.scss` | Single entry point importing every component's Sass |
| `govuk-frontend/govuk/components/` | Per-component Sass, Nunjucks macros, and JavaScript |
| `govuk-frontend/govuk/all.mjs` | ES module entry point for all component JavaScript |
| `govuk-frontend/dist/govuk/` | Pre-built CSS and JavaScript bundles |
| `govuk-frontend/dist/govuk/assets/` | GDS Transport fonts and GOV.UK crown images |

---

## Installing GOV.UK Frontend

**Install the package:**

```bash
npm install govuk-frontend
```

**Import all Sass in your main stylesheet:**

```scss
@import "node_modules/govuk-frontend/govuk/all";
```

If your Sass compiler has `node_modules` on the load path:

```scss
@use "govuk-frontend/govuk/all";
```

**Copy font and image assets to your public directory.** GOV.UK Frontend includes GDS Transport font files and the GOV.UK crown. Serve these statically. The default path the Sass expects is `/assets/fonts/` and `/assets/images/`. Override with:

```scss
$govuk-assets-path: "/my-custom-assets-path/";
@import "node_modules/govuk-frontend/govuk/all";
```

**Or use the pre-built bundles from `dist/` without a build step:**

```html
<link rel="stylesheet" href="/assets/govuk-frontend.min.css">
<script type="module" src="/assets/govuk-frontend.bundle.min.js"></script>
```

---

## HTML vs Nunjucks

You can use GOV.UK Frontend components as plain HTML or via Nunjucks macros.

**Plain HTML** — Copy the component HTML directly into any template. This works with any server-side language (PHP, Python, Ruby, .NET, Django, Rails) or static site generator. You are responsible for keeping the markup current when upgrading GOV.UK Frontend.

**Nunjucks macros** — Available to projects using Nunjucks as a template engine, including Express.js applications and the GOV.UK Prototype Kit. Macros accept a parameters object and render the correct, up-to-date HTML. When you upgrade the package, macros update automatically.

**When to use which:**

- Use Nunjucks macros in Express.js and GOV.UK Prototype Kit projects.
- Use plain HTML when your framework does not support Nunjucks (React, Django, Rails, etc.).
- Choose one approach consistently — do not mix both for the same component.

**Importing a Nunjucks macro:**

```nunjucks
{% from "govuk/components/button/macro.html" import govukButton %}
```

**Calling a macro:**

```nunjucks
{{ govukButton({
  text: "Save and continue"
}) }}
```

Macro names follow the pattern `govuk` + PascalCase component name. In the GOV.UK Prototype Kit, all macros are available globally without explicit imports.

---

## Initialising JavaScript

GOV.UK Frontend v5 uses ES modules. Initialise components that require JavaScript after the DOM is ready.

**Add the `govuk-frontend-supported` class to `<body>` before any scripts.** Place this inline script straight after the opening `<body>` tag:

```html
<script>
  document.body.className += ' js-enabled' +
    ('noModule' in HTMLScriptElement.prototype ? ' govuk-frontend-supported' : '');
</script>
```

Without the `govuk-frontend-supported` class, JavaScript-dependent components (Accordion, Character Count, Password Input, and others) will not initialise.

**Initialise all components at once (recommended):**

```javascript
import { initAll } from 'govuk-frontend'

initAll()
```

`initAll` queries the DOM for every `[data-module]` attribute and initialises the matching component class. Call it once after the DOM is ready.

**Initialise a single component:**

```javascript
import { Button } from 'govuk-frontend'

const $button = document.querySelector('[data-module="govuk-button"]')

if ($button) {
  new Button($button)
}
```

Use single-component initialisation when you need fine-grained control, or when you add components to the DOM dynamically after the initial page load.

**Initialise within a scoped container** (for dynamically loaded content):

```javascript
import { initAll } from 'govuk-frontend'

const $container = document.querySelector('#dynamic-region')
initAll({ scope: $container })
```

**Using the pre-built bundle via a `<script>` tag:**

```html
<script type="module">
  import { initAll } from '/assets/govuk-frontend.bundle.min.js'
  initAll()
</script>
```

**Components that require JavaScript:**

- Accordion
- Button (double-submit prevention)
- Character Count
- Checkboxes (conditional reveal)
- Details (older browser polyfill)
- Error Summary (focus management on load)
- Exit This Page
- Header (mobile navigation)
- Notification Banner
- Password Input
- Radios (conditional reveal)
- Service Navigation
- Tabs

All other components are CSS-only and require no JavaScript.

---

## Accessibility

GOV.UK Frontend targets WCAG 2.2 Level-AA, the minimum the Public Sector Bodies Accessibility Regulations 2018 require.

All components:

- Use semantic HTML5 elements.
- Include ARIA roles and attributes only where HTML semantics alone are insufficient.
- Support full keyboard navigation.
- Meet WCAG 1.4.3 colour contrast (minimum 4.5:1 for normal text, 3:1 for large text and UI components).
- Meet WCAG 2.4.11 and 2.4.12 focus appearance requirements (high-contrast yellow focus ring).
- Tested with NVDA + Firefox, JAWS + Chrome, VoiceOver (macOS and iOS), and TalkBack (Android).

Teams are responsible for ensuring their use of components remains accessible. Custom CSS that changes colour, spacing, or visibility can break accessibility. Test with real assistive technologies before release.

---

## Do / Don't

**Do** use the Design System before building anything custom — the team has tested components for accessibility, and users of GOV.UK find them familiar to users of GOV.UK.

**Do** use Nunjucks macros in Node.js projects to keep component HTML automatically in sync with the package.

**Do** import GOV.UK Frontend Sass before your own custom Sass, so your overrides take effect.

**Do** include the `govuk-frontend-supported` inline script on every page that uses JavaScript-dependent components.

**Do** pin `govuk-frontend` to an explicit version in production; avoid floating ranges like `^5.0.0` for live services.

**Do** run `npm audit` and keep the package up to date — security patches and accessibility fixes ship in minor and patch versions.

**Do** copy font and image assets from `dist/govuk/assets/` to your public directory — do not serve them from `node_modules` at runtime.

**Don't** change files inside `node_modules/govuk-frontend` — override via Sass variables and your own stylesheet instead.

**Don't** call `initAll()` more than once on the same element — components will be double-initialised.

**Don't** remove the skip link — keyboard-only users and screen reader users need it.

**Don't** use `.govuk-` class names, the GOV.UK crown, or the GDS Transport typeface on non-government services.

**Don't** use the GOV.UK Prototype Kit for real services or collect real user data in prototypes.

---

## Related Components / Patterns

- `foundations/prototype-kit/SKILLS.md` — GOV.UK Prototype Kit setup and usage
- `styles/page-template/SKILLS.md` — The GOV.UK page template
- `styles/layout/SKILLS.md` — Page layout and grid system
- `components/header/SKILLS.md` — GOV.UK header component
- `components/footer/SKILLS.md` — GOV.UK footer component
- `components/skip-link/SKILLS.md` — Skip to main content link
- `accessibility/SKILLS.md` — Accessibility requirements and testing guidance
