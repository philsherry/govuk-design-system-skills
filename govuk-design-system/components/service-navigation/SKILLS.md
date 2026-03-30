---
category: components
description: Use the service navigation component to help users understand which service they are using and navigate between its sections.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Service Navigation
---

# Service Navigation

> Use the service navigation component to help users understand which service they are using and navigate between its sections.
> Source: https://design-system.service.gov.uk/components/service-navigation/

---

## Overview

The service navigation component displays the service name and an optional set of navigation links. Place it below the GOV.UK header and above the main content area, separating the GOV.UK identity (the crown in the header) from the service identity.

GOV.UK Frontend v5.3.0 added this component as a dedicated replacement for placing service navigation inside the header. On narrow screens, navigation links collapse behind a "Menu" toggle button. JavaScript controls this behaviour and falls back cleanly — when JavaScript is unavailable, the links are always visible.

## When to use this component

- When your service has more than one distinct section that users need to navigate between.
- When you want to display a service name prominently below the GOV.UK header.
- When you want to show which section of the service the user is now in using `active: true`.

## When not to use this component

- Do not use service navigation on a single-page service or a linear flow where section-level navigation is not needed.
- Do not use service navigation to replace breadcrumbs or back links for navigating within a section.
- Do not add links that represent individual form steps — use back links and clear page headings instead.

## How it works

The service navigation renders as a `<section>` with `aria-label="Service information"` by default. Inside it:

1. An optional service name (as a link or plain text).
2. An optional navigation list (`<nav>`) with links to the main sections of the service.

Mark the active section with `active: true` on the relevant navigation item. This adds `aria-current="page"` to the link and applies active styling.

On mobile, when navigation items are present, a "Menu" toggle button appears and the navigation defaults to hidden. The JavaScript module manages the `aria-expanded` state.

## Code Examples

### Default / Basic (service name only)

#### HTML

```html
<section class="govuk-service-navigation" aria-label="Service information" data-module="govuk-service-navigation">
  <div class="govuk-width-container">
    <div class="govuk-service-navigation__container">
      <span class="govuk-service-navigation__service-name">
        <a href="/service-home" class="govuk-service-navigation__link">
          Service name
        </a>
      </span>
    </div>
  </div>
</section>
```

#### Nunjucks

```njk
{{ govukServiceNavigation({
  serviceName: "Service name",
  serviceUrl: "/service-home"
}) }}
```

### With service name and navigation

#### HTML

```html
<section class="govuk-service-navigation" aria-label="Service information" data-module="govuk-service-navigation">
  <div class="govuk-width-container">
    <div class="govuk-service-navigation__container">
      <span class="govuk-service-navigation__service-name">
        <a href="/service-home" class="govuk-service-navigation__link">Service name</a>
      </span>
      <button type="button" class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle" aria-controls="navigation" hidden>
        Menu
      </button>
      <nav aria-label="Menu" class="govuk-service-navigation__wrapper" id="navigation">
        <ul class="govuk-service-navigation__list">
          <li class="govuk-service-navigation__item govuk-service-navigation__item--active">
            <a class="govuk-service-navigation__link" href="/section-1" aria-current="page">
              <strong class="govuk-service-navigation__active-fallback">Section 1</strong>
            </a>
          </li>
          <li class="govuk-service-navigation__item">
            <a class="govuk-service-navigation__link" href="/section-2">Section 2</a>
          </li>
          <li class="govuk-service-navigation__item">
            <a class="govuk-service-navigation__link" href="/section-3">Section 3</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</section>
```

#### Nunjucks

```njk
{{ govukServiceNavigation({
  serviceName: "Service name",
  serviceUrl: "/service-home",
  navigation: [
    {
      href: "/section-1",
      text: "Section 1",
      active: true
    },
    {
      href: "/section-2",
      text: "Section 2"
    },
    {
      href: "/section-3",
      text: "Section 3"
    }
  ]
}) }}
```

### Navigation only (no service name)

#### Nunjucks

