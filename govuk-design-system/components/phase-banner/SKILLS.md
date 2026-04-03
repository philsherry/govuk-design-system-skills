---
category: components
description: Use the phase banner to show that a service is in active development and invite users to give feedback.
govuk-frontend: "5.x"
keywords:
  - "alpha"
  - "banner"
  - "beta"
  - "phase"
  - "phase banner"
  - "service phase"
last-reviewed: "2026-04-03"
name: Phase Banner
source: "https://design-system.service.gov.uk/components/phase-banner/"
---

# Phase Banner

> Use the phase banner to show that a service is in active development and invite users to give feedback.
> Source: https://design-system.service.gov.uk/components/phase-banner/

## Overview

The phase banner appears at the top of every page in a service to show that the service is in alpha or beta phase. It uses a **tag** component (typically labelled "Alpha" or "Beta") followed by a sentence explaining that the service is new and inviting users to give feedback via a link.

GOV.UK expects services that have not yet passed a live service assessment to display a phase banner. It signals to users that the service may change and that their feedback matters.

## When to use this component

- When a service is in **alpha** phase (limited audience, initial development).
- When a service is in **beta** phase (broader real-user testing before going live).
- On every page of the service throughout the alpha and beta phases.

## When not to use this component

- Do not display a phase banner on a live service that has passed a live service assessment.
- Do not use it for informational messages unrelated to the development phase — use the **notification banner** or **inset text** instead.

## How it works

The phase banner uses a **tag** component for the phase label. The tag sits alongside a `<span>` containing the feedback message. Link the feedback message to a feedback form, survey, or contact page.

Place the component inside the width container, straight after the header, on every page.

### Phase labels

- Use **Alpha** during the alpha phase.
- Use **Beta** during the beta phase.
- Do not use custom phase labels.

## Code Examples

### Default / Basic (Alpha)

#### HTML

```html
<div class="govuk-phase-banner">
  <p class="govuk-phase-banner__content">
    <strong class="govuk-tag govuk-phase-banner__content__tag">
      Alpha
    </strong>
    <span class="govuk-phase-banner__text">
      This is a new service – your <a class="govuk-link" href="/feedback">feedback</a> will help us to improve it.
    </span>
  </p>
</div>
```

#### Nunjucks

```njk
{{ govukPhaseBanner({
  tag: {
    text: "Alpha"
  },
  html: 'This is a new service – your <a class="govuk-link" href="/feedback">feedback</a> will help us to improve it.'
}) }}
```

### Beta phase banner

#### HTML

```html
<div class="govuk-phase-banner">
  <p class="govuk-phase-banner__content">
    <strong class="govuk-tag govuk-phase-banner__content__tag">
      Beta
    </strong>
    <span class="govuk-phase-banner__text">
      This is a new service – your <a class="govuk-link" href="/feedback">feedback</a> will help us to improve it.
    </span>
  </p>
</div>
```

#### Nunjucks

```njk
{{ govukPhaseBanner({
  tag: {
    text: "Beta"
  },
  html: 'This is a new service – your <a class="govuk-link" href="/feedback">feedback</a> will help us to improve it.'
}) }}
```

### Typical page placement

Place the phase banner inside the width container, straight after the header.

```njk
{{ govukHeader({ ... }) }}

<div class="govuk-width-container">
  {{ govukPhaseBanner({
    tag: {
      text: "Beta"
    },
    html: 'This is a new service – your <a class="govuk-link" href="/feedback">feedback</a> will help us to improve it.'
  }) }}

  <main class="govuk-main-wrapper" id="main-content" role="main">
    <!-- page content -->
  </main>
</div>
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `tag` | object | Yes | Options for the Tag component used as the phase label. Must include `text` (e.g. `"Alpha"` or `"Beta"`). |
| `text` | string | Yes (or `html`) | Text content of the phase banner message. If there is an `html` value, ignore `text`. |
| `html` | string | Yes (or `text`) | HTML content of the phase banner message. Takes precedence over `text`. |
| `classes` | string | No | Classes to add to the outer `<div>`. |
| `attributes` | object | No | HTML attributes (as key–value pairs) to add to the outer `<div>`. |

### Tag object options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes (or `html`) | The tag label text, e.g. `"Alpha"` or `"Beta"`. |
| `html` | string | Yes (or `text`) | HTML for the tag. Takes precedence over `text`. |
| `classes` | string | No | Classes to add to the tag element. |
| `attributes` | object | No | HTML attributes to add to the tag element. |

## Error Messages

The phase banner does not have error states. This is a presentational component.

## Accessibility

- The phase banner contains standard paragraph and link elements and is accessible by default.
- The tag renders as a `<strong>` element — make sure its text is meaningful, not decorative.
- The feedback link must be descriptive enough in context. "Your feedback" works when preceded by "This is a new service –".
- Make sure the feedback destination page is accessible.

## Do and Do not

**Do:**
- Display the phase banner on every page of the service during alpha and beta.
- Link to a real, working feedback form or survey.
- Use the standard wording: "This is a new service – your feedback will help us to improve it."
- Remove the phase banner when the service passes a live assessment.

**Do not:**
- Do not use custom phase labels other than "Alpha" and "Beta".
- Do not omit the feedback link if a feedback mechanism exists.
- Do not leave the phase banner on a live service indefinitely.
- Do not use the phase banner for service announcements or other messages.

## Related Components / Patterns

- [Tag](../tag/SKILLS.md) — used within the phase banner for the phase label
- [Header](../header/SKILLS.md) — the phase banner sits straight below the header
- [Notification Banner](../notification-banner/SKILLS.md) — for service-level notifications unrelated to development phase
