---
category: foundations
description: Core guidance for building HMRC tax services, covering the additive relationship to GOV.UK, HMRC design patterns, and the HMRC style guide.
keywords:
  - "HMRC"
  - "design patterns"
  - "govuk-frontend"
  - "hmrc-frontend"
  - "tax service"
last-reviewed: "2026-04-03"
name: HMRC Design System — Foundations
source: "https://design.tax.service.gov.uk/"
---

# HMRC Design System — Foundations

> Core guidance for building HMRC tax services, covering the additive relationship to GOV.UK, HMRC design patterns, and the HMRC style guide.
> Source: <https://design.tax.service.gov.uk/>

## Overview

The HMRC Design System provides patterns for building accessible, consistent tax services. HMRC maintains it alongside `hmrc-frontend`, the npm package that delivers HMRC-specific components.

HMRC builds **on top of** the GOV.UK Design System. HMRC services use `govuk-frontend` as the base — its styles, components, and page template — and supplement it with `hmrc-frontend` for HMRC-specific patterns. Teams check the GOV.UK Design System first. HMRC patterns exist only for needs that the GOV.UK Design System does not address.

For the full GOV.UK foundations — styles, components, patterns, design principles, technology stack, and Prototype Kit guidance — see `../../govuk-design-system/foundations/SKILLS.md`.

## The additive relationship

HMRC services use two frontend libraries together:

| Library | Purpose | Class prefix |
|---|---|---|
| `govuk-frontend` | Core components, styles, page template, typography, colour, spacing | `govuk-` |
| `hmrc-frontend` | HMRC-specific patterns: tax identifiers, internal headers, timelines, banners | `hmrc-` |

Both libraries install via npm. `hmrc-frontend` depends on `govuk-frontend` — installing `hmrc-frontend` pulls in the GOV.UK package automatically.

When building an HMRC service:

- Use `govuk-` components for buttons, inputs, radios, checkboxes, error handling, tables, and all core interface elements.
- Use `hmrc-` components only when an HMRC-specific pattern exists for your need.
- Use the GOV.UK page template, header, footer, skip link, and phase banner.
- Follow GOV.UK typography, colour, spacing, and layout conventions.

## When to use the HMRC Design System

Use HMRC patterns when:

- Building a tax service on the `tax.service.gov.uk` domain.
- Your service needs tax-specific identifiers (UTR, PAYE reference, EORI number, VAT registration number, Accounts Office reference).
- Your service needs HMRC-specific UI elements: the internal header, timeline, notification badge, or HMRC banner.
- Your service handles patterns unique to HMRC: service timeout with save-for-later, currency input with pound prefix, Welsh language toggle, or the add-to-a-list pattern.

## When not to use the HMRC Design System

Do not use HMRC patterns when:

- A GOV.UK Design System component or pattern meets the need. Always check GOV.UK first.
- Building a service outside the HMRC domain that has no connection to tax services.
- Using the `hmrc-` class prefix or HMRC branding on non-HMRC services.

## HMRC Design Patterns

The HMRC Design System organises its patterns into five groups:

- **Identifiers** — Tax reference formats and validation: Accounts Office reference, Employer PAYE reference, EORI numbers, Unique Taxpayer Reference, VAT registration number.
- **Service** — Service-level patterns: add to a list, addresses, consent, currency input, feedback, file upload, hiding information, page heading, page title, service timeout, sign out, Welsh language toggle.
- **Identity** — Identity verification outcomes: confirmed identity, could not confirm identity, match an organisation to HMRC records.
- **Headers** — Header and navigation elements: caseworker guidance banner, HMRC banner, internal header, notification badge, research banner, timeline.
- **Pages** — Page-level patterns: page not found, service unavailable, there is a problem with the service.

## The HMRC style guide

