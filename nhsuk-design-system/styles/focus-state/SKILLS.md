---
category: styles
description: NHS focus state implementation for keyboard navigation and accessibility compliance.
keywords:
  - "focus"
  - "focus indicator"
  - "focus ring"
  - "focus state"
  - "keyboard focus"
  - "outline"
  - "state"
last-reviewed: "2026-04-03"
name: Focus State
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/styles/focus-state"
---

# Focus State

> NHS focus state implementation for keyboard navigation and accessibility compliance.
> Source: <https://service-manual.nhs.uk/design-system/styles/focus-state>

## Overview

NHS UK Frontend applies a visible focus state to all interactive elements. The focus style uses a yellow background (`#ffeb3b`) with a thick black bottom border (`#212b32`), making focused elements visible against any background. This approach meets WCAG 2.2 AA requirements for focus visibility (SC 2.4.7, 2.4.11, and 2.4.13).

The focus state works consistently across links, buttons, form inputs, and other interactive elements. NHS UK Frontend handles focus styles automatically for all standard components.

## When to use this style

Apply NHS focus styles to every interactive element in your service. If you build custom interactive components, use the NHS focus mixins or replicate the focus style so keyboard users can always see which element has focus.

## When not to use this style

Do not apply focus styles to non-interactive elements. Do not modify the focus style to reduce its visibility — the high-contrast yellow-and-black combination exists to help users with low vision, cognitive impairments, and motor difficulties.

## How it works

### Focus style for links and text elements

When a link or text-based interactive element receives focus, NHS UK Frontend applies:

- A yellow background (`#ffeb3b`)
- A `4px` black bottom border (`#212b32`)
- Black text colour (`#212b32`)
- A `4px` transparent outline (for Windows High Contrast Mode)

```css
a:focus {
  background-color: #ffeb3b;
  box-shadow: 0 -2px #ffeb3b, 0 4px #212b32;
  color: #212b32;
  outline: 4px solid transparent;
  text-decoration: none;
}
```

### Focus style for form inputs

Form inputs receive a yellow outline and a thicker border when focused:

```css
.nhsuk-input:focus {
  border-color: #212b32;
  box-shadow: inset 0 0 0 2px #212b32;
  outline: 4px solid #ffeb3b;
}
```

### Focus style for buttons

Buttons combine the text focus style with the input outline approach:

```css
.nhsuk-button:focus {
  background-color: #ffeb3b;
  border-color: #212b32;
  box-shadow: 0 4px #212b32;
  color: #212b32;
  outline: 4px solid transparent;
}
```

### How the transparent outline works

The `outline: 4px solid transparent` declaration serves Windows High Contrast Mode. In that mode, browsers ignore `background-color` and `box-shadow` but display outlines. The transparent outline becomes visible in high contrast, ensuring the focus state remains perceptible.

### Using focus mixins in custom Sass

NHS UK Frontend provides mixins for applying focus styles to custom elements:

```scss
.my-interactive-element:focus {
  @include nhsuk-focused-text;
}

.my-custom-input:focus {
  @include nhsuk-focused-form-input;
}
```

## Code Examples

### Applying focus to a custom link

```scss
.my-custom-link {
  &:focus {
    background-color: $nhsuk-focus-color;
    box-shadow: 0 -2px $nhsuk-focus-color, 0 4px $nhsuk-focus-text-color;
    color: $nhsuk-focus-text-color;
    outline: 4px solid transparent;
    text-decoration: none;
  }
}
```

### Applying focus to a custom form element

```scss
.my-custom-input:focus {
  border-color: $nhsuk-focus-text-color;
  box-shadow: inset 0 0 0 2px $nhsuk-focus-text-color;
  outline: 4px solid $nhsuk-focus-color;
}
```

## Accessibility

- The yellow-and-black focus state meets WCAG 2.2 SC 2.4.7 (Focus Visible) — focused elements are always visible.
- The focus indicator meets WCAG 2.2 SC 2.4.11 (Focus Not Obscured) — the bright yellow ensures the indicator remains visible even when other elements overlap.
- The transparent outline ensures focus remains visible in Windows High Contrast Mode, where browsers strip backgrounds and box-shadows.
- Never remove focus outlines (`outline: none`) from any interactive element.
- If you override focus styles, ensure the replacement meets 3:1 contrast against adjacent colours and has a minimum area of `2px` on the shortest side.

## Do and Do not

**Do:**

- Use NHS UK Frontend focus mixins when building custom interactive elements.
- Test focus visibility on both light and dark backgrounds.
- Keep the `outline: 4px solid transparent` declaration — it supports Windows High Contrast Mode.
- Verify focus visibility with keyboard-only navigation during testing.

**Do not:**

- Remove or reduce the visibility of focus states.
- Use `outline: none` or `outline: 0` without providing an equivalent alternative.
- Change the focus colour to something with lower contrast than the default.
- Apply focus styles to non-interactive elements — this confuses keyboard users about what they can interact with.

## Related Components / Patterns

- [Colour style](https://service-manual.nhs.uk/design-system/styles/colour)
- [Typography style](https://service-manual.nhs.uk/design-system/styles/typography)
- [Accessibility guidance](https://service-manual.nhs.uk/accessibility)
