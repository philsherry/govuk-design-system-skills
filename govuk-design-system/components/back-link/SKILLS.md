---
category: components
description: A link that takes users back to the previous page in a multi-page transaction.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Back Link
---

# Back Link

> A link that takes users back to the previous page in a multi-page transaction.
> Source: https://design-system.service.gov.uk/components/back-link/
---

## Overview

The back link component helps users navigate back to the previous page in a multi-step transaction or journey. It renders as a simple anchor link styled to look like a back arrow followed by the word "Back", placed at the top of a page before the main content.

The component is distinct from the browser's native back button. It gives services explicit control over where the user returns to, which is important in multi-page forms where the browser history might not reflect the intended navigation flow. It also helps users of assistive technologies who may not have access to browser navigation controls.

When used as intended, the back link reinforces the linear flow of a transaction and reduces disorientation. It should appear only on pages that are part of a well-defined journey.

## When to use this component

Use the back link on pages that are part of a multi-page transaction or question-based flow, where there is a well-defined previous step. It works well when users may need to go back and change a previous answer.

## When not to use this component

Do not use the back link on pages that have breadcrumbs — using both on the same page creates confusion about which navigation control to use.

Do not use the back link on standalone pages or as general site navigation. Do not use it on the first page of a journey (there is no previous step to return to).

Do not use the back link as a replacement for a "Cancel" link. Cancel links belong inside the main content area near the primary action button.

## How it works

The back link is an `<a>` element with the class `govuk-back-link`. Place it above the `<main>` element, inside the outer page container but before the skip link target.

The simplest implementation links to an explicit URL. You can also use JavaScript's `history.back()` by setting `href="#"` and attaching a click handler, but this requires careful handling to avoid breaking when JavaScript is unavailable. The GOV.UK Frontend JavaScript does not automatically wire up `history.back()` — you must add this yourself if needed.

The component does not require JavaScript to function; it works as a standard link to a previous URL.

## Code Examples

### Default / Basic

#### HTML

```html
<a href="/previous-page" class="govuk-back-link">Back</a>
```

#### Nunjucks

```njk
{{ govukBackLink({
  text: "Back",
  href: "/previous-page"
}) }}
```

### With custom text

#### Nunjucks

```njk
{{ govukBackLink({
  text: "Back to task list",
  href: "/task-list"
}) }}
```

### Using history.back() with JavaScript

#### HTML

```html
<a href="#" class="govuk-back-link" onclick="history.back(); return false;">Back</a>
```

#### Nunjucks

```njk
{{ govukBackLink({
  text: "Back",
  href: "#",
  attributes: {
    onclick: "history.back(); return false;"
  }
}) }}
```

### With extra classes

#### Nunjucks

```njk
{{ govukBackLink({
  text: "Back",
  href: "/previous-step",
  classes: "custom-back-link"
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| text | string | No | Text of the back link. Defaults to `"Back"`. |
| html | string | No | HTML to use as the link label. When set, the component ignores `text`. |
| href | string | Yes | The `href` for the back link. Use a URL or `"#"` with JavaScript. |
| classes | string | No | Classes to add to the anchor element. |
| attributes | object | No | HTML attributes to add to the anchor element as key–value pairs. |

## Error Messages

The back link does not accept user input and does not produce validation error messages.

## Accessibility

The back link uses a visible, descriptive label. All users can understand the default text "Back", including those using screen readers.

If you customise the link text, ensure the text remains meaningful out of context — screen reader users may navigate links by listing them, so "Back to your answers" is preferable to vague alternatives.

The link must be reachable via keyboard Tab navigation. Position it near the top of the page so keyboard users encounter it soon after any skip link.

If using `history.back()` via JavaScript, ensure the link still functions (or the page still makes sense) when JavaScript is unavailable.

## Do / Don't

**Do:**
- Place the back link above the `<main>` element, before the page heading and form content.
- Use an explicit URL wherever possible so the destination is predictable.
- Use the default text "Back" unless research shows users need more descriptive text.
- Test the back link in the context of the full journey to confirm it goes to the right page.

**Don't:**
- Don't use the back link on the same page as breadcrumbs.
- Don't use it as a "Cancel" link — cancel belongs near the submit button.
- Don't place it inside the `<main>` element.
- Don't omit it from pages mid-journey where users may want to review or change earlier answers.

## Related Components / Patterns

- [Breadcrumbs](https://design-system.service.gov.uk/components/breadcrumbs/) — for hierarchical site navigation (not for transactional journeys).
- [Button](https://design-system.service.gov.uk/components/button/) — for the primary form submission action.
- [Check your answers pattern](https://design-system.service.gov.uk/patterns/check-answers/) — the pattern where back links are most commonly used alongside a summary before submission.
