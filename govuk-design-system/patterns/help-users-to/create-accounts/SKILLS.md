---
category: patterns
description: Only ask users to create an account if it genuinely benefits them — and consider GOV.UK One Login before building a custom system.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Help users to create accounts
subcategory: help-users-to
---

# Help users to create accounts

> Only ask users to create an account if it genuinely benefits them — and consider GOV.UK One Login before building a custom system.
> Source: https://design-system.service.gov.uk/patterns/create-accounts/

---

## Overview

The create accounts pattern provides guidance on when and how to let users create accounts for government services. An account allows users to save progress, return to a service across more than one session, and access personalised or ongoing services.

Before implementing account creation, consider whether users genuinely need accounts. Users can often complete government services in a single session without registering. Accounts add complexity for users — they create another set of credentials to remember — and for services, which must maintain, secure, and support user data. Only introduce the overhead of account management where it provides a clear, tangible benefit to users.

If users need accounts, consider GOV.UK One Login (the preferred cross-government identity solution) before building a custom system. If your service requires a custom system, the pattern covers registration, email verification, password creation, sign-in, and account recovery.

## When to use this pattern

- When users need to save progress and return to a service across more than one session.
- When users need to access ongoing services or track the status of applications over time.
- When the service must persist personalised or account-specific data between visits.
- When your service requires identity assurance or verification.

## When not to use this pattern

- Do not create accounts for single-session services where users do not need to return.
- Do not build a custom account system if GOV.UK One Login meets your needs.
- Do not require account creation before users can understand what a service does or whether it applies to them.
- Do not treat account creation as a prerequisite for accessing content that should be publicly available.
- Do not ask for more information than you need to create the account — collect extra details progressively as users engage with the service.

## How it works

### Consider alternatives first

Before building a custom account system:

- **GOV.UK One Login** — the preferred option for public-facing services. Provides sign-in and identity verification across government, reducing the burden on users to manage yet another set of credentials.
- **Magic links via email** — send a time-limited sign-in link to the user's email address instead of managing passwords.
- **No account** — assess whether users can complete the service without an account at all.

### Registration flow

A typical registration flow:

1. **Email address** — the email address becomes the primary sign-in identifier for most services.
2. **Email verification** — send a verification link or one-time code to confirm the address is valid and accessible to the user.
3. **Create a password** — ask the user to create a password, following NCSC guidance.
4. **Second factor** (optional) — offer or require two-factor authentication (2FA) via SMS or an authenticator app.
5. **Confirmation** — confirm that you have created the account and tell the user what to do next.

### Password requirements

Follow National Cyber Security Centre (NCSC) guidance:

- Set a minimum length of at least 8 characters.
- Do not impose a low maximum length — allow passphrases.
- Do not require a specific mix of character types (uppercase, lowercase, numbers, special characters) — length is a stronger indicator of security than complexity.
- Check passwords against lists of known compromised passwords.
- Allow users to see the password they are typing — use the Password Input component.
- Do not block paste — users often use password managers to paste strong passwords.
- Show password requirements before the user types, not after an error.

### Email verification

Send a verification email after registration. Use a one-time link or a short numeric code (6 digits is common). Tell users:

- That you have sent the link or code and to what address.
- How long the link or code is valid for.
- What to do if they did not receive it.

### Account recovery

Provide a reliable way for users to recover access if they forget their password. The standard approach is a time-limited password reset link sent to the registered email address. If the user cannot access their email, provide a route through the service's support team.

### Returning users

Consider the returning user journey from the start of the design process. A clear sign-in flow with a prominent link from the service start page reduces confusion and avoids users creating duplicate accounts by mistake.

## Code Examples

### Registration: email and password

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">Create your account</h1>

    <form method="post" novalidate>

      <div class="govuk-form-group">
        <label class="govuk-label govuk-label--m" for="email">
          Email address
        </label>
        <div id="email-hint" class="govuk-hint">
          We'll use this to send you updates about your account.
        </div>
        <input
          class="govuk-input"
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          spellcheck="false"
          aria-describedby="email-hint"
        >
      </div>

      <div class="govuk-form-group">
        <label class="govuk-label govuk-label--m" for="password">
          Create a password
        </label>
        <div id="password-hint" class="govuk-hint">
          Must be at least 8 characters. Avoid using a password you use on other sites.
        </div>
        <input
          class="govuk-input"
          id="password"
          name="password"
          type="password"
          autocomplete="new-password"
          spellcheck="false"
          aria-describedby="password-hint"
        >
      </div>

      <button type="submit" class="govuk-button" data-module="govuk-button">
        Create account
      </button>

    </form>

    <p class="govuk-body">
      Already have an account? <a href="/sign-in" class="govuk-link">Sign in</a>
    </p>

  </div>
