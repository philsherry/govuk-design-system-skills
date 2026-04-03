---
category: patterns
description: Combine a heading with a section caption to show users where they are in a multi-section HMRC service.
hmrc-frontend: "7.x"
keywords:
  - "caption"
  - "govuk-caption-xl"
  - "h1"
  - "heading"
  - "hmrcPageHeading"
  - "page heading"
  - "section"
  - "title"
last-reviewed: "2026-04-03"
name: Page heading
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/page-heading/"
subcategory: service
---

# Page heading

> Combine a heading with a section caption to show users where they are in a multi-section HMRC service.
> Source: <https://design.tax.service.gov.uk/hmrc-design-patterns/page-heading/>

## Overview

The HMRC page heading pattern pairs a heading with a section caption. The caption appears in a lighter style and tells users which section of the service they reached. This helps users orient themselves within a service that has more than one section, such as a tax return with income, expenses, and summary sections.

The pattern uses the `hmrcPageHeading` macro from `hmrc-frontend`. The macro wraps a GOV.UK heading with a `govuk-caption-xl` element, keeping the markup consistent and accessible.

Screen readers announce both the caption and the heading, giving users full context about the current page and its parent section.

## When to use

- In HMRC services that have more than one section or topic area.
- When users need to understand which part of a service they are completing.
- On question pages within a multi-step journey where sections group related questions.

## When not to use

- On single-section services where the heading alone provides enough context.
- On start pages, confirmation pages, or other pages that sit outside the section structure.
- When the heading already contains enough context without a caption.

## How it works

The `hmrcPageHeading` macro generates an `<h1>` element with a `<span>` caption. The caption uses the `govuk-caption-xl` class, which styles it in a smaller, lighter font above the main heading text.

The heading and caption together form a single `<h1>` element. This means the page has one level-1 heading that includes both the section name and the page-specific heading.

### Structure

The rendered HTML follows this structure:

1. An `<h1>` with the `govuk-heading-xl` class.
2. A `<span>` inside the `<h1>` with the `govuk-caption-xl` class, containing the section name.
3. The heading text after the caption span.

### Choosing caption text

Write the caption as the section name — for example, "Income", "Employment", or "Tax return". Keep it short. The caption provides context, not a full description.

## Code examples

### HTML

```html
<h1 class="govuk-heading-xl hmrc-page-heading">
  <span class="govuk-caption-xl hmrc-caption-xl">
    <span class="govuk-visually-hidden">This section is: </span>
    Income
  </span>
  What is your total income from employment?
</h1>
```

### Nunjucks

```njk
{% from "hmrc/components/page-heading/macro.njk" import hmrcPageHeading %}

{{ hmrcPageHeading({
  text: "What is your total income from employment?",
  section: "Income"
}) }}
```

### With a different heading size

```njk
{% from "hmrc/components/page-heading/macro.njk" import hmrcPageHeading %}

{{ hmrcPageHeading({
  text: "Your employment details",
  section: "Income",
  classes: "govuk-heading-l",
  captionClasses: "govuk-caption-l"
}) }}
```

### On a question page with a form group

```njk
{% from "hmrc/components/page-heading/macro.njk" import hmrcPageHeading %}
{% from "govuk/components/input/macro.njk" import govukInput %}

{{ hmrcPageHeading({
  text: "How much did you earn from this employment?",
  section: "Employment"
}) }}

{{ govukInput({
  id: "employment-income",
  name: "employmentIncome",
  classes: "govuk-input--width-10",
  prefix: {
    text: "£"
  },
  spellcheck: false
}) }}
```

## Accessibility

- The caption sits inside the `<h1>` element, so screen readers announce the section name as part of the heading.
- The visually hidden prefix "This section is: " provides context for screen reader users, clarifying that the caption represents a section name.
- Each page must have one `<h1>`. The `hmrcPageHeading` macro produces a single `<h1>` that wraps both the caption and heading text.
- Do not use the caption as a substitute for a breadcrumb or back link. It shows the current section, not the navigation path.

## Do and Do not

**Do:**

- Use the `hmrcPageHeading` macro to produce consistent markup.
- Write short, descriptive section names for the caption.
- Include the visually hidden "This section is: " prefix for screen reader context.
- Use `govuk-heading-xl` and `govuk-caption-xl` as the default size pairing.
- Ensure each page has only one `<h1>`.

**Do not:**

- Add a caption on pages that sit outside the section structure (start pages, confirmation pages).
- Write long caption text — keep it to the section name.
- Use the caption to duplicate information already in the heading.
- Override the heading level — the page heading must remain an `<h1>`.
- Remove the visually hidden prefix text from the caption.

## Related components and patterns

- [Page title](../page-title/SKILLS.md) — the `<title>` element pattern for HMRC services
- [Question pages](../../../govuk-design-system/patterns/pages/question-pages/SKILLS.md) — GOV.UK guidance on structuring question pages
- [Header](../../../govuk-design-system/components/header/SKILLS.md) — the GOV.UK header component
- [Navigate a service](../../../govuk-design-system/patterns/help-users-to/navigate-a-service/SKILLS.md) — GOV.UK navigation patterns
