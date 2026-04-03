---
category: patterns
description: Help users create a memorable, unique username with clear rules about what is and is not allowed.
govuk-frontend: "5.x"
keywords:
  - "sign up"
  - "user ID"
  - "username"
last-reviewed: "2026-04-03"
name: Help users to create a username
source: "https://design-system.service.gov.uk/patterns/create-a-username/"
subcategory: help-users-to
---

# Help users to create a username

> Help users create a memorable, unique username with clear rules about what is and is not allowed.
> Source: https://design-system.service.gov.uk/patterns/create-a-username/

## Overview

The create a username pattern helps users choose a username for your service. A username is a user-chosen identifier used to sign in. That identifier is distinct from a display name (which others may see) and from an email address.

Before implementing this pattern, consider whether a username is genuinely necessary. Government services often use an email address as the sign-in identifier, which is simpler — users are unlikely to forget it, email addresses are inherently unique, and using them reduces support requests from people who cannot remember what username they created. Use a separate username only if there is a genuine need, for example when users need a public-facing identifier that must differ from their real name or email address.

If your service requires a username, state the rules upfront, validate only on submission (not inline while the user types), and let users change their username later if at all possible.

## When to use this pattern

- When your service requires a user-chosen identifier that is distinct from their email address.
- When users need a public-facing name that is separate from their real name or email address.
- When the nature of the service means an email address alone is not a suitable sign-in identifier.

## When not to use this pattern

- Do not use this pattern if an email address can serve as the sign-in identifier — this is simpler for users and reduces forgotten-credential support requests.
- Do not use it if users are unlikely to remember a separate username they created.
- Do not use it if the service does not retain user accounts between sessions.
- Do not use the username as a display name if the user's real name is also needed elsewhere in the service.

## How it works

### Use email address as the username where possible

Users reliably remember their email address. Email addresses are unique by nature, remove the need for availability checks against a pool of existing usernames, and reduce the support burden. If your service can use email as the sign-in identifier, do so.

### Set clear rules upfront

If your service requires a custom username, tell users — before they start typing — what the rules are:

- The minimum and maximum length (for example, 6 to 30 characters).
- Which characters the username can contain (for example, letters and numbers only).
- Whether the username is case-sensitive.
- Whether the username will be visible to other users.

Present these rules as hint text beneath the input label so users see them before they start typing.

### Check availability on submission, not inline

Do not check username availability while the user is typing. Inline validation creates accessibility and performance problems and can be confusing. Check on form submission only. If the username is already taken, display a specific error message and repopulate the field with the value the user entered.

### Let users change their username

Allow users to change their username later unless there is a strong technical reason not to (for example, if the username appears in permanent public content or canonical URLs).

### Error messages

Be specific about what went wrong and tell the user how to fix it.

| Situation | Error message |
|-----------|---------------|
| No username entered | "Enter a username" |
| Username too short | "Username must be at least 6 characters" |
| Username too long | "Username must be 30 characters or fewer" |
| Invalid characters | "Username must only contain letters and numbers" |
| Username already taken | "That username is already taken — enter a different username" |

Where a username is already taken, suggest alternatives if the system supports it (for example, by appending a number to the attempted value).

## Code Examples

### Basic username input

#### HTML

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="username">
      Create a username
    </label>
  </h1>
  <div id="username-hint" class="govuk-hint">
    Must be between 6 and 30 characters. Only use letters and numbers.
  </div>
  <input
    class="govuk-input govuk-input--width-20"
    id="username"
    name="username"
    type="text"
    autocomplete="username"
    spellcheck="false"
    aria-describedby="username-hint"
  >
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "Create a username",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "Must be between 6 and 30 characters. Only use letters and numbers."
  },
  classes: "govuk-input--width-20",
  id: "username",
  name: "username",
  autocomplete: "username",
  spellcheck: false
}) }}
```

### With error — username already taken

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
          <a href="#username">That username is already taken — enter a different username</a>
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="govuk-form-group govuk-form-group--error">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="username">
      Create a username
    </label>
  </h1>
  <div id="username-hint" class="govuk-hint">
    Must be between 6 and 30 characters. Only use letters and numbers.
  </div>
  <p id="username-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> That username is already taken — enter a different username
  </p>
  <input
    class="govuk-input govuk-input--width-20 govuk-input--error"
    id="username"
    name="username"
    type="text"
    autocomplete="username"
    spellcheck="false"
    aria-describedby="username-hint username-error"
    value="johndoe92"
  >
</div>
```

#### Nunjucks

```njk
{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "That username is already taken — enter a different username",
      href: "#username"
    }
  ]
}) }}

{{ govukInput({
  label: {
    text: "Create a username",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "Must be between 6 and 30 characters. Only use letters and numbers."
  },
  classes: "govuk-input--width-20",
  id: "username",
  name: "username",
  autocomplete: "username",
  spellcheck: false,
  value: "johndoe92",
  errorMessage: {
    text: "That username is already taken — enter a different username"
  }
}) }}
```

## Accessibility

- Use `autocomplete="username"` on the username input to allow password managers and browsers to autofill saved credentials. Use this attribute on both the sign-in page and the account creation page.
- Set `spellcheck="false"` to prevent browser spell-check from interfering with usernames.
- Link hint text and any error message to the input using `aria-describedby` so screen reader users hear the rules before they start typing.
- When showing an error because a username is already taken, repopulate the field with the value the user entered so they do not have to type it again.
- Link error messages to the input via `aria-describedby`.
- Do not check availability inline as users type — this creates a confusing experience for screen reader users and can cause performance issues on slower connections.

## Do and Do not

**Do:**
- Prefer using email address as the sign-in identifier — users remember it, email addresses are unique, and they reduce support requests.
- State the username rules in hint text before the user starts typing.
- Use `autocomplete="username"` on the input.
- Use `spellcheck="false"` to prevent browser spell-check interference.
- Validate on submission, not inline.
- Repopulate the field with the user's attempted value when showing an error.
- Let users change their username later if possible.

**Do not:**
- Do not modify the username the user entered without telling them (for example, by lowercasing it).
- Do not enforce unnecessarily strict character rules (for example, requiring special characters).
- Do not check username availability in real time while the user is typing.
- Do not use the username as a display name if the user's real name is also needed elsewhere.
- Do not prevent copy-paste into the username field.

## Related Components / Patterns

- [../../../components/text-input/SKILLS.md](../../../components/text-input/SKILLS.md)
- [../../../components/error-summary/SKILLS.md](../../../components/error-summary/SKILLS.md)
- [../../../components/error-message/SKILLS.md](../../../components/error-message/SKILLS.md)
- [../create-accounts/SKILLS.md](../create-accounts/SKILLS.md)
- [../../../patterns/ask-users-for/passwords/SKILLS.md](../../../patterns/ask-users-for/passwords/SKILLS.md)
