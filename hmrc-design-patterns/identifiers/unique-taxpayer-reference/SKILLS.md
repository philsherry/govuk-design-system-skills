---
category: patterns
description: Ask users for their Unique Taxpayer Reference (UTR), using a single text input with the correct format hint and validation.
keywords:
  - "UTR"
  - "Unique Taxpayer Reference"
  - "Self Assessment"
  - "Corporation Tax"
  - "tax return"
  - "tax reference"
last-reviewed: "2026-04-03"
name: Unique Taxpayer Reference
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/unique-taxpayer-reference/"
subcategory: identifiers
---

# Unique Taxpayer Reference

> Ask users for their Unique Taxpayer Reference (UTR), using a single text input with the correct format hint and validation.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/unique-taxpayer-reference/

## Overview

The Unique Taxpayer Reference (UTR) pattern helps you collect a UTR from users. HMRC issues a UTR to every individual or company that registers for Self Assessment or Corporation Tax. It acts as the main identifier for a taxpayer's record within HMRC systems.

A UTR is a 10-digit number — for example, 1234567890. Users can find their UTR on tax returns, payment reminders, or letters from HMRC. Because a UTR contains only digits, set `inputmode="numeric"` and `pattern="[0-9]*"` on the input to show a numeric keyboard on mobile devices.

Because a UTR identifies a specific taxpayer, services should ask for it only when they need to look up or verify a tax record with HMRC.

## When to use this pattern

- When your service needs to identify a taxpayer's Self Assessment or Corporation Tax record.
- When your service processes tax returns, payments, or related transactions.
- When your service needs to verify a user's tax registration with HMRC.

## When not to use this pattern

- Do not ask for a UTR if the service does not need to interact with the taxpayer's Self Assessment or Corporation Tax record.
- Do not use a UTR as a general-purpose identifier for individuals — use the National Insurance number where appropriate.
- Do not ask for a UTR when a company registration number would meet the need.

## How it works

### Single text input

Use a single text input for the UTR. Do not split it into separate fields or groups.

### Format hint

Tell users the expected format with a hint: "This is 10 numbers, like 1234567890. You can find it on your tax return or letters from HMRC."

The hint serves two purposes: it tells users where to find their UTR and shows them the expected format.

### Width

Use the `govuk-input--width-10` class. A UTR is exactly 10 digits, which fits within a width-10 input.

### Validation

- Accept the UTR with or without spaces.
- Strip all spaces and non-digit characters before validation.
- Validate that the UTR contains exactly 10 digits.
- Do not accept letters or special characters.

### inputmode and pattern

Set `inputmode="numeric"` and `pattern="[0-9]*"` on the input element. This tells mobile browsers to show a numeric keyboard, which makes entry faster and reduces errors since UTRs contain only digits.

### spellcheck

Set `spellcheck="false"` to prevent browsers from marking the digits as spelling errors.

### autocomplete

Do not set `autocomplete="on"` for UTR fields — browser autofill does not recognise this format.

## Code Examples

### Default

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="unique-taxpayer-reference">
    Unique Taxpayer Reference (UTR)
  </label>
  <div id="unique-taxpayer-reference-hint" class="govuk-hint">
    This is 10 numbers, like 1234567890. You can find it on your tax return
    or letters from HMRC.
  </div>
  <input
    class="govuk-input govuk-input--width-10"
    id="unique-taxpayer-reference"
    name="uniqueTaxpayerReference"
    type="text"
    inputmode="numeric"
    pattern="[0-9]*"
    spellcheck="false"
    autocomplete="off"
    aria-describedby="unique-taxpayer-reference-hint"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "Unique Taxpayer Reference (UTR)"
  },
  hint: {
    text: "This is 10 numbers, like 1234567890. You can find it on your tax return or letters from HMRC."
  },
  classes: "govuk-input--width-10",
  id: "unique-taxpayer-reference",
  name: "uniqueTaxpayerReference",
  inputmode: "numeric",
  pattern: "[0-9]*",
  spellcheck: false,
  autocomplete: "off"
}) }}
```

### As page heading

#### HTML

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="unique-taxpayer-reference">
      What is your Unique Taxpayer Reference?
    </label>
  </h1>
  <div id="unique-taxpayer-reference-hint" class="govuk-hint">
    This is 10 numbers, like 1234567890. You can find it on your tax return
    or letters from HMRC.
  </div>
  <input
    class="govuk-input govuk-input--width-10"
    id="unique-taxpayer-reference"
    name="uniqueTaxpayerReference"
    type="text"
    inputmode="numeric"
    pattern="[0-9]*"
    spellcheck="false"
    autocomplete="off"
    aria-describedby="unique-taxpayer-reference-hint"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "What is your Unique Taxpayer Reference?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "This is 10 numbers, like 1234567890. You can find it on your tax return or letters from HMRC."
  },
  classes: "govuk-input--width-10",
  id: "unique-taxpayer-reference",
  name: "uniqueTaxpayerReference",
  inputmode: "numeric",
  pattern: "[0-9]*",
  spellcheck: false,
  autocomplete: "off"
}) }}
```

