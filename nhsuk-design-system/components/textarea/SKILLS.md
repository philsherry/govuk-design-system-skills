---
category: components
description: Use the textarea component when users need to enter an amount of text longer than a single line.
keywords:
  - "free text"
  - "multi-line"
  - "text area"
  - "textarea"
last-reviewed: "2026-04-03"
name: Textarea
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/textarea"
---

# Textarea

> Use the textarea component when users need to enter an amount of text longer than a single line.
> Source: https://service-manual.nhs.uk/design-system/components/textarea

## Overview

The textarea component renders a multi-line `<textarea>` element with a label, optional hint text, and optional error message. Use it when users need to provide longer free-text responses — such as descriptions of symptoms, explanations, feedback, or reasons for referral.

The component uses the same visual styling as the text input — consistent border, focus state, and error treatment. The `rows` attribute sets the visible height of the textarea and helps users gauge how much text to provide.

## When to use this component

- When users need to enter more than one line of text.
- For open-ended questions requiring explanations, descriptions, or reasons.
- For feedback forms or free-text comments.
- When the expected response length is more than a sentence or two.

## When not to use this component

- Do not use a textarea for a single line of text — use the **text input** component.
- Do not use a textarea when a structured input would work better — for dates use the date input, for choices use radios or checkboxes.
- If you have a character limit, use the **character count** component instead to give users visible feedback on remaining characters.

## How it works

The textarea renders inside a `<div class="nhsuk-form-group">` with the standard NHS structure: label, optional hint, optional error message, and the `<textarea>` element. When hint text or an error message is present, `aria-describedby` links them to the textarea.

The default number of rows is `5`. Adjust this to reflect the expected length of input — fewer rows for a brief reason, more rows for a longer description.

Do not use JavaScript to auto-resize the textarea as the user types. This creates unpredictable scroll behaviour and can disorient users with cognitive or visual impairments.

## Code examples

### Default / Basic

#### HTML

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="more-detail">
    Can you provide more detail?
  </label>
  <textarea class="nhsuk-textarea" id="more-detail" name="more-detail" rows="5"></textarea>
</div>
```

#### Nunjucks

```njk
{{ textarea({
  id: "more-detail",
  name: "more-detail",
  label: {
    text: "Can you provide more detail?"
  }
}) }}
```

### With label as page heading

#### HTML

```html
<div class="nhsuk-form-group">
  <h1 class="nhsuk-label-wrapper">
    <label class="nhsuk-label nhsuk-label--l" for="symptoms">
      Describe your symptoms
    </label>
  </h1>
  <textarea class="nhsuk-textarea" id="symptoms" name="symptoms" rows="5"></textarea>
</div>
```

#### Nunjucks

```njk
{{ textarea({
  id: "symptoms",
  name: "symptoms",
  label: {
    text: "Describe your symptoms",
    classes: "nhsuk-label--l",
    isPageHeading: true
  }
}) }}
```

### With hint text

#### HTML

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="more-detail">
    Can you provide more detail?
  </label>
  <div id="more-detail-hint" class="nhsuk-hint">
    Do not include personal or financial information like your NHS number or bank details.
  </div>
  <textarea class="nhsuk-textarea" id="more-detail" name="more-detail" rows="5" aria-describedby="more-detail-hint"></textarea>
</div>
```

#### Nunjucks

```njk
{{ textarea({
  id: "more-detail",
  name: "more-detail",
  label: {
    text: "Can you provide more detail?"
  },
  hint: {
    text: "Do not include personal or financial information like your NHS number or bank details."
  }
}) }}
```

### With error message

#### HTML

```html
<div class="nhsuk-form-group nhsuk-form-group--error">
  <label class="nhsuk-label" for="symptoms">
    Describe your symptoms
  </label>
  <span id="symptoms-error" class="nhsuk-error-message">
    <span class="nhsuk-u-visually-hidden">Error: </span>Enter a description of your symptoms
  </span>
  <textarea class="nhsuk-textarea nhsuk-textarea--error" id="symptoms" name="symptoms" rows="5" aria-describedby="symptoms-error"></textarea>
</div>
```

#### Nunjucks

```njk
{{ textarea({
  id: "symptoms",
  name: "symptoms",
  label: {
    text: "Describe your symptoms"
  },
  errorMessage: {
    text: "Enter a description of your symptoms"
  }
}) }}
```

### With custom row count

#### Nunjucks

```njk
{{ textarea({
  id: "description",
  name: "description",
  rows: 8,
  label: {
    text: "Describe the issue in detail",
    classes: "nhsuk-label--m"
  },
  hint: {
    text: "Include as much information as possible."
  }
}) }}
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | The `id` for the `<textarea>` element. |
| `name` | string | Yes | The `name` attribute for the `<textarea>`. |
| `rows` | integer | No | Number of visible text rows. Defaults to `5`. |
| `value` | string | No | Pre-populated value for the textarea. |
| `disabled` | boolean | No | Whether the textarea is disabled. |
| `label` | object | Yes | Options for the label element. Must include `text` or `html`. |
| `hint` | object | No | Options for hint text. |
| `errorMessage` | object | No | Options for the error message. |
| `formGroup` | object | No | Options for the form group wrapper. |
| `classes` | string | No | Classes to add to the `<textarea>` element. |
| `autocomplete` | string | No | The `autocomplete` attribute value. |
| `spellcheck` | boolean | No | Set `spellcheck` attribute. Defaults to browser default. |
| `describedBy` | string | No | Extra element IDs to include in `aria-describedby`. |
| `attributes` | object | No | HTML attributes (as key-value pairs) to add to the `<textarea>`. |

## Error messages

| Situation | Error message |
|-----------|---------------|
| Field left empty | "Enter [the thing]" — for example, "Enter a description of your symptoms" |
| Over the character limit | "Enter [the thing] using [N] characters or fewer" |
| Contains invalid characters | "Enter [the thing] using only [allowed characters]" |

## Accessibility

- Always associate a `<label>` with the textarea using `for`/`id`.
- The macro automatically links hint text and error messages via `aria-describedby`.
- The `rows` attribute shows the expected input length visually. Set it to a value appropriate for the expected content.
- Do not use JavaScript to auto-resize the textarea — this disorients users and can cause scroll issues for users with disabilities.
- If you have a character limit, use the character count component rather than a plain textarea — users need visible, accessible feedback on remaining characters.

## Do and do not

**Do:**
- Set `rows` to reflect the expected length of input.
- Use hint text to tell users what to include (and what to exclude).
- Pre-populate the textarea with data entered before re-rendering after validation.
- Use `isPageHeading: true` when this is the only question on the page.

**Do not:**
- Do not use a textarea for single-line input — use the text input component.
- Do not auto-resize the textarea with JavaScript.
- Do not use a textarea when a more structured input would be more appropriate.
- Do not set an unreasonably large `rows` value — it makes the page feel overwhelming.

## Related components and patterns

- [Text Input](../text-input/SKILLS.md) — for single-line text input
- [Character Count](../character-count/SKILLS.md) — for textareas with a character limit
- [Error Message](../error-message/SKILLS.md)
- [Error Summary](../error-summary/SKILLS.md)
