---
category: styles
description: GOV.UK Frontend provides four heading sizes as CSS classes you can apply to any heading element. Caption classes allow a secondary label to appear above the heading. There must be one H1 per page.
govuk-frontend: "5.x"
keywords:
  - "h1 h2 h3"
  - "heading hierarchy"
  - "heading levels"
  - "headings"
last-reviewed: "2026-04-03"
name: Headings
source: "https://design-system.service.gov.uk/styles/typography/"
---

# Headings

> GOV.UK Frontend provides four heading sizes as CSS classes you can apply to any heading element. Caption classes allow a secondary label to appear above the heading. There must be one H1 per page.
> Source: https://design-system.service.gov.uk/styles/typography/

## Overview

Headings create a clear hierarchy on the page and help users and assistive technologies understand the structure of content. GOV.UK Frontend separates visual heading size from semantic heading level: you choose the HTML element (`<h1>` through `<h4>`) based on page structure, and apply a size class to control the visual appearance.

All heading classes are bold weight, use the GOV.UK heading colour (`#0b0c0c`), and are responsive — larger on desktop, slightly smaller on mobile.

## When to use this style

Use heading classes on every page to establish a logical content hierarchy. Apply heading classes to semantic heading elements only — do not apply them to non-heading elements to make text look bold or large.

## When not to use this style

Do not use heading classes purely for visual styling on non-heading elements such as `<p>` or `<div>`. If you need large bold text that is not a heading, use the type scale or font override classes instead.

## How it works

### Heading classes and sizes

| Class | Element | Mobile | Tablet and above |
|---|---|---|---|
| `govuk-heading-xl` | `<h1>` | 32px | 48px |
| `govuk-heading-l` | `<h2>` | 24px | 36px |
| `govuk-heading-m` | `<h3>` | 20px | 24px |
| `govuk-heading-s` | `<h4>` | 18px | 19px |

The class and the element are independent. You can apply `govuk-heading-l` to an `<h1>` if the page hierarchy requires it.

### One H1 per page

Every page must have one `<h1>`. This is a WCAG requirement and assists screen reader users in understanding what the page is about.

### Caption classes

A caption sits above a heading and provides extra context — for example, the name of a step in a multi-step process, or the category a page belongs to.

| Class | Pairs with |
|---|---|
| `govuk-caption-xl` | `govuk-heading-xl` |
| `govuk-caption-l` | `govuk-heading-l` |
| `govuk-caption-m` | `govuk-heading-m` |

The caption element sits directly before the heading element in the DOM. In Nunjucks, place the caption inside the heading element using a `<span>`.

### Heading as a form legend or fieldset legend

When the page contains a single question, the heading should be the `<legend>` of the `<fieldset>`. Use the `govuk-fieldset__legend--xl` class to size the legend to match `govuk-heading-xl`:

```html
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--xl">
    <h1 class="govuk-fieldset__heading">
      What is your date of birth?
    </h1>
  </legend>
</fieldset>
```

## Code Examples

### Standard headings

```html
<h1 class="govuk-heading-xl">Page heading</h1>
<h2 class="govuk-heading-l">Section heading</h2>
<h3 class="govuk-heading-m">Subsection heading</h3>
<h4 class="govuk-heading-s">Minor heading</h4>
```

### Heading with caption (caption outside heading element)

```html
<span class="govuk-caption-xl">Step 1 of 4</span>
<h1 class="govuk-heading-xl">Check your answers</h1>
```

### Heading with caption (caption inside heading element)

```html
<h1 class="govuk-heading-xl">
  <span class="govuk-caption-xl">Section 3</span>
  Personal details
</h1>
```

### Using a different size class on an element

A subsection that is semantically an `<h2>` but should visually appear at the small heading size:

```html
<h2 class="govuk-heading-s">Related guidance</h2>
```

### Heading as fieldset legend (single-question page pattern)

```html
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--xl">
    <h1 class="govuk-fieldset__heading">
      Do you have a National Insurance number?
    </h1>
  </legend>
  <!-- form controls -->
</fieldset>
```

## Accessibility

- Every page must have one `<h1>`. Screen reader users rely on the H1 to understand the page topic and navigate between pages.
- Heading levels must not skip — do not go from `<h1>` directly to `<h3>` without an `<h2>` between them. Skipped levels confuse screen reader users navigating by heading.
- The visual heading size class and the semantic heading Level-Are independent, but the DOM heading order must reflect the logical document structure.
- Captions placed outside the heading element are not programmatically associated with the heading. Place captions inside the heading using a `<span>` when the association is important for screen reader users.
- When using a heading as a fieldset legend, nest the `<h1>` inside the `<legend>` element — not the other way around.

## Do and Do not

**Do:**
- Use one `<h1>` per page.
- Match the heading level to the document outline, not the desired visual size.
- Use captions when context about the page's position within a journey aids understanding.
- Use `govuk-fieldset__legend--xl` for single-question pages to make the question the page heading.

**Do not:**
- Skip heading levels (e.g. `<h1>` followed directly by `<h3>`).
- Apply heading classes to non-heading elements to make text look large or bold.
- Use more than one `<h1>` element on the same page.
- Place content between the caption and the heading it refers to.

## Related Components / Patterns

- [Type scale style](https://design-system.service.gov.uk/styles/type-scale/)
- [Paragraphs style](https://design-system.service.gov.uk/styles/typography/)
- [Fieldset component](https://design-system.service.gov.uk/components/fieldset/)
- [Question pages pattern](https://design-system.service.gov.uk/patterns/question-pages/)
- [Font override classes](https://design-system.service.gov.uk/styles/font-override-classes/)
