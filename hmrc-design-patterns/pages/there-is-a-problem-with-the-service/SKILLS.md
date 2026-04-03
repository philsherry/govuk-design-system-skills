---
category: patterns
description: Tell users when an unexpected error occurs in an HMRC service and give them alternative ways to complete their task.
keywords:
  - "500"
  - "error"
  - "problem"
  - "problem with the service"
  - "server error"
last-reviewed: "2026-04-03"
name: There is a problem with the service
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/there-is-a-problem-with-the-service/"
subcategory: pages
---

# There is a problem with the service

> Tell users when an unexpected error occurs in an HMRC service and give them alternative ways to complete their task.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/there-is-a-problem-with-the-service/

## Overview

The HMRC "problem with the service" pattern supplements the GOV.UK 500 error page pattern. Use this page when an unexpected error occurs within the service.

The page apologises without technical jargon, tells users to try again later, and provides alternative contact methods. It does not expose stack traces, error codes, or debugging information.

## When to use

- When the HMRC service encounters an unexpected server error (HTTP 500)
- When a backend system fails and the service cannot complete the user's request
- When an unhandled exception occurs during a transaction

## When not to use

- Do not use this page for planned downtime — use "Service unavailable" instead
- Do not use this page when a URL does not exist — use "Page not found" instead
- Do not use this page for form validation errors — show inline validation errors instead
- Do not use this page for session timeouts — show a session timeout page instead

## How it works

The problem with the service page must:

1. Use the `<h1>` "Sorry, there is a problem with the service"
2. Tell users to try again later
3. Provide alternative ways to complete the task (phone, post)
4. Include HMRC-specific contact details
5. Never expose stack traces, error codes, or technical debugging information

The page title (`<title>`) should read "Sorry, there is a problem with the service – [Service name] – GOV.UK".

Return an HTTP 500 status code. Log the error details on the server — do not show them to the user.

### User data

If the error occurs mid-transaction, tell users whether the service saved their information. If the service saved it, reassure them. If the service did not save it, tell them they will need to start again.

## Code Examples

### HTML

```html
<h1 class="govuk-heading-l">Sorry, there is a problem with the service</h1>

<p class="govuk-body">Try again later.</p>

<p class="govuk-body">
  Any information you entered has not been saved. You will need to start again.
</p>

<p class="govuk-body">If you need to speak to someone about your tax, contact HMRC:</p>

<ul class="govuk-list">
  <li>Telephone: 0300 200 3310</li>
  <li>Outside UK: +44 161 931 9070</li>
  <li>Monday to Friday, 8am to 6pm</li>
</ul>
```

### Nunjucks

```njk
<h1 class="govuk-heading-l">Sorry, there is a problem with the service</h1>

<p class="govuk-body">Try again later.</p>

<p class="govuk-body">
  Any information you entered has not been saved. You will need to start again.
</p>

<p class="govuk-body">If you need to speak to someone about your tax, contact HMRC:</p>

<ul class="govuk-list">
  <li>Telephone: 0300 200 3310</li>
  <li>Outside UK: +44 161 931 9070</li>
  <li>Monday to Friday, 8am to 6pm</li>
</ul>
```

### With saved data reassurance

```html
<h1 class="govuk-heading-l">Sorry, there is a problem with the service</h1>

<p class="govuk-body">Try again later.</p>

<p class="govuk-body">
  We saved your answers. When the service returns, you can continue from where you left off.
</p>

<p class="govuk-body">If you need to speak to someone about your tax, contact HMRC:</p>

<ul class="govuk-list">
  <li>Telephone: 0300 200 3310</li>
  <li>Outside UK: +44 161 931 9070</li>
  <li>Monday to Friday, 8am to 6pm</li>
</ul>

<p class="govuk-body">
  <a class="govuk-link" href="https://www.gov.uk/self-assessment-tax-returns">
    Go to the Self Assessment start page
  </a>
</p>
```

## Accessibility

- Use "Sorry, there is a problem with the service" as the `<h1>` — screen reader users hear a clear description without jargon
- The page `<title>` should start with "Sorry, there is a problem with the service" so screen reader users hear it first
- Do not use `role="alert"` or ARIA live regions — this page loads as a full page, not a dynamic update
- Keep the service header, footer, and skip link on the page
- Present contact information in a list format for easy scanning
- Do not include HTTP status codes (500) or stack traces in the page content

## Do and Do not

**Do:**
- Use the heading "Sorry, there is a problem with the service"
- Tell users to try again later
- Tell users whether the service saved their information
- Provide alternative contact methods (phone, post)
- Include HMRC-specific helpline details
- Return an HTTP 500 status code
- Log error details on the server

**Do not:**
- Do not expose stack traces, error codes, or technical information
- Do not blame the user — the error happened on the server side
- Do not use "500 error" or technical jargon in the heading or body
- Do not leave users without an alternative way to complete their task
- Do not show a blank page or a generic server error page
- Do not use this page for planned maintenance — use "Service unavailable" instead

## Related Components / Patterns

- [GOV.UK Problem with the service pages](../../../govuk-design-system/patterns/pages/problem-with-the-service-pages/SKILLS.md) — the base GOV.UK pattern that this HMRC pattern supplements
- [Page not found](../page-not-found/SKILLS.md) — for missing pages (HTTP 404)
- [Service unavailable](../service-unavailable/SKILLS.md) — for planned downtime or maintenance
