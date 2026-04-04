---
category: foundations
description: Core principles, technology stack, and guidance for building DWP services using GOV.UK Frontend and DWP Frontend.
dwp-frontend: "3.x"
keywords:
  - "DWP"
  - "Nunjucks"
  - "POUR"
  - "Sass"
  - "design principles"
  - "dwp-frontend"
  - "govuk-frontend"
  - "internal services"
  - "npm"
  - "progressive enhancement"
  - "technology stack"
last-reviewed: "2026-04-04"
name: DWP Design System — Foundations
source: "https://design-system.dwp.gov.uk/get-started"
---

# DWP Design System — Foundations

> Core principles, technology stack, and guidance for building DWP services using GOV.UK Frontend and DWP Frontend.
> Source: <https://design-system.dwp.gov.uk/get-started>

## Overview

The DWP Design System provides components and patterns for building accessible, consistent DWP services. It extends the GOV.UK Design System with components specific to DWP needs — internal (agent-facing) services, navigation patterns, Welsh language support, and Universal Credit interfaces.

DWP Frontend (`@dwp/dwp-frontend`) backs the DWP Design System — an npm package that delivers Nunjucks macros, Sass partials, and JavaScript for DWP-specific components. It depends on GOV.UK Frontend (`govuk-frontend`) and does not replace it. Every DWP service installs both packages.

The DWP Design System covers:

- **Components** — DWP-specific interface elements: internal service header and footer, horizontal and side navigation, timeline, quick reference, language toggle.
- **Patterns** — Higher-level guidance: add another thing, find an address, manage a session timeout, make a declaration, toggle to Welsh, contact a service, choose alternative contact formats.
- **Templates** — Page-level templates: cookies page, internal service page.
- **Guidance** — Supplementary guidance: hint text, external service footer, removing GOV.UK branding.

## Relationship to GOV.UK

DWP builds on top of the GOV.UK Design System. Teams should check the GOV.UK Design System first — DWP components exist only for needs that the core system does not address.

DWP services use:

- `govuk-frontend` for all core components (buttons, text inputs, radios, error summaries, fieldsets, panels, etc.)
- `@dwp/dwp-frontend` for DWP-specific components
- `govuk-` CSS class prefixes for GOV.UK components
- `dwp-` CSS class prefixes for DWP-specific components

Agents working on DWP services must reference both `dwp-design-system/` and `govuk-design-system/` SKILLS.md files.

## When to use the DWP Design System

Use the DWP Design System when:

- Building a DWP internal (agent-facing) service that needs components without GOV.UK branding.
- Building a DWP public-facing service that needs DWP-specific patterns (session timeout, Welsh language toggle, address lookup).
- Your service needs navigation components for internal tools (horizontal navigation, side navigation).
- Your service needs to display case reference information (quick reference component).
- Building a Universal Credit service that needs UC-specific components (action cards, claimant header, agent header).

## When not to use the DWP Design System

Do not use DWP Frontend components when the GOV.UK Design System provides an equivalent. For example:

- Use the GOV.UK header and footer for public-facing services on `service.gov.uk` domains — do not use the DWP internal service header.
- Use GOV.UK buttons, form inputs, and error handling — DWP Frontend does not provide alternatives for these.
- Do not use the DWP internal service page template for services hosted on `service.gov.uk`.

## Technology stack

### npm packages

| Package | Purpose | Current major |
|---------|---------|---------------|
| `govuk-frontend` | Core GOV.UK components, styles, and JavaScript | 5.x |
| `@dwp/dwp-frontend` | DWP-specific components | 3.x |
| `govuk-prototype-kit` | Rapid prototyping tool | 13.x |

### Frontend libraries

DWP Frontend depends on GOV.UK Frontend. Install both:

```bash
npm install govuk-frontend @dwp/dwp-frontend
```

### Nunjucks macros

DWP Frontend registers its macros with the GOV.UK Prototype Kit automatically via `govuk-prototype-kit.config.json`. In the Prototype Kit, do not add `{% from %}` import lines — the kit handles imports.

In standalone builds, import macros from the package:

```njk
{% from "horizontal-navigation/macro.njk" import dwpHorizontalNavigation %}
{% from "internal-service-header/macro.njk" import dwpHeader %}
{% from "internal-service-footer/macro.njk" import dwpFooter %}
{% from "timeline/macro.njk" import dwpTimeline %}
{% from "language-toggle/macro.njk" import dwpLanguageToggle %}
{% from "quick-reference/macro.njk" import dwpQuickReference %}
{% from "side-navigation/macro.njk" import dwpSideNavigation %}
```

### Sass

DWP Frontend provides Sass partials for each component. The Prototype Kit includes them automatically. In standalone builds, import the partials you need:

```scss
@import "node_modules/@dwp/dwp-frontend/components/internal-service-header/internal-service-header";
@import "node_modules/@dwp/dwp-frontend/components/internal-service-footer/internal-service-footer";
@import "node_modules/@dwp/dwp-frontend/components/timeline/timeline";
```

### JavaScript

DWP Frontend has minimal JavaScript. Only the side navigation component requires JS initialisation for its mobile toggle behaviour. The package exports an `initAll()` function:

```javascript
const DWPfrontend = require("@dwp/dwp-frontend/components/components");
DWPfrontend.initAll();
```

Or target the side navigation directly:

```javascript
const { SideNavigation } = require("@dwp/dwp-frontend/components/side-navigation/side-navigation");
const $button = document.querySelector("[data-module='dwp-side-navigation']");
if ($button) {
  new SideNavigation("[data-module='dwp-side-navigation']").init();
}
```

### HTML vs Nunjucks

