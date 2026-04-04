---
category: patterns
description: Tell users that HMRC has confirmed their identity, explaining what happens next in the service.
keywords:
  - "confirmed identity"
  - "identity verification"
  - "identity check"
  - "verification success"
  - "Government Gateway"
last-reviewed: "2026-04-03"
name: Confirmed identity
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/confirmed-identity/"
subcategory: identity
---

# Confirmed identity

> Tell users that HMRC has confirmed their identity, explaining what happens next in the service.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/confirmed-identity/

## Overview

The confirmed identity page appears after a user passes identity verification. It tells the user that their identity check succeeded and explains what happens next in the service.

Use this page to give users confidence that they can proceed. Without a success confirmation, users may wonder whether the identity check worked and attempt to verify again.

This pattern uses the GOV.UK panel component with a green background to signal success. The panel heading reads "Identity confirmed" and the body text explains what happens next in the service. A "Continue" button below the panel moves the user to the next part of the journey.

## When to use

- After a user passes an identity verification check within an HMRC service.
- When the service needs to tell the user that HMRC has matched their identity to its records before allowing them to continue.
- At the point in the journey where identity verification ends and the main service flow begins.

## When not to use

- Do not use this page when identity verification fails — use the "Could not confirm identity" pattern instead.
- Do not use the panel component for mid-journey success messages. Use the GOV.UK notification banner with `type: "success"` for inline confirmations.
- Do not use this page as a general confirmation page at the end of a transaction — use the GOV.UK confirmation pages pattern for that purpose.

## How it works

The confirmed identity page should:

- Display the GOV.UK panel component with the heading "Identity confirmed"
- Include body text in the panel that tells the user what happens next, such as "You can now access your personal tax account"
- Show a "Continue" button below the panel that takes the user to the next step in the service
- Not display a back link — the user should not return to the identity verification flow
- Keep the page content brief and focused on the outcome

The page title should confirm the outcome, for example "Identity confirmed – [Service name] – GOV.UK". This ensures screen reader users understand the result as soon as the page loads.

Do not reveal details about the identity verification process on this page. The user needs to know the outcome and next step, not the method.

## Code examples

### HTML

```html
<div class="govuk-panel govuk-panel--confirmation">
  <h1 class="govuk-panel__title">
    Identity confirmed
  </h1>
  <div class="govuk-panel__body">
    You can now access your personal tax account.
  </div>
</div>

<p class="govuk-body">
  We have confirmed your identity. You can now continue to use the service.
</p>

<a href="/next-step" role="button" draggable="false"
  class="govuk-button"
  data-module="govuk-button">
  Continue
</a>
```

### Nunjucks

```njk
{{ govukPanel({
  titleText: "Identity confirmed",
  text: "You can now access your personal tax account."
}) }}

<p class="govuk-body">
  We have confirmed your identity. You can now continue to use the service.
</p>

{{ govukButton({
  text: "Continue",
  href: "/next-step"
}) }}
```

## Accessibility

- The `<h1>` sits inside the panel `<div>`. Do not add another `<h1>` elsewhere on the page.
- The green panel communicates success visually. The text content must also convey the outcome — do not rely on colour alone.
- Set the page `<title>` to confirm the result, for example "Identity confirmed – Service name – GOV.UK", so screen reader users know the outcome at once.
- Do not auto-redirect away from this page. Users need time to read and understand the outcome before they continue.
- The "Continue" button uses the `role="button"` attribute and `data-module="govuk-button"` to ensure it works with assistive technologies when rendered as a link.

## Do and do not

**Do:**
- Use the green panel component with "Identity confirmed" as the heading
- Explain what the user can do now that their identity check has passed
- Provide a "Continue" button so users know how to proceed
- Keep the page content short and focused on the outcome and next step
- Set the page title to reflect the successful outcome

**Do not:**
- Show a back link or breadcrumbs on this page
- Reveal details about how the identity verification process works
- Use vague heading text such as "Success" or "Done"
- Display error messages on this page
- Combine this page with other transaction confirmations — keep identity confirmation separate

## Related components and patterns

- [../../../govuk-design-system/components/panel/SKILLS.md](../../../govuk-design-system/components/panel/SKILLS.md)
- [../../../govuk-design-system/components/button/SKILLS.md](../../../govuk-design-system/components/button/SKILLS.md)
- [../../../govuk-design-system/components/notification-banner/SKILLS.md](../../../govuk-design-system/components/notification-banner/SKILLS.md)
- [../../../govuk-design-system/patterns/pages/confirmation-pages/SKILLS.md](../../../govuk-design-system/patterns/pages/confirmation-pages/SKILLS.md)
- [../could-not-confirm-identity/SKILLS.md](../could-not-confirm-identity/SKILLS.md)
- [../match-an-organisation-to-hmrc-records/SKILLS.md](../match-an-organisation-to-hmrc-records/SKILLS.md)
