---
category: patterns
description: Ask users for their Employer PAYE reference, using a single text input with the correct format hint and validation.
keywords:
  - "employer PAYE"
  - "PAYE reference"
  - "employer reference"
  - "office number"
  - "P45"
  - "P60"
  - "payroll"
last-reviewed: "2026-04-03"
name: Employer PAYE reference
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/employer-paye-reference/"
subcategory: identifiers
---

# Employer PAYE reference

> Ask users for their Employer PAYE reference, using a single text input with the correct format hint and validation.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/employer-paye-reference/

## Overview

The Employer PAYE reference pattern helps you collect an Employer PAYE reference from users. HMRC assigns this reference to every employer registered for PAYE. It links the employer to a specific HMRC office for correspondence and payments.

An Employer PAYE reference consists of a 3-digit HMRC office number, a forward slash, and an employer reference of letters and numbers (up to 10 characters) — for example, 123/AB456. Users can find this reference on a P45, P60, or in letters from HMRC.

Because this reference identifies a specific employer, services should ask for it only when they need to link a transaction or query to a particular employer's PAYE record.

## When to use this pattern

- When your service needs to identify an employer's PAYE record.
- When your service processes employment-related tax transactions.
- When your service needs to verify an employer's registration with HMRC.

## When not to use this pattern

- Do not ask for an Employer PAYE reference if the service does not need to interact with the employer's PAYE record.
- Do not use this reference to identify the PAYE scheme's payment account — use the Accounts Office reference for that purpose.
- Do not confuse this with the Accounts Office reference, which has a different format and purpose.

## How it works

### Single text input

Use a single text input for the Employer PAYE reference. Do not split the office number and employer reference into separate fields.

### Format hint

Tell users the expected format with a hint: "This is a 3-digit number, a forward slash, and up to 10 characters, like 123/AB456. You can find it on your P45, P60, or a letter from HMRC."

The hint serves two purposes: it tells users where to find the reference and shows them the expected format.

### Width

Use the `govuk-input--width-10` class. The maximum length of an Employer PAYE reference is 14 characters (3 digits + slash + 10 characters), which fits within a width-10 input.

### Validation

- Accept the reference with or without spaces around the forward slash.
- Convert letters to uppercase before validation.
- Validate that the reference starts with 3 digits.
- Validate that a forward slash separates the office number from the employer reference.
- Validate that the employer reference after the slash contains only letters and numbers, up to 10 characters.
- Strip extra spaces before storing or processing.

### spellcheck

Set `spellcheck="false"` to prevent browsers from marking the reference characters as spelling errors.

### autocomplete

Do not set `autocomplete="on"` for Employer PAYE reference fields — browser autofill does not recognise this format.

## Code Examples

### Default

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="employer-paye-reference">
    Employer PAYE reference
  </label>
  <div id="employer-paye-reference-hint" class="govuk-hint">
    This is a 3-digit number, a forward slash, and up to 10 characters,
    like 123/AB456. You can find it on your P45, P60, or a letter from HMRC.
  </div>
  <input
    class="govuk-input govuk-input--width-10"
    id="employer-paye-reference"
    name="employerPayeReference"
    type="text"
    spellcheck="false"
    autocomplete="off"
    aria-describedby="employer-paye-reference-hint"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "Employer PAYE reference"
  },
  hint: {
    text: "This is a 3-digit number, a forward slash, and up to 10 characters, like 123/AB456. You can find it on your P45, P60, or a letter from HMRC."
  },
  classes: "govuk-input--width-10",
  id: "employer-paye-reference",
  name: "employerPayeReference",
  spellcheck: false,
  autocomplete: "off"
}) }}
```

### As page heading

#### HTML

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="employer-paye-reference">
      What is your Employer PAYE reference?
    </label>
  </h1>
  <div id="employer-paye-reference-hint" class="govuk-hint">
    This is a 3-digit number, a forward slash, and up to 10 characters,
    like 123/AB456. You can find it on your P45, P60, or a letter from HMRC.
  </div>
  <input
    class="govuk-input govuk-input--width-10"
    id="employer-paye-reference"
    name="employerPayeReference"
    type="text"
    spellcheck="false"
    autocomplete="off"
    aria-describedby="employer-paye-reference-hint"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "What is your Employer PAYE reference?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "This is a 3-digit number, a forward slash, and up to 10 characters, like 123/AB456. You can find it on your P45, P60, or a letter from HMRC."
  },
  classes: "govuk-input--width-10",
  id: "employer-paye-reference",
  name: "employerPayeReference",
  spellcheck: false,
  autocomplete: "off"
}) }}
```

