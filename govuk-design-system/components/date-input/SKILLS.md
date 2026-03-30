---
category: components
description: A component for collecting a date in day, month, and year fields.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Date Input
---

# Date Input

> A component for collecting a date in day, month, and year fields.
> Source: https://design-system.service.gov.uk/components/date-input/
---

## Overview

The date input component provides three separate text inputs for day, month, and year. Use this approach for most dates that users type in, such as dates of birth or dates of past events, because this is simpler and more accessible than alternatives like a date picker.

The component wraps the three inputs in a `<fieldset>` with a `<legend>` that acts as the label for the group. Each individual input has its own visible label ("Day", "Month", "Year"). You can apply error highlighting to specific fields within the group — for example, highlighting only the "Month" and "Year" inputs if those are the ones the user filled in incorrectly.

The component uses the `govuk-date-input` class and sets appropriate widths: 2-character inputs for day and month, and 4-character for year.

## When to use this component

Use the date input component when asking for a date that the user will know, such as a date of birth, an event date, or a date from a document. It works well when users need to type a date rather than select one from a calendar.

Use it when you need the full date (day, month, year). If you need only part of the date (for example, a month and year), you can customise the items array to include only the relevant fields.

## When not to use this component

Do not use the date input component for asking about dates in the distant future or for booking-style interactions where a calendar picker may be more appropriate and where seeing available dates in context helps users.

Do not use a date picker (calendar widget) for memorable dates — date pickers are harder to use with a keyboard and do not suit GOV.UK services.

## How it works

The three inputs sit inside a `<fieldset class="govuk-fieldset">`. The `namePrefix` parameter prefixes each input's `name` and `id` attributes — for example, `namePrefix: "dob"` produces inputs named `dob-day`, `dob-month`, and `dob-year`.

Apply error states by passing `govuk-input--error` in the `classes` of specific item objects, and by wrapping the whole fieldset in `govuk-form-group--error`. The `errorMessage` parameter controls the error text displayed above the inputs.

Each input uses `inputmode="numeric"` and appropriate `autocomplete` attributes (for example, `bday-day`, `bday-month`, `bday-year` for dates of birth) to improve usability on mobile devices and in autofill contexts.

## Code Examples

### Default / Basic

