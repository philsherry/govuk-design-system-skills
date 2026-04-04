---
category: components
collection: internal
description: A header for DWP internal services that do not use GOV.UK branding.
dwp-frontend: "3.x"
keywords:
  - "agent-facing"
  - "header"
  - "internal service"
  - "navigation"
  - "sign out"
last-reviewed: "2026-04-04"
name: Internal service header
source: "https://design-system.dwp.gov.uk/components/internal-service-header"
---

# Internal service header

> A header for DWP internal services that do not use GOV.UK branding.
> Source: <https://design-system.dwp.gov.uk/components/internal-service-header>

## Overview

The internal service header provides branding and navigation for DWP services that do not run on GOV.UK. It displays the service name on the left with an optional sign-out action on the right. The header also supports primary navigation links through an optional `navigation` parameter, which collapses behind a "Menu" button on mobile devices.

## When to use this component

Use this header for any service or system not on GOV.UK, such as internal and agent-facing services.

## When not to use this component

If your service runs on a `service.gov.uk` domain, use the [GOV.UK header component](https://design-system.service.gov.uk/components/header/).

## How it works

The service name appears left-aligned in the header. If users can sign in or out, include an action link on the right-hand side.

The header supports optional navigation via the `navigation` parameter, which renders the `dwpHeaderNavigation` sub-component with primary navigation links below the service name. On mobile, the navigation collapses behind a "Menu" button using the same pattern as the GOV.UK header component (`data-module="govuk-header"`).

### HTML structure

```html
<header class="dwp-header">
  <div class="dwp-header__content govuk-width-container">
    <div class="dwp-header__service-name">
      <a href="/" class="dwp-header__link">Service name</a>
    </div>
  </div>
</header>
```

### With sign out action

```html
<header class="dwp-header">
  <div class="dwp-header__content govuk-width-container">
    <div class="dwp-header__service-name dwp-header__service-name--with-action">
      <a href="/" class="dwp-header__link">Service name</a>
    </div>
    <div class="dwp-header__service-action">
      <a href="/sign-out" class="dwp-header__link">Sign out</a>
    </div>
  </div>
</header>
```

## Code examples

### Nunjucks — basic

```njk
{{ dwpHeader({
  name: "Apply for a benefit",
  serviceHref: "/",
  container: true
}) }}
```

### Nunjucks — with sign out

```njk
{{ dwpHeader({
  name: "Apply for a benefit",
  serviceHref: "/",
  action: "Sign out",
  actionHref: "/sign-out",
  container: true
}) }}
```

### Nunjucks — with navigation

```njk
{{ dwpHeader({
  serviceName: "Manage claims",
  serviceHref: "/",
  action: "Sign out",
  actionHref: "/sign-out",
  container: true,
  navigation: {
    selectedItem: "/claims",
    items: [
      { text: "Claims", href: "/claims" },
      { text: "Search", href: "/search" },
      { text: "Reports", href: "/reports" }
    ]
  }
}) }}
```

## Nunjucks macro options

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `name` or `serviceName` | string | Yes | The service name displayed in the header |
| `serviceHref` | string | No | URL for the service name link |
| `action` | string | No | Text for the action link (e.g., "Sign out") |
| `actionHref` | string | No | URL for the action link |
| `container` | boolean | No | Wraps content in `govuk-width-container` |
| `containerClasses` | string | No | Extra classes for the container |
| `classes` | string | No | Extra classes for the `<header>` element |
| `attributes` | object | No | HTML attributes for the `<header>` element |
| `navigation` | object | No | Navigation configuration (see below) |

### Navigation parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `navigation.items` | array | Navigation links, each with `text`, `href`, and optional `id` |
| `navigation.selectedItem` | string | `href` of the selected navigation item |
| `navigation.ariaLabel` | string | Accessible label (default: "Primary") |
| `navigation.classes` | string | Extra classes for the `<nav>` element |

## Accessibility

- The header uses a `<header>` landmark element.
- When navigation is present and the mobile toggle is active, the component uses `data-module="govuk-header"` for the mobile menu toggle, matching the GOV.UK header's accessible pattern.
- Navigation links use `aria-current="true"` on the selected item.
- The navigation `<nav>` element has `aria-label="Primary"` by default.

## CSS classes

| Class | Purpose |
|-------|---------|
| `dwp-header` | Block: the header component |
| `dwp-header__content` | Element: content container |
| `dwp-header__content--no-container` | Modifier: when `container` is false |
| `dwp-header__service-name` | Element: service name wrapper |
| `dwp-header__service-name--with-action` | Modifier: when an action link is present |
| `dwp-header__service-action` | Element: action link wrapper |
| `dwp-header__link` | Element: link styling |
| `dwp-header-navigation` | Sub-component: navigation container |
| `dwp-header-navigation__list` | Element: navigation list |
| `dwp-header-navigation__item` | Element: navigation item |
| `dwp-header-navigation__item--selected` | Modifier: selected navigation item |
| `dwp-header-navigation__item--action` | Modifier: action link in mobile nav |
| `dwp-header-navigation__menu-button` | Element: mobile menu toggle button |

## Research

DWP teams have used this component on Move to Universal Credit and Apply for New Style Jobseeker's Allowance. Research covers agent-facing services only.

## Do and do not

**Do:**
- Do include a sign-out link when the service requires authentication.
- Do use the `navigation` option for primary navigation links within the service.
- Do pair this header with the internal service footer for a consistent page layout.

**Do not:**
- Do not use this header on `service.gov.uk` domains — use the GOV.UK header component instead.
- Do not use this header for Universal Credit services — use the UC agent header or UC claimant header instead.
- Do not add GOV.UK branding or the Crown logo to this header.

## Related components

- [GOV.UK header](https://design-system.service.gov.uk/components/header/) — for public-facing services on `service.gov.uk`
- [Internal service footer](../internal-service-footer/SKILLS.md)
- [Internal service page template](../../templates/internal-service-page/SKILLS.md)
