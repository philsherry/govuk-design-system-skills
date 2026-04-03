---
category: components
description: A wrapper that groups related form inputs together with a shared legend.
keywords:
  - "fieldset"
  - "form group"
  - "grouped inputs"
  - "legend"
last-reviewed: "2026-04-03"
name: Fieldset
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/fieldset"
---

# Fieldset

> A wrapper that groups related form inputs together with a shared legend.
> Source: https://service-manual.nhs.uk/design-system/components/fieldset

## Overview

The fieldset component provides a `<fieldset>` element with a `<legend>` that groups related form inputs under a shared label. This is a fundamental HTML pattern for accessible forms — grouping inputs inside a fieldset tells assistive technologies that the inputs belong together, and the legend provides the group's label. Screen readers announce this label before each individual input.

The fieldset is not a standalone visual component in the way that a button or input is. It acts as a structural wrapper inside other components such as checkboxes, radios, and date input. You can also use it directly when building custom input groups.

You can style the legend as a page heading using `isPageHeading: true`, which wraps an `<h1>` inside the `<legend>`. Use this approach when a form page asks a single question — the question acts as both the page heading and the group label.

## When to use this component

Use the fieldset component whenever you group two or more related form inputs together — for example, a date input (day, month, year), a group of checkboxes, or a group of radio buttons.

Use `isPageHeading: true` when the page asks a single question and the question should be both the page heading and the fieldset legend.

## When not to use this component

Do not use a fieldset for a single standalone input like a text input or textarea with its own label — those use a plain `<label>` element, not a fieldset.

Do not use the fieldset as a visual card or panel component — it serves as a semantic grouping element only.

## How it works

The fieldset renders as `<fieldset class="nhsuk-fieldset">` with `<legend class="nhsuk-fieldset__legend [size-class]">`. When `isPageHeading: true`, the legend contains `<h1 class="nhsuk-fieldset__heading">`.

Available legend size classes are:
- `nhsuk-fieldset__legend--xl` — for the main page heading
- `nhsuk-fieldset__legend--l` — large
- `nhsuk-fieldset__legend--m` — medium (default)
- `nhsuk-fieldset__legend--s` — small

The `html` parameter accepts arbitrary form content inside the fieldset. The `describedBy` parameter appends extra `id`s to the fieldset's `aria-describedby`, linking it to hints or error messages.

The Nunjucks macro supports the call block pattern: `{% call fieldset({...}) %}...{% endcall %}` to render content inside the fieldset.

## Code Examples

### Default / Basic

#### HTML

```html
<fieldset class="nhsuk-fieldset">
  <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--l">
    <h1 class="nhsuk-fieldset__heading">
      What is your address?
    </h1>
  </legend>
  <!-- Form inputs go here -->
</fieldset>
```

#### Nunjucks

```njk
{{ fieldset({
  legend: {
    text: "What is your address?",
    classes: "nhsuk-fieldset__legend--l",
    isPageHeading: true
  }
}) }}
```

### With custom HTML content using call block

#### Nunjucks

```njk
{% call fieldset({
  legend: {
    text: "What is your address?",
    classes: "nhsuk-fieldset__legend--l",
    isPageHeading: true
  }
}) %}
  {{ input({
    label: { text: "Address line 1" },
    id: "address-line-1",
    name: "address-line-1"
  }) }}
  {{ input({
    label: { text: "Address line 2 (optional)" },
    id: "address-line-2",
    name: "address-line-2"
  }) }}
  {{ input({
    label: { text: "Town or city" },
    id: "address-town",
    name: "address-town",
    classes: "nhsuk-u-width-two-thirds"
  }) }}
  {{ input({
    label: { text: "Postcode" },
    id: "address-postcode",
    name: "address-postcode",
    classes: "nhsuk-input--width-10"
  }) }}
{% endcall %}
```

### As used within radios (via fieldset parameter)

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

### With role and describedBy

#### Nunjucks

```njk
{{ fieldset({
  legend: {
    text: "What is your date of birth?",
    classes: "nhsuk-fieldset__legend--l",
    isPageHeading: true
  },
  role: "group",
  describedBy: "dob-hint"
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| legend | object | No | Object with `text` or `html`, `classes`, and `isPageHeading`. |
| legend.text | string | Yes (or html) | Legend text. |
| legend.html | string | Yes (or text) | Legend HTML. If provided, `text` is ignored. |
| legend.classes | string | No | Classes to add to the `<legend>` element. Use size variants such as `nhsuk-fieldset__legend--l`. |
| legend.isPageHeading | boolean | No | When `true`, wraps the legend content in an `<h1 class="nhsuk-fieldset__heading">`. |
| describedBy | string | No | Space-separated list of `id`s added to `aria-describedby` on the `<fieldset>`. |
| html | string | No | HTML content to place inside the fieldset. |
| role | string | No | `role` attribute for the `<fieldset>`. Use `"group"` for date inputs. |
| classes | string | No | Classes to add to the `<fieldset>` element. |
| attributes | object | No | HTML attributes for the `<fieldset>` element as key-value pairs. |

## Error Messages

The fieldset component itself does not render an error message. Individual input components (such as checkboxes or radios) nested inside the fieldset add their own error messages. Those components add `nhsuk-form-group--error` to the outer group and pass `aria-describedby` references to the error message.

## Accessibility

The `<fieldset>` and `<legend>` are the correct, native HTML mechanism for grouping related inputs. Screen readers announce the legend text before each input label within the group, so the user always hears the context question followed by the specific label.

When `isPageHeading: true`, the `<h1>` sits inside the `<legend>`. This is valid HTML and means the page heading and the form group label are the same element, which avoids repeating the question twice.

Do not use `aria-labelledby` to associate a heading with a fieldset — this has less consistent browser support than the native `<legend>` approach.

For date inputs, add `role="group"` to the fieldset via the `role` parameter to clarify the semantic relationship.

## Do and Do not

**Do:**
- Use a fieldset with a legend for any group of two or more related inputs (checkboxes, radios, date inputs).
- Use `isPageHeading: true` when the page asks a single question and the question is the `<h1>`.
- Use the correct legend size class to match the surrounding typographic hierarchy.
- Use `describedBy` to link any hint or error message `id`s to the fieldset.

**Do not:**
- Do not use a fieldset for a single text input with its own `<label>`.
- Do not omit the legend — an empty or missing legend removes important context from assistive technology users.
- Do not use a fieldset purely for visual styling — it has semantic meaning.
- Do not place a fieldset inside another fieldset unless the inner group genuinely has its own legend.

## Related Components / Patterns

- [Checkboxes](../checkboxes/SKILLS.md) — always uses a fieldset.
- [Radios](../radios/SKILLS.md) — always uses a fieldset.
- [Date input](../date-input/SKILLS.md) — always uses a fieldset.
- [Text input](../text-input/SKILLS.md) — uses a label, not a fieldset.
