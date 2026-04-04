---
category: patterns
description: Ask users for their Accounts Office reference, using a single text input with the correct format hint and validation.
keywords:
  - "accounts office"
  - "accounts office reference"
  - "AOR"
  - "PAYE"
  - "employer"
  - "P30"
  - "P32"
  - "payslip booklet"
last-reviewed: "2026-04-03"
name: Accounts Office reference
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/accounts-office-reference/"
subcategory: identifiers
---

# Accounts Office reference

> Ask users for their Accounts Office reference, using a single text input with the correct format hint and validation.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/accounts-office-reference/

## Overview

The Accounts Office reference pattern helps you collect an Accounts Office reference from users. HMRC assigns this reference to identify an employer's PAYE scheme. Employers need it when making PAYE payments or corresponding with HMRC about their payroll.

An Accounts Office reference is a 13-character string: 3 digits, the letter "P", another letter, then 8 digits — for example, 123PX00000000. Users can find their Accounts Office reference on their P30 or P32 payslip booklet, or in correspondence from HMRC.

Because this reference identifies a specific PAYE scheme, services should ask for it only when they need to link a transaction or query to a particular employer's PAYE account.

## When to use this pattern

- When your service needs to identify an employer's PAYE scheme.
- When your service processes employer payments or PAYE-related transactions.
- When your service needs to look up or verify a PAYE account with HMRC.

## When not to use this pattern

- Do not ask for an Accounts Office reference if the service does not need to interact with the employer's PAYE scheme.
- Do not use this reference as a general-purpose identifier for employers — use the Employer PAYE reference if you need to identify the employer rather than the PAYE account.
- Do not confuse this with the Employer PAYE reference, which has a different format and purpose.

## How it works

### Single text input

Use a single text input for the Accounts Office reference. Do not split it into separate fields.

### Format hint

Tell users the expected format with a hint: "This is 13 characters, like 123PX00000000. You can find it on your P30 or P32 payslip booklet."

The hint serves two purposes: it tells users where to find the reference and shows them the expected format.

### Width

Use the `govuk-input--width-20` class to give the input enough space for the 13-character reference, allowing for any accidental extra characters or spaces.

### Validation

- Accept the reference with or without spaces.
- Convert to uppercase before validation.
- Validate against the pattern: 3 digits, the letter "P", one letter (A–Z), then 8 digits.
- The total length must be 13 characters (excluding spaces).
- Strip spaces before storing or processing.

### spellcheck

Set `spellcheck="false"` to prevent browsers from marking the reference characters as spelling errors.

### autocomplete

Do not set `autocomplete="on"` for Accounts Office reference fields — browser autofill does not recognise this format.

## Code examples

### Default

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="accounts-office-reference">
    Accounts Office reference
  </label>
  <div id="accounts-office-reference-hint" class="govuk-hint">
    This is 13 characters, like 123PX00000000. You can find it on your
    P30 or P32 payslip booklet.
  </div>
  <input
    class="govuk-input govuk-input--width-20"
    id="accounts-office-reference"
    name="accountsOfficeReference"
    type="text"
    spellcheck="false"
    autocomplete="off"
    aria-describedby="accounts-office-reference-hint"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "Accounts Office reference"
  },
  hint: {
    text: "This is 13 characters, like 123PX00000000. You can find it on your P30 or P32 payslip booklet."
  },
  classes: "govuk-input--width-20",
  id: "accounts-office-reference",
  name: "accountsOfficeReference",
  spellcheck: false,
  autocomplete: "off"
}) }}
```

### As page heading

#### HTML

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="accounts-office-reference">
      What is your Accounts Office reference?
    </label>
  </h1>
  <div id="accounts-office-reference-hint" class="govuk-hint">
    This is 13 characters, like 123PX00000000. You can find it on your
    P30 or P32 payslip booklet.
  </div>
  <input
    class="govuk-input govuk-input--width-20"
    id="accounts-office-reference"
    name="accountsOfficeReference"
    type="text"
    spellcheck="false"
    autocomplete="off"
    aria-describedby="accounts-office-reference-hint"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "What is your Accounts Office reference?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "This is 13 characters, like 123PX00000000. You can find it on your P30 or P32 payslip booklet."
  },
  classes: "govuk-input--width-20",
  id: "accounts-office-reference",
  name: "accountsOfficeReference",
  spellcheck: false,
  autocomplete: "off"
}) }}
```

### With error message

#### HTML

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="accounts-office-reference">
    Accounts Office reference
  </label>
  <div id="accounts-office-reference-hint" class="govuk-hint">
    This is 13 characters, like 123PX00000000. You can find it on your
    P30 or P32 payslip booklet.
  </div>
  <p id="accounts-office-reference-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter an Accounts Office reference in the correct format
  </p>
  <input
    class="govuk-input govuk-input--error govuk-input--width-20"
    id="accounts-office-reference"
    name="accountsOfficeReference"
    type="text"
    spellcheck="false"
    autocomplete="off"
    aria-describedby="accounts-office-reference-hint accounts-office-reference-error"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "Accounts Office reference"
  },
  hint: {
    text: "This is 13 characters, like 123PX00000000. You can find it on your P30 or P32 payslip booklet."
  },
  classes: "govuk-input--width-20",
  id: "accounts-office-reference",
  name: "accountsOfficeReference",
  spellcheck: false,
  autocomplete: "off",
  errorMessage: {
    text: "Enter an Accounts Office reference in the correct format"
  }
}) }}
```

## Error messages

### If the field is empty

- "Enter your Accounts Office reference"

### If the format is invalid

- "Enter an Accounts Office reference in the correct format"

Include an example in the error message if it helps users understand the format:

- "Enter an Accounts Office reference in the correct format, like 123PX00000000"

## Accessibility

- Use a single text input rather than separate fields — a single field is easier to use and more accessible.
- Set `spellcheck="false"` to prevent browsers from flagging characters as spelling errors.
- Use `autocomplete="off"` to prevent browsers from autofilling this field with unrelated data.
- Always associate a visible label with the input via the `for`/`id` pairing.
- Associate hint text and error messages with the input using `aria-describedby`.
- Use the `govuk-input--width-20` class to set an appropriate width that signals the expected input length to users.

## Do and do not

**Do:**
- Use a single text input for the Accounts Office reference.
- Show the expected format in the hint, for example "123PX00000000".
- Tell users where to find their reference (P30 or P32 payslip booklet).
- Accept references with or without spaces, and in upper or lowercase.
- Normalise (strip spaces, convert to uppercase) before validation.
- Set `spellcheck="false"`.
- Use `govuk-input--width-20` to size the input.

**Do not:**
- Do not use separate inputs for each part of the reference.
- Do not allow browser autofill — use `autocomplete="off"`.
- Do not reject references that include accidental spaces.
- Do not confuse this with the Employer PAYE reference.

## Related components and patterns

- [../../../govuk-design-system/components/text-input/SKILLS.md](../../../govuk-design-system/components/text-input/SKILLS.md)
- [../../../govuk-design-system/components/error-message/SKILLS.md](../../../govuk-design-system/components/error-message/SKILLS.md)
- [../../../govuk-design-system/components/error-summary/SKILLS.md](../../../govuk-design-system/components/error-summary/SKILLS.md)
- [../employer-paye-reference/SKILLS.md](../employer-paye-reference/SKILLS.md)
- [../unique-taxpayer-reference/SKILLS.md](../unique-taxpayer-reference/SKILLS.md)
