---
category: patterns
description: Tell users when a page does not exist (HTTP 404) and help them find what they are looking for.
govuk-frontend: "5.x"
keywords:
  - "404"
  - "found"
  - "missing page"
  - "not found"
  - "page not found pages"
last-reviewed: "2026-04-03"
name: Page not found pages
source: "https://design-system.service.gov.uk/patterns/page-not-found-pages/"
subcategory: pages
---

# Page not found pages

> Tell users when a page does not exist (HTTP 404) and help them find what they are looking for.
> Source: https://design-system.service.gov.uk/patterns/page-not-found-pages/

## Overview

Show a page not found page when a user tries to access a URL that does not exist in the service. This happens when users follow an old or broken link, mistype a URL, or when content has moved without a redirect.

A well-written page not found page reduces user frustration by explaining what has happened in plain English, suggesting what the user can do next, and providing a contact route if they need more help. It should not use technical jargon such as "404" or "error" in the main heading.

The page not found page is distinct from the "problem with the service" page: a 404 indicates the specific URL was not found; a 500-level error indicates the service itself has encountered a problem. Use the correct page type for each HTTP status.

## When to use this page

- When a user requests a URL that does not exist (HTTP 404 response)
- When a deep-linked URL within the service no longer works (for example a bookmark to a now-deleted page)
- When URL parameters are missing or malformed and the page cannot render

## When not to use

- Do not use this page for server errors or service outages — use the "Problem with the service" page instead
- Do not use this page for planned maintenance — use the "Service unavailable" page instead
- Do not show this page when a user submits an invalid form — show inline validation errors instead

## How it works

The page not found page must:

1. Use the `<h1>` "Page not found" — this is the standard GOV.UK wording and must stay as written
2. Explain why the user might be seeing this page (the link might not work, they may have mistyped the URL)
3. Tell them what they can do next
4. Use plain English throughout — avoid "404", "error", or technical terms

The page title (`<title>`) should be "Page not found – [Service name] – GOV.UK".

This page should use the standard service page template with the service header and footer, not a stripped-back error layout. A back link is not needed on this page — users should not need to go back to a URL that does not exist. Users should be able to navigate from the header and footer as usual.

The body text should follow this pattern:

> If you typed the web address, check that the address is correct.
> If you pasted the web address, check you copied the entire address.
> If the web address is correct or you selected a link or button, [contact details or try again].

If the service has a start page on GOV.UK, link to it. If contact details are available, include them so users can get help.

## Code Examples

### HTML

```html
<h1 class="govuk-heading-l">Page not found</h1>

<p class="govuk-body">If you typed the web address, check it is correct.</p>

<p class="govuk-body">If you pasted the web address, check you copied the entire address.</p>

<p class="govuk-body">If the web address is correct or you selected a link or button, <a class="govuk-link" href="/contact">contact the Pension Service</a> if you need to speak to someone about your application.</p>
```

### Nunjucks

```njk
<h1 class="govuk-heading-l">Page not found</h1>

<p class="govuk-body">If you typed the web address, check it is correct.</p>

<p class="govuk-body">If you pasted the web address, check you copied the entire address.</p>

<p class="govuk-body">If the web address is correct or you selected a link or button, <a class="govuk-link" href="/contact">contact the Pension Service</a> if you need to speak to someone about your application.</p>
```

### With full contact details

```html
<h1 class="govuk-heading-l">Page not found</h1>

<p class="govuk-body">If you typed the web address, check it is correct.</p>

<p class="govuk-body">If you pasted the web address, check you copied the entire address.</p>

<p class="govuk-body">If the web address is correct or you selected a link or button, contact the Pension Service:</p>

<ul class="govuk-list">
  <li>Email: <a class="govuk-link" href="mailto:pension.service@example.gov.uk">pension.service@example.gov.uk</a></li>
  <li>Telephone: 0800 731 7898</li>
  <li>Textphone: 0800 731 7339</li>
  <li>Monday to Friday, 8am to 6pm (except public holidays)</li>
</ul>
```

## Accessibility

- Use "Page not found" as the `<h1>` — this is clear and understood by all users including those using screen readers
- The page `<title>` should start with "Page not found" so that screen reader users hear this before the page content
- Do not use a `role="alert"` or ARIA live region on this page — this is a full page load, not a dynamic update
- Ensure the page is fully navigable — do not remove the service header, footer, or skip link
- Contact information should be in a readable list format, not embedded only in a sentence where phone numbers and email addresses may be hard to identify
- Do not include error codes (404) in the heading or body text

## Do and Do not

**Do:**
- Use the exact heading "Page not found"
- Follow the standard body text pattern about checking typed or pasted URLs
- Provide a way to contact the service team
- Link to a relevant starting point in the service
- Return an HTTP 404 status code for this page
- Keep the standard service header and footer on the page

**Do not:**
- Use "404 error" or "Error 404" as the heading
- Show a blank page or a generic browser 404 page
- Include error codes (404) in the page content
- Use this page for server errors — use "Problem with the service" instead
- Remove the navigation or skip link from this page
- Add a back link — users have arrived from a broken or invalid URL

## Related Components / Patterns

- [../problem-with-the-service-pages/SKILLS.md](../problem-with-the-service-pages/SKILLS.md)
- [../service-unavailable-pages/SKILLS.md](../service-unavailable-pages/SKILLS.md)