The [HMRC style guide](https://design.tax.service.gov.uk/hmrc-style-guide/) supplements the GOV.UK content style guide with tax-specific terminology and conventions. It covers:

- Tax terminology (Self Assessment, PAYE, Corporation Tax, Capital Gains Tax)
- How to refer to HMRC and its services
- Tax-specific number formats and date conventions
- Welsh language requirements for HMRC services

Teams writing content for HMRC services should follow both the GOV.UK content style guide and the HMRC style guide. Where the two conflict, the HMRC style guide takes precedence for tax-specific content.

## Accessibility statement frontend

HMRC has a centralised service for hosting accessibility statements. Teams do not write their own accessibility statement HTML. Instead, they author a YAML file that describes their service's accessibility status and submit a pull request to the [accessibility-statement-frontend](https://github.com/hmrc/accessibility-statement-frontend) repository.

The YAML file covers:

- Service name and URL
- Compliance level (full, partial, non-compliant)
- Known accessibility issues and planned remediation dates
- Contact information for reporting accessibility problems
- Test method and date of last audit

The service renders the YAML into a published HTML statement at `www.tax.service.gov.uk/accessibility-statement/{service-name}`. Welsh language versions use a `.cy.yml` suffix.

## HMRC engineering principles

The [HMRC engineering site](https://engineering.hmrc.gov.uk/) documents principles and standards that development teams follow:

- [Engineering principles](https://engineering.hmrc.gov.uk/engineering-principles/) — core beliefs that guide technical decisions
- [Standards](https://engineering.hmrc.gov.uk/standards/) — technical standards for HMRC services

### Accessibility Empathy Hub

HMRC operates Accessibility Empathy Hubs in Stratford (London) and Newcastle. These physical spaces let teams experience barriers that disabled users encounter:

- Chromebooks configured with GDS accessibility personas
- Visual impairment simulation glasses (glaucoma, macular degeneration, diabetic vision)
- Hearing loss simulation (ear defenders)
- Desktop activities: keyboard-only navigation, dyslexia simulator, colour blindness tools, Funkify simulators

## Technology stack

HMRC services use the same technology stack as GOV.UK services:

| Layer | Technology |
|---|---|
| Package management | npm |
| CSS preprocessor | Sass (SCSS syntax) |
| Templating | Nunjucks (server-side) or Twirl (Scala) |
| JavaScript | Vanilla JS |
| HTML | Semantic HTML5 |
| Fonts | GDS Transport (served from your own assets) |
| Server-side | Play Framework (Scala) or Node.js |

HMRC services run on the Microservices Development Environment (MDTP). Most use the Play Framework with Scala, but prototypes use the GOV.UK Prototype Kit with Node.js and Nunjucks.

**Package names:** `govuk-frontend` and `hmrc-frontend`

## GOV.UK Prototype Kit

HMRC teams use the standard GOV.UK Prototype Kit for prototyping. See `../../govuk-design-system/foundations/prototype-kit/SKILLS.md` for full Prototype Kit guidance.

To use HMRC patterns in the Prototype Kit, install `hmrc-frontend` alongside the kit:

```bash
npm install hmrc-frontend
```

## Accessibility

HMRC services must meet WCAG 2.2 Level-AA, the minimum the Public Sector Bodies Accessibility Regulations 2018 require. For full accessibility guidance, see `../../govuk-design-system/accessibility/SKILLS.md`.

HMRC adds one requirement beyond GOV.UK: every service must publish an accessibility statement through the centralised accessibility-statement-frontend service using a YAML file.

## Do and do not

**Do** check the GOV.UK Design System first — use `govuk-` components for all core interface needs.

**Do** use `hmrc-frontend` only for patterns that the GOV.UK Design System does not cover.

**Do** follow both the GOV.UK content style guide and the HMRC style guide.

**Do** publish an accessibility statement through the HMRC accessibility-statement-frontend service.

**Do** install both `govuk-frontend` and `hmrc-frontend` via npm.

**Do not** create custom components when a GOV.UK or HMRC pattern exists.

**Do not** use `hmrc-` class names or HMRC branding on non-HMRC services.

**Do not** write accessibility statement HTML by hand — use the YAML service.

## Related

- `foundations/hmrc-frontend/SKILLS.md` — HMRC Frontend npm package setup and usage
- `../../govuk-design-system/foundations/SKILLS.md` — GOV.UK Design System foundations
- `../../govuk-design-system/foundations/prototype-kit/SKILLS.md` — GOV.UK Prototype Kit setup
- `../../govuk-design-system/accessibility/SKILLS.md` — Accessibility requirements and testing guidance
