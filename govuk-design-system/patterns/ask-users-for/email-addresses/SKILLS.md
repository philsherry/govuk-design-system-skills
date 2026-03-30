---
category: patterns
description: Use this pattern to ask users for their email address, with appropriate input settings to improve accuracy and reduce errors.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Email Addresses
subcategory: ask-users-for
---

# Email Addresses

> Use this pattern to ask users for their email address, with appropriate input settings to improve accuracy and reduce errors.
> Source: https://design-system.service.gov.uk/patterns/email-addresses/

---

## Overview

The email addresses pattern covers how to collect an email address from users. Email addresses are commonly required in government services to send confirmation messages, updates, or for account creation. Because typos in email addresses are common and hard for users to notice, this pattern provides specific guidance to reduce errors.

The pattern uses a single text input with `type="email"` and `autocomplete="email"` to help browsers autofill and check the format. It also recommends asking users to confirm their email address in services where a wrong email would have significant consequences.

For most services, you should avoid over-validating email addresses on the client side. A simple format check (contains an @ symbol) is enough for most cases — overly strict validation may reject valid addresses.

## When to use this pattern

- When your service needs to contact users by email.
- When the user needs an email to create or access an account.
- When sending confirmation or receipt emails to users.
- When your service needs an email for password reset or verification flows.

## When not to use this pattern

- Do not ask for an email address if your service does not actually send emails or use the address.
- Do not collect an email address as a form of identity verification without extra security steps.
- If email is optional in your service, make this clear by marking it as "(optional)".

## How it works

### Single email input

Use a single text input for the email address. Setting `type="email"` tells browsers to check the format and may show a keyboard with relevant characters (@ and .) on some mobile devices.

Use `autocomplete="email"` to allow browsers to autofill the field.

Set `spellcheck="false"` to prevent browsers from underlining parts of email addresses as spelling errors.

Use the full-width input (no width modifier class) since email addresses can be long and vary widely in length.

### Asking users to confirm their email address

If a wrong email address would cause significant problems (for example, the user would be unable to receive their confirmation or access their account), ask users to enter their email address twice. Show the second field on the same page as the first.

Label the second field "Confirm email address" and use `autocomplete="email"` on both fields. Do not use `autocomplete="off"` to disable autofill on the confirmation field — this is not reliable and harms usability.

On some services, instead of asking users to enter their email address twice, you may use a confirmation step: show the email address back to the user and ask them to confirm the address before proceeding.

### Tell users why you need their email address

Where the reason may not be obvious, tell users what you will use the email address for — for example, "We'll only use your email address to send you a confirmation."

### Validation

- Check the input is not empty.
- Check the input contains an @ symbol.
- Avoid over-validation — technically valid email addresses use formats that strict regex would reject.
- If you use a confirmation field, check the two values match.

## Code Examples

### Default

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="email">
    Email address
  </label>
  <div id="email-hint" class="govuk-hint">
    We'll only use your email address to send you a confirmation
  </div>
  <input class="govuk-input" id="email" name="email" type="email" autocomplete="email" spellcheck="false" aria-describedby="email-hint">
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "Email address"
  },
  hint: {
    text: "We'll only use your email address to send you a confirmation"
  },
  id: "email",
  name: "email",
  type: "email",
  autocomplete: "email",
  spellcheck: false
}) }}
```

### With confirm email address

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="email">
    Email address
  </label>
  <input class="govuk-input" id="email" name="email" type="email" autocomplete="email" spellcheck="false">
</div>

<div class="govuk-form-group">
  <label class="govuk-label" for="email-confirm">
    Confirm email address
  </label>
  <input class="govuk-input" id="email-confirm" name="emailConfirm" type="email" autocomplete="email" spellcheck="false">
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "Email address"
  },
  id: "email",
  name: "email",
  type: "email",
  autocomplete: "email",
  spellcheck: false
}) }}

{{ govukInput({
  label: {
    text: "Confirm email address"
  },
  id: "email-confirm",
  name: "emailConfirm",
  type: "email",
  autocomplete: "email",
  spellcheck: false
}) }}
```

### With error message

#### HTML

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="email">
    Email address
  </label>
  <p id="email-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter an email address in the correct format, like name@example.com
  </p>
  <input class="govuk-input govuk-input--error" id="email" name="email" type="email" autocomplete="email" spellcheck="false" aria-describedby="email-error">
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "Email address"
  },
  id: "email",
  name: "email",
  type: "email",
  autocomplete: "email",
  spellcheck: false,
  errorMessage: {
    text: "Enter an email address in the correct format, like name@example.com"
  }
}) }}
```

## Error Messages

### If the field is empty

- "Enter an email address"

### If the format is invalid

- "Enter an email address in the correct format, like name@example.com"

### If the two email addresses do not match

- "Email addresses must match"

## Accessibility

- Use `type="email"` to enable browser-level format hints and appropriate mobile keyboards.
- Set `autocomplete="email"` to allow browser autofill.
- Set `spellcheck="false"` to prevent browsers from marking email addresses as spelling errors, which can confuse users.
- Always use a visible `<label>` element — do not rely on placeholder text.
- Link hint text and error messages to the input via `aria-describedby`.
- Do not disable copy and paste on email inputs — users should be able to paste email addresses from password managers.

## Do / Don't

**Do:**
- Use `type="email"` on the input.
- Use `autocomplete="email"` to support autofill.
- Set `spellcheck="false"` to prevent false spelling corrections.
- Show a realistic example format in the error message (for example, "like name@example.com").
- Tell users why you need their email address where the reason may not be obvious.
- Ask users to confirm their email address when getting it wrong would cause significant problems.
- Allow users to paste into the email field.

**Don't:**
- Don't over-validate the format — a simple @ check is enough for most services.
- Don't use `autocomplete="off"` on confirmation fields.
- Don't prevent copy and paste.
- Don't ask for an email address that you won't use.
- Don't use placeholder text as a substitute for a label.
- Don't show the email address hint text in the input placeholder — use the `hint` component instead.

## Related Components / Patterns

- [../../components/text-input/SKILLS.md](../../components/text-input/SKILLS.md)
- [../../components/error-message/SKILLS.md](../../components/error-message/SKILLS.md)
- [../../components/error-summary/SKILLS.md](../../components/error-summary/SKILLS.md)
- [../passwords/SKILLS.md](../passwords/SKILLS.md)
- [../../help-users-to/confirm-an-email-address/SKILLS.md](../../help-users-to/confirm-an-email-address/SKILLS.md)
