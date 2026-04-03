---
category: components
description: A form component that lets users select one or more options from a list.
keywords:
  - "checkbox"
  - "checkboxes"
  - "multi-select"
  - "tick boxes"
last-reviewed: "2026-04-03"
name: Checkboxes
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/checkboxes"
---

# Checkboxes

> A form component that lets users select one or more options from a list.
> Source: https://service-manual.nhs.uk/design-system/components/checkboxes

## Overview

The checkboxes component lets users select one or more options from a list. Unlike radios, checkboxes allow more than one simultaneous selection. Use them when the options are not mutually exclusive and users may need to pick more than one item.

Each checkbox is an `<input type="checkbox">` paired with a `<label>`. The component wraps the group in a `<fieldset>` with a `<legend>` describing the group of options. You can add hints to the group or to individual items.

Checkboxes support conditional reveal — when a user selects a checkbox, extra content (such as a related text input) can appear beneath it. An "exclusive" checkbox behaviour handles "None of the above" style options that deselect all other items when selected.

## When to use this component

Use checkboxes when users need to select one or more options from a list, or to toggle a single option on or off (such as agreeing to terms and conditions).

Use checkboxes when you know the list of options in advance and users may need to select more than one.

## When not to use this component

Do not use checkboxes if users can only select one option — use radios instead.

Do not use checkboxes if the list of options is long (more than around 15 items) — consider a select component or a different interaction pattern.

## How it works

The component groups checkboxes inside a `<fieldset>` with a `<legend>`. Each item renders as `<div class="nhsuk-checkboxes__item">` containing an `<input class="nhsuk-checkboxes__input">` and a `<label class="nhsuk-checkboxes__label">`.

Conditional reveal content goes in a `<div class="nhsuk-checkboxes__conditional">` directly after the checkbox item. It starts hidden and appears when the user checks the checkbox, controlled by JavaScript via `data-module="nhsuk-checkboxes"`.

The exclusive behaviour (`behaviour: "exclusive"`) handles "None of the above" checkboxes. When a user checks the exclusive item, the component automatically unchecks all other checkboxes in the group. When the user checks any other checkbox, the component unchecks the exclusive item.

Small checkboxes (`nhsuk-checkboxes--small`) work for filter panels or compact layouts with limited space.

## Code Examples

### Default / Basic

#### HTML

```html
<div class="nhsuk-form-group">
  <fieldset class="nhsuk-fieldset" aria-describedby="symptoms-hint">
    <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--l">
      <h1 class="nhsuk-fieldset__heading">
        What symptoms do you have?
      </h1>
    </legend>
    <div id="symptoms-hint" class="nhsuk-hint">
      Select all that apply.
    </div>
    <div class="nhsuk-checkboxes" data-module="nhsuk-checkboxes">
      <div class="nhsuk-checkboxes__item">
        <input class="nhsuk-checkboxes__input" id="symptoms" name="symptoms" type="checkbox" value="headache">
        <label class="nhsuk-label nhsuk-checkboxes__label" for="symptoms">Headache</label>
      </div>
      <div class="nhsuk-checkboxes__item">
        <input class="nhsuk-checkboxes__input" id="symptoms-2" name="symptoms" type="checkbox" value="tiredness">
        <label class="nhsuk-label nhsuk-checkboxes__label" for="symptoms-2">Tiredness</label>
      </div>
      <div class="nhsuk-checkboxes__item">
        <input class="nhsuk-checkboxes__input" id="symptoms-3" name="symptoms" type="checkbox" value="nausea">
        <label class="nhsuk-label nhsuk-checkboxes__label" for="symptoms-3">Feeling sick (nausea)</label>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks

```njk
{{ checkboxes({
  name: "symptoms",
  fieldset: {
    legend: {
      text: "What symptoms do you have?",
      isPageHeading: true,
      classes: "nhsuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "Select all that apply."
  },
  items: [
    { value: "headache", text: "Headache" },
    { value: "tiredness", text: "Tiredness" },
    { value: "nausea", text: "Feeling sick (nausea)" }
  ]
}) }}
```

### With hints on items

#### Nunjucks

```njk
{{ checkboxes({
  name: "contact",
  fieldset: {
    legend: {
      text: "How would you like to be contacted?",
      isPageHeading: true,
      classes: "nhsuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "email",
      text: "Email",
      hint: {
        text: "We will send appointment confirmations to your email."
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
{{ checkboxes({
  name: "contact",
  fieldset: {
    legend: {
      text: "How would you like to be contacted?",
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
          label: { text: "Email address" },
          id: "contact-email",
          name: "contact-email",
          type: "email",
          autocomplete: "email",
          classes: "nhsuk-u-width-two-thirds"
        })
      }
    }
  ]
}) }}
```

### With "None of the above" exclusive option

#### Nunjucks

```njk
{{ checkboxes({
  name: "symptoms",
  fieldset: {
    legend: {
      text: "What symptoms do you have?",
      isPageHeading: true,
      classes: "nhsuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "Select all that apply."
  },
  items: [
    { value: "headache", text: "Headache" },
    { value: "tiredness", text: "Tiredness" },
    { value: "nausea", text: "Feeling sick (nausea)" },
    { divider: "or" },
    {
      value: "none",
      text: "I do not have any of these symptoms",
      behaviour: "exclusive"
    }
  ]
}) }}
```

### With error message

#### Nunjucks

```njk
{{ checkboxes({
  name: "symptoms",
  fieldset: {
    legend: {
      text: "What symptoms do you have?",
      isPageHeading: true,
      classes: "nhsuk-fieldset__legend--l"
    }
  },
  errorMessage: {
    text: "Select the symptoms you have"
  },
  items: [
    { value: "headache", text: "Headache" },
    { value: "tiredness", text: "Tiredness" },
    { value: "nausea", text: "Feeling sick (nausea)" }
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

The error message appears above the checkboxes, within the `nhsuk-form-group--error` wrapper. The wrapper adds a red left border to the group.

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
- Do not rely on the `exclusive` behaviour alone — validate server-side that mutually exclusive options do not arrive together.

## Related Components / Patterns

- [Radios](../radios/SKILLS.md) — when the user must select one option only.
- [Fieldset](../fieldset/SKILLS.md) — the wrapping element for grouped form inputs.
- [Error message](../error-message/SKILLS.md) — for inline validation errors.
- [Error summary](../error-summary/SKILLS.md) — for listing all page errors after submission.
