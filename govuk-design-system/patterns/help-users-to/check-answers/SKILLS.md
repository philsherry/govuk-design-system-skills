---
category: patterns
description: Use this pattern to let users review and confirm their answers before they submit a form or complete a transaction.
govuk-frontend: "5.x"
keywords:
  - "answers"
  - "change answers"
  - "check answers"
  - "review answers"
  - "summary page"
last-reviewed: "2026-04-03"
name: Check answers
source: "https://design-system.service.gov.uk/patterns/check-answers/"
subcategory: help-users-to
---

# Check answers

> Use this pattern to let users review and confirm their answers before they submit a form or complete a transaction.
> Source: https://design-system.service.gov.uk/patterns/check-answers/

## Overview

The check answers pattern lets users review and confirm the information they have provided before submitting it. Place it as the final step before a confirmation page in a multi-step form journey. Showing users a summary of their answers gives them confidence that the information is correct and reduces the number of errors and support requests.

This pattern uses the Summary list component (`govukSummaryList`) to display each answer alongside the question it answers, with a "Change" link next to each row so the user can go back and edit any answer before submitting.

The page typically ends with a declaration (where required) and a submit button. The button label should reflect the action the user takes — for example "Submit application", "Confirm and send", or "Accept and send".

## When to use this pattern

- On any multi-step form journey before the user makes a final submission.
- When the user's answers have legal, financial, or significant personal consequences and they need to confirm they are correct.
- When users may need to review a large amount of information before committing to a submission.

## When not to use this pattern

- Do not use a check answers page for short forms where the user answers only one or two questions — it adds unnecessary steps.
- Do not use it when the user can change or correct the information after submission without negative consequences.

## How it works

### Page structure

The check answers page should:

1. Have a clear `<h1>` heading — typically "Check your answers" or "Check your answers before sending your [application/request]".
2. Display all answers grouped logically, using the Summary list component.
3. Provide a "Change" link on every row that allows editing.
4. Include a declaration where required by law or policy.
5. End with a submit button labelled with the specific action, such as "Confirm and send".

### Grouping answers

If your form has more than a handful of sections, group the answers under section headings using the Summary list's `card` variant or by placing more than one summary list with `<h2>` headings above each group.

### Change links

Each "Change" link must:
- Link back to the specific question page in the form.
- Pre-populate the question field with the user's existing answer when they return to it.
- Use visually hidden text after "Change" to provide context for screen reader users: for example, `Change <span class="govuk-visually-hidden">name</span>`.
- Return the user to the check answers page after they have made their change, not to the next step in the form.

### Declaration

If users need to confirm the accuracy of their information or agree to terms before submitting, add a declaration above the submit button. The declaration can be a simple paragraph or a checkbox if you need explicit agreement.

### Submit button

Label the submit button with the action. Do not label it "Continue" or "Next" — the user needs to understand this is the final submission step. Examples: "Submit application", "Confirm and send", "Accept and send".

## Code Examples

### Basic check answers page

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds-from-desktop">

    <h1 class="govuk-heading-xl">Check your answers before sending your application</h1>

    <dl class="govuk-summary-list govuk-!-margin-bottom-9">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Name
        </dt>
        <dd class="govuk-summary-list__value">
          Sarah Philips
        </dd>
        <dd class="govuk-summary-list__actions">
          <a class="govuk-link" href="/name">
            Change<span class="govuk-visually-hidden"> name</span>
          </a>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Date of birth
        </dt>
        <dd class="govuk-summary-list__value">
          5 January 1978
        </dd>
        <dd class="govuk-summary-list__actions">
          <a class="govuk-link" href="/date-of-birth">
            Change<span class="govuk-visually-hidden"> date of birth</span>
          </a>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Address
        </dt>
        <dd class="govuk-summary-list__value">
          72 Guild Street<br>
          London<br>
          SE23 6FH
        </dd>
        <dd class="govuk-summary-list__actions">
          <a class="govuk-link" href="/address">
            Change<span class="govuk-visually-hidden"> address</span>
          </a>
        </dd>
      </div>
    </dl>

    <h2 class="govuk-heading-m">Now send your application</h2>
    <p class="govuk-body">
      By submitting this application you are confirming that, to the best of your knowledge, the details you are providing are correct.
    </p>

    <form method="post" novalidate>
      <button type="submit" class="govuk-button" data-module="govuk-button">
        Accept and send
      </button>
    </form>

  </div>
</div>
```

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds-from-desktop">

    <h1 class="govuk-heading-xl">Check your answers before sending your application</h1>

    {{ govukSummaryList({
      classes: "govuk-!-margin-bottom-9",
      rows: [
        {
          key: {
            text: "Name"
          },
          value: {
            text: "Sarah Philips"
          },
          actions: {
            items: [
              {
                href: "/name",
                text: "Change",
                visuallyHiddenText: "name"
              }
            ]
          }
        },
        {
          key: {
            text: "Date of birth"
          },
          value: {
            text: "5 January 1978"
          },
          actions: {
            items: [
              {
                href: "/date-of-birth",
                text: "Change",
                visuallyHiddenText: "date of birth"
              }
            ]
          }
        },
        {
          key: {
            text: "Address"
          },
          value: {
            html: "72 Guild Street<br>London<br>SE23 6FH"
          },
          actions: {
            items: [
              {
                href: "/address",
                text: "Change",
                visuallyHiddenText: "address"
              }
            ]
          }
        }
      ]
    }) }}

    <h2 class="govuk-heading-m">Now send your application</h2>
    <p class="govuk-body">
      By submitting this application you are confirming that, to the best of your knowledge, the details you are providing are correct.
    </p>

    <form method="post" novalidate>
      {{ govukButton({
        text: "Accept and send"
      }) }}
    </form>

  </div>
</div>
```

