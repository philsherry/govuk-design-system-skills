---
category: patterns
description: Use this pattern to collect UK bank account details, such as sort code and account number, when your service needs to make payments to users.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Bank Details
subcategory: ask-users-for
---

# Bank Details

> Use this pattern to collect UK bank account details, such as sort code and account number, when your service needs to make payments to users.
> Source: https://design-system.service.gov.uk/patterns/bank-details/

---

## Overview

The bank details pattern helps you collect UK bank account information from users — typically to make a payment or refund. The most common fields required are a sort code and an account number. Some payment types also require a building society roll number.

Collecting bank details is a sensitive operation. Users are often worried about entering their bank details into a government service, so your service should explain why you need the information and how you will use it. Security and trust are critical aspects of this pattern.

This pattern covers the most common UK bank payment method — BACS (Bankers' Automated Clearing System). If your service needs to make international payments, you will also need to collect an IBAN (International Bank Account Number) and possibly a BIC/SWIFT code, which this pattern does not cover in detail.

## When to use this pattern

- When your service needs to make a direct payment or refund to a user's bank account.
- When collecting payment information for recurring payments via Direct Debit or BACS.
- When a user needs to provide bank details to receive a benefit, grant, or financial award.

## When not to use this pattern

- Do not collect bank details unless your service has a clear and genuine need to make a payment.
- Do not collect bank details for authentication purposes — use other identity verification methods instead.
- Do not use this pattern for collecting payment card details (debit/credit cards) — use the [payment card details pattern](../payment-card-details/SKILLS.md) instead.
- Do not store bank details unless the service cannot function without them.

## How it works

### Account name

Ask for the name on the account. This helps users check they are entering the correct account details and gives your service a means of verifying ownership.

Use a text input with the label "Name on the account".

### Sort code

A UK sort code is 6 digits, typically displayed as three pairs separated by dashes (for example, 01-23-45). Ask users to enter the sort code in whatever format is natural for them — accept digits with or without spaces or dashes, and format or validate on the backend.

Use a text input with a width hint of 5 characters (to fit 6 digits plus spaces or dashes). Set `inputmode="numeric"` to trigger a numeric keyboard on mobile devices.

### Account number

A UK bank account number is between 6 and 8 digits long (most are 8 digits). Some banks use 6 or 7 digits, so do not enforce exactly 8 digits without careful research.

Use a text input with a width hint of 10 characters. Set `inputmode="numeric"`.

### Building society roll number

Only ask for a building society roll number if your service knows the user has a building society account. This field is optional for most users.

Use a text input. The roll number format varies by building society — typically up to 18 characters, alphanumeric.

### Validation

- Sort code: must be exactly 6 digits (after removing any non-digit characters).
- Account number: must be between 6 and 8 digits.
- Building society roll number: optional; validate against a permissive pattern if required.

You can use the [Modulus Checking](https://www.vocalink.com/tools/modulus-checking/) algorithm to validate that a sort code and account number combination is plausible, but this is not a guarantee the account exists or belongs to the user.

## Code Examples

### Default

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="account-name">
    Name on the account
  </label>
  <input class="govuk-input" id="account-name" name="accountName" type="text" autocomplete="name" spellcheck="false">
</div>

<div class="govuk-form-group">
  <label class="govuk-label" for="sort-code">
    Sort code
  </label>
  <div id="sort-code-hint" class="govuk-hint">
    Must be 6 digits long
  </div>
  <input class="govuk-input govuk-input--width-5" id="sort-code" name="sortCode" type="text" inputmode="numeric" aria-describedby="sort-code-hint">
</div>

<div class="govuk-form-group">
  <label class="govuk-label" for="account-number">
    Account number
  </label>
  <div id="account-number-hint" class="govuk-hint">
    Must be between 6 and 8 digits long
  </div>
  <input class="govuk-input govuk-input--width-10" id="account-number" name="accountNumber" type="text" inputmode="numeric" aria-describedby="account-number-hint">
</div>

<div class="govuk-form-group">
  <label class="govuk-label" for="roll-number">
    Building society roll number (if you have one)
  </label>
  <div id="roll-number-hint" class="govuk-hint">
    You can find it on your card, statement or passbook
  </div>
  <input class="govuk-input govuk-input--width-20" id="roll-number" name="rollNumber" type="text" aria-describedby="roll-number-hint">
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "Name on the account"
  },
  id: "account-name",
  name: "accountName",
  autocomplete: "name",
  spellcheck: false
}) }}

