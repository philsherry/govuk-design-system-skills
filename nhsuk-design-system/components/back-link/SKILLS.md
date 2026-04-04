---
category: components
description: A link that takes users back to the previous page in a multi-page flow.
keywords:
  - "back"
  - "back button"
  - "back link"
  - "link"
  - "navigation"
  - "previous page"
last-reviewed: "2026-04-03"
name: Back Link
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/back-link"
---

# Back Link

> A link that takes users back to the previous page in a multi-page flow.
> Source: https://service-manual.nhs.uk/design-system/components/back-link

## Overview

The back link component helps users navigate back to the previous page in a multi-step flow or transaction. It renders as a simple anchor link with a left-pointing chevron icon followed by the word "Go back", placed at the top of a page before the main content.

The component gives services explicit control over where the user returns to, which matters in multi-page forms where the browser history might not reflect the intended navigation flow. It also helps users of assistive technologies who may not have access to browser navigation controls.

The NHS back link uses the class `nhsuk-back-link` and follows the same pattern as the GOV.UK equivalent, adapted with NHS styling and the default text "Go back" rather than "Back".

## When to use this component

Use the back link on pages that form part of a multi-page transaction or question-based flow, where a well-defined previous step exists. It works well when users may need to go back and change a previous answer.

## When not to use this component

Do not use the back link on pages that have breadcrumbs — using both on the same page creates confusion about which navigation control to use.

Do not use the back link on standalone content pages or as general site navigation. Do not use it on the first page of a journey (no previous step exists to return to).

Do not use the back link as a replacement for a "Cancel" link. Cancel links belong inside the main content area near the primary action button.

## How it works

The back link renders as an `<a>` element with the class `nhsuk-back-link__link` inside a `<div class="nhsuk-back-link">`. The left-pointing chevron icon appears as an inline SVG before the link text.

The default implementation links to an explicit URL. You can also use JavaScript's `history.back()` by setting `href="#"` and attaching a click handler, but this requires careful handling to avoid breaking when JavaScript is unavailable.

## Code examples

### Default / Basic

#### HTML

```html
<div class="nhsuk-back-link">
  <a class="nhsuk-back-link__link" href="/previous-page">
    <svg class="nhsuk-icon nhsuk-icon__chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="24" width="24">
      <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"></path>
    </svg>
    Go back
  </a>
</div>
```

#### Nunjucks

```njk
{{ backLink({
  text: "Go back",
  href: "/previous-page"
}) }}
```

### With custom text

#### Nunjucks

```njk
{{ backLink({
  text: "Go back to your answers",
  href: "/check-answers"
}) }}
```

### Using history.back() with JavaScript

#### HTML

```html
<div class="nhsuk-back-link">
  <a class="nhsuk-back-link__link" href="#" onclick="history.back(); return false;">
    <svg class="nhsuk-icon nhsuk-icon__chevron-left" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="24" width="24">
      <path d="M8.5 12c0-.3.1-.5.3-.7l5-5c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.9 12l4.3 4.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-5-5c-.2-.2-.3-.4-.3-.7z"></path>
    </svg>
    Go back
  </a>
</div>
```

#### Nunjucks

```njk
{{ backLink({
  text: "Go back",
  href: "#",
  attributes: {
    onclick: "history.back(); return false;"
  }
}) }}
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| text | string | No | Text of the back link. Defaults to `"Go back"`. |
| href | string | Yes | The `href` for the back link. Use a URL or `"#"` with JavaScript. |
| classes | string | No | Classes to add to the outer `<div>` element. |
| attributes | object | No | HTML attributes to add to the anchor element as key–value pairs. |

## Accessibility

The back link uses a visible, descriptive label. All users can understand the default text "Go back", including screen reader users.

If you customise the link text, ensure the text remains meaningful out of context — screen reader users may navigate links by listing them, so "Go back to your answers" works better than vague alternatives.

The chevron icon has `aria-hidden="true"` so screen readers skip the decorative graphic and announce only the link text.

The link must remain reachable via keyboard Tab navigation. Position it near the top of the page so keyboard users encounter it soon after any skip link.

## Do and do not

**Do:**
- Place the back link above the `<main>` element, before the page heading and form content.
- Use an explicit URL wherever possible so the destination stays predictable.
- Use the default text "Go back" unless research shows users need more descriptive text.
- Test the back link in the context of the full journey to confirm it goes to the right page.

**Do not:**
- Do not use the back link on the same page as breadcrumbs.
- Do not use it as a "Cancel" link — cancel belongs near the submit button.
- Do not place it inside the `<main>` element.
- Do not omit it from pages mid-journey where users may want to review or change earlier answers.

## Related components and patterns

- [Breadcrumbs](https://service-manual.nhs.uk/design-system/components/breadcrumbs) — for hierarchical site navigation (not for transactional journeys).
- [Action link](https://service-manual.nhs.uk/design-system/components/action-link) — for prominent links that direct users to take action on another page.
- [Button](https://service-manual.nhs.uk/design-system/components/buttons) — for the primary form submission action.
