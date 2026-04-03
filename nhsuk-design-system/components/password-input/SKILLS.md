---
category: components
description: A text input that lets users enter a password with an option to show what they have typed.
keywords:
  - "hide password"
  - "input"
  - "password"
  - "password field"
  - "password input"
  - "show password"
last-reviewed: "2026-04-03"
name: Password Input
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/password-input"
---

# Password Input

> A text input that lets users enter a password with an option to show what they have typed.
> Source: https://service-manual.nhs.uk/design-system/components/password-input

## Overview

The password input component extends the text input with a "Show" / "Hide" toggle button. This lets users check what they have typed before submitting, reducing errors caused by mistyped passwords. The toggle switches the input between `type="password"` (masked) and `type="text"` (visible).

The component uses `data-module="nhsuk-password-input"` to activate the JavaScript behaviour. Without JavaScript, the component renders as a standard password input — the toggle button does not appear, and users see dots/bullets as usual.

The show/hide button text updates to reflect the current state: "Show" when the input masks the password, "Hide" when the input displays the password. A visually hidden suffix ("password") ensures screen readers announce "Show password" and "Hide password" rather than bare "Show" and "Hide".

## When to use this component

Use the password input component whenever you ask users to create or enter a password as part of an authentication flow.

Use it for:
- Account creation forms
- Sign-in pages
- Password change or reset flows

## When not to use this component

Do not use the password input for other sensitive data (such as NHS numbers or dates of birth) that are not passwords. For those, use a standard text input.

Do not use a standard text input for passwords — the password input provides the masking and show/hide behaviour that users expect.

## How it works

The component renders a `<div class="nhsuk-form-group">` containing a label, optional hint, optional error message, and the password input wrapped in a `<div class="nhsuk-password-input__wrapper">`. The wrapper contains the `<input type="password">` and a toggle `<button>`.

The `data-module="nhsuk-password-input"` attribute on the outer container activates the JavaScript that handles the show/hide toggle. The toggle button:
- Starts with text "Show" (and visually hidden " password")
- Changes the input `type` to `"text"` and button text to "Hide" when activated
- Reverts when activated again

The component sets `spellcheck="false"` and `autocapitalize="none"` by default to prevent interference with password entry.

## Code Examples

### Default / Basic

#### HTML

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="password">
    Password
  </label>
  <div class="nhsuk-password-input" data-module="nhsuk-password-input">
    <div class="nhsuk-password-input__wrapper">
      <input class="nhsuk-input nhsuk-password-input__input nhsuk-js-password-input-input"
        id="password"
        name="password"
        type="password"
        spellcheck="false"
        autocapitalize="none"
        autocomplete="current-password"
      >
      <button type="button"
        class="nhsuk-button nhsuk-button--secondary nhsuk-password-input__toggle nhsuk-js-password-input-toggle"
        data-module="nhsuk-button"
        aria-controls="password"
        aria-label="Show password"
        hidden
      >
        Show
      </button>
    </div>
  </div>
</div>
```

#### Nunjucks

```njk
{{ passwordInput({
  id: "password",
  name: "password",
  label: {
    text: "Password"
  }
}) }}
```

### With label as page heading

#### Nunjucks

```njk
{{ passwordInput({
  id: "password",
  name: "password",
  label: {
    text: "Create a password",
    classes: "nhsuk-label--l",
    isPageHeading: true
  }
}) }}
```

### With hint text

#### Nunjucks

```njk
{{ passwordInput({
  id: "password",
  name: "password",
  label: {
    text: "Create a password",
    classes: "nhsuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "Your password must be at least 8 characters and include a number."
  }
}) }}
```

### With error message

#### Nunjucks

```njk
{{ passwordInput({
  id: "password",
  name: "password",
  label: {
    text: "Create a password",
    classes: "nhsuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "Your password must be at least 8 characters and include a number."
  },
  errorMessage: {
    text: "Enter a password"
  }
}) }}
```

### For current password (sign in)

#### Nunjucks

```njk
{{ passwordInput({
  id: "current-password",
  name: "current-password",
  autocomplete: "current-password",
  label: {
    text: "Password"
  }
}) }}
```

### For new password (account creation or change)

#### Nunjucks

```njk
{{ passwordInput({
  id: "new-password",
  name: "new-password",
  autocomplete: "new-password",
  label: {
    text: "Create a password",
    classes: "nhsuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "Your password must be at least 8 characters and include a number."
  }
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | The `id` for the input element. |
| `name` | string | Yes | The `name` attribute for the input. |
| `label` | object | Yes | Options for the label. Must include `text` or `html`. |
| `hint` | object | No | Options for hint text. |
| `errorMessage` | object | No | Options for the error message. |
| `formGroup` | object | No | Options for the form group wrapper. |
| `classes` | string | No | Classes to add to the input element. |
| `autocomplete` | string | No | The `autocomplete` attribute. Use `"current-password"` for sign-in, `"new-password"` for creation. |
| `value` | string | No | Pre-populated value for the input. |
| `describedBy` | string | No | Extra element IDs to include in `aria-describedby`. |
| `attributes` | object | No | HTML attributes (as key-value pairs) to add to the input. |
| `showPasswordText` | string | No | Custom text for the show button. Defaults to `"Show"`. |
| `hidePasswordText` | string | No | Custom text for the hide button. Defaults to `"Hide"`. |
| `showPasswordAriaLabelText` | string | No | Custom `aria-label` for the show button. Defaults to `"Show password"`. |
| `hidePasswordAriaLabelText` | string | No | Custom `aria-label` for the hide button. Defaults to `"Hide password"`. |

## Error Messages

| Situation | Error message |
|-----------|---------------|
| Password field left empty | "Enter a password" or "Enter your password" |
| Password too short | "Password must be at least [N] characters" |
| Password does not meet rules | "Password must include [requirement]" — for example, "Password must include a number" |
| Passwords do not match | "Enter the same password in both fields" |
| Incorrect password (sign in) | "Enter the correct password" |

## Accessibility

- The toggle button uses `aria-controls` pointing to the input `id` and `aria-label` with "Show password" / "Hide password" to communicate the toggle state.
- Without JavaScript, the toggle button has `hidden` so it does not appear — users get a standard password input.
- The input sets `spellcheck="false"` and `autocapitalize="none"` by default.
- Set `autocomplete` to `"current-password"` for sign-in fields and `"new-password"` for creation fields. This helps password managers fill in or generate passwords.
- The input type switches between `"password"` and `"text"` — screen readers will announce the type change when the user interacts with the toggle.

## Do and Do not

**Do:**
- Use `autocomplete="current-password"` on sign-in pages.
- Use `autocomplete="new-password"` on password creation and change pages.
- Tell users the password rules in the hint text.
- Allow users to paste passwords — do not use JavaScript to prevent pasting.

**Do not:**
- Do not use the password input for non-password fields.
- Do not set a maximum password length that is too short — allow at least 64 characters.
- Do not use a standard text input for passwords — users expect the masking behaviour.
- Do not prevent pasting into the password field — this breaks password managers and hurts security.

## Related Components / Patterns

- [Text Input](../text-input/SKILLS.md) — the base single-line input component.
- [Error Message](../error-message/SKILLS.md) — for inline validation errors.
- [Error Summary](../error-summary/SKILLS.md) — for page-level error lists.
- [Button](../button/SKILLS.md) — the submit button for sign-in and account creation forms.
