---
category: components
description: The GOV.UK header shows users they are on GOV.UK and helps them navigate.
govuk-frontend: "5.x"
keywords:
  - "banner"
  - "header"
  - "navigation"
  - "service header"
last-reviewed: "2026-04-03"
name: Header
source: "https://design-system.service.gov.uk/components/header/"
---

# Header

> The GOV.UK header shows users they are on GOV.UK and helps them navigate.
> Source: https://design-system.service.gov.uk/components/header/

## Overview

The header component provides a consistent, recognisable header for GOV.UK services. It displays the GOV.UK crown logo and, optionally, a service name and navigation links. The header anchors the service within the GOV.UK brand and communicates to users that they are using an official government service.

The component supports three levels of configuration: a plain GOV.UK logo-only header, a header with a service name (linking back to the service start page), and a header with a service name and top-level navigation links. In GOV.UK Frontend v5.x the header component includes navigation directly and uses a JavaScript-powered menu button to show or hide it on mobile.

The header always appears at the top of every page above the main content, the phase banner (if used), and the breadcrumbs or back link.

## When to use this component

- On every page of a GOV.UK service.
- Use the header with a service name for services that users access directly, distinguishing the specific service from the wider GOV.UK site.
- Add navigation items when users need to move between top-level sections of a service.

## When not to use this component

- Do not use this component for internal tools or admin interfaces that are not user-facing GOV.UK services.
- Do not use this component for non-government sites — the GOV.UK crown and branding are for official government use only.
- Do not add more than 8 navigation items — if you have more than 6 top-level sections consider using a separate [Service navigation](../service-navigation/SKILLS.md) component below the header.

## How it works

**Logo and homepage link:** The Crown logo links to the `homepageUrl` (defaults to `"/"`). The rendered HTML includes the Crown SVG inline with `aria-hidden="true"`, using the GOV.UK logotype text as the accessible link label.

**Service name:** The `serviceName` parameter adds the service name as a link next to the logo. The `serviceUrl` parameter sets where the service name links to (defaults to `"/"`). The service name appears in the header even on mobile screens.

**Product name:** GOV.UK itself uses the `productName` parameter for product or organisation names that appear beside the crown logo. For typical services, use `serviceName` instead.

**Navigation:** The `navigation` parameter adds an array of navigation items. Each item has `text`, `href`, and optionally `active: true` to mark the current section. On mobile screens, the navigation collapses and a "Menu" button appears (requires JavaScript). Without JavaScript, the navigation stays visible.

**Menu button text:** Customise the mobile menu toggle button text using `menuButtonText` (default: `"Menu"`) and `menuButtonLabel` (default: the value of `menuButtonText`).

**Navigation label:** The `navigationLabel` parameter sets the `aria-label` on the `<nav>` element. Defaults to `"Menu"`.

**Navigation classes:** The `navigationClasses` parameter adds classes to the navigation `<ul>` element.

## Code examples

### Default / Basic (logo only)

#### HTML

```html
<header class="govuk-header" data-module="govuk-header">
  <div class="govuk-header__container govuk-width-container">
    <div class="govuk-header__logo">
      <a href="/" class="govuk-header__link govuk-header__link--homepage">
        <span class="govuk-header__logotype">
          <svg
            aria-hidden="true"
            focusable="false"
            class="govuk-header__logotype-crown"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 132 97"
            height="30"
            width="36"
          >
            <!-- Crown SVG paths -->
          </svg>
          <span class="govuk-header__logotype-text">GOV.UK</span>
        </span>
      </a>
    </div>
  </div>
</header>
```

#### Nunjucks

```njk
{{ govukHeader({}) }}
```

### With service name

#### HTML

```html
<header class="govuk-header" data-module="govuk-header">
  <div class="govuk-header__container govuk-width-container">
    <div class="govuk-header__logo">
      <a href="/" class="govuk-header__link govuk-header__link--homepage">
        <span class="govuk-header__logotype">
          <!-- Crown SVG -->
          <span class="govuk-header__logotype-text">GOV.UK</span>
        </span>
      </a>
    </div>
    <div class="govuk-header__content">
      <a href="/service-name" class="govuk-header__link govuk-header__service-name">
        Service name
      </a>
    </div>
  </div>
</header>
```

#### Nunjucks

```njk
{{ govukHeader({
  homepageUrl: "/",
  serviceName: "Service name",
  serviceUrl: "/service-name"
}) }}
```

### With service name and navigation

#### HTML

```html
<header class="govuk-header" data-module="govuk-header">
  <div class="govuk-header__container govuk-width-container">
    <div class="govuk-header__logo">
      <a href="/" class="govuk-header__link govuk-header__link--homepage">
        <span class="govuk-header__logotype">
          <!-- Crown SVG -->
          <span class="govuk-header__logotype-text">GOV.UK</span>
        </span>
      </a>
    </div>
    <div class="govuk-header__content">
      <a href="/" class="govuk-header__link govuk-header__service-name">
        Manage an estate
      </a>
      <button type="button" class="govuk-header__menu-button govuk-js-header-toggle" aria-controls="navigation" aria-label="Show or hide menu" hidden>
        Menu
      </button>
      <nav aria-label="Menu" class="govuk-header__nav">
        <ul id="navigation" class="govuk-header__navigation-list">
          <li class="govuk-header__navigation-item govuk-header__navigation-item--active">
            <a class="govuk-header__link" href="/section-1">Section 1</a>
          </li>
          <li class="govuk-header__navigation-item">
            <a class="govuk-header__link" href="/section-2">Section 2</a>
          </li>
          <li class="govuk-header__navigation-item">
            <a class="govuk-header__link" href="/section-3">Section 3</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</header>
```

