---
category: styles
description: GOV.UK Frontend provides a responsive typographic scale with fixed size classes for body text and headings. Sizes increase at the tablet breakpoint. The scale is also available as a Sass mixin for use in custom components.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Type Scale
---

# Type Scale

> GOV.UK Frontend provides a responsive typographic scale with fixed size classes for body text and headings. Sizes increase at the tablet breakpoint. The scale is also available as a Sass mixin for use in custom components.
> Source: https://design-system.service.gov.uk/styles/type-scale/

---

## Overview

The GOV.UK type scale defines the full range of text sizes used across the design system. Each size has a CSS class you can apply directly to elements. All sizes in the scale are responsive: mobile uses smaller values, and the tablet breakpoint (641px and above) uses larger values.

The scale covers body sizes and heading sizes. Body sizes work for paragraph text, labels, hints, and similar content. Heading sizes work for page and section headings.

---

## When to use this style

Use the type scale classes when you need text at a specific size that does not correspond to a standard paragraph or heading element — for example, captions, metadata, or custom components. Use the Sass mixin when writing custom component styles.

---

## When not to use this style

Do not use type scale classes to make a heading look smaller or larger to compensate for poor heading hierarchy. Fix the heading structure instead. Do not use arbitrary font sizes outside the scale.

---

## How it works

### Body sizes

| Class | Mobile | Tablet and above |
|---|---|---|
| `govuk-body-xs` | 14px / 1.14 line height | 14px / 1.14 line height |
| `govuk-body-s` | 16px / 1.25 line height | 16px / 1.25 line height |
| `govuk-body` | 18px / 1.5 line height | 19px / 1.5 line height |
| `govuk-body-l` | 20px / 1.25 line height | 24px / 1.25 line height |

`govuk-body` is the default paragraph size and works for most body text.

### Heading sizes

| Class | Mobile | Tablet and above |
|---|---|---|
| `govuk-heading-s` | 18px / 1.11 line height | 19px / 1.05 line height |
| `govuk-heading-m` | 20px / 1.25 line height | 24px / 1.04 line height |
| `govuk-heading-l` | 24px / 1.04 line height | 36px / 1.11 line height |
| `govuk-heading-xl` | 32px / 1.09 line height | 48px / 1.04 line height |

All heading classes are bold weight. They use the GOV.UK heading colour, which defaults to `#0b0c0c`.

### Sass mixin: govuk-font

Use the `govuk-font` mixin to apply a size from the type scale in custom Sass. The mixin sets `font-family`, `font-size`, `line-height`, and the responsive font size at the tablet breakpoint automatically.

```scss
@include govuk-font($size: 19);
```

Parameters:

| Parameter | Required | Description |
|---|---|---|
| `$size` | Yes | A point from the type scale: 14, 16, 19, 24, 27, 36, 48, or 80 |
| `$weight` | No | `regular` (default) or `bold` |
| `$line-height` | No | Override the default line height |
| `$tabular` | No | `true` to use tabular numerals |

### Sass mixin: govuk-font-size

Use `govuk-font-size` when you need only the size and line height without the font-family reset:

```scss
@include govuk-font-size($size: 24);
```

### Available Sass size values

The scale points available to the Sass mixins are: `14`, `16`, `19`, `24`, `27`, `36`, `48`, `80`.

---

## Code Examples

### Body text at different sizes

```html
<p class="govuk-body-l">Large body text — 24px on desktop.</p>
<p class="govuk-body">Standard body text — 19px on desktop.</p>
<p class="govuk-body-s">Small body text — 16px.</p>
<p class="govuk-body-xs">Extra small body text — 14px.</p>
```

### Headings at each size

```html
<h1 class="govuk-heading-xl">Extra large heading — 48px on desktop</h1>
<h2 class="govuk-heading-l">Large heading — 36px on desktop</h2>
<h3 class="govuk-heading-m">Medium heading — 24px on desktop</h3>
<h4 class="govuk-heading-s">Small heading — 19px on desktop</h4>
```

### Using the govuk-font mixin in custom Sass

```scss
.my-caption {
  @include govuk-font($size: 16, $weight: regular);
  color: $govuk-secondary-text-colour;
}

.my-large-label {
  @include govuk-font($size: 24, $weight: bold);
}
```

### Using govuk-font-size for size only

```scss
.my-component__number {
  @include govuk-font-size($size: 48);
  font-weight: 700;
}
```

---

## Accessibility

- Do not set font sizes in absolute units (px) in custom CSS — use the Sass mixin so sizes remain responsive.
- Users who increase their browser default font size or apply a custom stylesheet must be able to scale text up to 200% without loss of content or functionality.
- Avoid using `govuk-body-xs` (14px) for large blocks of running text — small text is harder to read, especially for users with low vision.
- The type scale sets line height to aid readability. Do not reduce it.

---

## Do / Don't

**Do:**
- Use `govuk-body` for most body text.
- Use `govuk-body-l` for lead paragraphs or introductory sentences at the top of a page.
- Use `govuk-body-s` for supporting or secondary information such as hints.
- Use the `govuk-font` Sass mixin when writing custom components that must align to the scale.

**Don't:**
- Use type scale classes to visually style a heading at a different size to work around a heading hierarchy problem.
- Mix arbitrary font sizes with scale classes in the same component.
- Override `font-size` with inline styles.
- Use `govuk-body-xs` for body content — reserve it for metadata, captions, or labels where space is tight.

---

## Related Components / Patterns

- [Typeface style](https://design-system.service.gov.uk/styles/typeface/)
- [Typography – headings](https://design-system.service.gov.uk/styles/typography/)
- [Typography – paragraphs](https://design-system.service.gov.uk/styles/typography/)
- [Font override classes](https://design-system.service.gov.uk/styles/font-override-classes/)
- [Spacing style](https://design-system.service.gov.uk/styles/spacing/)
