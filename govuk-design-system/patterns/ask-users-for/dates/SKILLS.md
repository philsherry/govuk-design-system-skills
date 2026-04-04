---
category: patterns
description: Use this pattern to help users enter a memorable date, a date from a document, or to select a date from a range — choosing the right input type based on what kind of date you are asking for.
govuk-frontend: "5.x"
keywords:
  - "date entry"
  - "date of birth"
  - "date pattern"
  - "dates"
last-reviewed: "2026-04-03"
name: Dates
source: "https://design-system.service.gov.uk/patterns/dates/"
subcategory: ask-users-for
---

# Dates

> Use this pattern to help users enter a memorable date, a date from a document, or to select a date from a range — choosing the right input type based on what kind of date you are asking for.
> Source: https://design-system.service.gov.uk/patterns/dates/

## Overview

The dates pattern covers how to ask users for dates in a GOV.UK service. The right approach depends on the kind of date you need: a memorable date (like a date of birth), a date from a document, a date in the past or near future, or an approximate date.

The GOV.UK Design System strongly recommends using the date input component (three separate fields for day, month, and year) for most date collection scenarios. This approach is more accessible and less error-prone than a date picker for the kinds of dates typically collected in government services.

A date picker (calendar widget) suits a narrow range of use cases only, such as booking a specific appointment from a constrained set of available dates coming up soon.

## When to use this pattern

- When you need to collect a specific date from a user, such as a date of birth, passport expiry date, or start date of employment.
- When you need a date the user already knows (a memorable date or a date from a document).
- When users need to choose from a range of dates (for example, booking an appointment).

## When not to use this pattern

- Do not use the date input component for dates that users will not know from memory — instead consider showing a calendar or date range picker.
- Do not collect a date if you do not need it. Ask for a date only when the service requires it.
- Do not use a JavaScript date picker for memorable or document dates — three text fields are easier to use, especially on mobile devices.

## How it works

### Using the date input component

For most dates, use the date input component with three separate fields: day, month, and year. Use this approach for:

- Memorable dates (date of birth, wedding anniversary)
- Dates from documents (passport expiry, driving licence issue date)
- Dates in the past or distant future

The three fields help users enter dates in a consistent format without requiring them to choose a date from a picker. Users can type dates they already know much faster than they can navigate a calendar.

### Asking for approximate dates

If users might not know the exact date (for example, "When did you last visit a doctor?"), allow approximate answers. You might use:

- Month and year only (no day field)
- A text input with a hint explaining acceptable formats
- Separate questions for the level of precision available ("Do you know the exact date?")

### Asking for upcoming dates

If you need a user to pick a date from a limited set of options (for example, an appointment), consider:

- Radio buttons with the available dates listed
- A date picker (calendar) only if there are more than a handful of available dates spread across weeks or months

If using a date picker, it must be accessible and must fall back without errors if the user disables JavaScript.

### Date ranges

For date ranges (a start date and an end date), ask for the start date on one screen and the end date on the next, or use two separate date input components on the same page with clear labels. Avoid complex date-range pickers.

### Validation

- Accept dates in more than one format and convert them server-side. For example, accept "01", "1" for day and "01", "1", "Jan", "January" for month.
- Do not reject dates because of formatting alone (spaces, slashes, etc.).
- Validate that the date exists (for example, 31 February is invalid).
- Validate that the date is within an acceptable range for your service.

## Code examples