#### Nunjucks

```njk
{{ govukHeader({
  homepageUrl: "/",
  serviceName: "Manage an estate",
  serviceUrl: "/",
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

### With custom navigation label

#### Nunjucks

```njk
{{ govukHeader({
  serviceName: "My service",
  serviceUrl: "/",
  navigationLabel: "Service navigation",
  navigation: [
    {
      href: "/overview",
      text: "Overview"
    },
    {
      href: "/guidance",
      text: "Guidance"
    }
  ]
}) }}
```

### With custom menu button text

#### Nunjucks

```njk
{{ govukHeader({
  serviceName: "My service",
  serviceUrl: "/",
  menuButtonText: "Navigation menu",
  navigation: [
    {
      href: "/overview",
      text: "Overview"
    }
  ]
}) }}
```

### With product name (GOV.UK usage)

#### Nunjucks

```njk
{{ govukHeader({
  productName: "Design System"
}) }}
```

### With navigation items using HTML labels

#### Nunjucks

```njk
{{ govukHeader({
  serviceName: "My service",
  serviceUrl: "/",
  navigation: [
    {
      href: "/section",
      html: "Section <abbr title=\"1\">I</abbr>"
    }
  ]
}) }}
```

### With extra classes and attributes on navigation items

#### Nunjucks

```njk
{{ govukHeader({
  serviceName: "My service",
  serviceUrl: "/",
  navigation: [
    {
      href: "/dashboard",
      text: "Dashboard",
      active: true,
      attributes: {
        "data-tracking": "nav-dashboard"
      }
    },
    {
      href: "/settings",
      text: "Settings"
    }
  ]
}) }}
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `homepageUrl` | string | No | URL for the GOV.UK logo link. Defaults to `"/"`. |
| `productName` | string | No | Product name displayed after the GOV.UK logo. Used on GOV.UK itself; for services use `serviceName`. |
| `serviceName` | string | No | Service name displayed in the header. |
| `serviceUrl` | string | No | URL for the service name link. Defaults to `"/"`. |
| `navigation` | array | No | Array of navigation item objects. |
| `navigation[].text` | string | Yes (or html) | Text for the navigation item. |
| `navigation[].html` | string | Yes (or text) | HTML for the navigation item. If provided, `text` is ignored. |
| `navigation[].href` | string | Yes | URL for the navigation item link. |
| `navigation[].active` | boolean | No | Whether this is the active/current navigation item. Adds `govuk-header__navigation-item--active`. Default is `false`. |
| `navigation[].attributes` | object | No | HTML attributes for the navigation item link. |
| `navigationClasses` | string | No | Classes to add to the navigation `<ul>` element. |
| `navigationLabel` | string | No | `aria-label` for the `<nav>` element. Defaults to `"Menu"`. |
| `menuButtonLabel` | string | No | `aria-label` for the mobile menu toggle button. Defaults to the value of `menuButtonText`. |
| `menuButtonText` | string | No | Text for the mobile menu toggle button. Defaults to `"Menu"`. |
| `containerClasses` | string | No | Classes to add to the header container. |
| `classes` | string | No | Classes to add to the header element. |
| `attributes` | object | No | HTML attributes to add to the header element. |

## Accessibility

- The GOV.UK logo is a link with the logotype text "GOV.UK" as its accessible label.
- The Crown SVG has `aria-hidden="true"` so screen readers do not announce it.
- The mobile menu toggle button includes an `aria-label` (from `menuButtonLabel`) and `aria-controls` pointing to the navigation `<ul>` id.
- The navigation `<nav>` element has `aria-label` (from `navigationLabel`), making it a distinct landmark identifiable by screen readers.
- The component automatically adds `aria-current="page"` to active navigation items.
- When JavaScript is not available, the full navigation shows and the menu button stays hidden (the button has the `hidden` attribute, which JavaScript removes on init).
- The header uses `data-module="govuk-header"` to activate GOV.UK Frontend JavaScript for the mobile menu toggle.

## Do and do not

**Do:**
- Include the header on every page of the service.
- Set `serviceUrl` so the service name links back to the service start page or dashboard.
- Set `active: true` on the current navigation item to show the user's location.
- Set a meaningful `navigationLabel` and `menuButtonLabel` if the defaults are not clear enough for your service.
- Use `serviceName` for the name of the specific service, not the organisation.

**Do not:**
- Do not add more than 6–8 navigation items in the header — consider the [Service navigation](../service-navigation/SKILLS.md) component for complex navigation.
- Do not change the GOV.UK crown logo or remove the "GOV.UK" logotype text.
- Do not use the header for non-government services.
- Do not put content other than the service name and navigation in the header.
- Do not omit `homepageUrl` on the main GOV.UK header — always link the crown to the homepage.

## Related components and patterns

- [Footer](../footer/SKILLS.md) — appears at the bottom of every page.
- [Service navigation](../service-navigation/SKILLS.md) — a secondary navigation component that appears below the header for complex services.
- [Phase banner](../phase-banner/SKILLS.md) — appears directly below the header to communicate service phase.
- [Cookie banner](../cookie-banner/SKILLS.md) — appears above the header, before any other content.
- [Skip link](../skip-link/SKILLS.md) — appears before the header in the tab order, allowing keyboard users to skip to main content.
