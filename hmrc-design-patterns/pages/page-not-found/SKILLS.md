---
category: patterns
description: Show an HMRC-specific "page not found" page that supplements the GOV.UK 404 pattern with HMRC contact details.
keywords:
  - "404"
  - "found"
  - "hmrc"
  - "missing page"
  - "not found"
  - "page not found"
last-reviewed: "2026-04-03"
name: Page not found
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/page-not-found/"
subcategory: pages
---

# Page not found

> Show an HMRC-specific "page not found" page that supplements the GOV.UK 404 pattern with HMRC contact details.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/page-not-found/

## Overview

The HMRC "page not found" pattern supplements the GOV.UK 404 page pattern. HMRC services use the heading "Page not found" and explain what the user can do next: check the URL, go to the service start page, or contact HMRC.

This pattern follows the GOV.UK page not found guidance but adds HMRC-specific contact details so users can get help through HMRC channels. The page should return an HTTP 404 status code.

## When to use

- When a user requests a URL that does not exist (HTTP 404 response) within an HMRC service
- When a bookmarked or shared URL no longer works within the HMRC service
- When URL parameters are missing or malformed and the page cannot render

## When not to use

- Do not use this page for server errors — use the "There is a problem with the service" page instead
- Do not use this page for planned maintenance — use the "Service unavailable" page instead
- Do not use this page when a user submits an invalid form — show inline validation errors instead

## How it works

The page not found page must:

1. Use the `<h1>` "Page not found" — this matches the GOV.UK standard wording
2. Explain why the user might see this page (broken link, mistyped URL)
3. Tell them what they can do next
4. Include HMRC-specific contact details so users can get help

The page title (`<title>`) should read "Page not found – [Service name] – GOV.UK".

Keep the standard service page template with the service header and footer. Do not strip back the layout. Do not add a back link — users have arrived from a broken or invalid URL.

### HMRC contact details

Include the relevant HMRC helpline or contact method for the service. This helps users who cannot resolve the problem on their own. Provide:

- A phone number for the relevant helpline
- Opening hours
- A link to the service start page on GOV.UK if one exists

## Code Examples

### HTML

```html
<h1 class="govuk-heading-l">Page not found</h1>

<p class="govuk-body">If you typed the web address, check it is correct.</p>

<p class="govuk-body">If you pasted the web address, check you copied the entire address.</p>

<p class="govuk-body">
  If the web address is correct or you selected a link or button,
  <a class="govuk-link" href="https://www.gov.uk/contact-hmrc">contact HMRC</a>
  if you need help with your tax.
</p>
```

### Nunjucks

```njk
<h1 class="govuk-heading-l">Page not found</h1>

<p class="govuk-body">If you typed the web address, check it is correct.</p>

<p class="govuk-body">If you pasted the web address, check you copied the entire address.</p>

<p class="govuk-body">
  If the web address is correct or you selected a link or button,
  <a class="govuk-link" href="https://www.gov.uk/contact-hmrc">contact HMRC</a>
  if you need help with your tax.
</p>
```

### With full HMRC contact details

```html
<h1 class="govuk-heading-l">Page not found</h1>

<p class="govuk-body">If you typed the web address, check it is correct.</p>

<p class="govuk-body">If you pasted the web address, check you copied the entire address.</p>

<p class="govuk-body">If the web address is correct or you selected a link or button, contact the Self Assessment helpline:</p>

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

- Use "Page not found" as the `<h1>` — screen reader users hear a clear description of the page state
- The page `<title>` should start with "Page not found" so screen reader users hear it before the page content
- Do not use `role="alert"` or ARIA live regions — this page loads as a full page, not a dynamic update
- Keep the service header, footer, and skip link on the page — do not remove navigation
- Present contact information in a list format so phone numbers and opening hours are easy to find
- Do not include error codes (404) in the heading or body text

## Do and Do not

**Do:**
- Use the exact heading "Page not found"
- Follow the standard body text pattern about checking typed or pasted URLs
- Include HMRC-specific contact details for the relevant helpline
- Link to the service start page on GOV.UK
- Return an HTTP 404 status code
- Keep the standard service header and footer

**Do not:**
- Do not use "404 error" or "Error 404" as the heading
- Do not show a blank page or a generic browser 404 page
- Do not include error codes in the page content
- Do not use this page for server errors — use "There is a problem with the service" instead
- Do not remove the navigation or skip link
- Do not add a back link

## Related Components / Patterns

- [GOV.UK Page not found pages](../../../govuk-design-system/patterns/pages/page-not-found-pages/SKILLS.md) — the base GOV.UK pattern that this HMRC pattern supplements
- [Service unavailable](../service-unavailable/SKILLS.md) — for planned downtime or maintenance
- [There is a problem with the service](../there-is-a-problem-with-the-service/SKILLS.md) — for unexpected server errors
