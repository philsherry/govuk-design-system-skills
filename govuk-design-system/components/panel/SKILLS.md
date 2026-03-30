---
category: components
description: Use the panel component to display a prominent confirmation message at the end of a transaction, for example to confirm the service received an application.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Panel
---

# Panel

> Use the panel component to display a prominent confirmation message at the end of a transaction, for example to confirm the service received an application.
> Source: https://design-system.service.gov.uk/components/panel/

---

## Overview

The panel component is a large, visually striking block with a green background and white text. Use it on confirmation pages at the end of a successful transaction, and nowhere else. It communicates a strong "success" signal and typically displays a reference number or other confirmation detail below the main heading.

Because the panel carries a specific semantic meaning — transaction complete — you must not use it in other contexts. Using it for partial confirmations or mid-journey states would mislead users.

## When to use this component

- On confirmation pages at the end of a transaction — for example, after submitting an application, making a payment, or completing a booking.
- To display a transaction reference number alongside the confirmation heading.
- When you need maximum visual impact to confirm a successful outcome.
- The GOV.UK Service Manual recommends every transaction ends on a confirmation page; the panel is the standard way to anchor that page.

## When not to use this component

- Do not use the panel for general success messages that are not the final step of a transaction — use the **notification banner (success variant)** instead.
- Do not use it for warnings, errors, or neutral information.
- Do not use more than one panel per page.
- Do not use it within a form or mid-journey — it belongs only on the final confirmation page.

## How it works

The panel renders as:

```html
<div class="govuk-panel govuk-panel--confirmation">
  <h1 class="govuk-panel__title">...</h1>
  <div class="govuk-panel__body">...</div>
</div>
```

The heading level defaults to `<h1>`. On a typical confirmation page the panel heading should be the page's `<h1>`. Use the `headingLevel` parameter to change this if needed.

The body area is optional and holds reference numbers or brief supplementary detail.

## Code Examples

### Default / Basic

#### HTML

```html
<div class="govuk-panel govuk-panel--confirmation">
  <h1 class="govuk-panel__title">
    Application complete
  </h1>
  <div class="govuk-panel__body">
    Your reference number<br><strong>HDJ2123F</strong>
  </div>
</div>
```

#### Nunjucks

```njk
{{ govukPanel({
  titleText: "Application complete",
  html: "Your reference number<br><strong>HDJ2123F</strong>"
}) }}
```

### With plain text body

#### HTML

```html
<div class="govuk-panel govuk-panel--confirmation">
  <h1 class="govuk-panel__title">
    Payment received
  </h1>
  <div class="govuk-panel__body">
    We have sent a confirmation to example@email.com
  </div>
</div>
```

#### Nunjucks

```njk
{{ govukPanel({
  titleText: "Payment received",
  text: "We have sent a confirmation to example@email.com"
}) }}
```

### With HTML title

Use `titleHtml` when the title requires markup, for example a line break.

#### Nunjucks

```njk
{{ govukPanel({
  titleHtml: "Application submitted<br>successfully",
  html: "Your reference number<br><strong>AB123456</strong>"
}) }}
```

### With a custom heading level

#### Nunjucks

```njk
{{ govukPanel({
  titleText: "Section complete",
  headingLevel: 2,
  text: "You can now move to the next section."
}) }}
```

### With extra classes and attributes

#### Nunjucks

```njk
{{ govukPanel({
  titleText: "Application complete",
  text: "Your reference number is HDJ2123F",
  classes: "app-panel--custom",
  attributes: {
    "data-testid": "confirmation-panel"
  }
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `titleText` | string | Yes (or `titleHtml`) | The heading text of the panel. If `titleHtml` is provided, `titleText` is ignored. |
| `titleHtml` | string | Yes (or `titleText`) | HTML for the panel heading. Takes precedence over `titleText`. |
| `headingLevel` | integer | No | Heading level for the title element. Defaults to `1`. |
| `text` | string | No | Text content for the panel body. If `html` is provided, `text` is ignored. |
| `html` | string | No | HTML content for the panel body. Takes precedence over `text`. |
| `classes` | string | No | Classes to add to the outer `<div>`. |
| `attributes` | object | No | HTML attributes (as key–value pairs) to add to the outer `<div>`. |

## Error Messages

The panel component does not have error states. This is a confirmation component.

## Accessibility

- The panel heading is typically a `<h1>` — it should be the main heading of the confirmation page.
- Make sure the heading text states what the user completed (for example, "Application complete") rather than a vague term like "Success" or "Done".
- When showing a reference number, label it (for example, "Your reference number" on a line above the number).
- The green background with white text meets WCAG 2.1 AA colour contrast requirements.
- Do not rely on the green colour alone to communicate success — the heading text must also confirm the outcome.

## Do / Don't

**Do:**
- Use the panel only on confirmation pages at the end of a transaction.
- Use the heading as the `<h1>` for the page.
- Include a reference number in the body if the service generates one.
- Keep the heading specific about what the user completed.

**Don't:**
- Don't use the panel for partial success states or mid-journey confirmations.
- Don't use it for errors or warnings.
- Don't put large amounts of text in the panel body — keep it to a reference number or brief detail.
- Don't use more than one panel per page.

## Related Components / Patterns

- [Notification Banner](../notification-banner/SKILLS.md) — for success notifications that are not end-of-transaction confirmations
- [Inset Text](../inset-text/SKILLS.md) — for supplementary information on confirmation pages
- [Summary List](../summary-list/SKILLS.md) — often used alongside the panel on confirmation pages to show a summary of submitted information
