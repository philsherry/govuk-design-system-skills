---
category: components
description: A clickable element that triggers an action or submits a form.
keywords:
  - "CTA"
  - "action"
  - "button"
  - "start button"
  - "submit"
last-reviewed: "2026-04-03"
name: Button
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/buttons"
---

# Button

> A clickable element that triggers an action or submits a form.
> Source: https://service-manual.nhs.uk/design-system/components/buttons

## Overview

The button component helps users carry out an action on a page, most commonly submitting a form. NHS UK Frontend provides three button variants: primary (green), secondary (white), and reverse (white on dark backgrounds).

By default, buttons render as `<button>` elements. They can also render as `<a>` elements for navigation-style actions. The `data-module="nhsuk-button"` attribute activates JavaScript behaviour, including the double-click prevention feature.

The NHS uses green (`#007f3b`) as its primary button colour, unlike GOV.UK's green. Secondary buttons have a white background with a grey border.

## When to use this component

Use the button component for every primary action on a page, above all for form submission. Use a primary button to let users move through a transaction.

Use secondary buttons for less important actions alongside a primary button, such as "Find address" or "Save as draft".

## When not to use this component

Do not use a button when a link would be more appropriate. Buttons trigger actions; links navigate to new pages or sections.

Do not use more than one primary button on the same page. Use a single primary button paired with secondary actions or text links.

## How it works

The default button is a `<button type="submit">` with the class `nhsuk-button`. The `data-module="nhsuk-button"` attribute enables NHS UK Frontend JavaScript, which handles the `preventDoubleClick` feature by adding a brief delay before the button accepts a second click.

The secondary button variant uses the `nhsuk-button--secondary` modifier class, rendering with a white background and grey border.

The reverse button variant uses the `nhsuk-button--reverse` modifier class for use on dark or coloured backgrounds.

Disabled buttons use the `disabled` HTML attribute alongside `aria-disabled="true"`. Avoid disabled buttons unless you have no alternative — they fail WCAG 2.2 for contrast and confuse users who cannot understand why an action is unavailable.

## Code examples

### Default / Basic

#### HTML

```html
<button class="nhsuk-button" data-module="nhsuk-button" type="submit">
  Save and continue
</button>
```

#### Nunjucks

```njk
{{ button({
  text: "Save and continue"
}) }}
```

### Secondary button

#### HTML

```html
<button class="nhsuk-button nhsuk-button--secondary" data-module="nhsuk-button" type="submit">
  Find address
</button>
```

#### Nunjucks

```njk
{{ button({
  text: "Find address",
  classes: "nhsuk-button--secondary"
}) }}
```

### Reverse button (white on dark background)

#### HTML

```html
<button class="nhsuk-button nhsuk-button--reverse" data-module="nhsuk-button" type="submit">
  Save and continue
</button>
```

#### Nunjucks

```njk
{{ button({
  text: "Save and continue",
  classes: "nhsuk-button--reverse"
}) }}
```

### Disabled button

#### Nunjucks

```njk
{{ button({
  text: "Save and continue",
  disabled: true
}) }}
```

### Prevent double click

#### Nunjucks

```njk
{{ button({
  text: "Confirm and submit",
  preventDoubleClick: true
}) }}
```

### Button as a link element

#### HTML

```html
<a href="/start" class="nhsuk-button" data-module="nhsuk-button" role="button" draggable="false">
  Start now
</a>
```

#### Nunjucks

```njk
{{ button({
  text: "Start now",
  href: "/start",
  element: "a"
}) }}
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| text | string | Yes (or html) | Text for the button label. |
| html | string | Yes (or text) | HTML for the button label. When set, the component ignores `text`. |
| element | string | No | Element to use: `"button"` (default), `"a"`, or `"input"`. |
| href | string | No | `href` for link elements. When set and `element` is not specified, renders as `<a>`. |
| type | string | No | `type` attribute for `<button>` or `<input>`: `"submit"` (default), `"button"`, or `"reset"`. |
| name | string | No | `name` attribute for `<button>` or `<input>`. |
| value | string | No | `value` attribute for `<button>` or `<input>`. |
| disabled | boolean | No | Renders the button as disabled, adding the `disabled` attribute and `aria-disabled="true"`. |
| preventDoubleClick | boolean | No | Adds `data-prevent-double-click="true"` to activate double-click prevention via JavaScript. |
| classes | string | No | Classes to add to the button element. |
| attributes | object | No | HTML attributes to add to the button element as key-value pairs. |

## Error messages

The button component does not accept user input and does not produce validation error messages.

## Accessibility

Buttons rendered as `<button>` elements are natively keyboard accessible and screen readers announce them as buttons. Do not rely on `<div>` or `<span>` elements styled to look like buttons.

When using `element: "a"` (link-button), the element receives `role="button"` and `draggable="false"` automatically. Link-buttons respond to Enter but not Space by default in some browsers — NHS UK Frontend's JavaScript patches this for elements with `data-module="nhsuk-button"`.

Disabled buttons have `aria-disabled="true"` alongside the `disabled` attribute. Be aware that disabled buttons fall outside the tab order and provide no feedback about why the action is unavailable. Prefer showing validation errors over disabling buttons where possible.

The reverse button (`nhsuk-button--reverse`) works on dark or coloured backgrounds only. Do not use it on white or light grey backgrounds as it will fail colour contrast requirements.

## Do and do not

**Do:**
- Use a single primary button per page to show the main action.
- Use `preventDoubleClick: true` on payment or submission forms to prevent accidental duplicate submissions.
- Write button labels as verbs: "Save and continue", "Confirm payment", "Delete account".
- Place the primary button to the left of secondary actions.

**Do not:**
- Do not use more than one primary button on the same page.
- Do not disable buttons to prevent form submission — show inline validation errors instead.
- Do not use a reverse button on a white or light background.
- Do not use a button when a standard text link would be more appropriate.

## Related components and patterns

- [Error summary](../error-summary/SKILLS.md) — displayed above the form when submission fails validation.
- [Back link](../back-link/SKILLS.md) — for navigating to the previous page.
- [Error message](../error-message/SKILLS.md) — inline field errors shown after submission.
