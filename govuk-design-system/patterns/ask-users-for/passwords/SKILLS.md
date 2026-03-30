---
category: patterns
description: Use this pattern when your service requires users to create or enter a password, following best practices for security, usability, and accessibility.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Passwords
subcategory: ask-users-for
---

# Passwords

> Use this pattern when your service requires users to create or enter a password, following best practices for security, usability, and accessibility.
> Source: https://design-system.service.gov.uk/patterns/passwords/

---

## Overview

The passwords pattern covers how to ask users to create a new password and how to ask them to enter an existing password to sign in. Password handling is a balance between security and usability — overly complex requirements frustrate users and lead to poor security behaviours such as writing passwords down.

The GOV.UK Design System recommends following the National Cyber Security Centre (NCSC) guidance on passwords, which prioritises password length over complexity and discourages frequent forced resets. It also recommends the password input component, which provides a "show password" toggle to help users verify what they have typed.

Most services that need accounts should consider whether they genuinely need passwords, or whether they can use a "magic link" (a one-time link sent by email) or a one-time passcode instead.

## When to use this pattern

- When your service requires users to create or sign in to an account using a password.
- When a password is the most appropriate authentication method for your service's security requirements.

## When not to use this pattern

- Do not implement passwords unless your service genuinely requires account creation.
- Consider using a magic link (one-time link sent by email) or one-time passcode instead, as these are easier for users and reduce the risk of weak passwords.
- Do not implement your own identity and access management — use an established identity provider where possible.

## How it works

### Creating a password

When asking users to create a password:

- Tell users the rules for creating a password. The minimum recommended requirements are at least 8 characters. You can also allow or require longer passwords — NCSC recommends allowing passwords of at least 64 characters.
- Do not set overly complex rules (mixing upper and lowercase, numbers, symbols) — these do not improve security in any meaningful way and frustrate users.
- Show a "confirm password" field to help users catch typos.
- Use the password input component with a "show password" toggle on both the password and confirm password fields.
- Do not disable copy and paste — users with password managers need to be able to paste passwords.
- Check new passwords against a list of common or compromised passwords.

### Signing in

When asking users to sign in with a password:

- Use the password input component with a "show password" toggle.
- Do not use a "remember me" checkbox unless your service's security requirements permit it.
- Provide a "Forgot your password?" link near the password field.

### Confirming a password

Always ask users to enter their password twice when creating it. Label the fields:
- "Password"
- "Confirm password"

### Password input component

The GOV.UK Frontend password input component (`govukPasswordInput`) renders a text input with a "Show" button that toggles between `type="password"` (masked) and `type="text"` (visible). See the [password input component](../../components/password-input/SKILLS.md) for full details.

### Telling users about password requirements

Show the requirements as hint text before the password field, not after. Keep requirements minimal — for example: "Your password must be at least 8 characters long."

Do not use "strength meters" unless your research shows they help your users. Strength meters can be misleading and the visual feedback can be distracting.

## Code Examples

### Create a password

#### HTML

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="password">
      Create a password
    </label>
  </h1>
  <div id="password-hint" class="govuk-hint">
    Your password must be at least 8 characters long.
  </div>
  <div class="govuk-password-input" data-module="govuk-password-input">
    <div class="govuk-form-group govuk-password-input__form-group">
      <input
        class="govuk-input govuk-password-input__input govuk-js-password-input-input"
        id="password"
        name="password"
        type="password"
        autocomplete="new-password"
        spellcheck="false"
        aria-describedby="password-hint"
      >
      <button
        type="button"
        class="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle"
        data-module="govuk-button"
        aria-controls="password"
        aria-label="Show password"
      >
        Show
      </button>
    </div>
  </div>
</div>

<div class="govuk-form-group">
  <label class="govuk-label" for="password-confirm">
    Confirm password
  </label>
  <div class="govuk-password-input" data-module="govuk-password-input">
    <div class="govuk-form-group govuk-password-input__form-group">
      <input
        class="govuk-input govuk-password-input__input govuk-js-password-input-input"
        id="password-confirm"
        name="passwordConfirm"
        type="password"
        autocomplete="new-password"
        spellcheck="false"
      >
      <button
        type="button"
        class="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle"
        data-module="govuk-button"
        aria-controls="password-confirm"
        aria-label="Show password"
      >
        Show
      </button>
    </div>
  </div>
