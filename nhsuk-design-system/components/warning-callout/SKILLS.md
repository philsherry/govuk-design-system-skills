---
category: components
description: Use the warning callout to highlight important health information or advice that users need to act on.
keywords:
  - "callout"
  - "callout box"
  - "health warning"
  - "important"
  - "warning"
  - "warning callout"
last-reviewed: "2026-04-03"
name: Warning Callout
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/warning-callout"
---

# Warning Callout

> Use the warning callout to highlight important health information or advice that users need to act on.
> Source: https://service-manual.nhs.uk/design-system/components/warning-callout

## Overview

The warning callout component is a yellow-bordered panel with a heading and body content. Use it to draw attention to important health information that users need to be aware of or act on — for example, when to seek urgent medical help, who should avoid a medicine, or situations that require immediate action.

The yellow colour and distinctive heading mark the callout as significant within the page. The component has no JavaScript dependency and no interactive behaviour.

The default heading text reads "Important". You can customise this to be more specific — for example, "Important: when to get urgent help" — but the heading must always begin with "Important" for consistency across NHS services.

## When to use this component

- To highlight important health advice that users must notice, such as when to seek urgent medical attention.
- For warnings about who should not take a medicine or use a treatment.
- For safety information within clinical content pages.
- When content is urgent enough to stand apart from the body text but does not require an error or alert component.

## When not to use this component

- Do not use the warning callout for general supplementary information — use **inset text** instead.
- Do not use it for form validation errors — use the **error summary** and **error message** components.
- Do not use it for success confirmations — use the **notification banner** or **panel** component.
- Do not use more than two warning callouts on a single page — overuse reduces their impact.

## How it works

The component renders as a `<div class="nhsuk-warning-callout">` containing a heading and body content. The heading uses a `<h3>` by default, but you can change the heading level to fit your page hierarchy.

The heading includes a visually hidden prefix "Important:" which screen readers announce, ensuring the callout's significance is clear to all users.

## Code Examples

### Default / Basic

#### HTML

```html
<div class="nhsuk-warning-callout">
  <h3 class="nhsuk-warning-callout__label">
    <span role="text">
      <span class="nhsuk-u-visually-hidden">Important: </span>
      When to get urgent help
    </span>
  </h3>
  <p>Call 111 if you have a severe headache and:</p>
  <ul>
    <li>your jaw hurts when eating</li>
    <li>you have blurred or double vision</li>
    <li>your scalp feels sore</li>
  </ul>
</div>
```

#### Nunjucks

```njk
{{ warningCallout({
  heading: "When to get urgent help",
  html: "<p>Call 111 if you have a severe headache and:</p><ul><li>your jaw hurts when eating</li><li>you have blurred or double vision</li><li>your scalp feels sore</li></ul>"
}) }}
```

### With simple text content

#### Nunjucks

```njk
{{ warningCallout({
  heading: "Important",
  html: "<p>Do not take ibuprofen if you are pregnant unless a doctor recommends it.</p>"
}) }}
```

### With custom heading level

Use a different heading level when the default `<h3>` does not fit your page's heading hierarchy.

#### Nunjucks

```njk
{{ warningCallout({
  heading: "Who should not use this medicine",
  headingLevel: 2,
  html: "<p>Do not take this medicine if you have had an allergic reaction to aspirin or any other NSAID.</p>"
}) }}
```

### With links in the body

#### Nunjucks

```njk
{{ warningCallout({
  heading: "When to call 999",
  html: "<p>Call 999 or go to <a href=\"/services\">your nearest A&amp;E</a> if you have sudden chest pain that spreads to your arms, back, neck, or jaw.</p>"
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `heading` | string | Yes | The heading text. The component prepends a visually hidden "Important:" prefix for screen readers. |
| `headingLevel` | integer | No | Heading level for the heading element. Defaults to `3`. |
| `html` | string | Yes (or `text`) | HTML content for the callout body. Takes precedence over `text`. |
| `text` | string | Yes (or `html`) | Text content for the callout body. If `html` appears, ignore `text`. |
| `classes` | string | No | Classes to add to the outer `<div>`. |
| `attributes` | object | No | HTML attributes (as key-value pairs) to add to the outer `<div>`. |

## Accessibility

- The heading includes a visually hidden "Important:" prefix that screen readers announce, so users of assistive technology understand the callout's significance.
- The heading uses `<span role="text">` to ensure screen readers read the visually hidden prefix and the visible heading as a single phrase.
- The yellow background with dark text meets WCAG 2.1 AA colour contrast requirements.
- Do not rely on colour alone to communicate urgency — the heading text and body content must convey the message independently.
- Ensure the heading level fits the page's heading hierarchy so screen reader users can navigate headings consistently.

## Do and Do not

**Do:**
- Start the visible heading with a specific topic (for example, "When to get urgent help") or use "Important" as the default.
- Keep the body content focused on a single warning or piece of advice.
- Use bullet lists when listing symptoms or conditions that require action.
- Place the callout near the content it relates to.

**Do not:**
- Do not use more than two warning callouts on a single page.
- Do not use the warning callout for general information that does not require action — use inset text.
- Do not remove the visually hidden "Important:" prefix.
- Do not use the warning callout for form errors or success messages.
- Do not put entire paragraphs of standard content inside a warning callout — keep it concise and actionable.

## Related Components / Patterns

- [Inset Text](../inset-text/SKILLS.md) — for supplementary information that does not require action
- [Notification Banner](../notification-banner/SKILLS.md) — for service-level notifications and success messages
- [Details](../details/SKILLS.md) — for content that only some users need, hidden by default
- [Review Date](../review-date/SKILLS.md) — for showing when health content was last reviewed
