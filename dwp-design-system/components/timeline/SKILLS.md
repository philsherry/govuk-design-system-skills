---
category: components
collection: internal
description: A chronological record of events, showing what happened, who did it, and when.
dwp-frontend: "3.x"
keywords:
  - "activity log"
  - "agent-facing"
  - "chronological"
  - "events"
  - "history"
  - "timeline"
last-reviewed: "2026-04-04"
name: Timeline
source: "https://design-system.dwp.gov.uk/components/timeline"
---

# Timeline

> A chronological record of events, showing what happened, who did it, and when.
> Source: <https://design-system.dwp.gov.uk/components/timeline>

## Overview

The timeline component displays a chronological record of events in agent-facing services. Each entry shows what happened, who took the action, and when, with optional descriptions and links for more detail. The component renders as an ordered list (`<ol>`) with the newest entry at the top.

## When to use this component

Use the timeline when you need to show a history of information or events in chronological order. The timeline should show a brief overview of what happened at each point.

Research covers agent-facing services only.

## When not to use this component

Do not use the timeline to show large amounts of information. Each entry should be brief.

Do not use the timeline to show where users are in a journey. Use the GOV.UK [task list](https://design-system.service.gov.uk/components/task-list/) or step-by-step patterns instead.

## How it works

Display information in chronological order, with the newest item at the top. Each entry in the timeline should include:

- A short title that explains what happened
- Who took the action (byline)
- When the action happened (date)
- Optional: a description or a link for more detail

The timeline renders as an ordered list (`<ol>`) for semantic structure.

## Code examples

### Nunjucks

```njk
{{ dwpTimeline({
  items: [
    {
      title: "Application received",
      byline: "John Smith",
      date: "11 August 2024",
      description: {
        text: "Application submitted through the online service."
      }
    },
    {
      title: "Application started",
      byline: "John Smith",
      date: "10 August 2024"
    }
  ]
}) }}
```

### Nunjucks — with link

```njk
{{ dwpTimeline({
  items: [
    {
      title: "Decision made",
      byline: "Jane Doe",
      date: "15 August 2024",
      link: {
        href: "/decision/123",
        text: "View decision",
        visuallyHiddenText: "for application 123"
      }
    }
  ]
}) }}
```

### HTML

```html
<div class="dwp-timeline">
  <ol class="dwp-timeline__items">
    <li class="dwp-timeline__item">
      <p class="dwp-timeline__datetime">11 August 2024</p>
      <h2 class="dwp-timeline__heading">Application received</h2>
      <p class="dwp-timeline__by-line">by John Smith</p>
      <p class="dwp-timeline__content">Application submitted through the online service.</p>
    </li>
    <li class="dwp-timeline__item">
      <p class="dwp-timeline__datetime">10 August 2024</p>
      <h2 class="dwp-timeline__heading">Application started</h2>
      <p class="dwp-timeline__by-line">by John Smith</p>
    </li>
  </ol>
</div>
```

## Nunjucks macro options

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `items` | array | Yes | Timeline entries (see below) |
| `headingLevel` | string | No | Heading level for entry titles (default: "2") |
| `classes` | string | No | Extra classes for the container |
| `attributes` | object | No | HTML attributes for the container |

### Item parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | string | What happened — the entry heading |
| `byline` | string | Who took the action (prefixed with "by " in the output) |
| `date` | string | When it happened |
| `description.text` | string | Plain text description |
| `description.html` | string | HTML description (takes precedence over `text`) |
| `link.href` | string | URL for a detail link |
| `link.text` | string | Link text |
| `link.visuallyHiddenText` | string | Extra context for screen readers |

## Accessibility

- The timeline uses an ordered list (`<ol>`) to convey sequence to screen readers.
- Each entry uses a heading element (`<h2>` by default) — adjust `headingLevel` to fit the page's heading hierarchy.
- Links include optional `visuallyHiddenText` for unique accessible names (e.g., "View decision for application 123").

## CSS classes

| Class | Purpose |
|-------|---------|
| `dwp-timeline` | Block: the timeline component |
| `dwp-timeline__items` | Element: the ordered list |
| `dwp-timeline__item` | Element: a single timeline entry |
| `dwp-timeline__datetime` | Element: date/time display |
| `dwp-timeline__heading` | Element: entry heading |
| `dwp-timeline__by-line` | Element: who took the action |
| `dwp-timeline__content` | Element: description text |
| `dwp-timeline__link` | Element: detail link |

## Research

DWP teams have used this component on Manage Bereavement Support Payment, Access to Work, Prepare for Universal Credit, Support for Mortgage Interest, and Apply for New Style Jobseeker's Allowance. Research covers agent-facing services only.

## Do and do not

**Do:**
- Do place the newest entry at the top of the timeline.
- Do keep each entry brief — use a short title, a byline, and a date.
- Do adjust `headingLevel` to fit the page's heading hierarchy (the default is `<h2>`).
- Do use `visuallyHiddenText` on links to give screen readers unique accessible names (e.g., "View decision for application 123").

**Do not:**
- Do not use the timeline to show where users are in a journey — use the GOV.UK task list or step-by-step patterns instead.
- Do not use the timeline to display large amounts of information per entry.
- Do not skip the byline and date fields — they give agents the context they need to understand each event.

## Related components

- [GOV.UK task list](https://design-system.service.gov.uk/components/task-list/) — for showing progress through a journey (not history)
- [GOV.UK summary list](https://design-system.service.gov.uk/components/summary-list/) — for key-value pair display
