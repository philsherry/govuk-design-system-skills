---
category: patterns
description: Use this pattern to ask users for their National Insurance number, using a single text input with the correct format hint and validation.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: National Insurance Numbers
subcategory: ask-users-for
---

# National Insurance Numbers

> Use this pattern to ask users for their National Insurance number, using a single text input with the correct format hint and validation.
> Source: https://design-system.service.gov.uk/patterns/national-insurance-numbers/

---

## Overview

The National Insurance number (NINO) pattern helps you collect a National Insurance number from users. NINOs are unique identifiers issued to individuals in the UK to track tax and National Insurance contributions. They are commonly required in government services dealing with tax, benefits, employment, and identity verification.

A National Insurance number follows a specific format: two letters, six digits, and a final letter (A, B, C, or D) — for example, QQ 12 34 56 C. Users may enter their number in different formats (with or without spaces), so accept more than one format and normalise them server-side.

Because a NINO is sensitive personal data, services should ask for it only when genuinely necessary and should explain to users why the service needs it.

## When to use this pattern

- When your service needs to verify a user's identity using their National Insurance number.
- When your service needs to look up a user's tax, benefits, or employment records.
- When law or regulation requires a NINO for the service to function.

## When not to use this pattern

- Do not ask for a National Insurance number if you do not have a genuine legal or operational need for it.
- Do not use a National Insurance number as a general-purpose username or identifier without appropriate data protection justification.
- Do not collect a NINO alongside other identifying information unnecessarily — minimise the data you collect.

## How it works

### Single text input

Use a single text input for the National Insurance number. Do not use separate fields for each pair of characters.

### Format hint

Tell users the expected format with a hint: "It's on your National Insurance card, benefit letter, payslip or P60. For example, 'QQ 12 34 56 C'."

The hint serves two purposes: it tells users where to find their number and shows them the expected format.

### Width

Use the `govuk-input--width-10` class to set the input width to around 10 characters — wide enough to fit the formatted NINO with spaces (QQ 12 34 56 C is 13 characters including spaces, but users may enter it without spaces).

### Validation

- Accept NINOs with or without spaces.
- Convert to uppercase before validation.
- Validate against the pattern: two letters, six digits, one letter (A–D).
- The first letter cannot be D, F, I, Q, U, or V.
- The second letter cannot be D, F, I, O, Q, U, or V.
- Prefixes BG, GB, NK, KN, NT, TN, and ZZ are not valid.
- The final letter must be A, B, C, or D.

Do not display the NINO back to the user in full on screen after submission — mask it or omit it for security.

### spellcheck

Set `spellcheck="false"` to prevent browsers from marking the NINO characters as spelling errors.

### autocomplete

Do not set `autocomplete="on"` for National Insurance number fields — browser autofill is not appropriate for sensitive identifiers that users should look up from their documents.

## Code Examples

### Default

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="national-insurance-number">
    National Insurance number
  </label>
  <div id="national-insurance-number-hint" class="govuk-hint">
    It's on your National Insurance card, benefit letter, payslip or P60.
    For example, 'QQ 12 34 56 C'.
  </div>
  <input
    class="govuk-input govuk-input--width-10"
    id="national-insurance-number"
    name="nationalInsuranceNumber"
    type="text"
    spellcheck="false"
    autocomplete="off"
    aria-describedby="national-insurance-number-hint"
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
  classes: "govuk-input--width-10",
  id: "national-insurance-number",
  name: "nationalInsuranceNumber",
  spellcheck: false,
  autocomplete: "off"
}) }}
```

### As page heading

#### HTML

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="national-insurance-number">
      What is your National Insurance number?
    </label>
  </h1>
  <div id="national-insurance-number-hint" class="govuk-hint">
    It's on your National Insurance card, benefit letter, payslip or P60.
    For example, 'QQ 12 34 56 C'.
  </div>
  <input
    class="govuk-input govuk-input--width-10"
    id="national-insurance-number"
    name="nationalInsuranceNumber"
    type="text"
    spellcheck="false"
    autocomplete="off"
    aria-describedby="national-insurance-number-hint"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "What is your National Insurance number?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "It's on your National Insurance card, benefit letter, payslip or P60. For example, 'QQ 12 34 56 C'."
  },
  classes: "govuk-input--width-10",
  id: "national-insurance-number",
  name: "nationalInsuranceNumber",
  spellcheck: false,
  autocomplete: "off"
}) }}
```

### With error message

#### HTML

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="national-insurance-number">
    National Insurance number
  </label>
  <div id="national-insurance-number-hint" class="govuk-hint">
    It's on your National Insurance card, benefit letter, payslip or P60.
    For example, 'QQ 12 34 56 C'.
  </div>
  <p id="national-insurance-number-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter a National Insurance number in the correct format
  </p>
  <input
    class="govuk-input govuk-input--error govuk-input--width-10"
    id="national-insurance-number"
    name="nationalInsuranceNumber"
    type="text"
    spellcheck="false"
    autocomplete="off"
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
  classes: "govuk-input--width-10",
  id: "national-insurance-number",
  name: "nationalInsuranceNumber",
  spellcheck: false,
  autocomplete: "off",
  errorMessage: {
    text: "Enter a National Insurance number in the correct format"
  }
}) }}
```

## Error Messages

### If the field is empty

- "Enter a National Insurance number"

### If the format is invalid

- "Enter a National Insurance number in the correct format"

Include an example in the error message if it helps users understand the format:

- "Enter a National Insurance number in the correct format, like QQ 12 34 56 C"

## Accessibility

- Use a single text input rather than separate fields for each part of the NINO — a single field is easier to use and more accessible.
- Set `spellcheck="false"` to prevent browsers from flagging NI number characters as spelling errors.
- Use `autocomplete="off"` to prevent browsers from autofilling this sensitive field.
- Always associate a visible label with the input via the `for`/`id` pairing.
- Associate hint text and error messages with the input using `aria-describedby`.
- Use the `govuk-input--width-10` class to set an appropriate width that signals the expected input length to users.

## Do / Don't

**Do:**
- Use a single text input for the National Insurance number.
- Show the expected format in the hint, for example "QQ 12 34 56 C".
- Tell users where to find their National Insurance number (card, benefit letter, payslip, P60).
- Accept NINOs with or without spaces, and in upper or lowercase.
- Normalise (strip spaces, convert to uppercase) before validation.
- Set `spellcheck="false"`.
- Use `govuk-input--width-10` to size the input appropriately.

**Don't:**
- Don't use separate inputs for each part of the NINO.
- Don't allow browser autofill — use `autocomplete="off"`.
- Don't reject NINOs that use different spacing or capitalisation.
- Don't display the full NINO on screen after submission — mask it.
- Don't collect a NINO without a clear legal or operational justification.

## Related Components / Patterns

- [../../components/text-input/SKILLS.md](../../components/text-input/SKILLS.md)
- [../../components/error-message/SKILLS.md](../../components/error-message/SKILLS.md)
- [../../components/error-summary/SKILLS.md](../../components/error-summary/SKILLS.md)
- [../names/SKILLS.md](../names/SKILLS.md)
- [../dates/SKILLS.md](../dates/SKILLS.md)
