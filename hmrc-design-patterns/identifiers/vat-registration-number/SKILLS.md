---
category: patterns
description: Ask users for their VAT registration number, using a single text input with the correct format hint and validation.
keywords:
  - "VAT"
  - "VAT number"
  - "VAT registration"
  - "VAT registration number"
  - "Value Added Tax"
  - "tax registration"
last-reviewed: "2026-04-03"
name: VAT registration number
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/vat-registration-number/"
subcategory: identifiers
---

# VAT registration number

> Ask users for their VAT registration number, using a single text input with the correct format hint and validation.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/vat-registration-number/

## Overview

The VAT registration number pattern helps you collect a VAT registration number from users. HMRC assigns a VAT registration number to every business registered for Value Added Tax. Businesses use it on invoices, VAT returns, and correspondence with HMRC.

A UK VAT registration number is 9 digits, often displayed in groups of 3 — for example, 123 456 789. Users can find their VAT registration number on their VAT registration certificate, invoices, or letters from HMRC. Accept input with or without spaces and normalise it server-side.

Because a VAT registration number identifies a specific business for tax purposes, services should ask for it only when they need to process VAT-related transactions or verify a business's VAT registration.

## When to use this pattern

- When your service processes VAT returns, payments, or refunds.
- When your service needs to verify a business's VAT registration.
- When your service handles transactions that require a VAT registration number for compliance.

## When not to use this pattern

- Do not ask for a VAT registration number if the service does not involve VAT-related transactions.
- Do not use a VAT registration number as a general-purpose business identifier — use the company registration number where appropriate.
- Do not ask for a VAT registration number when an EORI number would better meet the need for customs-related services.

## How it works

### Single text input

Use a single text input for the VAT registration number. Do not split the digits into three separate fields.

### Format hint

Tell users the expected format with a hint: "This is 9 digits, sometimes shown with spaces, like 123 456 789. You can find it on your VAT registration certificate or letters from HMRC."

The hint serves two purposes: it tells users where to find the number and shows them the expected format.

### Width

Use the `govuk-input--width-10` class. A VAT registration number is 9 digits (11 characters with spaces), which fits within a width-10 input.

### Validation

- Accept the number with or without spaces.
- Strip all spaces before validation.
- Validate that the number contains exactly 9 digits.
- Do not accept letters or special characters.
- Store the number without spaces.

### spellcheck

Set `spellcheck="false"` to prevent browsers from marking the digits as spelling errors.

### autocomplete

Do not set `autocomplete="on"` for VAT registration number fields — browser autofill does not recognise this format.

## Code Examples

### Default

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="vat-registration-number">
    VAT registration number
  </label>
  <div id="vat-registration-number-hint" class="govuk-hint">
    This is 9 digits, sometimes shown with spaces, like 123 456 789.
    You can find it on your VAT registration certificate or letters from HMRC.
  </div>
  <input
    class="govuk-input govuk-input--width-10"
    id="vat-registration-number"
    name="vatRegistrationNumber"
    type="text"
    spellcheck="false"
    autocomplete="off"
    aria-describedby="vat-registration-number-hint"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "VAT registration number"
  },
  hint: {
    text: "This is 9 digits, sometimes shown with spaces, like 123 456 789. You can find it on your VAT registration certificate or letters from HMRC."
  },
  classes: "govuk-input--width-10",
  id: "vat-registration-number",
  name: "vatRegistrationNumber",
  spellcheck: false,
  autocomplete: "off"
}) }}
```

### As page heading

#### HTML

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="vat-registration-number">
      What is your VAT registration number?
    </label>
  </h1>
  <div id="vat-registration-number-hint" class="govuk-hint">
    This is 9 digits, sometimes shown with spaces, like 123 456 789.
    You can find it on your VAT registration certificate or letters from HMRC.
  </div>
  <input
    class="govuk-input govuk-input--width-10"
    id="vat-registration-number"
    name="vatRegistrationNumber"
    type="text"
    spellcheck="false"
    autocomplete="off"
    aria-describedby="vat-registration-number-hint"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "What is your VAT registration number?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "This is 9 digits, sometimes shown with spaces, like 123 456 789. You can find it on your VAT registration certificate or letters from HMRC."
  },
  classes: "govuk-input--width-10",
  id: "vat-registration-number",
  name: "vatRegistrationNumber",
  spellcheck: false,
  autocomplete: "off"
}) }}
```

### With error message

#### HTML

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="vat-registration-number">
    VAT registration number
  </label>
  <div id="vat-registration-number-hint" class="govuk-hint">
    This is 9 digits, sometimes shown with spaces, like 123 456 789.
    You can find it on your VAT registration certificate or letters from HMRC.
  </div>
  <p id="vat-registration-number-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter a VAT registration number in the correct format
  </p>
  <input
    class="govuk-input govuk-input--error govuk-input--width-10"
    id="vat-registration-number"
    name="vatRegistrationNumber"
    type="text"
    spellcheck="false"
    autocomplete="off"
    aria-describedby="vat-registration-number-hint vat-registration-number-error"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "VAT registration number"
  },
  hint: {
    text: "This is 9 digits, sometimes shown with spaces, like 123 456 789. You can find it on your VAT registration certificate or letters from HMRC."
  },
  classes: "govuk-input--width-10",
  id: "vat-registration-number",
  name: "vatRegistrationNumber",
  spellcheck: false,
  autocomplete: "off",
  errorMessage: {
    text: "Enter a VAT registration number in the correct format"
  }
}) }}
```

## Error Messages

### If the field is empty

- "Enter your VAT registration number"

### If the format is invalid

- "Enter a VAT registration number in the correct format"

Include an example in the error message if it helps users understand the format:

- "Enter a VAT registration number that is 9 digits, like 123 456 789"

### If the number contains letters or special characters

- "VAT registration number must contain only numbers"

## Accessibility

- Use a single text input rather than separate fields for each group of digits — a single field is easier to use and more accessible.
- Set `spellcheck="false"` to prevent browsers from flagging digits as spelling errors.
- Use `autocomplete="off"` to prevent browsers from autofilling this field with unrelated data.
- Always associate a visible label with the input via the `for`/`id` pairing.
- Associate hint text and error messages with the input using `aria-describedby`.
- Use the `govuk-input--width-10` class to set an appropriate width that signals the expected input length to users.

## Do and Do not

**Do:**
- Use a single text input for the VAT registration number.
- Show the expected format in the hint, for example "123 456 789".
- Tell users where to find their VAT registration number (VAT registration certificate, letters from HMRC).
- Accept numbers with or without spaces.
- Strip spaces before validation and storage.
- Set `spellcheck="false"`.
- Use `govuk-input--width-10` to size the input.

**Do not:**
- Do not split the number into three separate inputs.
- Do not allow browser autofill — use `autocomplete="off"`.
- Do not reject numbers that include spaces.
- Do not use `type="number"` — use `type="text"` to avoid unwanted browser behaviour with spinner controls.
- Do not prefix with "GB" unless the service specifically handles EU VAT numbers.

## Related Components / Patterns

- [../../../govuk-design-system/components/text-input/SKILLS.md](../../../govuk-design-system/components/text-input/SKILLS.md)
- [../../../govuk-design-system/components/error-message/SKILLS.md](../../../govuk-design-system/components/error-message/SKILLS.md)
- [../../../govuk-design-system/components/error-summary/SKILLS.md](../../../govuk-design-system/components/error-summary/SKILLS.md)
- [../eori-numbers/SKILLS.md](../eori-numbers/SKILLS.md)
- [../unique-taxpayer-reference/SKILLS.md](../unique-taxpayer-reference/SKILLS.md)
