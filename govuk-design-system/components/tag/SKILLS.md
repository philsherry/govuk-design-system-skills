---
category: components
description: Use the tag component to show users the status of something.
govuk-frontend: "5.x"
keywords:
  - "badge"
  - "label"
  - "status tag"
  - "tag"
last-reviewed: "2026-04-03"
name: Tag
source: "https://design-system.service.gov.uk/components/tag/"
---

# Tag

> Use the tag component to show users the status of something.
> Source: https://design-system.service.gov.uk/components/tag/

## Overview

The tag component is a small, coloured label used to communicate the status of something — for example, whether a task is complete, in progress, or not yet started. Tags appear in task lists, tables, and other interfaces where users need to scan and distinguish items by their status.

Tags use colour as a visual aid, but colour alone is never relied upon — the text within the tag must also communicate the status. The component is simple and has no interactive behaviour or JavaScript. It renders as a `<strong>` element with the `govuk-tag` class.

The default colour is blue. A range of colour modifier classes is available with recommended semantic meanings.

## When to use this component

- To show the status of a task, application, or item (for example, "Completed", "In progress", "Not started").
- In task lists alongside task names to show completion state.
- In tables to show the status of each row.
- In the **phase banner** to display the "Alpha" or "Beta" phase label.

## When not to use this component

- Do not use tags for interactive actions — use buttons or links.
- Do not use tags for long phrases — they suit 1–3 word status labels.
- Do not use tags purely as decorative elements without meaningful content.
- Do not use tags if body text can communicate the status more effectively.

## How it works

The tag renders as `<strong class="govuk-tag">`. Colour modifier classes change the visual appearance. The text inside the tag must convey the status independently of colour.

### Available colour modifiers

| Class modifier | Colour | Recommended use |
|----------------|--------|-----------------|
| (none / default) | Blue | General status; active or enabled state |
| `govuk-tag--grey` | Grey | Inactive, not applicable, or not started |
| `govuk-tag--green` | Green | Completed, approved, or success |
| `govuk-tag--turquoise` | Turquoise | Submitted, sent, or in transit |
| `govuk-tag--blue` | Blue | New (explicit blue) |
| `govuk-tag--light-blue` | Light blue | Received or acknowledged |
| `govuk-tag--purple` | Purple | Custom use |
| `govuk-tag--pink` | Pink | Custom use |
| `govuk-tag--red` | Red | Rejected, failed, urgent, or overdue |
| `govuk-tag--orange` | Orange | Pending, awaiting, or delayed |
| `govuk-tag--yellow` | Yellow | Warning, requires attention |

## Code Examples

### Default / Basic (blue)

#### HTML

```html
<strong class="govuk-tag">
  Active
</strong>
```

#### Nunjucks

```njk
{{ govukTag({
  text: "Active"
}) }}
```

### Grey (not started / inactive)

#### HTML

```html
<strong class="govuk-tag govuk-tag--grey">
  Not started
</strong>
```

#### Nunjucks

```njk
{{ govukTag({
  text: "Not started",
  classes: "govuk-tag--grey"
}) }}
```

### Green (completed / approved)

#### HTML

```html
<strong class="govuk-tag govuk-tag--green">
  Completed
</strong>
```

#### Nunjucks

```njk
{{ govukTag({
  text: "Completed",
  classes: "govuk-tag--green"
}) }}
```

### Red (rejected / failed / urgent)

#### HTML

```html
<strong class="govuk-tag govuk-tag--red">
  Rejected
</strong>
```

#### Nunjucks

```njk
{{ govukTag({
  text: "Rejected",
  classes: "govuk-tag--red"
}) }}
```

### Orange (pending / awaiting)

#### Nunjucks

```njk
{{ govukTag({
  text: "Pending",
  classes: "govuk-tag--orange"
}) }}
```

### Yellow (requires attention / in progress)

#### Nunjucks

