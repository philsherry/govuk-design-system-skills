---
category: styles
description: GOV.UK Frontend provides a nine-point spacing scale and override utility classes for applying margins and padding. The scale is also available as a Sass function for use inside custom stylesheets.
govuk-frontend: "5.x"
keywords:
  - "margin"
  - "padding"
  - "spacing"
  - "spacing scale"
  - "whitespace"
last-reviewed: "2026-04-03"
name: Spacing
source: "https://design-system.service.gov.uk/styles/spacing/"
---

# Spacing

> GOV.UK Frontend provides a nine-point spacing scale and override utility classes for applying margins and padding. The scale is also available as a Sass function for use inside custom stylesheets.
> Source: https://design-system.service.gov.uk/styles/spacing/

## Overview

Consistent spacing is central to the GOV.UK Design System. All spacing in GOV.UK Frontend comes from a scale of nine fixed values (points 1 through 9) plus zero. Override utility classes let you apply these values as margin or padding to any element without writing custom CSS. The same scale is available in Sass via the `govuk-spacing()` function.

At the tablet breakpoint (641px and above), the larger spacing values (6 through 9) increase automatically to give proportionally more breathing room on wider screens.

## When to use this style

Use spacing override classes when you need to adjust the default spacing on a component or piece of content — for example, to add extra margin below a heading, or to remove the default bottom margin from the last element in a container.

Use the `govuk-spacing()` Sass function when writing custom component styles that need to align to the GOV.UK spacing scale.

## When not to use this style

Do not use arbitrary pixel or rem values for spacing in custom CSS — always reference the scale. Do not use spacing override classes as a substitute for correct HTML structure or semantic markup.

## How it works

### The spacing scale

| Point | Mobile value | Tablet and above |
|---|---|---|
| 0 | 0 | 0 |
| 1 | 5px | 5px |
| 2 | 10px | 10px |
| 3 | 15px | 15px |
| 4 | 20px | 20px |
| 5 | 25px | 25px |
| 6 | 20px | 30px |
| 7 | 25px | 40px |
| 8 | 30px | 60px |
| 9 | 40px | 80px |

Points 6–9 are responsive: they use a smaller value on mobile and a larger value on tablet and above.

### Margin override classes

Apply a specific margin to one side of an element:

```text
govuk-!-margin-[direction]-[size]
```

Where `direction` is one of: `top`, `right`, `bottom`, `left`.
Where `size` is an integer from `0` to `9`.

Example: `govuk-!-margin-bottom-6`

To apply equal margin on all four sides, omit the direction:

```text
govuk-!-margin-[size]
```

### Padding override classes

Apply a specific padding to one side of an element:

```text
govuk-!-padding-[direction]-[size]
```

Example: `govuk-!-padding-top-3`

To apply equal padding on all four sides, omit the direction:

```text
govuk-!-padding-[size]
```

### Sass function

Use `govuk-spacing()` to reference a scale value inside custom Sass:

```scss
.my-component {
  margin-bottom: govuk-spacing(6);   // 20px mobile, 30px tablet+
  padding: govuk-spacing(4);         // 20px
}
```

The function accepts any integer from 0 to 9.

## Code Examples

### Adding bottom margin to a heading

```html
<h1 class="govuk-heading-xl govuk-!-margin-bottom-6">
  Page heading
</h1>
```

### Removing bottom margin from a paragraph

```html
<p class="govuk-body govuk-!-margin-bottom-0">
  This paragraph has no bottom margin.
</p>
```

### Adding top padding to a section

```html
<div class="govuk-!-padding-top-8">
  <!-- content with 30px (mobile) / 60px (tablet+) top padding -->
</div>
```

### Applying uniform margin on all sides

```html
<div class="govuk-!-margin-4">
  <!-- 20px margin on all sides -->
</div>
```

### Using the Sass function in a custom component

```scss
.my-panel {
  padding: govuk-spacing(5);
  margin-bottom: govuk-spacing(7);
}
```

### Combining override classes

```html
<p class="govuk-body govuk-!-margin-top-4 govuk-!-margin-bottom-2">
  Adjusted paragraph spacing.
</p>
```

## Accessibility

- Spacing override classes use `!important` and will override component default spacing. Use them with care — removing spacing between elements can reduce readability and affect touch target size.
- Ensure that adjusting spacing does not cause interactive elements to fall below the recommended 44×44px touch target size.
- Do not use negative spacing to overlay content in a way that hides it from screen readers.

## Do and Do not

**Do:**
- Use the spacing scale for all margin and padding values in custom CSS.
- Use override classes to make targeted, one-off spacing adjustments to existing components.
- Use `govuk-spacing(0)` to reset spacing rather than `margin: 0` written by hand.
- Consider responsive behaviour — points 6–9 differ between mobile and tablet.

**Do not:**
- Introduce arbitrary pixel values for spacing in new styles.
- Apply more than two spacing override classes to a single element to compensate for a structural problem — consider fixing the HTML instead.
- Override spacing on components in a way that breaks their internal visual logic.

## Related Components / Patterns

- [Layout style](https://design-system.service.gov.uk/styles/layout/)
- [Section break style](https://design-system.service.gov.uk/styles/section-break/)
- [Typography styles](https://design-system.service.gov.uk/styles/typography/)
- [GOV.UK Frontend Sass spacing scale source](https://github.com/alphagov/govuk-frontend)
