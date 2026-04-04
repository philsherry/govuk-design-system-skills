---
category: patterns
description: Show an error summary at the top of the page and inline error messages next to each affected field — always validate server-side, never clear user-entered values.
govuk-frontend: "5.x"
keywords:
  - "error handling"
  - "error recovery"
  - "errors"
  - "form validation"
  - "validation"
last-reviewed: "2026-04-03"
name: Help users to recover from validation errors
source: "https://design-system.service.gov.uk/patterns/validation/"
subcategory: help-users-to
---

# Help users to recover from validation errors

> Show an error summary at the top of the page and inline error messages next to each affected field — always validate server-side, never clear user-entered values.
> Source: https://design-system.service.gov.uk/patterns/validation/

## Overview

The recover from validation errors pattern describes how to handle form errors in a way that helps users understand what went wrong and correct their mistakes without losing work. Good error handling is critical to the usability and accessibility of government services — poorly written or misplaced errors cause users to abandon services, make incorrect corrections, or become confused.

The GOV.UK Design System approach uses two components together: the Error summary (`govukErrorSummary`), which appears at the top of the page and lists all errors with anchor links to the affected fields, and the Error message (`govukErrorMessage`), which appears inline directly before each affected field. Both must be present whenever a page has errors.

Write error messages in plain English, be specific about what went wrong, and tell users what to do to fix the problem. Vague, technical, or blaming error messages are not acceptable.

## When to use this pattern

- On every form page in your service where you validate user input.
- When a user submits a form with one or more invalid or missing fields.
- When displaying validation feedback after a page reload following server-side validation.

## When not to use this pattern

- Do not show error messages for fields the user has not yet interacted with — only validate on form submission.
- Do not use inline validation that triggers while the user is still typing — this is disruptive and causes accessibility issues.
- Do not show a generic "There was a problem" message without listing specific errors — always be specific about what went wrong and how to fix it.

## How it works

### Two-component approach

When a user submits a form with errors:

1. **Re-display the form** with the user's earlier entered values pre-populated in the fields so they do not have to retype everything.
2. **Add an error summary** at the top of the `<main>` content area, before the page heading. The title is "There is a problem". List all errors with anchor links (`href="#field-id"`) pointing to each affected field.
3. **Add an inline error message** directly before each affected field (after the label and hint, before the input).
4. **Apply error styling** to the affected form groups using `govuk-form-group--error` and to affected inputs using `govuk-input--error` (or the equivalent for other components).
5. **Move focus** to the error summary on page load. The `govukErrorSummary` component does this automatically when `data-module="govuk-error-summary"` is present.

### Page title

When a page has errors, prepend "Error: " to the `<title>` element. Screen reader users hear the page title first, so this ensures they are at once aware that errors are present.

```html
<title>Error: Enter your date of birth – Apply for a licence – GOV.UK</title>
```

### Error summary

The error summary:

- Has a fixed title of "There is a problem".
- Lists every error on the page with anchor links to the corresponding fields.
- Must use `role="alert"` on the inner container so screen readers announce it on page load.
- Must sit at the top of `<main>`, before the `<h1>`.

### Inline error messages

Inline error messages:

- Sit directly before the input they relate to — after the label and hint, before the input itself.
- Begin with a visually hidden `<span class="govuk-visually-hidden">Error:</span>` prefix so screen reader users understand that this is an error message.
- Link to the input via `aria-describedby`.
- Do not start with "Error:" in the visible text — the hidden prefix handles that.

### Writing good error messages

- **Be specific**: "Enter your date of birth" not "You must complete this field".
- **Be actionable**: "Enter a date in DD MM YYYY format" not "Invalid date".
- **Use "Enter"** for empty text inputs and text areas.
- **Use "Select"** for radio buttons and checkboxes with nothing selected.
- **Do not blame the user**: "Enter your full name" not "You forgot to enter your name".
- **Avoid jargon**: never use "invalid", "mandatory", "null", or technical error codes.
- **Keep it short**: one clear sentence is almost always enough.

### Server-side validation

Always validate on the server. Client-side (browser) validation can supplement server-side validation to give faster feedback, but must never replace it.

### For date inputs

Only highlight the specific date sub-fields that have errors. If the day is missing, apply the error class to the day input only — do not highlight all three inputs unless all three contain errors.

## Code examples

### Single field error (text input)

#### HTML

```html
<div class="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      <ul class="govuk-list govuk-error-summary__list">
        <li>
          <a href="#full-name">Enter your full name</a>
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="govuk-form-group govuk-form-group--error">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="full-name">
      What is your name?
    </label>
  </h1>
  <p id="full-name-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter your full name
  </p>
  <input
    class="govuk-input govuk-input--error"
    id="full-name"
    name="fullName"
    type="text"
    aria-describedby="full-name-error"
  >
</div>
```

#### Nunjucks

```njk
{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Enter your full name",
      href: "#full-name"
    }
  ]
}) }}

{{ govukInput({
  label: {
    text: "What is your name?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  id: "full-name",
  name: "fullName",
  errorMessage: {
    text: "Enter your full name"
  }
}) }}
```

### More than one field error

#### Nunjucks

```njk
{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Enter your first name",
      href: "#first-name"
    },
    {
      text: "Enter your last name",
      href: "#last-name"
    },
    {
      text: "Enter your date of birth",
      href: "#dob-day"
    }
  ]
}) }}
```

