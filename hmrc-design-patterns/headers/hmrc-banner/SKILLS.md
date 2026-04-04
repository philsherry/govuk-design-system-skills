---
category: patterns
description: Identify a page as part of the HMRC domain by showing the "HM Revenue & Customs" banner above the GOV.UK header.
hmrc-frontend: "7.x"
keywords:
  - "banner"
  - "brand"
  - "hmrc"
  - "hmrc banner"
  - "identity"
last-reviewed: "2026-04-03"
name: HMRC banner
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/hmrc-banner/"
subcategory: headers
---

# HMRC banner

> Identify a page as part of the HMRC domain by showing the "HM Revenue & Customs" banner above the GOV.UK header.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/hmrc-banner/

## Overview

The HMRC banner identifies a page as belonging to HM Revenue & Customs. It appears above the GOV.UK header on HMRC pages that sit outside a specific service, such as guidance pages or landing pages on the tax.service.gov.uk domain.

The banner shows "HM Revenue & Customs" in white text on a black background. It uses the `hmrcBanner` macro from hmrc-frontend and provides a consistent brand marker across HMRC pages.

## When to use

- On HMRC pages that sit outside a specific service (for example, guidance pages or account dashboards)
- When you need to show that a page belongs to the HMRC domain alongside the GOV.UK header

## When not to use

- Do not use the HMRC banner inside a service that already has the GOV.UK header with a service name — the service name identifies the service
- Do not use it on internal caseworker tools — use the internal header instead
- Do not use it on pages outside the HMRC domain

## How it works

The HMRC banner renders a thin black strip above the GOV.UK header. It contains the text "HM Revenue & Customs" in white. Place it before the GOV.UK header in the page markup.

The macro handles the layout and styling. You do not need to pass configuration options for the default appearance.

## Code examples

### HTML

```html
<div class="hmrc-banner" role="region" aria-label="HM Revenue and Customs banner">
  <div class="hmrc-organisation-logo">
    <p class="hmrc-organisation-logo__text">
      <span class="hmrc-organisation-logo__crown">
        HM Revenue<br>&amp; Customs
      </span>
    </p>
  </div>
</div>
```

### Nunjucks

```njk
{{ hmrcBanner({}) }}
```

### Placed above the GOV.UK header

```njk
{{ hmrcBanner({}) }}

{{ govukHeader({
  homepageUrl: "https://www.gov.uk",
  serviceName: "Manage your tax credits",
  serviceUrl: "/tax-credits"
}) }}
```

## Accessibility

- Use `role="region"` and `aria-label="HM Revenue and Customs banner"` so screen reader users can identify and skip the banner
- The white text on black background provides a contrast ratio well above the WCAG 2.2 minimum of 4.5:1
- The banner uses semantic HTML (`<p>` element) for the organisation name — do not change this to a heading, as it would disrupt the page heading hierarchy
- The banner must remain visible and readable at 400% zoom

## Do and do not

**Do:**
- Place the HMRC banner above the GOV.UK header
- Use the `hmrcBanner` macro from hmrc-frontend
- Use the banner on HMRC pages that sit outside a named service

**Do not:**
- Do not modify the banner text or replace "HM Revenue & Customs" with abbreviations
- Do not use the banner inside a service that already shows a service name in the GOV.UK header
- Do not use the banner on internal caseworker tools — use the internal header instead
- Do not add interactive elements (links or buttons) to the banner

## Related components and patterns

- [GOV.UK Header](../../../govuk-design-system/components/header/SKILLS.md) — the HMRC banner sits above this component
- [Internal header](../internal-header/SKILLS.md) — use this instead for internal HMRC tools
