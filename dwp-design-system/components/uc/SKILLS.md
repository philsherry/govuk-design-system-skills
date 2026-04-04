---
category: components
collection: internal
description: Universal Credit-specific components for agent-facing and claimant-facing UC services.
dwp-frontend: "3.x"
keywords:
  - "UC"
  - "Universal Credit"
  - "action card"
  - "agent header"
  - "claimant header"
  - "claimant navigation"
  - "section card"
last-reviewed: "2026-04-04"
name: Universal Credit components
source: "https://design-system.dwp.gov.uk/"
---

# Universal Credit components

> Universal Credit-specific components for agent-facing and claimant-facing UC services.
> Source: <https://design-system.dwp.gov.uk/>

## Overview

DWP Frontend includes a set of components specific to Universal Credit (UC) services. These are not documented on the public DWP Design System site but ship with `@dwp/dwp-frontend` from version 3.2.0. They use a `uc-` CSS class prefix rather than `dwp-`.

The UC components cover two contexts:

- **Agent-facing**: agent header, action cards, section cards — for DWP staff managing UC claims
- **Claimant-facing**: claimant header, claimant navigation — for UC claimants using the online service

## When to use these components

Use UC components when building or prototyping Universal Credit services. They provide UC-specific layouts and navigation that the general DWP components do not cover.

## When not to use these components

Do not use UC components in non-UC DWP services. Use the general DWP internal service header and navigation components instead.

## Agent header

A header for UC agent-facing services. Includes the Tudor Crown logo, service name, optional navigation, and optional sign-out action with user profile name. Supports a sticky header mode (enabled by default).

### Nunjucks

```njk
{{ ucAgentHeader({
  serviceName: "Universal Credit",
  serviceUrl: "/",
  action: "Sign out",
  actionUrl: "/sign-out",
  profileName: "Jane Smith",
  navigation: [
    { text: "Claims", href: "/claims", active: true },
    { text: "Search", href: "/search" },
    { text: "Reports", href: "/reports" }
  ]
}) }}
```

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `serviceName` | string | Service name in the header |
| `serviceUrl` | string | URL for the service name link |
| `action` | string | Action link text (e.g., "Sign out") |
| `actionUrl` | string | URL for the action link |
| `profileName` | string | User name displayed before the action link |
| `navigation` | array | Nav items with `text`, `href`, `active` (boolean), `opensInNewWindow` |
| `navigationLabel` | string | Accessible label for the navigation |
| `menuButtonText` | string | Mobile menu button text (default: "Menu") |
| `disableStickyHeader` | boolean | Disable the sticky header behaviour |
| `containerClasses` | string | Container classes (default: "govuk-width-container") |
| `classes` | string | Extra classes |
| `attributes` | object | HTML attributes |

### CSS classes

- `uc-agent-header`, `uc-agent-header--sticky`
- `uc-agent-header__container`, `uc-agent-header__logo`, `uc-agent-header__content`
- `uc-agent-header__crown-logo`, `uc-agent-header__service-name`
- `uc-agent-header__link`, `uc-agent-header__link--homepage`
- `uc-agent-header__navigation`, `uc-agent-header__navigation-list`
- `uc-agent-header__navigation-item`, `uc-agent-header__navigation-item--active`
- `uc-agent-header__profile`, `uc-agent-header__profile-link`
- `uc-agent-header__menu-button`

## Claimant header

A header for UC claimant-facing services. Includes the GOV.UK logo, service name, and optional sign-out action with user profile name.

### Nunjucks

```njk
{{ ucClaimantHeader({
  serviceName: "Universal Credit",
  serviceUrl: "/",
  action: "Sign out",
  actionUrl: "/sign-out",
  profileName: "John Doe"
}) }}
```

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `serviceName` | string | Service name |
| `serviceUrl` | string | URL for the service name link |
| `action` | string | Action link text |
| `actionUrl` | string | URL for the action link |
| `profileName` | string | User name displayed before the action link |
| `classes` | string | Extra classes |
| `attributes` | object | HTML attributes |

### CSS classes

