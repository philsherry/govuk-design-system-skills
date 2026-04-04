---
category: styles
description: NHS UK Frontend provides a responsive grid system and width container that constrains page content with consistent margins.
keywords:
  - "columns"
  - "container"
  - "grid"
  - "layout"
  - "responsive layout"
last-reviewed: "2026-04-03"
name: Layout
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/styles/layout"
---

# Layout

> NHS UK Frontend provides a responsive grid system and width container that constrains page content with consistent margins.
> Source: <https://service-manual.nhs.uk/design-system/styles/layout>

## Overview

The NHS layout system uses a fluid grid. It gives you a width container, a responsive grid row, and column classes that cover the most common fractional widths. The grid collapses to full-width single-column layout on small viewports, meaning content stays readable without horizontal scrolling.

The default maximum content width is 960px (matching the NHS website), centred on the page with responsive horizontal padding.

## When to use this style

Use the width container and grid on every page of your NHS service to keep content aligned to NHS conventions. Use grid columns whenever you need to display content side by side, such as a form column with a sidebar.

## When not to use this style

Do not use the grid system inside components that already manage their own internal layout. Do not create custom grid columns unless none of the provided classes fit your needs — first check whether a layout change or different content structure would work better.

## How it works

### Width container

`nhsuk-width-container` centres the page content and constrains it to the maximum width. It also adds responsive horizontal padding so content does not touch the screen edges on narrow viewports.

```html
<div class="nhsuk-width-container">
  <!-- content -->
</div>
```

### Main wrapper

`nhsuk-main-wrapper` adds vertical padding above and below the main content area. Apply it to the `<main>` element inside the width container:

```html
<div class="nhsuk-width-container">
  <main class="nhsuk-main-wrapper" id="maincontent" role="main">
    <!-- page content -->
  </main>
</div>
```

### Grid rows

A grid row is a container that holds one or more columns:

```html
<div class="nhsuk-grid-row">
  <!-- columns go here -->
</div>
```

### Grid column classes

| Class | Width |
|---|---|
| `nhsuk-grid-column-full` | 100% |
| `nhsuk-grid-column-one-half` | 50% |
| `nhsuk-grid-column-one-third` | 33.33% |
| `nhsuk-grid-column-two-thirds` | 66.66% |
| `nhsuk-grid-column-one-quarter` | 25% |
| `nhsuk-grid-column-three-quarters` | 75% |

All column classes become full width (100%) below the tablet breakpoint.

### Reading width

For body content and long-form text, constrain the line length to two-thirds width for readability:

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-two-thirds">
    <p class="nhsuk-body-l">Content constrained to a readable line length.</p>
  </div>
</div>
```

## Code examples

### Two-thirds and one-third layout

```html
<div class="nhsuk-width-container">
  <main class="nhsuk-main-wrapper" id="maincontent" role="main">
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-two-thirds">
        <h1 class="nhsuk-heading-xl">Main content</h1>
        <p class="nhsuk-body-l">The main content column.</p>
      </div>
      <div class="nhsuk-grid-column-one-third">
        <h2 class="nhsuk-heading-m">Related content</h2>
        <p class="nhsuk-body">The sidebar column.</p>
      </div>
    </div>
  </main>
</div>
```

### Full-width layout

```html
<div class="nhsuk-width-container">
  <main class="nhsuk-main-wrapper" id="maincontent" role="main">
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-full">
        <h1 class="nhsuk-heading-xl">Full width page</h1>
      </div>
    </div>
  </main>
</div>
```

### Two equal columns

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-one-half">
    <!-- First column -->
  </div>
  <div class="nhsuk-grid-column-one-half">
    <!-- Second column -->
  </div>
</div>
```

### Three equal columns

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-one-third">
    <!-- First column -->
  </div>
  <div class="nhsuk-grid-column-one-third">
    <!-- Second column -->
  </div>
  <div class="nhsuk-grid-column-one-third">
    <!-- Third column -->
  </div>
</div>
```

## Accessibility

- Column layout is presentational only. Reading order in the HTML source must match the logical reading order, because screen readers and keyboard users navigate in DOM order regardless of visual positioning.
- Do not use grid columns to reorder content visually when that would create a mismatch with the DOM order — this causes confusion for screen reader users.
- Ensure colour contrast meets WCAG AA requirements regardless of the column layout chosen.

## Do and do not

**Do:**

- Use `nhsuk-width-container` on every page to maintain consistent maximum width and horizontal margins.
- Use `nhsuk-main-wrapper` on the `<main>` element for correct vertical padding.
- Ensure the HTML source order reflects the logical reading order.
- Use a two-thirds column for main content and a one-third column for related content in sidebar layouts.

**Do not:**

- Create custom column widths using ad-hoc inline styles or one-off utility classes.
- Use the grid to reorder content in a way that differs from the DOM order.
- Nest grid rows deeply — keep layouts as flat as possible.
- Apply `nhsuk-grid-column-*` classes outside an `nhsuk-grid-row` container.

## Related components and patterns

- [Page template style](https://service-manual.nhs.uk/design-system/styles/page-template)
- [Spacing style](https://service-manual.nhs.uk/design-system/styles/spacing)
- [NHS UK Frontend on GitHub](https://github.com/nhsuk/nhsuk-frontend)
