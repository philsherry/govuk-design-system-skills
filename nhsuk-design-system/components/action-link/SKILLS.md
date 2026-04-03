---
category: components
description: A prominent link with an arrow icon that directs users to take action on another page.
keywords:
  - "action"
  - "action link"
  - "arrow link"
  - "call to action"
  - "link"
  - "service link"
last-reviewed: "2026-04-03"
name: Action Link
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/action-link"
---

# Action Link

> A prominent link with an arrow icon that directs users to take action on another page.
> Source: https://service-manual.nhs.uk/design-system/components/action-link

## Overview

The action link component displays a green arrow icon alongside link text, drawing attention to an important action a user should take. The arrow icon visually separates action links from standard inline links, making them stand out on the page.

Action links work well for directing users to another service or page where they can complete an action — such as finding a GP, booking an appointment, or accessing an external resource. They sit within the main body content rather than in navigation areas.

The component renders as a `<div>` with the class `nhsuk-action-link` containing an anchor element with the class `nhsuk-action-link__link`. The green arrow SVG icon sits inside the link alongside a `<span>` with class `nhsuk-action-link__text`.

## When to use this component

Use the action link to direct users to a service or task on another page. It works well for calls to action within health content pages — for example, "Find a pharmacy" or "Book a GP appointment".

Use the action link when the destination helps users take the next step in their health journey.

## When not to use this component

Do not use action links for navigation that belongs in a header, footer, or breadcrumb trail.

Do not use action links as a replacement for buttons. Buttons submit forms and trigger actions on the current page; action links navigate to a different page.

Do not use action links for non-essential or secondary links. Standard inline links suit those cases better.

## How it works

The action link renders a `<div class="nhsuk-action-link">` containing a link with a green arrow SVG icon. The link text appears in a `<span class="nhsuk-action-link__text">` to allow separate styling from the icon.

The arrow icon uses an inline SVG with `aria-hidden="true"` so screen readers skip the decorative graphic and announce only the link text.

## Code Examples

### Default / Basic

#### HTML

```html
<div class="nhsuk-action-link">
  <a class="nhsuk-action-link__link" href="https://www.nhs.uk/service-search/find-a-gp">
    <svg class="nhsuk-icon nhsuk-icon__arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="36" height="36">
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
    </svg>
    <span class="nhsuk-action-link__text">Find a GP</span>
  </a>
</div>
```

#### Nunjucks

```njk
{{ actionLink({
  text: "Find a GP",
  href: "https://www.nhs.uk/service-search/find-a-gp"
}) }}
```

### With a new window link

#### HTML

```html
<div class="nhsuk-action-link">
  <a class="nhsuk-action-link__link" href="https://111.nhs.uk/" rel="noopener noreferrer" target="_blank">
    <svg class="nhsuk-icon nhsuk-icon__arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="36" height="36">
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
    </svg>
    <span class="nhsuk-action-link__text">Go to 111 online (opens in a new window)</span>
  </a>
</div>
```

#### Nunjucks

```njk
{{ actionLink({
  text: "Go to 111 online (opens in a new window)",
  href: "https://111.nhs.uk/",
  openInNewWindow: true
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| text | string | Yes | Text for the action link. |
| href | string | Yes | URL the action link points to. |
| openInNewWindow | boolean | No | When `true`, adds `target="_blank"` and `rel="noopener noreferrer"` to the link. |
| classes | string | No | Classes to add to the outer `<div>` element. |
| attributes | object | No | HTML attributes to add to the anchor element as key–value pairs. |

## Accessibility

The arrow icon SVG has `aria-hidden="true"` so screen readers announce only the link text. The link text must describe the destination or action so users understand where the link leads.

When a link opens in a new window, include "(opens in a new window)" in the link text so all users know what to expect.

Ensure the link text makes sense out of context — screen reader users may navigate by listing all links on a page.

## Do and Do not

**Do:**
- Use action links to direct users to a task or service on another page.
- Write link text that describes the destination or action.
- Include "(opens in a new window)" in the text when using `openInNewWindow`.
- Place action links within the main body content, near related information.

**Do not:**
- Do not use action links as a replacement for buttons.
- Do not use action links for standard navigation — use breadcrumbs or the header instead.
- Do not stack more than two action links together — the visual weight becomes excessive.
- Do not use vague link text like "Click here" or "More info".

## Related Components / Patterns

- [Button](https://service-manual.nhs.uk/design-system/components/buttons) — for submitting forms and triggering actions on the current page.
- [Card](https://service-manual.nhs.uk/design-system/components/card) — for presenting linked content as a navigable block.
- [Back link](https://service-manual.nhs.uk/design-system/components/back-link) — for navigating back within a linear flow.
