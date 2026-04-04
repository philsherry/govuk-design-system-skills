---
category: components
description: Use the summary list to summarise information, for example a user's responses at the end of a form.
govuk-frontend: "5.x"
keywords:
  - "check answers"
  - "definition list"
  - "key value"
  - "list"
  - "summary"
  - "summary list"
last-reviewed: "2026-04-03"
name: Summary List
source: "https://design-system.service.gov.uk/components/summary-list/"
---

# Summary List

> Use the summary list to summarise information, for example a user's responses at the end of a form.
> Source: https://design-system.service.gov.uk/components/summary-list/

## Overview

The summary list component displays a series of key–value pairs in a structured, accessible format. Use it most often on "check your answers" pages to show users a summary of what they have entered before submitting a form, with "Change" links so they can correct individual answers.

Each row consists of a key (a term or question label), a value (the answer or data), and optionally one or more action links (such as "Change" or "Delete"). In GOV.UK Frontend v5.x, the component also supports **cards** — visual containers that group related rows together with an optional title and card-Level-Actions.

## When to use this component

- On "check your answers" pages to let users review and amend answers before submission.
- On confirmation pages to show what the user submitted.
- To display structured key–value information in admin or case management interfaces.
- Wherever you need to present labelled data in a readable, accessible format.

## When not to use this component

- Do not use the summary list for tabular data with more than one column — use the **table** component instead.
- Do not use it for long blocks of unstructured text — use regular content elements.

## How it works

The summary list renders as a `<dl>` (description list). Each row is a `<div>` containing:

- A `<dt>` for the key.
- A `<dd>` for the value.
- A `<dd>` for actions, if provided.

Action links always include visually hidden text (via `visuallyHiddenText`) to give screen reader users context — for example, "Change name" rather than "Change" on its own.

### Cards

The `card` option wraps the summary list in a `govuk-summary-card` container with an optional heading and card-Level-Actions. Use cards when you have more than one grouped summary on a single page.

### No border variant

Add `govuk-summary-list--no-border` to remove the horizontal borders between rows.

## Code examples

### Default / Basic

#### HTML

```html
<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">Name</dt>
    <dd class="govuk-summary-list__value">Sarah Philips</dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="/change-name">
        Change<span class="govuk-visually-hidden"> name</span>
      </a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">Date of birth</dt>
    <dd class="govuk-summary-list__value">5 January 1978</dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="/change-dob">
        Change<span class="govuk-visually-hidden"> date of birth</span>
      </a>
    </dd>
  </div>
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">Address</dt>
    <dd class="govuk-summary-list__value">72 Guild Street<br>London<br>SE23 6FH</dd>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="/change-address">
        Change<span class="govuk-visually-hidden"> address</span>
      </a>
    </dd>
  </div>
</dl>
```

#### Nunjucks

```njk
{{ govukSummaryList({
  rows: [
    {
      key: { text: "Name" },
      value: { text: "Sarah Philips" },
      actions: {
        items: [
          { href: "/change-name", text: "Change", visuallyHiddenText: "name" }
        ]
      }
    },
    {
      key: { text: "Date of birth" },
      value: { text: "5 January 1978" },
      actions: {
        items: [
          { href: "/change-dob", text: "Change", visuallyHiddenText: "date of birth" }
        ]
      }
    },
    {
      key: { text: "Address" },
      value: { html: "72 Guild Street<br>London<br>SE23 6FH" },
      actions: {
        items: [
          { href: "/change-address", text: "Change", visuallyHiddenText: "address" }
        ]
      }
    }
  ]
}) }}
```

### Without actions (read-only)

#### Nunjucks

