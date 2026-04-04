---
category: patterns
description: A pattern that lets users add items to a list one at a time, review each item, and decide whether to add more.
hmrc-frontend: "7.x"
keywords:
  - "add another"
  - "add to a list"
  - "dynamic list"
  - "list builder"
  - "repeating pattern"
  - "summary list"
last-reviewed: "2026-04-03"
name: Add to a list
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/add-to-a-list/"
subcategory: service
---

# Add to a list

> A pattern that lets users add items to a list one at a time, review each item, and decide whether to add more.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/add-to-a-list/

## Overview

The add-to-a-list pattern lets users build up a list of items when the total number of items is not known in advance. For example, a user adding directors to a company registration does not know at the start how many directors they need to enter.

The pattern works in three stages:

1. The user enters details for one item using a standard question page flow.
2. After completing the item, a summary page shows all items added so far in a summary list with "Change" and "Remove" links for each item.
3. A radio question asks "Do you need to add another [item]?" with "Yes" and "No" options.

If the user selects "Yes", the flow returns to step 1. If the user selects "No", the flow moves to the next section.

This pattern avoids forcing users to state how many items they need upfront. It keeps each item entry short and gives users a clear view of what they have added at every stage.

## When to use

- When users need to add a variable number of items to a list (for example, directors, addresses, or bank accounts).
- When each item requires its own set of questions.
- When users need to review all items before continuing.
- When there is no fixed upper limit on the number of items, or the limit is high enough that a static form would be impractical.

## When not to use

- Do not use this pattern when you know the exact number of items in advance — use a fixed set of question pages instead.
- Do not use this pattern for a single item — show the fields on one page.
- Do not use this pattern when users must provide exactly one item — remove the "add another" question and proceed after the first entry.

## How it works

### Item entry

Each item follows a one-thing-per-page approach. The user enters the details for one item across one or more question pages. After they complete the final question for that item, the service stores the item and shows the summary page.

### Summary page

