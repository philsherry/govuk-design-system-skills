---
category: components
description: Use the text input component when users need to enter a single line of text.
govuk-frontend: "5.x"
keywords:
  - "form input"
  - "input"
  - "input field"
  - "text"
  - "text field"
  - "text input"
last-reviewed: "2026-04-03"
name: Text Input
source: "https://design-system.service.gov.uk/components/text-input/"
---

# Text Input

> Use the text input component when users need to enter a single line of text.
> Source: https://design-system.service.gov.uk/components/text-input/

## Overview

The text input component renders a single-line `<input>` field with a label, optional hint text, and optional error message. As the most fundamental form input in the GOV.UK Design System, it collects short pieces of free-text information such as names, email addresses, phone numbers, and reference numbers.

GOV.UK inputs have a clear border, generous touch target, and high contrast. Explicit CSS classes control width rather than browser defaults. Prefix and suffix support lets you show units or symbols (£, %, kg) inline with the input.

## When to use this component

- When users need to enter a single line of text — a name, email address, phone number, reference number, or similar.
- When the expected input is too unpredictable or varied for a constrained input type.
- For short, specific responses where character count is not a concern (for longer responses, use **textarea**).

## When not to use this component

- Do not use a text input for multi-line responses — use **textarea**.
- Do not use it for passwords — use the **password input** component.
- Do not use it when a more specific component is available: **date input** for dates, **select** for long option lists, **radios** or **checkboxes** for predefined choices.

## How it works

The component renders a `<div class="govuk-form-group">` containing a `<label>`, optional hint, optional error message, and the `<input>`. When hint text or an error message is present, `aria-describedby` links them to the input.

### Input widths

Use the narrowest appropriate width for the expected content:

| Class | Approximate width |
|-------|------------------|
| `govuk-input--width-2` | 2 characters (day or 2-digit number) |
| `govuk-input--width-4` | 4 characters (year) |
| `govuk-input--width-5` | 5 characters (postcode part) |
| `govuk-input--width-10` | 10 characters (National Insurance number) |
| `govuk-input--width-20` | 20 characters (short names) |
| `govuk-input--width-30` | 30 characters (email addresses) |
| `govuk-!-width-full` | Full container width |

### Prefix and suffix

Use a prefix or suffix to add context to the input — for example, `£` before a currency amount, or `kg` after a weight. Prefix/suffix text is `aria-hidden="true"` — ensure the label or hint text communicates the unit to screen reader users.

## Code Examples

### Default / Basic

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="event-name">
    Event name
  </label>
  <input class="govuk-input" id="event-name" name="event-name" type="text">
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  id: "event-name",
  name: "event-name",
  label: {
    text: "Event name"
  }
}) }}
```

### With label as page heading

#### HTML

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="event-name">
      What is the name of the event?
    </label>
  </h1>
  <input class="govuk-input" id="event-name" name="event-name" type="text">
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  id: "event-name",
  name: "event-name",
  label: {
    text: "What is the name of the event?",
    classes: "govuk-label--l",
    isPageHeading: true
  }
}) }}
```

### With hint text

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="event-name">
    Event name
  </label>
  <div id="event-name-hint" class="govuk-hint">
    The name you'll use on all promotional materials.
  </div>
  <input class="govuk-input" id="event-name" name="event-name" type="text" aria-describedby="event-name-hint">
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  id: "event-name",
  name: "event-name",
  label: {
    text: "Event name"
  },
  hint: {
    text: "The name you'll use on all promotional materials."
  }
}) }}
```

### With error message

#### HTML

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="event-name">
    Event name
  </label>
  <p id="event-name-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter an event name
  </p>
  <input class="govuk-input govuk-input--error" id="event-name" name="event-name" type="text" aria-describedby="event-name-error">
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  id: "event-name",
  name: "event-name",
  label: {
    text: "Event name"
  },
  errorMessage: {
    text: "Enter an event name"
  }
}) }}
```

### With fixed width

#### Nunjucks

```njk
{{ govukInput({
  id: "national-insurance-number",
  name: "national-insurance-number",
  classes: "govuk-input--width-10",
  label: {
    text: "National Insurance number"
  },
  hint: {
    text: "It's on your National Insurance card, benefit letter, payslip or P60. For example, 'QQ 12 34 56 C'."
  }
}) }}
```

