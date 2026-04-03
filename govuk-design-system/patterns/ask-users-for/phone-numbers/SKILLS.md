---
category: patterns
description: Use this pattern to ask users for a phone number, accepting a range of formats and checking only what is necessary.
govuk-frontend: "5.x"
keywords:
  - "mobile number"
  - "numbers"
  - "phone"
  - "phone field"
  - "phone numbers"
  - "telephone"
last-reviewed: "2026-04-03"
name: Phone Numbers
source: "https://design-system.service.gov.uk/patterns/phone-numbers/"
subcategory: ask-users-for
---

# Phone Numbers

> Use this pattern to ask users for a phone number, accepting a range of formats and checking only what is necessary.
> Source: https://design-system.service.gov.uk/patterns/phone-numbers/

## Overview

The phone numbers pattern covers how to collect a phone number from users. Phone numbers come in a wide range of formats — with or without international dialling codes, with or without spaces, hyphens, brackets, and extensions. This pattern recommends accepting a wide range of formats and checking only that the number is plausible, rather than enforcing a rigid format.

Only ask for a phone number if your service genuinely needs it. If you collect a phone number, tell users why — for example, "We'll only call you if there's a problem with your application."

Consider what kind of phone number you need — mobile, landline, or either. If your service sends text messages (SMS), you will need a mobile number; if it sends voice calls, either may work.

## When to use this pattern

- When your service needs to contact a user by phone to confirm an application, resolve a problem, or send an SMS notification.
- When your service uses phone as a second factor for multi-factor authentication (one-time passcode by SMS).
- When regulation or identity verification requires a phone number.

## When not to use this pattern

- Do not ask for a phone number if your service does not actually need to call or text the user.
- Do not make a phone number mandatory if email or another contact method would suffice.
- Consider making the phone number field optional if users may not have a phone number, or may be unable or unwilling to provide one.

## How it works

### Single text input

Use a single text input for the phone number. Do not split the number across separate fields for country code, area code, and number.

### Hint text

Tell users what kind of number to enter and, if relevant, whether it can be international:

- "We will only call you if we need to discuss your application"
- "For international numbers include the country code"

### Input type

Use `type="tel"` to trigger the phone keypad on mobile devices. This shows a dial pad with numbers and common phone punctuation (spaces, hyphens, plus sign).

Use `autocomplete="tel"` to allow browser and password manager autofill.

### Width

Use `govuk-input--width-20` or the full width — phone numbers vary considerably in length, especially with international codes.

### Validation

Phone number validation is difficult to get right. At minimum:

- Check the field is not empty.
- Strip non-digit characters (spaces, hyphens, brackets, dots) and check the resulting digit count is within a plausible range (typically 7–15 digits, per ITU-T E.164).
- If you need UK-only numbers, you can apply stricter validation after stripping formatting.
- Do not reject phone numbers because of how the user formats them.

### International numbers

If your service accepts international numbers:

- Accept the `+` prefix for international dialling codes.
- Do not limit the length to UK number lengths.
- Consider adding "For international numbers include the country code" to the hint.

### Mobile versus landline

If your service will only send SMS messages, make clear that you need a mobile number. Add hint text such as "Enter a mobile phone number, like 07700 900 982 or +44 7700 900 982".

If your service accepts either mobile or landline, say so: "Enter a UK phone number, like 01632 960 001, 07700 900 982 or +44 808 157 0192."

## Code Examples

