---
category: components
description: A clickable element that triggers an action or submits a form.
govuk-frontend: "5.x"
keywords:
  - "CTA"
  - "action"
  - "button"
  - "start button"
  - "submit"
last-reviewed: "2026-04-03"
name: Button
source: "https://design-system.service.gov.uk/components/button/"
---

# Button

> A clickable element that triggers an action or submits a form.
> Source: https://design-system.service.gov.uk/components/button/

## Overview

The button component helps users carry out an action — most commonly submitting a form or moving to the next step in a transaction. GOV.UK Frontend provides a single button macro with five variants: default (primary), secondary, warning, inverse, and start button.

By default, buttons render as `<button>` elements. They can also render as `<a>` elements (for navigation-style actions) or `<input>` elements (seldom needed). The `data-module="govuk-button"` attribute activates JavaScript behaviour, including the double-click prevention feature.

Button groups allow a primary button to sit alongside a secondary link (such as "Cancel") using the `govuk-button-group` wrapper, which aligns them on all screen sizes.

## When to use this component

Use the button component for every primary action on a page, above all for form submission. Use a start button on the introductory page of a transaction to give users a clear, prominent call to action.

Use secondary buttons for less important actions alongside a primary button. Use warning buttons only when an action is potentially destructive and users must understand the consequences.

## When not to use this component

Do not use a button when a link is more appropriate. Buttons trigger actions; links navigate to new pages or sections. Do not use a button as a navigation element unless the design specifically calls for a start button or a link-styled button.

Do not use more than one primary button on the same page — this creates ambiguity about which action is most important. Use a single primary button paired with secondary actions or text links.

## How it works

The default button is a `<button type="submit">` with the class `govuk-button`. The `data-module="govuk-button"` attribute enables the GOV.UK Frontend JavaScript, which handles the `preventDoubleClick` feature by adding a brief delay before the button accepts a second click.

The start button variant uses `isStartButton: true`, which adds the `govuk-button--start` modifier class and injects an SVG arrow icon. Start buttons are larger than regular buttons.

Disabled buttons use the `disabled` HTML attribute alongside `aria-disabled="true"`. Avoid disabled buttons unless there is no alternative — they fail WCAG 2.1 for contrast and confuse users who cannot understand why an action is unavailable.

Button groups use a `<div class="govuk-button-group">` wrapper. Within a group, links use styles that match the button height, keeping cancel or secondary links visually aligned with the button.

## Code Examples

### Default / Basic

#### HTML

```html
<button type="submit" class="govuk-button" data-module="govuk-button">
  Save and continue
</button>
```

#### Nunjucks

```njk
{{ govukButton({
  text: "Save and continue"
}) }}
```

### Secondary button

#### HTML

```html
<button type="submit" class="govuk-button govuk-button--secondary" data-module="govuk-button">
  Find address
</button>
```

#### Nunjucks

```njk
{{ govukButton({
  text: "Find address",
  classes: "govuk-button--secondary"
}) }}
```

### Warning button

#### HTML

```html
<button type="submit" class="govuk-button govuk-button--warning" data-module="govuk-button">
  Delete account
</button>
```

#### Nunjucks

```njk
{{ govukButton({
  text: "Delete account",
  classes: "govuk-button--warning"
}) }}
```

### Inverse button (white on dark background)

#### Nunjucks

```njk
{{ govukButton({
  text: "Create an account",
  classes: "govuk-button--inverse"
}) }}
```

### Start button

#### HTML

```html
<a
  href="/start"
  role="button"
  draggable="false"
  class="govuk-button govuk-button--start"
  data-module="govuk-button"
>
  Start now
  <svg
    class="govuk-button__start-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="17.5"
    height="19"
    viewBox="0 0 33 40"
    aria-hidden="true"
    focusable="false"
  >
    <path fill="currentColor" d="M0 0h13l20 20-20 20H0l20-20z" />
  </svg>
</a>
```

#### Nunjucks

```njk
{{ govukButton({
  text: "Start now",
  href: "/start",
  isStartButton: true
}) }}
```

### Disabled button

#### Nunjucks

```njk
{{ govukButton({
  text: "Save and continue",
  disabled: true
}) }}
```

### Prevent double click

#### Nunjucks

```njk
{{ govukButton({
  text: "Confirm and submit",
  preventDoubleClick: true
}) }}
```

### Button group with cancel link

#### HTML

```html
<div class="govuk-button-group">
  <button type="submit" class="govuk-button" data-module="govuk-button">
    Save and continue
  </button>
  <a class="govuk-link" href="/cancel">Cancel</a>
</div>
```

#### Nunjucks

```njk
<div class="govuk-button-group">
  {{ govukButton({
    text: "Save and continue"
  }) }}
  <a class="govuk-link" href="/cancel">Cancel</a>
</div>
```

### Button as a link element

#### Nunjucks

```njk
{{ govukButton({
  text: "Continue",
  href: "/next-page",
  element: "a"
}) }}
```

## Nunjucks Macro Options

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
| isStartButton | boolean | No | Adds `govuk-button--start` class and the SVG arrow icon. |
| preventDoubleClick | boolean | No | Adds `data-prevent-double-click="true"` to activate double-click prevention via JavaScript. |
| classes | string | No | Classes to add to the button element. |
| attributes | object | No | HTML attributes to add to the button element as key–value pairs. |

## Error Messages

The button component does not accept user input and does not produce validation error messages.

## Accessibility

Buttons rendered as `<button>` elements are natively keyboard accessible and announced as buttons by screen readers. Do not rely on `<div>` or `<span>` elements styled to look like buttons.

When using `element: "a"` (link-button), the element receives `role="button"` and `draggable="false"` automatically. Link-buttons respond to Enter but not Space by default in some browsers — GOV.UK Frontend's JavaScript patches this for elements with `data-module="govuk-button"`.

Disabled buttons have `aria-disabled="true"` alongside the `disabled` attribute. Be aware that disabled buttons fall outside the tab order and provide no feedback to users about why the action is unavailable. Prefer showing validation errors over disabling buttons where possible.

The inverse button (`govuk-button--inverse`) is only for use on dark or coloured backgrounds. Do not use it on white or light grey backgrounds as it will fail colour contrast requirements.

Start buttons should only appear once per journey — on the introductory page before the transaction begins.

## Do and Do not

**Do:**
- Use a single primary button per page to show the main action.
- Place the primary button to the left of secondary actions in a button group.
- Use `preventDoubleClick: true` on payment or submission forms to prevent accidental duplicate submissions.
- Use the start button only on the first page of a transaction.
- Write button labels as verbs: "Save and continue", "Confirm payment", "Delete account".

**Do not:**
- Do not use more than one primary button on the same page.
- Do not use a warning button unless the action is genuinely destructive and irreversible.
- Do not disable buttons to prevent form submission — show inline validation errors instead.
- Do not use an inverse button on a white or light background.
- Do not use a button when a standard text link is more appropriate.

## Related Components / Patterns

- [Back link](https://design-system.service.gov.uk/components/back-link/) — for navigating to the previous page, not a button action.
- [Error summary](https://design-system.service.gov.uk/components/error-summary/) — displayed above the form when submission fails validation.
- [Confirm before you go pattern](https://design-system.service.gov.uk/patterns/confirm-before-you-go/) — where warning buttons may be appropriate.
- [Exit this page](https://design-system.service.gov.uk/components/exit-this-page/) — a specialised warning-button-styled component for sensitive services.