### With prefix (£)

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="cost">
    What is the cost in pounds?
  </label>
  <div class="govuk-input__wrapper">
    <div class="govuk-input__prefix" aria-hidden="true">£</div>
    <input class="govuk-input govuk-input--width-5" id="cost" name="cost" type="text" spellcheck="false">
  </div>
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  id: "cost",
  name: "cost",
  classes: "govuk-input--width-5",
  spellcheck: false,
  label: {
    text: "What is the cost in pounds?"
  },
  prefix: {
    text: "£"
  }
}) }}
```

### With suffix (kg)

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="weight">
    Weight, in kilograms
  </label>
  <div class="govuk-input__wrapper">
    <input class="govuk-input govuk-input--width-5" id="weight" name="weight" type="text" spellcheck="false">
    <div class="govuk-input__suffix" aria-hidden="true">kg</div>
  </div>
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  id: "weight",
  name: "weight",
  classes: "govuk-input--width-5",
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
{{ govukInput({
  id: "email",
  name: "email",
  type: "email",
  autocomplete: "email",
  spellcheck: false,
  label: {
    text: "Email address",
    classes: "govuk-label--l",
    isPageHeading: true
  }
}) }}
```

### With pre-populated value

#### Nunjucks

```njk
{{ govukInput({
  id: "event-name",
  name: "event-name",
  label: {
    text: "Event name"
  },
  value: data["event-name"]
}) }}
```

## Nunjucks Macro Options

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
| `classes` | string | No | Classes to add to the input element. Use `govuk-input--width-N` for fixed widths. |
| `autocomplete` | string | No | The `autocomplete` attribute value. |
| `pattern` | string | No | The `pattern` attribute for client-side input validation. |
| `spellcheck` | boolean | No | Set to `false` to disable browser spell-checking. |
| `autocapitalize` | string | No | The `autocapitalize` attribute. |
| `describedBy` | string | No | Extra element IDs to include in `aria-describedby`. |
| `attributes` | object | No | HTML attributes (as key–value pairs) to add to the input. |

## Error Messages

| Situation | Error message |
|-----------|---------------|
| Field left empty | "Enter [the thing]" — for example, "Enter your full name" |
| Not in the right format | "Enter a real [thing]" — for example, "Enter a real date of birth" |
| Wrong format | "[Thing] must be [the required format]" — for example, "Date of birth must be in the past" |
| Email format invalid | "Enter an email address in the correct format, like name@example.com" |
| Specific format required | "Enter [the thing] in the format [format]" |

## Accessibility

- Always associate a `<label>` with the input using `for`/`id`.
- The macro automatically links hint text and error messages to the input via `aria-describedby`.
- Set `type` appropriately — `"email"` and `"tel"` trigger appropriate on-screen keyboards on mobile and support autofill.
- Set `autocomplete` for name, address, and payment fields to help users with autofill and password managers.
- Set `spellcheck="false"` for inputs where spell-checking is unhelpful — email addresses, reference numbers, codes, usernames.
- Prefix and suffix elements use `aria-hidden="true"` — make sure the label or hint conveys the unit in text (for example, "Cost in pounds" rather than "Cost" when using a £ prefix).

## Do and Do not

**Do:**
- Use the narrowest appropriate width for the expected content.
- Set `type`, `autocomplete`, and `inputmode` appropriately.
- Disable spell-checking for non-word inputs.
- Use `isPageHeading: true` when the label is the main page heading.

**Do not:**
- Do not use a text input for multi-line responses — use textarea.
- Do not use a text input for passwords — use the password input component.
- Do not use full-width inputs for short data like postcodes, years, or codes.
- Do not use a text input when a constrained input (radios, select, date input) would be more appropriate.

## Related Components / Patterns

- [Textarea](../textarea/SKILLS.md) — for multi-line text input
- [Password Input](../password-input/SKILLS.md) — for password entry
- [Date Input](../date-input/SKILLS.md) — for date entry
- [Character Count](../character-count/SKILLS.md) — for inputs with a character limit
- [Error Message](../error-message/SKILLS.md)
- [Error Summary](../error-summary/SKILLS.md)
