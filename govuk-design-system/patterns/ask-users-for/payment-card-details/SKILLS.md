---
category: patterns
description: Use this pattern when your service needs to take a payment by debit or credit card — ideally by directing users to GOV.UK Pay rather than building your own card collection.
govuk-frontend: "5.x"
keywords:
  - "card"
  - "card number"
  - "card payment"
  - "debit credit"
  - "details"
  - "payment"
  - "payment card details"
last-reviewed: "2026-04-03"
name: Payment Card Details
source: "https://design-system.service.gov.uk/patterns/payment-card-details/"
subcategory: ask-users-for
---

# Payment Card Details

> Use this pattern when your service needs to take a payment by debit or credit card — ideally by directing users to GOV.UK Pay rather than building your own card collection.
> Source: https://design-system.service.gov.uk/patterns/payment-card-details/

## Overview

The payment card details pattern covers how to collect debit or credit card information from users to take a payment. This is a security-sensitive operation subject to PCI DSS (Payment Card Industry Data Security Standard) compliance requirements.

The GOV.UK Design System strongly recommends using [GOV.UK Pay](https://www.payments.service.gov.uk/) rather than building your own card payment flow. GOV.UK Pay is a cross-government payment platform that handles PCI DSS compliance, fraud checking, and 3D Secure authentication. It provides a tested, accessible, and secure payment experience out of the box.

If for some reason you cannot use GOV.UK Pay and must build your own card payment form, this pattern provides guidance on how to collect card details in a way that is usable and accessible.

## When to use this pattern

- When your service needs to take a payment from a user by debit or credit card.
- When you are building a card payment form and cannot use GOV.UK Pay.

## When not to use this pattern

- Do not build your own card payment form if you can use GOV.UK Pay — it handles PCI DSS compliance and provides a much more secure implementation.
- Do not use this pattern for collecting bank account details for BACS payments — use the [bank details pattern](../bank-details/SKILLS.md) instead.
- Do not store raw card details on your own servers unless you have full PCI DSS Level 1 certification.

## How it works

### Strongly recommend GOV.UK Pay

Before building your own card form, investigate [GOV.UK Pay](https://www.payments.service.gov.uk/). GOV.UK Pay is available to central government departments and a wide range of public sector organisations, and handles:

- PCI DSS compliance
- 3D Secure (Strong Customer Authentication)
- Fraud prevention
- Refunds
- More than one payment method

### If you must build your own form

The typical fields for a card payment form are:

1. **Name on card** — the cardholder's name as it appears on the card
2. **Card number** — 13 to 19 digits depending on the card type; typically 16 digits for Visa and Mastercard
3. **Expiry date** — month and year
4. **Security code (CVV/CVC)** — 3 digits for Visa/Mastercard/Maestro, 4 digits for American Express

### Card number

Use a single text input. Set `inputmode="numeric"` (not `type="number"`) to trigger a numeric keyboard on mobile without the restrictions of the number input type. Use the `autocomplete="cc-number"` attribute.

Format the card number as the user types (adding a space every 4 digits) if your JavaScript supports it, but always strip non-digit characters before submitting.

Use a width that accommodates the longest expected card number format: `govuk-input--width-20` is appropriate for most card numbers.

### Expiry date

Ask for the expiry date using two separate inputs: one for the month (2 digits) and one for the year (2 or 4 digits). This is more reliable than a single input that users must format in a specific way.

Label them "Month" and "Year". Use `autocomplete="cc-exp-month"` and `autocomplete="cc-exp-year"` respectively.

Set `inputmode="numeric"` on both fields.

### Security code

Use a text input. Set `inputmode="numeric"`. Use `autocomplete="cc-csc"`.

Add hint text explaining where to find the security code — for example, "The last 3 digits on the back of the card" or "The 4 digits on the front of an American Express card".

### Card type detection

Consider detecting the card type from the first 4 digits of the card number and displaying the card brand logo or name to reassure users. This is optional but improves usability.

## Code examples

### Full payment card form

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="card-holder-name">
    Name on card
  </label>
  <input
    class="govuk-input"
    id="card-holder-name"
    name="cardHolderName"
    type="text"
    autocomplete="cc-name"
    spellcheck="false"
  >
</div>

<div class="govuk-form-group">
  <label class="govuk-label" for="card-number">
    Card number
  </label>
  <input
    class="govuk-input govuk-input--width-20"
    id="card-number"
    name="cardNumber"
    type="text"
    inputmode="numeric"
    autocomplete="cc-number"
  >
</div>

<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" role="group" aria-describedby="expiry-hint">
    <legend class="govuk-fieldset__legend">
      Expiry date
    </legend>
    <div id="expiry-hint" class="govuk-hint">
      For example, 11 / 27
    </div>
    <div class="govuk-date-input">
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="expiry-month">
            Month
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            id="expiry-month"
            name="expiryMonth"
            type="text"
            inputmode="numeric"
            autocomplete="cc-exp-month"
          >
        </div>
      </div>
      <div class="govuk-date-input__item">
        <div class="govuk-form-group">
          <label class="govuk-label govuk-date-input__label" for="expiry-year">
            Year
          </label>
          <input
            class="govuk-input govuk-date-input__input govuk-input--width-2"
            id="expiry-year"
            name="expiryYear"
            type="text"
            inputmode="numeric"
            autocomplete="cc-exp-year"
          >
        </div>
      </div>
    </div>
  </fieldset>
</div>

<div class="govuk-form-group">
  <label class="govuk-label" for="card-security-code">
    Security code
  </label>
  <div id="card-security-code-hint" class="govuk-hint">
    The last 3 digits on the back of the card
  </div>
  <input
    class="govuk-input govuk-input--width-5"
    id="card-security-code"
    name="cardSecurityCode"
    type="text"
    inputmode="numeric"
    autocomplete="cc-csc"
    aria-describedby="card-security-code-hint"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "Name on card"
  },
  id: "card-holder-name",
  name: "cardHolderName",
  autocomplete: "cc-name",
  spellcheck: false
}) }}

