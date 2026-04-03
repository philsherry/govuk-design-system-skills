---
category: components
description: Use the pagination component to let users navigate between pages of results or a sequence of content pages.
keywords:
  - "next page"
  - "pagination"
  - "paging"
  - "previous page"
last-reviewed: "2026-04-03"
name: Pagination
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/pagination"
---

# Pagination

> Use the pagination component to let users navigate between pages of results or a sequence of content pages.
> Source: https://service-manual.nhs.uk/design-system/components/pagination

## Overview

The pagination component provides navigation between pages. It supports two layouts:

- **Results layout** — numbered page links with optional previous/next chevron links. Use this for paginated search results or filtered lists where users may want to jump to a specific page.
- **Previous/next layout** — only previous and next links, optionally with page titles. Use this for navigating a linear sequence of content pages such as health guidance chapters.

Both layouts use a `<nav>` element with a descriptive `aria-label` to identify the landmark region.

## When to use this component

- When content spans more than one page and users need to navigate between them.
- For paginated search results or filtered content lists.
- For navigating through a sequential series of health guidance or content pages.

## When not to use this component

- Do not use pagination if all results fit on a single page.
- Do not use it for navigating within a single page — use anchor links instead.
- Do not use it for multi-step forms — use the **back link** component and step indicators instead.

## How it works

### Results layout

Provide an `items` array. Each item has a `number` and `href`. Set `current: true` on the active page item. Use `ellipsis: true` for gap items in long sequences. Include `previous` and/or `next` objects to show chevron navigation links.

The current page link renders with `aria-current="page"`. Each page link has an `aria-label` of "Page N".

### Previous/next layout

Omit `items` and provide only `previous` and/or `next` objects. The layout switches to a block style (`nhsuk-pagination--block`). Each link can include `labelText` to show the title of the adjacent page below the Previous/Next label.

## Code Examples

### Default / Basic (results with numbered pages)

#### HTML

```html
<nav class="nhsuk-pagination" aria-label="Pagination">
  <div class="nhsuk-pagination__prev">
    <a class="nhsuk-link nhsuk-pagination__link" href="/results?page=1" rel="prev">
      <svg class="nhsuk-pagination__icon nhsuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" focusable="false" aria-hidden="true" viewBox="0 0 15 13">
        <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"/>
      </svg>
      <span class="nhsuk-pagination__link-title">
        Previous<span class="nhsuk-u-visually-hidden"> page</span>
      </span>
    </a>
  </div>
  <ul class="nhsuk-pagination__list">
    <li class="nhsuk-pagination__item">
      <a class="nhsuk-link nhsuk-pagination__link" href="/results?page=1" aria-label="Page 1">1</a>
    </li>
    <li class="nhsuk-pagination__item nhsuk-pagination__item--current">
      <a class="nhsuk-link nhsuk-pagination__link" href="/results?page=2" aria-label="Page 2" aria-current="page">2</a>
    </li>
    <li class="nhsuk-pagination__item">
      <a class="nhsuk-link nhsuk-pagination__link" href="/results?page=3" aria-label="Page 3">3</a>
    </li>
  </ul>
  <div class="nhsuk-pagination__next">
    <a class="nhsuk-link nhsuk-pagination__link" href="/results?page=3" rel="next">
      <span class="nhsuk-pagination__link-title">
        Next<span class="nhsuk-u-visually-hidden"> page</span>
      </span>
      <svg class="nhsuk-pagination__icon nhsuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" focusable="false" aria-hidden="true" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7246z"/>
      </svg>
    </a>
  </div>
</nav>
```

#### Nunjucks

```njk
{{ pagination({
  previous: {
    href: "/results?page=1"
  },
  next: {
    href: "/results?page=3"
  },
  items: [
    {
      number: 1,
      href: "/results?page=1"
    },
    {
      number: 2,
      href: "/results?page=2",
      current: true
    },
    {
      number: 3,
      href: "/results?page=3"
    }
  ]
}) }}
```

### Results with ellipsis

Use `ellipsis: true` items to represent gaps in long page sequences.

#### Nunjucks

```njk
{{ pagination({
  previous: {
    href: "/results?page=4"
  },
  next: {
    href: "/results?page=6"
  },
  items: [
    { number: 1, href: "/results?page=1" },
    { ellipsis: true },
    { number: 4, href: "/results?page=4" },
    { number: 5, href: "/results?page=5", current: true },
    { number: 6, href: "/results?page=6" },
    { ellipsis: true },
    { number: 10, href: "/results?page=10" }
  ]
}) }}
```

### Previous/next layout (for content pages)

Omit `items` to use the block layout for linear content navigation.

#### HTML

