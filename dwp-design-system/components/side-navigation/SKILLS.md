---
category: components
collection: navigation
description: A vertical side navigation for moving between related pages in an internal service, with a collapsible mobile view.
dwp-frontend: "3.x"
keywords:
  - "internal service"
  - "mobile toggle"
  - "navigation"
  - "secondary navigation"
  - "side nav"
  - "vertical navigation"
last-reviewed: "2026-04-04"
name: Side navigation
source: "https://design-system.dwp.gov.uk/components/side-navigation"
---

# Side navigation

> A vertical side navigation for moving between related pages in an internal service, with a collapsible mobile view.
> Source: <https://design-system.dwp.gov.uk/components/side-navigation>

## Overview

The side navigation component provides vertical secondary navigation for internal DWP services. It displays a list of links on the left side of the page, next to the main content. On mobile, the links collapse behind a toggle button. The component supports nested pages through `subItems` and is the only DWP Frontend component that requires JavaScript.

## When to use this component

Use side navigation when users need to move around related pages within an area of an internal service. This is one of two options for secondary navigation — the other is [horizontal navigation](../horizontal-navigation/SKILLS.md).

Use this for internal services only.

## When not to use this component

Do not use this as main navigation — use the [internal service header](../internal-service-header/SKILLS.md) with the `navigation` option.

Do not use this in public-facing services.

## How it works

A list of links on the left-hand side of the page, below the header and next to the main content. The component highlights the current page link.

On mobile, the navigation collapses behind a toggle button ("Show navigation" / "Hide navigation"). The JavaScript for this toggle is the only JS in `@dwp/dwp-frontend`. If JavaScript is unavailable, the full navigation list displays without a toggle.

The component supports nested pages via `subItems` on each item. Sub-items display when the user navigates to their parent item.

### JavaScript initialisation

The side navigation is the only DWP Frontend component that requires JavaScript. It initialises via `data-module="dwp-side-navigation"` on the toggle button:

```javascript
const DWPfrontend = require("@dwp/dwp-frontend/components/components");
DWPfrontend.initAll();
```

## Code examples

### Nunjucks

```njk
{{ dwpSideNavigation({
  selectedItem: "/payments",
  items: [
    { text: "Overview", href: "/overview", id: "nav-overview" },
    { text: "Payments", href: "/payments", id: "nav-payments" },
    { text: "History", href: "/history", id: "nav-history" },
    { text: "Settings", href: "/settings", id: "nav-settings" }
  ]
}) }}
```

### Nunjucks — with nested pages

```njk
{{ dwpSideNavigation({
  selectedItem: "/payments",
  selectedSubItem: "/payments/pending",
  items: [
    { text: "Overview", href: "/overview", id: "nav-overview" },
    {
      text: "Payments",
      href: "/payments",
      id: "nav-payments",
      subItems: [
        { text: "Pending", href: "/payments/pending", id: "nav-pending" },
        { text: "Completed", href: "/payments/completed", id: "nav-completed" }
      ]
    },
    { text: "History", href: "/history", id: "nav-history" }
  ]
}) }}
```

### HTML

```html
<button class="dwp-side-navigation__button" data-module="dwp-side-navigation"
  data-target="dwp-side-navigation-panel"
  data-label-hide="Hide navigation"
  data-label-show="Show navigation"
  aria-expanded="false">
  <span class="dwp-side-navigation__section-toggle-focus">
    <span class="dwp-side-navigation__chevron dwp-side-navigation__chevron--down"></span>
    <span class="dwp-side-navigation__section-toggle-text">Show navigation</span>
  </span>
</button>

<nav data-module="dwp-side-navigation-panel"
  class="dwp-side-navigation dwp-side-navigation--mobile"
  aria-label="Side"
  role="navigation">
  <ul class="dwp-side-navigation__list">
    <li class="dwp-side-navigation__item">
      <a id="nav-overview" href="/overview" class="dwp-side-navigation__link">Overview</a>
    </li>
    <li class="dwp-side-navigation__item dwp-side-navigation__item--selected">
      <a id="nav-payments" href="/payments"
        class="dwp-side-navigation__link dwp-side-navigation__link--selected"
        aria-current="true">Payments</a>
    </li>
    <li class="dwp-side-navigation__item">
      <a id="nav-history" href="/history" class="dwp-side-navigation__link">History</a>
    </li>
  </ul>
</nav>
```

