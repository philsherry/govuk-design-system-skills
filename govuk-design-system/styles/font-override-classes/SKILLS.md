---
category: styles
description: Utility classes for overriding font size and font weight on individual elements. These classes use `!important` for exceptional one-off adjustments, not as a general typography system.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Font Override Classes
---

# Font Override Classes

> Utility classes for overriding font size and font weight on individual elements. These classes use `!important` for exceptional one-off adjustments, not as a general typography system.
> Source: https://design-system.service.gov.uk/styles/font-override-classes/

---

## Overview

Font override classes let you apply a specific font size or font weight from the GOV.UK type scale to any element without writing custom CSS. They use `!important` so they override component default styles. Use them for cases where a standard paragraph or heading class is not appropriate — for example, inside a custom component that needs a specific size from the scale.

---

## When to use this style

Use font override classes when you need to adjust the font size or weight of an element and none of the standard paragraph, heading, or body classes fits the context. Common use cases include:

- Applying a specific type scale size to an element that does not have a standard GOV.UK class.
- Making a label or hint bold without changing its size.
- Reducing the size of a number or data value inside a custom component.

---

## When not to use this style

Do not use font override classes as a general typography system. Prefer the standard `govuk-heading-*`, `govuk-body-*`, and `govuk-caption-*` classes for headings and paragraphs. Do not use size override classes to fix a heading hierarchy problem — fix the structure instead.

---

## How it works

### Font size override classes

The pattern is `govuk-!-font-size-[n]` where `n` is a point on the GOV.UK type scale.

Available values:

| Class | Size |
|---|---|
| `govuk-!-font-size-14` | 14px (responsive) |
| `govuk-!-font-size-16` | 16px (responsive) |
| `govuk-!-font-size-19` | 19px on desktop, 18px on mobile |
| `govuk-!-font-size-24` | 24px on desktop, 20px on mobile |
| `govuk-!-font-size-27` | 27px on desktop, 24px on mobile |
| `govuk-!-font-size-36` | 36px on desktop, 27px on mobile |
| `govuk-!-font-size-48` | 48px on desktop, 32px on mobile |
| `govuk-!-font-size-80` | 80px on desktop, 53px on mobile |

Size override classes are responsive in the same way as the standard type scale — they apply a smaller value on mobile and the named value on tablet and above.

### Font weight override classes

| Class | Effect |
|---|---|
| `govuk-!-font-weight-regular` | Sets `font-weight: 400` |
| `govuk-!-font-weight-bold` | Sets `font-weight: 700` |

Both classes use `!important`.

### Important note on `!important`

These classes use `!important` to guarantee they override any component-level styles. This means if you try to override them further in custom CSS without `!important`, your styles will not take effect. Use these classes with care and sparingly.

---

## Code Examples

### Overriding font size on a custom element

```html
<p class="govuk-body govuk-!-font-size-24">
  This paragraph is rendered at 24px on desktop.
</p>
```

### Making body text bold

```html
<p class="govuk-body govuk-!-font-weight-bold">
  Your reference number is 12345678. Keep this safe.
</p>
```

### Reducing font size inside a custom component

```html
<div class="my-data-card">
  <span class="govuk-!-font-size-48 govuk-!-font-weight-bold">42</span>
  <span class="govuk-!-font-size-16">applications this week</span>
</div>
```

### Applying regular weight to a heading-styled element

```html
<h2 class="govuk-heading-m govuk-!-font-weight-regular">
  This heading is not bold.
</h2>
```

### Using a large size for a numerical display

```html
<p class="govuk-!-font-size-80 govuk-!-font-weight-bold" aria-label="80 percent complete">
  80%
</p>
```

---

## Accessibility

- Font size override classes are responsive — the mobile value is always smaller. Ensure the mobile size remains legible, especially for `govuk-!-font-size-14` which renders at 14px.
- Do not use `govuk-!-font-weight-bold` to convey meaning (for example, to show an error or a selected state). Combine bold text with another visual indicator such as colour or an icon, and always provide a text alternative.
- Ensure that reduced font sizes still meet the WCAG 4.5:1 contrast ratio against their background.
- Do not use font override classes to create heading-like text that is not marked up as a heading — this deprives screen reader users of navigation landmarks.

---

## Do / Don't

**Do:**
- Use font override classes for targeted adjustments in custom components.
- Prefer standard GOV.UK paragraph and heading classes for body text and page structure.
- Combine size and weight overrides when you need both.
- Use the responsive sizes intentionally — check both mobile and desktop renders.

**Don't:**
- Use font override classes as a replacement for the standard heading and paragraph classes.
- Apply more than one override class to the same element.
- Use `govuk-!-font-weight-bold` alone to convey meaning.
- Use large sizes (`govuk-!-font-size-80`) for body text — reserve them for numerical displays and hero content.

---

## Related Components / Patterns

- [Type scale style](https://design-system.service.gov.uk/styles/type-scale/)
- [Typography – headings](https://design-system.service.gov.uk/styles/typography/)
- [Typography – paragraphs](https://design-system.service.gov.uk/styles/typography/)
- [Typeface style](https://design-system.service.gov.uk/styles/typeface/)
- [Spacing override classes](https://design-system.service.gov.uk/styles/spacing/)
