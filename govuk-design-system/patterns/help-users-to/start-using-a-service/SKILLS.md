---
category: patterns
description: Give users everything they need before they start — what the service does, what they will need, and a clear green Start now button.
govuk-frontend: "5.x"
keywords:
  - "landing page"
  - "service entry"
  - "start"
  - "start now"
last-reviewed: "2026-04-03"
name: Help users to start using a service
source: "https://design-system.service.gov.uk/patterns/start-using-a-service/"
subcategory: help-users-to
---

# Help users to start using a service

> Give users everything they need before they start — what the service does, what they will need, and a clear green Start now button.
> Source: https://design-system.service.gov.uk/patterns/start-using-a-service/

## Overview

The start using a service pattern describes how to create the entry point to a government service. The start page prepares users before they enter the service: it explains what the service does, tells them what they will need, and provides a clear call to action to begin.

For public-facing services, the canonical start page lives on www.gov.uk — the GOV.UK content platform — not on the service's own domain. Content designers working with GDS own and publish this page. The service team provides content for the GOV.UK start page, but GOV.UK content designers are responsible for the final form it takes. The service itself begins on the first page of the service journey, at a stable URL that the GOV.UK start page links to.

If your service is internal or hosted on a service domain without a GOV.UK start page, you can apply the same structural principles — clear statement of purpose, "Before you start" content, and a prominent Start now button — directly on your service.

## When to use this pattern

- For any public-facing transactional service that requires a clear entry point on GOV.UK.
- When users need to understand eligibility, required documents, or time commitment before beginning.
- When a service has both a new user journey and a returning user journey that you need to keep separate.
- When you want to reduce mid-journey drop-off by ensuring users arrive prepared.

## When not to use this pattern

- Do not recreate a full GOV.UK-style start page inside the service domain — the GOV.UK page is the canonical entry point, managed by GDS.
- Do not use this pattern for internal tools or caseworker-facing services where users do not need onboarding content.
- Do not put eligibility questions or screening logic on the GOV.UK start page itself — those belong on the service's own pages.

## How it works

### The GOV.UK start page

GDS and content designers own the GOV.UK start page. The service team provides:

- What the service does (used to write the H1 and introductory content).
- Who can use the service and any eligibility requirements.
- What users will need to have ready.
- How long the service takes.
- What happens after the user submits.

GDS publishes this content in the GOV.UK start page format. The service team does not publish this page directly.

### Structure of a start page

A well-structured start page includes:

1. **H1 — what the service does**: Written as a task — "Apply for a juggling licence", "Renew your passport". Focus on what the user wants to achieve, not on the service name.

2. **"Use this service to..." list**: A short bullet list (3–5 items) of what the service lets users do. Describe outcomes, not features.

3. **"Before you start" section**: Everything users need to have ready before they begin, including:
   - Documents or reference numbers (passport, National Insurance number, bank account details).
   - Who is eligible to use the service.
   - How long it takes to complete.
   - What happens after submission (how long a decision takes, how you will contact the user).

4. **Start now button**: A green GOV.UK start button with the arrow icon. It links to the first page of the service. Use `isStartButton: true` in the Nunjucks macro.

5. **Returning users**: A link for users who have already started or have an account, placed below the Start now button. Keep this separate from the primary call to action.

### The Start now button

The Start now button is a green GOV.UK button with an arrow icon (`isStartButton: true`). Render it as an `<a>` element (not `<button>`) because it links to a different URL — the service domain. The `href` points to the stable, bookmarkable first page of the service.

### Returning users

If the service supports saving progress or user accounts, include a labelled sign-in link below the Start now button. Do not merge the start-new and sign-in journeys into a single call to action — users need to be able to choose the right path.

### Eligibility screening

If users need eligibility screening before they start, link to an eligibility checker from the start page. Host the eligibility checker on the service domain, not on the GOV.UK start page. Keep any pre-start eligibility content concise — do not make users read a long list of criteria before they can begin.

### The service's first page URL

The URL that the Start now button links to must be stable and bookmarkable. Do not use session-dependent URLs or query-string-only entry points. Users and search engines may link directly to this URL.

## Code examples

### Start now button

#### HTML

```html
<a
  href="https://your-service.service.gov.uk/start"
  role="button"
  draggable="false"
  class="govuk-button govuk-button--start"
  data-module="govuk-button"
>
  Start now
  <svg
    class="govuk-button__start-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="17.5"
    height="19"
    viewBox="0 0 33 40"
    aria-hidden="true"
    focusable="false"
  >
    <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/>
  </svg>
</a>
```

#### Nunjucks

```njk
{{ govukButton({
  text: "Start now",
  href: "https://your-service.service.gov.uk/start",
  isStartButton: true
}) }}
```

