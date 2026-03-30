---
category: components
description: A navigation aid that shows the user where they are in the site hierarchy.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Breadcrumbs
---

# Breadcrumbs

> A navigation aid that shows the user where they are in the site hierarchy.
> Source: https://design-system.service.gov.uk/components/breadcrumbs/
---

## Overview

The breadcrumbs component helps users understand where they are within a website's structure and navigate back to parent pages. It renders as an ordered list of links inside a `<nav>` landmark element labelled "Breadcrumb", representing the hierarchical path from the homepage to the current page.

The last item in the list typically represents the current page. It may appear as plain text (no link) or as a link, depending on the implementation. GOV.UK Frontend renders the last item without an `href` by convention, marking it as the current page.

The component includes a `collapseOnMobile` option which hides intermediate breadcrumb items on small screens, showing only the direct parent page. This helps prevent the breadcrumb trail from wrapping on narrow viewports.

## When to use this component

Use breadcrumbs on informational or content-heavy websites where users navigate a hierarchy of pages — for example, a guidance website with topic areas and subtopics. They help users orient themselves and navigate upward in the site structure without relying on browser history.

Use breadcrumbs when research shows users navigate laterally across a site or return to parent sections during their visit.

## When not to use this component

Do not use breadcrumbs on transactional services (multi-page forms or applications). Transactional journeys have a linear flow and should use the back link component instead.

Do not use breadcrumbs on single-level websites with no meaningful hierarchy. Do not use them alongside the back link component on the same page.

## How it works

The breadcrumbs render as a `<nav>` element with `aria-label="Breadcrumb"` containing an `<ol>` with class `govuk-breadcrumbs__list`. Each item is an `<li class="govuk-breadcrumbs__list-item">` containing an `<a class="govuk-breadcrumbs__link">`.

The last item in the list represents the current page. By convention it has no `href` and the `<li>` has `aria-current="page"` to communicate the current location to assistive technologies.

When we set `collapseOnMobile: true`, we hide all items except the last one on mobile viewports, and show no ellipsis — only the direct parent link remains visible. The `govuk-breadcrumbs--collapse-on-mobile` modifier class handles this.

## Code Examples

### Default / Basic

#### HTML

```html
<nav class="govuk-breadcrumbs" aria-label="Breadcrumb">
  <ol class="govuk-breadcrumbs__list">
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/">Home</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/section">Section</a>
    </li>
    <li class="govuk-breadcrumbs__list-item" aria-current="page">
      Current page
    </li>
  </ol>
</nav>
```

#### Nunjucks

```njk
{{ govukBreadcrumbs({
  items: [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "Section",
      href: "/section"
    },
    {
      text: "Current page"
    }
  ]
}) }}
```

### Collapsing on mobile

#### Nunjucks

```njk
{{ govukBreadcrumbs({
  collapseOnMobile: true,
  items: [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "Passports, travel and living abroad",
      href: "/browse/abroad"
    },
    {
      text: "Travel abroad",
      href: "/browse/abroad/travel-abroad"
    },
    {
      text: "Renew or replace your adult passport"
    }
  ]
}) }}
```

### With extra attributes on items

#### Nunjucks

```njk
{{ govukBreadcrumbs({
  items: [
    {
      text: "Home",
      href: "/",
      attributes: {
        "data-tracking": "breadcrumb-home"
      }
    },
    {
      text: "Current page"
    }
  ]
}) }}
```

### With extra classes on the component

#### Nunjucks

```njk
{{ govukBreadcrumbs({
  classes: "custom-breadcrumbs",
  items: [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "Current page"
    }
  ]
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| items | array | Yes | Array of breadcrumb item objects. |
| items[].text | string | Yes (or html) | Text for the breadcrumb item. |
| items[].html | string | Yes (or text) | HTML for the breadcrumb item. |
| items[].href | string | No | URL for the breadcrumb link. Omit for the current page item. |
| items[].attributes | object | No | HTML attributes to add to the breadcrumb link as key–value pairs. |
| collapseOnMobile | boolean | No | When `true`, adds `govuk-breadcrumbs--collapse-on-mobile` and shows only the direct parent item on mobile viewports. |
| classes | string | No | Classes to add to the `<nav>` element. |
| attributes | object | No | HTML attributes to add to the `<nav>` element as key–value pairs. |

## Error Messages

The breadcrumbs component does not accept user input and does not produce validation error messages.

## Accessibility

The component wraps all breadcrumbs in a `<nav aria-label="Breadcrumb">` landmark, making it discoverable by screen reader users navigating by landmarks.

The last item — representing the current page — has `aria-current="page"` on the `<li>` element so assistive technologies can announce it as the active location.

Using an `<ol>` communicates to screen readers that the items are in an ordered sequence, which is appropriate for hierarchical navigation.

Ensure breadcrumb link text is descriptive and matches the destination page title so users know where each link leads.

## Do / Don't

**Do:**
- Place breadcrumbs at the top of the page, above the `<main>` element and page heading.
- Ensure the last item represents the current page and has no `href`.
- Use `collapseOnMobile: true` on deep hierarchies to improve mobile readability.
- Match breadcrumb labels to the page titles they link to.

**Don't:**
- Don't use breadcrumbs on transactional services — use the back link component instead.
- Don't use breadcrumbs alongside a back link on the same page.
- Don't include the current page as a link (it should have no `href`).
- Don't use breadcrumbs when there is a single level of hierarchy.

## Related Components / Patterns

- [Back link](https://design-system.service.gov.uk/components/back-link/) — for navigating back within a linear transactional flow.
- [Header](https://design-system.service.gov.uk/components/header/) — the primary site navigation element used alongside breadcrumbs.
- [Service navigation](https://design-system.service.gov.uk/components/service-navigation/) — for primary navigation within a service.
