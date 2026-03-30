---
category: patterns
description: Use this pattern to verify that a phone number belongs to the user by sending them a one-time passcode via text message.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Confirm a phone number
subcategory: help-users-to
---

# Confirm a phone number

> Use this pattern to verify that a phone number belongs to the user by sending them a one-time passcode via text message.
> Source: https://design-system.service.gov.uk/patterns/confirm-a-phone-number/

---

## Overview

The confirm a phone number pattern helps you verify that a phone number provided by a user is correct and belongs to them. You do this by sending a one-time passcode (OTP) or security code via SMS to the number the user provided, and then asking them to enter the code on screen.

Two common scenarios use this pattern: account registration (to verify a user's contact details) and second-factor authentication (2FA) during sign-in. In both cases, the goal is to establish that the user has access to the phone number they have given.

The pattern works best when the stakes are high enough to justify the extra friction of verification — for example, when the service will use a phone number for important communications or when it forms part of a security mechanism. For lower-stakes use cases, consider whether verification is genuinely needed.

## When to use this pattern

- When your service requires phone number verification for security purposes (for example, as a second factor for authentication).
- When confirming the user has access to the phone number they have provided before using it to send critical communications.
- When your service needs to ensure a phone number is valid and in use now.

## When not to use this pattern

- Do not use this pattern if you only need to collect a phone number without verifying it — see the "Phone numbers" pattern instead.
- Do not use it if the extra friction of verification is not justified by the security or business need.
- Do not use it as the only form of authentication — it should be part of a broader identity or authentication approach.
- Consider whether phone-based verification creates barriers for users who do not have a mobile phone or whose phone is unavailable.

## How it works

### Step 1: Collect the phone number

Ask the user for their mobile phone number using a standard text input. See the "Ask users for phone numbers" pattern for guidance on how to label, hint, and validate this field.

### Step 2: Send the code

When the user submits the phone number, send a one-time passcode to that number via SMS. The code should:

- Be numeric, typically 6 digits.
- Be time-limited (expire after a short period, typically 15 minutes).
- Be single-use (invalid after use or after the user requests a new code).
- Not contain characters that users could confuse with each other.

### Step 3: Ask the user to enter the code

Show a page asking the user to enter the code they received. The page should:

- Tell the user where you sent the code (show the last 3 digits of the phone number if appropriate, to help them identify which device to check).
- Tell them how long the code is valid for.
- Provide a way to request a new code if they did not receive one.

### Step 4: Validate the code

Check the code the user entered matches the one you sent. If it matches and is still valid, confirm the phone number as verified. If it does not match or has expired, show an error.

### Resending the code

Always give users the option to request a new code. This helps users who:
- Did not receive the first code.
- Let the code expire before entering it.
- Entered the wrong phone number (allow them to change it if appropriate).

Add rate limiting on resend requests to prevent abuse.

## Code Examples

### Enter security code page

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">Check your phone</h1>

    <p class="govuk-body">
      We've sent a text message with a security code to
      <strong>07700 9•• •••</strong>.
    </p>
    <p class="govuk-body">
      It may take a few minutes to arrive. The code will expire in 15 minutes.
    </p>

    <form method="post" novalidate>
      <div class="govuk-form-group">
        <label class="govuk-label govuk-label--m" for="security-code">
          Enter the 6-digit security code
        </label>
        <input class="govuk-input govuk-input--width-5" id="security-code" name="securityCode" type="text" inputmode="numeric" autocomplete="one-time-code" spellcheck="false">
      </div>
      <button type="submit" class="govuk-button" data-module="govuk-button">
        Continue
      </button>
    </form>

    <p class="govuk-body">
      <a href="/resend-security-code" class="govuk-link">Not received a text message?</a>
    </p>

  </div>
</div>
```

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">Check your phone</h1>

    <p class="govuk-body">
      We've sent a text message with a security code to
      <strong>07700 9•• •••</strong>.
    </p>
    <p class="govuk-body">
      It may take a few minutes to arrive. The code will expire in 15 minutes.
    </p>

    <form method="post" novalidate>
      {{ govukInput({
        label: {
          text: "Enter the 6-digit security code",
          classes: "govuk-label--m"
        },
        classes: "govuk-input--width-5",
        id: "security-code",
        name: "securityCode",
        inputmode: "numeric",
        autocomplete: "one-time-code",
        spellcheck: false
      }) }}

      {{ govukButton({
        text: "Continue"
      }) }}
    </form>

    <p class="govuk-body">
      <a href="/resend-security-code" class="govuk-link">Not received a text message?</a>
    </p>

  </div>
</div>
```

### With error — code not entered

#### HTML

```html
<div class="govuk-error-summary" data-module="govuk-error-summary">
  <div role="alert">
    <h2 class="govuk-error-summary__title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      <ul class="govuk-list govuk-error-summary__list">
        <li>
          <a href="#security-code">Enter the security code</a>
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label govuk-label--m" for="security-code">
    Enter the 6-digit security code
  </label>
  <p id="security-code-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter the security code
  </p>
  <input class="govuk-input govuk-input--width-5 govuk-input--error" id="security-code" name="securityCode" type="text" inputmode="numeric" autocomplete="one-time-code" spellcheck="false" aria-describedby="security-code-error">
</div>
```

#### Nunjucks

```njk
{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Enter the security code",
      href: "#security-code"
    }
  ]
}) }}

{{ govukInput({
  label: {
    text: "Enter the 6-digit security code",
    classes: "govuk-label--m"
  },
  classes: "govuk-input--width-5",
  id: "security-code",
  name: "securityCode",
  inputmode: "numeric",
  autocomplete: "one-time-code",
  spellcheck: false,
  errorMessage: {
    text: "Enter the security code"
  }
}) }}
```

### With error — code incorrect or expired

#### Nunjucks

```njk
{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "The security code is incorrect or has expired. Enter the code or request a new one.",
      href: "#security-code"
    }
  ]
}) }}

{{ govukInput({
  label: {
    text: "Enter the 6-digit security code",
    classes: "govuk-label--m"
  },
  classes: "govuk-input--width-5",
  id: "security-code",
  name: "securityCode",
  inputmode: "numeric",
  autocomplete: "one-time-code",
  spellcheck: false,
  errorMessage: {
    text: "The security code is incorrect or has expired. Enter the code or request a new one."
  }
}) }}
```

### Resend code page

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">Resend security code</h1>

    <p class="govuk-body">
      We'll send a new security code to <strong>07700 9•• •••</strong>.
    </p>

    <form method="post" novalidate>
      {{ govukButton({
        text: "Send a new code"
      }) }}
    </form>

    <p class="govuk-body">
      <a href="/change-phone-number" class="govuk-link">I need to use a different phone number</a>
    </p>

  </div>
</div>
```

## Error Messages

| Situation | Error message |
|-----------|---------------|
| No code entered | "Enter the security code" |
| Code is wrong format (not 6 digits) | "Enter the 6-digit security code" |
| Code is incorrect | "The security code is incorrect. Enter the code or request a new one." |
| Code has expired | "The security code has expired. Request a new code." |
| Too many attempts | "You have entered the security code incorrectly too many times. Request a new code." |

## Accessibility

- Use `inputmode="numeric"` on the security code input so mobile users get a numeric keypad.
- Use `autocomplete="one-time-code"` to allow supported devices to autofill the code from an SMS message.
- Set `spellcheck="false"` to prevent browser spellcheck from interfering with numeric codes.
- Set the input width to match the expected code length — use `govuk-input--width-5` for 6-digit codes (the width classes use character count, and the font runs slightly wider than the character count).
- Associate error messages with the input via `aria-describedby`.
- Do not auto-submit the form when the user enters the last digit — this can cause accessibility problems and trap keyboard users.

## Do / Don't

**Do:**
- Tell users where you sent the code.
- Tell users how long the code is valid for.
- Provide a way to request a new code.
- Allow users to change their phone number if they entered it incorrectly.
- Use `inputmode="numeric"` and `autocomplete="one-time-code"`.
- Add rate limiting on code requests and verification attempts.

**Don't:**
- Don't show the full phone number on screen — mask it (e.g. show only the last 3 digits) to protect user privacy.
- Don't auto-advance or auto-submit when the code is complete.
- Don't make users re-enter their phone number to request a new code.
- Don't make the code expire too fast — 15 minutes is a reasonable lower limit.
- Don't require users to include spaces or dashes in the code.

## Related Components / Patterns

- [../../../components/text-input/SKILLS.md](../../../components/text-input/SKILLS.md)
- [../../../components/error-summary/SKILLS.md](../../../components/error-summary/SKILLS.md)
- [../../../components/error-message/SKILLS.md](../../../components/error-message/SKILLS.md)
- [../confirm-an-email-address/SKILLS.md](../confirm-an-email-address/SKILLS.md)
- [../../../patterns/ask-users-for/phone-numbers/SKILLS.md](../../../patterns/ask-users-for/phone-numbers/SKILLS.md)
- [../create-accounts/SKILLS.md](../create-accounts/SKILLS.md)
