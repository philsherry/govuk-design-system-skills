---
category: components
description: A textarea with a live character or word count that helps users know how much they can type.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Character Count
---

# Character Count

> A textarea with a live character or word count that helps users know how much they can type.
> Source: https://design-system.service.gov.uk/components/character-count/
---

## Overview

The character count component extends the textarea component with a live count that tells users how characters or words they have remaining as they type. This helps users understand the limits of a field before submitting the form, reducing validation errors from exceeding the character limit.

The count message updates dynamically as the user types. When the user has not yet reached the limit, it shows "You have X characters remaining". When the user goes over the limit, it changes to "You have X characters over the limit" and the text turns red to signal the error state. Users can still submit the form in an over-limit state, but the server should reject it with an error message.

The component supports both character limits (`maxlength`) and word limits (`maxwords`). A `threshold` option keeps the count message hidden until the user has typed a specified percentage of the limit, reducing distraction on fields with generous limits.

## When to use this component

Use the character count component whenever you place a limit on the length of a response in a textarea. This makes the constraint visible to the user as they type, rather than revealing it after submission fails.

Use it for free-text fields where the limit is meaningful and users need feedback — for example, when asking for a description, reason, or summary within a set character or word limit.

## When not to use this component

Do not use the character count component if there is no limit on the response. Do not use it for text inputs (`<input type="text">`) — it works with textareas only.

Do not use a character limit unless you have a genuine technical or policy reason for one. If the limit is generous (thousands of characters), consider whether it needs to be visible at all, or use the `threshold` option to hide the count until users are near the limit.

## How it works

The component wraps a standard `govukTextarea` and adds a count message element below it. The `data-module="govuk-character-count"` attribute on the outer `<div>` activates the JavaScript behaviour. Set the maximum via `data-maxlength` or `data-maxwords` attributes.

Without JavaScript, the component degrades to a plain textarea. The `maxlength` HTML attribute is not set automatically — enforce the limit server-side and check it using the error message pattern.

The `threshold` parameter (a value from 0 to 100) sets the percentage of the limit that users must reach before the count message appears. For example, `threshold: 75` means the count stays hidden until the user has typed 75% of the allowed characters.

The count message has `aria-live="polite"` so screen readers announce changes to the remaining count without interrupting the user.

## Code Examples

### Default / Basic (character limit)

#### HTML

```html
<div class="govuk-form-group" data-module="govuk-character-count" data-maxlength="200">
  <label class="govuk-label" for="more-detail">
    Can you provide more detail?
  </label>
  <div id="more-detail-hint" class="govuk-hint">
    Do not include personal or financial information like your National Insurance number or credit card details.
  </div>
  <textarea
    class="govuk-textarea govuk-js-character-count"
    id="more-detail"
    name="more-detail"
    rows="5"
    aria-describedby="more-detail-info more-detail-hint"
  ></textarea>
  <div id="more-detail-info" class="govuk-hint govuk-character-count__message">
    You can enter up to 200 characters
  </div>
</div>
```

#### Nunjucks

```njk
{{ govukCharacterCount({
  name: "more-detail",
  id: "more-detail",
  maxlength: 200,
  label: {
    text: "Can you provide more detail?"
  },
  hint: {
    text: "Do not include personal or financial information like your National Insurance number or credit card details."
  }
}) }}
```

### With word limit

#### Nunjucks

```njk
{{ govukCharacterCount({
  name: "job-description",
  id: "job-description",
  maxwords: 150,
  label: {
    text: "Enter a brief description of the role",
    classes: "govuk-label--l",
    isPageHeading: true
  }
}) }}
```

### With threshold

#### Nunjucks

```njk
{{ govukCharacterCount({
  name: "description",
  id: "description",
  maxlength: 500,
  threshold: 75,
  label: {
    text: "Describe the issue"
  },
  hint: {
    text: "The count will appear when you have used 75% of the limit."
  }
}) }}
```

### With pre-filled value and error

#### Nunjucks

```njk
{{ govukCharacterCount({
  name: "description",
  id: "description",
  maxlength: 100,
  value: "This is some existing text the user entered that exceeds the limit considerably.",
  label: {
    text: "Describe the issue"
  },
  errorMessage: {
    text: "Description must be 100 characters or less"
  }
}) }}
```

### With custom rows

#### Nunjucks

```njk
{{ govukCharacterCount({
  name: "message",
  id: "message",
  maxlength: 300,
  rows: 8,
  label: {
    text: "Enter your message"
  }
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| id | string | Yes | The `id` for the textarea element. |
| name | string | Yes | The `name` attribute for the textarea. |
| maxlength | integer | Yes (or maxwords) | The character limit. |
| maxwords | integer | Yes (or maxlength) | The word limit. Cannot be used with `maxlength`. |
| threshold | integer | No | Percentage (0–100) of limit used before the count message appears. |
| label | object | Yes | Label object. Accepts `text`, `html`, `classes`, `isPageHeading`, `for`, `attributes`. |
| hint | object | No | Hint object. Accepts `text`, `html`, `id`, `classes`, `attributes`. |
| value | string | No | Pre-filled value for the textarea. |
| rows | integer | No | Number of textarea rows. Defaults to `5`. |
| errorMessage | object | No | Error message object with `text` or `html`. Adds error styles. |
| formGroup | object | No | Options for the form group wrapper. Accepts `classes`, `attributes`, `beforeInput`, `afterInput`. |
| classes | string | No | Classes to add to the textarea. |
| attributes | object | No | HTML attributes for the textarea as key–value pairs. |
| countMessage | object | No | Options for the count message element. Accepts `classes`. |
| textareaDescribedBy | string | No | Extra `id`s to add to the textarea's `aria-describedby`. |

## Error Messages

When the user exceeds the character or word count, the count message text turns red and reads "You have X characters/words over the limit". This is a live UI state, not a server-side validation error.

For server-side validation errors, use the `errorMessage` parameter:

- "Enter [description of field]" — when the user leaves the field blank.
- "[Field] must be [X] characters or fewer" — when the submitted value exceeds the limit.
- "[Field] must be [X] words or fewer" — when using word limits.

## Accessibility

The count message element uses `aria-live="polite"` and `role="status"` so that screen readers announce updates without interrupting the user. The message is also linked to the textarea via `aria-describedby`.

When using `threshold`, the count message is visually hidden until the threshold passes, but it remains in the DOM and accessible to assistive technologies.

Do not add the `maxlength` HTML attribute directly to the `<textarea>` element — this prevents users from pasting over-length content and seeing the error state, breaking the expected character count experience.

## Do / Don't

**Do:**
- Use `maxlength` unless you specifically need a word count.
- Use `threshold` for fields with generous limits (200+ characters) to reduce visual clutter.
- Write the label as a clear question or instruction.
- Check the length server-side and return an error message if the user submits over the limit.

**Don't:**
- Don't add the HTML `maxlength` attribute directly to the textarea — this conflicts with the component's intended behaviour.
- Don't use both `maxlength` and `maxwords` together.
- Don't use this component for `<input type="text">` — it works with `<textarea>` only.
- Don't impose a character limit unless there is a genuine technical or policy reason.

## Related Components / Patterns

- [Textarea](https://design-system.service.gov.uk/components/textarea/) — the base component that character count extends.
- [Text input](https://design-system.service.gov.uk/components/text-input/) — for single-line inputs, which do not need a character count.
- [Error message](https://design-system.service.gov.uk/components/error-message/) — for displaying validation errors beneath the field.
- [Error summary](https://design-system.service.gov.uk/components/error-summary/) — for listing all errors at the top of the page on form submission.
