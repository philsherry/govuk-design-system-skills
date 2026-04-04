---
category: components
description: Use the review date component to tell users when health content on a page was last reviewed and when the next review is due.
keywords:
  - "content review"
  - "date"
  - "last reviewed"
  - "page updated"
  - "review"
  - "review date"
last-reviewed: "2026-04-03"
name: Review Date
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/review-date"
---

# Review Date

> Use the review date component to tell users when health content on a page was last reviewed and when the next review is due.
> Source: https://service-manual.nhs.uk/design-system/components/review-date

## Overview

The review date component displays two dates at the bottom of a page: when the content was last reviewed and when the next review is due. This reassures users that the health information they read remains current and accurate.

The NHS has a clinical governance requirement to review health content at set intervals. The review date component makes this review cycle visible to users, building trust in the information.

The component has no JavaScript dependency and no interactive behaviour. It renders as a simple paragraph block with reduced font size.

## When to use this component

- On every page that contains clinical or health information aimed at patients or the public.
- When content follows a defined review cycle and you need to show the last review date and the next review due date.
- On NHS.UK condition pages, medicine pages, and any page containing health advice.

## When not to use this component

- Do not use it on transactional service pages that do not contain health content (for example, appointment booking confirmation pages).
- Do not use it on pages where no formal content review process exists.
- Do not use it as a general "last updated" indicator — it specifically signals clinical content review.

## How it works

The component renders as a `<div class="nhsuk-review-date">` containing a `<p>` element. The paragraph text follows a standard format:

"Page last reviewed: [date]" on one line, and "Next review due: [date]" on the next.

Place the component at the bottom of the page content area, before the footer.

## Code examples

### Default / Basic

#### HTML

```html
<div class="nhsuk-review-date">
  <p class="nhsuk-body-s">
    Page last reviewed: 12 February 2026<br>
    Next review due: 12 February 2029
  </p>
</div>
```

#### Nunjucks

```njk
{{ reviewDate({
  lastReview: "12 February 2026",
  nextReview: "12 February 2029"
}) }}
```

### With only last review date

When you do not yet have a scheduled next review date, display only the last review date.

#### HTML

```html
<div class="nhsuk-review-date">
  <p class="nhsuk-body-s">
    Page last reviewed: 12 February 2026
  </p>
</div>
```

#### Nunjucks

```njk
{{ reviewDate({
  lastReview: "12 February 2026"
}) }}
```

### With custom classes

#### Nunjucks

```njk
{{ reviewDate({
  lastReview: "12 February 2026",
  nextReview: "12 February 2029",
  classes: "app-review-date--compact"
}) }}
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `lastReview` | string | Yes | The date the page content was last reviewed. Use the format "DD Month YYYY" (for example, "12 February 2026"). |
| `nextReview` | string | No | The date the next review is due. Use the same date format. |
| `classes` | string | No | Classes to add to the outer `<div>`. |
| `attributes` | object | No | HTML attributes (as key-value pairs) to add to the outer `<div>`. |

## Accessibility

- The component uses plain text and standard HTML — screen readers read the dates as normal content.
- Date format follows the NHS style guide (for example, "12 February 2026") to make dates unambiguous and accessible.
- Place the review date consistently at the bottom of the content area so users know where to find it.
- Do not use abbreviations for month names — write them out in full.

## Do and do not

**Do:**
- Use the review date on all pages containing health or clinical information.
- Place the component at the bottom of the page content, before the footer.
- Use the full date format: day, month name in full, and year (for example, "12 February 2026").
- Keep the review dates accurate and update them after each review cycle.

**Do not:**
- Do not use the review date on transactional pages that do not contain health content.
- Do not abbreviate month names.
- Do not display future "last reviewed" dates — the date must reflect when the review actually took place.
- Do not use this component as a generic "last updated" timestamp.

## Related components and patterns

- [Footer](../footer/SKILLS.md) — the review date sits above the footer
- [Warning Callout](../warning-callout/SKILLS.md) — for urgent health information within the page content
