---
category: components
description: A message that explains a validation error and tells users how to fix it.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Error Message
---

# Error Message

> A message that explains a validation error and tells users how to fix it.
> Source: https://design-system.service.gov.uk/components/error-message/
---

## Overview

The error message component displays a validation error below a form label and above the input it relates to. It renders as a `<p>` element styled in red with a visually hidden "Error:" prefix, so screen reader users hear the word "Error" before the message.

Always use error messages in combination with the error summary component. The error summary appears at the top of the page listing all errors, and each error message appears inline next to the relevant field. The error summary links directly to each inline error message.

Every error message should explain what went wrong and tell the user how to fix it, written in plain English. The visually hidden "Error:" prefix ensures screen readers announce it as an error before reading the message content.

## When to use this component

Use the error message component whenever a form field fails validation. Always display it:

- Directly below the field label (or hint if present)
- Directly above the input element
- In combination with an error summary at the top of the page

Use error messages on server-side validation, shown after the user submits the form. Do not use JavaScript to show errors before the user has attempted to submit.

## When not to use this component

Do not use the error message component for general information, warnings, or system messages — use the notification banner or warning text for those.

Do not use inline error messages without also including an error summary at the top of the page. Do not use the component for hints or guidance that appear before submission.

## How it works

The error message renders as `<p id="[id]-error" class="govuk-error-message">` containing `<span class="govuk-visually-hidden">Error:</span>` followed by the error text.

The `govuk-form-group--error` class on the form group wrapper adds a red left border to the entire group. The `govuk-input--error` class (or the corresponding modifier for other input types) adds a red border to the input itself.

Reference the error message `id` in the input's `aria-describedby` so assistive technologies associate the error with the field.

## Code Examples

### Default / Basic

#### HTML

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="national-insurance-number">
    National Insurance number
  </label>
  <div id="national-insurance-number-hint" class="govuk-hint">
    It's on your National Insurance card, benefit letter, payslip or P60. For example, 'QQ 12 34 56 C'.
  </div>
  <p id="national-insurance-number-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter a National Insurance number in the correct format
  </p>
  <input
    class="govuk-input govuk-input--error"
    id="national-insurance-number"
    name="national-insurance-number"
    type="text"
    aria-describedby="national-insurance-number-hint national-insurance-number-error"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "National Insurance number"
  },
  hint: {
    text: "It's on your National Insurance card, benefit letter, payslip or P60. For example, 'QQ 12 34 56 C'."
  },
  id: "national-insurance-number",
  name: "national-insurance-number",
  errorMessage: {
    text: "Enter a National Insurance number in the correct format"
  }
}) }}
```

### Standalone error message component

#### HTML

```html
<p id="passport-number-error" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span>
  Enter your passport number
</p>
```

#### Nunjucks

```njk
{{ govukErrorMessage({
  id: "passport-number-error",
  text: "Enter your passport number"
}) }}
```

### With custom visually hidden text

#### Nunjucks

```njk
{{ govukErrorMessage({
  text: "Enter a valid email address",
  visuallyHiddenText: "Gwall:"
}) }}
```

### With HTML content

#### Nunjucks

```njk
{{ govukErrorMessage({
  html: "Enter a date of birth in <span lang=\"en\">DD/MM/YYYY</span> format"
}) }}
```

### On a textarea

#### Nunjucks

```njk
{{ govukTextarea({
  id: "more-detail",
  name: "more-detail",
  label: {
    text: "Can you provide more detail?"
  },
  errorMessage: {
    text: "Enter more detail"
  }
}) }}
```

### On a select

#### Nunjucks

```njk
{{ govukSelect({
  id: "sort",
  name: "sort",
  label: {
    text: "Sort by"
  },
  errorMessage: {
    text: "Select a sort order"
  },
  items: [
    { value: "published", text: "Recently published" },
    { value: "updated", text: "Recently updated" }
  ]
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| text | string | Yes (or html) | Text of the error message. |
| html | string | Yes (or text) | HTML for the error message. If provided, `text` is ignored. |
| id | string | No | `id` for the `<p>` element. Should match the value referenced in the input's `aria-describedby`. |
| visuallyHiddenText | string | No | Visually hidden text prepended to the message. Defaults to `"Error"`. Override for Welsh (`"Gwall"`) or other languages. |
| classes | string | No | Classes to add to the `<p>` element. |
| attributes | object | No | HTML attributes for the `<p>` element. |

## Error Messages

The error message content itself should follow these principles:

- Tell users what went wrong: "Enter your date of birth" not "Invalid date".
- Tell users how to fix it: "Enter a date of birth in the format DD MM YYYY".
- Use the specific field label in the message: "Enter a National Insurance number" not "Enter the number".
- Be concise — one sentence per error is enough.
- Do not start with "Please" — be direct.
- Do not blame the user — say "Enter a valid email address" not "You entered an invalid email address".

## Accessibility

The `<span class="govuk-visually-hidden">Error:</span>` prefix ensures screen reader users hear "Error:" before the message when their virtual cursor moves to the error text. Without this, the message reads as plain text with no signal that an error has occurred.

The error message `id` must appear in the associated input's `aria-describedby` so that when the input receives focus, the screen reader announces the error message automatically.

The `govuk-form-group--error` class adds a red left border to the whole form group. The `govuk-input--error` class adds a red border to the input. Both visual cues must be present — do not rely on colour alone.

## Do / Don't

**Do:**
- Always pair inline error messages with an error summary at the top of the page.
- Use the `id` parameter and reference it in the input's `aria-describedby`.
- Write messages that say what went wrong and how to fix it.
- Use the `visuallyHiddenText` parameter to localise the "Error:" prefix for Welsh or other languages.

**Don't:**
- Don't show error messages before the user has submitted the form.
- Don't use vague messages like "Invalid input" or "Required field".
- Don't omit the error summary — inline messages alone are insufficient for accessibility.
- Don't use the error message component for general guidance or hints.

## Related Components / Patterns

- [Error summary](https://design-system.service.gov.uk/components/error-summary/) — the page-level error list that must appear alongside inline error messages.
- [Text input](https://design-system.service.gov.uk/components/text-input/) — the most common component to display error messages on.
- [Checkboxes](https://design-system.service.gov.uk/components/checkboxes/) — uses `errorMessage` on the group.
- [Radios](https://design-system.service.gov.uk/components/radios/) — uses `errorMessage` on the group.
- [Validation patterns](https://design-system.service.gov.uk/patterns/validation/) — general guidance on form validation.