- `uc-claimant-header`, `uc-claimant-header__container`
- `uc-claimant-header__logo`, `uc-claimant-header__content`
- `uc-claimant-header__service-name`, `uc-claimant-header__service-action`
- `uc-claimant-header__link`, `uc-claimant-header__link--homepage`
- `uc-claimant-header__profile`
- `uc-width-container` (note: uses `uc-` prefix, not `govuk-`)

## Claimant navigation

Links for UC claimant journeys. Uses `aria-current="true"` on the active item.

### Nunjucks

```njk
{{ ucClaimantNavigation({
  items: [
    { text: "Home", href: "/home", active: true },
    { text: "To-do list", href: "/to-do" },
    { text: "Journal", href: "/journal" },
    { text: "Your commitments", href: "/commitments" }
  ]
}) }}
```

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `items` | array | Nav items with `text`, `href`, `active` (boolean) |
| `attributes` | object | HTML attributes for the `<nav>` element |

### CSS classes

- `uc-claimant-navigation__list`
- `uc-claimant-navigation__item`, `uc-claimant-navigation__item--active`
- `uc-claimant-navigation__link`

## Action card

A clickable card for UC agent interfaces. Displays a title (as a link), an optional alert message, and an optional description.

### Nunjucks — single card

```njk
{{ ucActionCard({
  title: "Review claim",
  titleUrl: "/claims/123/review",
  alert: "Decision needed",
  description: "Claim submitted 3 days ago"
}) }}
```

### Nunjucks — card collection

```njk
{{ ucActionCards({
  cards: [
    {
      title: "Review claim",
      titleUrl: "/claims/123/review",
      alert: "Decision needed"
    },
    {
      title: "Update journal",
      titleUrl: "/claims/123/journal",
      description: "Last entry 5 days ago"
    }
  ]
}) }}
```

### Action card parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | string | Card title text |
| `titleUrl` | string | URL the card links to |
| `alert` | string | Alert message (highlighted) |
| `description` | string | Description text |

### CSS classes

- `uc-action-card`, `uc-action-card__link`, `uc-action-card__link-text`
- `uc-action-card__alert`, `uc-action-card__description`
- `uc-action-cards` (collection), `uc-action-cards__item`

## Section card

A card linking to a section of the UC service. Displays a title as a linked heading with an optional description.

### Nunjucks — single card

```njk
{{ ucSectionCard({
  title: "Personal details",
  titleUrl: "/personal-details",
  description: "Name, address, and contact information"
}) }}
```

### Nunjucks — card collection

```njk
{{ ucSectionCards({
  cards: [
    { title: "Personal details", titleUrl: "/personal-details" },
    { title: "Housing", titleUrl: "/housing" },
    { title: "Health", titleUrl: "/health" }
  ]
}) }}
```

### Section card parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | string | Card heading text |
| `titleUrl` | string | URL the heading links to |
| `description` | string | Description text |

### CSS classes

- `uc-section-card`, `uc-section-card__header`, `uc-section-card__link`
- `uc-section-card__description`

## Accessibility

- The agent header uses `data-module="govuk-header"` for mobile menu toggle, inheriting the GOV.UK header's accessible pattern.
- When you provide `profileName`, the sign-out link uses `aria-describedby="current-user"` to associate the action with the user.
- Claimant navigation uses `aria-current="true"` on the active item.
- Action cards wrap the entire card content in a single `<a>` element — the click target covers the full card area.

## Do and do not

**Do:**
- Do use UC components only in Universal Credit services — they carry UC-specific branding and layout.
- Do use `aria-current="true"` on the active navigation item (the macros handle this through the `active` parameter).
- Do use `aria-describedby="current-user"` when displaying a profile name alongside the sign-out link (the macro sets this when you provide `profileName`).

**Do not:**
- Do not use UC components in non-UC DWP services — use the general internal service header and navigation components instead.
- Do not mix `uc-` prefixed CSS classes with `dwp-` prefixed layout classes — UC components use their own class namespace.
- Do not wrap action card content in extra links — the component already wraps the full card area in a single `<a>` element.

## Related components

- [Internal service header](../internal-service-header/SKILLS.md) — for non-UC internal services
- [Horizontal navigation](../horizontal-navigation/SKILLS.md) — for secondary navigation in internal services
