---
category: patterns
description: Display guidance or instructions for caseworkers at the top of internal pages, below the internal header.
keywords:
  - "banner"
  - "caseworker"
  - "guidance"
  - "internal"
  - "staff facing"
last-reviewed: "2026-04-03"
name: Caseworker guidance banner
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/caseworker-guidance-banner/"
subcategory: headers
---

# Caseworker guidance banner

> Display guidance or instructions for caseworkers at the top of internal pages, below the internal header.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/caseworker-guidance-banner/

## Overview

The caseworker guidance banner appears at the top of internal caseworker pages, below the internal header. It provides guidance or instructions for caseworkers handling a specific case. The banner uses a blue background to distinguish it from user-facing content and from other notification banners.

The banner contains plain text guidance and does not include interactive elements such as links or buttons. It acts as a visual prompt, drawing the caseworker's attention to case-specific instructions before they take action on the page.

## When to use

- When caseworkers need to see case-specific guidance before acting on a page
- On internal HMRC tools and caseworker systems where staff need reminders about process or policy
- When the guidance applies to the whole page, not a single field or section

## When not to use

- Do not use this banner on public-facing HMRC services
- Do not use it to show error messages or validation feedback — use the error summary and error message components instead
- Do not use it for interactive content that requires user input — keep the banner as plain text guidance
- Do not use it for general service-wide announcements — use the notification banner for those

## How it works

Place the caseworker guidance banner below the internal header and above the main page content. The banner spans the full width of the page and uses a blue background (`#1d70b8`) with white text to stand out from other page elements.

The banner content should:

1. State the guidance in one or two short sentences
2. Use plain language that caseworkers understand without further explanation
3. Relate to the specific case or task on the page

Do not nest headings inside the banner. Use paragraph text to keep the content flat and scannable.

## Code Examples

### HTML

```html
<div class="hmrc-caseworker-guidance-banner" role="region" aria-label="Caseworker guidance">
  <div class="hmrc-caseworker-guidance-banner__content">
    <p class="hmrc-caseworker-guidance-banner__text">
      Check the taxpayer's identity before making changes to this record.
    </p>
  </div>
</div>
```

### Nunjucks

```njk
<div class="hmrc-caseworker-guidance-banner" role="region" aria-label="Caseworker guidance">
  <div class="hmrc-caseworker-guidance-banner__content">
    <p class="hmrc-caseworker-guidance-banner__text">
      Check the taxpayer's identity before making changes to this record.
    </p>
  </div>
</div>
```

### With longer guidance

```html
<div class="hmrc-caseworker-guidance-banner" role="region" aria-label="Caseworker guidance">
  <div class="hmrc-caseworker-guidance-banner__content">
    <p class="hmrc-caseworker-guidance-banner__text">
      This case has an open dispute. Do not issue a penalty notice until the dispute review completes.
    </p>
  </div>
</div>
```

## Accessibility

- Use `role="region"` and `aria-label="Caseworker guidance"` on the banner container so screen reader users can identify and skip the banner
- Ensure the white text on blue background meets the WCAG 2.2 contrast ratio of at least 4.5:1
- Keep the banner content as plain text — do not embed links, buttons, or form controls inside the banner
- The banner must remain visible and readable at 400% zoom without horizontal scrolling
- Do not use colour alone to convey meaning — the text content must communicate the guidance without relying on the blue background

## Do and Do not

**Do:**
- Place the banner below the internal header and above the main content
- Write short, direct guidance that relates to the current case or page
- Use the banner on internal caseworker pages only
- Keep the content to one or two sentences

**Do not:**
- Do not use this banner on public-facing pages
- Do not add links, buttons, or interactive elements inside the banner
- Do not use it for error messages or validation
- Do not stack more than one guidance banner on a single page
- Do not use it for content that changes based on user interaction — the banner content should stay static on page load

## Related Components / Patterns

- [Internal header](../internal-header/SKILLS.md) — the caseworker guidance banner sits below this header
- [GOV.UK Notification banner](../../../govuk-design-system/components/notification-banner/SKILLS.md) — for service-level notifications on public-facing pages