The summary page displays all added items in a GOV.UK summary list. Each row shows a summary of the item (for example, the director's name) with "Change" and "Remove" action links.

Below the summary list, a radio group asks "Do you need to add another [item]?" with "Yes" and "No" options. Replace "[item]" with the specific noun (for example, "director" or "address").

### Removing an item

When a user selects "Remove", show a confirmation page asking "Are you sure you want to remove [item name]?" with "Yes" and "No" options. Do not remove items without confirmation.

### Changing an item

When a user selects "Change", take them back through the question pages for that item, pre-populated with their previous answers. After the user finishes editing, return them to the summary page.

### Empty state

When users have not added any items yet, show a message (for example, "You have not added any directors") and a button labelled "Add a director" instead of the summary list and radio question.

## Code examples

### Summary page with items

#### HTML

```html
<h1 class="govuk-heading-l">You have added 2 directors</h1>

<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      Jane Smith
    </dt>
    <dd class="govuk-summary-list__actions">
      <ul class="govuk-summary-list__actions-list">
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="/director/1/change">
            Change<span class="govuk-visually-hidden"> Jane Smith</span>
          </a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="/director/1/remove">
            Remove<span class="govuk-visually-hidden"> Jane Smith</span>
          </a>
        </li>
      </ul>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      John Doe
    </dt>
    <dd class="govuk-summary-list__actions">
      <ul class="govuk-summary-list__actions-list">
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="/director/2/change">
            Change<span class="govuk-visually-hidden"> John Doe</span>
          </a>
        </li>
        <li class="govuk-summary-list__actions-list-item">
          <a class="govuk-link" href="/director/2/remove">
            Remove<span class="govuk-visually-hidden"> John Doe</span>
          </a>
        </li>
      </ul>
    </dd>
  </div>
</dl>

<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
      Do you need to add another director?
    </legend>
    <div class="govuk-radios" data-module="govuk-radios">
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="add-another" name="addAnother" type="radio" value="yes">
        <label class="govuk-label govuk-radios__label" for="add-another">Yes</label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="add-another-2" name="addAnother" type="radio" value="no">
        <label class="govuk-label govuk-radios__label" for="add-another-2">No</label>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks

```njk
{% set directorsHtml %}
  {{ govukSummaryList({
    rows: [
      {
        key: { text: "Jane Smith" },
        actions: {
          items: [
            {
              href: "/director/1/change",
              text: "Change",
              visuallyHiddenText: "Jane Smith"
            },
            {
              href: "/director/1/remove",
              text: "Remove",
              visuallyHiddenText: "Jane Smith"
            }
          ]
        }
      },
      {
        key: { text: "John Doe" },
        actions: {
          items: [
            {
              href: "/director/2/change",
              text: "Change",
              visuallyHiddenText: "John Doe"
            },
            {
              href: "/director/2/remove",
              text: "Remove",
              visuallyHiddenText: "John Doe"
            }
          ]
        }
      }
    ]
  }) }}
{% endset %}

<h1 class="govuk-heading-l">You have added 2 directors</h1>

{{ directorsHtml | safe }}

{{ govukRadios({
  name: "addAnother",
  fieldset: {
    legend: {
      text: "Do you need to add another director?",
      classes: "govuk-fieldset__legend--m"
    }
  },
  items: [
    { value: "yes", text: "Yes" },
    { value: "no", text: "No" }
  ]
}) }}
```

### Empty state

#### Nunjucks

```njk
<h1 class="govuk-heading-l">Directors</h1>

<p class="govuk-body">You have not added any directors.</p>

{{ govukButton({
  text: "Add a director",
  href: "/director/add"
}) }}
```

### Remove confirmation page

#### Nunjucks

```njk
{{ govukRadios({
  name: "confirmRemove",
  fieldset: {
    legend: {
      text: "Are you sure you want to remove Jane Smith?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    { value: "yes", text: "Yes" },
    { value: "no", text: "No" }
  ]
}) }}
```

## Accessibility

- Each "Change" and "Remove" link must include visually hidden text that identifies the item. Screen reader users hear "Change Jane Smith" rather than "Change" repeated for every row.
- The summary list uses a `<dl>` element, which screen readers announce as a description list, giving users context about the structure.
- The "Do you need to add another?" question uses a `<fieldset>` and `<legend>`, so screen readers announce the question before the radio options.
- Heading text on the summary page should state the count of items (for example, "You have added 2 directors") so users know how many items exist without reading the full list.
- The remove confirmation page prevents accidental deletions and gives keyboard and screen reader users a clear decision point.

## Do and do not

**Do:**
- Use the one-thing-per-page approach for item entry questions.
- Show a summary list of all added items with "Change" and "Remove" links.
- Include visually hidden text in action links to distinguish items for screen reader users.
- Ask a yes/no question to confirm whether the user wants to add another item.
- Show a confirmation step before removing an item.
- Update the heading text to reflect the current item count.

**Do not:**
- Do not ask users to state the number of items upfront.
- Do not remove items without a confirmation step.
- Do not use this pattern for a fixed number of items — use individual question pages instead.
- Do not show the "add another" radio question when the list is empty — show an "Add a [item]" button instead.
- Do not mix different item types in the same list.

## Related components and patterns

- [../../../govuk-design-system/components/summary-list/SKILLS.md](../../../govuk-design-system/components/summary-list/SKILLS.md)
- [../../../govuk-design-system/components/radios/SKILLS.md](../../../govuk-design-system/components/radios/SKILLS.md)
- [../../../govuk-design-system/components/button/SKILLS.md](../../../govuk-design-system/components/button/SKILLS.md)
- [../../../govuk-design-system/patterns/help-users-to/check-answers/SKILLS.md](../../../govuk-design-system/patterns/help-users-to/check-answers/SKILLS.md)
- [../../../govuk-design-system/patterns/pages/question-pages/SKILLS.md](../../../govuk-design-system/patterns/pages/question-pages/SKILLS.md)
