---
category: components
description: A form component that lets users select one or more options from a list.
govuk-frontend: "5.x"
keywords:
  - "checkbox"
  - "checkboxes"
  - "multi-select"
  - "tick boxes"
last-reviewed: "2026-04-03"
name: Checkboxes
source: "https://design-system.service.gov.uk/components/checkboxes/"
---

# Checkboxes

> A form component that lets users select one or more options from a list.
> Source: https://design-system.service.gov.uk/components/checkboxes/

## Overview

The checkboxes component lets users select one or more options from a list. Unlike radios, checkboxes allow more than one simultaneous selection. Use them when the options are not mutually exclusive and users may need to pick more than one item.

Each checkbox is an `<input type="checkbox">` paired with a `<label>`. The component wraps the group in a `<fieldset>` with a `<legend>` describing the group of options. You can add hints to the group or to individual items.

Checkboxes support conditional reveal — when the user selects a checkbox, extra content (such as a related text input) can appear beneath it. An "exclusive" checkbox behaviour is also available for "None of the above" style options that deselect all other items when selected.

## When to use this component

Use checkboxes when users need to select one or more options from a list, or to toggle a single option on or off (such as agreeing to terms and conditions).

Use checkboxes when you know the list of options in advance and users may legitimately need to select more than one option.

## When not to use this component

Do not use checkboxes if users can only select one option — use radios instead.

Do not use checkboxes if the list of options is long (more than around 15 items) — consider a select component or a different interaction pattern.

Do not use checkboxes to toggle an immediate action (for example, turning a setting on or off without a form submission) — use a toggle switch pattern instead.

## How it works

The component groups checkboxes inside a `<fieldset>` with a `<legend>`. Each item renders as `<div class="govuk-checkboxes__item">` containing an `<input class="govuk-checkboxes__input">` and a `<label class="govuk-checkboxes__label">`.

Conditional reveal content goes in a `<div class="govuk-checkboxes__conditional">` directly after the checkbox item. It starts hidden and appears when the user checks the checkbox, controlled by JavaScript via `data-module="govuk-checkboxes"`.

The exclusive behaviour (`behaviour: "exclusive"`) is for "None of the above" checkboxes. When the user checks the exclusive item, the component automatically unchecks all other checkboxes in the group. When the user checks any other checkbox, the component unchecks the exclusive item.

Small checkboxes (`govuk-checkboxes--small`) are available for filter panels or compact layouts with limited space.

## Code Examples

### Default / Basic

#### HTML

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset" aria-describedby="nationality-hint">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        What is your nationality?
      </h1>
    </legend>
    <div id="nationality-hint" class="govuk-hint">
      If you have dual nationality, select all options that are relevant to you.
    </div>
    <div class="govuk-checkboxes" data-module="govuk-checkboxes">
      <div class="govuk-checkboxes__item">
        <input class="govuk-checkboxes__input" id="nationality" name="nationality" type="checkbox" value="british">
        <label class="govuk-label govuk-checkboxes__label" for="nationality">British</label>
      </div>
      <div class="govuk-checkboxes__item">
        <input class="govuk-checkboxes__input" id="nationality-2" name="nationality" type="checkbox" value="irish">
        <label class="govuk-label govuk-checkboxes__label" for="nationality-2">Irish</label>
      </div>
      <div class="govuk-checkboxes__item">
        <input class="govuk-checkboxes__input" id="nationality-3" name="nationality" type="checkbox" value="other">
        <label class="govuk-label govuk-checkboxes__label" for="nationality-3">Citizen of another country</label>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks

```njk
{{ govukCheckboxes({
  name: "nationality",
  fieldset: {
    legend: {
      text: "What is your nationality?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "If you have dual nationality, select all options that are relevant to you."
  },
  items: [
    {
      value: "british",
      text: "British"
    },
    {
      value: "irish",
      text: "Irish"
    },
    {
      value: "other",
      text: "Citizen of another country"
    }
  ]
}) }}
```

### With hints on items

#### Nunjucks

```njk
{{ govukCheckboxes({
  name: "contact",
  fieldset: {
    legend: {
      text: "How would you like to be contacted?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "email",
      text: "Email",
      hint: {
        text: "We will only use this for correspondence about your application."
      }
    },
    {
      value: "phone",
      text: "Phone",
      hint: {
        text: "For urgent queries only."
      }
    }
  ]
}) }}
```

### With conditional reveal

#### HTML

```html
<div class="govuk-checkboxes" data-module="govuk-checkboxes">
  <div class="govuk-checkboxes__item">
    <input
      class="govuk-checkboxes__input"
      id="contact"
      name="contact"
      type="checkbox"
      value="email"
      data-aria-controls="conditional-contact"
    >
    <label class="govuk-label govuk-checkboxes__label" for="contact">
      Email
    </label>
  </div>
  <div class="govuk-checkboxes__conditional govuk-checkboxes__conditional--hidden" id="conditional-contact">
    <div class="govuk-form-group">
      <label class="govuk-label" for="contact-email">Email address</label>
      <input class="govuk-input govuk-!-width-one-third" type="email" id="contact-email" name="contact-email">
    </div>
  </div>
</div>
```

#### Nunjucks

