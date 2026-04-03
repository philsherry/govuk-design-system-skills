---
category: components
description: A message that explains a validation error and tells users how to fix it.
keywords:
  - "error"
  - "error message"
  - "form error"
  - "inline error"
  - "message"
  - "validation"
last-reviewed: "2026-04-03"
name: Error Message
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/error-message"
---

# Error Message

> A message that explains a validation error and tells users how to fix it.
> Source: https://service-manual.nhs.uk/design-system/components/error-message

## Overview

The error message component displays a validation error below a form label and above the input it relates to. It renders as a `<span>` element styled in red with a visually hidden "Error:" prefix, so screen reader users hear the word "Error" before the message.

Always use error messages in combination with the error summary component. The error summary appears at the top of the page listing all errors, and each error message appears inline next to the relevant field. The error summary links directly to each inline error message.

Every error message should explain what went wrong and tell the user how to fix it, written in plain English at a reading age appropriate for a wide audience.

## When to use this component

Use the error message component whenever a form field fails validation. Always display it:

- Directly below the field label (or hint if present)
- Directly above the input element
- In combination with an error summary at the top of the page

Use error messages on server-side validation, shown after the user submits the form. Do not use JavaScript to show errors before the user has attempted to submit.

## When not to use this component

Do not use the error message component for general information, warnings, or system messages — use the warning callout or other appropriate component for those.

Do not use inline error messages without also including an error summary at the top of the page.

## How it works

The error message renders as `<span id="[id]-error" class="nhsuk-error-message">` containing `<span class="nhsuk-u-visually-hidden">Error: </span>` followed by the error text.

The `nhsuk-form-group--error` class on the form group wrapper adds a red left border to the entire group. The `nhsuk-input--error` class (or the corresponding modifier for other input types) adds a red border to the input itself.

Reference the error message `id` in the input's `aria-describedby` so assistive technologies associate the error with the field.

## Code Examples

### Default / Basic

#### HTML

```html
<div class="nhsuk-form-group nhsuk-form-group--error">
  <label class="nhsuk-label" for="nhs-number">
    What is your NHS number?
  </label>
  <div id="nhs-number-hint" class="nhsuk-hint">
    Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example, 485 777 3456.
  </div>
  <span id="nhs-number-error" class="nhsuk-error-message">
    <span class="nhsuk-u-visually-hidden">Error: </span>Enter your NHS number
  </span>
  <input
    class="nhsuk-input nhsuk-input--error"
    id="nhs-number"
    name="nhs-number"
    type="text"
    aria-describedby="nhs-number-hint nhs-number-error"
  >
</div>
```

#### Nunjucks

```njk
{{ input({
  label: {
    text: "What is your NHS number?"
  },
  hint: {
    text: "Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example, 485 777 3456."
  },
  id: "nhs-number",
  name: "nhs-number",
  errorMessage: {
    text: "Enter your NHS number"
  }
}) }}
```

### Standalone error message component

#### HTML

```html
<span id="nhs-number-error" class="nhsuk-error-message">
  <span class="nhsuk-u-visually-hidden">Error: </span>
  Enter your NHS number
</span>
```

#### Nunjucks

```njk
{{ errorMessage({
  id: "nhs-number-error",
  text: "Enter your NHS number"
}) }}
```

### With custom visually hidden text

#### Nunjucks

```njk
{{ errorMessage({
  text: "Enter a valid email address",
  visuallyHiddenText: "Gwall:"
}) }}
```

### On a textarea

#### Nunjucks

```njk
{{ textarea({
  id: "more-detail",
  name: "more-detail",
  label: {
    text: "Can you provide more detail?"
  },
  errorMessage: {
    text: "Enter more detail about your symptoms"
  }
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| text | string | Yes (or html) | Text of the error message. |
| html | string | Yes (or text) | HTML for the error message. If provided, `text` is ignored. |
| id | string | No | `id` for the `<span>` element. Should match the value referenced in the input's `aria-describedby`. |
| visuallyHiddenText | string | No | Visually hidden text prepended to the message. Defaults to `"Error"`. Override for Welsh (`"Gwall"`) or other languages. |
| classes | string | No | Classes to add to the `<span>` element. |
| attributes | object | No | HTML attributes for the `<span>` element. |

## Error Messages

The error message content itself should follow these principles:

- Tell users what went wrong: "Enter your date of birth" not "Invalid date".
- Tell users how to fix it: "Enter a date of birth in the format DD MM YYYY".
- Use the specific field label in the message: "Enter your NHS number" not "Enter the number".
- Be concise — one sentence per error is enough.
- Do not start with "Please" — be direct.
- Do not blame the user — say "Enter a valid email address" not "You entered an invalid email address".

## Accessibility

The `<span class="nhsuk-u-visually-hidden">Error: </span>` prefix ensures screen reader users hear "Error:" before the message when their virtual cursor moves to the error text. Without this, the message reads as plain text with no signal that an error has occurred.

The error message `id` must appear in the associated input's `aria-describedby` so that when the input receives focus, the screen reader announces the error message automatically.

The `nhsuk-form-group--error` class adds a red left border to the whole form group. The `nhsuk-input--error` class adds a red border to the input. Both visual cues must be present — do not rely on colour alone.

## Do and Do not

**Do:**
- Always pair inline error messages with an error summary at the top of the page.
- Use the `id` parameter and reference it in the input's `aria-describedby`.
- Write messages that say what went wrong and how to fix it.
- Use the `visuallyHiddenText` parameter to localise the "Error:" prefix for Welsh or other languages.

**Do not:**
- Do not show error messages before the user has submitted the form.
- Do not use vague messages like "Invalid input" or "Required field".
- Do not omit the error summary — inline messages alone are insufficient for accessibility.
- Do not use the error message component for general guidance or hints.

## Related Components / Patterns

- [Error summary](../error-summary/SKILLS.md) — the page-level error list that must appear alongside inline error messages.
- [Text input](../text-input/SKILLS.md) — the most common component to display error messages on.
- [Checkboxes](../checkboxes/SKILLS.md) — uses `errorMessage` on the group.
- [Radios](../radios/SKILLS.md) — uses `errorMessage` on the group.
