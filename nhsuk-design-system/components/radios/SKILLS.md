---
category: components
description: Use the radios component when users can only select one option from a list.
keywords:
  - "radio buttons"
  - "radio group"
  - "radios"
  - "single select"
last-reviewed: "2026-04-03"
name: Radios
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/radios"
---

# Radios

> Use the radios component when users can only select one option from a list.
> Source: https://service-manual.nhs.uk/design-system/components/radios

## Overview

Radios allow users to select exactly one option from a set of mutually exclusive choices. Unlike checkboxes, selecting one radio button automatically deselects all others in the group. NHS-styled radios are larger than native browser radio buttons, making them easier to use on touch screens and for users with motor impairments.

The component supports inline layout, conditional reveal (showing extra fields when a user selects a particular option), hint text on individual options, dividers between options, and a small variant for dense interfaces.

Always wrap radios in a `<fieldset>` with a `<legend>` that describes the question. When a page asks a single question, the legend should be the page heading.

## When to use this component

- When users must pick exactly one option from a list.
- For yes/no questions.
- When the list of options is short enough to show all at once.
- When you have 2 or more mutually exclusive options.

## When not to use this component

- Do not use radios when users can select more than one option — use **checkboxes** instead.
- Do not use radios for long option lists — consider a **select** dropdown, though prefer radios where practical.
- Do not use radios when only one option exists.

## How it works

Each radio option is an `<input type="radio">` paired with a `<label>`. All inputs in the group share the same `name` attribute. The group wraps in a `<fieldset>` with a `<legend>`.

### Inline layout

Add `nhsuk-radios--inline` to display options side by side. Use for short option sets such as yes/no.

### Conditional reveal

Individual items can have a `conditional` option containing HTML. When a user selects that radio, the extra content appears using JavaScript. Without JavaScript, conditional content stays visible.

### Small radios

Add `nhsuk-radios--small` for smaller radios. Use only in dense interfaces such as filter forms.

### Dividers

Use `{ divider: "or" }` as an item to insert a text divider between radio options, commonly used before a "None of the above" option.

## Code examples

### Default / Basic

#### HTML

```html
<div class="nhsuk-form-group">
  <fieldset class="nhsuk-fieldset">
    <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--l">
      <h1 class="nhsuk-fieldset__heading">
        How do you want to be contacted?
      </h1>
    </legend>
    <div class="nhsuk-radios" data-module="nhsuk-radios">
      <div class="nhsuk-radios__item">
        <input class="nhsuk-radios__input" id="contact" name="contact" type="radio" value="email">
        <label class="nhsuk-label nhsuk-radios__label" for="contact">Email</label>
      </div>
      <div class="nhsuk-radios__item">
        <input class="nhsuk-radios__input" id="contact-2" name="contact" type="radio" value="phone">
        <label class="nhsuk-label nhsuk-radios__label" for="contact-2">Phone</label>
      </div>
      <div class="nhsuk-radios__item">
        <input class="nhsuk-radios__input" id="contact-3" name="contact" type="radio" value="text">
        <label class="nhsuk-label nhsuk-radios__label" for="contact-3">Text message</label>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks

```njk
{{ radios({
  name: "contact",
  fieldset: {
    legend: {
      text: "How do you want to be contacted?",
      isPageHeading: true,
      classes: "nhsuk-fieldset__legend--l"
    }
  },
  items: [
    { value: "email", text: "Email" },
    { value: "phone", text: "Phone" },
    { value: "text", text: "Text message" }
  ]
}) }}
```

### Inline radios (Yes/No)

#### HTML

```html
<div class="nhsuk-form-group">
  <fieldset class="nhsuk-fieldset">
    <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--l">
      <h1 class="nhsuk-fieldset__heading">Do you know your NHS number?</h1>
    </legend>
    <div class="nhsuk-radios nhsuk-radios--inline" data-module="nhsuk-radios">
      <div class="nhsuk-radios__item">
        <input class="nhsuk-radios__input" id="nhs-number-known" name="nhs-number-known" type="radio" value="yes">
        <label class="nhsuk-label nhsuk-radios__label" for="nhs-number-known">Yes</label>
      </div>
      <div class="nhsuk-radios__item">
        <input class="nhsuk-radios__input" id="nhs-number-known-2" name="nhs-number-known" type="radio" value="no">
        <label class="nhsuk-label nhsuk-radios__label" for="nhs-number-known-2">No</label>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks

```njk
{{ radios({
  classes: "nhsuk-radios--inline",
  name: "nhs-number-known",
  fieldset: {
    legend: {
      text: "Do you know your NHS number?",
      isPageHeading: true,
      classes: "nhsuk-fieldset__legend--l"
    }
  },
  items: [
    { value: "yes", text: "Yes" },
    { value: "no", text: "No" }
  ]
}) }}
```

### With hint text on options

#### Nunjucks

```njk
{{ radios({
  name: "contact",
  fieldset: {
    legend: {
      text: "How do you want to be contacted?",
      isPageHeading: true,
      classes: "nhsuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "email",
      text: "Email",
      hint: {
        text: "We will send appointment confirmations to your email address."
      }
    },
    {
      value: "phone",
      text: "Phone",
      hint: {
        text: "We will call you during working hours."
      }
    }
  ]
}) }}
```

