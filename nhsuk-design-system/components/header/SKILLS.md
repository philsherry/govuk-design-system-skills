---
category: components
description: The NHS header shows users they are on an NHS service and provides navigation and search.
keywords:
  - "banner"
  - "header"
  - "navigation"
  - "service header"
last-reviewed: "2026-04-03"
name: Header
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/header"
---

# Header

> The NHS header shows users they are on an NHS service and provides navigation and search.
> Source: https://service-manual.nhs.uk/design-system/components/header

## Overview

The header component provides a consistent, recognisable header for NHS services. It displays the NHS logo and, optionally, a service name, navigation links, and a search bar. The header anchors the service within the NHS brand and communicates to users that they are using an official NHS service.

The component supports configurations ranging from a plain logo-only header to a full header with navigation, service name, and search. On mobile viewports, the navigation collapses behind a menu toggle button and the search bar hides behind a search toggle.

The header uses the class `nhsuk-header` and the data attribute `data-module="nhsuk-header"` to activate the JavaScript for mobile menu and search toggles.

## When to use this component

Use the header on every page of an NHS service. The NHS logo provides trust and recognition for users.

Add a service name when your service has its own identity within the NHS — for example, "Book a GP appointment" or "Find a pharmacy".

Add navigation links when users need to move between top-level sections of a service.

Add search when users need to find specific content across the service.

## When not to use this component

Do not use this component for services that do not belong to the NHS. The NHS logo and branding serve official NHS services only.

Do not add more than 8 navigation items — if you need more, consider simplifying the information architecture.

## How it works

**Logo and homepage link:** The NHS logo links to the `homepageUrl` (defaults to `"https://www.nhs.uk/"`). The logo renders as an inline SVG with the text "NHS" as the accessible label.

**Service name:** The `serviceName` parameter adds the service name as a link. The `serviceUrl` parameter sets the destination (defaults to `"/"`). Use this for transactional services that have their own name.

**Navigation:** The `primaryLinks` parameter adds an array of navigation items. Each item has `label`, `url`, and optionally `mobileOnly: true` to show the item only on mobile. On mobile screens, the navigation collapses behind a "Menu" toggle button (requires JavaScript). Without JavaScript, the navigation stays visible.

**Search:** The `showSearch` parameter adds a search form to the header. The search renders as an `<input>` with the class `nhsuk-search__input` inside a `<form>` that submits to the NHS search endpoint or a custom `searchAction` URL.

## Code Examples

### Default / Basic (logo only)

#### HTML

```html
<header class="nhsuk-header" role="banner">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo">
      <a class="nhsuk-header__link nhsuk-header__link--service" href="/" aria-label="NHS homepage">
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 16" height="40" width="100">
          <path class="nhsuk-logo__background" fill="#005eb8" d="M0 0h40v16H0z"></path>
          <path class="nhsuk-logo__text" fill="#fff" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M32.6 1.5h3.3l-2.8 13h-3.4"></path>
        </svg>
      </a>
    </div>
  </div>
</header>
```

#### Nunjucks

```njk
{{ header({}) }}
```

### With service name

#### Nunjucks

```njk
{{ header({
  service: {
    name: "Book a GP appointment",
    href: "/"
  }
}) }}
```

### With service name and navigation

#### HTML

```html
<header class="nhsuk-header" role="banner" data-module="nhsuk-header">
  <div class="nhsuk-width-container nhsuk-header__container">
    <div class="nhsuk-header__logo">
      <a class="nhsuk-header__link nhsuk-header__link--service" href="/" aria-label="NHS homepage">
        <svg class="nhsuk-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 16" height="40" width="100">
          <path class="nhsuk-logo__background" fill="#005eb8" d="M0 0h40v16H0z"></path>
          <path class="nhsuk-logo__text" fill="#fff" d="M3.9 1.5h4.4l2.6 9h.1l1.8-9h3.3l-2.8 13H9l-2.7-9h-.1l-1.8 9H1.1M17.3 1.5h3.6l-1 4.9h4L25 1.5h3.5l-2.7 13h-3.5l1.1-5.6h-4.1l-1.2 5.6h-3.4M32.6 1.5h3.3l-2.8 13h-3.4"></path>
        </svg>
        <span class="nhsuk-header__service-name">Find a pharmacy</span>
      </a>
    </div>
    <div class="nhsuk-header__content" id="content-header">
      <div class="nhsuk-header__menu">
        <button class="nhsuk-header__menu-toggle" id="toggle-menu" aria-controls="header-navigation" aria-expanded="false">
          Menu
        </button>
      </div>
    </div>
  </div>
  <nav class="nhsuk-header__navigation" id="header-navigation" role="navigation" aria-label="Primary navigation" aria-labelledby="label-navigation">
    <p class="nhsuk-header__navigation-title">
      <span id="label-navigation">Menu</span>
      <button class="nhsuk-header__navigation-close" id="close-menu">
        <svg class="nhsuk-icon nhsuk-icon__close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" height="27" width="27">
          <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
        </svg>
        <span class="nhsuk-u-visually-hidden">Close menu</span>
      </button>
    </p>
    <ul class="nhsuk-header__navigation-list">
      <li class="nhsuk-header__navigation-item nhsuk-header__navigation-item--current">
        <a class="nhsuk-header__navigation-link" href="/">
          Home
          <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34">
            <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
          </svg>
        </a>
      </li>
      <li class="nhsuk-header__navigation-item">
        <a class="nhsuk-header__navigation-link" href="/services">
          Services near you
          <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34">
            <path d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z"></path>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</header>
```