### Date of birth (memorable date)

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
          <label class="govuk-label govuk-date-input__label" for="dob-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-day" name="dob-day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month" name="dob-month" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-year" name="dob-year" type="text" inputmode="numeric">
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
  }
}) }}
```

### With error (day is missing)

#### HTML

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="dob-hint dob-error">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        What is your date of birth?
      </h1>
    </legend>
    <div id="dob-hint" class="govuk-hint">
      For example, 31 3 1980
    </div>
    <p id="dob-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Date of birth must include a day
    </p>
    <div class="govuk-date-input" id="dob">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-day">
            Day
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2 govuk-input--error" id="dob-day" name="dob-day" type="text" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-month">
            Month
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-2" id="dob-month" name="dob-month" type="text" value="9" inputmode="numeric">
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="dob-year">
            Year
          </label>
          <input class="govuk-input govuk-date-input__input govuk-input--width-4" id="dob-year" name="dob-year" type="text" value="1990" inputmode="numeric">
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
  errorMessage: {
    text: "Date of birth must include a day"
  },
  items: [
    {
      classes: "govuk-input--width-2 govuk-input--error",
      name: "day",
      label: { text: "Day" }
    },
    {
      classes: "govuk-input--width-2",
      name: "month",
      label: { text: "Month" },
      value: 9
    },
    {
      classes: "govuk-input--width-4",
      name: "year",
      label: { text: "Year" },
      value: 1990
    }
  ]
}) }}
```

### Month and year only (approximate date)

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
    text: "For example, 9 2013"
  },
  items: [
    {
      classes: "govuk-input--width-2",
      name: "month",
      label: { text: "Month" }
    },
    {
      classes: "govuk-input--width-4",
      name: "year",
      label: { text: "Year" }
    }
  ]
}) }}
```

## Error messages

Follow these patterns for error messages. Highlight only the fields that need correction — apply the error class (`govuk-input--error`) to the individual day, month, or year field(s) that contain the error.

### If the date is missing entirely

- "Enter your date of birth"
- "Enter the date someone issued the licence"

### If one or more fields are missing

- "Date of birth must include a day"
- "Date of birth must include a month"
- "Date of birth must include a year"
- "Date of birth must include a day and month"
- "Date of birth must include a day and year"
- "Date of birth must include a month and year"

### If the date is not real

- "Enter a real date of birth"
- "Date of birth must be a real date"

### If the date must be in the past

- "Date of birth must be in the past"

### If the date must be in the future

- "The date your licence expires must be in the future"

### If the date is too recent or too old

- "Date of birth must be after 1 January 1900"
- "Your date of birth must be before [date]"

### If the user enters digits where the field expects numbers

- "Date of birth must be a real date"

## Accessibility

- Wrap the three date inputs in a `<fieldset>` with a `<legend>` that describes the question. This ensures screen readers announce the question when a user tabs into the date fields.
- Set `role="group"` on the fieldset when the legend acts as the group label.
- Use `inputmode="numeric"` on all date fields to trigger the numeric keyboard on mobile without the restrictions of `type="number"`.
- Do not use `type="date"` — native date pickers are inconsistent across browsers and operating systems and can be confusing to use.
- Link the hint and error message to the fieldset using `aria-describedby` on the fieldset element.
- Only apply the error class to the specific fields that are wrong — not to all fields.
- Provide hint text with a realistic example date (for example, "For example, 31 3 1980").

## Do and do not

**Do:**
- Use three separate fields for day, month, and year.
- Use `inputmode="numeric"` on date fields.
- Show a real example date in the hint text.
- Wrap date inputs in a fieldset with a descriptive legend.
- Accept leading zeros (01 and 1 are both valid for day 1).
- Accept two-digit years and interpret them appropriately where context requires it.
- Apply the error style only to the specific incorrect fields.
- Use specific, helpful error messages that tell users what is wrong.

**Do not:**
- Do not use `type="date"` — it produces inconsistent native UI across browsers.
- Do not use a date picker (calendar widget) for memorable dates or dates from documents.
- Do not use a single text input for a date — it requires too much format enforcement.
- Do not place the hint text between the legend and the date inputs if it will interfere with the fieldset's ARIA structure.
- Do not apply error styling to fields that the user filled in as intended.
- Do not ask for a date if you only need the year or month.

## Related components and patterns

- [../../components/date-input/SKILLS.md](../../../components/date-input/SKILLS.md)
- [../../components/error-message/SKILLS.md](../../../components/error-message/SKILLS.md)
- [../../components/error-summary/SKILLS.md](../../../components/error-summary/SKILLS.md)
- [../../components/fieldset/SKILLS.md](../../../components/fieldset/SKILLS.md)
