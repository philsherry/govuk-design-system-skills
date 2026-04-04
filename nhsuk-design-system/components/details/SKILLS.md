---
category: components
description: A disclosure widget that lets users reveal extra content on demand.
keywords:
  - "details"
  - "disclosure"
  - "expandable"
  - "show hide"
last-reviewed: "2026-04-03"
name: Details
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/details"
---

# Details

> A disclosure widget that lets users reveal extra content on demand.
> Source: https://service-manual.nhs.uk/design-system/components/details

## Overview

The details component uses the native HTML `<details>` element, styled to match the NHS design system. It lets users expand and collapse a section of content by clicking a summary line. It reveals supplementary information that a minority of users need, keeping the page clean and reducing cognitive load for those who do not need it.

The component requires no JavaScript — it uses the `<details>` and `<summary>` HTML elements, both of which have broad browser support. The summary line acts as a visible toggle, and clicking the summary reveals the hidden content.

The NHS details component uses the classes `nhsuk-details` and `nhsuk-details__summary`, following the same native HTML approach as the GOV.UK equivalent but with NHS typography and spacing.

## When to use this component

Use the details component to hide content relevant only to a minority of users — for example, explanations of medical terms, guidance for specific circumstances, or supplementary help text that would clutter the main page if shown to everyone.

Use it when users may need help understanding a specific health term or concept, but making it visible by default would create unnecessary noise for users who already understand it.

## When not to use this component

Do not use the details component to hide information that most users need. If the content supports the primary task on the page, display it in full view.

Do not use it as a replacement for care cards or warning callouts when the information concerns urgent health advice. Do not use it to shorten pages by hiding content that should remain visible — consider restructuring the content or using separate pages instead.

Do not use more than two details components on the same page. For more than two expandable sections, consider using the expander component or splitting the content across pages.

## How it works

The component renders a `<details class="nhsuk-details">` element. Inside it, the `<summary class="nhsuk-details__summary">` contains a `<span class="nhsuk-details__summary-text">` with the clickable label. The body content sits in a `<div class="nhsuk-details__text">`.

The component works without JavaScript. All modern browsers support the `<details>` element natively.

## Code examples

### Default / Basic

#### HTML

```html
<details class="nhsuk-details">
  <summary class="nhsuk-details__summary">
    <span class="nhsuk-details__summary-text">
      Where can I find my NHS number?
    </span>
  </summary>
  <div class="nhsuk-details__text">
    <p>An NHS number is a 10-digit number, like 485 777 3456.</p>
    <p>You can find your NHS number by logging in to a GP surgery's online services, on any letter the NHS has sent you, or by asking your GP surgery.</p>
  </div>
</details>
```

#### Nunjucks

```njk
{{ details({
  text: "Where can I find my NHS number?",
  html: "<p>An NHS number is a 10-digit number, like 485 777 3456.</p><p>You can find your NHS number by logging in to a GP surgery's online services, on any letter the NHS has sent you, or by asking your GP surgery.</p>"
}) }}
```

### With plain text content

#### Nunjucks

```njk
{{ details({
  text: "What counts as a unit of alcohol?",
  details: "A unit of alcohol is about half a pint of normal-strength lager or a single measure (25ml) of spirits. A small glass (125ml) of wine is about 1.5 units."
}) }}
```

### With extra classes

#### Nunjucks

```njk
{{ details({
  text: "How to measure your blood pressure at home",
  html: "<p>Sit quietly for 5 minutes before taking a reading. Rest your arm on a flat surface at heart level.</p>",
  classes: "nhsuk-u-margin-bottom-4"
}) }}
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| text | string | Yes | Text for the summary (visible toggle label). |
| html | string | No | HTML content to show when expanded. Use for rich content with paragraphs, lists, or links. |
| details | string | No | Plain text content to show when expanded. When `HTML` is provided, the component ignores `details`. |
| id | string | No | `id` attribute for the `<details>` element. |
| classes | string | No | Classes to add to the `<details>` element. |
| attributes | object | No | HTML attributes for the `<details>` element as key–value pairs. |

## Accessibility

The `<details>` and `<summary>` elements provide native accessibility and do not require ARIA attributes. Screen readers announce the summary as an expandable button and communicate whether the section has expanded or collapsed.

The summary text should describe the content users will find when expanded. Avoid vague labels like "More information" — write specific labels: "Where can I find my NHS number?".

Do not place interactive elements (links, buttons, form inputs) inside the summary text — only inside the details body.

Ensure the details component does not contain essential health advice or urgent information that users might miss if they do not expand it.

## Do and do not

**Do:**
- Use specific summary text that tells users what they will find inside.
- Use the details component for genuinely supplementary content.
- Use `HTML` content when the body includes lists, links, or more than one paragraph.
- Test with keyboard navigation — the summary responds to Enter and Space natively.

**Do not:**
- Do not hide critical health information inside a details component.
- Do not use more than two details components on a page — consider the expander component for more sections.
- Do not use it as an alternative to care cards or warning callouts for urgent advice.
- Do not use nested details elements.

## Related components and patterns

- [Expander](https://service-manual.nhs.uk/design-system/components/expander) — for longer expandable sections with a more prominent visual style.
- [Contents list](https://service-manual.nhs.uk/design-system/components/contents-list) — for splitting long content across pages instead of hiding it.
- [Care cards](https://service-manual.nhs.uk/design-system/components/care-cards) — for urgent health advice that must remain visible.