### With error message

#### HTML

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="employer-paye-reference">
    Employer PAYE reference
  </label>
  <div id="employer-paye-reference-hint" class="govuk-hint">
    This is a 3-digit number, a forward slash, and up to 10 characters,
    like 123/AB456. You can find it on your P45, P60, or a letter from HMRC.
  </div>
  <p id="employer-paye-reference-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter an Employer PAYE reference in the correct format
  </p>
  <input
    class="govuk-input govuk-input--error govuk-input--width-10"
    id="employer-paye-reference"
    name="employerPayeReference"
    type="text"
    spellcheck="false"
    autocomplete="off"
    aria-describedby="employer-paye-reference-hint employer-paye-reference-error"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "Employer PAYE reference"
  },
  hint: {
    text: "This is a 3-digit number, a forward slash, and up to 10 characters, like 123/AB456. You can find it on your P45, P60, or a letter from HMRC."
  },
  classes: "govuk-input--width-10",
  id: "employer-paye-reference",
  name: "employerPayeReference",
  spellcheck: false,
  autocomplete: "off",
  errorMessage: {
    text: "Enter an Employer PAYE reference in the correct format"
  }
}) }}
```

## Error Messages

### If the field is empty

- "Enter your Employer PAYE reference"

### If the format is invalid

- "Enter an Employer PAYE reference in the correct format"

Include an example in the error message if it helps users understand the format:

- "Enter an Employer PAYE reference in the correct format, like 123/AB456"

## Accessibility

- Use a single text input rather than separate fields for the office number and employer reference — a single field is easier to use and more accessible.
- Set `spellcheck="false"` to prevent browsers from flagging characters as spelling errors.
- Use `autocomplete="off"` to prevent browsers from autofilling this field with unrelated data.
- Always associate a visible label with the input via the `for`/`id` pairing.
- Associate hint text and error messages with the input using `aria-describedby`.
- Use the `govuk-input--width-10` class to set an appropriate width that signals the expected input length to users.

## Do and Do not

**Do:**
- Use a single text input for the Employer PAYE reference.
- Show the expected format in the hint, for example "123/AB456".
- Tell users where to find their reference (P45, P60, or letters from HMRC).
- Accept references with or without spaces, and in upper or lowercase.
- Normalise (strip spaces, convert to uppercase) before validation.
- Set `spellcheck="false"`.
- Use `govuk-input--width-10` to size the input.

**Do not:**
- Do not split the office number and employer reference into separate inputs.
- Do not allow browser autofill — use `autocomplete="off"`.
- Do not reject references that include extra spaces.
- Do not confuse this with the Accounts Office reference.

## Related Components / Patterns

- [../../../govuk-design-system/components/text-input/SKILLS.md](../../../govuk-design-system/components/text-input/SKILLS.md)
- [../../../govuk-design-system/components/error-message/SKILLS.md](../../../govuk-design-system/components/error-message/SKILLS.md)
- [../../../govuk-design-system/components/error-summary/SKILLS.md](../../../govuk-design-system/components/error-summary/SKILLS.md)
- [../accounts-office-reference/SKILLS.md](../accounts-office-reference/SKILLS.md)
- [../unique-taxpayer-reference/SKILLS.md](../unique-taxpayer-reference/SKILLS.md)
