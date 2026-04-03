---
category: components
description: A navigation aid that shows users where they are in the site hierarchy.
keywords:
  - "breadcrumb trail"
  - "breadcrumbs"
  - "navigation path"
last-reviewed: "2026-04-03"
name: Breadcrumbs
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/breadcrumbs"
---

# Breadcrumbs

> A navigation aid that shows users where they are in the site hierarchy.
> Source: https://service-manual.nhs.uk/design-system/components/breadcrumbs

## Overview

The breadcrumbs component helps users understand where they are within a website's structure and navigate back to parent pages. It renders as an ordered list of links inside a `<nav>` landmark element labelled "Breadcrumb", representing the hierarchical path from the homepage to the current page.

The last item in the list represents the current page. It appears as plain text (no link) with `aria-current="page"` on the list item.

The NHS breadcrumbs component uses the class `nhsuk-breadcrumb` and follows the same structural pattern as the GOV.UK equivalent, adapted with NHS styling. The component includes a `<p>` element below the breadcrumb list that shows a "Back to" link on mobile viewports, giving mobile users a simpler way to navigate up one level.

## When to use this component

Use breadcrumbs on informational or content-heavy websites where users navigate a hierarchy of pages — for example, the NHS website with its health conditions, symptoms, and treatment topics. They help users orient themselves and navigate upward in the site structure.

Use breadcrumbs when users arrive at pages from search engines or external links and need context about where they are.

## When not to use this component

Do not use breadcrumbs on transactional services (multi-page forms or applications). Transactional journeys have a linear flow and should use the back link component instead.

Do not use breadcrumbs on single-level websites with no meaningful hierarchy. Do not use them alongside the back link component on the same page.

## How it works

The breadcrumbs render as a `<nav class="nhsuk-breadcrumb">` element with `aria-label="Breadcrumb"`. Inside sits a `<div class="nhsuk-width-container">` containing an `<ol class="nhsuk-breadcrumb__list">`. Each item is an `<li class="nhsuk-breadcrumb__item">` containing an `<a class="nhsuk-breadcrumb__link">`.

The last item in the list represents the current page, has no `href`, and the `<li>` has `aria-current="page"`.

Below the breadcrumb list, a `<p class="nhsuk-breadcrumb__back">` element contains a "Back to" link pointing to the parent page. This shows on mobile viewports where the full breadcrumb trail hides.

## Code Examples

### Default / Basic

#### HTML

```html
<nav class="nhsuk-breadcrumb" aria-label="Breadcrumb">
  <div class="nhsuk-width-container">
    <ol class="nhsuk-breadcrumb__list">
      <li class="nhsuk-breadcrumb__item">
        <a class="nhsuk-breadcrumb__link" href="/">Home</a>
      </li>
      <li class="nhsuk-breadcrumb__item">
        <a class="nhsuk-breadcrumb__link" href="/conditions">Health A to Z</a>
      </li>
      <li class="nhsuk-breadcrumb__item" aria-current="page">
        Diabetes
      </li>
    </ol>
    <p class="nhsuk-breadcrumb__back">
      <a class="nhsuk-breadcrumb__backlink" href="/conditions">
        Back to Health A to Z
      </a>
    </p>
  </div>
</nav>
```

#### Nunjucks

```njk
{{ breadcrumb({
  items: [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "Health A to Z",
      href: "/conditions"
    }
  ],
  href: "/conditions",
  text: "Back to Health A to Z"
}) }}
```

### With extra classes

#### Nunjucks

```njk
{{ breadcrumb({
  classes: "nhsuk-breadcrumb--custom",
  items: [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "Services",
      href: "/services"
    }
  ],
  href: "/services",
  text: "Back to Services"
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| items | array | Yes | Array of breadcrumb item objects (excluding the current page). |
| items[].text | string | Yes | Text for the breadcrumb item. |
| items[].href | string | Yes | URL for the breadcrumb link. |
| items[].attributes | object | No | HTML attributes to add to the breadcrumb link as key–value pairs. |
| href | string | Yes | URL for the mobile "Back to" link (usually the parent page). |
| text | string | Yes | Text for the mobile "Back to" link. |
| classes | string | No | Classes to add to the `<nav>` element. |
| attributes | object | No | HTML attributes to add to the `<nav>` element as key–value pairs. |

## Accessibility

The component wraps all breadcrumbs in a `<nav aria-label="Breadcrumb">` landmark, making it discoverable by screen reader users navigating by landmarks.

The last item — representing the current page — has `aria-current="page"` on the `<li>` element so assistive technologies can announce it as the active location.

Using an `<ol>` communicates to screen readers that the items form an ordered sequence, which suits hierarchical navigation.

Ensure breadcrumb link text matches the destination page title so users know where each link leads.

The mobile "Back to" link provides a simplified navigation path for small screens, reducing visual clutter without removing the ability to navigate upward.

## Do and Do not

**Do:**
- Place breadcrumbs at the top of the page, above the `<main>` element and page heading.
- Ensure the last item represents the current page and has no `href`.
- Set the mobile "Back to" link to point to the immediate parent page.
- Match breadcrumb labels to the page titles they link to.

**Do not:**
- Do not use breadcrumbs on transactional services — use the back link component instead.
- Do not use breadcrumbs alongside a back link on the same page.
- Do not include the current page as a link.
- Do not use breadcrumbs when the site has a single level of hierarchy.

## Related Components / Patterns

- [Back link](https://service-manual.nhs.uk/design-system/components/back-link) — for navigating back within a linear transactional flow.
- [Header](https://service-manual.nhs.uk/design-system/components/header) — the primary site navigation element used alongside breadcrumbs.
- [Contents list](https://service-manual.nhs.uk/design-system/components/contents-list) — for navigating between pages within the same topic.
