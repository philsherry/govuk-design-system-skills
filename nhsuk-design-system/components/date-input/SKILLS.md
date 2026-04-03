---
category: components
description: A component for collecting a date in day, month, and year fields.
keywords:
  - "date"
  - "date field"
  - "date input"
  - "date picker"
  - "day month year"
  - "input"
last-reviewed: "2026-04-03"
name: Date Input
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/date-input"
---

# Date Input

> A component for collecting a date in day, month, and year fields.
> Source: https://service-manual.nhs.uk/design-system/components/date-input

## Overview

The date input component provides three separate text inputs for day, month, and year. Use this approach for most dates that users type in, such as dates of birth or appointment dates, because this approach is simpler and more accessible than a date picker.

The component wraps the three inputs in a `<fieldset>` with a `<legend>` that acts as the label for the group. Each individual input has its own visible label ("Day", "Month", "Year"). You can apply error highlighting to specific fields within the group — for example, highlighting only the "Month" and "Year" inputs if those are the ones the user filled in with the wrong data.

The component uses the `nhsuk-date-input` class and sets appropriate widths: 2-character inputs for day and month, and 4-character for year.

## When to use this component

Use the date input component when asking for a date that the user will know, such as a date of birth, an appointment date, or a date from a medical document. It works well when users need to type a date rather than select one from a calendar.

Use it when you need the full date (day, month, year). If you need only part of the date (for example, a month and year), you can customise the items array to include only the relevant fields.

## When not to use this component

Do not use the date input component for dates in the distant future or for booking-style interactions where a calendar picker may be more appropriate and where seeing available dates in context helps users.

Do not use a date picker (calendar widget) for memorable dates — date pickers are harder to use with a keyboard and do not suit NHS services.

## How it works

The three inputs sit inside a `<fieldset class="nhsuk-fieldset">`. The `namePrefix` parameter prefixes each input's `name` and `id` attributes — for example, `namePrefix: "dob"` produces inputs named `dob-day`, `dob-month`, and `dob-year`.

Apply error states by passing `nhsuk-input--error` in the `classes` of specific item objects, and by wrapping the whole fieldset in `nhsuk-form-group--error`. The `errorMessage` parameter controls the error text displayed above the inputs.

Each input uses `inputmode="numeric"` to show the numeric keyboard on mobile devices. Use appropriate `autocomplete` attributes (for example, `bday-day`, `bday-month`, `bday-year` for dates of birth).

## Code Examples

### Default / Basic

#### HTML

