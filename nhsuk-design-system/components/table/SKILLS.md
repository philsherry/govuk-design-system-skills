---
category: components
description: Use the table component to make information easier to compare and scan when data has row-and-column relationships.
keywords:
  - "data table"
  - "rows and columns"
  - "table"
  - "tabular data"
last-reviewed: "2026-04-03"
name: Table
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/table"
---

# Table

> Use the table component to make information easier to compare and scan when data has row-and-column relationships.
> Source: https://service-manual.nhs.uk/design-system/components/table

## Overview

The table component presents structured data in rows and columns using semantic HTML. Use it when users need to compare values across more than one attribute or look up information in a structured dataset — for example, a list of appointments, a dosage schedule, or a comparison of treatment options.

NHS UK tables use `<table>`, `<thead>`, `<tbody>`, `<th>`, and `<td>` with appropriate `scope` attributes so screen readers can communicate header-to-cell relationships. Numeric data can use right-alignment modifier classes to aid comparison.

## When to use this component

- When displaying data with a clear row-and-column structure.
- When users need to compare values across rows or columns.
- For lists of records with more than one attribute (appointments, dosages, referrals).
- For structured comparative information (treatment options, fee schedules).

## When not to use this component

- Do not use tables for page layout — use the NHS UK grid system.
- Do not use tables for key-value pairs — use the **summary list** component.
- Do not use tables when a simple list or prose would communicate more effectively.
- Avoid tables that require horizontal scrolling due to excess columns.

## How it works

The table renders as a `<table class="nhsuk-table">`. Column headers use `<th scope="col">` in a `<thead>` row. Data rows sit in `<tbody>` using `<td>`. When `firstCellIsHeader: true`, the first cell of each body row renders as `<th scope="row">`.

### Captions

A caption describes what the table contains. Always provide one for accessibility — screen reader users encounter it before they navigate into the table. If a heading directly above the table already serves this purpose, visually hide the caption using `nhsuk-u-visually-hidden` but keep it in the markup.

### Responsive behaviour

On small screens, NHS UK Frontend tables can stack vertically. The `nhsuk-table-responsive` wrapper enables this behaviour, showing column headers as inline labels on each cell.

## Code Examples

### Default / Basic

#### HTML

```html
<table class="nhsuk-table">
  <caption class="nhsuk-table__caption">Ibuprofen dosages by age</caption>
  <thead class="nhsuk-table__head" role="rowgroup">
    <tr class="nhsuk-table__row">
      <th class="nhsuk-table__header" scope="col">Age</th>
      <th class="nhsuk-table__header" scope="col">How much</th>
      <th class="nhsuk-table__header" scope="col">How often</th>
    </tr>
  </thead>
  <tbody class="nhsuk-table__body">
    <tr class="nhsuk-table__row">
      <td class="nhsuk-table__cell">7 to 9 years</td>
      <td class="nhsuk-table__cell">200mg</td>
      <td class="nhsuk-table__cell">3 times in 24 hours</td>
    </tr>
    <tr class="nhsuk-table__row">
      <td class="nhsuk-table__cell">10 to 11 years</td>
      <td class="nhsuk-table__cell">200mg to 300mg</td>
      <td class="nhsuk-table__cell">3 times in 24 hours</td>
    </tr>
  </tbody>
</table>
```

#### Nunjucks

```njk
{{ table({
  caption: "Ibuprofen dosages by age",
  head: [
    { text: "Age" },
    { text: "How much" },
    { text: "How often" }
  ],
  rows: [
    [
      { text: "7 to 9 years" },
      { text: "200mg" },
      { text: "3 times in 24 hours" }
    ],
    [
      { text: "10 to 11 years" },
      { text: "200mg to 300mg" },
      { text: "3 times in 24 hours" }
    ]
  ]
}) }}
```

### With first column as row headers

Use `firstCellIsHeader: true` when the first column contains a label for each row.

#### Nunjucks