### Default (any UK number)

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="phone">
    UK telephone number
  </label>
  <div id="phone-hint" class="govuk-hint">
    For international numbers include the country code
  </div>
  <input
    class="govuk-input govuk-input--width-20"
    id="phone"
    name="phone"
    type="tel"
    autocomplete="tel"
    aria-describedby="phone-hint"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "UK telephone number"
  },
  hint: {
    text: "For international numbers include the country code"
  },
  classes: "govuk-input--width-20",
  id: "phone",
  name: "phone",
  type: "tel",
  autocomplete: "tel"
}) }}
```

### As page heading

#### HTML

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="phone">
      What is your phone number?
    </label>
  </h1>
  <div id="phone-hint" class="govuk-hint">
    We'll only call you if there's a problem with your application.
  </div>
  <input
    class="govuk-input govuk-input--width-20"
    id="phone"
    name="phone"
    type="tel"
    autocomplete="tel"
    aria-describedby="phone-hint"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "What is your phone number?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "We'll only call you if there's a problem with your application."
  },
  classes: "govuk-input--width-20",
  id: "phone",
  name: "phone",
  type: "tel",
  autocomplete: "tel"
}) }}
```

### Mobile number only

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "Mobile phone number"
  },
  hint: {
    text: "Enter a UK mobile phone number, like 07700 900 982 or +44 7700 900 982"
  },
  classes: "govuk-input--width-20",
  id: "mobile",
  name: "mobile",
  type: "tel",
  autocomplete: "tel"
}) }}
```

### Optional phone number

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "Phone number (optional)"
  },
  hint: {
    text: "We'll only call you if we need to discuss your application"
  },
  classes: "govuk-input--width-20",
  id: "phone",
  name: "phone",
  type: "tel",
  autocomplete: "tel"
}) }}
```

### With error message

#### HTML

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="phone">
    UK telephone number
  </label>
  <div id="phone-hint" class="govuk-hint">
    For international numbers include the country code
  </div>
  <p id="phone-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 808 157 0192
  </p>
  <input
    class="govuk-input govuk-input--error govuk-input--width-20"
    id="phone"
    name="phone"
    type="tel"
    autocomplete="tel"
    aria-describedby="phone-hint phone-error"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "UK telephone number"
  },
  hint: {
    text: "For international numbers include the country code"
  },
  classes: "govuk-input--width-20",
  id: "phone",
  name: "phone",
  type: "tel",
  autocomplete: "tel",
  errorMessage: {
    text: "Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 808 157 0192"
  }
}) }}
```

## Error Messages

### If the field is empty (required)

- "Enter a phone number"
- "Enter a UK mobile phone number"

### If the format is invalid

- "Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 808 157 0192"
- "Enter a mobile phone number, like 07700 900 982 or +44 7700 900 982"

### If the service requires a mobile number but the user enters a landline

- "Enter a mobile phone number, like 07700 900 982"

## Accessibility

- Use `type="tel"` to trigger the phone pad on mobile devices.
- Use `autocomplete="tel"` to support browser autofill.
- Always provide a visible label.
- Link hint text and error messages to the input via `aria-describedby`.
- Include a realistic example in the hint or error message to show the expected format.
- Do not use placeholder text as a substitute for label or hint text.

## Do and Do not

**Do:**
- Use `type="tel"` on the input.
- Use `autocomplete="tel"` to support autofill.
- Accept phone numbers in a wide range of formats.
- Strip non-digit characters before validating.
- Tell users why you need their phone number.
- Include example phone numbers in your hint text.
- Make it clear if you need a mobile number specifically.
- Make the field optional if a phone number is not essential.

**Do not:**
- Do not reject numbers because of how the user formats them (spaces, hyphens, brackets).
- Do not split the phone number across separate fields for different parts.
- Do not require a phone number unless your service genuinely needs it.
- Do not use placeholder text as a substitute for label or hint text.
- Do not restrict input to only UK formats if your service accepts international numbers.
- Do not use `type="number"` for phone numbers — it strips leading zeros and disallows + signs.

## Related Components / Patterns

- [../../components/text-input/SKILLS.md](../../components/text-input/SKILLS.md)
- [../../components/error-message/SKILLS.md](../../components/error-message/SKILLS.md)
- [../../components/error-summary/SKILLS.md](../../components/error-summary/SKILLS.md)
- [../email-addresses/SKILLS.md](../email-addresses/SKILLS.md)
- [../../help-users-to/confirm-a-phone-number/SKILLS.md](../../help-users-to/confirm-a-phone-number/SKILLS.md)
