---
category: patterns
description: Tell users when something has gone wrong on the service side (HTTP 5xx errors) so they know the fault is not theirs.
govuk-frontend: "5.x"
keywords:
  - "500"
  - "problem"
  - "server error"
  - "something went wrong"
last-reviewed: "2026-04-03"
name: Problem with the service pages
source: "https://design-system.service.gov.uk/patterns/problem-with-the-service-pages/"
subcategory: pages
---

# Problem with the service pages

> Tell users when something has gone wrong on the service side (HTTP 5xx errors) so they know the fault is not theirs.
> Source: https://design-system.service.gov.uk/patterns/problem-with-the-service-pages/

## Overview

Show a "problem with the service" page when an unexpected error occurs on the server side — for example an unhandled exception, a downstream service failure, or a timeout. It reassures users that the problem is not their fault and tells them what they can do next.

This page is different from a "page not found" page (which handles 404 errors where a specific URL does not exist) and different from a "service unavailable" page (which covers planned downtime). The "problem with the service" page covers unexpected, unplanned failures — typically HTTP 500, 502, 503, and 504 responses in production.

Users should not see technical error messages, stack traces, or jargon. The page must be honest, apologetic, and clear about what the user can try. Never blame the user.

## When to use this pattern

- When the service encounters an unexpected server-side error (HTTP 5xx)
- When a critical dependency (for example a database or API) goes down without warning
- When the service cannot render a page due to an unhandled exception

## When not to use

- Do not use this page for a URL that does not exist — use the "Page not found" page (HTTP 404) instead
- Do not use this page for planned maintenance — use the "Service unavailable" page instead
- Do not use this page for validation errors on forms — use inline error messages and the Error summary component

## How it works

The "problem with the service" page must:

1. Use the `<h1>` "Sorry, there is a problem with the service" — this is the standard GOV.UK wording
2. Follow the heading straight away with "Try again later." so users know they can retry
3. Tell users what happened to any data they entered — whether the service saved it or not
4. Provide contact details if the user needs to complete a time-sensitive task
5. Not display any technical error messages, exception details, or error codes to end users — log these server-side instead

The page title (`<title>`) should be "Sorry, there is a problem with the service – [Service name] – GOV.UK".

This page should use the full service page template — header, footer, and skip link should all be present. The page itself should be as lightweight as possible so it renders even when the main service is having difficulties.

### Content guidance

- Write in plain English — do not include "error" in the heading or body, and do not say the service is "down"
- Do not say "error" or use error codes (500, 502 etc) in the content shown to users
- If users may have lost data, tell them: "We have not saved your answers. When the service is available, you will have to start again."
- If the service saved the data, tell them: "We saved your information. You have until [date] to complete your [application]."
- If there is a way for them to complete the task another way (by phone or post), include those details
- Keep the page short — users do not want a long explanation; they want to know what to do

## Code Examples

### HTML

```html
<h1 class="govuk-heading-l">Sorry, there is a problem with the service</h1>

<p class="govuk-body">Try again later.</p>

<p class="govuk-body">We have not saved your answers. When the service is available, you will have to start again.</p>

<p class="govuk-body">
  If you have a question about your application, contact the <a class="govuk-link" href="/contact">Pension Service</a>.
</p>
```

### Nunjucks

```njk
<h1 class="govuk-heading-l">Sorry, there is a problem with the service</h1>

<p class="govuk-body">Try again later.</p>

<p class="govuk-body">We have not saved your answers. When the service is available, you will have to start again.</p>

<p class="govuk-body">
  If you have a question about your application, contact the <a class="govuk-link" href="/contact">Pension Service</a>.
</p>
```

### With saved data and full contact details

```html
<h1 class="govuk-heading-l">Sorry, there is a problem with the service</h1>

<p class="govuk-body">Try again later.</p>

<p class="govuk-body">We saved your information. You have until <strong>4 April 2026</strong> to complete your application.</p>

<p class="govuk-body">If you have a question about your application, contact the Passport Advice Line:</p>

<ul class="govuk-list">
  <li>Telephone: 0300 222 0000</li>
  <li>Textphone: 0300 222 0222</li>
  <li>Monday to Friday, 8am to 8pm (except public holidays)</li>
  <li>Saturday, 9am to 5:30pm</li>
</ul>
```

## Accessibility

- The `<h1>` "Sorry, there is a problem with the service" must be the first heading on the page and the page `<title>` should match it
- Do not use ARIA live regions or `role="alert"` — this is a full page, not a dynamic message
- Keep the standard service header and footer (including the skip link) present and functional
- Contact information must appear in a list format that screen reader users can navigate without difficulty
- Do not display raw error messages or stack traces — these may confuse screen reader users and are a security concern

## Do and Do not

**Do:**
- Use the exact heading "Sorry, there is a problem with the service"
- Tell users to try again later
- Tell users whether the service saved their data
- Provide contact information for time-sensitive needs
- Return an appropriate HTTP error status code (500, 502, 503, or 504)
- Log the actual error server-side for debugging

**Do not:**
- Show technical error messages, exception traces, or error codes to users
- Say "error" or use error codes in the page content
- Say the service is "down" or use maintenance jargon
- Blame the user
- Use this page for 404 errors — use "Page not found" instead
- Use this page for planned maintenance — use "Service unavailable" instead
- Strip out the service header and footer
- Claim the service saved user data when it did not

## Related Components / Patterns

- [../page-not-found-pages/SKILLS.md](../page-not-found-pages/SKILLS.md)
- [../service-unavailable-pages/SKILLS.md](../service-unavailable-pages/SKILLS.md)
- [../../../components/error-summary/SKILLS.md](../../../components/error-summary/SKILLS.md)
