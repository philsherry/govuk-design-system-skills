---
category: patterns
description: Use this pattern to help users understand whether a service is right for them before they start, preventing wasted effort and frustration.
govuk-frontend: "5.x"
keywords:
  - "eligibility"
  - "screening"
  - "suitability check"
  - "suitable"
last-reviewed: "2026-04-03"
name: Check a service is suitable
source: "https://design-system.service.gov.uk/patterns/check-a-service-is-suitable/"
subcategory: help-users-to
---

# Check a service is suitable

> Use this pattern to help users understand whether a service is right for them before they start, preventing wasted effort and frustration.
> Source: https://design-system.service.gov.uk/patterns/check-a-service-is-suitable/

## Overview

The "check a service is suitable" pattern helps users determine whether a service applies to their situation before they invest significant time completing it. You may also know this as an eligibility checker or screener. By asking a small number of upfront questions, you can direct users to the right service or explain why the service is not appropriate for them.

This pattern reduces the risk of users spending time on a service only to find out at the end that they are not eligible or that the service does not meet their needs. It also reduces the burden on services by filtering out users who are not in scope early in the journey.

The pattern uses a short sequence of simple yes/no or multiple-choice questions, followed by a clear result page that either invites the user to continue or explains why the service is not suitable and, where possible, what they should do instead.

## When to use this pattern

- When your service has clear eligibility criteria you can check before the user starts.
- When ineligible users may waste significant time completing the service only to find out the service does not apply to them.
- When you can present the eligibility check as a helpful service rather than a barrier.
- When there are alternative services or actions you can direct ineligible users towards.

## When not to use this pattern

- Do not use this pattern if almost all users will be eligible — the check adds unnecessary friction.
- Do not use it if the eligibility criteria are too complex to express in a short question sequence.
- Do not use it as a substitute for properly explaining the scope and purpose of a service on the service start page.
- Do not use it to discriminate against users unlawfully or to discourage legitimate users from accessing services.

## How it works

### Structure of the pattern

The check typically consists of:

1. **A start page or introductory screen** — briefly explaining what the check is for and how long it takes.
2. **A short question sequence** — no more than 5 to 10 questions. Each question is typically a radio button choice on its own page, following the "one thing per page" principle.
3. **A result page** — one of two outcomes:
   - The service **is suitable**: confirm to the user they can continue and provide a clear call to action.
   - The service **is not suitable**: explain why the service is not right for them and provide links to alternative services or guidance where available.

### Question design

- Ask only what you need to determine suitability.
- Use plain language. Avoid jargon or technical terms.
- Where possible, order questions so that the most common disqualifying condition comes first — this lets ineligible users exit fast.
- Use branching logic to skip questions that are not relevant to the user's situation.

### Result pages

If the service is suitable, use a clear, positive message and a call to action button to continue to the main service.

If the service is not suitable, you must:
- Tell the user that the service is not right for them.
- Explain why (without being dismissive or bureaucratic).
- Provide links to alternative services, contact details, or guidance where possible.
- Not leave the user at a dead end.

### Not a gate

The eligibility check should feel helpful, not like a locked door. Where possible, let users who are unsure about their eligibility still attempt the service. Do not block users with hard gates unless there is a strong policy or legal reason to do so.

## Code examples

### Single eligibility question (radios, one thing per page)

#### HTML

```html
<form method="post" novalidate>
  <div class="govuk-form-group">
    <fieldset class="govuk-fieldset">
      <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
        <h1 class="govuk-fieldset__heading">
          Are you a UK resident?
        </h1>
      </legend>
      <div class="govuk-radios" data-module="govuk-radios">
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="uk-resident" name="ukResident" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="uk-resident">
            Yes
          </label>
        </div>
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="uk-resident-2" name="ukResident" type="radio" value="no">
          <label class="govuk-label govuk-radios__label" for="uk-resident-2">
            No
          </label>
        </div>
      </div>
    </fieldset>
  </div>
  <button type="submit" class="govuk-button" data-module="govuk-button">
    Continue
  </button>
</form>
```

#### Nunjucks

```njk
<form method="post" novalidate>
  {{ govukRadios({
    name: "ukResident",
    fieldset: {
      legend: {
        text: "Are you a UK resident?",
        isPageHeading: true,
        classes: "govuk-fieldset__legend--l"
      }
    },
    items: [
      {
        value: "yes",
        text: "Yes"
      },
      {
        value: "no",
        text: "No"
      }
    ]
  }) }}

  {{ govukButton({
    text: "Continue"
  }) }}
</form>
```

### Service is not suitable — result page

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">
    <h1 class="govuk-heading-l">This service is not right for you</h1>
    <p class="govuk-body">
      This service is only for UK residents.
    </p>
    <p class="govuk-body">
      If you live outside the UK, you may be able to get help from
      <a href="https://www.gov.uk/contact-consulate" class="govuk-link">your nearest British consulate</a>.
    </p>
  </div>
