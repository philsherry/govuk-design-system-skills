---
category: styles
description: GOV.UK Frontend provides a responsive grid system and width container that centres page content to a maximum of 960px. Utility classes define columns, which stack to full width on mobile.
govuk-frontend: "5.x"
keywords:
  - "columns"
  - "container"
  - "grid"
  - "layout"
  - "responsive layout"
last-reviewed: "2026-04-03"
name: Layout
source: "https://design-system.service.gov.uk/styles/layout/"
---

# Layout

> GOV.UK Frontend provides a responsive grid system and width container that centres page content to a maximum of 960px. Utility classes define columns, which stack to full width on mobile.
> Source: https://design-system.service.gov.uk/styles/layout/

## Overview

The GOV.UK layout system uses a 12-column grid. It gives you a fixed-width container, a responsive grid row, and a set of column classes that cover the most common fractional widths. The grid collapses to full-width single-column layout at mobile viewport sizes, meaning content is always readable without horizontal scrolling.

## When to use this style

Use the width container and grid on every page of your service to keep content aligned to GOV.UK conventions. Use grid columns whenever you need to display content side by side, such as a form column with a sidebar.

## When not to use this style

Do not use the grid system inside components that already manage their own internal layout. Do not create custom grid columns unless none of the provided classes fit your needs — first check whether a layout change or different content structure would work better.

## How it works

### Width container

`govuk-width-container` centres the page content and constrains it to a maximum width of 960px. It also adds responsive horizontal padding so content does not touch the screen edges on narrow viewports.

```html
<div class="govuk-width-container">
  <!-- content -->
</div>
```

### Main wrapper

`govuk-main-wrapper` adds vertical padding above and below the main content area. Apply it to the `<main>` element inside the width container:

```html
<div class="govuk-width-container">
  <main class="govuk-main-wrapper" id="main-content" role="main">
    <!-- page content -->
  </main>
</div>
```

### Grid rows

A grid row is a flex container that holds one or more columns:

```html
<div class="govuk-grid-row">
  <!-- columns go here -->
</div>
```

### Grid column classes

| Class | Width |
|---|---|
| `govuk-grid-column-full` | 100% |
| `govuk-grid-column-one-half` | 50% |
| `govuk-grid-column-one-third` | 33.33% |
| `govuk-grid-column-two-thirds` | 66.66% |
| `govuk-grid-column-one-quarter` | 25% |
| `govuk-grid-column-three-quarters` | 75% |

All column classes become full width (100%) below the tablet breakpoint (641px).

### Desktop-only column variants

Each column class has a `-from-desktop` variant that applies the column width at desktop viewports only (769px and above). Below the desktop breakpoint the column is full width:

```html
<div class="govuk-grid-column-two-thirds-from-desktop">
```

### Column offset classes

Offset classes push a column to the right without filling the space to its left:

```html
<div class="govuk-grid-column-one-third govuk-grid-column--offset-one-third">
```

Available offsets follow the same fractional naming: `--offset-one-quarter`, `--offset-one-third`, `--offset-one-half`, `--offset-two-thirds`, `--offset-three-quarters`.

## Code Examples

### Two-thirds and one-third layout

```html
<div class="govuk-width-container">
  <main class="govuk-main-wrapper" id="main-content" role="main">
    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        <h1 class="govuk-heading-xl">Main content</h1>
        <p class="govuk-body">This is the main content column.</p>
      </div>
      <div class="govuk-grid-column-one-third">
        <h2 class="govuk-heading-m">Related content</h2>
        <p class="govuk-body">This is the sidebar column.</p>
      </div>
    </div>
  </main>
</div>
```

### Full-width layout

```html
<div class="govuk-width-container">
  <main class="govuk-main-wrapper" id="main-content" role="main">
    <div class="govuk-grid-row">
      <div class="govuk-grid-column-full">
        <h1 class="govuk-heading-xl">Full width page</h1>
      </div>
    </div>
  </main>
</div>
```

### Two equal columns

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-one-half">
    <!-- First column -->
  </div>
  <div class="govuk-grid-column-one-half">
    <!-- Second column -->
  </div>
</div>
```

### Three equal columns

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-one-third">
    <!-- First column -->
  </div>
  <div class="govuk-grid-column-one-third">
    <!-- Second column -->
  </div>
  <div class="govuk-grid-column-one-third">
    <!-- Third column -->
  </div>
</div>
```

### Nesting grid rows

You can nest grid rows inside columns. Each nested row starts a new 12-column grid context within its parent column:

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">
    <div class="govuk-grid-row">
      <div class="govuk-grid-column-one-half">
        <!-- Nested column A -->
      </div>
      <div class="govuk-grid-column-one-half">
        <!-- Nested column B -->
      </div>
    </div>
  </div>
</div>
```

## Accessibility

- Column layout is purely presentational. Reading order in the HTML source must match the logical reading order, because screen readers and keyboard users navigate in DOM order regardless of visual positioning.
- Do not use grid columns to reorder content visually when that would create a mismatch with the DOM order — this causes confusion for screen reader users.
- Ensure colour contrast meets WCAG AA requirements regardless of the column layout chosen.

## Do and Do not

**Do:**
- Use `govuk-width-container` on every page to maintain consistent maximum width and horizontal margins.
- Use `govuk-main-wrapper` on the `<main>` element to get the correct vertical padding.
- Ensure the HTML source order reflects the logical reading order.
- Use a two-thirds/one-third split for standard form pages with a related content sidebar.

**Do not:**
- Create custom column widths using ad-hoc inline styles or one-off utility classes.
- Use the grid to reorder content in a way that differs from the DOM order.
- Nest grid rows deeply — keep layouts as flat as possible.
- Apply `govuk-grid-column-*` classes outside a `govuk-grid-row` container.

## Related Components / Patterns

- [Page template](https://design-system.service.gov.uk/styles/page-template/)
- [Spacing style](https://design-system.service.gov.uk/styles/spacing/)
- [GOV.UK Frontend grid Sass variables and mixins](https://github.com/alphagov/govuk-frontend)
