---
category: components
description: A disclosure widget that lets users reveal extra content on demand.
govuk-frontend: "5.x"
keywords:
  - "details"
  - "disclosure"
  - "expandable"
  - "show hide"
last-reviewed: "2026-04-03"
name: Details
source: "https://design-system.service.gov.uk/components/details/"
---

# Details

> A disclosure widget that lets users reveal extra content on demand.
> Source: https://design-system.service.gov.uk/components/details/

## Overview

The details component is a native HTML `<details>` element styled to match the GOV.UK Design System. It lets users expand and collapse a section of content by clicking a summary line. It reveals supplementary information that a minority of users need, keeping the page clean and reducing cognitive load for those who do not.

The component requires no JavaScript — it uses the `<details>` and `<summary>` HTML elements, both of which have broad browser support. The summary line acts as a visible toggle, and clicking the summary reveals the hidden content.

The details component handles a single expandable section, unlike the accordion which manages more than one section with show/hide-all controls.

## When to use this component

Use the details component to hide content relevant only to a minority of users — for example, explanations of technical terms, extra guidance for edge cases, or supplementary help text that would clutter the main page if shown to everyone.

Use it when users may need help understanding a specific term or concept, but making it visible by default would create unnecessary noise for users who already understand it.

## When not to use this component

Do not use the details component to hide information that most users need. If the content is important for completing a task, display it in full view.

Do not use it as a replacement for inset text or warning text when the information is critical. Do not use it to shorten pages by hiding content that should be visible — consider restructuring the content or using separate pages instead.

Do not use more than one details component as a substitute for an accordion when you have more than two expandable sections of content.

## How it works

The component renders a `<details class="govuk-details">` element. Inside it, the `<summary class="govuk-details__summary">` contains a `<span class="govuk-details__summary-text">` with the clickable label. The body content is in a `<div class="govuk-details__text">`.

The `open` parameter pre-opens the details element by adding the `open` attribute.

The component works without JavaScript. All modern browsers support the `<details>` element natively.

## Code Examples

### Default / Basic

#### HTML

```html
<details class="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      Help with nationality
    </span>
  </summary>
  <div class="govuk-details__text">
    We need to know your nationality so we can work out which elections you're entitled to vote in. If you cannot provide your nationality, you'll need to send copies of identity documents through the post.
  </div>
</details>
```

#### Nunjucks

```njk
{{ govukDetails({
  summaryText: "Help with nationality",
  text: "We need to know your nationality so we can work out which elections you're entitled to vote in. If you cannot provide your nationality, you'll need to send copies of identity documents through the post."
}) }}
```

### With HTML content

#### HTML

```html
<details class="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      What is a 'relevant person'?
    </span>
  </summary>
  <div class="govuk-details__text">
    <p class="govuk-body">A relevant person is someone who:</p>
    <ul class="govuk-list govuk-list--bullet">
      <li>is directly affected by the decision</li>
      <li>has a legal interest in the outcome</li>
      <li>has been designated by the relevant authority</li>
    </ul>
  </div>
</details>
```

#### Nunjucks

```njk
{{ govukDetails({
  summaryText: "What is a 'relevant person'?",
  html: "
    <p class=\"govuk-body\">A relevant person is someone who:</p>
    <ul class=\"govuk-list govuk-list--bullet\">
      <li>is directly affected by the decision</li>
      <li>has a legal interest in the outcome</li>
      <li>has been designated by the relevant authority</li>
    </ul>
  "
}) }}
```

### Open by default

#### Nunjucks

```njk
{{ govukDetails({
  summaryText: "Help with this question",
  text: "This section is expanded when the page loads.",
  open: true
}) }}
```

### With HTML in the summary

#### Nunjucks

```njk
{{ govukDetails({
  summaryHtml: "Help with <abbr title=\"National Insurance\">NI</abbr> number",
  text: "You can find your National Insurance number on your payslip, P60 or letters about tax, pension or benefits."
}) }}
```

### With id and custom classes

#### Nunjucks

```njk
{{ govukDetails({
  id: "help-nationality",
  classes: "custom-details",
  summaryText: "Help with nationality",
  text: "Supplementary guidance about nationality."
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| summaryText | string | Yes (or summaryHtml) | Text for the summary (visible toggle label). |
| summaryHtml | string | Yes (or summaryText) | HTML for the summary. If provided, `summaryText` is ignored. |
| text | string | Yes (or html) | Text content to show when the details is expanded. |
| html | string | Yes (or text) | HTML content to show when the details is expanded. If provided, `text` is ignored. |
| id | string | No | `id` attribute for the `<details>` element. |
| open | boolean | No | When `true`, adds the `open` attribute so the details starts expanded. |
| classes | string | No | Classes to add to the `<details>` element. |
| attributes | object | No | HTML attributes for the `<details>` element as key–value pairs. |

## Error Messages

The details component does not accept user input and does not produce validation error messages.

## Accessibility

The `<details>` and `<summary>` elements are natively accessible and do not require ARIA attributes. Screen readers announce the summary as an expandable button and communicate whether the section is expanded or collapsed.

The summary text should be descriptive so users know what content will appear when expanded. Avoid vague labels like "More information" — be specific: "Help with your National Insurance number".

Do not place interactive elements (links, buttons, form inputs) inside the summary text — only inside the details body.

Ensure the details component does not contain essential form instructions or error information that users might miss if they do not expand it.

## Do and Do not

**Do:**
- Use clear, specific summary text that tells users what they will find inside.
- Use the details component for genuinely supplementary content that a minority of users will need.
- Use `html` content when the body includes lists, links, or more than one paragraph.
- Test with keyboard navigation — the summary is natively keyboard accessible via Enter and Space.

**Do not:**
- Do not hide critical information inside a details component.
- Do not use more than one details component when an accordion is more appropriate.
- Do not use it as an alternative to inset text or warning text for important notices.
- Do not use nested details elements — the design becomes difficult to use and understand.

## Related Components / Patterns

- [Accordion](https://design-system.service.gov.uk/components/accordion/) — for more than one expandable section with show/hide all controls.
- [Inset text](https://design-system.service.gov.uk/components/inset-text/) — for highlighting information that all users should notice.
- [Warning text](https://design-system.service.gov.uk/components/warning-text/) — for important warnings that users must not miss.
