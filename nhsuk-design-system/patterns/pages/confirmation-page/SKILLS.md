---
category: patterns
description: Tell users their task is complete using a green panel, a reference number, and information about what happens next.
keywords:
  - "confirmation"
  - "confirmation page"
  - "reference number"
  - "submission complete"
  - "success page"
last-reviewed: "2026-04-03"
name: Confirmation page
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/patterns/confirmation-page"
subcategory: pages
---

# Confirmation page

> Tell users their task is complete using a green panel, a reference number, and information about what happens next.
> Source: <https://service-manual.nhs.uk/design-system/patterns/confirmation-page>

## Overview

Confirmation pages reassure users that they have completed a transaction. They provide a reference number (where applicable) and tell users what will happen next. Without a confirmation page, users may worry that the service did not receive their submission and attempt to submit again.

## When to use this pattern

Use a confirmation page at the end of every transactional service, straight after the user has submitted their information. Every service that collects information from users and processes it must show a confirmation page.

## When not to use this pattern

Do not use a confirmation page mid-transaction to confirm a single step — only use it at the end of the full journey. If the user has not yet finished, use a check answers page instead.

Do not use the Panel component for inline success messages within a service flow. Use the Notification banner component instead.

## How it works

The confirmation page should:

- Use the green panel component at the top of the page with a concise `<h1>` such as "Registration complete" or "We received your request"
- Include a reference number in the panel body if the service generates one
- Tell users what will happen next in a section below the panel (use an `<h2>`: "What happens next")
- Optionally include a "Print this page" link for users who need a record
- Include a feedback survey link at the bottom of the page
- Not show a back link or breadcrumbs — the user has completed the journey

The `<h1>` in the panel should be short and positive. Avoid vague text like "Success" or "Done". Use specific language like "Registration complete", "Appointment booked", or "We received your request".

The "What happens next" section should explain:

- What the service does with the information
- How long it takes
- How the service contacts users
- What users need to do in the meantime, if anything

## Code Examples

### HTML

```html
<div class="nhsuk-panel nhsuk-panel--confirmation">
  <h1 class="nhsuk-panel__title">
    Registration complete
  </h1>
  <div class="nhsuk-panel__body">
    Your reference number<br>
    <strong>NHS-2024-7X3F</strong>
  </div>
</div>

<p class="nhsuk-body">We have sent you a confirmation email.</p>

<h2 class="nhsuk-heading-m">What happens next</h2>

<p class="nhsuk-body">We have sent your registration to the surgery. They will contact you within 2 weeks to confirm your registration or to ask for more information.</p>

<p class="nhsuk-body">
  <a class="nhsuk-link" href="#">What did you think of this service?</a> (takes 30 seconds)
</p>
```

### Nunjucks

```njk
{{ panel({
  titleText: "Registration complete",
  html: "Your reference number<br><strong>NHS-2024-7X3F</strong>"
}) }}

<p class="nhsuk-body">We have sent you a confirmation email.</p>

<h2 class="nhsuk-heading-m">What happens next</h2>

<p class="nhsuk-body">We have sent your registration to the surgery. They will contact you within 2 weeks to confirm your registration or to ask for more information.</p>

<p class="nhsuk-body">
  <a class="nhsuk-link" href="#">What did you think of this service?</a> (takes 30 seconds)
</p>
```

## Accessibility

- The `<h1>` inside the panel gives the page a logical heading structure. Do not add a separate `<h1>` elsewhere on the page.
- The green panel communicates success visually. The text content must also convey the outcome — do not rely on colour alone.
- The page `<title>` should confirm success, for example "Registration complete - Service name - NHS", so screen reader users know the outcome at once.
- Do not auto-redirect away from the confirmation page — users may need time to note their reference number or print the page.
- Destroy session data after displaying the confirmation page so that navigating back does not re-submit the form.

## Do and Do not

**Do:**

- Use the green panel component with a positive, specific `<h1>`.
- Include a reference number in the panel body when the service generates one.
- Explain what happens next with specific timescales and contact methods.
- Send a confirmation email and reference the email on this page.
- Include a survey link so users can give feedback.

**Do not:**

- Show a back link or breadcrumbs on this page.
- Use vague `<h1>` text such as "Success" or "Thank you".
- Display error messages on this page.
- Ask users to do extra tasks after submission unless no other option exists.
- Use the panel component for inline success messages — use Notification banner instead.

## Related Components / Patterns

- [Panel component](https://service-manual.nhs.uk/design-system/components/panel)
- [Notification banner component](https://service-manual.nhs.uk/design-system/components/notification-banner)
- [Question pages pattern](../question-pages/SKILLS.md)
- [Check answers pattern](../../help-users-to/check-answers/SKILLS.md)
