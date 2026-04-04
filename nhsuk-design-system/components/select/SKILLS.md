---
category: components
description: Use the select component when users need to choose one option from a long list — but use radios instead wherever possible.
keywords:
  - "dropdown"
  - "option list"
  - "select"
  - "select box"
last-reviewed: "2026-04-03"
name: Select
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/select"
---

# Select

> Use the select component when users need to choose one option from a long list — but use radios instead wherever possible.
> Source: https://service-manual.nhs.uk/design-system/components/select

## Overview

The select component renders a `<select>` dropdown element with a label. Use it when users need to pick one option from a list that is too long to display as radio buttons.

Select dropdowns are often hard to use — above all on mobile devices — and you should avoid them unless the list is genuinely too long for radios. Research shows that users find selects more error-prone and confusing than other input types. If you have around 15 or fewer options, consider using radios instead.

## When to use this component

- When users must choose one option from a list of more than 15 options.
- When the options form a well-known set (such as countries, GP practices, or hospital names) where users already know the option they want.

## When not to use this component

- Do not use a select for fewer than around 15 options — use **radios** instead.
- Do not use a select for yes/no or other binary choices — use radios.
- Do not use a select for date or time entry — use the **date input** component.
- Do not use a select when users may not know the exact option name — consider an autocomplete pattern instead.

## How it works

The select element pairs with a `<label>`. The macro renders options as `<option>` elements. The first option should be a blank placeholder (for example, "Select a GP practice") if no value should be pre-selected by default.

When hint text or an error message is present, `aria-describedby` links them to the select element. The Nunjucks macro handles this automatically.

## Code examples

### Default / Basic

#### HTML

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="sort">
    Sort by
  </label>
  <select class="nhsuk-select" id="sort" name="sort">
    <option value="published">Recently published</option>
    <option value="updated" selected>Recently updated</option>
    <option value="views">Most views</option>
  </select>
</div>
```

#### Nunjucks

```njk
{{ select({
  id: "sort",
  name: "sort",
  label: {
    text: "Sort by"
  },
  items: [
    { value: "published", text: "Recently published" },
    { value: "updated", text: "Recently updated", selected: true },
    { value: "views", text: "Most views" }
  ]
}) }}
```

### With hint text

#### Nunjucks

```njk
{{ select({
  id: "gp-practice",
  name: "gp-practice",
  label: {
    text: "Choose your GP practice"
  },
  hint: {
    text: "Choose the GP practice closest to your home address."
  },
  items: [
    { value: "", text: "Select a GP practice" },
    { value: "riverside", text: "Riverside Medical Centre" },
    { value: "oak-tree", text: "Oak Tree Surgery" },
    { value: "park-view", text: "Park View Practice" }
  ]
}) }}
```

### With error message

#### HTML

```html
<div class="nhsuk-form-group nhsuk-form-group--error">
  <label class="nhsuk-label" for="gp-practice">
    Choose your GP practice
  </label>
  <span id="gp-practice-error" class="nhsuk-error-message">
    <span class="nhsuk-u-visually-hidden">Error: </span>Select a GP practice
  </span>
  <select class="nhsuk-select nhsuk-select--error" id="gp-practice" name="gp-practice" aria-describedby="gp-practice-error">
    <option value="">Select a GP practice</option>
    <option value="riverside">Riverside Medical Centre</option>
    <option value="oak-tree">Oak Tree Surgery</option>
  </select>
</div>
```

#### Nunjucks

```njk
{{ select({
  id: "gp-practice",
  name: "gp-practice",
  label: {
    text: "Choose your GP practice"
  },
  errorMessage: {
    text: "Select a GP practice"
  },
  items: [
    { value: "", text: "Select a GP practice" },
    { value: "riverside", text: "Riverside Medical Centre" },
    { value: "oak-tree", text: "Oak Tree Surgery" }
  ]
}) }}
```

### With value pre-selected from server data

#### Nunjucks

```njk
{{ select({
  id: "gp-practice",
  name: "gp-practice",
  label: {
    text: "Choose your GP practice"
  },
  value: data["gp-practice"],
  items: [
    { value: "", text: "Select a GP practice" },
    { value: "riverside", text: "Riverside Medical Centre" },
    { value: "oak-tree", text: "Oak Tree Surgery" }
  ]
}) }}
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | The `id` attribute for the `<select>` element. |
| `name` | string | Yes | The `name` attribute for the `<select>` element. |
| `items` | array | Yes | Array of option objects. |
| `value` | string | No | Value of the option to pre-select. Matches against item `value` fields. |
| `label` | object | Yes | Options for the `<label>` element. Must include `text` or `html`. |
| `hint` | object | No | Options for hint text shown above the select. |
| `errorMessage` | object | No | Options for the error message. If provided, adds error styling to the form group and select. |
| `formGroup` | object | No | Options for the form group wrapper. |
| `disabled` | boolean | No | If `true`, disables the select element. |
| `classes` | string | No | Classes to add to the `<select>` element. |
| `attributes` | object | No | HTML attributes (as key-value pairs) to add to the `<select>` element. |

### Item object options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes | The display text for the option. |
| `value` | string | No | The value of the option. If omitted, uses the `text` value. |
| `selected` | boolean | No | Pre-selects this option. Overridden by the top-level `value` parameter. |
| `disabled` | boolean | No | Disables this option. |
| `attributes` | object | No | HTML attributes to add to the `<option>` element. |

## Error messages

| Situation | Error message |
|-----------|---------------|
| Nothing selected | "Select [the thing in lowercase]" — for example, "Select a GP practice" or "Select a sort order" |

## Accessibility

- The `<select>` element is natively accessible — it has built-in keyboard navigation and screen readers announce it as expected.
- Always associate a `<label>` with the select using the `for`/`id` pairing.
- When hint text or error messages are present, `aria-describedby` links them to the select automatically through the Nunjucks macro.
- Avoid using `size` or `multiple` attributes on the select — both create usability and accessibility problems.
- Ensure the select is wide enough to display options without truncation.

## Do and do not

**Do:**
- Provide a blank placeholder option ("Select a [thing]") when no default should be pre-selected.
- Use the top-level `value` option to restore an earlier selection when re-rendering after validation.
- Consider whether radios would be a better choice before deciding to use select.

**Do not:**
- Do not use a select for fewer than around 15 options — radios are more usable.
- Do not use a select for selecting more than one option — use checkboxes or a different pattern.
- Do not use disabled options within the list for items users cannot choose — omit those items instead.
- Do not use select for date or time entry — use the date input component.

## Related components and patterns

- [Radios](../radios/SKILLS.md) — preferred over select for most use cases
- [Checkboxes](../checkboxes/SKILLS.md) — for selecting more than one option
- [Date Input](../date-input/SKILLS.md) — for date entry
- [Text Input](../text-input/SKILLS.md) — for free-text entry
- [Error Message](../error-message/SKILLS.md)
- [Error Summary](../error-summary/SKILLS.md)
