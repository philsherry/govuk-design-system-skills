---
category: styles
description: NHS icon set for use in navigation, action links, and informational content.
keywords:
  - "SVG icons"
  - "arrow"
  - "chevron"
  - "icon set"
  - "icons"
last-reviewed: "2026-04-03"
name: Icons
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/styles/icons"
---

# Icons

> NHS icon set for use in navigation, action links, and informational content.
> Source: <https://service-manual.nhs.uk/design-system/styles/icons>

## Overview

NHS UK Frontend provides a set of SVG icons for use in components and custom interfaces. Icons support navigation, actions, and informational content. All icons render as inline SVGs to ensure consistent scaling, colour inheritance, and accessibility.

Icons supplement text — they do not replace it. Every icon must appear alongside a text label unless the icon duplicates text that appears in the same context.

## When to use this style

Use NHS icons when they add clarity to an action or navigation element. The action link component, breadcrumbs, and pagination components use icons to reinforce their purpose. Use icons to support text labels, not to replace them.

## When not to use this style

Do not use icons as the sole means of communicating meaning. Do not use icons decoratively where they add no information. Do not use custom icon sets when NHS UK Frontend provides an equivalent icon.

## How it works

### Available icons

NHS UK Frontend includes icons for:

- **Arrow right** — action links, call-to-action elements
- **Arrow left** — back links, previous page navigation
- **Arrow right circle** — navigation items
- **Chevron right** — breadcrumb separators, list items
- **Chevron left** — back navigation
- **Close** — closing panels, dismissing content
- **Cross** — Don't list items, error states
- **Tick** — Do list items, success states
- **Plus** — expanding content
- **Minus** — collapsing content
- **Search** — search inputs
- **Emdash** — separators

### Using icons as inline SVG

Embed icons as inline SVG in your HTML. NHS UK Frontend components do this automatically through Nunjucks macros. For custom usage:

```html
<svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="27" height="27">
  <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
</svg>
```

### Icon sizing

Icons default to 24px by 24px. Some components use larger sizes (27px or 36px). Always set explicit `width` and `height` attributes on the SVG element.

### Icon colour

Icons inherit the text colour of their parent element through `fill: currentColor`. Do not set a fill colour directly on the SVG unless you need to override the inherited colour for a specific purpose.

```scss
.nhsuk-icon {
  fill: currentColor;
}
```

## Code Examples

### Action link with icon

```html
<div class="nhsuk-action-link">
  <a class="nhsuk-action-link__link" href="/find-a-service">
    <svg class="nhsuk-icon nhsuk-icon__arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="36" height="36">
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
    </svg>
    <span class="nhsuk-action-link__text">Find a pharmacy</span>
  </a>
</div>
```

### Do and Don't list icons

```html
<!-- Do list tick -->
<svg class="nhsuk-icon nhsuk-icon__tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" width="34" height="34">
  <path stroke-width="4" stroke-linecap="round" d="M18.4 7.8l-8.5 8.4L5.6 12" stroke="#007f3b"></path>
</svg>

<!-- Don't list cross -->
<svg class="nhsuk-icon nhsuk-icon__cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="34" height="34">
  <path d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z" fill="#d5281b"></path>
  <path d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z" fill="#d5281b"></path>
</svg>
```

## Accessibility

- Add `aria-hidden="true"` to decorative icons that duplicate adjacent text. This prevents screen readers from announcing the icon.
- When an icon conveys meaning not present in surrounding text, add a visually hidden text label alongside the icon.
- Set explicit `width` and `height` attributes on SVG elements to prevent layout shift.
- Do not use icon fonts — use inline SVGs for better accessibility and rendering control.
- Inline SVGs work in Windows High Contrast Mode because they use `currentColor` for fill values.

## Do and Do not

**Do:**

- Use inline SVG for all icons.
- Add `aria-hidden="true"` to decorative icons.
- Pair icons with visible text labels.
- Use `fill: currentColor` so icons match the text colour.
- Set explicit `width` and `height` on all SVG elements.

**Do not:**

- Use icons without text labels as the sole way to convey meaning.
- Use icon fonts — they fail in high contrast mode and create accessibility barriers.
- Set fixed fill colours on icons that should inherit their parent's text colour.
- Introduce custom icons when NHS UK Frontend provides an equivalent.
- Use icons purely for decoration.

## Related Components / Patterns

- [Action link component](https://service-manual.nhs.uk/design-system/components/action-link)
- [Do and Don't list component](https://service-manual.nhs.uk/design-system/components/do-and-dont-list)
- [Back link component](https://service-manual.nhs.uk/design-system/components/back-link)
- [Breadcrumbs component](https://service-manual.nhs.uk/design-system/components/breadcrumbs)
- [Pagination component](https://service-manual.nhs.uk/design-system/components/pagination)