```html
<nav class="nhsuk-pagination nhsuk-pagination--block" aria-label="Pagination">
  <div class="nhsuk-pagination__prev">
    <a class="nhsuk-link nhsuk-pagination__link" href="/conditions/diabetes/overview" rel="prev">
      <svg class="nhsuk-pagination__icon nhsuk-pagination__icon--prev" xmlns="http://www.w3.org/2000/svg" height="13" width="15" focusable="false" aria-hidden="true" viewBox="0 0 15 13">
        <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z"/>
      </svg>
      <span class="nhsuk-pagination__link-title">
        Previous<span class="nhsuk-u-visually-hidden"> page</span>
      </span>
      <span class="nhsuk-u-visually-hidden">:</span>
      <span class="nhsuk-pagination__link-label">Overview</span>
    </a>
  </div>
  <div class="nhsuk-pagination__next">
    <a class="nhsuk-link nhsuk-pagination__link" href="/conditions/diabetes/symptoms" rel="next">
      <span class="nhsuk-pagination__link-title">
        Next<span class="nhsuk-u-visually-hidden"> page</span>
      </span>
      <span class="nhsuk-u-visually-hidden">:</span>
      <span class="nhsuk-pagination__link-label">Symptoms</span>
      <svg class="nhsuk-pagination__icon nhsuk-pagination__icon--next" xmlns="http://www.w3.org/2000/svg" height="13" width="15" focusable="false" aria-hidden="true" viewBox="0 0 15 13">
        <path d="m8.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7246z"/>
      </svg>
    </a>
  </div>
</nav>
```

#### Nunjucks

```njk
{{ pagination({
  previous: {
    href: "/conditions/diabetes/overview",
    labelText: "Overview"
  },
  next: {
    href: "/conditions/diabetes/symptoms",
    labelText: "Symptoms"
  }
}) }}
```

### First page (next only)

#### Nunjucks

```njk
{{ pagination({
  next: {
    href: "/results?page=2"
  },
  items: [
    { number: 1, href: "/results?page=1", current: true },
    { number: 2, href: "/results?page=2" },
    { number: 3, href: "/results?page=3" }
  ]
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `previous` | object | No | Options for the Previous link. See previous/next object options below. |
| `next` | object | No | Options for the Next link. See previous/next object options below. |
| `items` | array | No | Array of page number items. When provided, the results (numbered) layout appears. |
| `landmarkLabel` | string | No | Label for the `<nav>` `aria-label` attribute. Defaults to `"Pagination"`. |
| `classes` | string | No | Classes to add to the `<nav>` element. |
| `attributes` | object | No | HTML attributes (as key-value pairs) to add to the `<nav>` element. |

### Previous/next object options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `href` | string | Yes | URL for the previous or next page. |
| `text` | string | No | Link text. Defaults to "Previous" or "Next". |
| `labelText` | string | No | Optional page title shown below the Previous/Next label in block layout. |
| `attributes` | object | No | HTML attributes to add to the link element. |

### Item object options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `number` | integer | Yes (unless `ellipsis`) | The page number to display. |
| `href` | string | Yes (unless `ellipsis`) | URL for the page link. |
| `current` | boolean | No | If `true`, marks this as the current page. Adds `aria-current="page"` and current styling. |
| `ellipsis` | boolean | No | If `true`, renders a non-interactive ellipsis item instead of a page number link. |

## Accessibility

- The component uses a `<nav>` element with `aria-label` to create a named navigation landmark, so screen reader users can navigate to it.
- The current page item has `aria-current="page"` to communicate the active page to assistive technologies.
- Each page number link has an `aria-label` of "Page N" so the purpose remains clear when read in isolation.
- Previous and Next link text includes a visually hidden " page" suffix ("Previous page", "Next page").
- Ellipsis items use `aria-hidden="true"` so screen readers do not read them as interactive elements.
- SVG icons in previous/next links use `aria-hidden="true"` and `focusable="false"`.

## Do and Do not

**Do:**
- Show the total count of results or pages alongside pagination where possible (for example, "Showing 1 to 20 of 143 results").
- Use the block (previous/next) layout when navigating a sequence where linear order matters.
- Use ellipsis for long page sequences to keep the component manageable.
- Provide meaningful `labelText` in block layout to help users understand the sequence.

**Do not:**
- Do not use pagination when all results fit on one page.
- Do not use pagination for multi-step forms — use back links and step indicators.
- Do not mix the results layout and the block layout on the same page.

## Related Components / Patterns

- [Back Link](../back-link/SKILLS.md) — for navigating back in a linear flow
- [Breadcrumbs](../breadcrumbs/SKILLS.md) — for hierarchical navigation
- [Task List](../task-list/SKILLS.md) — for multi-task journeys