</div>
```

#### Nunjucks

```njk
{{ govukPasswordInput({
  label: {
    text: "Create a password",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "Your password must be at least 8 characters long."
  },
  id: "password",
  name: "password",
  autocomplete: "new-password"
}) }}

{{ govukPasswordInput({
  label: {
    text: "Confirm password"
  },
  id: "password-confirm",
  name: "passwordConfirm",
  autocomplete: "new-password"
}) }}
```

### Sign in

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label govuk-label--l" for="password">
    Password
  </label>
  <div class="govuk-password-input" data-module="govuk-password-input">
    <div class="govuk-form-group govuk-password-input__form-group">
      <input
        class="govuk-input govuk-password-input__input govuk-js-password-input-input"
        id="password"
        name="password"
        type="password"
        autocomplete="current-password"
        spellcheck="false"
      >
      <button
        type="button"
        class="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle"
        data-module="govuk-button"
        aria-controls="password"
        aria-label="Show password"
      >
        Show
      </button>
    </div>
  </div>
</div>
<p class="govuk-body">
  <a class="govuk-link" href="/forgot-password">Forgot your password?</a>
</p>
```

#### Nunjucks

```njk
{{ govukPasswordInput({
  label: {
    text: "Password",
    classes: "govuk-label--l"
  },
  id: "password",
  name: "password",
  autocomplete: "current-password"
}) }}

<p class="govuk-body">
  <a class="govuk-link" href="/forgot-password">Forgot your password?</a>
</p>
```

### With error message

#### Nunjucks

```njk
{{ govukPasswordInput({
  label: {
    text: "Create a password",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "Your password must be at least 8 characters long."
  },
  id: "password",
  name: "password",
  autocomplete: "new-password",
  errorMessage: {
    text: "Enter a password"
  }
}) }}
```

## Error Messages

### Creating a password

- If empty: "Enter a password"
- If too short: "Password must be at least 8 characters"
- If the two passwords do not match: "Your passwords do not match"
- If the password is too common: "Enter a less common password"

### Signing in

- If the password is wrong: "Enter a correct password" (or, better, a generic "The email address or password you entered does not match our records" to avoid revealing whether the email exists)
- If empty: "Enter your password"

## Accessibility

- Use the `govukPasswordInput` component which provides the "show/hide" toggle with appropriate ARIA labelling.
- Set `autocomplete="new-password"` when creating a password and `autocomplete="current-password"` when signing in. This allows password managers to work as expected.
- Set `spellcheck="false"` to prevent browsers from marking password characters as spelling errors.
- Do not disable copy and paste — users with password managers must be able to paste.
- The "show" toggle button must have an `aria-label` that describes its action (for example, "Show password" / "Hide password") and its `aria-controls` must reference the input's `id`.
- Link error messages to the input via `aria-describedby`.

## Do / Don't

**Do:**
- Use the `govukPasswordInput` component with the show/hide toggle.
- Set `autocomplete="new-password"` for new password fields and `autocomplete="current-password"` for sign-in fields.
- Set `spellcheck="false"`.
- Use a minimum length of at least 8 characters.
- Allow long passwords (at least 64 characters).
- Ask users to confirm a new password.
- Provide a "Forgot your password?" link near the sign-in password field.
- Check new passwords against common or compromised password lists (for example, HIBP).
- Allow users to paste into password fields.

**Don't:**
- Don't require a mix of uppercase, lowercase, numbers, and symbols — this does not improve security in any meaningful way and frustrates users.
- Don't force regular password changes unless there is evidence of compromise.
- Don't disable copy and paste.
- Don't show the password in plain text by default — use the show/hide toggle.
- Don't use a "remember me" checkbox unless appropriate for your service's security model.
- Don't display generic error messages that reveal whether someone has registered an email address (to avoid user enumeration attacks).

## Related Components / Patterns

- [../../components/password-input/SKILLS.md](../../components/password-input/SKILLS.md)
- [../../components/text-input/SKILLS.md](../../components/text-input/SKILLS.md)
- [../../components/error-message/SKILLS.md](../../components/error-message/SKILLS.md)
- [../../components/error-summary/SKILLS.md](../../components/error-summary/SKILLS.md)
- [../email-addresses/SKILLS.md](../email-addresses/SKILLS.md)
- [../../help-users-to/create-accounts/SKILLS.md](../../help-users-to/create-accounts/SKILLS.md)
- [../../help-users-to/create-a-username/SKILLS.md](../../help-users-to/create-a-username/SKILLS.md)
