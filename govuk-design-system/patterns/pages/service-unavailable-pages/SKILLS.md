---
category: patterns
description: Tell users when a service is intentionally unavailable — for example during maintenance or before a service has launched — and help them find an alternative way to complete their task.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Service unavailable pages
subcategory: pages
---

# Service unavailable pages

> Tell users when a service is intentionally unavailable — for example during maintenance or before a service has launched — and help them find an alternative way to complete their task.
> Source: https://design-system.service.gov.uk/patterns/service-unavailable-pages/

---

## Overview

Show a service unavailable page when you have intentionally taken a service offline or when the service is not yet available to all users. This is distinct from a "problem with the service" page, which handles unexpected technical errors. Teams plan service unavailable pages ahead of time.

Common scenarios include scheduled maintenance windows, pre-launch holding pages, services available only at certain times, and services that are closing. The page should tell users why the service is unavailable, when they can use it again (if known), and what they can do in the meantime.

Unlike the "problem with the service" page, teams can tailor service unavailable pages with specific information because they know the downtime in advance.

## When to use this pattern

- When you take a service offline for planned maintenance
- When a service has not yet launched but you want to provide a holding page
- When a service is available only during certain hours and users are accessing it outside those hours
- When a service is closing and users need to move to a replacement
- When a service is in beta or private beta and is not yet open to all users

## When not to use

- Do not use this page for unexpected server errors — use the "Problem with the service" page instead
- Do not use this page for individual pages that do not exist — use the "Page not found" page instead
- Do not use this page as an excuse to avoid fixing underlying performance problems

## How it works

The service unavailable page must:

1. Use the `<h1>` "Sorry, [service name] is unavailable" — or a close variant appropriate to the scenario (for example "Service unavailable" or "This service has closed")
2. If possible, say when the service will be available again with a specific date and time (for example "You will be able to use it from 4pm on Monday 14 April 2025")
3. If the end time is unknown, say "Try again later"
4. Tell users what they can do if they need to complete their task now — include phone numbers, emails, or alternative channels
5. Not use vague jargon like "down for maintenance" or "temporarily unavailable" without saying when it will be back

The page title (`<title>`) should be "Sorry, [service name] is unavailable – GOV.UK" or "Service unavailable – [Service name] – GOV.UK" as appropriate.

The page should use the full service page template with header and footer.

Do not use the word "error" on this page. Do not embed countdown timers or auto-refresh — these cause accessibility problems and unnecessary server load.

### Variants by scenario

**Scheduled maintenance with known end time:** State when the maintenance window ends. Use a specific date and time.

**Outside opening hours:** Tell users what hours the service is available and when they can come back.

**Service not yet launched:** Tell users when the service will be available and offer a way to sign up for updates if applicable.

**Service closing:** Explain that the service has closed, why, and where users should go instead.

**Unscheduled but planned:** "We are making improvements to this service. Try again later."

## Code Examples

### HTML

Scheduled maintenance with known end time:

```html
<h1 class="govuk-heading-l">Sorry, the service is unavailable</h1>

<p class="govuk-body">You will be able to use it from <strong>4pm on Monday 14 April 2025</strong>.</p>

<p class="govuk-body">We are updating the service now. We are sorry for any inconvenience.</p>

<p class="govuk-body">If you need to register an urgent change of circumstances, call us on <strong>0300 200 3300</strong>.</p>
```

Outside service hours:

```html
<h1 class="govuk-heading-l">Sorry, the service is unavailable</h1>

<p class="govuk-body">This service is only available between 7am and 11pm.</p>

<p class="govuk-body">Contact us if you need help outside these hours:</p>

<ul class="govuk-list">
  <li>Email: <a class="govuk-link" href="mailto:support@example.gov.uk">support@example.gov.uk</a></li>
  <li>Telephone: 0300 123 4567</li>
  <li>Monday to Friday, 7am to 11pm (except public holidays)</li>
</ul>
```

### Nunjucks

Scheduled maintenance with known end time:

```njk
<h1 class="govuk-heading-l">Sorry, the service is unavailable</h1>

<p class="govuk-body">You will be able to use it from <strong>4pm on Monday 14 April 2025</strong>.</p>

<p class="govuk-body">We are updating the service now. We are sorry for any inconvenience.</p>

<p class="govuk-body">If you need to register an urgent change of circumstances, call us on <strong>0300 200 3300</strong>.</p>
```

Unscheduled — end time unknown:

```njk
<h1 class="govuk-heading-l">Sorry, the service is unavailable</h1>

<p class="govuk-body">Try again later.</p>

<p class="govuk-body">If you need to complete an urgent application, contact us:</p>

<ul class="govuk-list">
  <li>Telephone: 0800 555 1234</li>
  <li>Monday to Friday, 9am to 5pm (except public holidays)</li>
</ul>
```

## Accessibility

- The `<h1>` and page `<title>` must state that the service is unavailable
- Specific dates and times must use an unambiguous format ("4pm on Monday 14 April 2025" not "16:00 14/04/2025") — this is easier for both screen reader users and all other users
- Do not rely on colour alone to show unavailability
- Keep the standard service header, footer, and skip link present so keyboard and screen reader users can navigate as usual
- Contact information should be in a list rather than buried in flowing prose
- Do not embed countdown timers or auto-refresh mechanisms — these cause problems for screen reader users and users who need extra time

## Do / Don't

**Do:**
- Give a specific date and time when the service will be back if known
- Say "Try again later" if the end time is not known
- Provide an alternative way to complete the task (phone number, email, paper form)
- Use the full service template with header and footer
- Use plain English — avoid jargon like "down for maintenance"

**Don't:**
- Say "temporarily unavailable" without giving a timescale
- Use the word "error" on this page
- Say "down for maintenance" or other technical jargon
- Use this page for unexpected technical errors — use "Problem with the service" instead
- Remove the service header and footer
- Embed countdown timers or auto-refresh

## Related Components / Patterns

- [../problem-with-the-service-pages/SKILLS.md](../problem-with-the-service-pages/SKILLS.md)
- [../page-not-found-pages/SKILLS.md](../page-not-found-pages/SKILLS.md)