```njk
{{ govukServiceNavigation({
  navigation: [
    {
      href: "/dashboard",
      text: "Dashboard",
      active: true
    },
    {
      href: "/applications",
      text: "Applications"
    },
    {
      href: "/settings",
      text: "Settings"
    }
  ]
}) }}
```

### With custom menu button text

#### Nunjucks

```njk
{{ govukServiceNavigation({
  serviceName: "Service name",
  serviceUrl: "/",
  menuButtonText: "Navigation",
  menuButtonLabel: "Show or hide navigation menu",
  navigation: [
    { href: "/home", text: "Home" },
    { href: "/about", text: "About" }
  ]
}) }}
```

### With custom section aria-label

#### Nunjucks

```njk
{{ govukServiceNavigation({
  ariaLabel: "Service navigation",
  serviceName: "Service name",
  serviceUrl: "/service-home",
  navigation: [
    { href: "/section-1", text: "Section 1", active: true }
  ]
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `serviceName` | string | No | The name of the service to display. |
| `serviceUrl` | string | No | URL for the service name link. If provided, the service name renders as a link. |
| `navigation` | array | No | Array of navigation item objects. |
| `ariaLabel` | string | No | `aria-label` for the `<section>` element. Defaults to `"Service information"`. |
| `menuButtonText` | string | No | Visible text for the mobile menu toggle button. Defaults to `"Menu"`. |
| `menuButtonLabel` | string | No | `aria-label` for the mobile menu toggle button. Defaults to the value of `menuButtonText`. |
| `navigationId` | string | No | `id` for the `<nav>` element (used in `aria-controls` on the menu button). Defaults to `"navigation"`. |
| `navigationLabel` | string | No | `aria-label` for the `<nav>` element. Defaults to `"Menu"`. |
| `classes` | string | No | Classes to add to the `<section>` element. |
| `attributes` | object | No | HTML attributes (as key–value pairs) to add to the `<section>` element. |

### Navigation item object options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes (or `html`) | Text for the navigation link. |
| `html` | string | Yes (or `text`) | HTML for the navigation link content. |
| `href` | string | Yes | URL for the navigation link. |
| `active` | boolean | No | If `true`, marks this as the current section. Adds `aria-current="page"` and active styling. |
| `current` | boolean | No | Alias for `active`. |
| `classes` | string | No | Classes to add to the `<li>` element. |
| `attributes` | object | No | HTML attributes to add to the `<a>` element. |

## Error Messages

The service navigation component does not have error states.

## Accessibility

- The `<section>` element receives `aria-label="Service information"` by default, making it a named landmark region that screen reader users can navigate to directly.
- The `<nav>` inside the component has its own `aria-label` (defaults to `"Menu"`) — a second named navigation landmark.
- Active navigation items have `aria-current="page"` on the link, which screen readers announce when the user navigates to it.
- The mobile menu toggle button uses `aria-controls` pointing to the navigation `id` and `aria-expanded` managed by JavaScript.
- When JavaScript is unavailable, the toggle button is not shown (using the `hidden` attribute) and navigation items are always visible.

## Do / Don't

**Do:**
- Mark the active section with `active: true`.
- Use `serviceUrl` to link the service name to the service home or start page.
- Keep the navigation list short — 5 or fewer items is ideal.
- Place the service navigation between the GOV.UK header and main content on every page.

**Don't:**
- Don't use service navigation links to represent individual form steps.
- Don't mark more than one navigation item as active at the same time.
- Don't use service navigation as a replacement for the GOV.UK header.
- Don't include navigation links irrelevant to the current service's sections.

## Related Components / Patterns

- [Header](../header/SKILLS.md) — placed above the service navigation
- [Phase Banner](../phase-banner/SKILLS.md) — often placed next to the service navigation
- [Breadcrumbs](../breadcrumbs/SKILLS.md) — for hierarchical page navigation within a section
- [Back Link](../back-link/SKILLS.md) — for navigating back within a linear flow