#### HTML

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-hint">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        What is your date of birth?
      </h1>
    </legend>
    <div id="dob-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <div class="govuk-date-input" id="dob">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-day">Day</label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            id="dob-day"
            name="dob-day"
            type="text"
            inputmode="numeric"
            autocomplete="bday-day"
          >
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month">Month</label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            id="dob-month"
            name="dob-month"
            type="text"
            inputmode="numeric"
            autocomplete="bday-month"
          >
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year">Year</label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-4"
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
{{ govukDateInput({
  id: "dob",
  namePrefix: "dob",
  fieldset: {
    legend: {
      text: "What is your date of birth?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  items: [
    {
      name: "day",
      classes: "govuk-input--width-2",
      autocomplete: "bday-day"
    },
    {
      name: "month",
      classes: "govuk-input--width-2",
      autocomplete: "bday-month"
    },
    {
      name: "year",
      classes: "govuk-input--width-4",
      autocomplete: "bday-year"
    }
  ]
}) }}
```

### With error on all fields

#### Nunjucks

```njk
{{ govukDateInput({
  id: "dob",
  namePrefix: "dob",
  fieldset: {
    legend: {
      text: "What is your date of birth?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  errorMessage: {
    text: "Enter your date of birth"
  },
  items: [
    {
      name: "day",
      classes: "govuk-input--width-2 govuk-input--error"
    },
    {
      name: "month",
      classes: "govuk-input--width-2 govuk-input--error"
    },
    {
      name: "year",
      classes: "govuk-input--width-4 govuk-input--error"
    }
  ]
}) }}
```

### With error on specific fields only

#### Nunjucks

```njk
{{ govukDateInput({
  id: "passport-issued",
  namePrefix: "passport-issued",
  fieldset: {
    legend: {
      text: "When was your passport issued?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "For example, 27 3 2007"
  },
  errorMessage: {
    text: "The date your passport was issued must include a month and year"
  },
  items: [
    {
      name: "day",
      classes: "govuk-input--width-2"
    },
    {
      name: "month",
      classes: "govuk-input--width-2 govuk-input--error"
    },
    {
      name: "year",
      classes: "govuk-input--width-4 govuk-input--error"
    }
  ]
}) }}
```

### With pre-filled values

#### Nunjucks

```njk
{{ govukDateInput({
  id: "dob",
  namePrefix: "dob",
  fieldset: {
    legend: {
      text: "What is your date of birth?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "For example, 31 3 1980"
  },
  items: [
    {
      name: "day",
      classes: "govuk-input--width-2",
      value: "5"
    },
    {
      name: "month",
      classes: "govuk-input--width-2",
      value: "11"
    },
    {
      name: "year",
      classes: "govuk-input--width-4",
      value: "1990"
    }
  ]
}) }}
```

### Month and year only

#### Nunjucks

```njk
{{ govukDateInput({
  id: "credit-card-expiry",
  namePrefix: "credit-card-expiry",
  fieldset: {
    legend: {
      text: "What is your card's expiry date?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "On your card it shows MM/YY, for example 01/27"
  },
  items: [
    {
      name: "month",
      label: { text: "Month" },
      classes: "govuk-input--width-2",
      autocomplete: "cc-exp-month"
    },
    {
      name: "year",
      label: { text: "Year" },
      classes: "govuk-input--width-2",
      autocomplete: "cc-exp-year"
    }
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
| items[].classes | string | No | Classes for the input. Use `govuk-input--width-2` / `govuk-input--width-4` and `govuk-input--error`. |
| items[].attributes | object | No | HTML attributes for the input. |
| items[].autocomplete | string | No | `autocomplete` attribute value. |
| fieldset | object | No | Fieldset object. Accepts `legend` and `describedBy`. |
| hint | object | No | Hint shown below the legend. |
| errorMessage | object | No | Error message with `text` or `html`. |
| formGroup | object | No | Options for the outer form group wrapper. |
| classes | string | No | Classes for the date input container. |
| attributes | object | No | HTML attributes for the date input container. |

## Error Messages

Apply errors to specific fields by adding `govuk-input--error` to the item's `classes`. Use the `errorMessage` parameter for the error text.

Recommended error messages:

- "Enter [date]" — when all fields are empty.
- "Enter a real [date]" — when the date is not valid (e.g. 31 February).
- "[Date] must be in the past" / "[Date] must be in the future" — when the date does not meet a constraint.
- "[Date] must include a [day/month/year]" — when specific fields are missing.
- "[Date] must be on or after [date]" / "[Date] must be on or before [date]" — for range constraints.

Only highlight the fields that contain an error. If the day is missing, only apply `govuk-input--error` to the day input.

## Accessibility

A `<fieldset role="group">` with a `<legend>` wraps the date input group so screen readers announce the question before each individual input label ("Day", "Month", "Year").

Using `inputmode="numeric"` shows the numeric keyboard on mobile devices without restricting the input to numbers alone (which would prevent users from entering leading zeros or pasting formatted dates).

The `autocomplete` attributes enable browser autofill for known date types, reducing input effort for users.

Avoid using `type="number"` for date fields — it introduces spin controls, disallows leading zeros, and behaves inconsistently across browsers and assistive technologies.

## Do / Don't

**Do:**
- Use `namePrefix` to automatically generate consistent `name` and `id` attributes.
- Include a hint with a concrete example date in the format you expect (e.g. "For example, 31 3 1980").
- Only highlight the specific fields that are invalid, not the entire group.
- Use appropriate `autocomplete` values to support browser autofill.

**Don't:**
- Don't use `type="number"` for day, month, or year inputs.
- Don't validate dates in the browser using JavaScript alone — always validate server-side.
- Don't use a date picker (calendar widget) for memorable dates.
- Don't omit the fieldset and legend when displaying all three inputs together.

## Related Components / Patterns

- [Fieldset](https://design-system.service.gov.uk/components/fieldset/) — the wrapping element for grouped inputs.
- [Text input](https://design-system.service.gov.uk/components/text-input/) — for single-line inputs.
- [Error message](https://design-system.service.gov.uk/components/error-message/) — for inline validation errors.
- [Dates pattern](https://design-system.service.gov.uk/patterns/dates/) — guidance on asking users for dates in different contexts.
