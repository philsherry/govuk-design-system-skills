---
category: patterns
description: Show users when health content was last reviewed so they can trust that the information is current.
keywords:
  - "clinical review"
  - "content freshness"
  - "content review"
  - "last checked"
  - "last updated"
  - "page currency"
  - "review date"
last-reviewed: "2026-04-03"
name: Know that a page is up to date
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/patterns"
subcategory: help-users-to
---

# Know that a page is up to date

> Show users when health content was last reviewed so they can trust that the information is current.
> Source: <https://service-manual.nhs.uk/design-system/patterns>

## Overview

The review date pattern shows users when a page was last reviewed and when the next review is due. Health information changes as medical evidence evolves, so users need to know whether the content they read is current.

NHS UK Frontend provides a Review date component for this pattern. It sits at the bottom of health content pages and displays the last reviewed date and the next review date.

## When to use this pattern

- On all health information pages that contain clinical content.
- On guidance pages where the accuracy of the information changes over time.

## When not to use this pattern

- Do not use this pattern on transactional pages (question pages, confirmation pages, check answers pages) — these do not contain health information that users need to assess for currency.
- Do not use it on pages where the content does not have a formal review cycle.

## How it works

### Placement

Place the review date at the bottom of the page content, after the main body text and before the footer. Users who have read the content can then check the review date for reassurance.

### Date format

Use the standard NHS date format: "day month year" with the month written in full.

```text
Page last reviewed: 15 March 2024
Next review due: 15 March 2027
```

### Review cycles

NHS health content follows a clinical review cycle, typically every 3 years. The "next review due" date reflects this cycle.

## Code Examples

### HTML

```html
<div class="nhsuk-review-date">
  <p class="nhsuk-body-s">
    Page last reviewed: 15 March 2024<br>
    Next review due: 15 March 2027
  </p>
</div>
```

### Nunjucks

```njk
{{ reviewDate({
  lastReview: "15 March 2024",
  nextReview: "15 March 2027"
}) }}
```

## Accessibility

- The review date uses `nhsuk-body-s` (small body text) to differentiate it visually from the main content without removing it from the reading flow.
- Screen readers read the review date as part of the page content. Do not hide it with `aria-hidden` — users of assistive technology also need to know when content was last reviewed.
- Use the `<p>` element, not a heading, for the review date — the review date serves as metadata, not a section heading.

## Do and Do not

**Do:**

- Place the review date at the bottom of health content pages.
- Use the standard NHS date format with the full month name.
- Include both the "last reviewed" and "next review due" dates.
- Keep the review date accurate — update it when the page goes through clinical review.

**Do not:**

- Use the review date on transactional pages.
- Show a review date that has passed without updating the content — this undermines trust.
- Use a numerical date format (e.g. 15/03/2024) — write the month in full.
- Add the review date inside the main content area where it competes with the health information.

## Related Components / Patterns

- [Review date component](https://service-manual.nhs.uk/design-system/components/review-date)
- [Footer component](https://service-manual.nhs.uk/design-system/components/footer)
