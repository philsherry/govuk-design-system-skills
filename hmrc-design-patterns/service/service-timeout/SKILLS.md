---
category: patterns
description: Warn users before their session times out and give them a chance to extend it using the HMRC timeout dialog.
hmrc-frontend: "7.x"
keywords:
  - "countdown"
  - "hmrc-timeout-dialog"
  - "inactivity"
  - "modal"
  - "redirect"
  - "session"
  - "session timeout"
  - "sign out"
  - "timeout"
  - "timeout dialog"
last-reviewed: "2026-04-03"
name: Service timeout
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/service-timeout/"
subcategory: service
---

# Service timeout

> Warn users before their session times out and give them a chance to extend it using the HMRC timeout dialog.
> Source: <https://design.tax.service.gov.uk/hmrc-design-patterns/service-timeout/>

## Overview

HMRC services must warn users before their session expires and offer them a way to extend it. The timeout dialog appears as a modal overlay with a countdown timer. It gives users two options: extend the session or sign out.

If the user does not respond and the countdown reaches zero, the service redirects them to a "session timed out" page. That page explains what happened and provides a link to start again.

The default timeout is 15 minutes of inactivity. The dialog appears before the timeout expires, giving users enough time to respond.

The timeout dialog uses JavaScript from `hmrc-frontend`. It attaches to a `<meta>` tag via the `data-module="hmrc-timeout-dialog"` attribute.

## When to use

- On every page of an HMRC service that stores session data.
- In services that require authentication through Government Gateway or another identity provider.
- Wherever a session timeout would cause users to lose their progress.

## When not to use

- On pages that do not use session data, such as static guidance pages.
- On start pages or other pages that sit outside the authenticated part of a service.
- On confirmation pages where the user already completed the transaction.

## How it works

### The timeout flow

1. The user loads a page that includes the timeout dialog module.
2. A timer starts counting down from the configured timeout duration (default: 15 minutes).
3. Any user interaction (clicking, typing, scrolling) resets the timer.
4. When the timer nears expiry, the dialog appears as a modal overlay.
5. The dialog shows a countdown and two actions: "Stay signed in" and "Sign out".
6. If the user selects "Stay signed in", the service extends the session and hides the dialog.
7. If the user selects "Sign out", the service ends the session and redirects to a sign-out page.
8. If the countdown reaches zero without user action, the service redirects to a "session timed out" page.

### The timed-out page

Create a dedicated "session timed out" page that:

- Tells users their session ended because of inactivity.
- Explains that the service did not save their answers (if applicable).
- Provides a link to start the service again.
- Does not require authentication to view.

### Configuration options

- **`timeout`** — the session timeout in seconds (default: 900, which is 15 minutes).
- **`countdown`** — how long before the timeout to show the dialog, in seconds (default: 120, which is 2 minutes).
- **`keep-alive-url`** — the URL to call to extend the session.
- **`sign-out-url`** — the URL to redirect to when the user signs out.
- **`timeout-url`** — the URL to redirect to when the session times out.
- **`title`** — the dialog title (default: "You will sign out soon").
- **`message`** — the dialog message.
- **`keep-alive-button-text`** — the text for the extend button (default: "Stay signed in").
- **`sign-out-button-text`** — the text for the sign-out link (default: "Sign out").

## Code examples

### HTML

```html
<meta
  name="hmrc-timeout-dialog"
  data-module="hmrc-timeout-dialog"
  content
  data-timeout="900"
  data-countdown="120"
  data-keep-alive-url="/keep-alive"
  data-sign-out-url="/sign-out"
  data-timeout-url="/session-timed-out"
  data-title="You're about to be signed out"
  data-message="For your security, we will sign you out in"
  data-keep-alive-button-text="Stay signed in"
  data-sign-out-button-text="Sign out"
/>
```

### Nunjucks (in the page head block)

```njk
{% from "hmrc/components/timeout-dialog/macro.njk" import hmrcTimeoutDialog %}

{% block head %}
  {{ hmrcTimeoutDialog({
    timeout: 900,
    countdown: 120,
    keepAliveUrl: "/keep-alive",
    signOutUrl: "/sign-out",
    timeoutUrl: "/session-timed-out",
    title: "You're about to be signed out",
    message: "For your security, we will sign you out in",
    keepAliveButtonText: "Stay signed in",
    signOutButtonText: "Sign out"
  }) }}
{% endblock %}
```

### Session timed out page

```njk
{% extends "govuk/template.njk" %}

{% block pageTitle %}
  Your session timed out - [Service name] - GOV.UK
{% endblock %}

{% block content %}
  <div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <h1 class="govuk-heading-l">
        For your security, we signed you out
      </h1>
      <p class="govuk-body">
        We did not save your answers.
      </p>
      <p class="govuk-body">
        <a href="/start" class="govuk-link">Sign in again to continue</a>.
      </p>
    </div>
  </div>
{% endblock %}
```

## Accessibility

- The timeout dialog traps focus within the modal when it appears. Users cannot tab outside the dialog until they dismiss it.
- The dialog has `role="dialog"` and `aria-modal="true"`, which tell screen readers the user must interact with it.
- The countdown timer updates a live region so screen readers announce the remaining time.
- The dialog title receives focus when the dialog opens, so screen reader users hear the warning at once.
- Keyboard users can operate the dialog — Tab moves between the two actions, and Enter or Space activates them.
- The 2-minute default countdown period gives users enough time to read and respond. WCAG 2.2 criterion 2.2.1 (Timing Adjustable) requires that users can extend time limits.

## Do and Do not

**Do:**

- Include the timeout dialog on every page that uses session data.
- Provide a "session timed out" page that explains what happened.
- Set the `keep-alive-url` to an endpoint that extends the session without navigating away.
- Test that the dialog appears and the countdown works with JavaScript enabled.
- Provide a sign-out link outside the dialog as well (in the header).

**Do not:**

- Set the timeout to less than 15 minutes without a strong security reason.
- Set the countdown to less than 2 minutes — users need time to respond.
- Show the timeout dialog on pages that do not use session data.
- Rely on the timeout dialog alone for sign-out — always provide a sign-out link in the header.
- Remove the focus trap from the dialog — it ensures keyboard users interact with the dialog before continuing.
- Redirect users without warning when the session expires.

## Related components and patterns

- [Sign out](../sign-out/SKILLS.md) — the sign-out pattern for HMRC services
- [Service unavailable pages](../../../govuk-design-system/patterns/pages/service-unavailable-pages/SKILLS.md) — GOV.UK pattern for unavailable services
- [HMRC Frontend](../foundations/hmrc-frontend/SKILLS.md) — installation and setup for the hmrc-frontend package