DWP Frontend provides both raw HTML snippets and Nunjucks macros for every component.

**In the GOV.UK Prototype Kit**, use Nunjucks macros. The kit registers DWP macros automatically — no `{% from %}` imports needed. Macros accept a parameters object and render the correct HTML, staying in sync when you upgrade the package.

**In production**, teams choose based on their tech stack. Node.js services use Nunjucks. Play Framework services (Scala) use Twirl templates with the raw HTML. Python, .NET, and other stacks also use the raw HTML and maintain their own template wrappers. Pick one approach per project and stay consistent.

When using raw HTML, you take responsibility for updating markup when upgrading `@dwp/dwp-frontend`.

### Class name conventions

DWP Frontend uses the `dwp-` prefix for all class names and follows BEM naming conventions:

- Block: `dwp-header`
- Element: `dwp-header__service-name`
- Modifier: `dwp-horizontal-navigation__item--selected`

Never invent class names. Only use classes from `govuk-frontend` or `@dwp/dwp-frontend`.

### Progressive enhancement

DWP services must work without JavaScript, the same as GOV.UK services. DWP Frontend components use semantic HTML that functions before any script runs. The side navigation shows the full list when JS is unavailable; JS adds the mobile toggle.

## Brand divergence from GOV.UK

The DWP Design System site uses its own brand layer (DWP purple `#33153a`, Inter and Open Sans fonts). The `@dwp/dwp-frontend` component library itself does not impose brand colours or fonts — it produces structural HTML and layout styles. Services choose their own branding:

- Public-facing DWP services on `service.gov.uk` use GOV.UK branding (GDS Transport, GOV.UK colours).
- Internal DWP services use the internal service header and footer, which omit GOV.UK branding. Teams may apply their own fonts and colours.

## Internal vs public-facing services

DWP builds both citizen-facing and staff-facing services. The design system distinguishes between them:

| Context | Header | Footer | Template | Branding |
|---------|--------|--------|----------|----------|
| Public-facing (`service.gov.uk`) | GOV.UK header | GOV.UK footer | GOV.UK page template | GOV.UK branding, GDS Transport |
| Internal (agent-facing) | DWP internal service header | DWP internal service footer | DWP internal service page | No GOV.UK branding, team-chosen fonts |

Internal services have the same accessibility obligations as public services. The Public Sector Bodies Accessibility Regulations 2018 apply to both.

## Source repository

The `@dwp/dwp-frontend` source code lives on GitLab:

- GitLab: `gitlab.com/dwp/dwp-design-system/dwp-frontend`
- npm: `@dwp/dwp-frontend`

The design system documentation site source is on GitHub:

- GitHub: `github.com/dwp/design-system` (archived)

## The GOV.UK Service Standard

The [GOV.UK Service Standard](https://www.gov.uk/service-manual/service-standard) applies to all DWP services. The points most relevant to DWP Design System usage are:

- **Point 4: Make the service simple to use** — Use existing DWP and GOV.UK patterns before creating custom solutions.
- **Point 5: Make sure everyone can use the service** — Use progressive enhancement, test with assistive technologies, and meet WCAG 2.2 AA.
- **Point 11: Choose the right tools and technology** — Use GOV.UK Frontend and DWP Frontend as the baseline.
- **Point 13: Use and contribute to open standards, common components and patterns** — Check the GOV.UK Design System and DWP Design System before building custom components.
- **Point 14: Operate a reliable service** — Lightweight, progressively enhanced pages handle traffic spikes and degrade gracefully.

## DWP Accessibility Manual

DWP maintains a standalone [Accessibility Manual](https://accessibility-manual.dwp.gov.uk/) covering accessibility law, role-based guidance, testing best practice, and tools. See `../accessibility/SKILLS.md` for a summary.

## Accessibility

All DWP services must meet WCAG 2.2 Level AA under the Public Sector Bodies Accessibility Regulations 2018. Internal (agent-facing) services have the same obligations as public-facing services — there is no exemption for staff-only tools.

GOV.UK Frontend and DWP Frontend components ship accessible by default, but correct implementation is essential. Custom CSS that changes colour, spacing, or visibility can break accessibility. Test with real assistive technologies before release.

See `../accessibility/SKILLS.md` for the full accessibility reference, including conformance levels, focus states, keyboard navigation, colour contrast, and testing guidance.

## Do and do not

**Do:**

- Check the GOV.UK Design System first — use DWP Frontend only for needs the core system does not address
- Install both `govuk-frontend` and `@dwp/dwp-frontend` in every DWP service
- Use Nunjucks macros in Prototype Kit and Node.js projects to keep markup in sync with the package
- Build pages that work without JavaScript — progressive enhancement is a requirement
- Apply the correct template: GOV.UK page template for public services, DWP internal service page for agent-facing tools

**Do not:**

- Replace GOV.UK core components (buttons, text inputs, radios) with custom alternatives
- Use the DWP internal service header on public-facing `service.gov.uk` domains
- Invent class names — use only classes from `govuk-frontend` or `@dwp/dwp-frontend`
- Serve assets from `node_modules` at runtime — copy them to your public directory
- Skip accessibility testing for internal services

## Related components and patterns

- [GOV.UK Design System](https://design-system.service.gov.uk/) — the base design system
- [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) — core npm package
- [GOV.UK Prototype Kit](https://github.com/alphagov/govuk-prototype-kit) — prototyping tool
- [DWP Design System](https://design-system.dwp.gov.uk/) — DWP-specific components and patterns
- [DWP Accessibility Manual](https://accessibility-manual.dwp.gov.uk/) — accessibility law, guidance, and testing
