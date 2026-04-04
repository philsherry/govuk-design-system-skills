---
category: patterns
description: Help users add more than one item of the same type to a list, then review what they have added before continuing.
dwp-frontend: "3.x"
keywords:
  - "add another"
  - "add to a list"
  - "loop"
  - "repeating"
  - "summary list"
last-reviewed: "2026-04-04"
name: Add another thing
source: "https://design-system.dwp.gov.uk/patterns/add-another-thing"
---

# Add another thing

> Help users add more than one item of the same type to a list, then review what they have added before continuing.
> Source: <https://design-system.dwp.gov.uk/patterns/add-another-thing>

## Overview

The "Add another thing" pattern lets users build a list of items — such as dependants, addresses, or jobs — one at a time through a looping flow. After adding each item, users see a summary of everything they have added and can choose to add more or continue. The pattern uses a secondary "Add another" button rather than a radio question, based on HMRC research that found the radio-based approach caused usability problems.

## When to use this pattern

Use this pattern when users need to provide one or more items of the same type — for example, adding dependants, previous addresses, or employment details.

## When not to use this pattern

Do not use this pattern when:

- the service knows in advance how many items a user needs to provide — use a fixed number of question pages instead
- users will only ever need to add one item — use a standard question page

## How it works

The pattern follows a looping flow:

1. The user answers one or more question pages about a single item.
2. A summary page shows all items added so far in a [Summary list](https://design-system.service.gov.uk/components/summary-list/).
3. The user selects "Add another" (a secondary button) to loop back, or "Continue" (the primary button) to move on.

This pattern uses a secondary button labelled "Add another [thing]" rather than radio buttons asking "Do you want to add another?". HMRC research from 2019 found usability issues with the radio-based approach, where users did not always understand the question or missed the radio options.

### Summary page

The summary page displays each item the user has added, with "Change" and "Remove" action links on each row.

Each action link must include visually hidden text that identifies the specific item. For example, if the user has added two people named "Alice Smith" and "Bob Jones", the links should read:

- `Change <span class="govuk-visually-hidden">Alice Smith</span>`
- `Remove <span class="govuk-visually-hidden">Alice Smith</span>`

This gives screen reader users unique, meaningful link text for every action.

### Removing an item

When a user selects "Remove", show a confirmation page before deleting the item. Do not remove items without confirmation.

If the user removes all items, redirect them to the first question page to add at least one item.

## Code examples

### Summary page with added items

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">You have added 2 people</h1>

    <dl class="govuk-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Alice Smith
        </dt>
        <dd class="govuk-summary-list__value">
          12 March 1990
        </dd>
        <dd class="govuk-summary-list__actions">
          <ul class="govuk-summary-list__actions-list">
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="/person/1/change">
                Change<span class="govuk-visually-hidden"> Alice Smith</span>
              </a>
            </li>
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="/person/1/remove">
                Remove<span class="govuk-visually-hidden"> Alice Smith</span>
              </a>
            </li>
          </ul>
        </dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">
          Bob Jones
        </dt>
        <dd class="govuk-summary-list__value">
          5 July 1985
        </dd>
        <dd class="govuk-summary-list__actions">
          <ul class="govuk-summary-list__actions-list">
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="/person/2/change">
                Change<span class="govuk-visually-hidden"> Bob Jones</span>
              </a>
            </li>
            <li class="govuk-summary-list__actions-list-item">
              <a class="govuk-link" href="/person/2/remove">
                Remove<span class="govuk-visually-hidden"> Bob Jones</span>
              </a>
            </li>
          </ul>
        </dd>
      </div>
    </dl>

    <form method="post" novalidate>
      <button type="submit" class="govuk-button" data-module="govuk-button" name="action" value="continue">
        Continue
      </button>
      <button type="submit" class="govuk-button govuk-button--secondary" data-module="govuk-button" name="action" value="add">
        Add another person
      </button>
    </form>

  </div>
</div>
```

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">You have added 2 people</h1>

    {{ govukSummaryList({
      rows: [
        {
          key: { text: "Alice Smith" },
          value: { text: "12 March 1990" },
          actions: {
            items: [
              { href: "/person/1/change", text: "Change", visuallyHiddenText: "Alice Smith" },
              { href: "/person/1/remove", text: "Remove", visuallyHiddenText: "Alice Smith" }
            ]
          }
        },
        {
          key: { text: "Bob Jones" },
          value: { text: "5 July 1985" },
          actions: {
            items: [
              { href: "/person/2/change", text: "Change", visuallyHiddenText: "Bob Jones" },
              { href: "/person/2/remove", text: "Remove", visuallyHiddenText: "Bob Jones" }
            ]
          }
        }
      ]
    }) }}

    <form method="post" novalidate>
      {{ govukButton({
        text: "Continue",
        name: "action",
        value: "continue"
      }) }}
      {{ govukButton({
        text: "Add another person",
        classes: "govuk-button--secondary",
        name: "action",
        value: "add"
      }) }}
    </form>

  </div>
</div>
```

## Accessibility

- Every "Change" and "Remove" link must include visually hidden text that identifies the item. Without this, screen reader users hear repeated identical link text.
- The heading should state how many items the user has added, giving immediate context.
- Use the GOV.UK [Summary list](https://design-system.service.gov.uk/components/summary-list/) component, which uses `<dl>` elements. Do not use `<table>` for this layout.

## Do and do not

**Do:**
- Use the GOV.UK Summary list component to display added items.
- Include visually hidden text in every "Change" and "Remove" link to identify the specific item.
- Show a confirmation page before removing an item.
- Update the heading to state how many items the user has added.

**Do not:**
- Do not use radio buttons to ask "Do you want to add another?" — use the secondary button approach instead.
- Do not use a `<table>` for the list of added items — use a `<dl>`-based Summary list.
- Do not let users remove an item without a confirmation step.
- Do not use this pattern when you know in advance how many items a user needs to provide.

## Related components and patterns

- [Summary list](https://design-system.service.gov.uk/components/summary-list/) — displays the added items
- [Button](https://design-system.service.gov.uk/components/button/) — primary and secondary buttons for Continue and Add another
- [Check answers](https://design-system.service.gov.uk/patterns/check-answers/) — the final review page where added items appear alongside other answers
- [HMRC Add to a list](https://design.tax.service.gov.uk/hmrc-design-patterns/add-to-a-list/) — the HMRC equivalent, which uses radios instead of a secondary button
