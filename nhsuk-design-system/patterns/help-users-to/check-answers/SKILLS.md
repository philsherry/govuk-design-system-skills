---
category: patterns
description: Let users review and confirm their answers before they submit a form or complete a transaction.
keywords:
  - "answers"
  - "change answers"
  - "check answers"
  - "review answers"
  - "summary page"
last-reviewed: "2026-04-03"
name: Check answers
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/patterns/check-answers"
subcategory: help-users-to
---

# Check answers

> Let users review and confirm their answers before they submit a form or complete a transaction.
> Source: <https://service-manual.nhs.uk/design-system/patterns/check-answers>

## Overview

The check answers pattern lets users review and confirm the information they have provided before submitting it. Place it as the final step before a confirmation page in a multi-step form journey. Showing users a summary of their answers gives them confidence that the information is correct and reduces errors and support requests.

This pattern uses the Summary list component to display each answer alongside the question it answers, with a "Change" link next to each row so the user can go back and edit any answer before submitting.

The page ends with a declaration (where required) and a submit button. The button label should reflect the action the user takes — for example "Submit", "Confirm and send", or "Accept and send".

## When to use this pattern

- On any multi-step form journey before the user makes a final submission.
- When the user's answers have clinical, legal, or significant personal consequences and they need to confirm accuracy.
- When users need to review a large amount of information before committing.

## When not to use this pattern

- Do not use a check answers page for short forms where the user answers only one or two questions — it adds unnecessary steps.
- Do not use it when the user can change or correct the information after submission without negative consequences.

## How it works

### Page structure

The check answers page should:

1. Have a clear `<h1>` heading — typically "Check your answers" or "Check your answers before sending".
2. Display all answers grouped logically, using the Summary list component.
3. Provide a "Change" link on every row that allows editing.
4. Include a declaration where required by law or policy.
5. End with a submit button labelled with the specific action.

### Change links

Each "Change" link must:

- Link back to the specific question page.
- Pre-populate the question field with the user's existing answer when they return.
- Use visually hidden text after "Change" to provide context for screen reader users: for example, `Change <span class="nhsuk-u-visually-hidden">name</span>`.
- Return the user to the check answers page after they have made their change, not to the next step in the form.

### Grouping answers

If your form has more than a handful of sections, group the answers under section headings. Place more than one summary list with `<h2>` headings above each group.

### Submit button

Label the submit button with the action. Do not label it "Continue" or "Next" — the user needs to understand this is the final submission step.

## Code Examples

### HTML

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-two-thirds">

    <h1 class="nhsuk-heading-xl">Check your answers</h1>

    <dl class="nhsuk-summary-list nhsuk-u-margin-bottom-9">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">Name</dt>
        <dd class="nhsuk-summary-list__value">Sarah Philips</dd>
        <dd class="nhsuk-summary-list__actions">
          <a class="nhsuk-link" href="/name">
            Change<span class="nhsuk-u-visually-hidden"> name</span>
          </a>
        </dd>
      </div>
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">Date of birth</dt>
        <dd class="nhsuk-summary-list__value">5 January 1978</dd>
        <dd class="nhsuk-summary-list__actions">
          <a class="nhsuk-link" href="/date-of-birth">
            Change<span class="nhsuk-u-visually-hidden"> date of birth</span>
          </a>
        </dd>
      </div>
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">NHS number</dt>
        <dd class="nhsuk-summary-list__value">485 777 3456</dd>
        <dd class="nhsuk-summary-list__actions">
          <a class="nhsuk-link" href="/nhs-number">
            Change<span class="nhsuk-u-visually-hidden"> NHS number</span>
          </a>
        </dd>
      </div>
    </dl>

    <h2 class="nhsuk-heading-m">Now send your request</h2>
    <p class="nhsuk-body">
      By submitting this request you confirm that the information you have provided is correct.
    </p>

    <form method="post" novalidate>
      <button type="submit" class="nhsuk-button">
        Accept and send
      </button>
    </form>

  </div>
</div>
```

### Nunjucks

```njk
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-two-thirds">

    <h1 class="nhsuk-heading-xl">Check your answers</h1>

    {{ summaryList({
      classes: "nhsuk-u-margin-bottom-9",
      rows: [
        {
          key: { text: "Name" },
          value: { text: "Sarah Philips" },
          actions: {
            items: [{
              href: "/name",
              text: "Change",
              visuallyHiddenText: "name"
            }]
          }
        },
        {
          key: { text: "Date of birth" },
          value: { text: "5 January 1978" },
          actions: {
            items: [{
              href: "/date-of-birth",
              text: "Change",
              visuallyHiddenText: "date of birth"
            }]
          }
        },
        {
          key: { text: "NHS number" },
          value: { text: "485 777 3456" },
          actions: {
            items: [{
              href: "/nhs-number",
              text: "Change",
              visuallyHiddenText: "NHS number"
            }]
          }
        }
      ]
    }) }}

    <h2 class="nhsuk-heading-m">Now send your request</h2>
    <p class="nhsuk-body">
      By submitting this request you confirm that the information you have provided is correct.
    </p>

    <form method="post" novalidate>
      {{ button({
        text: "Accept and send"
      }) }}
    </form>

  </div>
</div>
```

## Accessibility

- Every "Change" link must include visually hidden text describing what the user changes. This ensures screen reader users hear "Change name" rather than "Change" repeated for every row.
- The page heading must describe the purpose of the page.
- The declaration and submit button must be inside a `<form>` element.
- Do not use `<table>` elements for the summary list — use the `nhsuk-summary-list` component which uses a `<dl>` element.

## Do and Do not

**Do:**

- Include a "Change" link on every row so users can correct mistakes.
- Use visually hidden text on all "Change" links to give context to screen reader users.
- Pre-populate fields with the existing answer when users follow a "Change" link.
- Return users to the check answers page after they have made a change.
- Label the submit button with the specific action ("Accept and send", "Confirm and send").

**Do not:**

- Label the submit button "Continue" or "Next" on a check answers page.
- Repeat the question wording in full in the key column — use a short label.
- Show a check answers page for single-question forms.
- Let users change their answers after submission without a clear correction process.

## Related Components / Patterns

- [Summary list component](https://service-manual.nhs.uk/design-system/components/summary-list)
- [Confirmation page pattern](../../pages/confirmation-page/SKILLS.md)
- [Question pages pattern](../../pages/question-pages/SKILLS.md)
- [Complete multiple tasks pattern](../complete-multiple-tasks/SKILLS.md)
