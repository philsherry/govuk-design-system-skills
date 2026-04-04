---
category: components
description: An in-page navigation list that links to pages within the same content group.
keywords:
  - "anchor links"
  - "contents"
  - "contents list"
  - "in-page navigation"
  - "list"
  - "page contents"
last-reviewed: "2026-04-03"
name: Contents List
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/contents-list"
---

# Contents List

> An in-page navigation list that links to pages within the same content group.
> Source: https://service-manual.nhs.uk/design-system/components/contents-list

## Overview

The contents list component displays a list of links to pages that belong to the same content group or topic. It helps users navigate between related pages — for example, the different sections of a health condition guide (overview, symptoms, treatment, prevention).

The component renders as a `<nav>` landmark with the class `nhsuk-contents-list` and an `aria-label` of "Pages in this guide". Inside sits an `<ol class="nhsuk-contents-list__list">` containing list items with links.

The current page appears as plain text (not a link) with `aria-current="page"` to communicate the active location to assistive technologies.

## When to use this component

Use the contents list when you split a long piece of content across more than one page. It suits guides on the NHS website where a condition has separate pages for symptoms, causes, treatment, and prevention.

Use it when users need to navigate between related pages within the same topic without returning to a parent page.

## When not to use this component

Do not use the contents list for site-wide navigation — use the header or breadcrumbs for that.

Do not use the contents list for pages that do not belong to the same topic group. Each page in the list should cover a distinct aspect of one subject.

Do not use the contents list when the content fits on a single page. Consider the details or expander components to manage long content on one page instead.

## How it works

The contents list renders inside a `<nav class="nhsuk-contents-list" aria-label="Pages in this guide">`. Each item in the list is an `<li class="nhsuk-contents-list__item">`. Linked items contain an `<a class="nhsuk-contents-list__link">`. The current page item contains a `<span class="nhsuk-contents-list__current">` instead of a link.

Place the contents list at the top of the page, before the main content, so users see the navigation options before reading.

## Code examples

### Default / Basic

#### HTML

```html
<nav class="nhsuk-contents-list" role="navigation" aria-label="Pages in this guide">
  <h2 class="nhsuk-u-visually-hidden">Contents</h2>
  <ol class="nhsuk-contents-list__list">
    <li class="nhsuk-contents-list__item" aria-current="page">
      <span class="nhsuk-contents-list__current">Overview</span>
    </li>
    <li class="nhsuk-contents-list__item">
      <a class="nhsuk-contents-list__link" href="/conditions/diabetes/symptoms">Symptoms</a>
    </li>
    <li class="nhsuk-contents-list__item">
      <a class="nhsuk-contents-list__link" href="/conditions/diabetes/treatment">Treatment</a>
    </li>
    <li class="nhsuk-contents-list__item">
      <a class="nhsuk-contents-list__link" href="/conditions/diabetes/prevention">Prevention</a>
    </li>
  </ol>
</nav>
```

#### Nunjucks

```njk
{{ contentsList({
  items: [
    {
      text: "Overview",
      current: true
    },
    {
      text: "Symptoms",
      href: "/conditions/diabetes/symptoms"
    },
    {
      text: "Treatment",
      href: "/conditions/diabetes/treatment"
    },
    {
      text: "Prevention",
      href: "/conditions/diabetes/prevention"
    }
  ]
}) }}
```

### With custom aria-label

#### Nunjucks

```njk
{{ contentsList({
  ariaLabel: "Pages in this condition guide",
  items: [
    {
      text: "What it is",
      href: "/conditions/asthma/what-it-is"
    },
    {
      text: "Symptoms",
      current: true
    },
    {
      text: "Treatment",
      href: "/conditions/asthma/treatment"
    }
  ]
}) }}
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| items | array | Yes | Array of contents list item objects. |
| items[].text | string | Yes | Text for the contents list item. |
| items[].href | string | No | URL for the contents list link. Omit for the current page item. |
| items[].current | boolean | No | When `true`, marks this item as the current page. Renders as a `<span>` instead of a link and adds `aria-current="page"`. |
| items[].attributes | object | No | HTML attributes to add to the link as key–value pairs. |
| ariaLabel | string | No | The `aria-label` for the `<nav>` element. Defaults to `"Pages in this guide"`. |
| classes | string | No | Classes to add to the `<nav>` element. |
| attributes | object | No | HTML attributes to add to the `<nav>` element as key–value pairs. |

## Accessibility

The contents list sits inside a `<nav>` landmark with an `aria-label`, making it discoverable by screen reader users who navigate by landmarks.

The current page item has `aria-current="page"` so assistive technologies announce it as the active page.

A visually hidden `<h2>Contents</h2>` heading provides a label for screen reader users who navigate by headings.

Using an `<ol>` communicates to screen readers that the items form an ordered sequence.

Ensure link text matches the destination page headings so users know where each link leads.

## Do and do not

**Do:**
- Place the contents list at the top of the page, before the main content.
- Mark the current page with `current: true` so it renders as non-linked text.
- Keep the list to a manageable number of items — aim for 8 or fewer.
- Match each link label to the heading of its destination page.

**Do not:**
- Do not use the contents list as a substitute for breadcrumbs or site navigation.
- Do not include the current page as a link — mark it as the current item.
- Do not use the contents list when content fits on a single page.
- Do not nest contents lists within each other.

## Related components and patterns

- [Breadcrumbs](https://service-manual.nhs.uk/design-system/components/breadcrumbs) — for navigating a site hierarchy.
- [Card](https://service-manual.nhs.uk/design-system/components/card) — for presenting topics as navigable blocks.
- [Back link](https://service-manual.nhs.uk/design-system/components/back-link) — for navigating back within a linear flow.
