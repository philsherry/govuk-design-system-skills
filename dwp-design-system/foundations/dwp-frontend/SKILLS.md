---
category: foundations
description: The DWP Frontend npm package — installation, configuration, and API reference.
dwp-frontend: "3.x"
keywords:
  - "@dwp/dwp-frontend"
  - "DWP Frontend"
  - "Nunjucks macros"
  - "Sass"
  - "install"
  - "npm"
  - "prototype kit"
last-reviewed: "2026-04-04"
name: DWP Frontend
source: "https://design-system.dwp.gov.uk/get-started/install-dwp-frontend"
---

# DWP Frontend

> The DWP Frontend npm package — installation, configuration, and API reference.
> Source: <https://design-system.dwp.gov.uk/get-started/install-dwp-frontend>

## Overview

`@dwp/dwp-frontend` provides Nunjucks macros, Sass partials, and JavaScript for DWP-specific components. It extends GOV.UK Frontend — it does not replace it. Every project using DWP Frontend must also install `govuk-frontend`.

The source code lives on GitLab at `gitlab.com/dwp/dwp-design-system/dwp-frontend`. The package publishes to npm as `@dwp/dwp-frontend`.

Current version: **3.4.0** (October 2025).

## Installation

```bash
npm install govuk-frontend @dwp/dwp-frontend
```

### GOV.UK Prototype Kit

DWP Frontend registers itself with the Prototype Kit via `govuk-prototype-kit.config.json`. After installation:

- All DWP macros are available in templates without `{% from %}` imports
- Sass partials load automatically
- The JavaScript bundle (`dwp.min.js`) loads automatically

### Standalone builds

In standalone builds (Express, Play Framework, or static sites):

1. Add `node_modules/@dwp/dwp-frontend/components` to your Nunjucks search paths
2. Import Sass partials for each component you use
3. Include `dwp.min.js` in your page if using the side navigation component

## Components

DWP Frontend provides 8 public components and 7 Universal Credit components:

### Public components

| Macro name | Import path | Purpose |
|------------|-------------|---------|
| `dwpHorizontalNavigation` | `horizontal-navigation/macro.njk` | Secondary horizontal navigation for internal services |
| `dwpHeader` | `internal-service-header/macro.njk` | Header for internal services (no GOV.UK branding) |
| `dwpFooter` | `internal-service-footer/macro.njk` | Footer for internal services (no Crown copyright) |
| `dwpTimeline` | `timeline/macro.njk` | Chronological record of events |
| `dwpLanguageToggle` | `language-toggle/macro.njk` | English/Welsh language switcher |
| `dwpQuickReference` | `quick-reference/macro.njk` | Case reference display for agent-facing services |
| `dwpSideNavigation` | `side-navigation/macro.njk` | Vertical side navigation for internal services |
| `dwpKeyDetailsBar` | `key-details-bar/macro.njk` | Key details display (retired — use quick reference instead) |

### Universal Credit components

| Macro name | Import path | Purpose |
|------------|-------------|---------|
| `ucActionCard` | `uc/action-card/macro.njk` | Single action card for UC interfaces |
| `ucActionCards` | `uc/action-cards/macro.njk` | Collection of action cards |
| `ucAgentHeader` | `uc/agent-header/macro.njk` | Header for UC agent-facing services |
| `ucClaimantHeader` | `uc/claimant-header/macro.njk` | Header for UC claimant-facing services |
| `ucClaimantNavigation` | `uc/claimant-navigation/macro.njk` | Navigation for UC claimant journeys |
| `ucSectionCard` | `uc/section-card/macro.njk` | Single section card for UC interfaces |
| `ucSectionCards` | `uc/section-cards/macro.njk` | Collection of section cards |

## Sass

Each component has its own Sass partial. The Prototype Kit loads all partials automatically. In standalone builds, import what you need:

```scss
// Core GOV.UK Frontend (required)
@import "node_modules/govuk-frontend/dist/govuk/all";

// DWP components (import only what you use)
@import "node_modules/@dwp/dwp-frontend/components/internal-service-header/internal-service-header";
@import "node_modules/@dwp/dwp-frontend/components/internal-service-footer/internal-service-footer";
@import "node_modules/@dwp/dwp-frontend/components/horizontal-navigation/horizontal-navigation";
@import "node_modules/@dwp/dwp-frontend/components/side-navigation/side-navigation";
@import "node_modules/@dwp/dwp-frontend/components/timeline/timeline";
@import "node_modules/@dwp/dwp-frontend/components/language-toggle/language-toggle";
@import "node_modules/@dwp/dwp-frontend/components/quick-reference/quick-reference";
```

## JavaScript

DWP Frontend has minimal JavaScript. Only the side navigation uses JS for its mobile toggle behaviour.

### Initialisation

The package exports an `initAll()` function and the `SideNavigation` class:

```javascript
// Initialise all DWP Frontend JS
const DWPfrontend = require("@dwp/dwp-frontend/components/components");
DWPfrontend.initAll();
```

The `initAll()` function finds elements with `data-module="dwp-side-navigation"` and initialises the mobile toggle.

### data-module attributes

| Attribute | Component | Purpose |
|-----------|-----------|---------|
| `dwp-side-navigation` | Side navigation toggle button | Initialises mobile show/hide behaviour |
| `dwp-side-navigation-panel` | Side navigation `<nav>` element | Target for the toggle button |

### Progressive enhancement

When JavaScript is unavailable, the side navigation shows the full list without a toggle. No component depends on JavaScript for core functionality.

## Version history

| Version | Date | Changes |
|---------|------|---------|
| 3.4.0 | Oct 2025 | Isolate DWP components from GOV.UK rebrand styling |
| 3.3.0 | Dec 2024 | Add UC claimant navigation components |
| 3.2.0 | Nov 2024 | Add UC claimant header and agent header |
| 3.1.0 | Oct 2024 | Add horizontal navigation component |
| 3.0.0 | Sep 2024 | Breaking: update timeline component with new spec |
| 2.8.0 | Aug 2024 | Add quick reference component |
| 2.7.0 | May 2024 | Add language toggle, header navigation |

## Related resources

- [DWP Design System — install DWP Frontend](https://design-system.dwp.gov.uk/get-started/install-dwp-frontend)
- [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) — the base library
- [GOV.UK Prototype Kit](https://github.com/alphagov/govuk-prototype-kit) — prototyping tool
