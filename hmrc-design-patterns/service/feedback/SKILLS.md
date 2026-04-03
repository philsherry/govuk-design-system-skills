---
category: patterns
description: Give users a way to provide feedback about an HMRC service, using phase banners for alpha and beta services and feedback links for live services.
keywords:
  - "beta"
  - "feedback"
  - "feedback form"
  - "phase banner"
  - "satisfaction survey"
  - "service improvement"
  - "user feedback"
last-reviewed: "2026-04-03"
name: Feedback
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/feedback/"
subcategory: service
---

# Feedback

> Give users a way to provide feedback about an HMRC service, using phase banners for alpha and beta services and feedback links for live services.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/feedback/

## Overview

HMRC services must give users a way to provide feedback. User feedback helps service teams identify problems, prioritise improvements, and measure satisfaction.

How you collect feedback depends on the service phase:

- **Alpha and beta services** use the GOV.UK phase banner with a feedback link.
- **Live services** add a feedback link in the footer or show it on the confirmation page after the user completes a transaction.

The feedback link takes users to a form that asks what they were trying to do and how the service could improve. Keep the form short — users are more likely to give feedback when the form takes little effort to complete.

## When to use

- Every HMRC service must provide a way for users to give feedback.
- Use the phase banner feedback link for services in alpha or beta.
- Use a footer or confirmation page link for live services.

## When not to use

- Do not show the phase banner on live services — the banner is for alpha and beta phases only.
- Do not use feedback as a replacement for usability testing — feedback forms capture voluntary comments, not structured research findings.

## How it works

### Alpha and beta services

Add a GOV.UK phase banner to every page of the service. The banner shows the phase tag ("alpha" or "beta") and a line of text with a feedback link:

> This is a new service — your [feedback](link) will help us to improve it.

Replace "feedback" with a link to the feedback form. Open the feedback form in a new tab so users do not lose their place in the service.

### Live services

For live services, add a feedback link in one or both of these locations:

1. **Service footer** — add a "Give feedback" link in the footer so users can provide feedback at any point.
2. **Confirmation page** — after the user completes a transaction, show a link or prompt asking for feedback. Users who have completed a journey can give informed feedback about the full experience.

### Feedback form content

The feedback form should ask:

1. "What were you trying to do?" — a free-text field for users to describe their task.
2. "How could we improve this service?" — a free-text field for suggestions.
3. An optional satisfaction rating (for example, "Overall, how did you feel about the service you received today?" with a 5-point scale).

Keep the form on one page. Do not ask users to sign in to leave feedback.

### Linking to the feedback form

Open the feedback form in a new tab. Add `target="_blank"` and include "(opens in new tab)" in the link text for accessibility.

## Code Examples

### Phase banner with feedback link (beta)

#### HTML

```html
<div class="govuk-phase-banner">
  <p class="govuk-phase-banner__content">
    <strong class="govuk-tag govuk-phase-banner__content__tag">
      beta
    </strong>
    <span class="govuk-phase-banner__text">
      This is a new service – your
      <a class="govuk-link" href="/feedback" target="_blank">feedback (opens in new tab)</a>
      will help us to improve it.
    </span>
  </p>
</div>
```

#### Nunjucks

```njk
{{ govukPhaseBanner({
  tag: {
    text: "beta"
  },
  html: 'This is a new service – your <a class="govuk-link" href="/feedback" target="_blank">feedback (opens in new tab)</a> will help us to improve it.'
}) }}
```

### Feedback link on a confirmation page

#### Nunjucks

```njk
{{ govukPanel({
  titleText: "Application complete",
  html: "Your reference number<br><strong>HDJ2123F</strong>"
}) }}

<p class="govuk-body">We have sent a confirmation email to you.</p>

<h2 class="govuk-heading-m">Help us improve this service</h2>
<p class="govuk-body">
  <a class="govuk-link" href="/feedback" target="_blank">
    Give feedback on this service (opens in new tab)
  </a>.
</p>
```

### Feedback link in the footer

#### Nunjucks

```njk
{{ govukFooter({
  meta: {
    items: [
      {
        href: "/feedback",
        text: "Give feedback"
      },
      {
        href: "/accessibility-statement",
        text: "Accessibility statement"
      }
    ]
  }
}) }}
```

## Accessibility

- Feedback links that open in a new tab must include "(opens in new tab)" in the link text. Do not rely on `target="_blank"` alone — screen reader users need the text to communicate the behaviour.
- The feedback form must follow GOV.UK form component patterns with visible labels, error messages, and keyboard-accessible inputs.
- Do not use a pop-up or modal for feedback — they create barriers for screen reader and keyboard users. Use a separate page instead.
- The phase banner feedback link must sit inside the `govuk-phase-banner__text` span so assistive technologies associate it with the banner context.

## Do and Do not

**Do:**
- Add a feedback link to every HMRC service.
- Use the GOV.UK phase banner for alpha and beta services.
- Open feedback forms in a new tab so users do not lose their progress.
- Include "(opens in new tab)" in the link text.
- Keep the feedback form short — one page with two or three questions.
- Place feedback links where users expect to find them: phase banner, footer, or confirmation page.

**Do not:**
- Do not show the phase banner on live services.
- Do not require users to sign in to leave feedback.
- Do not use pop-ups or modals for feedback forms.
- Do not remove feedback links after the service leaves beta — live services still need feedback.
- Do not ask users for personal information on the feedback form unless the service needs it to respond.
- Do not use feedback forms as a replacement for structured user research.

## Related Components / Patterns

- [../../../govuk-design-system/components/phase-banner/SKILLS.md](../../../govuk-design-system/components/phase-banner/SKILLS.md)
- [../../../govuk-design-system/components/footer/SKILLS.md](../../../govuk-design-system/components/footer/SKILLS.md)
- [../../../govuk-design-system/components/panel/SKILLS.md](../../../govuk-design-system/components/panel/SKILLS.md)
- [../../../govuk-design-system/patterns/pages/confirmation-pages/SKILLS.md](../../../govuk-design-system/patterns/pages/confirmation-pages/SKILLS.md)
