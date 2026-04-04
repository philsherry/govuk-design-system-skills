---
category: components
collection: internal
description: A flexible display for reference information in agent-facing systems, showing who or what the current case relates to.
dwp-frontend: "3.x"
keywords:
  - "agent-facing"
  - "case information"
  - "key details"
  - "national insurance number"
  - "quick reference"
  - "reference"
  - "status tag"
last-reviewed: "2026-04-04"
name: Quick reference
source: "https://design-system.dwp.gov.uk/components/quick-reference"
---

# Quick reference

> A flexible display for reference information in agent-facing systems, showing who or what the current case relates to.
> Source: <https://design-system.dwp.gov.uk/components/quick-reference>

## Overview

The quick reference component displays a small amount of identifying information — such as a name or reference number — so agents can confirm they are working on the correct case. It replaces the retired Key details bar with a more focused, flexible design. The component supports a primary reference, an optional secondary reference, and an optional status tag.

## When to use this component

Use quick reference when users need to check they are in the right place when starting or continuing a task. It provides a consistent, static place for reference information visible across screens.

Use quick reference instead of the retired Key details bar component. In most cases where you would have used Key details bar, use quick reference instead.

The component:
- Does not have to sit at the top of the page
- Does not have to contain personal details or case information
- Can appear more than once on a page

## When not to use this component

Do not use quick reference as a container for the most important information on a page. It should hold the smallest amount of information needed to tell an agent they are in the right place.

Do not use it as a banner to draw attention to important or urgent information.

## How it works

The component displays a small amount of information confirming which record or case the page relates to. It always contains one or two text items in a clear hierarchy (primary and optional secondary reference). An optional status tag can show the current state.

References should be plain text — do not make them links or add tooltips.

## Code examples

### Nunjucks — primary and secondary reference

```njk
{{ dwpQuickReference({
  ariaLabel: "Case information",
  primaryReference: {
    text: "Name:",
    value: "Jane Doe"
  },
  secondaryReference: {
    text: "National Insurance number:",
    value: "QQ 12 34 56 X"
  }
}) }}
```

### Nunjucks — with status tag

```njk
{{ dwpQuickReference({
  ariaLabel: "Claim status",
  primaryReference: {
    text: "Claimant:",
    value: "Jane Doe"
  },
  status: {
    text: "Status:",
    value: "In progress",
    classes: "govuk-tag--blue"
  }
}) }}
```

### Nunjucks — primary reference only

```njk
{{ dwpQuickReference({
  ariaLabel: "Case reference",
  primaryReference: {
    text: "Reference number:",
    value: "AB-1234-5678"
  }
}) }}
```

### HTML

```html
<section class="dwp-quick-reference" aria-label="Case information">
  <dl class="dwp-quick-reference__block">
    <dt class="dwp-quick-reference__label govuk-visually-hidden">Name:</dt>
    <dd class="dwp-quick-reference__primary">Jane Doe</dd>
    <dt class="dwp-quick-reference__label dwp-quick-reference__label--primary govuk-visually-hidden">National Insurance number:</dt>
    <dd class="dwp-quick-reference__secondary">QQ 12 34 56 X</dd>
  </dl>
</section>
```

## Nunjucks macro options

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `ariaLabel` | string | No | Accessible label for the `<section>` (default: "Quick reference" — update to describe the specific use) |
| `primaryReference` | object | No | Primary reference with `text` (label) and `value` |
| `secondaryReference` | object | No | Secondary reference with `text`, `value`, and optional `textDisplay` (boolean, shows label visually) |
| `status` | object | No | Status tag with `text` (label), `value` (tag text), `classes` (GOV.UK tag classes), and optional `textDisplay` |
| `classes` | string | No | Extra classes for the `<section>` element |
| `attributes` | object | No | HTML attributes for the `<section>` element |

## Accessibility

- The default `ariaLabel` is "Quick reference" — update it to describe the specific use (e.g., "Case information", "Claim status").
- Labels use `govuk-visually-hidden` by default, providing context to screen readers without visual clutter.
- Set `textDisplay: true` on `secondaryReference` or `status` to show labels visually.
- If you use status tags, check all colour combinations for sufficient contrast.
- WCAG criteria: [4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG22/#name-role-value) (A).

## CSS classes

| Class | Purpose |
|-------|---------|
| `dwp-quick-reference` | Block: the component |
| `dwp-quick-reference__block` | Element: the definition list |
| `dwp-quick-reference__label` | Element: the `<dt>` label |
| `dwp-quick-reference__label--primary` | Modifier: label for the secondary reference |
| `dwp-quick-reference__primary` | Element: primary reference value |
| `dwp-quick-reference__secondary` | Element: secondary reference value |
| `dwp-quick-reference__status` | Element: status tag container |

## Migrating from Key details bar

If migrating from the retired Key details bar:

- Use quick reference for identifying information (name, reference number)
- Find another place for high-priority information that the Key details bar's extended version held
- Quick reference is more focused, more flexible, and less prone to banner blindness

## Do and do not

**Do:**
- Do update the `ariaLabel` to describe the specific use (e.g., "Case information", "Claim status") rather than keeping the default "Quick reference".
- Do keep content to the minimum needed for identification — a name, a reference number, and optionally a status.
- Do check colour contrast on status tags, as some GOV.UK tag colour combinations may not meet WCAG requirements.

**Do not:**
- Do not use quick reference as a banner for urgent or important information — it serves as a quiet identifier, not an alert.
- Do not overload the component with large amounts of data — use a summary list for detailed key-value displays.
- Do not make references into links or add tooltips — keep them as plain text.

## Related components

- [GOV.UK tag](https://design-system.service.gov.uk/components/tag/) — used for status display within quick reference
- [GOV.UK summary list](https://design-system.service.gov.uk/components/summary-list/) — for more detailed key-value displays