{{ govukInput({
  label: {
    text: "Card number"
  },
  classes: "govuk-input--width-20",
  id: "card-number",
  name: "cardNumber",
  inputmode: "numeric",
  autocomplete: "cc-number"
}) }}

{{ govukDateInput({
  id: "expiry",
  namePrefix: "expiry",
  fieldset: {
    legend: {
      text: "Expiry date"
    }
  },
  hint: {
    text: "For example, 11 / 27"
  },
  items: [
    {
      classes: "govuk-input--width-2",
      name: "month",
      label: { text: "Month" },
      autocomplete: "cc-exp-month"
    },
    {
      classes: "govuk-input--width-2",
      name: "year",
      label: { text: "Year" },
      autocomplete: "cc-exp-year"
    }
  ]
}) }}

{{ govukInput({
  label: {
    text: "Security code"
  },
  hint: {
    text: "The last 3 digits on the back of the card"
  },
  classes: "govuk-input--width-5",
  id: "card-security-code",
  name: "cardSecurityCode",
  inputmode: "numeric",
  autocomplete: "cc-csc"
}) }}
```

### With error messages

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "Card number"
  },
  classes: "govuk-input--width-20",
  id: "card-number",
  name: "cardNumber",
  inputmode: "numeric",
  autocomplete: "cc-number",
  errorMessage: {
    text: "Enter your card number"
  }
}) }}
```

## Error messages

### Name on card

- If empty: "Enter the name on your card"

### Card number

- If empty: "Enter your card number"
- If too short: "Enter your card number in full"
- If non-numeric: "Enter your card number using only numbers"
- If not a valid card number (Luhn check fails): "Enter a valid card number"

### Expiry date

- If month empty: "Expiry date must include a month"
- If year empty: "Expiry date must include a year"
- If both empty: "Enter the expiry date on your card"
- If expired: "Your card has expired. Enter a new card number"
- If invalid date: "Enter a real expiry date"

### Security code

- If empty: "Enter the security code on your card"
- If wrong length: "Enter a valid security code"
- If non-numeric: "Enter a valid security code"

## Accessibility

- Use `inputmode="numeric"` (not `type="number"`) for card number and security code fields to trigger a numeric keyboard on mobile while allowing leading zeros and non-numeric paste.
- Use the correct `autocomplete` values (`cc-name`, `cc-number`, `cc-exp-month`, `cc-exp-year`, `cc-csc`) to support browser autofill and password managers.
- Wrap the expiry date in a `<fieldset>` with a `<legend>` to give screen readers the context that the two fields belong together.
- All inputs must have visible, associated labels.
- Hint text and error messages must link to their input via `aria-describedby`.
- Set `spellcheck="false"` on name fields.

## Do and do not

**Do:**
- Use GOV.UK Pay if available to your service.
- Use `inputmode="numeric"` for card number, expiry, and security code fields.
- Use the correct `autocomplete` attribute values for each field.
- Wrap the expiry date in a fieldset with a legend.
- Accept card numbers with or without spaces and strip non-digits before processing.
- Perform a Luhn algorithm check on the card number client-side or server-side.
- Provide hint text about where to find the security code.

**Do not:**
- Do not use `type="number"` for any card detail field.
- Do not store raw card details on your server without PCI DSS compliance.
- Do not use a single combined expiry date field — use separate month and year inputs.
- Do not disable copy and paste — users with password managers need it.
- Do not ask for the card's PIN — this is never required for a card-not-present transaction.

## Related components and patterns

- [../../components/text-input/SKILLS.md](../../../components/text-input/SKILLS.md)
- [../../components/date-input/SKILLS.md](../../../components/date-input/SKILLS.md)
- [../../components/error-message/SKILLS.md](../../../components/error-message/SKILLS.md)
- [../../components/error-summary/SKILLS.md](../../../components/error-summary/SKILLS.md)
- [../bank-details/SKILLS.md](../bank-details/SKILLS.md)
