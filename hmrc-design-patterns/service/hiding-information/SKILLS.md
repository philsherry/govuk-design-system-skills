---
category: patterns
description: Use the GOV.UK Details component to let users reveal information they may not need, such as help text about tax concepts or definitions of terms.
keywords:
  - "details"
  - "disclosure"
  - "expandable"
  - "help text"
  - "hide"
  - "hiding information"
  - "progressive disclosure"
  - "reveal"
  - "show hide"
  - "tax guidance"
last-reviewed: "2026-04-03"
name: Hiding information
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/hiding-information/"
subcategory: service
---

# Hiding information

> Use the GOV.UK Details component to let users reveal information they may not need, such as help text about tax concepts or definitions of terms.
> Source: <https://design.tax.service.gov.uk/hmrc-design-patterns/hiding-information/>

## Overview

The hiding information pattern uses the GOV.UK Details component to place supplementary content behind a disclosure toggle. In HMRC services, this approach works well for help text about tax concepts, definitions of terms, or guidance that experienced users do not need.

The pattern relies on the native HTML `<details>` and `<summary>` elements. Users click the summary text to expand hidden content, and click again to collapse it. The toggle behaviour works without JavaScript.

This pattern does not replace essential content. If users need information to complete a task, display it on the page without hiding it.

## When to use

- To provide definitions of tax terms that experienced users already understand.
- To offer extra guidance about a tax concept without cluttering the main page.
- To explain the reason behind a question when most users can answer without that explanation.
- To show supplementary help text that a minority of users need.

## When not to use

- Do not hide information that users need to complete the current task. Show essential content on the page.
- Do not use this pattern to make a long page look shorter. Split the page into smaller pages instead.
- Do not hide error messages, warnings, or required instructions behind a details toggle.
- Do not use this pattern as a substitute for writing concise, scannable content. Simplify the main content first.
- Do not nest details components inside other details components.

## How it works

1. Identify content that supports the main task but that most users do not need.
2. Write a clear summary line that describes the hidden content. Use a question or a short descriptive phrase.
3. Place the `govukDetails` component after the content it relates to, or near the form field it supports.
4. Keep the hidden content short and focused. Long blocks of hidden text suggest the content belongs on its own page.

The summary text must make sense on its own. Users decide whether to expand the content based on the summary line alone. Write it as a question ("What is a UTR?") or a descriptive label ("Help with your tax reference").

### Placement

Place the details component:

- After the heading or label it relates to.
- Before the input it helps users complete.
- Below a paragraph that introduces the concept.

Do not place it at the top of the page where users might miss the main content.

## Code examples

### HTML

```html
<details class="govuk-details">
  <summary class="govuk-details__summary">
    <span class="govuk-details__summary-text">
      What is a Unique Taxpayer Reference (UTR)?
    </span>
  </summary>
  <div class="govuk-details__text">
    <p class="govuk-body">
      Your Unique Taxpayer Reference (UTR) is a 10-digit number.
      You can find it on letters from HMRC about Self Assessment,
      or in your personal tax account.
    </p>
  </div>
</details>
```

### Nunjucks

```njk
{% from "govuk/components/details/macro.njk" import govukDetails %}

{{ govukDetails({
  summaryText: "What is a Unique Taxpayer Reference (UTR)?",
  html: '<p class="govuk-body">Your Unique Taxpayer Reference (UTR) is a 10-digit number. You can find it on letters from HMRC about Self Assessment, or in your personal tax account.</p>'
}) }}
```

### Help text next to an input

```njk
{% from "govuk/components/input/macro.njk" import govukInput %}
{% from "govuk/components/details/macro.njk" import govukDetails %}

{{ govukInput({
  label: {
    text: "What is your UTR?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  id: "utr",
  name: "utr",
  classes: "govuk-input--width-10",
  inputmode: "numeric",
  pattern: "[0-9]*",
  spellcheck: false
}) }}

{{ govukDetails({
  summaryText: "Where to find your UTR",
  html: '<p class="govuk-body">You can find your UTR on previous tax returns, letters from HMRC about Self Assessment, or in your personal tax account.</p>'
}) }}
```

## Accessibility

- The `<details>` element has built-in keyboard support. Users press Enter or Space on the summary to toggle the content.
- Screen readers announce the expanded or collapsed state of the component.
- Do not add custom `aria-expanded` attributes — the native element handles disclosure state.
- Keep hidden content short. Assistive technology users navigate through expanded content linearly, so long blocks add navigation burden.
- Write summary text that describes the hidden content. Vague labels such as "More information" do not help users decide whether to expand.

## Do and Do not

**Do:**

- Write summary text as a question or descriptive label.
- Keep hidden content short and focused on one topic.
- Place the component near the content or field it relates to.
- Use the `govukDetails` macro to ensure correct markup.
- Test that the pattern works without JavaScript.

**Do not:**

- Hide essential information that users need to complete their task.
- Use the details component to shorten a page that asks too many questions.
- Nest details components inside each other.
- Write vague summary text such as "More information" or "Click here".
- Place the component far from the content it supports.
- Hide error messages or validation instructions.

## Related components and patterns

- [Details component](../../../govuk-design-system/components/details/SKILLS.md) — the GOV.UK component this pattern uses
- [Question pages](../../../govuk-design-system/patterns/pages/question-pages/SKILLS.md) — GOV.UK guidance on structuring question pages
- [Recover from validation errors](../../../govuk-design-system/patterns/help-users-to/recover-from-validation-errors/SKILLS.md) — error content that must stay visible