```njk
{{ table({
  caption: "Vaccination schedule",
  firstCellIsHeader: true,
  head: [
    { text: "Vaccine" },
    { text: "Age given" },
    { text: "Doses" }
  ],
  rows: [
    [
      { text: "DTaP/IPV/Hib/HepB" },
      { text: "8 weeks" },
      { text: "1" }
    ],
    [
      { text: "Rotavirus" },
      { text: "8 weeks" },
      { text: "1" }
    ],
    [
      { text: "MenB" },
      { text: "8 weeks" },
      { text: "1" }
    ]
  ]
}) }}
```

### Responsive table

Wrap the table in an `nhsuk-table-responsive` container for stacked display on small screens.

#### HTML

```html
<div class="nhsuk-table-responsive">
  <table class="nhsuk-table">
    <caption class="nhsuk-table__caption">GP surgery opening hours</caption>
    <thead class="nhsuk-table__head" role="rowgroup">
      <tr class="nhsuk-table__row">
        <th class="nhsuk-table__header" scope="col">Day</th>
        <th class="nhsuk-table__header" scope="col">Opening time</th>
        <th class="nhsuk-table__header" scope="col">Closing time</th>
      </tr>
    </thead>
    <tbody class="nhsuk-table__body">
      <tr class="nhsuk-table__row">
        <td class="nhsuk-table__cell">Monday</td>
        <td class="nhsuk-table__cell">8:00am</td>
        <td class="nhsuk-table__cell">6:30pm</td>
      </tr>
      <tr class="nhsuk-table__row">
        <td class="nhsuk-table__cell">Tuesday</td>
        <td class="nhsuk-table__cell">8:00am</td>
        <td class="nhsuk-table__cell">6:30pm</td>
      </tr>
    </tbody>
  </table>
</div>
```

### With visually hidden caption

Use `nhsuk-u-visually-hidden` when a heading directly above the table already describes it.

#### Nunjucks

```njk
{{ table({
  caption: "Appointment statuses",
  captionClasses: "nhsuk-u-visually-hidden",
  head: [
    { text: "Reference" },
    { text: "Status" }
  ],
  rows: [
    [
      { text: "APT-001" },
      { text: "Confirmed" }
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
| `captionClasses` | string | No | Classes for the `<caption>` element. Use `nhsuk-u-visually-hidden` to hide the caption visually. |
| `firstCellIsHeader` | boolean | No | If `true`, the first cell of each body row renders as `<th scope="row">`. Defaults to `false`. |
| `classes` | string | No | Classes to add to the `<table>` element. |
| `attributes` | object | No | HTML attributes (as key-value pairs) to add to the `<table>` element. |

### Cell object options (head and rows)

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes (or `html`) | Text content of the cell. |
| `html` | string | Yes (or `text`) | HTML content of the cell. Takes precedence over `text`. |
| `format` | string | No | Set to `"numeric"` to right-align the cell. |
| `classes` | string | No | Classes to add to the cell element. |
| `colspan` | integer | No | Number of columns this cell spans. |
| `rowspan` | integer | No | Number of rows this cell spans. |
| `attributes` | object | No | HTML attributes to add to the cell element. |

## Accessibility

- Always provide a `<caption>` element — screen reader users encounter it when they enter the table and need it to understand what the data represents.
- Column headers must use `<th scope="col">` — the Nunjucks macro handles this automatically.
- Row headers must use `<th scope="row">` — enable this with `firstCellIsHeader: true`.
- Do not use tables for layout — screen readers announce the number of columns and rows when a user enters a table, which causes confusion when tables serve as layout containers.
- Use the responsive table wrapper for tables that might overflow on small screens.

## Do and Do not

**Do:**
- Always provide a caption that describes the table's content.
- Use `firstCellIsHeader: true` when the first column contains row labels.
- Keep tables as simple as possible.
- Use the responsive wrapper for tables with more than two columns.

**Do not:**
- Do not use tables for key-value pairs — use the summary list component.
- Do not use tables for page layout.
- Do not use merged cells unless no alternative exists.
- Do not put large blocks of prose text in table cells.

## Related Components / Patterns

- [Summary List](../summary-list/SKILLS.md) — for key-value pairs
- [Tag](../tag/SKILLS.md) — often embedded in table cells to show status
