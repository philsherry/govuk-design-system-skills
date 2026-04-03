---
category: components
description: Use the summary list to summarise information, for example a user's responses at the end of a form.
keywords:
  - "check answers"
  - "definition list"
  - "key value"
  - "list"
  - "summary"
  - "summary list"
last-reviewed: "2026-04-03"
name: Summary List
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/summary-list"
---

# Summary List

> Use the summary list to summarise information, for example a user's responses at the end of a form.
> Source: https://service-manual.nhs.uk/design-system/components/summary-list

## Overview

The summary list component displays a series of key-value pairs in a structured, accessible format. Use it most often on "check your answers" pages to show users a summary of what they entered before submitting a form, with "Change" links so they can correct individual answers.

Each row consists of a key (a term or question label), a value (the answer or data), and optionally one or more action links (such as "Change" or "Remove"). The component also supports **cards** — visual containers that group related rows together with an optional title and card-level actions.

## When to use this component

- On "check your answers" pages to let users review and amend answers before submission.
- On confirmation pages to show what the user submitted.
- To display structured key-value information in admin or case management interfaces.
- Wherever you need to present labelled data in a readable, accessible format.

## When not to use this component

- Do not use the summary list for tabular data with more than one column of values — use the **table** component instead.
- Do not use it for long blocks of unstructured text — use regular content elements.

## How it works

The summary list renders as a `<dl>` (description list). Each row is a `<div>` containing:

- A `<dt>` for the key.
- A `<dd>` for the value.
- A `<dd>` for actions, if provided.

Action links always include visually hidden text (via `visuallyHiddenText`) to give screen reader users context — for example, "Change name" rather than "Change" on its own.

### Cards

The `card` option wraps the summary list in an `nhsuk-summary-card` container with an optional heading and card-level actions. Use cards when you have more than one grouped summary on a single page.

### No border variant

Add `nhsuk-summary-list--no-border` to remove the horizontal borders between rows.

## Code Examples

### Default / Basic

#### HTML

```html
<dl class="nhsuk-summary-list">
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">Name</dt>
    <dd class="nhsuk-summary-list__value">Sarah Philips</dd>
    <dd class="nhsuk-summary-list__actions">
      <a class="nhsuk-link" href="/change-name">
        Change<span class="nhsuk-u-visually-hidden"> name</span>
      </a>
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">Date of birth</dt>
    <dd class="nhsuk-summary-list__value">5 January 1978</dd>
    <dd class="nhsuk-summary-list__actions">
      <a class="nhsuk-link" href="/change-dob">
        Change<span class="nhsuk-u-visually-hidden"> date of birth</span>
      </a>
    </dd>
  </div>
  <div class="nhsuk-summary-list__row">
    <dt class="nhsuk-summary-list__key">NHS number</dt>
    <dd class="nhsuk-summary-list__value">485 777 3456</dd>
    <dd class="nhsuk-summary-list__actions">
      <a class="nhsuk-link" href="/change-nhs-number">
        Change<span class="nhsuk-u-visually-hidden"> NHS number</span>
      </a>
    </dd>
  </div>
</dl>
```

#### Nunjucks

```njk
{{ summaryList({
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
      key: { text: "NHS number" },
      value: { text: "485 777 3456" },
      actions: {
        items: [
          { href: "/change-nhs-number", text: "Change", visuallyHiddenText: "NHS number" }
        ]
      }
    }
  ]
}) }}
```

### Without actions (read-only)

#### Nunjucks

```njk
{{ summaryList({
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
{{ summaryList({
  classes: "nhsuk-summary-list--no-border",
  rows: [
    { key: { text: "Name" }, value: { text: "Sarah Philips" } },
    { key: { text: "Email" }, value: { text: "sarah@example.com" } }
  ]
}) }}
```

### With a card

Cards group rows together with an optional heading and card-level actions.

#### HTML

```html
<div class="nhsuk-summary-card">
  <div class="nhsuk-summary-card__title-wrapper">
    <h2 class="nhsuk-summary-card__title">
      Personal details
    </h2>
    <ul class="nhsuk-summary-card__actions">
      <li class="nhsuk-summary-card__action">
        <a class="nhsuk-link" href="/change-personal-details">
          Change<span class="nhsuk-u-visually-hidden"> personal details</span>
        </a>
      </li>
    </ul>
  </div>
  <div class="nhsuk-summary-card__content">
    <dl class="nhsuk-summary-list">
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">Name</dt>
        <dd class="nhsuk-summary-list__value">Sarah Philips</dd>
      </div>
      <div class="nhsuk-summary-list__row">
        <dt class="nhsuk-summary-list__key">Date of birth</dt>
        <dd class="nhsuk-summary-list__value">5 January 1978</dd>
      </div>
    </dl>
  </div>
</div>
```

#### Nunjucks

```njk
{{ summaryList({
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

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `rows` | array | Yes | Array of row objects. |
| `card` | object | No | Options for the summary card wrapper. |
| `classes` | string | No | Classes to add to the `<dl>` element. |
| `attributes` | object | No | HTML attributes (as key-value pairs) to add to the `<dl>` element. |

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
| `text` | string | Yes (or `html`) | Visible link text, for example "Change". |
| `html` | string | Yes (or `text`) | HTML for the link. |
| `visuallyHiddenText` | string | No | Visually hidden text appended to the link. "Change" + "name" = "Change name" for screen readers. |
| `classes` | string | No | Classes to add to the link. |
| `attributes` | object | No | HTML attributes to add to the link. |

### Card object options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `title` | object | No | Card title options. Include `text` or `html` and optionally `headingLevel` (defaults to `2`). |
| `actions` | object | No | Card-level actions (same structure as row actions). |
| `classes` | string | No | Classes to add to the card wrapper. |
| `attributes` | object | No | HTML attributes to add to the card wrapper. |

## Accessibility

- Always include `visuallyHiddenText` on action links — "Change" without context is ambiguous for screen reader users who hear links listed out of context.
- The `<dl>`, `<dt>`, and `<dd>` structure is semantically correct and announced as a description list by screen readers.
- Card titles use heading elements — ensure the heading level fits the page's heading hierarchy.
- When more than one row on the same page shares the same action text (for example, "Change"), the visually hidden text is essential to differentiate them.

## Do and Do not

**Do:**
- Always provide `visuallyHiddenText` on action links.
- Use cards when more than one summary list appears on a single page.
- Use `html` values when the value contains line breaks, lists, or links.
- Group related rows together logically.

**Do not:**
- Do not use the summary list for tabular data with more than one column — use the table component.
- Do not omit `visuallyHiddenText` on "Change" links — screen reader users will not have context.
- Do not use the summary list to display long blocks of text.

## Related Components / Patterns

- [Table](../table/SKILLS.md) — for tabular data with more than one column
- [Task List](../task-list/SKILLS.md) — for multi-task journeys
- [Panel](../panel/SKILLS.md) — for confirmation pages where summary lists often appear
