---
category: patterns
description: Ask users for their Economic Operators Registration and Identification (EORI) number, using a single text input with the correct format hint and validation.
keywords:
  - "EORI"
  - "EORI number"
  - "Economic Operators Registration and Identification"
  - "customs"
  - "trade"
  - "import"
  - "export"
last-reviewed: "2026-04-03"
name: EORI numbers
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/eori-numbers/"
subcategory: identifiers
---

# EORI numbers

> Ask users for their Economic Operators Registration and Identification (EORI) number, using a single text input with the correct format hint and validation.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/eori-numbers/

## Overview

The EORI number pattern helps you collect an Economic Operators Registration and Identification (EORI) number from users. HMRC assigns EORI numbers to businesses that import or export goods. Customs authorities across the world use EORI numbers to identify traders.

A UK EORI number starts with "GB" followed by 12 digits — for example, GB123456789012. Some older EORI numbers may include extra characters at the end. Users can find their EORI number on correspondence from HMRC or through the EORI checker on GOV.UK.

Because an EORI number identifies a specific trading entity, services should ask for it only when they need to process customs declarations, import or export transactions, or trade-related queries.

## When to use this pattern

- When your service processes customs declarations or trade documentation.
- When your service needs to verify a trader's registration with HMRC.
- When your service handles import or export transactions that require trader identification.

## When not to use this pattern

- Do not ask for an EORI number if the service does not involve customs or international trade.
- Do not use an EORI number as a general-purpose business identifier — use the company registration number or VAT registration number where appropriate.
- Do not ask for an EORI number when a VAT registration number alone would meet the need.

## How it works

### Single text input

Use a single text input for the EORI number. Do not split the country prefix and digits into separate fields.

### Format hint

Tell users the expected format with a hint: "This starts with GB followed by 12 digits, like GB123456789012. You can find it on letters from HMRC or by using the EORI checker on GOV.UK."

The hint serves two purposes: it tells users where to find the number and shows them the expected format.

### Width

Use the `govuk-input--width-20` class to give the input enough space for a UK EORI number (14 characters for GB + 12 digits), plus room for older formats that may have extra characters.

### Validation

- Accept the number with or without spaces.
- Convert to uppercase before validation.
- Validate that a UK EORI number starts with "GB".
- Validate that the "GB" prefix follows with 12 digits for standard UK EORI numbers.
- Allow for older EORI numbers that may have extra characters after the 12 digits.
- Strip spaces before storing or processing.

### spellcheck

Set `spellcheck="false"` to prevent browsers from marking the EORI number characters as spelling errors.

### autocomplete

Do not set `autocomplete="on"` for EORI number fields — browser autofill does not recognise this format.

## Code Examples

### Default

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="eori-number">
    EORI number
  </label>
  <div id="eori-number-hint" class="govuk-hint">
    This starts with GB followed by 12 digits, like GB123456789012.
    You can find it on letters from HMRC or by using the EORI checker on GOV.UK.
  </div>
  <input
    class="govuk-input govuk-input--width-20"
    id="eori-number"
    name="eoriNumber"
    type="text"
    spellcheck="false"
    autocomplete="off"
    aria-describedby="eori-number-hint"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "EORI number"
  },
  hint: {
    text: "This starts with GB followed by 12 digits, like GB123456789012. You can find it on letters from HMRC or by using the EORI checker on GOV.UK."
  },
  classes: "govuk-input--width-20",
  id: "eori-number",
  name: "eoriNumber",
  spellcheck: false,
  autocomplete: "off"
}) }}
```

### As page heading

#### HTML

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="eori-number">
      What is your EORI number?
    </label>
  </h1>
  <div id="eori-number-hint" class="govuk-hint">
    This starts with GB followed by 12 digits, like GB123456789012.
    You can find it on letters from HMRC or by using the EORI checker on GOV.UK.
  </div>
  <input
    class="govuk-input govuk-input--width-20"
    id="eori-number"
    name="eoriNumber"
    type="text"
    spellcheck="false"
    autocomplete="off"
    aria-describedby="eori-number-hint"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "What is your EORI number?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "This starts with GB followed by 12 digits, like GB123456789012. You can find it on letters from HMRC or by using the EORI checker on GOV.UK."
  },
  classes: "govuk-input--width-20",
  id: "eori-number",
  name: "eoriNumber",
  spellcheck: false,
  autocomplete: "off"
}) }}
```

### With error message

#### HTML

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="eori-number">
    EORI number
  </label>
  <div id="eori-number-hint" class="govuk-hint">
    This starts with GB followed by 12 digits, like GB123456789012.
    You can find it on letters from HMRC or by using the EORI checker on GOV.UK.
  </div>
  <p id="eori-number-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter an EORI number in the correct format
  </p>
  <input
    class="govuk-input govuk-input--error govuk-input--width-20"
    id="eori-number"
    name="eoriNumber"
    type="text"
    spellcheck="false"
    autocomplete="off"
    aria-describedby="eori-number-hint eori-number-error"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "EORI number"
  },
  hint: {
    text: "This starts with GB followed by 12 digits, like GB123456789012. You can find it on letters from HMRC or by using the EORI checker on GOV.UK."
  },
  classes: "govuk-input--width-20",
  id: "eori-number",
  name: "eoriNumber",
  spellcheck: false,
  autocomplete: "off",
  errorMessage: {
    text: "Enter an EORI number in the correct format"
  }
}) }}
```

## Error Messages

### If the field is empty

- "Enter your EORI number"

### If the format is invalid

- "Enter an EORI number in the correct format"

Include an example in the error message if it helps users understand the format:

- "Enter an EORI number in the correct format, like GB123456789012"

### If the country prefix is missing

- "Enter an EORI number that starts with GB"

## Accessibility

- Use a single text input rather than separate fields for the country prefix and digits — a single field is easier to use and more accessible.
- Set `spellcheck="false"` to prevent browsers from flagging characters as spelling errors.
- Use `autocomplete="off"` to prevent browsers from autofilling this field with unrelated data.
- Always associate a visible label with the input via the `for`/`id` pairing.
- Associate hint text and error messages with the input using `aria-describedby`.
- Use the `govuk-input--width-20` class to set an appropriate width that signals the expected input length to users.

## Do and Do not

**Do:**
- Use a single text input for the EORI number.
- Show the expected format in the hint, for example "GB123456789012".
- Tell users where to find their EORI number (letters from HMRC, EORI checker on GOV.UK).
- Accept numbers with or without spaces, and in upper or lowercase.
- Normalise (strip spaces, convert to uppercase) before validation.
- Set `spellcheck="false"`.
- Use `govuk-input--width-20` to size the input.

**Do not:**
- Do not split the country prefix and digits into separate inputs.
- Do not allow browser autofill — use `autocomplete="off"`.
- Do not reject EORI numbers that include spaces.
- Do not assume all EORI numbers are exactly 14 characters — older formats may have extra characters.

## Related Components / Patterns

- [../../../govuk-design-system/components/text-input/SKILLS.md](../../../govuk-design-system/components/text-input/SKILLS.md)
- [../../../govuk-design-system/components/error-message/SKILLS.md](../../../govuk-design-system/components/error-message/SKILLS.md)
- [../../../govuk-design-system/components/error-summary/SKILLS.md](../../../govuk-design-system/components/error-summary/SKILLS.md)
- [../vat-registration-number/SKILLS.md](../vat-registration-number/SKILLS.md)
- [../unique-taxpayer-reference/SKILLS.md](../unique-taxpayer-reference/SKILLS.md)