## Nunjucks macro options

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `items` | array | Yes | Navigation links (see below) |
| `selectedItem` | string | No | `href` of the selected item |
| `selectedSubItem` | string | No | `href` of the selected sub-item |
| `ariaLabel` | string | No | Accessible label for the `<nav>` (default: "Side") |
| `mobile.disabled` | boolean | No | Disable mobile toggle (always shows full list) |
| `mobile.hideButtonText` | string | No | Toggle button text when open (default: "Hide navigation") |
| `mobile.showButtonText` | string | No | Toggle button text when closed (default: "Show navigation") |

### Item parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `text` | string | Link text |
| `href` | string | Link URL |
| `id` | string | ID attribute for the link |
| `subItems` | array | Nested page links (same structure: `text`, `href`, `id`) |

## Accessibility

- On mobile, the menu hides behind a toggle button using the same method as the GOV.UK header component.
- If JavaScript is unavailable, the full navigation displays without a toggle — users lose nothing.
- The component sets `aria-current="true"` on the current page link, telling screen readers which item the user is on.
- The toggle button uses `aria-expanded` to communicate its open/closed state.
- Font size is 16px at desktop view (smaller than the standard 19px body text).
- WCAG criteria: [2.4.4 Link Purpose (In Context)](https://www.w3.org/TR/WCAG22/#link-purpose-in-context) (A), [3.2.3 Consistent Navigation](https://www.w3.org/TR/WCAG22/#consistent-navigation) (AA), [4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG22/#name-role-value) (A).

## CSS classes

| Class | Purpose |
|-------|---------|
| `dwp-side-navigation` | Block: the navigation component |
| `dwp-side-navigation--mobile` | Modifier: hidden state on mobile (toggled by JS) |
| `dwp-side-navigation__list` | Element: the link list |
| `dwp-side-navigation__list--sub-item` | Modifier: nested sub-item list |
| `dwp-side-navigation__item` | Element: a navigation item |
| `dwp-side-navigation__item--selected` | Modifier: the selected item |
| `dwp-side-navigation__sub-item` | Element: a nested sub-item |
| `dwp-side-navigation__link` | Element: the link |
| `dwp-side-navigation__link--selected` | Modifier: the selected link |
| `dwp-side-navigation__button` | Element: mobile toggle button |
| `dwp-side-navigation__section-toggle-focus` | Element: focus wrapper inside button |
| `dwp-side-navigation__section-toggle-text` | Element: button label text |
| `dwp-side-navigation__chevron` | Element: arrow icon |
| `dwp-side-navigation__chevron--down` | Modifier: downward arrow (closed state) |

## data-module attributes

| Attribute | Element | Purpose |
|-----------|---------|---------|
| `dwp-side-navigation` | Toggle button | Initialises the mobile toggle JS |
| `dwp-side-navigation-panel` | `<nav>` element | Target for the toggle button |

## Do and do not

**Do:**
- Do initialise the JavaScript with `DWPfrontend.initAll()` — the mobile toggle depends on it.
- Do use `subItems` for nested pages rather than building a separate navigation component.
- Do provide a descriptive `ariaLabel` for the `<nav>` element — the default "Side" is generic.

**Do not:**
- Do not use side navigation as the primary navigation — use the internal service header with the `navigation` option.
- Do not use this component in public-facing services.
- Do not rely on JavaScript for the navigation to work — when JavaScript is unavailable, the full list displays without a toggle.

## Related components

- [Horizontal navigation](../horizontal-navigation/SKILLS.md) — horizontal alternative for secondary navigation
- [Internal service header](../internal-service-header/SKILLS.md) — for primary navigation
