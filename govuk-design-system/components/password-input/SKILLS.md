---
category: components
description: Use the password input component to help users enter their password securely, with the option to show or hide the password.
govuk-frontend: "5.x"
keywords:
  - "hide password"
  - "input"
  - "password"
  - "password field"
  - "password input"
  - "show password"
last-reviewed: "2026-04-03"
name: Password Input
source: "https://design-system.service.gov.uk/components/password-input/"
---

# Password Input

> Use the password input component to help users enter their password securely, with the option to show or hide the password.
> Source: https://design-system.service.gov.uk/components/password-input/

## Overview

The password input component provides a text input configured for password entry, with a "Show password" / "Hide password" toggle button that allows users to switch between masked and unmasked input. This helps reduce errors when typing passwords without compromising security, as the user is in control of when the password is visible.

GOV.UK Frontend v5.0.0 introduced this component. It builds on the standard text input component and adds JavaScript-driven show/hide functionality. When JavaScript is unavailable, it falls back to a standard `<input type="password">` field.

Research shows that users make more errors entering passwords when they cannot see what they are typing. The show/hide toggle addresses this without requiring the service to lower its security requirements.

## When to use this component

- When asking users to enter a password (for sign-in or account creation).
- When the service requires users to type a password and errors in entry are a known pain point.
- As part of the [passwords pattern](../../patterns/ask-users-for/passwords/SKILLS.md) or [create accounts pattern](../../patterns/help-users-to/create-accounts/SKILLS.md).

## When not to use this component

- Do not use this component for inputs that are not passwords — use the standard [Text Input component](../text-input/SKILLS.md) instead.
- If your service must follow a specific security policy that prohibits showing passwords in plain text, you may need to omit the show/hide toggle — consult your security team.

## How it works

The password input renders an `<input type="password">` wrapped with the standard GOV.UK form group structure. A "Show" button sits next to the input. When JavaScript is enabled, clicking this button toggles the input between `type="password"` (masked) and `type="text"` (visible), and the button label changes between "Show" and "Hide".

Initialise the component with `data-module="govuk-password-input"`. The JavaScript module handles the show/hide logic and manages ARIA attributes (`aria-label` on the button, and an `aria-live` region that announces the state change to screen readers).

### Autocomplete

Set the `autocomplete` attribute appropriately:
- For a **sign-in** password field: `autocomplete="current-password"`
- For a **new password** field (registration or change password): `autocomplete="new-password"`

This allows password managers to work as expected.

## Code Examples

### Default (sign-in password)

#### HTML

```html
<div class="govuk-form-group" data-module="govuk-password-input">
  <label class="govuk-label govuk-label--m" for="password">
    Password
  </label>
  <div class="govuk-input__wrapper govuk-password-input__wrapper">
    <input class="govuk-input govuk-password-input__input govuk-js-password-input-input" id="password" name="password" type="password" spellcheck="false" autocomplete="current-password" autocapitalize="none">
    <button type="button" class="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle" data-module="govuk-button" aria-controls="password" aria-label="Show password" hidden>
      Show
    </button>
  </div>
</div>
```

#### Nunjucks

```njk
{{ govukPasswordInput({
  id: "password",
  name: "password",
  label: {
    text: "Password",
    classes: "govuk-label--m"
  },
  autocomplete: "current-password"
}) }}
```

### New password (account creation)

#### Nunjucks

```njk
{{ govukPasswordInput({
  id: "new-password",
  name: "new-password",
  label: {
    text: "Create a password",
    classes: "govuk-label--m"
  },
  autocomplete: "new-password"
}) }}
```

### With hint text

#### HTML

```html
<div class="govuk-form-group" data-module="govuk-password-input">
  <label class="govuk-label govuk-label--m" for="password">
    Password
  </label>
  <div id="password-hint" class="govuk-hint">
    Your password must be at least 8 characters long.
  </div>
  <div class="govuk-input__wrapper govuk-password-input__wrapper">
    <input class="govuk-input govuk-password-input__input govuk-js-password-input-input" id="password" name="password" type="password" spellcheck="false" autocomplete="current-password" autocapitalize="none" aria-describedby="password-hint">
    <button type="button" class="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle" data-module="govuk-button" aria-controls="password" aria-label="Show password" hidden>
      Show
    </button>
  </div>
</div>
```

#### Nunjucks

```njk
{{ govukPasswordInput({
  id: "password",
  name: "password",
  label: {
    text: "Password",
    classes: "govuk-label--m"
  },
  hint: {
    text: "Your password must be at least 8 characters long."
  },
  autocomplete: "current-password"
}) }}
```

### With error

#### HTML

```html
<div class="govuk-form-group govuk-form-group--error" data-module="govuk-password-input">
  <label class="govuk-label govuk-label--m" for="password">
    Password
  </label>
  <p id="password-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter your password
  </p>
  <div class="govuk-input__wrapper govuk-password-input__wrapper">
    <input class="govuk-input govuk-input--error govuk-password-input__input govuk-js-password-input-input" id="password" name="password" type="password" spellcheck="false" autocomplete="current-password" autocapitalize="none" aria-describedby="password-error">
    <button type="button" class="govuk-button govuk-button--secondary govuk-password-input__toggle govuk-js-password-input-toggle" data-module="govuk-button" aria-controls="password" aria-label="Show password" hidden>
      Show
    </button>
  </div>
</div>
```

