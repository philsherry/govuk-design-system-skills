---
category: patterns
description: Show a count of unread items inside a navigation link using a small badge indicator.
hmrc-frontend: "7.x"
keywords:
  - "alert"
  - "badge"
  - "count"
  - "messages"
  - "notification"
  - "notification badge"
  - "unread"
last-reviewed: "2026-04-03"
name: Notification badge
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/notification-badge/"
subcategory: headers
---

# Notification badge

> Show a count of unread items inside a navigation link using a small badge indicator.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/notification-badge/

## Overview

The notification badge sits inside a navigation link to show the number of unread items, such as messages or alerts. It uses the `hmrcNotificationBadge` macro from hmrc-frontend.

The badge displays a number inside a coloured circle next to the link text. Screen readers announce the count so that users who cannot see the badge still receive the information. Keep counts accurate — do not show stale numbers.

## When to use

- When a navigation link leads to a section with unread messages, alerts, or notifications
- Inside service navigation where users need to see outstanding items at a glance

## When not to use

- Do not use the badge for counts that do not relate to unread or outstanding items (for example, do not show a total record count)
- Do not use the badge on links outside navigation — it belongs in navigation contexts
- Do not use it for status indicators that are not numeric — use the tag component for text-based statuses

## How it works

The `hmrcNotificationBadge` macro takes a `notificationCount` parameter that sets the visible number. Place the badge markup inside the navigation link, after the link text.

The badge appears as a small circle with a number. When the count reaches zero, hide the badge rather than showing "0".

### Keeping counts accurate

Fetch the count from the server on each page load. Do not cache the count on the client side — a stale count misleads users and creates a poor experience.

## Code Examples

### HTML

```html
<a class="govuk-link" href="/messages">
  Messages
  <span class="hmrc-notification-badge" aria-label="3 unread messages">3</span>
</a>
```

### Nunjucks

```njk
<a class="govuk-link" href="/messages">
  Messages
  {{ hmrcNotificationBadge({
    notificationCount: 3,
    ariaLabel: "3 unread messages"
  }) }}
</a>
```

### Inside service navigation

```html
<nav aria-label="Service">
  <ul class="govuk-list">
    <li>
      <a class="govuk-link" href="/overview">Overview</a>
    </li>
    <li>
      <a class="govuk-link" href="/messages">
        Messages
        <span class="hmrc-notification-badge" aria-label="5 unread messages">5</span>
      </a>
    </li>
  </ul>
</nav>
```

## Accessibility

- Use `aria-label` on the badge to provide a descriptive announcement, such as "3 unread messages" — the number alone does not give screen reader users enough context
- Do not rely on colour alone to convey the badge meaning — the number itself communicates the count
- The badge text must meet the WCAG 2.2 contrast ratio of at least 4.5:1 against the badge background
- Hide the badge when the count reaches zero — do not show an empty or "0" badge, as this adds noise for screen reader users
- Ensure the badge remains visible and readable at 400% zoom

## Do and Do not

**Do:**
- Show an accurate, up-to-date count of unread items
- Use `aria-label` to describe the count for screen reader users
- Place the badge inside a navigation link, after the link text
- Hide the badge when the count reaches zero
- Fetch the count from the server on each page load

**Do not:**
- Do not show stale or cached counts
- Do not display "0" — hide the badge instead
- Do not use the badge for non-numeric status indicators
- Do not place the badge outside navigation links
- Do not use the badge for total counts that are not unread or outstanding items

## Related Components / Patterns

- [GOV.UK Tag](../../../govuk-design-system/components/tag/SKILLS.md) — for text-based status labels, not numeric counts
- [GOV.UK Header](../../../govuk-design-system/components/header/SKILLS.md) — the account navigation that often contains notification badges