### Full start page layout

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-xl">Apply for a juggling licence</h1>

    <p class="govuk-body">Use this service to:</p>
    <ul class="govuk-list govuk-list--bullet">
      <li>apply for a new juggling licence</li>
      <li>renew a licence that is about to expire</li>
    </ul>

    <p class="govuk-body">Applying usually takes around 10 minutes.</p>

    <h2 class="govuk-heading-m">Before you start</h2>
    <p class="govuk-body">You'll need:</p>
    <ul class="govuk-list govuk-list--bullet">
      <li>your National Insurance number</li>
      <li>a credit or debit card to pay the £20 fee</li>
    </ul>

    <a
      href="/apply/start"
      role="button"
      draggable="false"
      class="govuk-button govuk-button--start"
      data-module="govuk-button"
    >
      Start now
      <svg
        class="govuk-button__start-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="17.5"
        height="19"
        viewBox="0 0 33 40"
        aria-hidden="true"
        focusable="false"
      >
        <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z"/>
      </svg>
    </a>

    <p class="govuk-body">
      If you have already started an application, you can
      <a href="/sign-in" class="govuk-link">sign in to continue</a>.
    </p>

  </div>
</div>
```

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-xl">Apply for a juggling licence</h1>

    <p class="govuk-body">Use this service to:</p>
    <ul class="govuk-list govuk-list--bullet">
      <li>apply for a new juggling licence</li>
      <li>renew a licence that is about to expire</li>
    </ul>

    <p class="govuk-body">Applying usually takes around 10 minutes.</p>

    <h2 class="govuk-heading-m">Before you start</h2>
    <p class="govuk-body">You'll need:</p>
    <ul class="govuk-list govuk-list--bullet">
      <li>your National Insurance number</li>
      <li>a credit or debit card to pay the £20 fee</li>
    </ul>

    {{ govukButton({
      text: "Start now",
      href: "/apply/start",
      isStartButton: true
    }) }}

    <p class="govuk-body">
      If you have already started an application, you can
      <a href="/sign-in" class="govuk-link">sign in to continue</a>.
    </p>

  </div>
</div>
```

### With eligibility check link

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-xl">Claim a council tax reduction</h1>

    <p class="govuk-body">Use this service to apply for a reduction on your council tax bill if you're on a low income or receive certain benefits.</p>

    <p class="govuk-body">
      <a href="/check-eligibility" class="govuk-link">Check if you're eligible before you start</a>.
    </p>

    <h2 class="govuk-heading-m">Before you start</h2>
    <p class="govuk-body">You'll need:</p>
    <ul class="govuk-list govuk-list--bullet">
      <li>your National Insurance number</li>
      <li>details of your income, savings and investments</li>
      <li>details of anyone else who lives with you</li>
    </ul>

    {{ govukButton({
      text: "Start now",
      href: "/apply/start",
      isStartButton: true
    }) }}

  </div>
</div>
```

## Accessibility

- The Start now button must be an `<a>` element with `role="button"` and `draggable="false"`, not a `<button>` element. GOV.UK Frontend handles this automatically when you use `isStartButton: true` with an `href`.
- The SVG arrow icon inside the button must have `aria-hidden="true"` and `focusable="false"` to prevent screen readers from announcing it or users from focusing it.
- Page heading must be an `<h1>` — do not skip heading levels.
- Lists must use `<ul>` and `<li>` with the appropriate GOV.UK list classes.
- All links must use descriptive text — do not use "click here" or "here" as link text.

## Do and do not

**Do:**
- Use the GOV.UK start page on www.gov.uk as the canonical entry point for public-facing services.
- Write the H1 as a task — "Apply for...", "Renew your...", "Check if you can...".
- Include a "Before you start" section listing what users will need.
- Tell users how long the service takes to complete.
- Tell users what happens after they submit.
- Use `isStartButton: true` with an `href` for the Start now button.
- Link to a sign-in journey separately, below the Start now button.

**Do not:**
- Do not put eligibility screening on the GOV.UK start page — put it on the service.
- Do not combine the sign-in and start-new journeys into a single call to action.
- Do not use a `<button>` element for the Start now button — it must be an `<a>` that navigates to the service.
- Do not use a session-dependent URL as the service entry point.
- Do not reproduce GOV.UK guidance content on the start page — link to it instead.

## Related components and patterns

- [../../../components/button/SKILLS.md](../../../components/button/SKILLS.md)
- [../navigate-a-service/SKILLS.md](../navigate-a-service/SKILLS.md)
- [../create-accounts/SKILLS.md](../create-accounts/SKILLS.md)
- [../check-a-service-is-suitable/SKILLS.md](../check-a-service-is-suitable/SKILLS.md)