#### Nunjucks

```njk
{{ govukPasswordInput({
  id: "password",
  name: "password",
  label: {
    text: "Password",
    classes: "govuk-label--m"
  },
  autocomplete: "current-password",
  errorMessage: {
    text: "Enter your password"
  }
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | The `id` for the input element. |
| `name` | string | Yes | The `name` for the input element. |
| `label` | object | Yes | Options for the label element. See label macro options. |
| `hint` | object | No | Options for hint text. See hint macro options. |
| `errorMessage` | object | No | Options for the error message. If provided, the form group gets error styling. |
| `value` | string | No | Pre-populated value for the input. Avoid pre-populating password fields in most circumstances. |
| `autocomplete` | string | No | The `autocomplete` attribute. Use `"current-password"` for sign-in, `"new-password"` for new passwords. |
| `showPasswordText` | string | No | Text for the "Show" button. Defaults to `"Show"`. |
| `hidePasswordText` | string | No | Text for the "Hide" button. Defaults to `"Hide"`. |
| `showPasswordAriaLabelText` | string | No | `aria-label` for the "Show" button. Defaults to `"Show password"`. |
| `hidePasswordAriaLabelText` | string | No | `aria-label` for the "Hide" button. Defaults to `"Hide password"`. |
| `passwordShownAnnouncementText` | string | No | Announcement text for screen readers when password is shown. Defaults to `"Your password is visible"`. |
| `passwordHiddenAnnouncementText` | string | No | Announcement text for screen readers when password is hidden. Defaults to `"Your password is hidden"`. |
| `formGroup` | object | No | Options for the form group element. Can include `classes` and `attributes`. |
| `classes` | string | No | Classes to add to the input element. |
| `attributes` | object | No | HTML attributes (as key–value pairs) to add to the input element. |

### Label object options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes (or `html`) | Label text. |
| `html` | string | Yes (or `text`) | Label HTML. |
| `classes` | string | No | Classes to add to the label. |
| `isPageHeading` | boolean | No | Whether to wrap the label in an `<h1>`. Defaults to `false`. |
| `attributes` | object | No | HTML attributes to add to the label. |

### Hint object options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes (or `html`) | Hint text. |
| `html` | string | Yes (or `text`) | Hint HTML. |
| `classes` | string | No | Classes to add to the hint. |
| `attributes` | object | No | HTML attributes to add to the hint. |

### Error message object options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes (or `html`) | Error message text. |
| `html` | string | Yes (or `text`) | Error message HTML. |
| `classes` | string | No | Classes to add to the error message. |
| `attributes` | object | No | HTML attributes to add to the error message. |

## Error Messages

Follow the GOV.UK Design System error message guidance. Recommended error messages for password inputs:

| Situation | Error message |
|-----------|---------------|
| Field left empty (sign-in) | "Enter your password" |
| Field left empty (new password) | "Enter a password" |
| Password too short | "Password must be at least [N] characters" |
| Password does not meet complexity rules | "Password must contain at least one number and one letter" |
| Passwords do not match (confirm password) | "Passwords do not match" |
| Incorrect password (sign-in error) | "Enter the correct password" |

## Accessibility

- When JavaScript is unavailable, the input renders as a standard `<input type="password">` without the show/hide button, which is fully accessible.
- The show/hide button uses `aria-label` to describe its purpose (for example, "Show password"), and the label changes to "Hide password" when active.
- When the user toggles password visibility, a visually hidden live region announces the state change to screen reader users (for example, "Your password is visible").
- The input includes `spellcheck="false"` and `autocapitalize="none"` to prevent spell-checking and auto-capitalisation, which would interfere with password entry.
- The `autocomplete` attribute helps password managers work as expected, reducing the need for users to type passwords manually.

## Do and Do not

**Do:**
- Set the correct `autocomplete` value (`current-password` or `new-password`).
- Provide clear hint text explaining any password complexity requirements.
- Use the component as part of the passwords pattern or create accounts pattern.
- Allow pasting into password fields — do not disable the paste action.

**Do not:**
- Do not pre-populate password fields with a value entered earlier.
- Do not use this component for inputs that are not passwords.
- Do not disable the show/hide toggle unless there is a specific security justification.
- Do not ask users to confirm their password on the same page unless there is a strong reason (the show/hide toggle reduces entry errors).

## Related Components / Patterns

- [Text Input](../text-input/SKILLS.md) — the base component for text entry
- [Error Message](../error-message/SKILLS.md) — for inline field errors
- [Error Summary](../error-summary/SKILLS.md) — for page-level error summaries
- [Passwords pattern](../../patterns/ask-users-for/passwords/SKILLS.md)
- [Create accounts pattern](../../patterns/help-users-to/create-accounts/SKILLS.md)
