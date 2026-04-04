---
category: patterns
description: Tell user research participants that they are using a prototype or test version of a service.
hmrc-frontend: "7.x"
keywords:
  - "banner"
  - "prototype"
  - "research"
  - "research banner"
  - "testing"
  - "user research"
last-reviewed: "2026-04-03"
name: Research banner
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/research-banner/"
subcategory: headers
---

# Research banner

> Tell user research participants that they are using a prototype or test version of a service.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/research-banner/

## Overview

The research banner tells participants in user research sessions that they are using a prototype or test version of a service. It uses the `hmrcResearchBanner` macro from hmrc-frontend.

The banner looks different from the GOV.UK phase banner. It makes clear that the service exists for research purposes and that users should not enter real personal or financial information. Place it above the main content area so participants see it before interacting with the page.

## When to use

- During user research sessions where participants interact with a prototype or test environment
- On HMRC prototypes and test services that look like real services but do not process real transactions

## When not to use

- Do not use the research banner on live services or public-facing pages
- Do not use it as a replacement for the GOV.UK phase banner — the phase banner serves a different purpose (showing alpha or beta status)
- Do not use it on internal caseworker tools in production

## How it works

The `hmrcResearchBanner` macro generates a banner that appears below the GOV.UK header (or internal header) and above the main page content. It displays text that explains the page exists for research purposes.

The banner should:

1. State that the service exists for research or testing
2. Tell participants not to enter real personal or financial information
3. Stand out from the rest of the page content

Place the banner on every page of the prototype or test service. Do not hide it on specific pages, as participants may land on any page during the session.

## Code examples

### HTML

```html
<div class="hmrc-research-banner" role="region" aria-label="Research banner">
  <div class="hmrc-research-banner__content">
    <p class="hmrc-research-banner__text">
      This is not a real service. Do not enter your real details.
    </p>
  </div>
</div>
```

### Nunjucks

```njk
{{ hmrcResearchBanner({
  text: "This is not a real service. Do not enter your real details."
}) }}
```

### Placed in the page layout

```njk
{{ govukHeader({
  homepageUrl: "https://www.gov.uk",
  serviceName: "Pay your Self Assessment tax bill",
  serviceUrl: "/"
}) }}

{{ hmrcResearchBanner({
  text: "This is not a real service. Do not enter your real details."
}) }}

<div class="govuk-width-container">
  <main class="govuk-main-wrapper" id="main-content" role="main">
    <!-- page content -->
  </main>
</div>
```

## Accessibility

- Use `role="region"` and `aria-label="Research banner"` so screen reader users can identify and skip the banner
- The banner text must meet the WCAG 2.2 contrast ratio of at least 4.5:1
- Keep the banner text as a single, clear statement — do not embed links or interactive elements
- The banner must remain visible and readable at 400% zoom
- Do not use colour alone to communicate that the service exists for research — the text must convey this

## Do and do not

**Do:**
- Place the research banner on every page of the prototype or test service
- Use clear text that tells participants the service exists for research
- Warn participants not to enter real personal or financial information
- Remove the banner before the service goes live

**Do not:**
- Do not use the research banner on live or public-facing services
- Do not use it as a replacement for the GOV.UK phase banner
- Do not hide the banner on specific pages within the prototype
- Do not add links or interactive elements inside the banner

## Related components and patterns

- [GOV.UK Phase banner](../../../govuk-design-system/components/phase-banner/SKILLS.md) — for alpha and beta services, not for research sessions
- [GOV.UK Header](../../../govuk-design-system/components/header/SKILLS.md) — the research banner sits below the header
