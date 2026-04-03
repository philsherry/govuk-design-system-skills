---
category: components
description: Use the radios component when users can only select one option from a list.
govuk-frontend: "5.x"
keywords:
  - "radio buttons"
  - "radio group"
  - "radios"
  - "single select"
last-reviewed: "2026-04-03"
name: Radios
source: "https://design-system.service.gov.uk/components/radios/"
---

# Radios

> Use the radios component when users can only select one option from a list.
> Source: https://design-system.service.gov.uk/components/radios/

## Overview

Radios allow users to select exactly one option from a set of mutually exclusive choices. Unlike checkboxes, selecting one radio button automatically deselects all others in the group. GOV.UK-styled radios are larger than native browser radio buttons, making them easier to use on touch screens and for users with motor impairments.

The component supports inline layout, conditional reveal (showing extra fields when the user selects a particular option), hint text on individual options, dividers between options, and small variant for dense interfaces.

Always wrap radios in a `<fieldset>` with a `<legend>` that describes the question. When there is a single question per page, the legend should be the page heading.

## When to use this component

- When users must pick exactly one option from a list.
- For yes/no questions.
- When the list of options is short enough to show all at once.
- When you have 2 or more mutually exclusive options.

## When not to use this component

- Do not use radios when users can select more than one option — use **checkboxes** instead.
- Do not use radios for long option lists — consider a **select** dropdown, though prefer radios where practical.
- Do not use radios when there is only one option.

## How it works

Each radio option is an `<input type="radio">` paired with a `<label>`. All inputs in the group share the same `name` attribute. The group wraps in a `<fieldset>` with a `<legend>`.

### Inline layout

Add `govuk-radios--inline` to display options side by side. Use for short option sets such as yes/no.

### Conditional reveal

Individual items can have a `conditional` option containing HTML. When a user selects that radio, the extra content appears using JavaScript. Without JavaScript, conditional content is always visible.

### Small radios

Add `govuk-radios--small` for smaller radios. Use only in dense interfaces such as filter forms.

### Dividers

Use `{ divider: "or" }` as an item to insert a text divider between radio options, commonly used before a "None of the above" option.

## Code Examples

### Default / Basic

#### HTML

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        Where do you live?
      </h1>
    </legend>
    <div class="govuk-radios" data-module="govuk-radios">
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="where-do-you-live" name="where-do-you-live" type="radio" value="england">
        <label class="govuk-label govuk-radios__label" for="where-do-you-live">England</label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="where-do-you-live-2" name="where-do-you-live" type="radio" value="scotland">
        <label class="govuk-label govuk-radios__label" for="where-do-you-live-2">Scotland</label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="where-do-you-live-3" name="where-do-you-live" type="radio" value="wales">
        <label class="govuk-label govuk-radios__label" for="where-do-you-live-3">Wales</label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="where-do-you-live-4" name="where-do-you-live" type="radio" value="northern-ireland">
        <label class="govuk-label govuk-radios__label" for="where-do-you-live-4">Northern Ireland</label>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks

```njk
{{ govukRadios({
  name: "where-do-you-live",
  fieldset: {
    legend: {
      text: "Where do you live?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    { value: "england", text: "England" },
    { value: "scotland", text: "Scotland" },
    { value: "wales", text: "Wales" },
    { value: "northern-ireland", text: "Northern Ireland" }
  ]
}) }}
```

### Inline radios (Yes/No)

#### HTML

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">Have you changed your name?</h1>
    </legend>
    <div class="govuk-radios govuk-radios--inline" data-module="govuk-radios">
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="changed-name" name="changed-name" type="radio" value="yes">
        <label class="govuk-label govuk-radios__label" for="changed-name">Yes</label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="changed-name-2" name="changed-name" type="radio" value="no">
        <label class="govuk-label govuk-radios__label" for="changed-name-2">No</label>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks

```njk
{{ govukRadios({
  classes: "govuk-radios--inline",
  name: "changed-name",
  fieldset: {
    legend: {
      text: "Have you changed your name?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
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
{{ govukRadios({
  name: "sign-in",
  fieldset: {
    legend: {
      text: "How do you want to sign in?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "You'll need an account to prove your identity and tax details."
  },
  items: [
    {
      value: "government-gateway",
      text: "Sign in with Government Gateway",
      hint: {
        text: "You'll have a user ID if you've registered for Self Assessment or filed a tax return online before."
      }
    },
    {
      value: "one-login",
      text: "Sign in with GOV.UK One Login",
      hint: {
        text: "If you don't have a GOV.UK One Login, you can create one."
      }
    }
  ]
}) }}
```

