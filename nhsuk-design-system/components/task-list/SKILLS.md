---
category: components
description: Use the task list component to display the tasks a user needs to complete and allow them to navigate to each task.
keywords:
  - "checklist"
  - "list"
  - "progress"
  - "task"
  - "task list"
  - "task tracker"
last-reviewed: "2026-04-03"
name: Task List
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/task-list"
---

# Task List

> Use the task list component to display the tasks a user needs to complete and allow them to navigate to each task.
> Source: https://service-manual.nhs.uk/design-system/components/task-list

## Overview

The task list component displays a series of tasks that a user must complete as part of a larger process. Each task shows its name (as a link when available to start), an optional hint, and a status indicator. The status renders using either a **tag** component or plain text.

The task list helps users understand what they need to do, what they have already done, and what is available or locked at each point in the journey.

You can group tasks into sections under headings when the journey is complex.

## When to use this component

- When a service requires users to complete more than one distinct task or section before reaching an outcome.
- When users can complete tasks in any order, or in a defined order with dependencies.
- When users may need to return across more than one session to complete the journey.

## When not to use this component

- Do not use the task list for a simple linear form flow — use a standard multi-page form with back links.
- Do not use it to display a summary of completed answers — use the **summary list** component.
- Do not use it as a navigation menu — use **service navigation**.

## How it works

Each item in the task list consists of:

1. A **title** — a link when the task is available, or plain text when the user cannot start it yet.
2. An optional **hint** — extra context below the title.
3. A **status** — shown as a tag or plain text.

The component renders as `<ul class="nhsuk-task-list">`. Each item is an `<li class="nhsuk-task-list__item">`. The title and status link via `aria-describedby` — screen readers announce both the task name and its status when focus lands on the title link.

When you omit `href` from an item, the title renders as plain text, indicating the task is unavailable.

### Status patterns

| Status | Tag colour |
|--------|------------|
| Completed | Green (`nhsuk-tag--green`) |
| In progress | Blue (default, no modifier) |
| Not started | Grey (`nhsuk-tag--grey`) |
| Cannot start yet | Plain text — no tag |
| Optional | Grey tag or plain text |

### idPrefix

Use `idPrefix` on each task list to generate unique `id` attributes for status elements (used by `aria-describedby`). When more than one task list appears on one page, each must have a unique `idPrefix`.

## Code examples

### Default / Basic

#### HTML

```html
<ul class="nhsuk-task-list">
  <li class="nhsuk-task-list__item nhsuk-task-list__item--with-link">
    <div class="nhsuk-task-list__name-and-hint">
      <a class="nhsuk-link nhsuk-task-list__link" href="/eligibility" aria-describedby="eligibility-status">
        Check eligibility
      </a>
    </div>
    <div class="nhsuk-task-list__status" id="eligibility-status">
      <strong class="nhsuk-tag nhsuk-tag--green">Completed</strong>
    </div>
  </li>
  <li class="nhsuk-task-list__item nhsuk-task-list__item--with-link">
    <div class="nhsuk-task-list__name-and-hint">
      <a class="nhsuk-link nhsuk-task-list__link" href="/personal-details" aria-describedby="personal-details-status">
        Add your personal details
      </a>
    </div>
    <div class="nhsuk-task-list__status" id="personal-details-status">
      <strong class="nhsuk-tag">In progress</strong>
    </div>
  </li>
  <li class="nhsuk-task-list__item">
    <div class="nhsuk-task-list__name-and-hint">
      <span aria-describedby="submit-status">Book appointment</span>
    </div>
    <div class="nhsuk-task-list__status" id="submit-status">
      Cannot start yet
    </div>
  </li>
</ul>
```

#### Nunjucks

```njk
{{ taskList({
  items: [
    {
      title: { text: "Check eligibility" },
      href: "/eligibility",
      status: {
        tag: { text: "Completed", classes: "nhsuk-tag--green" }
      }
    },
    {
      title: { text: "Add your personal details" },
      href: "/personal-details",
      status: {
        tag: { text: "In progress" }
      }
    },
    {
      title: { text: "Choose appointment date" },
      href: "/choose-date",
      status: {
        tag: { text: "Not started", classes: "nhsuk-tag--grey" }
      }
    },
    {
      title: { text: "Book appointment" },
      status: {
        text: "Cannot start yet"
      }
    }
  ]
}) }}
```

