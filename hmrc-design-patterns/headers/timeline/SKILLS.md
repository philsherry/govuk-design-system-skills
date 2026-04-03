---
category: patterns
description: Show a chronological list of events or actions, such as case history, payment history, or correspondence history.
hmrc-frontend: "7.x"
keywords:
  - "case history"
  - "chronological"
  - "events"
  - "history"
  - "payment history"
  - "timeline"
last-reviewed: "2026-04-03"
name: Timeline
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/timeline/"
subcategory: headers
---

# Timeline

> Show a chronological list of events or actions, such as case history, payment history, or correspondence history.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/timeline/

## Overview

The timeline shows a chronological list of events or actions. It uses the `hmrcTimeline` macro from hmrc-frontend. Each event has a title, date, and optional description.

The timeline works well for showing case history, payment history, or correspondence history in HMRC account services. Events appear in reverse chronological order (newest first). The component uses an ordered list (`<ol>`) with the `hmrc-timeline` class.

## When to use

- When users need to see a history of events or actions in date order
- For case history, payment history, correspondence records, or submission logs
- When each event has at least a title and a date

## When not to use

- Do not use the timeline for step-by-step instructions — use the GOV.UK step-by-step navigation pattern instead
- Do not use it for a task list where users must complete actions — use the task list component instead
- Do not use it for content that does not have dates — use a standard list instead

## How it works

The `hmrcTimeline` macro generates an ordered list of events. Each event contains:

1. **Title** — a short description of what happened (for example, "Payment received")
2. **Date** — when the event occurred, in the format "1 January 2025"
3. **Description** (optional) — extra detail about the event

Events appear in reverse chronological order, with the most recent event first. The component uses a vertical line on the left side to connect events and provide a visual timeline.

### Date format

Use the GOV.UK date format: day month year with no leading zeros and the month as a word. For example, "3 April 2026", not "03/04/2026".

## Code Examples

### HTML

```html
<ol class="hmrc-timeline">
  <li class="hmrc-timeline__event">
    <h2 class="hmrc-timeline__event-title govuk-heading-s">Payment received</h2>
    <time class="hmrc-timeline__event-meta" datetime="2026-04-01">
      <span class="govuk-body-s">1 April 2026</span>
    </time>
    <div class="hmrc-timeline__event-content">
      <p class="govuk-body">We received your payment of £1,200.00.</p>
    </div>
  </li>
  <li class="hmrc-timeline__event">
    <h2 class="hmrc-timeline__event-title govuk-heading-s">Tax return submitted</h2>
    <time class="hmrc-timeline__event-meta" datetime="2026-01-15">
      <span class="govuk-body-s">15 January 2026</span>
    </time>
    <div class="hmrc-timeline__event-content">
      <p class="govuk-body">You submitted your Self Assessment tax return for the 2024 to 2025 tax year.</p>
    </div>
  </li>
</ol>
```

### Nunjucks

```njk
{{ hmrcTimeline({
  headingLevel: 2,
  events: [
    {
      title: "Payment received",
      datetime: "2026-04-01",
      date: "1 April 2026",
      content: "<p class=\"govuk-body\">We received your payment of £1,200.00.</p>"
    },
    {
      title: "Tax return submitted",
      datetime: "2026-01-15",
      date: "15 January 2026",
      content: "<p class=\"govuk-body\">You submitted your Self Assessment tax return for the 2024 to 2025 tax year.</p>"
    }
  ]
}) }}
```

### Without descriptions

```njk
{{ hmrcTimeline({
  headingLevel: 2,
  events: [
    {
      title: "Refund issued",
      datetime: "2026-03-20",
      date: "20 March 2026"
    },
    {
      title: "Tax calculation completed",
      datetime: "2026-03-10",
      date: "10 March 2026"
    }
  ]
}) }}
```

## Accessibility

- The timeline uses an ordered list (`<ol>`) to convey the sequential relationship between events
- Each event title uses a heading element — set the `headingLevel` parameter to match the page heading hierarchy (for example, `h2` if the timeline sits under an `h1`)
- Dates use the `<time>` element with a `datetime` attribute in ISO format for machine readability
- Screen reader users hear the events in the order they appear in the markup — put the newest event first to match the visual order
- The vertical line connecting events serves as a visual aid only — it does not convey information that screen reader users miss
- Ensure text and background colours meet the WCAG 2.2 contrast ratio of at least 4.5:1

## Do and Do not

**Do:**
- Order events with the newest first (reverse chronological)
- Use the GOV.UK date format: "3 April 2026"
- Include a `datetime` attribute on each `<time>` element
- Set the `headingLevel` parameter to fit the page heading hierarchy
- Keep event titles short and descriptive

**Do not:**
- Do not use the timeline for step-by-step instructions or task lists
- Do not mix chronological and reverse-chronological order within the same timeline
- Do not use numeric date formats (03/04/2026) in the visible text
- Do not omit the date from an event — every event needs a date
- Do not nest timelines inside other timelines

## Related Components / Patterns

- [GOV.UK Summary list](../../../govuk-design-system/components/summary-list/SKILLS.md) — for key-value pairs, not chronological events
- [GOV.UK Table](../../../govuk-design-system/components/table/SKILLS.md) — for tabular data where comparison across rows matters
- [GOV.UK Task list](../../../govuk-design-system/components/task-list/SKILLS.md) — for tasks users must complete, not historical events
