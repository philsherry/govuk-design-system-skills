---
category: patterns
description: Warn users before their session expires and explain what happens after a timeout.
dwp-frontend: "3.x"
keywords:
  - "dialog"
  - "expiry"
  - "modal"
  - "session"
  - "session timeout"
  - "timeout"
  - "timeout warning"
last-reviewed: "2026-04-04"
name: Manage a session timeout
source: "https://design-system.dwp.gov.uk/patterns/manage-a-session-timeout"
---

# Manage a session timeout

> Warn users before their session expires and explain what happens after a timeout.
> Source: <https://design-system.dwp.gov.uk/patterns/manage-a-session-timeout>

## Overview

The "Manage a session timeout" pattern warns users before their session expires and redirects them to an appropriate page when time runs out. It uses a native `<dialog>` element to display a countdown warning, giving users the option to extend the session. The pattern includes separate post-timeout pages for signed-in users and users who have not signed in, plus a no-JavaScript fallback banner.

## When to use this pattern

Use this pattern in any service that uses sessions with a time limit. This includes services where:

- users sign in to an account
- the service stores answers temporarily as the user progresses through a form
- security or data protection requirements limit how long a session can stay open

## When not to use this pattern

Do not use this pattern when:

- the service has no session or time limit
- the page is purely informational and does not hold any user data

## How it works

Set the session timeout to at least 20 minutes. Show the timeout warning at least 2 minutes before the session expires.

### The warning dialog

Display a modal dialog warning the user that their session will expire soon. The dialog must tell the user:

- how long they have before the session ends
- what happens when the session ends (for example, "we will delete your answers" or "we will sign you out")

The user can respond in three ways:

1. **Select "Continue"** — extends the session and closes the dialog
2. **Press Escape** — extends the session and closes the dialog
3. **Do nothing** — the session expires and the service redirects to a timeout page

Do not limit how many times the user can extend their session. Users who need more time — including those using assistive technology — must be able to keep extending.

### Content for signed-in users

When a signed-in user's session times out, redirect them to a page that explains:

- the service signed them out
- the session timed out, which triggered the sign-out
- how to sign in again

### Content for users who are not signed in

When a user who has not signed in times out, redirect them to a page that explains:

- the session has ended
- the service did not save their answers
- how to start again

### No-JavaScript fallback

When JavaScript is not available, the `<dialog>` element will not open. Instead, show a visible banner on the page warning users about the session time limit. This banner should appear at the top of the page and tell users how long they have.

## Code examples

### Timeout warning dialog

#### HTML

```html
<dialog class="govuk-timeout-warning"
  data-module="govuk-timeout-warning"
  data-timeout="1200"
  data-countdown="120"
  data-timeout-url="/session-ended"
  aria-live="polite"
  aria-labelledby="govuk-timeout-warning-title"
  aria-describedby="govuk-timeout-warning-description">

  <h2 id="govuk-timeout-warning-title" class="govuk-heading-m">
    Your session will end soon
  </h2>

  <p id="govuk-timeout-warning-description" class="govuk-body">
    Your session will end in <span class="govuk-timeout-warning__countdown">2 minutes</span>.
  </p>
  <p class="govuk-body">
    If the session ends, your answers will be deleted.
  </p>

  <button type="button" class="govuk-button" data-module="govuk-button">
    Continue
  </button>
</dialog>
```

### Session ended page (signed-in user)

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">You have been signed out</h1>
    <p class="govuk-body">
      We signed you out because you did not do anything for 20 minutes. We do this to protect your information.
    </p>
    <p class="govuk-body">
      <a href="/sign-in" class="govuk-link">Sign in again</a>
    </p>

  </div>
</div>
```

### Session ended page (not signed in)

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">Your session has ended</h1>
    <p class="govuk-body">
      Your session ended because you did not do anything for 20 minutes. Your answers have not been saved.
    </p>
    <p class="govuk-body">
      <a href="/start" class="govuk-link">Start again</a>
    </p>

  </div>
</div>
```

### No-JavaScript fallback banner

#### HTML

```html
<noscript>
  <div class="govuk-width-container">
    <div class="govuk-warning-text">
      <span class="govuk-warning-text__icon" aria-hidden="true">!</span>
      <strong class="govuk-warning-text__text">
        <span class="govuk-visually-hidden">Warning</span>
        Your session will end after 20 minutes of inactivity. Your answers will not be saved.
      </strong>
    </div>
  </div>
</noscript>
```

## Dialog attributes

| Attribute | Type | Required | Description |
|-----------|------|----------|-------------|
| `data-module` | string | Yes | Set to `"govuk-timeout-warning"` to initialise the component |
| `data-timeout` | number | Yes | Total session length in seconds (for example, `1200` for 20 minutes) |
| `data-countdown` | number | Yes | Seconds before timeout to show the warning (minimum `120`) |
| `data-timeout-url` | string | Yes | URL to redirect to when the session expires |
| `aria-live` | string | Yes | Set to `"polite"` so screen readers announce the dialog without interrupting |
| `aria-labelledby` | string | Yes | ID of the dialog's heading |
| `aria-describedby` | string | Yes | ID of the dialog's description text |

## Accessibility

This pattern meets **[2.2.1 Timing Adjustable](https://www.w3.org/TR/WCAG22/#timing-adjustable) (A)**. To comply, the service must:

- warn users at least 2 minutes before the session expires
- allow users to extend the session
- not limit the number of extensions

The dialog uses native `<dialog>` semantics, which provides built-in focus trapping and keyboard support. When the dialog opens, move focus to the dialog so screen reader users hear the warning straight away.

The `aria-live="polite"` attribute tells screen readers to announce the dialog content without interrupting the current reading flow.

Users who press Escape or select "Continue" stay on the same page with their progress preserved.

## Do and do not

**Do:**
- Set the session timeout to at least 20 minutes.
- Show the warning dialog at least 2 minutes before the session expires.
- Allow users to extend the session without limiting the number of extensions.
- Provide a no-JavaScript fallback banner that warns users about the time limit.
- Tell users what happens when the session ends (for example, "we will delete your answers").

**Do not:**
- Do not limit how many times a user can extend the session — users of assistive technology may need more time.
- Do not use this pattern on pages that hold no user data and have no session.
- Do not skip the timeout warning and redirect users without notice.
- Do not place the warning in a custom overlay — use the native `<dialog>` element.

## Related components and patterns

- [Warning text](https://design-system.service.gov.uk/components/warning-text/) — used in the no-JavaScript fallback
- [Button](https://design-system.service.gov.uk/components/button/) — used for the "Continue" action in the dialog
- [GOV.UK community timeout warning discussion](https://github.com/alphagov/govuk-design-system-backlog/issues/104) — the community backlog issue for this component