```njk
{{ govukCheckboxes({
  name: "contact",
  fieldset: {
    legend: {
      text: "How would you like to be contacted?",
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
          label: { text: "Email address" },
          id: "contact-email",
          name: "contact-email",
          type: "email",
          autocomplete: "email",
          classes: "govuk-!-width-one-third"
        })
      }
    }
  ]
}) }}
```

### With "None of the above" exclusive option

#### Nunjucks

```njk
{{ govukCheckboxes({
  name: "countries",
  fieldset: {
    legend: {
      text: "Will you be travelling to any of these countries?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "france",
      text: "France"
    },
    {
      value: "portugal",
      text: "Portugal"
    },
    {
      value: "spain",
      text: "Spain"
    },
    {
      divider: "or"
    },
    {
      value: "none",
      text: "No, I will not be travelling to any of these countries",
      behaviour: "exclusive"
    }
  ]
}) }}
```

### Small checkboxes

#### Nunjucks

```njk
{{ govukCheckboxes({
  name: "filters",
  classes: "govuk-checkboxes--small",
  fieldset: {
    legend: {
      text: "Filter results",
      classes: "govuk-fieldset__legend--s"
    }
  },
  items: [
    { value: "open", text: "Open" },
    { value: "closed", text: "Closed" }
  ]
}) }}
```

### With error message

#### Nunjucks

```njk
{{ govukCheckboxes({
  name: "nationality",
  idPrefix: "nationality",
  fieldset: {
    legend: {
      text: "What is your nationality?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  errorMessage: {
    text: "Select if you are British, Irish or a citizen of a different country"
  },
  items: [
    { value: "british", text: "British" },
    { value: "irish", text: "Irish" },
    { value: "other", text: "Citizen of another country" }
  ]
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| name | string | Yes | The `name` attribute shared by all checkbox inputs. |
| idPrefix | string | No | Prefix for generated `id` attributes. Defaults to `name`. |
| items | array | Yes | Array of checkbox item objects (see below). |
| items[].text | string | Yes (or html) | Label text for the checkbox. |
| items[].html | string | Yes (or text) | Label HTML for the checkbox. |
| items[].value | string | Yes | The `value` attribute for the checkbox input. |
| items[].id | string | No | Custom `id` for the checkbox input. |
| items[].name | string | No | Custom `name` for this input. Overrides the group `name`. |
| items[].checked | boolean | No | Whether the checkbox is pre-checked. |
| items[].disabled | boolean | No | When `true`, the checkbox renders as disabled. |
| items[].hint | object | No | Hint object with `text` or `html`, shown below the checkbox label. |
| items[].conditional | object | No | Object with `html` for content that appears when the user checks the checkbox. |
| items[].behaviour | string | No | Set to `"exclusive"` to make a "None of the above" checkbox. |
| items[].divider | string | No | Text for a divider between items (for example `"or"`). |
| items[].attributes | object | No | HTML attributes for the checkbox input. |
| fieldset | object | No | Fieldset object. Accepts `legend` (with `text`, `html`, `classes`, `isPageHeading`) and `describedBy`. |
| hint | object | No | Hint for the whole group. |
| errorMessage | object | No | Error message object with `text` or `html`. |
| formGroup | object | No | Options for the form group wrapper. |
| classes | string | No | Classes to add to the checkboxes container. |
| attributes | object | No | HTML attributes for the checkboxes container. |
| values | array | No | Array of values to pre-check. Alternative to setting `checked` on individual items. |

## Error Messages

- "Select [option]" — when the user has not selected any required checkbox.
- "Select [option A] or [option B]" — when the user must select at least one of those specific options.

The error message appears above the checkboxes, within the `govuk-form-group--error` wrapper. The wrapper adds a red left border to the group.

## Accessibility

The component groups checkboxes in a `<fieldset>` with a `<legend>` so screen readers announce the group question before each individual option. Do not omit the fieldset for a group of checkboxes.

The `idPrefix` ensures each checkbox `id` is unique on the page. Labels connect to inputs via matching `for` and `id` attributes.

Conditional reveal content uses `data-aria-controls` on the checkbox and `aria-expanded` to communicate the revealed state. The content appears in DOM order, so screen readers read it naturally when revealed.

The exclusive behaviour uses JavaScript. Without JavaScript, it degrades to standard checkbox behaviour — the server must handle deselection logic.

## Do and Do not

**Do:**
- Always use a fieldset and legend when displaying a group of checkboxes.
- Use `isPageHeading: true` on the legend when the question is the page heading.
- Use `idPrefix` to ensure unique `id` values when more than one checkbox group appears on the same page.
- Use `behaviour: "exclusive"` for "None of the above" options rather than implementing custom JavaScript.

**Do not:**
- Do not use checkboxes when users can select only one option — use radios.
- Do not use conditional reveal to show large amounts of content — consider a separate page.
- Do not pre-check checkboxes by default unless the user has already chosen that value.
- Do not rely on the `exclusive` behaviour alone — check server-side that mutually exclusive options are not submitted together.

## Related Components / Patterns

- [Radios](https://design-system.service.gov.uk/components/radios/) — when the user must select one option and one option only.
- [Fieldset](https://design-system.service.gov.uk/components/fieldset/) — the wrapping element used for grouped form inputs.
- [Error message](https://design-system.service.gov.uk/components/error-message/) — for inline validation errors.
- [Error summary](https://design-system.service.gov.uk/components/error-summary/) — for listing all page errors after submission.