### With conditional reveal

#### Nunjucks

```njk
{{ govukRadios({
  name: "contact",
  fieldset: {
    legend: {
      text: "How would you prefer to be contacted?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "email",
      text: "Email",
      conditional: {
        html: govukInput({
          id: "contact-by-email",
          name: "contact-by-email",
          type: "email",
          autocomplete: "email",
          classes: "govuk-!-width-one-third",
          label: { text: "Email address" }
        })
      }
    },
    {
      value: "phone",
      text: "Phone",
      conditional: {
        html: govukInput({
          id: "contact-by-phone",
          name: "contact-by-phone",
          type: "tel",
          autocomplete: "tel",
          classes: "govuk-!-width-one-third",
          label: { text: "Phone number" }
        })
      }
    }
  ]
}) }}
```

### With divider ("or" / "None of the above")

#### Nunjucks

```njk
{{ govukRadios({
  name: "where-do-you-live",
  fieldset: {
    legend: {
      text: "Where do you live?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    { value: "england", text: "England" },
    { value: "scotland", text: "Scotland" },
    { value: "wales", text: "Wales" },
    { value: "northern-ireland", text: "Northern Ireland" },
    { divider: "or" },
    { value: "abroad", text: "I am a British citizen living abroad" }
  ]
}) }}
```

### With error message

#### Nunjucks

```njk
{{ govukRadios({
  name: "where-do-you-live",
  fieldset: {
    legend: {
      text: "Where do you live?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  errorMessage: {
    text: "Select where you live"
  },
  items: [
    { value: "england", text: "England" },
    { value: "scotland", text: "Scotland" },
    { value: "wales", text: "Wales" },
    { value: "northern-ireland", text: "Northern Ireland" }
  ]
}) }}
```

### Small radios

#### Nunjucks

```njk
{{ govukRadios({
  classes: "govuk-radios--small",
  name: "filter-status",
  fieldset: {
    legend: {
      text: "Filter by status",
      classes: "govuk-fieldset__legend--s"
    }
  },
  items: [
    { value: "all", text: "All" },
    { value: "active", text: "Active" },
    { value: "inactive", text: "Inactive" }
  ]
}) }}
```

## Nunjucks Macro Options

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
| `classes` | string | No | Classes to add to the `govuk-radios` container. Use `govuk-radios--inline` or `govuk-radios--small`. |
| `attributes` | object | No | HTML attributes to add to the `govuk-radios` container. |

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
| `conditional` | object | No | Content to conditionally reveal when the user selects this item. Must include an `html` property. |
| `disabled` | boolean | No | Whether this item is disabled. |
| `attributes` | object | No | HTML attributes to add to the input element. |

## Error Messages

| Situation | Error message |
|-----------|---------------|
| Nothing selected | "Select [the question in lowercase]" — for example, "Select where you live" |
| Conditional field empty | Follow the error guidance for the specific conditional field type |

## Accessibility

- Radios must always be within a `<fieldset>` with a `<legend>` — screen readers announce the group question when focus enters the group.
- Setting `isPageHeading: true` wraps the legend in the heading element, making it both the form group label and the page heading.
- The `data-module="govuk-radios"` attribute activates the JavaScript for conditional reveal. Without JS, conditional content is always visible.
- Conditional content uses `aria-expanded` on the radio input and CSS to show/hide — not `display:none` — ensuring smooth and accessible transitions.
- Avoid using disabled radios for options users might expect to be available — if an option is unavailable, explain why in hint text or exclude it.

## Do and Do not

**Do:**
- Always use a fieldset and legend for radio groups.
- Make the legend the page heading when there is a single question on the page.
- Order options logically — by likelihood, alphabetically, or by natural sequence.
- Use "or" dividers and "None of the above" options when users genuinely may not fit the main options.

**Do not:**
- Do not use radios when users can select more than one option — use checkboxes.
- Do not pre-select a radio option without a strong user research justification, as it biases responses.
- Do not use radios for long option lists — consider a select or autocomplete.
- Do not use more than one inline radio group per page.

## Related Components / Patterns

- [Checkboxes](../checkboxes/SKILLS.md) — for questions where users can select more than one answer
- [Select](../select/SKILLS.md) — for long option lists where radios are impractical
- [Fieldset](../fieldset/SKILLS.md) — the wrapping element for grouped inputs
- [Error Message](../error-message/SKILLS.md) — for inline field errors
- [Error Summary](../error-summary/SKILLS.md) — for listing errors at the top of a page