{{ govukInput({
  label: {
    text: "Sort code"
  },
  classes: "govuk-input--width-5",
  hint: {
    text: "Must be 6 digits long"
  },
  id: "sort-code",
  name: "sortCode",
  inputmode: "numeric"
}) }}

{{ govukInput({
  label: {
    text: "Account number"
  },
  classes: "govuk-input--width-10",
  hint: {
    text: "Must be between 6 and 8 digits long"
  },
  id: "account-number",
  name: "accountNumber",
  inputmode: "numeric"
}) }}

{{ govukInput({
  label: {
    text: "Building society roll number (if you have one)"
  },
  classes: "govuk-input--width-20",
  hint: {
    text: "You can find it on your card, statement or passbook"
  },
  id: "roll-number",
  name: "rollNumber"
}) }}
```

### With error messages

#### HTML

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="sort-code">
    Sort code
  </label>
  <div id="sort-code-hint" class="govuk-hint">
    Must be 6 digits long
  </div>
  <p id="sort-code-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter a valid sort code like 309430
  </p>
  <input class="govuk-input govuk-input--error govuk-input--width-5" id="sort-code" name="sortCode" type="text" inputmode="numeric" aria-describedby="sort-code-hint sort-code-error">
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "Sort code"
  },
  classes: "govuk-input--width-5",
  hint: {
    text: "Must be 6 digits long"
  },
  id: "sort-code",
  name: "sortCode",
  inputmode: "numeric",
  errorMessage: {
    text: "Enter a valid sort code like 309430"
  }
}) }}
```

## Error Messages

### Account name

- If empty: "Enter the name on the account"

### Sort code

- If empty: "Enter a sort code"
- If not 6 digits: "Enter a valid sort code like 309430"

### Account number

- If empty: "Enter an account number"
- If too short or too long: "Enter a valid account number like 00733445"
- If non-numeric: "Enter a valid account number like 00733445"

### Building society roll number

- If the format is invalid (when provided): "Enter a valid roll number"

## Accessibility

- Use `inputmode="numeric"` (not `type="number"`) for sort code and account number fields. This shows a numeric keyboard on mobile while allowing leading zeros and non-numeric separators.
- Do not use `type="number"` — it can strip leading zeros and adds unwanted browser UI (increment/decrement arrows).
- Set `spellcheck="false"` on the account name field to prevent browsers from flagging names as spelling errors.
- All inputs must have a visible, associated `<label>`.
- Hints and error messages must link to their input via `aria-describedby`.
- Avoid using placeholder text to convey format information — use a hint instead.

## Do / Don't

**Do:**
- Explain why you need bank details and what you will use them for.
- Use `inputmode="numeric"` for sort code and account number.
- Accept sort codes with or without dashes and spaces — strip non-digits before validating.
- Show an example of a valid sort code in the hint, for example "Must be 6 digits long" with an example like "309430".
- Show an example of a valid account number in the hint, for example "00733445".
- Mark the roll number field as optional — "(if you have one)".
- Tell users where they can find their sort code and account number (for example, on their bank card or statement).

**Don't:**
- Don't use `type="number"` for sort code or account number fields.
- Don't use the three-box pattern (three separate inputs for each pair of sort code digits) — a single input is more accessible and flexible.
- Don't collect bank details unless you have a clear need and appropriate legal basis.
- Don't validate the sort code/account number combination without informing users what went wrong.
- Don't store raw bank details in session logs or analytics.

## Related Components / Patterns

- [../../components/text-input/SKILLS.md](../../components/text-input/SKILLS.md)
- [../../components/error-message/SKILLS.md](../../components/error-message/SKILLS.md)
- [../../components/error-summary/SKILLS.md](../../components/error-summary/SKILLS.md)
- [../payment-card-details/SKILLS.md](../payment-card-details/SKILLS.md)
