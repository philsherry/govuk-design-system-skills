---
category: patterns
description: Tell users that HMRC could not confirm their identity, and explain what they can do next.
keywords:
  - "could not confirm identity"
  - "identity verification failed"
  - "identity check failed"
  - "verification failure"
  - "Government Gateway"
  - "alternative access"
last-reviewed: "2026-04-03"
name: Could not confirm identity
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/could-not-confirm-identity/"
subcategory: identity
---

# Could not confirm identity

> Tell users that HMRC could not confirm their identity, and explain what they can do next.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/could-not-confirm-identity/

## Overview

The "could not confirm identity" page appears when identity verification fails. It tells the user that HMRC could not confirm their identity and gives them alternative ways to access the service.

This page must explain the outcome without revealing security details about why verification failed. Exposing the reason for failure could help bad actors bypass identity checks.

The page uses a standard heading — not the green panel component. The panel signals success and would mislead users on a failure page. Instead, use a plain `<h1>` heading and provide a list of next steps the user can take.

## When to use

- When a user fails an identity verification check within an HMRC service.
- When the service needs to direct users to alternative ways of completing their task after a failed identity check.
- At the point where the identity verification journey ends without success.

## When not to use

- Do not use this page when identity verification succeeds — use the "Confirmed identity" pattern instead.
- Do not use this page for other types of errors. Use the GOV.UK "problem with the service" or "page not found" patterns for technical issues.
- Do not use this page when the user abandons the identity check before completing it.

## How it works

The page should:

- Use a standard `<h1>` heading: "We could not confirm your identity"
- Explain that the user cannot access the service online without verifying their identity
- List alternative ways to access the service, such as phoning HMRC, writing by post, or visiting a local office
- Include HMRC contact details (phone number, opening hours, postal address) so users can take immediate action
- Not reveal why the identity check failed — keep the explanation general
- Not use the panel component or green styling — these signal success

Give users specific next steps. Do not leave them at a dead end. Every failure page must offer at least one alternative route to completing their task.

Where the service allows it, offer the user a chance to try verifying their identity again. Place this option before the offline alternatives, because most users prefer to continue online.

## Code examples

### HTML

```html
<h1 class="govuk-heading-xl">We could not confirm your identity</h1>

<p class="govuk-body">
  You cannot access this service online because we could not confirm your identity.
</p>

<p class="govuk-body">You can try again or contact HMRC to get help with your tax affairs.</p>

<a href="/verify-identity" role="button" draggable="false"
  class="govuk-button govuk-button--secondary"
  data-module="govuk-button">
  Try again
</a>

<h2 class="govuk-heading-m">Other ways to access this service</h2>

<p class="govuk-body">You can contact HMRC by:</p>

<ul class="govuk-list govuk-list--bullet">
  <li>phone — call 0300 200 3300 (Monday to Friday, 8am to 6pm)</li>
  <li>post — write to HMRC, BX9 1AS</li>
</ul>

<p class="govuk-body">
  When you contact HMRC, tell them what service you were trying to use and that you could not verify your identity online.
</p>
```

### Nunjucks

```njk
<h1 class="govuk-heading-xl">We could not confirm your identity</h1>

<p class="govuk-body">
  You cannot access this service online because we could not confirm your identity.
</p>

<p class="govuk-body">You can try again or contact HMRC to get help with your tax affairs.</p>

{{ govukButton({
  text: "Try again",
  href: "/verify-identity",
  classes: "govuk-button--secondary"
}) }}

<h2 class="govuk-heading-m">Other ways to access this service</h2>

<p class="govuk-body">You can contact HMRC by:</p>

{{ govukList({
  items: [
    { text: "phone — call 0300 200 3300 (Monday to Friday, 8am to 6pm)" },
    { text: "post — write to HMRC, BX9 1AS" }
  ],
  classes: "govuk-list--bullet"
}) }}

<p class="govuk-body">
  When you contact HMRC, tell them what service you were trying to use and that you could not verify your identity online.
</p>
```

## Accessibility

- Use a standard `<h1>` heading. Do not wrap it in a panel component — the green panel signals success and would confuse assistive technology users who cannot see the visual styling.
- Set the page `<title>` to reflect the failure, for example "We could not confirm your identity – Service name – GOV.UK". Screen reader users hear the title first and need to understand the outcome at once.
- Make sure contact information (phone numbers, addresses) sits in the page content — not hidden behind interactive elements.
- Phone numbers must be real links using `tel:` hrefs on mobile-friendly layouts, or plain text that users can copy and paste.
- The "Try again" button uses `govuk-button--secondary` to avoid implying that it’s the primary action. This prevents users from assuming the button will submit data.
- Use a logical heading hierarchy: H1 for the page title, H2 for "Other ways to access this service".

## Do and do not

**Do:**
- Use a standard page heading that states the outcome: "We could not confirm your identity"
- Provide alternative ways to access the service (phone, post, office visit)
- Include specific HMRC contact details with phone numbers and opening hours
- Offer a "Try again" option where the service supports it
- Tell users what information to have ready when contacting HMRC
- Set the page title to reflect the failure outcome

**Do not:**
- Use the green panel component — it signals success
- Reveal why the identity check failed or expose security details
- Leave users at a dead end without any next steps
- Use vague heading text such as "Something went wrong" or "Error"
- Show technical error codes or system messages
- Blame the user for the failure

## Related components and patterns

- [../../../govuk-design-system/components/button/SKILLS.md](../../../govuk-design-system/components/button/SKILLS.md)
- [../../../govuk-design-system/patterns/pages/problem-with-the-service-pages/SKILLS.md](../../../govuk-design-system/patterns/pages/problem-with-the-service-pages/SKILLS.md)
- [../../../govuk-design-system/patterns/help-users-to/contact-a-department-or-service-team/SKILLS.md](../../../govuk-design-system/patterns/help-users-to/contact-a-department-or-service-team/SKILLS.md)
- [../confirmed-identity/SKILLS.md](../confirmed-identity/SKILLS.md)
- [../match-an-organisation-to-hmrc-records/SKILLS.md](../match-an-organisation-to-hmrc-records/SKILLS.md)