### With error message

#### HTML

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="unique-taxpayer-reference">
    Unique Taxpayer Reference (UTR)
  </label>
  <div id="unique-taxpayer-reference-hint" class="govuk-hint">
    This is 10 numbers, like 1234567890. You can find it on your tax return
    or letters from HMRC.
  </div>
  <p id="unique-taxpayer-reference-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter a Unique Taxpayer Reference in the correct format
  </p>
  <input
    class="govuk-input govuk-input--error govuk-input--width-10"
    id="unique-taxpayer-reference"
    name="uniqueTaxpayerReference"
    type="text"
    inputmode="numeric"
    pattern="[0-9]*"
    spellcheck="false"
    autocomplete="off"
    aria-describedby="unique-taxpayer-reference-hint unique-taxpayer-reference-error"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "Unique Taxpayer Reference (UTR)"
  },
  hint: {
    text: "This is 10 numbers, like 1234567890. You can find it on your tax return or letters from HMRC."
  },
  classes: "govuk-input--width-10",
  id: "unique-taxpayer-reference",
  name: "uniqueTaxpayerReference",
  inputmode: "numeric",
  pattern: "[0-9]*",
  spellcheck: false,
  autocomplete: "off",
  errorMessage: {
    text: "Enter a Unique Taxpayer Reference in the correct format"
  }
}) }}
```

## Error Messages

### If the field is empty

- "Enter your Unique Taxpayer Reference"

### If the format is invalid

- "Enter a Unique Taxpayer Reference in the correct format"

Include an example in the error message if it helps users understand the format:

- "Enter a Unique Taxpayer Reference that is 10 numbers, like 1234567890"

### If the UTR contains letters or special characters

- "Unique Taxpayer Reference must contain only numbers"

## Accessibility

- Use a single text input rather than separate fields — a single field is easier to use and more accessible.
- Set `inputmode="numeric"` and `pattern="[0-9]*"` to show a numeric keyboard on mobile devices.
- Set `spellcheck="false"` to prevent browsers from flagging digits as spelling errors.
- Use `autocomplete="off"` to prevent browsers from autofilling this field with unrelated data.
- Always associate a visible label with the input via the `for`/`id` pairing.
- Associate hint text and error messages with the input using `aria-describedby`.
- Use the `govuk-input--width-10` class to set an appropriate width that signals the expected input length to users.

## Do and Do not

**Do:**
- Use a single text input for the UTR.
- Show the expected format in the hint, for example "1234567890".
- Tell users where to find their UTR (tax return, letters from HMRC).
- Accept UTRs with or without spaces.
- Strip non-digit characters before validation.
- Set `inputmode="numeric"` and `pattern="[0-9]*"`.
- Set `spellcheck="false"`.
- Use `govuk-input--width-10` to size the input.

**Do not:**
- Do not split the UTR into separate inputs or groups.
- Do not allow browser autofill — use `autocomplete="off"`.
- Do not reject UTRs that include accidental spaces.
- Do not use `type="number"` — use `type="text"` with `inputmode="numeric"` instead, to avoid unwanted browser behaviour with leading zeros or spinner controls.

## Related Components / Patterns

- [../../../govuk-design-system/components/text-input/SKILLS.md](../../../govuk-design-system/components/text-input/SKILLS.md)
- [../../../govuk-design-system/components/error-message/SKILLS.md](../../../govuk-design-system/components/error-message/SKILLS.md)
- [../../../govuk-design-system/components/error-summary/SKILLS.md](../../../govuk-design-system/components/error-summary/SKILLS.md)
- [../accounts-office-reference/SKILLS.md](../accounts-office-reference/SKILLS.md)
- [../employer-paye-reference/SKILLS.md](../employer-paye-reference/SKILLS.md)
- [../../../govuk-design-system/patterns/ask-users-for/national-insurance-numbers/SKILLS.md](../../../govuk-design-system/patterns/ask-users-for/national-insurance-numbers/SKILLS.md)