### With grouped sections (more than one summary list)

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds-from-desktop">

    <h1 class="govuk-heading-xl">Check your answers</h1>

    <h2 class="govuk-heading-m">Personal details</h2>
    <dl class="govuk-summary-list govuk-!-margin-bottom-9">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">Name</dt>
        <dd class="govuk-summary-list__value">Sarah Philips</dd>
        <dd class="govuk-summary-list__actions">
          <a class="govuk-link" href="/name">Change<span class="govuk-visually-hidden"> name</span></a>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">Date of birth</dt>
        <dd class="govuk-summary-list__value">5 January 1978</dd>
        <dd class="govuk-summary-list__actions">
          <a class="govuk-link" href="/date-of-birth">Change<span class="govuk-visually-hidden"> date of birth</span></a>
        </dd>
      </div>
    </dl>

    <h2 class="govuk-heading-m">Contact details</h2>
    <dl class="govuk-summary-list govuk-!-margin-bottom-9">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">Email address</dt>
        <dd class="govuk-summary-list__value">sarah.philips@example.com</dd>
        <dd class="govuk-summary-list__actions">
          <a class="govuk-link" href="/email">Change<span class="govuk-visually-hidden"> email address</span></a>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">Phone number</dt>
        <dd class="govuk-summary-list__value">07700 900 982</dd>
        <dd class="govuk-summary-list__actions">
          <a class="govuk-link" href="/phone">Change<span class="govuk-visually-hidden"> phone number</span></a>
        </dd>
      </div>
    </dl>

    <form method="post" novalidate>
      <button type="submit" class="govuk-button" data-module="govuk-button">
        Confirm and send
      </button>
    </form>

  </div>
</div>
```

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds-from-desktop">

    <h1 class="govuk-heading-xl">Check your answers</h1>

    <h2 class="govuk-heading-m">Personal details</h2>
    {{ govukSummaryList({
      classes: "govuk-!-margin-bottom-9",
      rows: [
        {
          key: { text: "Name" },
          value: { text: "Sarah Philips" },
          actions: { items: [{ href: "/name", text: "Change", visuallyHiddenText: "name" }] }
        },
        {
          key: { text: "Date of birth" },
          value: { text: "5 January 1978" },
          actions: { items: [{ href: "/date-of-birth", text: "Change", visuallyHiddenText: "date of birth" }] }
        }
      ]
    }) }}

    <h2 class="govuk-heading-m">Contact details</h2>
    {{ govukSummaryList({
      classes: "govuk-!-margin-bottom-9",
      rows: [
        {
          key: { text: "Email address" },
          value: { text: "sarah.philips@example.com" },
          actions: { items: [{ href: "/email", text: "Change", visuallyHiddenText: "email address" }] }
        },
        {
          key: { text: "Phone number" },
          value: { text: "07700 900 982" },
          actions: { items: [{ href: "/phone", text: "Change", visuallyHiddenText: "phone number" }] }
        }
      ]
    }) }}

    <form method="post" novalidate>
      {{ govukButton({
        text: "Confirm and send"
      }) }}
    </form>

  </div>
</div>
```

### With card variant (GOV.UK Frontend v5.x)

#### Nunjucks

```njk
{{ govukSummaryList({
  card: {
    title: {
      text: "Personal details"
    },
    actions: {
      items: [
        {
          href: "/personal-details",
          text: "Change",
          visuallyHiddenText: "personal details"
        }
      ]
    }
  },
  rows: [
    {
      key: { text: "Name" },
      value: { text: "Sarah Philips" }
    },
    {
      key: { text: "Date of birth" },
      value: { text: "5 January 1978" }
    }
  ]
}) }}
```

## Accessibility

- Every "Change" link must include visually hidden text describing what the user changes, for example: `Change <span class="govuk-visually-hidden">name</span>`. This ensures screen reader users hear "Change name" rather than "Change" repeated for every row.
- The page heading must describe the purpose of the page.
- The declaration and submit button must be inside a `<form>` element.
- Do not use `<table>` elements for the summary list — use the `govuk-summary-list` component which uses a `<dl>` element.

## Do and Do not

**Do:**
- Include a "Change" link on every row so users can correct mistakes.
- Use visually hidden text on all "Change" links to give context to screen reader users.
- Pre-populate fields with the existing answer when users follow a "Change" link.
- Return users to the check answers page after they have made a change.
- Label the submit button with the specific action ("Accept and send", "Confirm and send").
- Group related answers under section headings when there are 4 or more questions.

**Do not:**
- Do not label the submit button "Continue" or "Next" on a check answers page.
- Do not repeat the question wording in full in the key column — use a short label.
- Do not show a check answers page for single-question forms.
- Do not let users change their answers after submission without a clear correction process.
- Do not omit the declaration where there is a legal or policy requirement to confirm accuracy.

## Related Components / Patterns

- [../../../components/summary-list/SKILLS.md](../../../components/summary-list/SKILLS.md)
- [../../../components/button/SKILLS.md](../../../components/button/SKILLS.md)
- [../../../patterns/pages/confirmation-pages/SKILLS.md](../../../patterns/pages/confirmation-pages/SKILLS.md)
- [../../../patterns/pages/question-pages/SKILLS.md](../../../patterns/pages/question-pages/SKILLS.md)
- [../complete-multiple-tasks/SKILLS.md](../complete-multiple-tasks/SKILLS.md)