```njk
{{ govukTag({
  text: "In progress",
  classes: "govuk-tag--yellow"
}) }}
```

### Turquoise (submitted / sent)

#### Nunjucks

```njk
{{ govukTag({
  text: "Submitted",
  classes: "govuk-tag--turquoise"
}) }}
```

### Light blue (received / acknowledged)

#### Nunjucks

```njk
{{ govukTag({
  text: "Received",
  classes: "govuk-tag--light-blue"
}) }}
```

### Purple

#### Nunjucks

```njk
{{ govukTag({
  text: "New",
  classes: "govuk-tag--purple"
}) }}
```

### Pink

#### Nunjucks

```njk
{{ govukTag({
  text: "Reviewed",
  classes: "govuk-tag--pink"
}) }}
```

### In a task list (typical use)

Tags are most commonly used in task lists to show completion status.

#### Nunjucks

```njk
{{ govukTaskList({
  items: [
    {
      title: { text: "Check before you start" },
      href: "/eligibility",
      status: {
        tag: { text: "Completed", classes: "govuk-tag--green" }
      }
    },
    {
      title: { text: "Add your personal details" },
      href: "/personal-details",
      status: {
        tag: { text: "In progress", classes: "govuk-tag--yellow" }
      }
    },
    {
      title: { text: "Submit and pay" },
      status: {
        tag: { text: "Not started", classes: "govuk-tag--grey" }
      }
    }
  ]
}) }}
```

### In a table (typical use)

#### Nunjucks

```njk
{{ govukTable({
  head: [
    { text: "Application" },
    { text: "Applicant" },
    { text: "Status" }
  ],
  rows: [
    [
      { text: "APP-001" },
      { text: "Jane Smith" },
      { html: govukTag({ text: "Approved", classes: "govuk-tag--green" }) }
    ],
    [
      { text: "APP-002" },
      { text: "John Brown" },
      { html: govukTag({ text: "Pending", classes: "govuk-tag--orange" }) }
    ],
    [
      { text: "APP-003" },
      { text: "Susan White" },
      { html: govukTag({ text: "Rejected", classes: "govuk-tag--red" }) }
    ]
  ]
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes (or `html`) | The tag text. |
| `html` | string | Yes (or `text`) | HTML content for the tag. If provided, takes precedence over `text`. |
| `classes` | string | No | Classes to add to the `<strong>` element. Use colour modifier classes (e.g. `govuk-tag--grey`, `govuk-tag--green`). |
| `attributes` | object | No | HTML attributes (as key–value pairs) to add to the `<strong>` element. |

## Error Messages

The tag component does not have error states. This is a presentational component.

## Accessibility

- The `<strong>` element provides some semantic weight, but do not rely on it alone — the text content must communicate the status on its own.
- Do not rely on colour alone to communicate status — the text inside the tag is essential.
- All GOV.UK tag colour combinations meet WCAG 2.1 AA colour contrast requirements.
- When tags appear in tables or lists, ensure enough surrounding context exists for users to understand what the tag refers to.
- Maintain a consistent colour-to-status mapping throughout your service — for example, always use green for "Completed".

## Do and Do not

**Do:**
- Use concise, meaningful status words — 1 to 3 words.
- Apply colours consistently throughout the service (green always means the same thing).
- Ensure the text alone communicates the status, independent of colour.

**Do not:**
- Do not use tags for interactive elements — use buttons or links.
- Do not use long phrases inside tags.
- Do not mix colour meanings across pages — if green means "approved" in one place, it should not mean "active" elsewhere.
- Do not use more than 3 or 4 different tag colours on a single page — this reduces the signal value of each colour.

## Related Components / Patterns

- [Task List](../task-list/SKILLS.md) — uses tags for task completion status
- [Phase Banner](../phase-banner/SKILLS.md) — uses a tag for the phase label
- [Table](../table/SKILLS.md) — tags are often embedded in table cells
