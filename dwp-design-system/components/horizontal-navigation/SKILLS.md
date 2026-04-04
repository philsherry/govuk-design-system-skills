---
category: components
collection: navigation
description: A horizontal container for secondary navigation links within an internal service.
dwp-frontend: "3.x"
keywords:
  - "horizontal nav"
  - "internal service"
  - "navigation"
  - "secondary navigation"
  - "tabs"
last-reviewed: "2026-04-04"
name: Horizontal navigation
source: "https://design-system.dwp.gov.uk/components/horizontal-navigation"
---

# Horizontal navigation

> A horizontal container for secondary navigation links within an internal service.
> Source: <https://design-system.dwp.gov.uk/components/horizontal-navigation>

## Overview

The horizontal navigation component provides secondary navigation links for internal DWP services. It displays a row of links below the header, letting users move between related pages within a section. The component marks the current page with `aria-current="true"` and supports an optional contained layout that wraps the links in a bordered container.

## When to use this component

Use horizontal navigation when users need to move between related pages within a section of an internal service. This is one of two options for secondary navigation — the other is [side navigation](../side-navigation/SKILLS.md).

Use this for internal services only.

## When not to use this component

Do not use this as main navigation — use the [internal service header](../internal-service-header/SKILLS.md) with the `navigation` option for primary navigation.

Do not use this in public-facing services — use the [GOV.UK service navigation component](https://design-system.service.gov.uk/components/service-navigation/) instead.

Do not use this for internal links between sections of the same page — use [GOV.UK tabs](https://design-system.service.gov.uk/components/tabs/) instead.

## How it works

A list of links to pages within a section. Each link goes to a different page. The component marks the current page link with `aria-current="true"`.

Setting `contained: true` wraps the component in a `dwp-horizontal-navigation__wrapper` and removes the bottom border line from the list.

## Code examples

### Nunjucks

```njk
{{ dwpHorizontalNavigation({
  selectedItem: "/claims",
  items: [
    { text: "Claims", href: "/claims", id: "nav-claims" },
    { text: "Payments", href: "/payments", id: "nav-payments" },
    { text: "History", href: "/history", id: "nav-history" }
  ]
}) }}
```

### Nunjucks — contained

```njk
{{ dwpHorizontalNavigation({
  contained: true,
  selectedItem: "/claims",
  items: [
    { text: "Claims", href: "/claims", id: "nav-claims" },
    { text: "Payments", href: "/payments", id: "nav-payments" }
  ]
}) }}
```

### HTML

```html
<nav class="dwp-horizontal-navigation" aria-label="Horizontal">
  <ul class="dwp-horizontal-navigation__list">
    <li class="dwp-horizontal-navigation__item dwp-horizontal-navigation__item--selected">
      <a id="nav-claims" href="/claims" class="dwp-horizontal-navigation__link" aria-current="true">Claims</a>
    </li>
    <li class="dwp-horizontal-navigation__item">
      <a id="nav-payments" href="/payments" class="dwp-horizontal-navigation__link">Payments</a>
    </li>
    <li class="dwp-horizontal-navigation__item">
      <a id="nav-history" href="/history" class="dwp-horizontal-navigation__link">History</a>
    </li>
  </ul>
</nav>
```

## Nunjucks macro options

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `items` | array | Yes | Navigation links (see below) |
| `selectedItem` | string | No | `href` of the selected item |
| `ariaLabel` | string | No | Accessible label for the `<nav>` (default: "Horizontal") |
| `contained` | boolean | No | Wraps in container, removes bottom border |
| `containerClasses` | string | No | Extra classes for the `<nav>` element |
| `attributes` | object | No | HTML attributes for the `<nav>` element |

### Item parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | string | Link text |
| `href` | string | Link URL |
| `id` | string | ID attribute for the link |

## Accessibility

- Change the description of the navigation by providing a custom `ariaLabel` — the default "Horizontal" is generic.
- The component sets `aria-current="true"` on the selected link, telling screen readers which item is the current page.
- WCAG criteria: [2.4.4 Link Purpose (In Context)](https://www.w3.org/TR/WCAG22/#link-purpose-in-context) (A), [3.2.3 Consistent Navigation](https://www.w3.org/TR/WCAG22/#consistent-navigation) (AA), [4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG22/#name-role-value) (A).

## CSS classes

| Class | Purpose |
|-------|---------|
| `dwp-horizontal-navigation` | Block: the navigation component |
| `dwp-horizontal-navigation__wrapper` | Element: container wrapper (when `contained`) |
| `dwp-horizontal-navigation__container` | Element: inner container |
| `dwp-horizontal-navigation__list` | Element: the link list |
| `dwp-horizontal-navigation__list--no-line` | Modifier: removes bottom border (when `contained`) |
| `dwp-horizontal-navigation__item` | Element: a navigation item |
| `dwp-horizontal-navigation__item--selected` | Modifier: the selected item |
| `dwp-horizontal-navigation__link` | Element: the link |

## Do and do not

**Do:**
- Do use horizontal navigation for secondary navigation within a section of an internal service.
- Do set `aria-current="true"` on the link that matches the current page (the macro handles this through `selectedItem`).
- Do provide a descriptive `ariaLabel` — the default "Horizontal" is generic.

**Do not:**
- Do not use horizontal navigation as the primary navigation — use the internal service header with the `navigation` option instead.
- Do not use this component in public-facing services — use the GOV.UK service navigation component.
- Do not use this for switching content on the same page — use GOV.UK tabs instead.

## Related components

- [Side navigation](../side-navigation/SKILLS.md) — vertical alternative for secondary navigation
- [Internal service header](../internal-service-header/SKILLS.md) — for primary navigation
- [GOV.UK service navigation](https://design-system.service.gov.uk/components/service-navigation/) — for public-facing services
- [GOV.UK tabs](https://design-system.service.gov.uk/components/tabs/) — for switching content on the same page
