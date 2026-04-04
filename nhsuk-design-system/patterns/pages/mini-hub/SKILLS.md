---
category: patterns
description: A navigation page that groups related content under a single topic, helping users find the right sub-page.
keywords:
  - "content hub"
  - "hub"
  - "hub page"
  - "mini"
  - "mini-hub"
  - "topic page"
last-reviewed: "2026-04-03"
name: Mini-hub
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/patterns/mini-hub"
subcategory: pages
---

# Mini-hub

> A navigation page that groups related content under a single topic, helping users find the right sub-page.
> Source: <https://service-manual.nhs.uk/design-system/patterns/mini-hub>

## Overview

A mini-hub page acts as a topic landing page that groups related content pages under a single heading. It gives users an overview of everything available within a topic and lets them navigate to the specific page they need.

The NHS website uses mini-hubs for health conditions that cover more than one aspect — for example, a "Type 2 diabetes" mini-hub links to pages on symptoms, diagnosis, treatment, and living with the condition.

The mini-hub typically uses the Contents list component to provide in-page navigation between the sub-pages.

## When to use this pattern

- When a topic covers enough content to warrant splitting across more than one page.
- When users need to navigate between related sub-pages within a single topic.
- When the content follows a structure like "Overview", "Symptoms", "Treatment", "Prevention".

## When not to use this pattern

- Do not use a mini-hub for a single page of content — use a standard content page instead.
- Do not use it for transactional journeys — use question pages and a task list instead.
- Do not use it for content that has no natural grouping or hierarchy.

## How it works

### Page structure

1. An `<h1>` heading with the topic name (e.g. "Type 2 diabetes").
2. A Contents list component showing all sub-pages in the topic, with the current page highlighted.
3. The main content of the current sub-page.
4. Pagination at the bottom to link to the previous and next sub-pages.

### Contents list

The contents list appears at the top of every sub-page in the mini-hub. It shows all pages in the topic and highlights the current page without making it a link.

### Pagination

Use the Pagination component at the bottom of each sub-page to let users move to the previous or next page in the sequence.

### First page

The first page in a mini-hub is typically an "Overview" page that introduces the topic and helps users decide which sub-page they need.

## Code examples

### HTML

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-two-thirds">

    <h1 class="nhsuk-heading-xl">Type 2 diabetes</h1>

    <nav class="nhsuk-contents-list" role="navigation" aria-label="Pages in this guide">
      <h2 class="nhsuk-u-visually-hidden">Contents</h2>
      <ol class="nhsuk-contents-list__list">
        <li class="nhsuk-contents-list__item" aria-current="page">
          <span class="nhsuk-contents-list__current">Overview</span>
        </li>
        <li class="nhsuk-contents-list__item">
          <a class="nhsuk-contents-list__link" href="/type-2-diabetes/symptoms">Symptoms</a>
        </li>
        <li class="nhsuk-contents-list__item">
          <a class="nhsuk-contents-list__link" href="/type-2-diabetes/getting-diagnosed">Getting diagnosed</a>
        </li>
        <li class="nhsuk-contents-list__item">
          <a class="nhsuk-contents-list__link" href="/type-2-diabetes/treatment">Treatment</a>
        </li>
      </ol>
    </nav>

    <h2 class="nhsuk-heading-l">What is type 2 diabetes?</h2>
    <p class="nhsuk-body">Type 2 diabetes is a condition that causes the level of sugar (glucose) in the blood to become too high.</p>

    <nav class="nhsuk-pagination" role="navigation" aria-label="Pagination">
      <ul class="nhsuk-list nhsuk-pagination__list">
        <li class="nhsuk-pagination-item--next">
          <a class="nhsuk-pagination__link nhsuk-pagination__link--next" href="/type-2-diabetes/symptoms">
            <span class="nhsuk-pagination__title">Next</span>
            <span class="nhsuk-u-visually-hidden">:</span>
            <span class="nhsuk-pagination__page">Symptoms</span>
            <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="34" height="34">
              <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>

  </div>
</div>
```

### Nunjucks

```njk
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-two-thirds">

    <h1 class="nhsuk-heading-xl">Type 2 diabetes</h1>

    {{ contentsList({
      items: [
        { href: "/type-2-diabetes/overview", text: "Overview", current: true },
        { href: "/type-2-diabetes/symptoms", text: "Symptoms" },
        { href: "/type-2-diabetes/getting-diagnosed", text: "Getting diagnosed" },
        { href: "/type-2-diabetes/treatment", text: "Treatment" }
      ]
    }) }}

    <h2 class="nhsuk-heading-l">What is type 2 diabetes?</h2>
    <p class="nhsuk-body">Type 2 diabetes is a condition that causes the level of sugar (glucose) in the blood to become too high.</p>

    {{ pagination({
      nextUrl: "/type-2-diabetes/symptoms",
      nextPage: "Symptoms"
    }) }}

  </div>
</div>
```

## Accessibility

- Use `role="navigation"` and `aria-label="Pages in this guide"` on the contents list `<nav>` element so screen reader users can identify and skip it.
- Mark the current page with `aria-current="page"` and render it as a `<span>` rather than a link — do not link to the current page.
- Use a visually hidden `<h2>` ("Contents") above the contents list for screen reader navigation.
- The pagination component must include visually hidden text between "Next" and the page title to create a readable phrase for screen readers.

## Do and do not

**Do:**

- Use a contents list on every page in the mini-hub so users always know where they are.
- Start with an "Overview" page that introduces the topic.
- Use pagination at the bottom of each page for sequential navigation.
- Keep the number of pages in a mini-hub manageable — aim for 4 to 8 pages.

**Do not:**

- Use a mini-hub for a single page of content.
- Link to the current page in the contents list — show it as non-interactive text.
- Mix transactional form pages into a mini-hub — keep informational and transactional content separate.
- Create deeply nested mini-hubs — keep the structure flat with one level of sub-pages.

## Related components and patterns

- [Contents list component](https://service-manual.nhs.uk/design-system/components/contents-list)
- [Pagination component](https://service-manual.nhs.uk/design-system/components/pagination)
- [A to Z page pattern](../a-to-z-page/SKILLS.md)