### With conditional reveal

#### Nunjucks

```njk
{{ radios({
  name: "contact",
  fieldset: {
    legend: {
      text: "How would you prefer to be contacted?",
      isPageHeading: true,
      classes: "nhsuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "email",
      text: "Email",
      conditional: {
        html: input({
          id: "contact-by-email",
          name: "contact-by-email",
          type: "email",
          autocomplete: "email",
          classes: "nhsuk-u-width-two-thirds",
          label: { text: "Email address" }
        })
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: input({
          id: "contact-by-phone",
          name: "contact-by-phone",
          type: "tel",
          autocomplete: "tel",
          classes: "nhsuk-u-width-two-thirds",
          label: { text: "Phone number" }
        })
      }
    }
  ]
}) }}
```

### With divider ("or")

#### Nunjucks

```njk
{{ radios({
  name: "contact-preference",
  fieldset: {
    legend: {
      text: "How do you want to be contacted?",
      isPageHeading: true,
      classes: "nhsuk-fieldset__legend--l"
    }
  },
  items: [
    { value: "email", text: "Email" },
    { value: "phone", text: "Phone" },
    { value: "text", text: "Text message" },
    { divider: "or" },
    { value: "none", text: "I do not want to be contacted" }
  ]
}) }}
```

### With error message

#### Nunjucks

```njk
{{ radios({
  name: "contact",
  fieldset: {
    legend: {
      text: "How do you want to be contacted?",
      isPageHeading: true,
      classes: "nhsuk-fieldset__legend--l"
    }
  },
  errorMessage: {
    text: "Select how you want to be contacted"
  },
  items: [
    { value: "email", text: "Email" },
    { value: "phone", text: "Phone" },
    { value: "text", text: "Text message" }
  ]
}) }}
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `name` | string | Yes | The `name` attribute for all radio inputs in the group. |
| `items` | array | Yes | Array of radio item objects. |
| `idPrefix` | string | No | Prefix for generated `id` attributes on each item. Defaults to the `name` value. |
| `value` | string | No | The value of the pre-selected radio item. Matches against item `value` fields. |
| `fieldset` | object | No | Options for the wrapping `<fieldset>`, including `legend`. |
| `hint` | object | No | Options for group-level hint text displayed below the legend. |
| `errorMessage` | object | No | Options for the error message. |
| `formGroup` | object | No | Options for the form group element (classes, attributes). |
| `classes` | string | No | Classes to add to the `nhsuk-radios` container. Use `nhsuk-radios--inline` or `nhsuk-radios--small`. |
| `attributes` | object | No | HTML attributes to add to the `nhsuk-radios` container. |

### Item object options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes (or `html`, unless `divider`) | Label text for the radio item. |
| `html` | string | Yes (or `text`, unless `divider`) | Label HTML for the radio item. |
| `value` | string | Yes (unless `divider`) | The value submitted with the form. |
| `id` | string | No | Override the auto-generated `id` for this item. |
| `hint` | object | No | Hint text shown below this item's label. |
| `divider` | string | No | Text for a divider item (e.g. `"or"`). When set, the macro renders no radio input. |
| `checked` | boolean | No | Whether this item is pre-checked. |
| `conditional` | object | No | Content to reveal when a user selects this item. Must include an `html` property. |
| `disabled` | boolean | No | Whether this item is disabled. |
| `attributes` | object | No | HTML attributes to add to the input element. |

## Error messages

| Situation | Error message |
|-----------|---------------|
| Nothing selected | "Select [the question in lowercase]" — for example, "Select how you want to be contacted" |
| Conditional field empty | Follow the error guidance for the specific conditional field type |

## Accessibility

- Radios must always sit within a `<fieldset>` with a `<legend>` — screen readers announce the group question when focus enters the group.
- Setting `isPageHeading: true` wraps the legend in an `<h1>`, making it both the form group label and the page heading.
- The `data-module="nhsuk-radios"` attribute activates the JavaScript for conditional reveal. Without JS, conditional content stays visible.
- Avoid using disabled radios for options users might expect to be available — if an option is unavailable, explain why in hint text or exclude it.

## Do and do not

**Do:**
- Always use a fieldset and legend for radio groups.
- Make the legend the page heading when a page asks a single question.
- Order options logically — by likelihood, alphabetically, or by natural sequence.
- Use "or" dividers before a "None of the above" option.

**Do not:**
- Do not use radios when users can select more than one option — use checkboxes.
- Do not pre-select a radio option without strong user research justification, as it biases responses.
- Do not use radios for long option lists — consider a select or autocomplete.
- Do not use more than one inline radio group per page.

## Related components and patterns

- [Checkboxes](../checkboxes/SKILLS.md) — for questions where users can select more than one answer
- [Select](../select/SKILLS.md) — for long option lists where radios are impractical
- [Fieldset](../fieldset/SKILLS.md) — the wrapping element for grouped inputs
- [Error Message](../error-message/SKILLS.md) — for inline field errors
- [Error Summary](../error-summary/SKILLS.md) — for listing errors at the top of a page
