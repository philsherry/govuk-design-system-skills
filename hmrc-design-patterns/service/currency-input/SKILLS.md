---
category: patterns
description: A text input with a "£" prefix that shows users they need to enter a money amount in pounds.
hmrc-frontend: "7.x"
keywords:
  - "amount"
  - "currency"
  - "currency input"
  - "decimal"
  - "money"
  - "payment"
  - "pound"
  - "sterling"
last-reviewed: "2026-04-03"
name: Currency input
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/currency-input/"
subcategory: service
---

# Currency input

> A text input with a "£" prefix that shows users they need to enter a money amount in pounds.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/currency-input/

## Overview

The currency input pattern adds a "£" prefix to a text input to show users they need to enter an amount in pounds sterling. The `hmrcCurrencyInput` macro from hmrc-frontend renders this prefix as part of the input component.

The input uses `inputmode="decimal"` to show a numeric keyboard with a decimal point on mobile devices. This makes it easier for users to enter money amounts without switching keyboard modes.

The component accepts input with or without commas and with or without pence. The service must validate and normalise the value on the server side. Do not use `type="number"` — it causes usability problems with commas, leading zeros, and scroll-to-change behaviour.

## When to use

- When users need to enter an amount of money in pounds sterling.
- When the service needs to collect income, expenses, tax amounts, or payment values.
- When the expected input is a currency amount and the "£" prefix helps users understand what to enter.

## When not to use

- Do not use this pattern for non-sterling currencies — adapt the prefix or use a standard text input with a label that states the currency.
- Do not use this pattern for non-monetary numeric values (for example, percentages or quantities) — use a standard text input.
- Do not use this pattern if the currency could vary — ask users to select the currency first, then show the appropriate input.

## How it works

The `hmrcCurrencyInput` macro renders a GOV.UK text input with a "£" prefix element. The prefix sits to the left of the input field, visually attached to it.

Set the input width to match the expected range of values. Use `govuk-input--width-10` for most currency amounts. For smaller amounts (under £1,000), use `govuk-input--width-5`. For larger amounts, use `govuk-input--width-20`.

The input uses `inputmode="decimal"` rather than `type="number"`. This shows a numeric keyboard on mobile while keeping the input as a text field. Text inputs handle commas, spaces, and leading characters better than number inputs.

### Server-side validation

- Strip commas and spaces before processing.
- Accept values with or without pence (for example, "1000" and "1000.00" are both valid).
- If the service needs pence, accept values with one or two decimal places.
- Reject values with more than two decimal places.
- Reject negative values unless the service expects them (for example, refunds).

## Code Examples

### Default currency input

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="amount">
    How much did you earn from self-employment?
  </label>
  <div id="amount-hint" class="govuk-hint">
    Enter the amount before tax. For example, £13,500.50
  </div>
  <div class="govuk-input__wrapper">
    <div class="govuk-input__prefix" aria-hidden="true">£</div>
    <input
      class="govuk-input govuk-input--width-10"
      id="amount"
      name="amount"
      type="text"
      inputmode="decimal"
      aria-describedby="amount-hint"
    >
  </div>
</div>
```

#### Nunjucks

```njk
{{ hmrcCurrencyInput({
  id: "amount",
  name: "amount",
  label: {
    text: "How much did you earn from self-employment?"
  },
  hint: {
    text: "Enter the amount before tax. For example, £13,500.50"
  },
  classes: "govuk-input--width-10"
}) }}
```

### With error message

#### HTML

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="amount">
    How much did you earn from self-employment?
  </label>
  <div id="amount-hint" class="govuk-hint">
    Enter the amount before tax. For example, £13,500.50
  </div>
  <p id="amount-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter how much you earned from self-employment
  </p>
  <div class="govuk-input__wrapper">
    <div class="govuk-input__prefix" aria-hidden="true">£</div>
    <input
      class="govuk-input govuk-input--width-10 govuk-input--error"
      id="amount"
      name="amount"
      type="text"
      inputmode="decimal"
      aria-describedby="amount-hint amount-error"
    >
  </div>
</div>
```

#### Nunjucks

```njk
{{ hmrcCurrencyInput({
  id: "amount",
  name: "amount",
  label: {
    text: "How much did you earn from self-employment?"
  },
  hint: {
    text: "Enter the amount before tax. For example, £13,500.50"
  },
  classes: "govuk-input--width-10",
  errorMessage: {
    text: "Enter how much you earned from self-employment"
  }
}) }}
```

### Narrow width for small amounts

#### Nunjucks

```njk
{{ hmrcCurrencyInput({
  id: "fee",
  name: "fee",
  label: {
    text: "How much is the annual fee?"
  },
  classes: "govuk-input--width-5"
}) }}
```

## Error Messages

- Empty field: "Enter [what the amount is for]" — for example, "Enter how much you earned from self-employment"
- Non-numeric input: "Enter [what the amount is for] as a number" — for example, "Enter the amount as a number"
- Too many decimal places: "Enter the amount in pounds and pence, like 123.45"
- Negative value (when not expected): "Enter a positive amount"

## Accessibility

- The "£" prefix uses `aria-hidden="true"` so screen readers do not announce it separately. The label and hint text must convey that the field expects a pounds sterling amount.
- Use `inputmode="decimal"` rather than `type="number"` to avoid problems with screen readers and assistive technologies that handle number inputs inconsistently.
- The hint text should include an example value so users understand the expected format.
- Error messages must connect to the input using `aria-describedby`.
- The label must describe what the amount is for, not state "Amount" alone.

## Do and Do not

**Do:**
- Use `inputmode="decimal"` to trigger a numeric keyboard on mobile devices.
- Set the input width to match the expected range of values.
- Include a hint with an example amount (for example, "For example, £13,500.50").
- Validate and normalise input on the server side.
- Accept amounts with or without commas.
- Accept amounts with or without pence.
- Write labels that describe what the amount is for.

**Do not:**
- Do not use `type="number"` — it causes problems with commas, scroll behaviour, and assistive technologies.
- Do not rely on client-side validation alone.
- Do not restrict input to numbers on the client side — let users type freely and validate on submission.
- Do not use this pattern for non-sterling amounts without changing the prefix.
- Do not pre-fill the input with "0" or "0.00".
- Do not include "£" in the label or hint text alongside the prefix — it duplicates the visual cue.

## Related Components / Patterns

- [../../../govuk-design-system/components/text-input/SKILLS.md](../../../govuk-design-system/components/text-input/SKILLS.md)
- [../../../govuk-design-system/components/error-message/SKILLS.md](../../../govuk-design-system/components/error-message/SKILLS.md)
- [../../../govuk-design-system/components/error-summary/SKILLS.md](../../../govuk-design-system/components/error-summary/SKILLS.md)
- [../../../govuk-design-system/patterns/ask-users-for/dates/SKILLS.md](../../../govuk-design-system/patterns/ask-users-for/dates/SKILLS.md)
