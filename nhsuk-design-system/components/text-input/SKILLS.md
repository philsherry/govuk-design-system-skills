---
category: components
description: Use the text input component when users need to enter a single line of text.
keywords:
  - "form input"
  - "input"
  - "input field"
  - "text"
  - "text field"
  - "text input"
last-reviewed: "2026-04-03"
name: Text Input
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/text-input"
---

# Text Input

> Use the text input component when users need to enter a single line of text.
> Source: https://service-manual.nhs.uk/design-system/components/text-input

## Overview

The text input component renders a single-line `<input>` field with a label, optional hint text, and optional error message. As the most fundamental form input in the NHS UK Design System, it collects short pieces of free-text information such as names, NHS numbers, email addresses, and phone numbers.

NHS inputs have a clear border, generous touch target, and high contrast. Explicit CSS classes control width rather than browser defaults. Prefix and suffix support lets you show units or symbols inline with the input.

## When to use this component

- When users need to enter a single line of text — a name, NHS number, email address, phone number, or reference number.
- When the expected input is too unpredictable or varied for a constrained input type.
- For short, specific responses where character count is not a concern (for longer responses, use **textarea**).

## When not to use this component

- Do not use a text input for multi-line responses — use **textarea**.
- Do not use it for passwords — use the **password input** component.
- Do not use it when a more specific component is available: **date input** for dates, **select** for long option lists, **radios** or **checkboxes** for predefined choices.

## How it works

The component renders a `<div class="nhsuk-form-group">` containing a `<label>`, optional hint, optional error message, and the `<input>`. When hint text or an error message is present, `aria-describedby` links them to the input.

### Input widths

Use the narrowest appropriate width for the expected content:

| Class | Approximate width |
|-------|------------------|
| `nhsuk-input--width-2` | 2 characters (day or 2-digit number) |
| `nhsuk-input--width-3` | 3 characters |
| `nhsuk-input--width-4` | 4 characters (year) |
| `nhsuk-input--width-5` | 5 characters (postcode part) |
| `nhsuk-input--width-10` | 10 characters (NHS number) |
| `nhsuk-input--width-20` | 20 characters (short names) |
| `nhsuk-u-width-full` | Full container width |

### Prefix and suffix

Use a prefix or suffix to add context to the input — for example, `£` before a currency amount, or `kg` after a weight. Prefix/suffix text uses `aria-hidden="true"` — ensure the label or hint text communicates the unit to screen reader users.

## Code examples

### Default / Basic

#### HTML

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="nhs-number">
    NHS number
  </label>
  <input class="nhsuk-input" id="nhs-number" name="nhs-number" type="text">
</div>
```

#### Nunjucks

```njk
{{ input({
  id: "nhs-number",
  name: "nhs-number",
  label: {
    text: "NHS number"
  }
}) }}
```

### With label as page heading

#### HTML

```html
<div class="nhsuk-form-group">
  <h1 class="nhsuk-label-wrapper">
    <label class="nhsuk-label nhsuk-label--l" for="nhs-number">
      What is your NHS number?
    </label>
  </h1>
  <input class="nhsuk-input" id="nhs-number" name="nhs-number" type="text">
</div>
```

#### Nunjucks

```njk
{{ input({
  id: "nhs-number",
  name: "nhs-number",
  label: {
    text: "What is your NHS number?",
    classes: "nhsuk-label--l",
    isPageHeading: true
  }
}) }}
```

### With hint text

#### HTML

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="nhs-number">
    What is your NHS number?
  </label>
  <div id="nhs-number-hint" class="nhsuk-hint">
    Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example, 485 777 3456.
  </div>
  <input class="nhsuk-input" id="nhs-number" name="nhs-number" type="text" aria-describedby="nhs-number-hint">
</div>
```

#### Nunjucks

```njk
{{ input({
  id: "nhs-number",
  name: "nhs-number",
  label: {
    text: "What is your NHS number?"
  },
  hint: {
    text: "Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example, 485 777 3456."
  }
}) }}
```

### With error message

#### HTML

```html
<div class="nhsuk-form-group nhsuk-form-group--error">
  <label class="nhsuk-label" for="nhs-number">
    What is your NHS number?
  </label>
  <span id="nhs-number-error" class="nhsuk-error-message">
    <span class="nhsuk-u-visually-hidden">Error: </span>Enter your NHS number
  </span>
  <input class="nhsuk-input nhsuk-input--error" id="nhs-number" name="nhs-number" type="text" aria-describedby="nhs-number-error">
</div>
```

#### Nunjucks

