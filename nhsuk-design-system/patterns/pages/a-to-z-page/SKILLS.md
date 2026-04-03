---
category: patterns
description: An alphabetical index page that helps users find health topics by browsing a list from A to Z.
keywords:
  - "a to z page"
  - "alphabetical"
  - "directory"
  - "index"
last-reviewed: "2026-04-03"
name: A to Z page
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/patterns/a-to-z-page"
subcategory: pages
---

# A to Z page

> An alphabetical index page that helps users find health topics by browsing a list from A to Z.
> Source: <https://service-manual.nhs.uk/design-system/patterns/a-to-z-page>

## Overview

The A to Z page pattern presents an alphabetical list of topics that users can browse. Each letter of the alphabet acts as a navigation anchor, letting users jump to the section they need. The pattern suits large content sites where users may not know the exact name of what they are looking for.

The NHS website uses the A to Z pattern for its health conditions index, where users browse conditions from "Abdominal aortic aneurysm" to "Zika virus".

## When to use this pattern

- When you have a large number of items that users need to browse alphabetically.
- When users may not know the precise term for what they need and prefer to scan a list.
- When the content covers a broad range of topics under a single category (e.g. health conditions, medicines).

## When not to use this pattern

- Do not use an A to Z page for a small number of items — a simple list or contents list works better.
- Do not use it when users know exactly what they are looking for — provide a search function instead.
- Do not use it for content that has a natural non-alphabetical order (e.g. steps in a process).

## How it works

### Page structure

1. An `<h1>` heading that describes the content (e.g. "Health A to Z").
2. A navigation panel with letter links (A, B, C, ... Z). Grey out letters that have no entries.
3. An alphabetical list of items grouped under letter headings (`<h2>` elements).
4. Each item links to its destination page.

### Letter navigation

The letter navigation panel sits between the page heading and the list. Each letter links to the corresponding `<h2>` anchor on the page. Letters without entries use a `<span>` instead of a link and appear visually muted.

### Back to top

Include "Back to top" links after each letter section so users can return to the letter navigation without scrolling.

## Code Examples

### HTML

```html
<h1 class="nhsuk-heading-xl">Health A to Z</h1>

<nav class="nhsuk-u-margin-bottom-4" aria-label="A to Z Navigation">
  <ol class="nhsuk-list" role="list">
    <li class="nhsuk-u-margin-bottom-0">
      <a class="nhsuk-link" href="#A">A</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0">
      <a class="nhsuk-link" href="#B">B</a>
    </li>
    <li class="nhsuk-u-margin-bottom-0">
      <span class="nhsuk-u-secondary-text-color">C</span>
    </li>
    <!-- ... remaining letters ... -->
  </ol>
</nav>

<h2 id="A">A</h2>
<ul class="nhsuk-list nhsuk-list--border">
  <li>
    <a class="nhsuk-link" href="/conditions/abdominal-aortic-aneurysm">Abdominal aortic aneurysm</a>
  </li>
  <li>
    <a class="nhsuk-link" href="/conditions/acne">Acne</a>
  </li>
</ul>
<a class="nhsuk-link nhsuk-back-to-top__link" href="#nhsuk-nav-a-z">
  <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="19" height="19">
    <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
  </svg>
  Back to top
</a>

<h2 id="B">B</h2>
<ul class="nhsuk-list nhsuk-list--border">
  <li>
    <a class="nhsuk-link" href="/conditions/back-pain">Back pain</a>
  </li>
</ul>
```

## Accessibility

- Use an `<nav>` element with an `aria-label` (e.g. "A to Z Navigation") for the letter navigation panel so screen reader users can identify and skip it.
- Use `<h2>` elements for each letter group so screen reader users can navigate by heading.
- Grey out unavailable letters using a `<span>` rather than a disabled link — disabled links are confusing for screen reader users.
- "Back to top" links should be visible and functional for keyboard users.

## Do and Do not

**Do:**

- Use the A to Z pattern for large lists of items that benefit from alphabetical browsing.
- Grey out letters that have no entries using a non-interactive `<span>`.
- Include "Back to top" links after each letter section.
- Use `<h2>` headings for each letter to support screen reader navigation.

**Do not:**

- Use the A to Z pattern for fewer than 20 items — a plain list works better.
- Make unavailable letters clickable — they should not be links.
- Remove the letter navigation panel — it provides essential orientation.
- Use this pattern as a replacement for search — provide both when possible.

## Related Components / Patterns

- [Contents list component](https://service-manual.nhs.uk/design-system/components/contents-list)
- [Pagination component](https://service-manual.nhs.uk/design-system/components/pagination)
- [Mini-hub pattern](../mini-hub/SKILLS.md)
