---
category: patterns
description: Provide a sign-out link in HMRC services that require authentication, and redirect users to a confirmation page when they sign out.
keywords:
  - "authentication"
  - "Government Gateway"
  - "log out"
  - "session"
  - "sign out"
  - "sign-out link"
  - "signed out"
last-reviewed: "2026-04-03"
name: Sign out
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/sign-out/"
subcategory: service
---

# Sign out

> Provide a sign-out link in HMRC services that require authentication, and redirect users to a confirmation page when they sign out.
> Source: <https://design.tax.service.gov.uk/hmrc-design-patterns/sign-out/>

## Overview

HMRC services that require authentication must give users a way to sign out. The sign-out link sits in the service header or service navigation, where users expect to find it. When a user signs out, the service clears their session data and redirects them to a confirmation page.

The confirmation page tells users they signed out and explains what happens to their data. It also provides a link to sign back in.

This pattern protects user data on shared devices and gives users confidence that their session ended.

## When to use

- In every HMRC service that requires users to sign in through Government Gateway or another identity provider.
- On every page of an authenticated service, so users can sign out at any point.

## When not to use

- On pages that do not require authentication.
- On start pages or other pages that sit outside the authenticated part of a service.
- On services that do not hold session data.

## How it works

### Placing the sign-out link

Place the sign-out link in the header area of the service. In HMRC services, this is:

- The GOV.UK service header — for services that use the standard service header.
- The GOV.UK service navigation component — for services that need section-level navigation.

The link text must read "Sign out". Do not use "Log out", "Exit", or other variations.

### The sign-out process

When a user selects the sign-out link:

1. The service destroys the session on the server.
2. The service clears session cookies.
3. The service redirects the user to a sign-out confirmation page.

### The sign-out confirmation page

The confirmation page must:

- Tell the user they signed out.
- Explain what happened to their data (for example, "We saved your progress" or "We did not save your answers").
- Provide a link to sign back in to the service.
- Not require authentication to view.

Do not redirect users to the start page without showing a confirmation page. Users need assurance that their session ended.

### Saving progress

If the service saves user progress, tell users on the confirmation page. For example: "We saved your answers. You can sign back in to continue."

If the service does not save progress, tell users: "We did not save your answers. You will need to start again."

## Code examples

### Sign-out link in navigation (HTML)

```html
<nav aria-label="Service">
  <a href="/sign-out" class="govuk-link">Sign out</a>
</nav>
```

### Sign-out link in a service header (Nunjucks)

```njk
{% from "govuk/components/header/macro.njk" import govukHeader %}

{{ govukHeader({
  homepageUrl: "https://www.gov.uk",
  serviceName: "Manage your tax credits",
  serviceUrl: "/",
  navigation: [
    {
      href: "/sign-out",
      text: "Sign out"
    }
  ]
}) }}
```

### Sign-out confirmation page (Nunjucks)

```njk
{% extends "govuk/template.njk" %}

{% block pageTitle %}
  You have been signed out - Manage your tax credits - GOV.UK
{% endblock %}

{% block header %}
  {{ govukHeader({
    homepageUrl: "https://www.gov.uk",
    serviceName: "Manage your tax credits",
    serviceUrl: "/"
  }) }}
{% endblock %}

{% block content %}
  <div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <h1 class="govuk-heading-l">
        You signed out
      </h1>
      <p class="govuk-body">
        We saved your progress. You can
        <a href="/sign-in" class="govuk-link">sign back in</a>
        to continue.
      </p>
    </div>
  </div>
{% endblock %}
```

### Sign-out confirmation page without saved progress

```njk
{% block content %}
  <div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <h1 class="govuk-heading-l">
        You signed out
      </h1>
      <p class="govuk-body">
        We did not save your answers.
      </p>
      <p class="govuk-body">
        <a href="/start" class="govuk-link">Start again</a>
      </p>
    </div>
  </div>
{% endblock %}
```

## Accessibility

- The sign-out link must sit in a consistent location on every page so users can find it by muscle memory and screen reader navigation.
- Use "Sign out" as the link text. Screen reader users scanning a list of links can identify this action without surrounding context.
- The confirmation page must have a clear heading that tells users the outcome. Screen readers announce the heading when the page loads.
- Do not use JavaScript-only sign-out actions. The sign-out link must work as a standard link or form submission.

## Do and do not

**Do:**

- Place the sign-out link in the service header or service navigation on every authenticated page.
- Use "Sign out" as the link text.
- Clear session data and cookies on the server when the user signs out.
- Redirect to a confirmation page that explains what happened.
- Tell users whether the service saved their progress.
- Provide a link to sign back in on the confirmation page.

**Do not:**

- Use "Log out", "Exit", or other variations — use "Sign out".
- Redirect to the start page without a confirmation page.
- Leave session data intact after the user signs out.
- Hide the sign-out link behind a menu or dropdown on desktop screens.
- Require authentication to view the sign-out confirmation page.
- Rely on the timeout dialog as the only way to end a session.

## Related components and patterns

- [Service timeout](../service-timeout/SKILLS.md) — the timeout dialog that warns users before their session expires
- [Header](../../../govuk-design-system/components/header/SKILLS.md) — the GOV.UK header component
- [Create accounts](../../../govuk-design-system/patterns/help-users-to/create-accounts/SKILLS.md) — GOV.UK guidance on account creation
- [Confirmation pages](../../../govuk-design-system/patterns/pages/confirmation-pages/SKILLS.md) — GOV.UK confirmation page pattern
