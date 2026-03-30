---
category: components
description: Use inset text to differentiate a block of text from the surrounding content, for example to draw attention to important information that is not a warning.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Inset Text
---

# Inset Text

> Use inset text to differentiate a block of text from the surrounding content, for example to draw attention to important information that is not a warning.
> Source: https://design-system.service.gov.uk/components/inset-text/

---

## Overview

The inset text component applies a blue left border to a block of content, visually separating it from surrounding text. It signals to users that this content is distinct or worth highlighting without carrying the severity implied by warning text or the interactivity of the details component.

The component is purely presentational — there is no JavaScript, no ARIA role, and no interactive behaviour. Screen readers read the content as normal body text.

## When to use this component

- When you need to draw attention to supplementary information that is distinct from the body text.
- For callouts, examples, or extra context that is relevant but not critical.
- When content is important enough to stand out visually but does not warrant a warning or notification banner.

## When not to use this component

- Do not use it for critical warnings or legal consequences — use the **warning text** component instead.
- Do not use it as an alternative to the **details** component when content is optional or only relevant to some users.
- Do not use it for success or status notifications — use the **notification banner** component.
- Avoid placing more than one inset text block close together; overuse reduces their impact.

## How it works

The component renders as a `<div class="govuk-inset-text">`. CSS applies a blue left border. Pass content using either `text` (plain text) or `html` (HTML markup). If you provide both, `html` takes precedence.

The component has no JavaScript dependency and carries no ARIA role — screen readers encounter it as ordinary content.

## Code Examples

### Default / Basic

#### HTML

```html
<div class="govuk-inset-text">
  It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.
</div>
```

#### Nunjucks

```njk
{{ govukInsetText({
  text: "It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application."
}) }}
```

### With HTML content

Use `html` when the content requires markup such as links or more than one paragraph.

#### HTML

```html
<div class="govuk-inset-text">
  <p class="govuk-body">You can <a class="govuk-link" href="/contact">contact HMRC</a> if you need help with your application.</p>
</div>
```

#### Nunjucks

```njk
{{ govukInsetText({
  html: '<p class="govuk-body">You can <a class="govuk-link" href="/contact">contact HMRC</a> if you need help with your application.</p>'
}) }}
```

### With id and classes

#### HTML

```html
<div class="govuk-inset-text app-inset-text--highlighted" id="additional-info">
  Your application reference number is on the letter we sent you.
</div>
```

#### Nunjucks

```njk
{{ govukInsetText({
  id: "additional-info",
  classes: "app-inset-text--highlighted",
  text: "Your application reference number is on the letter we sent you."
}) }}
```

### With data attributes

#### HTML

```html
<div class="govuk-inset-text" data-module="app-inset">
  Proof of identity documents must be original — we cannot accept photocopies.
</div>
```

#### Nunjucks

```njk
{{ govukInsetText({
  text: "Proof of identity documents must be original — we cannot accept photocopies.",
  attributes: {
    "data-module": "app-inset"
  }
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes (or `html`) | Text content of the inset text block. If `html` is provided, `text` is ignored. |
| `html` | string | Yes (or `text`) | HTML content of the inset text block. If provided, takes precedence over `text`. |
| `id` | string | No | Optional `id` attribute added to the outer `<div>`. |
| `classes` | string | No | Classes to add to the outer `<div>`. |
| `attributes` | object | No | HTML attributes (as key–value pairs) to add to the outer `<div>`. |

## Error Messages

The inset text component is presentational and has no error states.

## Accessibility

- The component has no ARIA role. Screen readers read its content as normal body text.
- Do not rely on the blue border alone to convey meaning — the content itself must communicate why it stands out.
- The component does not rely on colour alone as a differentiator; the border also provides a structural visual cue.
- When providing an `id`, make sure the value is unique on the page. You can use it as a target for `aria-describedby` or same-page links.

## Do / Don't

**Do:**
- Use inset text for important supplementary context that is distinct from body text.
- Keep content concise — inset text is most effective when used sparingly.
- Use the `html` option when you need links, lists, or more than one paragraph inside the inset.

**Don't:**
- Don't use inset text for critical warnings or legal consequences — use warning text.
- Don't nest inset text components inside one another.
- Don't use more than one inset text block in close succession on the same page.
- Don't use it purely for decoration or visual variety.

## Related Components / Patterns

- [Warning Text](../warning-text/SKILLS.md) — for serious or legal consequences
- [Notification Banner](../notification-banner/SKILLS.md) — for status and success notifications
- [Details](../details/SKILLS.md) — for content that only some users need, hidden by default
