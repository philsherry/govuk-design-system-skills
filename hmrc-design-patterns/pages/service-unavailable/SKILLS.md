---
category: patterns
description: Tell users an HMRC service has gone down for maintenance or hit an unexpected problem, and provide alternative ways to complete their task.
keywords:
  - "503"
  - "downtime"
  - "maintenance"
  - "service unavailable"
  - "unavailable"
last-reviewed: "2026-04-03"
name: Service unavailable
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/service-unavailable/"
subcategory: pages
---

# Service unavailable

> Tell users an HMRC service has gone down for maintenance or hit an unexpected problem, and provide alternative ways to complete their task.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/service-unavailable/

## Overview

The HMRC "service unavailable" pattern supplements the GOV.UK 503 page pattern. Use this page when the service goes down for planned maintenance or encounters a problem that makes it temporarily unavailable.

The page tells users what has happened, when the service will return (if known), and how they can complete their task through alternative channels such as phone or post. It includes HMRC-specific contact details so users do not reach a dead end.

## When to use

- When an HMRC service goes down for planned maintenance
- When the service encounters a temporary problem that makes it unavailable
- When you need to take the service offline for a deployment or infrastructure change

## When not to use

- Do not use this page for unexpected server errors that affect a single transaction — use "There is a problem with the service" instead
- Do not use this page when a specific URL does not exist — use "Page not found" instead
- Do not use this page for form validation errors — show inline validation errors instead

## How it works

The service unavailable page must:

1. Use the `<h1>` "Sorry, the service is unavailable"
2. Tell users when the service will return, if you know the time
3. Provide alternative ways to complete the task (phone, post)
4. Include HMRC-specific contact details

The page title (`<title>`) should read "Sorry, the service is unavailable – [Service name] – GOV.UK".

Return an HTTP 503 status code. Include a `Retry-After` header if you know when the service will return.

### Planned maintenance

When you know the downtime window, tell users the specific time the service will return. Use "You will be able to use the service from [time] on [date]." format.

### Unplanned outage

When you do not know when the service will return, tell users to try again later and provide alternative contact methods.

## Code Examples

### HTML (planned maintenance)

```html
<h1 class="govuk-heading-l">Sorry, the service is unavailable</h1>

<p class="govuk-body">You will be able to use the service from 9am on Monday 6 April 2026.</p>

<p class="govuk-body">If you need to speak to someone about your tax, contact HMRC:</p>

<ul class="govuk-list">
  <li>Telephone: 0300 200 3310</li>
  <li>Outside UK: +44 161 931 9070</li>
  <li>Monday to Friday, 8am to 6pm</li>
</ul>
```

### Nunjucks (planned maintenance)

```njk
<h1 class="govuk-heading-l">Sorry, the service is unavailable</h1>

<p class="govuk-body">You will be able to use the service from 9am on Monday 6 April 2026.</p>

<p class="govuk-body">If you need to speak to someone about your tax, contact HMRC:</p>

<ul class="govuk-list">
  <li>Telephone: 0300 200 3310</li>
  <li>Outside UK: +44 161 931 9070</li>
  <li>Monday to Friday, 8am to 6pm</li>
</ul>
```

### Unplanned outage

```html
<h1 class="govuk-heading-l">Sorry, the service is unavailable</h1>

<p class="govuk-body">Try again later.</p>

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
  for other ways to submit your return.
</p>
```

## Accessibility

- Use "Sorry, the service is unavailable" as the `<h1>` — this tells screen reader users what has happened without jargon
- The page `<title>` should start with "Sorry, the service is unavailable" so screen reader users hear it first
- Do not use `role="alert"` or ARIA live regions — this page loads as a full page, not a dynamic update
- Keep the service header, footer, and skip link on the page
- Present contact information in a list format for easy scanning
- Do not include HTTP status codes (503) in the heading or body text

## Do and Do not

**Do:**
- Use the heading "Sorry, the service is unavailable"
- Tell users when the service will return if you know the time
- Provide alternative contact methods (phone, post)
- Include HMRC-specific helpline details
- Return an HTTP 503 status code
- Link to the service start page on GOV.UK

**Do not:**
- Do not use "503 error" or technical jargon in the heading or body
- Do not leave users without an alternative way to complete their task
- Do not show a blank page or a generic server error page
- Do not use this page for unexpected errors in a single transaction — use "There is a problem with the service" instead
- Do not remove the navigation, header, or skip link

## Related Components / Patterns

- [GOV.UK Service unavailable pages](../../../govuk-design-system/patterns/pages/service-unavailable-pages/SKILLS.md) — the base GOV.UK pattern that this HMRC pattern supplements
- [Page not found](../page-not-found/SKILLS.md) — for missing pages (HTTP 404)
- [There is a problem with the service](../there-is-a-problem-with-the-service/SKILLS.md) — for unexpected server errors
