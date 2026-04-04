---
category: patterns
description: Use this pattern to verify that an email address belongs to the user by sending them a confirmation link or one-time code.
govuk-frontend: "5.x"
keywords:
  - "address"
  - "confirm an email address"
  - "email"
  - "email code"
  - "email confirmation"
  - "verify email"
last-reviewed: "2026-04-03"
name: Confirm an email address
source: "https://design-system.service.gov.uk/patterns/confirm-an-email-address/"
subcategory: help-users-to
---

# Confirm an email address

> Use this pattern to verify that an email address belongs to the user by sending them a confirmation link or one-time code.
> Source: https://design-system.service.gov.uk/patterns/confirm-an-email-address/

## Overview

The confirm an email address pattern helps you verify that an email address provided by a user is real and belongs to them. You do this by sending a confirmation link or one-time code to the email address and asking the user to act on it.

Use email verification when creating an account, when changing an account's email address, or when the email address will handle critical service communications. It protects both users and services from incorrect email addresses and reduces the risk of users missing important notifications.

Two main approaches exist: sending a confirmation link (the user clicks a link in an email to verify their address) or sending a one-time code (the user enters a code from an email into a form on screen). Links are typically simpler for users but codes work better when a user may be on a different device when completing the service.

## When to use this pattern

- When creating or updating an account where the service will use the email address to send important communications.
- When the service will use the email address to reset a password or regain account access.
- When the stakes are high enough that an incorrect email address could cause significant problems for the user.

## When not to use this pattern

- Do not use this pattern if you only need to collect an email address without verifying it — see the "Ask users for email addresses" pattern instead.
- Do not use it for lower-stakes situations where an unverified email address is sufficient.
- Do not require email verification for every interaction — only verify when there is a clear need.
- Consider whether users may not have immediate access to their email inbox when completing the service.

## How it works

### Step 1: Collect the email address

Ask the user for their email address using a standard text input. Consider asking them to enter it twice (confirm email address) to reduce the chance of typos — though research shows users sometimes copy and paste rather than type again. See the "Ask users for email addresses" pattern for full guidance.

### Step 2: Send the confirmation

Send either a confirmation link or a code to the email address:

**Confirmation link:**
- The link should be unique, time-limited (typically 24 hours), and single-use.
- The link should take the user directly to the next step of the service when clicked.
- Show a "check your email" page after the user submits their address, telling them what to do next.

**One-time code:**
- The code should be numeric, typically 6 digits.
- It should expire after a short period (typically 30 minutes to 1 hour for email codes, since email delivery can be slower than SMS).
- Show a page asking the user to enter the code.

### Step 3: Confirm the email

For links: when the user clicks the link, check that the link is valid and not expired, then confirm the email address and redirect the user to continue.

For codes: validate the code the user entered. If correct, confirm the email and continue. If not, show an error.

### Waiting for email

Tell users what to check if they cannot find the email:
- Check their spam or junk folder.
- Check the email address they entered is correct.
- Request a new link or code if needed.

## Code examples

### Check your email page (confirmation link approach)

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">Check your email</h1>

    <p class="govuk-body">
      We've sent an email to <strong>sarah.philips@example.com</strong>.
    </p>
    <p class="govuk-body">
      Click the link in the email to confirm your email address. The link will expire in 24 hours.
    </p>

    <h2 class="govuk-heading-m">If you cannot find the email</h2>
    <p class="govuk-body">
      Check your spam or junk folder.
    </p>
    <p class="govuk-body">
      If you still cannot find it, <a href="/resend-confirmation" class="govuk-link">resend the confirmation email</a>.
    </p>
    <p class="govuk-body">
      If you entered the wrong email address, <a href="/change-email" class="govuk-link">change your email address</a>.
    </p>

  </div>
</div>
```

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">Check your email</h1>

    <p class="govuk-body">
      We've sent an email to <strong>sarah.philips@example.com</strong>.
    </p>
    <p class="govuk-body">
      Click the link in the email to confirm your email address. The link will expire in 24 hours.
    </p>

    <h2 class="govuk-heading-m">If you cannot find the email</h2>
    <p class="govuk-body">
      Check your spam or junk folder.
    </p>
    <p class="govuk-body">
      If you still cannot find it, <a href="/resend-confirmation" class="govuk-link">resend the confirmation email</a>.
    </p>
    <p class="govuk-body">
      If you entered the wrong email address, <a href="/change-email" class="govuk-link">change your email address</a>.
    </p>

  </div>
</div>
```

### Enter confirmation code page (code approach)

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">Check your email</h1>

    <p class="govuk-body">
      We've sent a confirmation code to <strong>sarah.philips@example.com</strong>.
    </p>
    <p class="govuk-body">
      It may take a few minutes to arrive. The code will expire in 1 hour.
    </p>

    <form method="post" novalidate>
      <div class="govuk-form-group">
        <label class="govuk-label govuk-label--m" for="confirmation-code">
          Enter the 6-digit confirmation code
        </label>
        <input class="govuk-input govuk-input--width-5" id="confirmation-code" name="confirmationCode" type="text" inputmode="numeric" spellcheck="false">
      </div>
      <button type="submit" class="govuk-button" data-module="govuk-button">
        Continue
      </button>
    </form>

    <p class="govuk-body">
      <a href="/resend-confirmation" class="govuk-link">Not received an email?</a>
    </p>

  </div>
