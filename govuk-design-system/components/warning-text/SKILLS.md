---
category: components
description: Use the warning text component when you need to warn users about something important, such as legal consequences of an action.
govuk-frontend: "5.x"
keywords:
  - "alert text"
  - "exclamation"
  - "text"
  - "warning"
  - "warning text"
last-reviewed: "2026-04-03"
name: Warning Text
source: "https://design-system.service.gov.uk/components/warning-text/"
---

# Warning Text

> Use the warning text component when you need to warn users about something important, such as legal consequences of an action.
> Source: https://design-system.service.gov.uk/components/warning-text/

## Overview

The warning text component draws users' attention to critical information — typically where failing to read or act on it could have serious consequences. Use it to highlight legal obligations, significant financial consequences, irreversible actions, or deadlines with penalties.

The component displays an exclamation mark icon alongside the warning content. The icon has a visually hidden text alternative (`iconFallbackText`, defaulting to "Warning") that screen readers announce before reading the warning content, communicating the severity to users who cannot see the visual indicator.

Warning text is for high-stakes situations. For general important information that does not carry legal or serious consequences, use **inset text** instead.

## When to use this component

- When users need to understand potential legal or financial consequences before they proceed.
- When ignoring the information could result in a significant negative outcome — a fine, penalty, or irreversible action.
- For warnings about deadlines with serious consequences (for example, "You must do this by [date] or you'll be charged a penalty").
- When something could cause the user to fail at their task.

## When not to use this component

- Do not use warning text for general important information that is not safety-critical — use **inset text** instead.
- Do not use it for success messages or confirmations.
- Do not use it for service status notifications — use the **notification banner**.
- Do not use it so frequently that it loses its impact — reserve it for genuinely critical situations.

## How it works

The warning text renders as a `<div class="govuk-warning-text">` containing:

1. `<span class="govuk-warning-text__icon" aria-hidden="true">!</span>` — the exclamation mark icon (hidden from screen readers as decorative).
2. `<strong class="govuk-warning-text__text">` containing:
   - `<span class="govuk-visually-hidden">[iconFallbackText]</span>` — screen-reader-only prefix (defaults to "Warning").
   - The warning message text or HTML.

Screen readers announce the visually hidden prefix before the warning content, providing context even when users cannot see the visual icon.

## Code examples

### Default / Basic

#### HTML

```html
<div class="govuk-warning-text">
  <span class="govuk-warning-text__icon" aria-hidden="true">!</span>
  <strong class="govuk-warning-text__text">
    <span class="govuk-visually-hidden">Warning</span>
    You can be fined up to £5,000 if you do not register.
  </strong>
</div>
```

#### Nunjucks

```njk
{{ govukWarningText({
  text: "You can be fined up to £5,000 if you do not register.",
  iconFallbackText: "Warning"
}) }}
```

### With HTML content

Use the `html` option when the warning contains links or other markup.

#### HTML

```html
<div class="govuk-warning-text">
  <span class="govuk-warning-text__icon" aria-hidden="true">!</span>
  <strong class="govuk-warning-text__text">
    <span class="govuk-visually-hidden">Warning</span>
    You must <a class="govuk-link" href="/register">register online</a> before the deadline or you will be fined.
  </strong>
</div>
```

#### Nunjucks

```njk
{{ govukWarningText({
  html: 'You must <a class="govuk-link" href="/register">register online</a> before the deadline or you will be fined.',
  iconFallbackText: "Warning"
}) }}
```

### With Welsh iconFallbackText

Override `iconFallbackText` when the service is in Welsh or another language.

#### Nunjucks

```njk
{{ govukWarningText({
  text: "Gallwch gael dirwy o hyd at £5,000 os na wnewch chi gofrestru.",
  iconFallbackText: "Rhybudd"
}) }}
```

### With extra classes

#### Nunjucks

```njk
{{ govukWarningText({
  text: "You must apply before 31 March or your application will not be considered.",
  iconFallbackText: "Warning",
  classes: "app-warning-text--deadline"
}) }}
```

### With attributes

#### Nunjucks

```njk
{{ govukWarningText({
  text: "You can be fined up to £5,000 if you do not register.",
  iconFallbackText: "Warning",
  attributes: {
    "data-testid": "registration-warning"
  }
}) }}
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes (or `html`) | The warning text content. When `html` is set, `text` is not used. |
| `html` | string | Yes (or `text`) | HTML content for the warning. Takes precedence over `text`. |
| `iconFallbackText` | string | Yes | Visually hidden text announced by screen readers before the warning content. Defaults to `"Warning"`. Translate this for non-English services (for example, `"Rhybudd"` in Welsh). |
| `classes` | string | No | Classes to add to the outer `<div>`. |
| `attributes` | object | No | HTML attributes (as key–value pairs) to add to the outer `<div>`. |

## Error messages

The warning text component does not have error states. This is a presentational component.

## Accessibility

- The exclamation mark icon is `aria-hidden="true"` — screen readers ignore it as a visual decoration.
- The `iconFallbackText` renders as visually hidden text inside the `<strong>` element and screen readers announce it before the warning content. Always provide this.
- Do not rely on the yellow icon or colour alone to communicate severity — the warning text must explicitly state the consequence.
- Ensure warning content is specific: say what will happen, not that something is important.
- Translate `iconFallbackText` for services in languages other than English.

## Do and do not

**Do:**
- Use warning text for genuinely high-stakes situations: legal obligations, serious financial consequences, irreversible actions.
- Write warning text that explains the specific consequence if the user does not act.
- Always include `iconFallbackText` and translate it for non-English services.
- Keep warning text concise — do not write entire paragraphs inside the component.

**Do not:**
- Do not use warning text for general important information — use inset text instead.
- Do not use warning text so frequently that it loses impact.
- Do not omit `iconFallbackText` — screen reader users will not hear "Warning" before the text.
- Do not use the component for positive messages, success confirmations, or decorative purposes.

## Related components and patterns

- [Inset Text](../inset-text/SKILLS.md) — for important but non-critical supplementary information
- [Notification Banner](../notification-banner/SKILLS.md) — for service-level or status notifications
- [Error Message](../error-message/SKILLS.md) — for form validation errors