</div>
```

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">
    <h1 class="govuk-heading-l">This service is not right for you</h1>
    <p class="govuk-body">
      This service is only for UK residents.
    </p>
    <p class="govuk-body">
      If you live outside the UK, you may be able to get help from
      <a href="https://www.gov.uk/contact-consulate" class="govuk-link">your nearest British consulate</a>.
    </p>
  </div>
</div>
```

### Service is suitable — result page with continue button

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">
    <h1 class="govuk-heading-l">You can use this service</h1>
    <p class="govuk-body">
      Based on your answers, you are eligible to apply.
    </p>
    <a href="/apply/start" role="button" draggable="false" class="govuk-button govuk-button--start" data-module="govuk-button">
      Start now
      <svg class="govuk-button__start-icon" xmlns="http://www.w3.org/2000/svg" width="17.5" height="19" viewBox="0 0 33 40" aria-hidden="true" focusable="false">
        <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
      </svg>
    </a>
  </div>
</div>
```

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">
    <h1 class="govuk-heading-l">You can use this service</h1>
    <p class="govuk-body">
      Based on your answers, you are eligible to apply.
    </p>
    {{ govukButton({
      text: "Start now",
      href: "/apply/start",
      isStartButton: true
    }) }}
  </div>
</div>
```

### With error (no answer selected)

#### HTML

```html
<form method="post" novalidate>
  <div class="govuk-form-group govuk-form-group--error">
    <fieldset class="govuk-fieldset" aria-describedby="uk-resident-error">
      <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
        <h1 class="govuk-fieldset__heading">
          Are you a UK resident?
        </h1>
      </legend>
      <p id="uk-resident-error" class="govuk-error-message">
        <span class="govuk-visually-hidden">Error:</span> Select yes if you are a UK resident
      </p>
      <div class="govuk-radios" data-module="govuk-radios">
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="uk-resident" name="ukResident" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="uk-resident">
            Yes
          </label>
        </div>
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="uk-resident-2" name="ukResident" type="radio" value="no">
          <label class="govuk-label govuk-radios__label" for="uk-resident-2">
            No
          </label>
        </div>
      </div>
    </fieldset>
  </div>
  <button type="submit" class="govuk-button" data-module="govuk-button">
    Continue
  </button>
</form>
```

#### Nunjucks

```njk
<form method="post" novalidate>
  {{ govukRadios({
    name: "ukResident",
    fieldset: {
      legend: {
        text: "Are you a UK resident?",
        isPageHeading: true,
        classes: "govuk-fieldset__legend--l"
      }
    },
    errorMessage: {
      text: "Select yes if you are a UK resident"
    },
    items: [
      {
        value: "yes",
        text: "Yes"
      },
      {
        value: "no",
        text: "No"
      }
    ]
  }) }}

  {{ govukButton({
    text: "Continue"
  }) }}
</form>
```

## Error messages

If the user does not select an answer:

- "Select yes if [condition]" — for yes/no questions
- "Select [option name] if [condition]" — for multiple-choice questions

Always place the error summary at the top of the page and link to the specific field that caused the error.

## Accessibility

- Each question page must use a `<fieldset>` and `<legend>` for grouped radio or checkbox inputs.
- Style the `<legend>` as the page heading using `govuk-fieldset__legend--l` and `isPageHeading: true`, and include the question text inside it.
- Associate error messages with the fieldset via `aria-describedby`.
- Result pages should use clear, unambiguous heading text that explains the outcome.
- Alternative service links on "not suitable" pages must be genuine, working links — do not leave users at a dead end.

## Do and do not

**Do:**
- Keep the number of questions to a minimum — ask only what you need to determine suitability.
- Use branching to skip irrelevant questions.
- Provide useful next steps on "not suitable" result pages.
- Use plain English. Avoid legal or technical language.
- Follow the "one thing per page" principle for each question.

**Do not:**
- Do not use the check as a bureaucratic barrier designed to reduce service uptake.
- Do not ask for information at this stage that you will ask for again later in the main service.
- Do not leave ineligible users at a dead end with no guidance on what to do next.
- Do not make the check longer than necessary — users will abandon if it feels like the whole service.
- Do not use hard gates unless there is a strong policy or legal reason to do so.

## Related components and patterns

- [../../../components/radios/SKILLS.md](../../../components/radios/SKILLS.md)
- [../../../components/button/SKILLS.md](../../../components/button/SKILLS.md)
- [../../../components/error-summary/SKILLS.md](../../../components/error-summary/SKILLS.md)
- [../../../components/error-message/SKILLS.md](../../../components/error-message/SKILLS.md)
- [../start-using-a-service/SKILLS.md](../start-using-a-service/SKILLS.md)
- [../../../patterns/pages/question-pages/SKILLS.md](../../../patterns/pages/question-pages/SKILLS.md)
