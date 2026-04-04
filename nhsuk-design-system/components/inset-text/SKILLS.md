---
category: components
description: Use inset text to differentiate a block of text from surrounding content, drawing attention to important information that does not carry a warning.
keywords:
  - "aside"
  - "callout"
  - "highlighted text"
  - "inset"
  - "inset text"
  - "text"
last-reviewed: "2026-04-03"
name: Inset Text
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/inset-text"
---

# Inset Text

> Use inset text to differentiate a block of text from surrounding content, drawing attention to important information that does not carry a warning.
> Source: https://service-manual.nhs.uk/design-system/components/inset-text

## Overview

The inset text component applies a blue left border to a block of content, visually separating it from the surrounding text. It signals to users that this content stands out without carrying the severity of a warning callout or the interactivity of the details component.

The component has no JavaScript dependency, no ARIA role, and no interactive behaviour. Screen readers read the content as normal body text.

## When to use this component

- When you need to highlight supplementary information that stands apart from the body text.
- For callouts, examples, or extra context relevant to the current page but not critical to the user's task.
- When content deserves visual prominence but does not warrant a warning callout or notification banner.

## When not to use this component

- Do not use inset text for health warnings or urgent clinical information — use the **warning callout** component instead.
- Do not use it as an alternative to the **details** component when content suits only some users.
- Do not use it for success or status notifications — use the **notification banner** component.
- Avoid placing more than one inset text block close together on the same page; overuse reduces their impact.

## How it works

The component renders as a `<div class="nhsuk-inset-text">`. CSS applies a blue left border. Pass content using either `text` (plain text) or `html` (HTML markup). If you provide both, `html` takes precedence.

The component carries no ARIA role — screen readers encounter it as ordinary content.

## Code examples

### Default / Basic

#### HTML

```html
<div class="nhsuk-inset-text">
  <span class="nhsuk-u-visually-hidden">Information: </span>
  <p>You can report any side effect or suspected reaction to a medicine or vaccine through the Yellow Card Scheme.</p>
</div>
```

#### Nunjucks

```njk
{{ insetText({
  html: "<p>You can report any side effect or suspected reaction to a medicine or vaccine through the Yellow Card Scheme.</p>"
}) }}
```

### With HTML content

Use `html` when the content requires markup such as links or more than one paragraph.

#### HTML

```html
<div class="nhsuk-inset-text">
  <span class="nhsuk-u-visually-hidden">Information: </span>
  <p>Find out more about <a href="/conditions/vaccinations/">vaccinations on the NHS</a>.</p>
</div>
```

#### Nunjucks

```njk
{{ insetText({
  html: '<p>Find out more about <a href="/conditions/vaccinations/">vaccinations on the NHS</a>.</p>'
}) }}
```

### With id and classes

#### HTML

```html
<div class="nhsuk-inset-text app-inset-text--highlighted" id="gp-info">
  <span class="nhsuk-u-visually-hidden">Information: </span>
  <p>Contact your GP surgery if your symptoms do not improve within 2 weeks.</p>
</div>
```

#### Nunjucks

```njk
{{ insetText({
  id: "gp-info",
  classes: "app-inset-text--highlighted",
  html: "<p>Contact your GP surgery if your symptoms do not improve within 2 weeks.</p>"
}) }}
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes (or `html`) | Text content of the inset text block. If `html` appears, ignore `text`. |
| `html` | string | Yes (or `text`) | HTML content of the inset text block. If provided, takes precedence over `text`. |
| `id` | string | No | Optional `id` attribute added to the outer `<div>`. |
| `classes` | string | No | Classes to add to the outer `<div>`. |
| `attributes` | object | No | HTML attributes (as key-value pairs) to add to the outer `<div>`. |

## Accessibility

- The component has no ARIA role. Screen readers read its content as normal body text.
- NHS UK Frontend adds a visually hidden "Information:" prefix so screen reader users understand the content has extra emphasis.
- Do not rely on the blue border alone to convey meaning — the content itself must communicate why it stands out.
- When providing an `id`, make sure the value is unique on the page.

## Do and do not

**Do:**
- Use inset text for important supplementary context that stands apart from body text.
- Keep content concise — inset text works best when used sparingly.
- Use the `html` option when you need links, lists, or more than one paragraph inside the inset.

**Do not:**
- Do not use inset text for health warnings or urgent clinical information — use warning callout.
- Do not nest inset text components inside one another.
- Do not use more than one inset text block in close succession on the same page.
- Do not use it for decoration or visual variety.

## Related components and patterns

- [Warning Callout](../warning-callout/SKILLS.md) — for important health warnings
- [Notification Banner](../notification-banner/SKILLS.md) — for status and success notifications
- [Details](../details/SKILLS.md) — for content that only some users need, hidden by default
