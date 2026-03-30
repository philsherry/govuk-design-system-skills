---
category: components
description: A wrapper that groups related form inputs together with a shared legend.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Fieldset
---

# Fieldset

> A wrapper that groups related form inputs together with a shared legend.
> Source: https://design-system.service.gov.uk/components/fieldset/
---

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

The fieldset renders as `<fieldset class="govuk-fieldset">` with `<legend class="govuk-fieldset__legend [size-class]">`. When `isPageHeading: true`, the legend contains `<h1 class="govuk-fieldset__heading">`.

Available legend size classes are:
- `govuk-fieldset__legend--xl` — for the main page heading
- `govuk-fieldset__legend--l` — large
- `govuk-fieldset__legend--m` — medium (default)
- `govuk-fieldset__legend--s` — small

The `html` parameter accepts arbitrary form content inside the fieldset. The `describedBy` parameter appends extra `id`s to the fieldset's `aria-describedby`, linking it to hints or error messages.

The Nunjucks macro supports the call block pattern: `{% call govukFieldset({...}) %}...{% endcall %}` to render content inside the fieldset.

## Code Examples

### Default / Basic

#### HTML

```html
<fieldset class="govuk-fieldset">
  <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
    <h1 class="govuk-fieldset__heading">
      What is your address?
    </h1>
  </legend>
  <!-- Form inputs go here -->
</fieldset>
```

#### Nunjucks

```njk
{{ govukFieldset({
  legend: {
    text: "What is your address?",
    classes: "govuk-fieldset__legend--l",
    isPageHeading: true
  }
}) }}
```

### With custom HTML content using call block

#### Nunjucks

```njk
{% call govukFieldset({
  legend: {
    text: "What is your address?",
    classes: "govuk-fieldset__legend--l",
    isPageHeading: true
  }
}) %}
  {{ govukInput({
    label: { text: "Address line 1" },
    id: "address-line-1",
    name: "address-line-1"
  }) }}
  {{ govukInput({
    label: { text: "Address line 2 (optional)" },
    id: "address-line-2",
    name: "address-line-2"
  }) }}
  {{ govukInput({
    label: { text: "Town or city" },
    id: "address-town",
    name: "address-town",
    classes: "govuk-!-width-two-thirds"
  }) }}
  {{ govukInput({
    label: { text: "Postcode" },
    id: "address-postcode",
    name: "address-postcode",
    classes: "govuk-input--width-10"
  }) }}
{% endcall %}
```

### Legend as heading with size variants

#### Nunjucks

```njk
{# Extra large — main page heading #}
{{ govukFieldset({
  legend: {
    text: "What is your name?",
    classes: "govuk-fieldset__legend--xl",
    isPageHeading: true
  }
}) }}

{# Medium — section heading #}
{{ govukFieldset({
  legend: {
    text: "Your contact details",
    classes: "govuk-fieldset__legend--m"
  }
}) }}

{# Small — minor grouping #}
{{ govukFieldset({
  legend: {
    text: "Emergency contact",
    classes: "govuk-fieldset__legend--s"
  }
}) }}
```

### As used within radios (via fieldset parameter)

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

### With role and describedBy

#### Nunjucks

```njk
{{ govukFieldset({
  legend: {
    text: "What is your date of birth?",
    classes: "govuk-fieldset__legend--l",
    isPageHeading: true
  },
  role: "group",
  describedBy: "dob-hint"
}) }}
```

### With HTML in the legend

#### Nunjucks

```njk
{% call govukFieldset({
  legend: {
    html: "Your <abbr title=\"National Insurance\">NI</abbr> details",
    classes: "govuk-fieldset__legend--l",
    isPageHeading: true
  }
}) %}
  {{ govukInput({
    label: { text: "National Insurance number" },
    id: "ni-number",
    name: "ni-number"
  }) }}
{% endcall %}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| legend | object | No | Object with `text` or `html`, `classes`, and `isPageHeading`. |
| legend.text | string | Yes (or html) | Legend text. |
| legend.html | string | Yes (or text) | Legend HTML. If provided, `text` is ignored. |
| legend.classes | string | No | Classes to add to the `<legend>` element. Use size variants such as `govuk-fieldset__legend--l`. |
| legend.isPageHeading | boolean | No | When `true`, wraps the legend content in an `<h1 class="govuk-fieldset__heading">`. |
| describedBy | string | No | Space-separated list of `id`s added to `aria-describedby` on the `<fieldset>`. |
| html | string | No | HTML content to place inside the fieldset. |
| role | string | No | `role` attribute for the `<fieldset>`. Use `"group"` for date inputs. |
| classes | string | No | Classes to add to the `<fieldset>` element. |
| attributes | object | No | HTML attributes for the `<fieldset>` element as key–value pairs. |

## Error Messages

The fieldset component itself does not render an error message. Individual input components (such as checkboxes or radios) nested inside the fieldset add their own error messages. Those components add `govuk-form-group--error` to the outer group and pass `aria-describedby` references to the error message.

## Accessibility

The `<fieldset>` and `<legend>` are the correct, native HTML mechanism for grouping related inputs. Screen readers announce the legend text before each input label within the group, so the user always hears the context question followed by the specific label.

When `isPageHeading: true`, the `<h1>` sits inside the `<legend>`. This is valid HTML and means the page heading and the form group label are the same element, which avoids repeating the question twice.

Do not use `aria-labelledby` to associate a heading with a fieldset — this has less consistent browser support than the native `<legend>` approach.

For date inputs, add `role="group"` to the fieldset via the `role` parameter to clarify the semantic relationship.

## Do / Don't

**Do:**
- Use a fieldset with a legend for any group of two or more related inputs (checkboxes, radios, date inputs).
- Use `isPageHeading: true` when the page asks a single question and the question is the `<h1>`.
- Use the correct legend size class to match the surrounding typographic hierarchy.
- Use `describedBy` to link any hint or error message `id`s to the fieldset.

**Don't:**
- Don't use a fieldset for a single text input with its own `<label>`.
- Don't omit the legend — an empty or missing legend removes important context from assistive technology users.
- Don't use a fieldset purely for visual styling — it has semantic meaning.
- Don't place a fieldset inside another fieldset unless the inner group genuinely has its own legend.

## Related Components / Patterns

- [Checkboxes](https://design-system.service.gov.uk/components/checkboxes/) — always uses a fieldset.
- [Radios](https://design-system.service.gov.uk/components/radios/) — always uses a fieldset.
- [Date input](https://design-system.service.gov.uk/components/date-input/) — always uses a fieldset.
- [Text input](https://design-system.service.gov.uk/components/text-input/) — uses a label, not a fieldset.
