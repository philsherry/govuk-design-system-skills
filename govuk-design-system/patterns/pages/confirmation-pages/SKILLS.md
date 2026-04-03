---
category: patterns
description: Tell users their task is complete using a green panel, a reference number, and clear information about what happens next.
govuk-frontend: "5.x"
keywords:
  - "confirmation"
  - "confirmation pages"
  - "reference number"
  - "submission complete"
  - "success page"
last-reviewed: "2026-04-03"
name: Confirmation pages
source: "https://design-system.service.gov.uk/patterns/confirmation-pages/"
subcategory: pages
---

# Confirmation pages

> Tell users their task is complete using a green panel, a reference number, and clear information about what happens next.
> Source: https://design-system.service.gov.uk/patterns/confirmation-pages/

## Overview

Confirmation pages reassure users that they have completed a transaction. They provide a reference number (where applicable) and tell users what will happen next. Without a confirmation page, users may worry that the service did not receive their submission and attempt to submit again.

## When to use this pattern

Use a confirmation page at the end of every transactional service, straight after the user has submitted their information. Every service that collects information from users and processes it must show a confirmation page.

## When not to use

Do not use a confirmation page mid-transaction to confirm a single step — only use it at the end of the full journey. If the user has not yet finished, use a check answers page instead.

Do not use the Panel component for inline success messages within a service flow. Use the Notification banner component with `type: "success"` instead.

## How it works

The confirmation page should:

- Use the green panel component at the top of the page with a concise H1 such as "Application complete" or "Your [thing] is now submitted"
- Include a reference number in the panel body if the service generates one
- Tell users what will happen next in a section below the panel (use an H2: "What happens next")
- Optionally include a "Print this page" link for users who need a record
- Include a feedback survey link at the bottom of the page
- Not show a back link or breadcrumbs — the user has completed the journey and should not navigate backwards

The H1 in the panel should be short and positive. Avoid vague text like "Success" or "Done". Use specific language like "Application complete", "Payment received", or "Your [application type] is now submitted".

The reference number, if shown, should be in the panel body below the title. Tell users to keep this reference number and explain when they might need it.

The "What happens next" section should explain:
- What the service will do with the information
- How long it will take
- How the service will contact users
- What users need to do in the meantime, if anything

## Code Examples

### HTML

```html
<div class="govuk-panel govuk-panel--confirmation">
  <h1 class="govuk-panel__title">
    Application complete
  </h1>
  <div class="govuk-panel__body">
    Your reference number<br>
    <strong>HDJ2123F</strong>
  </div>
</div>

<p class="govuk-body">We have sent you a confirmation email.</p>

<h2 class="govuk-heading-m">What happens next</h2>

<p class="govuk-body">We've sent your application to Hackney Electoral Register Office.</p>

<p class="govuk-body">They will contact you either to confirm your registration, or to ask for more information.</p>

<p class="govuk-body">
  <a class="govuk-link" href="#">What did you think of this service?</a> (takes 30 seconds)
</p>
```

### Nunjucks

```njk
{{ govukPanel({
  titleText: "Application complete",
  html: "Your reference number<br><strong>HDJ2123F</strong>"
}) }}

<p class="govuk-body">We have sent you a confirmation email.</p>

<h2 class="govuk-heading-m">What happens next</h2>

<p class="govuk-body">We've sent your application to Hackney Electoral Register Office.</p>

<p class="govuk-body">They will contact you either to confirm your registration, or to ask for more information.</p>

<p class="govuk-body">
  <a class="govuk-link" href="#">What did you think of this service?</a> (takes 30 seconds)
</p>
```

## Accessibility

- The `<h1>` is inside the panel `<div>` — the page still has a logical heading structure. Do not add a separate `<h1>` elsewhere on the page.
- The green panel communicates success visually. The text content must also convey the outcome — do not rely on colour alone.
- Screen readers convey reference numbers wrapped in `<strong>` tags through the surrounding context and visual weight.
- The page `<title>` should confirm success, for example "Application complete – Service name – GOV.UK", so screen reader users know the outcome at once.
- Do not auto-redirect away from the confirmation page — users may need time to note their reference number or print the page.
- Destroy session data after displaying the confirmation page so that navigating back does not re-submit or replay the form.

## Do and Do not

**Do:**
- Use the green panel component with a clear, positive H1
- Include a reference number in the panel body when the service generates one
- Explain what happens next with specific timescales and contact methods
- Send a confirmation email and reference the email on this page
- Include a survey link so users can give feedback
- Keep the page simple — users have finished

**Do not:**
- Show a back link or breadcrumbs on this page
- Use vague H1 text such as "Success" or "Thank you"
- Display error messages on this page
- Ask users to do extra tasks after submission unless there is no other option
- Use the panel component for inline success messages — use Notification banner instead
- Session-expire this page before users have had time to note their reference number

## Related Components / Patterns

- [../../../components/panel/SKILLS.md](../../../components/panel/SKILLS.md)
- [../../../components/notification-banner/SKILLS.md](../../../components/notification-banner/SKILLS.md)
- [../question-pages/SKILLS.md](../question-pages/SKILLS.md)
