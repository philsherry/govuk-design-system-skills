---
category: patterns
description: Replace the GOV.UK header with the HMRC internal header for internal tools and caseworker systems.
hmrc-frontend: "7.x"
keywords:
  - "caseworker"
  - "header"
  - "internal"
  - "internal header"
  - "staff facing"
last-reviewed: "2026-04-03"
name: Internal header
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/internal-header/"
subcategory: headers
---

# Internal header

> Replace the GOV.UK header with the HMRC internal header for internal tools and caseworker systems.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/internal-header/

## Overview

The internal header replaces the GOV.UK header for HMRC internal tools and caseworker systems. It does not show the GOV.UK crown logo because internal tools do not form part of the public-facing GOV.UK site.

The header uses the `hmrcInternalHeader` macro from hmrc-frontend. It displays the service name and can include navigation links for internal services. The visual style uses a black background, matching the HMRC brand, but without the GOV.UK logotype.

## When to use

- On HMRC internal tools that caseworkers and staff access
- On systems that do not form part of the public-facing GOV.UK estate
- When you need a header that shows the internal service name and optional navigation

## When not to use

- Do not use the internal header on public-facing HMRC services — use the GOV.UK header instead
- Do not use it on pages that appear on the GOV.UK domain or that members of the public access
- Do not use it alongside the HMRC banner — the internal header replaces both the GOV.UK header and the HMRC banner

## How it works

The `hmrcInternalHeader` macro generates the header markup. Pass the service name as a parameter. You can also pass navigation items for internal service sections.

The header sits at the top of every page in the internal service. It does not include the GOV.UK crown logo or the "GOV.UK" text.

### Service name

Always provide a service name. This helps caseworkers identify which tool they are using, as they may have more than one internal service open at the same time.

### Navigation

You can add navigation links for sections within the internal service. Each link has a `text` and `href` property. Mark the active link with `active: true`.

## Code Examples

### HTML

```html
<header class="hmrc-internal-header" role="banner">
  <div class="hmrc-internal-header__content">
    <a class="hmrc-internal-header__link" href="/case-management">
      Case management
    </a>
  </div>
</header>
```

### Nunjucks

```njk
{{ hmrcInternalHeader({
  homepageUrl: "/case-management",
  serviceName: "Case management"
}) }}
```

### With navigation links

```njk
{{ hmrcInternalHeader({
  homepageUrl: "/case-management",
  serviceName: "Case management",
  navigation: [
    {
      text: "Dashboard",
      href: "/case-management/dashboard"
    },
    {
      text: "Open cases",
      href: "/case-management/open-cases",
      active: true
    },
    {
      text: "Closed cases",
      href: "/case-management/closed-cases"
    }
  ]
}) }}
```

## Accessibility

- The header uses `role="banner"` to identify it as the page banner landmark
- The service name functions as a link back to the service home page — ensure the link text matches the service name
- Navigation links must have descriptive text that makes sense out of context
- Mark the active navigation item so screen reader users know which section they are viewing
- The header must remain usable at 400% zoom — navigation links should wrap rather than overflow
- Keyboard users must be able to tab through the service name link and all navigation links in order

## Do and Do not

**Do:**
- Use the internal header on all pages of the internal service
- Always include a service name
- Mark the active navigation link with `active: true`
- Keep navigation labels short and descriptive

**Do not:**
- Do not use the internal header on public-facing pages
- Do not include the GOV.UK crown logo in the internal header
- Do not use the internal header alongside the GOV.UK header — pick one
- Do not add more than 5 navigation links — if you need more, consider a different navigation pattern
- Do not remove the service name

## Related Components / Patterns

- [GOV.UK Header](../../../govuk-design-system/components/header/SKILLS.md) — use this on public-facing services instead
- [HMRC banner](../hmrc-banner/SKILLS.md) — not needed when using the internal header
- [Caseworker guidance banner](../caseworker-guidance-banner/SKILLS.md) — sits below the internal header
