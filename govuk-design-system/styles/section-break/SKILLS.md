---
category: styles
description: The section break is a styled horizontal rule used to create a visible or invisible thematic separation between blocks of content. It maps to the HTML `<hr>` element with GOV.UK-specific modifier classes.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Section Break
---

# Section Break

> The section break is a styled horizontal rule used to create a visible or invisible thematic separation between blocks of content. It maps to the HTML `<hr>` element with GOV.UK-specific modifier classes.
> Source: https://design-system.service.gov.uk/styles/section-break/

---

## Overview

Apply `govuk-section-break` to an `<hr>` element to create a thematic break between sections of content. By default the section break is invisible — it contributes spacing but renders no visible line. Adding the `govuk-section-break--visible` modifier displays a 1px border in the GOV.UK border colour. Size modifiers control the amount of vertical margin added above and below the break.

---

## When to use this style

Use a section break to separate distinct groups of related content on a long page. The visible variant is appropriate when the content needs a clear visual division. The invisible variant is useful when you need consistent vertical rhythm between sections without a decorative element.

---

## When not to use this style

Do not use a section break as a substitute for correct heading hierarchy or proper sectioning elements. If the content is genuinely a separate section, consider using a `<section>` with an appropriate heading instead. Do not use section breaks inside tables, forms, or component internals.

---

## How it works

### Base class

The base class alone renders an invisible `<hr>` that adds no visible line but participates in the document's thematic structure:

```html
<hr class="govuk-section-break">
```

### Visible modifier

Add `govuk-section-break--visible` to show a 1px solid line in the GOV.UK border colour (`#b1b4b6`):

```html
<hr class="govuk-section-break govuk-section-break--visible">
```

### Size modifiers

Size modifiers control the vertical margin (space above and below the break). You can use them with or without the visible modifier.

| Modifier | Margin (mobile) | Margin (tablet+) |
|---|---|---|
| `govuk-section-break--m` | 20px | 20px |
| `govuk-section-break--l` | 25px | 30px |
| `govuk-section-break--xl` | 25px | 40px |

If you do not apply a size modifier, the browser default `<hr>` margin applies unless the GOV.UK Frontend base styles reset it.

---

## Code Examples

### Invisible section break with medium spacing

```html
<p class="govuk-body">First section of content.</p>

<hr class="govuk-section-break govuk-section-break--m">

<p class="govuk-body">Second section of content.</p>
```

### Visible section break with large spacing

```html
<p class="govuk-body">First section of content.</p>

<hr class="govuk-section-break govuk-section-break--l govuk-section-break--visible">

<p class="govuk-body">Second section of content.</p>
```

### Visible section break with extra-large spacing

```html
<h2 class="govuk-heading-l">Chapter one</h2>
<p class="govuk-body">Chapter one content.</p>

<hr class="govuk-section-break govuk-section-break--xl govuk-section-break--visible">

<h2 class="govuk-heading-l">Chapter two</h2>
<p class="govuk-body">Chapter two content.</p>
```

### Invisible break used for spacing only

```html
<div class="govuk-form-group">
  <!-- form field -->
</div>

<hr class="govuk-section-break govuk-section-break--l">

<div class="govuk-form-group">
  <!-- another form field -->
</div>
```

---

## Accessibility

- `<hr>` has an implicit ARIA role of `separator`. Screen readers will announce it as a thematic break. This is appropriate when the element genuinely separates distinct content sections.
- Do not use `<hr>` purely for decorative horizontal lines unrelated to content structure — use CSS borders on a surrounding element instead, and apply `role="presentation"` or `aria-hidden="true"` if the visual treatment conveys no semantic meaning.
- Ensure the visible line meets contrast requirements against its background. GOV.UK designed the border colour `#b1b4b6` for use against white `#ffffff` backgrounds.

---

## Do / Don't

**Do:**
- Use `<hr>` for genuine thematic breaks between content sections.
- Combine a size modifier with the visible modifier when you need both spacing and a visible line.
- Use the invisible variant to maintain consistent vertical rhythm without adding decoration.

**Don't:**
- Use section breaks inside tables, lists, or form groups.
- Use a section break as the only means of separating sections — also consider heading structure.
- Apply the visible modifier when the surrounding context already provides clear visual separation.
- Use more than one section break in quick succession to accumulate spacing; use spacing override classes on surrounding elements instead.

---

## Related Components / Patterns

- [Spacing style](https://design-system.service.gov.uk/styles/spacing/)
- [Typography – headings](https://design-system.service.gov.uk/styles/typography/)
- [Layout style](https://design-system.service.gov.uk/styles/layout/)
