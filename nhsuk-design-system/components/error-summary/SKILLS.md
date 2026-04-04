---
category: components
description: A component that summarises all validation errors on a page and links users to each affected field.
keywords:
  - "error"
  - "error list"
  - "error summary"
  - "form errors"
  - "summary"
  - "validation summary"
last-reviewed: "2026-04-03"
name: Error Summary
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/error-summary"
---

# Error Summary

> A component that summarises all validation errors on a page and links users to each affected field.
> Source: https://service-manual.nhs.uk/design-system/components/error-summary

## Overview

The error summary component displays a list of all validation errors at the top of the page when a form submission contains invalid data. It groups all errors in one visible location, helping users understand what went wrong before scrolling down to fix individual fields.

Each error in the list links directly to the affected input. This helps users with low vision, motor disabilities, or screen reader users who cannot scan the page for red fields. Clicking an error link moves focus to the relevant field so users can correct it straight away.

The component auto-focuses on page load using `data-module="nhsuk-error-summary"`. This means users who submit a form with errors will have their attention moved directly to the error summary, which is critical for accessibility.

## When to use this component

Use the error summary on every page where form validation errors occur. Always use it alongside inline error messages — the summary at the top of the page, and the inline messages next to each field.

Always use the error summary when a page contains one or more validation errors, regardless of whether the errors come from a single field or from more than one field.

## When not to use this component

Do not use the error summary to display general notifications or warnings unrelated to form validation — use the warning callout or notification banner component instead.

Do not use the error summary without also displaying inline error messages on each affected field. The two components work together and must both be present.

## How it works

Place the error summary at the top of the `<main>` element, before the page heading and form. The `data-module="nhsuk-error-summary"` attribute activates JavaScript that auto-focuses the summary on page load.

The title should read "There is a problem". Each error in the `errorList` is a link (`<a href="#[field-id]">`) that moves focus to the input when selected.

Without JavaScript, the error summary still appears but does not receive automatic focus — users will see it at the top of the page when the form re-renders.

## Code examples

### Default / Basic

#### HTML

```html
<div class="nhsuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="nhsuk-error-summary">
  <h2 class="nhsuk-error-summary__title" id="error-summary-title">
    There is a problem
  </h2>
  <div class="nhsuk-error-summary__body">
    <ul class="nhsuk-list nhsuk-error-summary__list">
      <li>
        <a href="#nhs-number">Enter your NHS number</a>
      </li>
      <li>
        <a href="#date-of-birth-day">Enter your date of birth</a>
      </li>
    </ul>
  </div>
</div>
```

#### Nunjucks

```njk
{{ errorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Enter your NHS number",
      href: "#nhs-number"
    },
    {
      text: "Enter your date of birth",
      href: "#date-of-birth-day"
    }
  ]
}) }}
```

### With description text

#### Nunjucks

```njk
{{ errorSummary({
  titleText: "There is a problem",
  descriptionText: "Check the highlighted fields and try again.",
  errorList: [
    {
      text: "Enter your date of birth",
      href: "#dob-day"
    }
  ]
}) }}
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| titleText | string | Yes (or titleHtml) | Title text for the error summary. Use `"There is a problem"`. |
| titleHtml | string | Yes (or titleText) | HTML for the title. If provided, ignore `titleText`. |
| descriptionText | string | No | Optional description text shown below the title. |
| descriptionHtml | string | No | Optional description HTML shown below the title. If provided, ignore `descriptionText`. |
| errorList | array | Yes | Array of error objects. |
| errorList[].text | string | Yes (or html) | Error message text. Should match the inline error message text. |
| errorList[].html | string | Yes (or text) | Error message HTML. |
| errorList[].href | string | No | `href` linking to the affected input by its `id`. |
| errorList[].attributes | object | No | HTML attributes for the error list item link. |
| disableAutoFocus | boolean | No | When `true`, prevents the error summary from receiving focus on page load. |
| classes | string | No | Classes to add to the error summary container. |
| attributes | object | No | HTML attributes for the error summary container. |

## Error messages

The error summary component displays other components' error messages. Its own content follows these conventions:

- Title: "There is a problem" (standard NHS phrasing — do not change this without good reason).
- Each list item text should match the corresponding inline error message text word for word.
- Each list item `href` should point to the `id` of the affected input field (e.g. `#nhs-number`).
- For groups of inputs (checkboxes, radios, date inputs), the `href` should point to the first input in the group.

## Accessibility

The error summary container uses `role="alert"` and `aria-labelledby` pointing to the title to ensure screen readers announce it when the page loads. The `data-module="nhsuk-error-summary"` activates JavaScript that moves focus to the summary.

Auto-focus is critical for screen reader and keyboard-only users — without it, they may not realise errors occurred after form submission. Disable it with `disableAutoFocus: true` only if you manage focus explicitly through other means.

The links in the error list allow users to jump directly to the problematic field, which is of particular value to users who navigate by links or have difficulty scrolling.

Ensure the `href` in each error list item matches the `id` of the corresponding input. For composite inputs (like date-input), link to the first errored field, not the fieldset.

## Do and do not

**Do:**
- Place the error summary at the top of `<main>`, before the page heading.
- Use the standard title "There is a problem".
- Match each error list item's text to the inline error message text word for word.
- Link each error list item to the correct input `id`.
- Use alongside inline error messages — both must be present.

**Do not:**
- Do not use the error summary without also displaying inline error messages.
- Do not change the title "There is a problem" unless you have a strong content or research reason.
- Do not use it for non-validation notifications.
- Do not disable auto-focus unless another mechanism manages focus on load.
- Do not link to a fieldset `id` — link to the first relevant input within the fieldset.

## Related components and patterns

- [Error message](../error-message/SKILLS.md) — inline error messages used alongside the summary.
- [Text input](../text-input/SKILLS.md) — receives `errorMessage` parameter for inline errors.
- [Checkboxes](../checkboxes/SKILLS.md) — group-level error messages.
- [Radios](../radios/SKILLS.md) — group-level error messages.
