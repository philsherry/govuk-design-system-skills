---
category: styles
description: The GOV.UK colour palette and guidance on applying colours consistently and accessibly in GOV.UK services.
govuk-frontend: "5.x"
keywords:
  - "brand colours"
  - "color"
  - "colour"
  - "hex values"
  - "palette"
last-reviewed: "2026-04-03"
name: Colour
source: "https://design-system.service.gov.uk/styles/colour/"
---

# Colour

> The GOV.UK colour palette and guidance on applying colours consistently and accessibly in GOV.UK services.
> Source: <https://design-system.service.gov.uk/styles/colour/>

## Overview

GOV.UK Frontend provides a defined set of colours for text, links, backgrounds, borders, focus states, and status indicators. Using these colours ensures visual consistency across services and guarantees that contrast ratios meet WCAG 2.1 AA requirements when used as directed.

Colours are available as Sass variables (e.g. `$govuk-text-colour`), as CSS custom properties (e.g. `var(--govuk-colour-black)`), and as a Sass function (`govuk-colour()`).

## When to use this style

Always use the GOV.UK colour palette when building services on the `gov.uk` domain. Do not introduce new brand colours or substitute similar colours from other design systems. When you need to communicate status, error, success, or warning, use the designated colours for those purposes.

## When not to use this style

Do not use colour alone to convey information — always pair colour with text, icons, or another non-colour indicator. Do not apply brand blue (`#1d70b8`) to decorative elements that are not interactive — this can cause users to expect interactive behaviour.

## How it works

### Core text and background colours

| Purpose         | Hex                                 | Sass variable                  |
| --------------- | ----------------------------------- | ------------------------------ |
| Primary text    | `#0b0c0c`                           | `$govuk-text-colour`           |
| Secondary text  | `#505a5f`                           | `$govuk-secondary-text-colour` |
| Page background | `#f3f2f1` (light grey) or `#ffffff` | —                              |
| Canvas (white)  | `#ffffff`                           | —                              |

### Link colours

| State        | Hex       | Sass variable                |
| ------------ | --------- | ---------------------------- |
| Default link | `#1d70b8` | `$govuk-link-colour`         |
| Visited link | `#4c2c92` | `$govuk-link-visited-colour` |
| Hover link   | `#003078` | `$govuk-link-hover-colour`   |
| Active link  | `#0b0c0c` | `$govuk-link-active-colour`  |

### Focus colour

| Purpose          | Hex             | Sass variable              |
| ---------------- | --------------- | -------------------------- |
| Focus background | `#fd0` (yellow) | `$govuk-focus-colour`      |
| Focus text       | `#0b0c0c`       | `$govuk-focus-text-colour` |

The focus state applies a yellow background and a black `3px` outline. This combination meets WCAG 2.1 AA contrast requirements.

### Status colours

| Purpose             | Hex             | Sass variable           |
| ------------------- | --------------- | ----------------------- |
| Error / destructive | `#d4351c`       | `$govuk-error-colour`   |
| Success             | `#00703c`       | `$govuk-success-colour` |
| Warning / caution   | `#fd0` (yellow) | —                       |
| Brand blue          | `#1d70b8`       | `$govuk-brand-colour`   |

### Border colour

| Purpose        | Hex       | Sass variable                |
| -------------- | --------- | ---------------------------- |
| Input border   | `#0b0c0c` | `$govuk-input-border-colour` |
| General border | `#b1b4b6` | `$govuk-border-colour`       |

### Using the Sass colour function

Use `govuk-colour()` to reference any named colour from the GOV.UK palette in custom Sass:

```scss
.my-component {
  color: govuk-colour("black");          // #0b0c0c
  background-color: govuk-colour("yellow"); // #fd0
  border-color: govuk-colour("mid-grey");   // #b1b4b6
}
```

Named colours in the GOV.UK palette include: `black`, `dark-grey`, `mid-grey`, `light-grey`, `white`, `red`, `yellow`, `green`, `blue`, `light-blue`, `purple`, `dark-blue`, `turquoise`, `pink`, `orange`, `brown`.

### Using Sass variables directly

```scss
.my-error-message {
  color: $govuk-error-colour;
  border-left-color: $govuk-error-colour;
}

.my-link {
  color: $govuk-link-colour;

  &:hover {
    color: $govuk-link-hover-colour;
  }

  &:visited {
    color: $govuk-link-visited-colour;
  }
}
```

### CSS custom properties

GOV.UK Frontend v5 exposes colours as CSS custom properties on the `:root` element. You can reference these in vanilla CSS or override them for theming:

```css
.my-component {
  color: var(--govuk-colour-black);
  background-color: var(--govuk-colour-light-grey);
}
```

## Code examples

### Applying error colour to a custom element

```scss
.my-error-summary {
  border: 5px solid $govuk-error-colour;
  color: $govuk-error-colour;
}
```

### Applying the focus style manually

The focus mixin handles the full focus state consistently:

```scss
.my-interactive-element:focus {
  @include govuk-focused-text;
}
```

### Using a named colour for a background

```scss
.my-notification-banner {
  background-color: govuk-colour("light-blue");
  color: govuk-colour("black");
}
```

### Overriding a CSS custom property for theming

```css
:root {
  --govuk-colour-blue: #003078;
}
```

## Accessibility

- The design system checks all GOV.UK colour combinations against WCAG 2.1 AA (4.5:1 contrast for normal text, 3:1 for large text and UI components).
- Never use colour as the only means of conveying information — always supplement with text, icons, patterns, or other non-colour cues.
- The yellow focus state (`#fd0`) is high-visibility by design. Do not suppress or remove it — doing so breaks keyboard accessibility.
- Always pair error red (`#d4351c`) with an error message in text. Do not rely on red borders alone to show errors.
- Check custom colour combinations introduced in service-specific styles for contrast using a contrast checker.

## Do and do not

**Do:**

- Use `$govuk-text-colour` and `$govuk-secondary-text-colour` for all text in custom components.
- Use `$govuk-error-colour` only for error states.
- Use `$govuk-link-colour`, `$govuk-link-visited-colour`, and `$govuk-link-hover-colour` for all link states.
- Supplement colour indicators with text explanations.
- Test any new colour combination for WCAG AA contrast compliance.

**Do not:**

- Introduce new colours not in the GOV.UK palette without a strong, tested justification.
- Use brand blue (`#1d70b8`) on non-interactive decorative elements.
- Override the yellow focus state.
- Use `$govuk-error-colour` for decorative highlights or warnings that are not errors.
- Rely on colour alone to distinguish interactive from non-interactive elements.

## Related components and patterns

- [Links style](https://design-system.service.gov.uk/styles/typography/)
- [Error message component](https://design-system.service.gov.uk/components/error-message/)
- [Error summary component](https://design-system.service.gov.uk/components/error-summary/)
- [Tag component](https://design-system.service.gov.uk/components/tag/)
- [Notification banner component](https://design-system.service.gov.uk/components/notification-banner/)
- [Warning text component](https://design-system.service.gov.uk/components/warning-text/)