</div>
```

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">Create your account</h1>

    <form method="post" novalidate>

      {{ govukInput({
        label: {
          text: "Email address",
          classes: "govuk-label--m"
        },
        hint: {
          text: "We'll use this to send you updates about your account."
        },
        id: "email",
        name: "email",
        type: "email",
        autocomplete: "email",
        spellcheck: false
      }) }}

      {{ govukPasswordInput({
        label: {
          text: "Create a password",
          classes: "govuk-label--m"
        },
        hint: {
          text: "Must be at least 8 characters. Avoid using a password you use on other sites."
        },
        id: "password",
        name: "password",
        autocomplete: "new-password"
      }) }}

      {{ govukButton({
        text: "Create account"
      }) }}

    </form>

    <p class="govuk-body">
      Already have an account? <a href="/sign-in" class="govuk-link">Sign in</a>
    </p>

  </div>
</div>
```

### Sign-in page

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">Sign in</h1>

    <form method="post" novalidate>

      <div class="govuk-form-group">
        <label class="govuk-label govuk-label--m" for="email">
          Email address
        </label>
        <input
          class="govuk-input"
          id="email"
          name="email"
          type="email"
          autocomplete="email"
          spellcheck="false"
        >
      </div>

      <div class="govuk-form-group">
        <label class="govuk-label govuk-label--m" for="password">
          Password
        </label>
        <input
          class="govuk-input"
          id="password"
          name="password"
          type="password"
          autocomplete="current-password"
          spellcheck="false"
        >
      </div>

      <button type="submit" class="govuk-button" data-module="govuk-button">
        Sign in
      </button>

    </form>

    <p class="govuk-body">
      <a href="/forgot-password" class="govuk-link">Forgot your password?</a>
    </p>
    <p class="govuk-body">
      Don't have an account? <a href="/create-account" class="govuk-link">Create an account</a>
    </p>

  </div>
</div>
```

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">Sign in</h1>

    <form method="post" novalidate>

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

      {{ govukPasswordInput({
        label: {
          text: "Password",
          classes: "govuk-label--m"
        },
        id: "password",
        name: "password",
        autocomplete: "current-password"
      }) }}

      {{ govukButton({
        text: "Sign in"
      }) }}

    </form>

    <p class="govuk-body">
      <a href="/forgot-password" class="govuk-link">Forgot your password?</a>
    </p>
    <p class="govuk-body">
      Don't have an account? <a href="/create-account" class="govuk-link">Create an account</a>
    </p>

  </div>
</div>
```

### Sign-in error (generic — avoids account enumeration)

#### Nunjucks

```njk
{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: [
    {
      text: "Enter a valid email address and password",
      href: "#email"
    }
  ]
}) }}
```

## Accessibility

- Use `autocomplete="email"` on email inputs, `autocomplete="new-password"` on password creation inputs, and `autocomplete="current-password"` on sign-in password inputs to support password managers and browser autofill.
- Use the Password Input component, which includes a "Show password" toggle to help users type passwords accurately.
- Do not prevent paste in password fields — users rely on password managers to paste strong, unique passwords.
- Do not block autocomplete on registration or sign-in forms.
- Sign-in error messages should be generic (do not reveal whether the email or password was wrong) to prevent account enumeration attacks.
- Ensure the registration form is fully operable by keyboard and compatible with screen readers.

## Do / Don't

**Do:**
- Consider GOV.UK One Login before building a custom account system.
- Explain the benefits of creating an account before asking users to register.
- Use email address as the primary identifier rather than a separate username.
- Show password requirements before the user types, not after an error.
- Allow users to see the password they are typing.
- Send a verification email to confirm the email address is valid.
- Provide a clear password reset flow.
- Allow guest completion of the service if an account is not strictly required.

**Don't:**
- Don't require account creation before users can understand what the service does.
- Don't enforce password complexity rules (uppercase, special characters) — length is more important than complexity.
- Don't reveal whether an email address is already registered when handling sign-in failures.
- Don't set an artificially low maximum password length.
- Don't disable paste in password fields.
- Don't store passwords in plain text — always hash and salt.

## Related Components / Patterns

- [../../../components/password-input/SKILLS.md](../../../components/password-input/SKILLS.md)
- [../../../components/text-input/SKILLS.md](../../../components/text-input/SKILLS.md)
- [../../../components/error-summary/SKILLS.md](../../../components/error-summary/SKILLS.md)
- [../create-a-username/SKILLS.md](../create-a-username/SKILLS.md)
- [../../../patterns/ask-users-for/passwords/SKILLS.md](../../../patterns/ask-users-for/passwords/SKILLS.md)
- [../../../patterns/ask-users-for/email-addresses/SKILLS.md](../../../patterns/ask-users-for/email-addresses/SKILLS.md)