```html
<div class="nhsuk-form-group">
  <fieldset class="nhsuk-fieldset" role="group" aria-describedby="dob-hint">
    <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--l">
      <h1 class="nhsuk-fieldset__heading">
        What is your date of birth?
      </h1>
    </legend>
    <div id="dob-hint" class="nhsuk-hint">
      For example, 31 3 1980
    </div>
    <div class="nhsuk-date-input" id="dob">
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-day">Day</label>
          <input
            class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2"
            id="dob-day"
            name="dob-day"
            type="text"
            inputmode="numeric"
            autocomplete="bday-day"
          >
        </div>
      </div>
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-month">Month</label>
          <input
            class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-2"
            id="dob-month"
            name="dob-month"
            type="text"
            inputmode="numeric"
            autocomplete="bday-month"
          >
        </div>
      </div>
      <div class="nhsuk-date-input__item">
        <div class="nhsuk-form-group">
          <label class="nhsuk-label nhsuk-date-input__label" for="dob-year">Year</label>
          <input
            class="nhsuk-input nhsuk-date-input__input nhsuk-input--width-4"
            id="dob-year"
            name="dob-year"
            type="text"
            inputmode="numeric"
            autocomplete="bday-year"
          >
        </div>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks

```njk
{{ dateInput({
  id: "dob",
  namePrefix: "dob",
  fieldset: {
    legend: {
      text: "What is your date of birth?",
      isPageHeading: true,
      classes: "nhsuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  items: [
    {
      name: "day",
      classes: "nhsuk-input--width-2",
      autocomplete: "bday-day"
    },
    {
      name: "month",
      classes: "nhsuk-input--width-2",
      autocomplete: "bday-month"
    },
    {
      name: "year",
      classes: "nhsuk-input--width-4",
      autocomplete: "bday-year"
    }
  ]
}) }}
```

### With error on all fields

#### Nunjucks

```njk
{{ dateInput({
  id: "dob",
  namePrefix: "dob",
  fieldset: {
    legend: {
      text: "What is your date of birth?",
      isPageHeading: true,
      classes: "nhsuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  errorMessage: {
    text: "Enter your date of birth"
  },
  items: [
    { name: "day", classes: "nhsuk-input--width-2 nhsuk-input--error" },
    { name: "month", classes: "nhsuk-input--width-2 nhsuk-input--error" },
    { name: "year", classes: "nhsuk-input--width-4 nhsuk-input--error" }
  ]
}) }}
```

### With error on specific fields only

#### Nunjucks

```njk
{{ dateInput({
  id: "appointment",
  namePrefix: "appointment",
  fieldset: {
    legend: {
      text: "When is your appointment?",
      isPageHeading: true,
      classes: "nhsuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "For example, 27 3 2025"
  },
  errorMessage: {
    text: "Your appointment date must include a month and year"
  },
  items: [
    { name: "day", classes: "nhsuk-input--width-2" },
    { name: "month", classes: "nhsuk-input--width-2 nhsuk-input--error" },
    { name: "year", classes: "nhsuk-input--width-4 nhsuk-input--error" }
  ]
}) }}
```

### With pre-filled values

#### Nunjucks

```njk
{{ dateInput({
  id: "dob",
  namePrefix: "dob",
  fieldset: {
    legend: {
      text: "What is your date of birth?",
      isPageHeading: true,
      classes: "nhsuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  items: [
    { name: "day", classes: "nhsuk-input--width-2", value: "5" },
    { name: "month", classes: "nhsuk-input--width-2", value: "11" },
    { name: "year", classes: "nhsuk-input--width-4", value: "1990" }
  ]
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| id | string | Yes | Used as the `id` for the date input container. |
| namePrefix | string | No | Prefix for input `name` and `id` attributes. Produces `[namePrefix]-day`, etc. |
| items | array | No | Array of input item objects. Defaults to day (width-2), month (width-2), year (width-4). |
| items[].id | string | No | Custom `id` for the input. |
| items[].name | string | Yes | Suffix for the input `name` (e.g. `"day"`, `"month"`, `"year"`). |
| items[].label | object | No | Label object with `text` for the input. Defaults to capitalised `name`. |
| items[].value | string | No | Pre-filled value for the input. |
| items[].classes | string | No | Classes for the input. Use `nhsuk-input--width-2` / `nhsuk-input--width-4` and `nhsuk-input--error`. |
| items[].attributes | object | No | HTML attributes for the input. |
| items[].autocomplete | string | No | `autocomplete` attribute value. |
| fieldset | object | No | Fieldset object. Accepts `legend` and `describedBy`. |
| hint | object | No | Hint shown below the legend. |
| errorMessage | object | No | Error message with `text` or `html`. |
| formGroup | object | No | Options for the outer form group wrapper. |
| classes | string | No | Classes for the date input container. |
| attributes | object | No | HTML attributes for the date input container. |

## Error Messages

Apply errors to specific fields by adding `nhsuk-input--error` to the item's `classes`. Use the `errorMessage` parameter for the error text.

Recommended error messages:

- "Enter [date]" — when all fields are empty.
- "Enter a real [date]" — when the date is not valid (e.g. 31 February).
- "[Date] must be in the past" / "[Date] must be in the future" — when the date does not meet a constraint.
- "[Date] must include a [day/month/year]" — when specific fields are missing.
- "[Date] must be on or after [date]" / "[Date] must be on or before [date]" — for range constraints.

Only highlight the fields that contain an error. If the day is missing, only apply `nhsuk-input--error` to the day input.

## Accessibility

A `<fieldset role="group">` with a `<legend>` wraps the date input group so screen readers announce the question before each individual input label ("Day", "Month", "Year").

Using `inputmode="numeric"` shows the numeric keyboard on mobile devices without restricting the input to numbers alone (which would prevent users from entering leading zeros or pasting formatted dates).

The `autocomplete` attributes enable browser autofill for known date types, reducing input effort for users.

Avoid using `type="number"` for date fields — it introduces spin controls, disallows leading zeros, and behaves inconsistently across browsers and assistive technologies.

## Do and Do not

**Do:**
- Use `namePrefix` to automatically generate consistent `name` and `id` attributes.
- Include a hint with a concrete example date in the format you expect (e.g. "For example, 31 3 1980").
- Only highlight the specific fields that are invalid, not the entire group.
- Use appropriate `autocomplete` values to support browser autofill.

**Do not:**
- Do not use `type="number"` for day, month, or year inputs.
- Do not validate dates in the browser using JavaScript alone — always validate server-side.
- Do not use a date picker (calendar widget) for memorable dates.
- Do not omit the fieldset and legend when displaying all three inputs together.

## Related Components / Patterns

- [Fieldset](../fieldset/SKILLS.md) — the wrapping element for grouped inputs.
- [Text input](../text-input/SKILLS.md) — for single-line inputs.
- [Error message](../error-message/SKILLS.md) — for inline validation errors.
- [Error summary](../error-summary/SKILLS.md) — for listing errors at the top of the page.