```njk
{{ input({
  id: "nhs-number",
  name: "nhs-number",
  label: {
    text: "What is your NHS number?"
  },
  errorMessage: {
    text: "Enter your NHS number"
  }
}) }}
```

### With fixed width

#### Nunjucks

```njk
{{ input({
  id: "nhs-number",
  name: "nhs-number",
  classes: "nhsuk-input--width-10",
  label: {
    text: "What is your NHS number?"
  },
  hint: {
    text: "Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example, 485 777 3456."
  }
}) }}
```

### With prefix

#### Nunjucks

```njk
{{ input({
  id: "cost",
  name: "cost",
  classes: "nhsuk-input--width-5",
  spellcheck: false,
  label: {
    text: "What is the cost in pounds?"
  },
  prefix: {
    text: "£"
  }
}) }}
```

### With suffix

#### Nunjucks

```njk
{{ input({
  id: "weight",
  name: "weight",
  classes: "nhsuk-input--width-5",
  spellcheck: false,
  label: {
    text: "Weight, in kilograms"
  },
  suffix: {
    text: "kg"
  }
}) }}
```

### Email address (with autocomplete and spellcheck off)

#### Nunjucks

```njk
{{ input({
  id: "email",
  name: "email",
  type: "email",
  autocomplete: "email",
  spellcheck: false,
  label: {
    text: "Email address",
    classes: "nhsuk-label--l",
    isPageHeading: true
  }
}) }}
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | The `id` for the input element. |
| `name` | string | Yes | The `name` attribute for the input. |
| `type` | string | No | The input `type`. Defaults to `"text"`. Common values: `"email"`, `"tel"`, `"number"`, `"search"`. |
| `inputmode` | string | No | The `inputmode` attribute for mobile keyboard hints. |
| `value` | string | No | Pre-populated value for the input. |
| `disabled` | boolean | No | Whether the input is disabled. |
| `label` | object | Yes | Options for the label. Must include `text` or `html`. |
| `hint` | object | No | Options for hint text. |
| `errorMessage` | object | No | Options for the error message. |
| `prefix` | object | No | Options for the input prefix. Include `text` or `html`. |
| `suffix` | object | No | Options for the input suffix. Include `text` or `html`. |
| `formGroup` | object | No | Options for the form group wrapper. |
| `classes` | string | No | Classes to add to the input element. Use `nhsuk-input--width-N` for fixed widths. |
| `autocomplete` | string | No | The `autocomplete` attribute value. |
| `pattern` | string | No | The `pattern` attribute for client-side input validation. |
| `spellcheck` | boolean | No | Set to `false` to disable browser spell-checking. |
| `describedBy` | string | No | Extra element IDs to include in `aria-describedby`. |
| `attributes` | object | No | HTML attributes (as key-value pairs) to add to the input. |

## Error messages

| Situation | Error message |
|-----------|---------------|
| Field left empty | "Enter [the thing]" — for example, "Enter your NHS number" |
| Not in the right format | "Enter [the thing] in the correct format" — for example, "Enter your NHS number in the correct format, like 485 777 3456" |
| Wrong format | "[Thing] must be [the required format]" |
| Email format invalid | "Enter an email address in the correct format, like name@example.com" |

## Accessibility

- Always associate a `<label>` with the input using `for`/`id`.
- The macro automatically links hint text and error messages to the input via `aria-describedby`.
- Set `type` appropriately — `"email"` and `"tel"` trigger appropriate on-screen keyboards on mobile and support autofill.
- Set `autocomplete` for name, address, and contact fields to help users with autofill and password managers.
- Set `spellcheck="false"` for inputs where spell-checking is unhelpful — email addresses, NHS numbers, reference codes.
- Prefix and suffix elements use `aria-hidden="true"` — make sure the label or hint conveys the unit in text.

## Do and do not

**Do:**
- Use the narrowest appropriate width for the expected content.
- Set `type`, `autocomplete`, and `inputmode` appropriately.
- Disable spell-checking for non-word inputs.
- Use `isPageHeading: true` when the label is the main page heading.

**Do not:**
- Do not use a text input for multi-line responses — use textarea.
- Do not use a text input for passwords — use the password input component.
- Do not use full-width inputs for short data like postcodes, years, or NHS numbers.
- Do not use a text input when a constrained input (radios, select, date input) would be more appropriate.

## Related components and patterns

- [Textarea](../textarea/SKILLS.md) — for multi-line text input
- [Password Input](../password-input/SKILLS.md) — for password entry
- [Date Input](../date-input/SKILLS.md) — for date entry
- [Character Count](../character-count/SKILLS.md) — for inputs with a character limit
- [Error Message](../error-message/SKILLS.md)
- [Error Summary](../error-summary/SKILLS.md)
