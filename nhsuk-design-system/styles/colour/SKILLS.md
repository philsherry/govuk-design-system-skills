---
category: styles
description: The NHS colour palette and guidance on applying colours consistently and accessibly in NHS services.
keywords:
  - "brand colours"
  - "color"
  - "colour"
  - "hex values"
  - "palette"
last-reviewed: "2026-04-03"
name: Colour
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/styles/colour"
---

# Colour

> The NHS colour palette and guidance on applying colours consistently and accessibly in NHS services.
> Source: <https://service-manual.nhs.uk/design-system/styles/colour>

## Overview

NHS UK Frontend provides a defined set of colours for text, links, backgrounds, borders, focus states, and status indicators. Using these colours ensures visual consistency across NHS services and guarantees that contrast ratios meet WCAG 2.2 AA requirements when used as directed.

Colours are available as Sass variables (e.g. `$color_nhsuk-blue`) and as part of the NHS identity system. The palette reinforces the NHS brand and builds trust with users.

## When to use this style

Always use the NHS colour palette when building NHS digital services. Do not introduce new brand colours or substitute similar colours from other design systems. When you need to communicate status, error, success, or warning, use the designated colours for those purposes.

## When not to use this style

Do not use colour alone to convey information — always pair colour with text, icons, or another non-colour indicator. Do not apply NHS blue (`#005eb8`) to decorative elements that are not interactive — this can cause users to expect interactive behaviour.

## How it works

### Primary colours

| Colour name | Hex | Usage |
|---|---|---|
| NHS blue | `#005eb8` | Links, buttons, the NHS logo, and primary interactive elements |
| NHS dark blue | `#003087` | Visited links |
| NHS bright blue | `#0072ce` | Hover state for links |
| White | `#ffffff` | Page backgrounds, text on dark backgrounds |
| NHS black | `#212b32` | Primary body text |

### Secondary colours

| Colour name | Hex | Usage |
|---|---|---|
| NHS pale grey | `#d8dde0` | Borders and dividers |
| NHS grey 1 | `#4c6272` | Secondary text |
| NHS grey 2 | `#768692` | Tertiary text, captions |
| NHS grey 3 | `#aeb7bd` | Borders |
| NHS grey 4 | `#d8dde0` | Backgrounds of grouped content |
| NHS grey 5 | `#f0f4f5` | Page background, card backgrounds |

### Signalling colours

| Colour name | Hex | Usage |
|---|---|---|
| NHS green | `#007f3b` | Success messages, confirmation panels |
| NHS red | `#d5281b` | Error messages, destructive actions |
| NHS warm yellow | `#ffeb3b` | Focus state background |
| NHS orange | `#ed8b00` | Non-urgent care cards |
| NHS purple | `#330072` | Urgent care cards |
| NHS dark red | `#8a1538` | Emergency care cards |

### Link colours

| State | Hex |
|---|---|
| Default link | `#005eb8` (NHS blue) |
| Visited link | `#330072` (NHS purple) |
| Hover link | `#7C2855` |
| Active link | `#002f5c` |
| Focus link | `#212b32` text on `#ffeb3b` background |

### Focus colours

| Purpose | Hex |
|---|---|
| Focus background | `#ffeb3b` (NHS warm yellow) |
| Focus text | `#212b32` (NHS black) |
| Focus bottom border | `#212b32` |

The focus state applies a yellow background (`#ffeb3b`) and a thick black bottom border. This combination meets WCAG 2.2 AA contrast requirements.

### Using Sass variables

```scss
.my-component {
  color: $color_nhsuk-black;
  background-color: $color_nhsuk-grey-5;
  border-color: $color_nhsuk-grey-3;
}

.my-error-message {
  color: $color_nhsuk-red;
  border-left-color: $color_nhsuk-red;
}

.my-link {
  color: $color_nhsuk-blue;

  &:hover {
    color: $nhsuk-link-hover-color;
  }

  &:visited {
    color: $nhsuk-link-visited-color;
  }
}
```

## Code Examples

### Applying error colour to a custom element

```scss
.my-error-summary {
  border: 4px solid $color_nhsuk-red;
  color: $color_nhsuk-red;
}
```

### Applying the focus style manually

```scss
.my-interactive-element:focus {
  background-color: $nhsuk-focus-color;
  box-shadow: 0 -2px $nhsuk-focus-color, 0 4px $nhsuk-focus-text-color;
  color: $nhsuk-focus-text-color;
  outline: 4px solid transparent;
}
```

### Using NHS colours for care card variants

```scss
.my-urgent-care-card {
  border-color: $color_nhsuk-purple;
}

.my-emergency-care-card {
  border-color: $color_nhsuk-dark-red;
}
```

## Accessibility

- The NHS design system checks all colour combinations against WCAG 2.2 AA (4.5:1 contrast for normal text, 3:1 for large text and UI components).
- Never use colour as the only means of conveying information — always supplement with text, icons, patterns, or other non-colour cues.
- The yellow focus state (`#ffeb3b`) is high-visibility by design. Do not suppress or remove it — doing so breaks keyboard accessibility.
- Always pair error red (`#d5281b`) with an error message in text. Do not rely on red borders alone to show errors.
- Check custom colour combinations for contrast using a contrast checker.

## Do and Do not

**Do:**

- Use NHS colour variables for all text in custom components.
- Use `$color_nhsuk-red` only for error states and destructive actions.
- Use the designated link colour variables for all link states.
- Supplement colour indicators with text explanations.
- Test any new colour combination for WCAG AA contrast compliance.

**Do not:**

- Introduce new colours not in the NHS palette without strong, tested justification.
- Use NHS blue (`#005eb8`) on non-interactive decorative elements.
- Override the yellow focus state.
- Use `$color_nhsuk-red` for decorative highlights or warnings that are not errors.
- Rely on colour alone to distinguish interactive from non-interactive elements.

## Related Components / Patterns

- [Focus state style](https://service-manual.nhs.uk/design-system/styles/focus-state)
- [Typography style](https://service-manual.nhs.uk/design-system/styles/typography)
- [Error message component](https://service-manual.nhs.uk/design-system/components/error-message)
- [Error summary component](https://service-manual.nhs.uk/design-system/components/error-summary)
- [Tag component](https://service-manual.nhs.uk/design-system/components/tag)
- [Warning callout component](https://service-manual.nhs.uk/design-system/components/warning-callout)