#### Nunjucks

```njk
{{ header({
  service: {
    name: "Find a pharmacy",
    href: "/"
  },
  primaryLinks: [
    {
      url: "/",
      label: "Home"
    },
    {
      url: "/services",
      label: "Services near you"
    }
  ]
}) }}
```

### With search

#### Nunjucks

```njk
{{ header({
  showSearch: true,
  primaryLinks: [
    {
      url: "/conditions",
      label: "Health A to Z"
    },
    {
      url: "/live-well",
      label: "Live Well"
    },
    {
      url: "/mental-health",
      label: "Mental health"
    }
  ]
}) }}
```

### With custom search action

#### Nunjucks

```njk
{{ header({
  showSearch: true,
  searchAction: "/search",
  searchInputName: "q",
  primaryLinks: [
    {
      url: "/conditions",
      label: "Health A to Z"
    }
  ]
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| homepageUrl | string | No | URL for the NHS logo link. Defaults to `"https://www.nhs.uk/"`. |
| service | object | No | Service name options. |
| service.name | string | Yes | Name of the service. |
| service.href | string | No | URL for the service name link. Defaults to `"/"`. |
| primaryLinks | array | No | Array of navigation link objects. |
| primaryLinks[].url | string | Yes | URL for the navigation item. |
| primaryLinks[].label | string | Yes | Text for the navigation item. |
| primaryLinks[].mobileOnly | boolean | No | When `true`, shows the item only on mobile viewports. |
| showSearch | boolean | No | When `true`, adds the search form to the header. |
| searchAction | string | No | URL the search form submits to. Defaults to the NHS search endpoint. |
| searchInputName | string | No | Name attribute for the search input. Defaults to `"search-field"`. |
| classes | string | No | Classes to add to the `<header>` element. |
| attributes | object | No | HTML attributes to add to the `<header>` element as key–value pairs. |

## Accessibility

The NHS logo has an accessible `aria-label` of "NHS homepage" so screen readers announce the link destination.

The logo SVG paths provide the visual "NHS" text. The accessible label on the link makes the SVG content redundant for assistive technologies.

The mobile menu toggle button uses `aria-controls` to reference the navigation list and `aria-expanded` to communicate its open/closed state.

The navigation `<nav>` element uses `aria-label="Primary navigation"` so screen reader users can identify it when navigating by landmarks.

When JavaScript is unavailable, the navigation stays visible and the toggle buttons remain hidden.

The search input includes a visible label and a submit button so all users can interact with the search form.

## Do and Do not

**Do:**
- Include the header on every page of the service.
- Set the `service.name` to the name of your specific service.
- Mark the current navigation item so users know where they are.
- Use the `showSearch` option when users need to find specific content.
- Test the header with JavaScript disabled to confirm the navigation stays visible.

**Do not:**
- Do not add more than 8 navigation items.
- Do not change the NHS logo or its colours.
- Do not use the NHS header for non-NHS services.
- Do not remove the NHS logo link to the homepage.
- Do not put content other than the service name, navigation, and search in the header.

## Related Components / Patterns

- [Footer](https://service-manual.nhs.uk/design-system/components/footer) — appears at the bottom of every page.
- [Breadcrumbs](https://service-manual.nhs.uk/design-system/components/breadcrumbs) — for hierarchical navigation below the header.
- [Back link](https://service-manual.nhs.uk/design-system/components/back-link) — for transactional journey navigation below the header.