### With hints

#### Nunjucks

```njk
{{ taskList({
  items: [
    {
      title: { text: "Check eligibility" },
      hint: {
        text: "Who can register, age requirements, and documents you need"
      },
      href: "/eligibility",
      status: {
        tag: { text: "Completed", classes: "nhsuk-tag--green" }
      }
    },
    {
      title: { text: "Provide health information" },
      hint: {
        text: "Current medications, allergies, and medical history"
      },
      href: "/health-info",
      status: {
        tag: { text: "In progress" }
      }
    },
    {
      title: { text: "Book appointment" },
      hint: {
        text: "Choose a date and time at your local surgery"
      },
      status: {
        text: "Cannot start yet"
      }
    }
  ]
}) }}
```

### With sections (groups of tasks)

Group related tasks under headings. Use a unique `idPrefix` for each group to avoid duplicate `id` attributes.

#### Nunjucks

```njk
<h2 class="nhsuk-heading-m">Your details</h2>
{{ taskList({
  idPrefix: "details",
  items: [
    {
      title: { text: "Personal information" },
      href: "/personal-info",
      status: { tag: { text: "Completed", classes: "nhsuk-tag--green" } }
    },
    {
      title: { text: "Contact details" },
      href: "/contact",
      status: { tag: { text: "Not started", classes: "nhsuk-tag--grey" } }
    }
  ]
}) }}

<h2 class="nhsuk-heading-m">Health information</h2>
{{ taskList({
  idPrefix: "health",
  items: [
    {
      title: { text: "Medical history" },
      href: "/medical-history",
      status: { tag: { text: "Not started", classes: "nhsuk-tag--grey" } }
    },
    {
      title: { text: "Current medications" },
      status: { text: "Cannot start yet" }
    }
  ]
}) }}
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `items` | array | Yes | Array of task list item objects. |
| `idPrefix` | string | No | Prefix for generated `id` attributes on status elements. Defaults to `"task-list"`. Must be unique when more than one task list appears on the same page. |
| `classes` | string | No | Classes to add to the `<ul>` element. |
| `attributes` | object | No | HTML attributes (as key-value pairs) to add to the `<ul>` element. |

### Item object options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `title` | object | Yes | Options for the task title. Must include `text` or `html`. |
| `hint` | object | No | Options for hint text shown below the task title. |
| `status` | object | Yes | Options for the status indicator. |
| `href` | string | No | URL for the task link. If provided, the title is a link. If omitted, the title is plain text (task unavailable). |
| `classes` | string | No | Classes to add to the `<li>` element. |
| `attributes` | object | No | HTML attributes to add to the `<li>` element. |

### Status object options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `tag` | object | No | Options for a Tag component. Use for "Completed", "In progress", "Not started", and similar states. |
| `text` | string | No | Plain text status. Use for "Cannot start yet" (no tag appropriate). |
| `html` | string | No | HTML for the status. |
| `classes` | string | No | Classes to add to the status element. |

## Accessibility

- Each task title link has `aria-describedby` pointing to the corresponding status element. Screen readers announce both the task name and its status when the link receives focus — for example, "Add personal details — In progress".
- When users cannot start a task, the title renders as plain text (not a link) — they cannot navigate to an unavailable task.
- Status element `id` attributes derive from `idPrefix` and item index. Provide a unique `idPrefix` for each task list on the same page to avoid duplicate IDs.
- Use consistent tag colours and status labels throughout the service.
- Do not rely on colour alone for status — the text inside each tag must convey the state.

## Do and do not

**Do:**
- Show all tasks and their statuses, including those users cannot start yet.
- Use consistent status labels and colours throughout the service.
- Provide hint text when a task title alone may not be clear enough.
- Use a unique `idPrefix` for each task list on the same page.

**Do not:**
- Do not use the task list for a simple linear form flow — use page-by-page navigation.
- Do not hide tasks that users cannot start yet — show them with a "Cannot start yet" status.
- Do not use links for tasks that are unavailable — they should be plain text.
- Do not use the task list for displaying completed answer summaries — use the summary list.

## Related components and patterns

- [Tag](../tag/SKILLS.md) — used for status indicators within each task item
- [Summary List](../summary-list/SKILLS.md) — for displaying answers at the end of a journey
- [Pagination](../pagination/SKILLS.md) — for paginated result navigation