```njk
{{ govukSummaryList({
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

### Without borders

#### Nunjucks

```njk
{{ govukSummaryList({
  classes: "govuk-summary-list--no-border",
  rows: [
    { key: { text: "Name" }, value: { text: "Sarah Philips" } },
    { key: { text: "Email" }, value: { text: "sarah@example.com" } }
  ]
}) }}
```

### With more than one action per row

#### Nunjucks

```njk
{{ govukSummaryList({
  rows: [
    {
      key: { text: "Licence period" },
      value: { text: "6 April 2023 to 5 April 2024" },
      actions: {
        items: [
          { href: "/change-period", text: "Change", visuallyHiddenText: "licence period" },
          { href: "/delete-period", text: "Delete", visuallyHiddenText: "licence period" }
        ]
      }
    }
  ]
}) }}
```

### With a card

Cards group rows together with an optional heading and card-Level-Actions.

#### HTML

```html
<div class="govuk-summary-card">
  <div class="govuk-summary-card__title-wrapper">
    <h2 class="govuk-summary-card__title">
      Personal details
    </h2>
    <ul class="govuk-summary-card__actions">
      <li class="govuk-summary-card__action">
        <a class="govuk-link" href="/change-personal-details">
          Change<span class="govuk-visually-hidden"> personal details</span>
        </a>
      </li>
    </ul>
  </div>
  <div class="govuk-summary-card__content">
    <dl class="govuk-summary-list">
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">Name</dt>
        <dd class="govuk-summary-list__value">Sarah Philips</dd>
      </div>
      <div class="govuk-summary-list__row">
        <dt class="govuk-summary-list__key">Date of birth</dt>
        <dd class="govuk-summary-list__value">5 January 1978</dd>
      </div>
    </dl>
  </div>
</div>
```

#### Nunjucks

```njk
{{ govukSummaryList({
  card: {
    title: {
      text: "Personal details"
    },
    actions: {
      items: [
        { href: "/change-personal-details", text: "Change", visuallyHiddenText: "personal details" }
      ]
    }
  },
  rows: [
    { key: { text: "Name" }, value: { text: "Sarah Philips" } },
    { key: { text: "Date of birth" }, value: { text: "5 January 1978" } }
  ]
}) }}
```

### Row with unanswered value

#### Nunjucks

```njk
{{ govukSummaryList({
  rows: [
    {
      key: { text: "Previous address" },
      value: { text: "Not provided" },
      actions: {
        items: [
          { href: "/add-previous-address", text: "Add", visuallyHiddenText: "previous address" }
        ]
      }
    }
  ]
}) }}
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `rows` | array | Yes | Array of row objects. |
| `card` | object | No | Options for the summary card wrapper. |
| `classes` | string | No | Classes to add to the `<dl>` element. |
| `attributes` | object | No | HTML attributes (as key–value pairs) to add to the `<dl>` element. |

### Row object options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `key` | object | Yes | Options for the key `<dt>`. Must include `text` or `html`. |
| `value` | object | Yes | Options for the value `<dd>`. Must include `text` or `html`. |
| `actions` | object | No | Options for the actions `<dd>`. |
| `classes` | string | No | Classes to add to the row `<div>`. |

### Actions object and action item options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `items` | array | Yes | Array of action item objects. |
| `href` | string | Yes | URL for the action link. |
| `text` | string | Yes (or `html`) | Visible link text, e.g. "Change". |
| `html` | string | Yes (or `text`) | HTML for the link. |
| `visuallyHiddenText` | string | No | Visually hidden text appended to the link. "Change" + "name" = "Change name" for screen readers. |
| `classes` | string | No | Classes to add to the link. |
| `attributes` | object | No | HTML attributes to add to the link. |

### Card object options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `title` | object | No | Card title options. Include `text` or `html` and optionally `headingLevel` (defaults to `2`). |
| `actions` | object | No | Card-Level-Actions (same structure as row actions). |
| `classes` | string | No | Classes to add to the card wrapper. |
| `attributes` | object | No | HTML attributes to add to the card wrapper. |

## Error messages

The summary list does not have error states. This is a display component.

## Accessibility

- Always include `visuallyHiddenText` on action links — "Change" without context is ambiguous for screen reader users who hear links listed out of context.
- The `<dl>`, `<dt>`, and `<dd>` structure is semantically correct and announced as a description list by screen readers.
- Card titles use heading elements — ensure the heading level fits the page's heading hierarchy.
- When more than one row on the same page shares the same action text (e.g. "Change"), the visually hidden text is essential to differentiate them.

## Do and do not

**Do:**
- Always provide `visuallyHiddenText` on action links.
- Use cards when there are more than one summary list on a single page.
- Use `html` values when the value contains line breaks, lists, or links.
- Group related rows together logically.

**Do not:**
- Do not use the summary list for tabular data with more than one column — use the table component.
- Do not omit `visuallyHiddenText` on "Change" links — screen reader users will not have context.
- Do not use the summary list to display long blocks of text.

## Related components and patterns

- [Table](../table/SKILLS.md) — for tabular data with more than one column
- [Task List](../task-list/SKILLS.md) — for multi-task journeys
- [Panel](../panel/SKILLS.md) — for confirmation pages where summary lists often appear
