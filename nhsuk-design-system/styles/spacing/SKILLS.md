---
category: styles
description: NHS UK Frontend provides a spacing scale and override utility classes for applying margins and padding consistently.
keywords:
  - "margin"
  - "padding"
  - "spacing"
  - "spacing scale"
  - "whitespace"
last-reviewed: "2026-04-03"
name: Spacing
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/styles/spacing"
---

# Spacing

> NHS UK Frontend provides a spacing scale and override utility classes for applying margins and padding consistently.
> Source: <https://service-manual.nhs.uk/design-system/styles/spacing>

## Overview

Consistent spacing underpins the NHS Design System. All spacing in NHS UK Frontend comes from a defined scale. Override utility classes let you apply these values as margin or padding to any element without writing custom CSS.

At wider breakpoints, larger spacing values increase automatically to give proportionally more breathing room on wider screens.

## When to use this style

Use spacing override classes when you need to adjust the default spacing on a component or piece of content — for example, to add extra margin below a heading, or to remove the default bottom margin from the last element in a container.

## When not to use this style

Do not use arbitrary pixel or rem values for spacing in custom CSS — always reference the scale. Do not use spacing override classes as a substitute for correct HTML structure or semantic markup.

## How it works

### The spacing scale

| Point | Mobile value | Tablet and above |
|---|---|---|
| 0 | 0 | 0 |
| 1 | 4px | 4px |
| 2 | 8px | 8px |
| 3 | 16px | 16px |
| 4 | 24px | 24px |
| 5 | 32px | 32px |
| 6 | 24px | 40px |
| 7 | 32px | 48px |
| 8 | 40px | 64px |
| 9 | 48px | 80px |

Points 6 to 9 are responsive: they use a smaller value on mobile and a larger value on wider screens.

### Margin override classes

Apply a specific margin to one side of an element:

```text
nhsuk-u-margin-[direction]-[size]
```

Where `direction` is one of: `top`, `right`, `bottom`, `left`.
Where `size` is an integer from `0` to `9`.

Example: `nhsuk-u-margin-bottom-6`

To apply equal margin on all four sides, omit the direction:

```text
nhsuk-u-margin-[size]
```

### Padding override classes

Apply a specific padding to one side of an element:

```text
nhsuk-u-padding-[direction]-[size]
```

Example: `nhsuk-u-padding-top-3`

To apply equal padding on all four sides, omit the direction:

```text
nhsuk-u-padding-[size]
```

## Code Examples

### Adding bottom margin to a heading

```html
<h1 class="nhsuk-heading-xl nhsuk-u-margin-bottom-6">
  Page heading
</h1>
```

### Removing bottom margin from a paragraph

```html
<p class="nhsuk-body nhsuk-u-margin-bottom-0">
  This paragraph has no bottom margin.
</p>
```

### Adding top padding to a section

```html
<div class="nhsuk-u-padding-top-8">
  <!-- content with responsive top padding -->
</div>
```

### Combining override classes

```html
<p class="nhsuk-body nhsuk-u-margin-top-4 nhsuk-u-margin-bottom-2">
  Adjusted paragraph spacing.
</p>
```

## Accessibility

- Spacing override classes use `!important` and override component default spacing. Use them with care — removing spacing between elements can reduce readability and affect touch target size.
- Ensure that adjusting spacing does not cause interactive elements to fall below the recommended 24x24px minimum target size (WCAG 2.2 SC 2.5.8).
- Do not use negative spacing to overlay content in a way that hides it from screen readers.

## Do and Do not

**Do:**

- Use the spacing scale for all margin and padding values in custom CSS.
- Use override classes to make targeted, one-off spacing adjustments to existing components.
- Consider responsive behaviour — points 6 to 9 differ between mobile and wider screens.

**Do not:**

- Introduce arbitrary pixel values for spacing in new styles.
- Apply more than two spacing override classes to a single element to compensate for a structural problem — consider fixing the HTML instead.
- Override spacing on components in a way that breaks their internal visual logic.

## Related Components / Patterns

- [Layout style](https://service-manual.nhs.uk/design-system/styles/layout)
- [Typography style](https://service-manual.nhs.uk/design-system/styles/typography)
- [NHS UK Frontend on GitHub](https://github.com/nhsuk/nhsuk-frontend)
