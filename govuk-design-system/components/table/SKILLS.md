---
category: components
description: Use the table component to make information easier to compare and scan when there are relationships between sets of data.
govuk-frontend: "5.x"
keywords:
  - "data table"
  - "rows and columns"
  - "table"
  - "tabular data"
last-reviewed: "2026-04-03"
name: Table
source: "https://design-system.service.gov.uk/components/table/"
---

# Table

> Use the table component to make information easier to compare and scan when there are relationships between sets of data.
> Source: https://design-system.service.gov.uk/components/table/

## Overview

The table component presents structured data in rows and columns using semantic HTML. Use it when users need to compare values across more than one attribute or look up information in a structured dataset — for example, a list of transactions, a rate schedule, or a comparison of options.

GOV.UK tables use `<table>`, `<thead>`, `<tbody>`, `<th>`, and `<td>` with appropriate `scope` attributes to ensure screen readers receive header-to-cell relationships. Numeric data is right-aligned using modifier classes to aid comparison.

## When to use this component

- When displaying data with a clear row-and-column structure.
- When users need to compare values across rows or columns.
- For lists of records with more than one attribute (transactions, schedules, registrations).
- For structured comparative information (rate tables, fee schedules).

## When not to use this component

- Do not use tables for page layout — use the GOV.UK grid system.
- Do not use tables for key–value pairs — use the **summary list** component.
- Do not use tables when a simple list or prose would be clearer.
- Avoid tables that require horizontal scrolling due to excess columns.

## How it works

The table renders as a `<table class="govuk-table">`. Column headers use `<th scope="col">` in a `<thead>` row. Data rows are in `<tbody>` using `<td>`. When `firstCellIsHeader: true`, the first cell of each body row renders as `<th scope="row">`.

### Captions

A caption describes what the table contains. Always provide one for accessibility — screen reader users encounter it before they navigate into the table. If a heading directly above the table already serves this purpose, visually hide the caption using `govuk-visually-hidden` but keep it present in the markup.

### Numeric alignment

Use `format: "numeric"` on header and data cell objects to right-align numbers and apply `govuk-table__header--numeric` / `govuk-table__cell--numeric` classes. This aligns numbers at the decimal point for easy scanning.

## Code Examples

### Default / Basic

#### HTML

```html
<table class="govuk-table">
  <caption class="govuk-table__caption govuk-table__caption--m">Months and their savings</caption>
  <thead class="govuk-table__head">
    <tr class="govuk-table__row">
      <th scope="col" class="govuk-table__header">Month you apply</th>
      <th scope="col" class="govuk-table__header">Rate for bicycles</th>
      <th scope="col" class="govuk-table__header">Rate for vehicles</th>
    </tr>
  </thead>
  <tbody class="govuk-table__body">
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">January</td>
      <td class="govuk-table__cell">£165.00</td>
      <td class="govuk-table__cell">£85.50</td>
    </tr>
    <tr class="govuk-table__row">
      <td class="govuk-table__cell">February</td>
      <td class="govuk-table__cell">£150.50</td>
      <td class="govuk-table__cell">£75.00</td>
    </tr>
  </tbody>
</table>
```

#### Nunjucks

```njk
{{ govukTable({
  caption: "Months and their savings",
  captionClasses: "govuk-table__caption--m",
  head: [
    { text: "Month you apply" },
    { text: "Rate for bicycles" },
    { text: "Rate for vehicles" }
  ],
  rows: [
    [
      { text: "January" },
      { text: "£165.00" },
      { text: "£85.50" }
    ],
    [
      { text: "February" },
      { text: "£150.50" },
      { text: "£75.00" }
    ]
  ]
}) }}
```

### With numeric alignment

Use `format: "numeric"` on both header and data cells for numeric columns.

#### Nunjucks

```njk
{{ govukTable({
  caption: "Months and rates",
  captionClasses: "govuk-table__caption--m",
  head: [
    { text: "Month you apply" },
    { text: "Rate for bicycles (%)", format: "numeric" },
    { text: "Rate for vehicles (%)", format: "numeric" }
  ],
  rows: [
    [
      { text: "January" },
      { text: "1.5", format: "numeric" },
      { text: "2.0", format: "numeric" }
    ],
    [
      { text: "February" },
      { text: "1.6", format: "numeric" },
      { text: "2.1", format: "numeric" }
    ]
  ]
}) }}
```

### With first column as row headers

Use `firstCellIsHeader: true` when the first column contains a label for each row.

#### Nunjucks