### Radio button group error (nothing selected)

#### HTML

```html
<div class="govuk-form-group govuk-form-group--error">
  <fieldset class="govuk-fieldset" aria-describedby="changed-name-error">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        Have you changed your name?
      </h1>
    </legend>
    <p id="changed-name-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Select yes if you have changed your name
    </p>
    <div class="govuk-radios" data-module="govuk-radios">
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="changed-name" name="changedName" type="radio" value="yes">
        <label class="govuk-label govuk-radios__label" for="changed-name">Yes</label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="changed-name-2" name="changedName" type="radio" value="no">
        <label class="govuk-label govuk-radios__label" for="changed-name-2">No</label>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks

```njk
{{ govukRadios({
  name: "changedName",
  fieldset: {
    legend: {
      text: "Have you changed your name?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  errorMessage: {
    text: "Select yes if you have changed your name"
  },
  items: [
    {
      value: "yes",
      text: "Yes"
    },
    {
      value: "no",
      text: "No"
    }
  ]
}) }}
```

### Date input error — specific field missing

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
    text: "For example, 27 3 1980"
  },
  errorMessage: {
    text: "Date of birth must include a day"
  },
  items: [
    {
      classes: "govuk-input--width-2 govuk-input--error",
      name: "day",
      label: "Day"
    },
    {
      classes: "govuk-input--width-2",
      name: "month",
      label: "Month",
      value: "3"
    },
    {
      classes: "govuk-input--width-4",
      name: "year",
      label: "Year",
      value: "1980"
    }
  ]
}) }}
```

## Standard Error Message Patterns

### Text inputs

| Situation | Error message |
|-----------|---------------|
| Field left empty | "Enter [thing]" — e.g. "Enter your full name" |
| Too long | "[Thing] must be [N] characters or fewer" |
| Too short | "[Thing] must be at least [N] characters" |
| Wrong format | "Enter [thing] in the correct format" |
| Out of range | "[Thing] must be between [X] and [Y]" |

### Radios and checkboxes

| Situation | Error message |
|-----------|---------------|
| Nothing selected (radios) | "Select [option] if [condition]" — e.g. "Select yes if you have changed your name" |
| Nothing selected (checkboxes) | "Select [all options that apply]" |

### Date inputs

| Situation | Error message |
|-----------|---------------|
| Date completely empty | "Enter [your/the] [date field name]" |
| Day missing | "[Date field name] must include a day" |
| Month missing | "[Date field name] must include a month" |
| Year missing | "[Date field name] must include a year" |
| Day and month missing | "[Date field name] must include a day and month" |
| Not a real date | "Enter a real [date field name]" |
| Must be in the past | "[Date field name] must be in the past" |
| Must be in the future | "[Date field name] must be in the future" |

## Accessibility

- The error summary must use `role="alert"` on the inner container so screen readers announce it when it appears on page load.
- The `data-module="govuk-error-summary"` attribute causes GOV.UK Frontend JavaScript to move keyboard focus to the error summary on page load.
- Link inline error messages to their inputs via `aria-describedby`.
- Each inline error message must include the visually hidden `<span class="govuk-visually-hidden">Error:</span>` prefix.
- Prefix the page `<title>` with "Error: " when errors are present.
- Error summary links must use fragment identifiers pointing directly to the affected field (`href="#field-id"`).
- Do not use colour alone to show an error — always use both the red border styling and the error message text.
- For date inputs, apply the error class only to the specific sub-fields that have errors, not all three fields.

## Do and do not

**Do:**
- Always show both the error summary and inline error messages together.
- Write error messages in plain English that say what to do.
- Use "Enter" for empty text inputs; use "Select" for empty radios/checkboxes.
- Repopulate all fields with the user's earlier entered values when re-displaying the form with errors.
- Prepend "Error: " to the page `<title>` when errors are present.
- Place the error summary before the `<h1>`, at the top of `<main>`.
- Link each error summary item to the specific field with `href="#field-id"`.
- Always validate on the server — client-side validation is supplementary only.

**Do not:**
- Do not show errors for fields the user has not yet attempted to fill in.
- Do not validate inline as the user types — wait until form submission.
- Do not use vague messages like "There was an error" or "Invalid input".
- Do not use technical language, error codes, or jargon such as "invalid" or "mandatory".
- Do not blame the user — "Enter your full name" not "You forgot to enter your name".
- Do not clear user-entered values when re-displaying the form with errors.
- Do not redirect to a separate error page — always show errors on the same page.
- Do not use red colouring as the sole indicator of an error.

## Related components and patterns

- [../../../components/error-summary/SKILLS.md](../../../components/error-summary/SKILLS.md)
- [../../../components/error-message/SKILLS.md](../../../components/error-message/SKILLS.md)
- [../../../components/text-input/SKILLS.md](../../../components/text-input/SKILLS.md)
- [../../../components/radios/SKILLS.md](../../../components/radios/SKILLS.md)
- [../../../components/checkboxes/SKILLS.md](../../../components/checkboxes/SKILLS.md)
- [../../../components/date-input/SKILLS.md](../../../components/date-input/SKILLS.md)
- [../../../components/textarea/SKILLS.md](../../../components/textarea/SKILLS.md)
- [../../../components/fieldset/SKILLS.md](../../../components/fieldset/SKILLS.md)