</div>
```

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">Check your email</h1>

    <p class="govuk-body">
      We've sent a confirmation code to <strong>sarah.philips@example.com</strong>.
    </p>
    <p class="govuk-body">
      It may take a few minutes to arrive. The code will expire in 1 hour.
    </p>

    <form method="post" novalidate>
      {{ govukInput({
        label: {
          text: "Enter the 6-digit confirmation code",
          classes: "govuk-label--m"
        },
        classes: "govuk-input--width-5",
        id: "confirmation-code",
        name: "confirmationCode",
        inputmode: "numeric",
        spellcheck: false
      }) }}

      {{ govukButton({
        text: "Continue"
      }) }}
    </form>

    <p class="govuk-body">
      <a href="/resend-confirmation" class="govuk-link">Not received an email?</a>
    </p>

  </div>
</div>
```

### With error — code not entered

#### Nunjucks

```njk
{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Enter the confirmation code",
      href: "#confirmation-code"
    }
  ]
}) }}

{{ govukInput({
  label: {
    text: "Enter the 6-digit confirmation code",
    classes: "govuk-label--m"
  },
  classes: "govuk-input--width-5",
  id: "confirmation-code",
  name: "confirmationCode",
  inputmode: "numeric",
  spellcheck: false,
  errorMessage: {
    text: "Enter the confirmation code"
  }
}) }}
```

### With error — link expired

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">This link has expired</h1>

    <p class="govuk-body">
      The link in your confirmation email has expired.
    </p>
    <p class="govuk-body">
      <a href="/resend-confirmation" class="govuk-link">Request a new confirmation email</a>.
    </p>

  </div>
</div>
```

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">This link has expired</h1>

    <p class="govuk-body">
      The link in your confirmation email has expired.
    </p>
    <p class="govuk-body">
      <a href="/resend-confirmation" class="govuk-link">Request a new confirmation email</a>.
    </p>

  </div>
</div>
```

### Ask users to enter email twice (to reduce typos)

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "Email address",
    classes: "govuk-label--m"
  },
  id: "email",
  name: "email",
  type: "email",
  autocomplete: "email",
  spellcheck: false
}) }}

{{ govukInput({
  label: {
    text: "Confirm email address",
    classes: "govuk-label--m"
  },
  id: "confirm-email",
  name: "confirmEmail",
  type: "email",
  autocomplete: "email",
  spellcheck: false
}) }}
```

## Error messages

| Situation | Error message |
|-----------|---------------|
| No code entered | "Enter the confirmation code" |
| Code is wrong format | "Enter the 6-digit confirmation code" |
| Code is incorrect | "The confirmation code is incorrect. Enter the code or request a new one." |
| Code has expired | "The confirmation code has expired. Request a new code." |
| Link has expired | Display a "This link has expired" page with a way to get a new link |
| Email addresses do not match | "Enter the same email address in both fields" |

## Accessibility

- Use `inputmode="numeric"` on code input fields so mobile users get a numeric keypad.
- Set `spellcheck="false"` on code and email inputs to prevent browser spellcheck interference.
- For email inputs, use `type="email"` and `autocomplete="email"`.
- Associate error messages with inputs via `aria-describedby`.
- For "confirm email" fields, do not prevent copy-paste — some users rely on it.
- Expiry pages must provide a clear next action — do not leave users at a dead end.

## Do and do not

**Do:**
- Tell users where you sent the email (show the email address).
- Tell users how long a link or code is valid for.
- Provide clear instructions on what to do if they cannot find the email.
- Give users a way to resend the confirmation.
- Allow users to correct a wrongly entered email address.
- Implement rate limiting on resend requests.

**Do not:**
- Do not require users to verify their email address for low-stakes interactions.
- Do not make confirmation links expire too fast — email providers can delay delivery.
- Do not leave users without a way to continue if they cannot access the email account they registered with.
- Do not block account creation entirely if email verification fails — consider allowing users to re-enter their email.
- Do not prevent copy-paste on "confirm email" fields.

## Related components and patterns

- [../../../components/text-input/SKILLS.md](../../../components/text-input/SKILLS.md)
- [../../../components/error-summary/SKILLS.md](../../../components/error-summary/SKILLS.md)
- [../../../components/error-message/SKILLS.md](../../../components/error-message/SKILLS.md)
- [../confirm-a-phone-number/SKILLS.md](../confirm-a-phone-number/SKILLS.md)
- [../../../patterns/ask-users-for/email-addresses/SKILLS.md](../../../patterns/ask-users-for/email-addresses/SKILLS.md)
- [../create-accounts/SKILLS.md](../create-accounts/SKILLS.md)