```njk
{{ govukTable({
  caption: "Dates and amounts",
  captionClasses: "govuk-table__caption--m",
  firstCellIsHeader: true,
  head: [
    { text: "Date" },
    { text: "Amount", format: "numeric" },
    { text: "Balance", format: "numeric" }
  ],
  rows: [
    [
      { text: "First 6 weeks" },
      { text: "£109.80 per week", format: "numeric" },
      { text: "£658.80", format: "numeric" }
    ],
    [
      { text: "Next 33 weeks" },
      { text: "£109.80 per week", format: "numeric" },
      { text: "£3,623.40", format: "numeric" }
    ],
    [
      { text: "Total estimated pay" },
      { text: "", format: "numeric" },
      { text: "£4,282.20", format: "numeric" }
    ]
  ]
}) }}
```

### With visually hidden caption

Use `govuk-visually-hidden` when a heading directly above the table already describes it.

#### Nunjucks

```njk
{{ govukTable({
  caption: "Application statuses",
  captionClasses: "govuk-visually-hidden",
  head: [
    { text: "Reference" },
    { text: "Status" }
  ],
  rows: [
    [
      { text: "APP-001" },
      { text: "Approved" }
    ]
  ]
}) }}
```

### With HTML in cells (status tags)

#### Nunjucks

```njk
{{ govukTable({
  caption: "Applications",
  captionClasses: "govuk-table__caption--m",
  head: [
    { text: "Reference" },
    { text: "Applicant" },
    { text: "Status" },
    { text: "Action" }
  ],
  rows: [
    [
      { text: "APP-001" },
      { text: "Jane Smith" },
      { html: '<strong class="govuk-tag govuk-tag--green">Approved</strong>' },
      { html: '<a class="govuk-link" href="/view/APP-001">View</a>' }
    ],
    [
      { text: "APP-002" },
      { text: "John Brown" },
      { html: '<strong class="govuk-tag govuk-tag--orange">Pending</strong>' },
      { html: '<a class="govuk-link" href="/view/APP-002">View</a>' }
    ]
  ]
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `rows` | array of arrays | Yes | Array of row arrays. Each row is an array of cell objects. |
| `head` | array | No | Array of header cell objects for the `<thead>` row. |
| `caption` | string | No | Caption text. Strongly recommended for accessibility. |
| `captionClasses` | string | No | Classes for the `<caption>` element. Use `govuk-table__caption--s/m/l/xl` for sized captions, or `govuk-visually-hidden`. |
| `firstCellIsHeader` | boolean | No | If `true`, the first cell of each body row renders as `<th scope="row">`. Defaults to `false`. |
| `classes` | string | No | Classes to add to the `<table>` element. |
| `attributes` | object | No | HTML attributes (as key–value pairs) to add to the `<table>` element. |

### Cell object options (head and rows)

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes (or `html`) | Text content of the cell. |
| `html` | string | Yes (or `text`) | HTML content of the cell. Takes precedence over `text`. |
| `format` | string | No | Set to `"numeric"` to right-align the cell and add numeric styling. |
| `classes` | string | No | Classes to add to the cell element. |
| `colspan` | integer | No | Number of columns this cell spans. |
| `rowspan` | integer | No | Number of rows this cell spans. |
| `attributes` | object | No | HTML attributes to add to the cell element. |

## Error Messages

The table component does not have error states. This is a display component.

## Accessibility

- Always provide a `<caption>` element — screen reader users encounter it when they enter the table and need it to understand what the data represents.
- Column headers must use `<th scope="col">` — handled automatically by the Nunjucks macro.
- Row headers must use `<th scope="row">` — enabled by `firstCellIsHeader: true`.
- Do not use tables for layout — screen readers announce the number of columns and rows when a user enters a table, which is confusing when tables serve as layout containers.
- Avoid complex tables with large numbers of merged cells (`colspan`/`rowspan`) — test thoroughly with screen readers, as header-to-cell associations can break.

## Do and Do not

**Do:**
- Always provide a caption that describes the table's content.
- Use `format: "numeric"` for columns containing numbers.
- Use `firstCellIsHeader: true` when the first column contains row labels.
- Keep tables as simple as possible.

**Do not:**
- Do not use tables for key–value pairs — use the summary list component.
- Do not use tables for page layout.
- Do not use merged cells unless there is no alternative.
- Do not put large blocks of prose text in table cells.

## Related Components / Patterns

- [Summary List](../summary-list/SKILLS.md) — for key–value pairs
- [Tag](../tag/SKILLS.md) — often embedded in table cells to show status
