---
category: components
description: Use the tag component to show users the status of something.
keywords:
  - "badge"
  - "label"
  - "status tag"
  - "tag"
last-reviewed: "2026-04-03"
name: Tag
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/tag"
---

# Tag

> Use the tag component to show users the status of something.
> Source: https://service-manual.nhs.uk/design-system/components/tag

## Overview

The tag component is a small, coloured label used to communicate the status of something — for example, whether a task is complete, in progress, or not yet started. Tags appear in task lists, tables, and other interfaces where users need to scan and distinguish items by their status.

Tags use colour as a visual aid, but colour alone never communicates the status — the text within the tag must also convey the meaning. The component has no interactive behaviour or JavaScript. It renders as a `<strong>` element with the `nhsuk-tag` class.

The default colour is blue. A range of colour modifier classes provides recommended semantic meanings.

## When to use this component

- To show the status of a task, appointment, or item (for example, "Completed", "In progress", "Not started").
- In task lists alongside task names to show completion state.
- In tables to show the status of each row.

## When not to use this component

- Do not use tags for interactive actions — use buttons or links.
- Do not use tags for long phrases — they suit 1 to 3 word status labels.
- Do not use tags as decorative elements without meaningful content.
- Do not use tags if body text can communicate the status more effectively.

## How it works

The tag renders as `<strong class="nhsuk-tag">`. Colour modifier classes change the visual appearance. The text inside the tag must convey the status independently of colour.

### Available colour modifiers

| Class modifier | Colour | Recommended use |
|----------------|--------|-----------------|
| (none / default) | Blue | General status; active or enabled state |
| `nhsuk-tag--grey` | Grey | Inactive, not applicable, or not started |
| `nhsuk-tag--green` | Green | Completed, approved, or success |
| `nhsuk-tag--aqua-green` | Aqua green | Submitted, sent |
| `nhsuk-tag--blue` | Blue | New (explicit blue) |
| `nhsuk-tag--purple` | Purple | Custom use |
| `nhsuk-tag--pink` | Pink | Custom use |
| `nhsuk-tag--red` | Red | Rejected, failed, urgent, or overdue |
| `nhsuk-tag--orange` | Orange | Pending, awaiting, or delayed |
| `nhsuk-tag--yellow` | Yellow | Warning, requires attention |
| `nhsuk-tag--white` | White | Inactive or low priority |

## Code Examples

### Default / Basic (blue)

#### HTML

```html
<strong class="nhsuk-tag">
  Active
</strong>
```

#### Nunjucks

```njk
{{ tag({
  text: "Active"
}) }}
```

### Grey (not started / inactive)

#### HTML

```html
<strong class="nhsuk-tag nhsuk-tag--grey">
  Not started
</strong>
```

#### Nunjucks

```njk
{{ tag({
  text: "Not started",
  classes: "nhsuk-tag--grey"
}) }}
```

### Green (completed / approved)

#### HTML

```html
<strong class="nhsuk-tag nhsuk-tag--green">
  Completed
</strong>
```

#### Nunjucks

```njk
{{ tag({
  text: "Completed",
  classes: "nhsuk-tag--green"
}) }}
```

### Red (rejected / failed / urgent)

#### HTML

```html
<strong class="nhsuk-tag nhsuk-tag--red">
  Urgent
</strong>
```

#### Nunjucks

```njk
{{ tag({
  text: "Urgent",
  classes: "nhsuk-tag--red"
}) }}
```

### Orange (pending / awaiting)

#### Nunjucks

```njk
{{ tag({
  text: "Pending",
  classes: "nhsuk-tag--orange"
}) }}
```

### Yellow (requires attention / in progress)

#### Nunjucks

```njk
{{ tag({
  text: "In progress",
  classes: "nhsuk-tag--yellow"
}) }}
```

### White (inactive / low priority)

#### Nunjucks

```njk
{{ tag({
  text: "Inactive",
  classes: "nhsuk-tag--white"
}) }}
```

### In a table (typical use)

#### Nunjucks

```njk
{{ table({
  head: [
    { text: "Appointment" },
    { text: "Patient" },
    { text: "Status" }
  ],
  rows: [
    [
      { text: "APT-001" },
      { text: "Jane Smith" },
      { html: tag({ text: "Confirmed", classes: "nhsuk-tag--green" }) }
    ],
    [
      { text: "APT-002" },
      { text: "John Brown" },
      { html: tag({ text: "Pending", classes: "nhsuk-tag--orange" }) }
    ],
    [
      { text: "APT-003" },
      { text: "Susan White" },
      { html: tag({ text: "Cancelled", classes: "nhsuk-tag--red" }) }
    ]
  ]
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes (or `html`) | The tag text. |
| `html` | string | Yes (or `text`) | HTML content for the tag. If provided, takes precedence over `text`. |
| `classes` | string | No | Classes to add to the `<strong>` element. Use colour modifier classes (for example, `nhsuk-tag--grey`, `nhsuk-tag--green`). |
| `attributes` | object | No | HTML attributes (as key-value pairs) to add to the `<strong>` element. |

## Accessibility

- The `<strong>` element provides some semantic weight, but do not rely on it alone — the text content must communicate the status on its own.
- Do not rely on colour alone to communicate status — the text inside the tag is essential.
- All NHS UK tag colour combinations meet WCAG 2.1 AA colour contrast requirements.
- When tags appear in tables or lists, ensure enough surrounding context exists for users to understand what the tag refers to.
- Maintain a consistent colour-to-status mapping throughout your service — for example, always use green for "Completed".

## Do and Do not

**Do:**
- Use concise, meaningful status words — 1 to 3 words.
- Apply colours consistently throughout the service (green always means the same state).
- Ensure the text alone communicates the status, independent of colour.

**Do not:**
- Do not use tags for interactive elements — use buttons or links.
- Do not use long phrases inside tags.
- Do not mix colour meanings across pages — if green means "confirmed" in one place, it should not mean "active" elsewhere.
- Do not use more than 3 or 4 different tag colours on a single page — this reduces the signal value of each colour.

## Related Components / Patterns

- [Task List](../task-list/SKILLS.md) — uses tags for task completion status
- [Table](../table/SKILLS.md) — tags are often embedded in table cells
