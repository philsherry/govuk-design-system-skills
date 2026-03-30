---
category: components
description: Use the select component when users need to choose one option from a long list — but use radios instead wherever possible.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Select
---

# Select

> Use the select component when users need to choose one option from a long list — but use radios instead wherever possible.
> Source: https://design-system.service.gov.uk/components/select/

---

## Overview

The select component renders a `<select>` dropdown element with a label. Use it when users need to pick one option from a list that is too long to display as radio buttons.

Select dropdowns are often difficult to use — above all on mobile devices — and you should avoid them unless the list is genuinely too long for radios. Research consistently shows that users find selects more error-prone and confusing than other input types. If you have around 15 or fewer options, consider using radios instead.

## When to use this component

- When users must choose one option from a list of more than 15 options.
- When the options form a well-known canonical set (such as countries, nationalities, or currency codes) where users already know the option they want.

## When not to use this component

- Do not use a select for fewer than around 15 options — use **radios** instead.
- Do not use a select for yes/no or other binary choices — use radios.
- Do not use a select for date or time entry — use the **date input** component.
- Do not use a select when users may not know the exact option name — consider an autocomplete pattern instead.

## How it works

The select element pairs with a `<label>`. The macro renders options as `<option>` elements. The first option should be a blank placeholder (for example, "Select a country") if no value should be pre-selected by default.

When hint text or an error message is present, `aria-describedby` links them to the select element. The Nunjucks macro handles this automatically.

The top-level `value` parameter pre-selects the matching option when the page renders with data entered earlier (for example, after a validation error).

## Code Examples

### Default / Basic

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="sort">
    Sort by
  </label>
  <select class="govuk-select" id="sort" name="sort">
    <option value="published">Recently published</option>
    <option value="updated" selected>Recently updated</option>
    <option value="views">Most views</option>
    <option value="comments">Most comments</option>
  </select>
</div>
```

#### Nunjucks

```njk
{{ govukSelect({
  id: "sort",
  name: "sort",
  label: {
    text: "Sort by"
  },
  items: [
    { value: "published", text: "Recently published" },
    { value: "updated", text: "Recently updated", selected: true },
    { value: "views", text: "Most views" },
    { value: "comments", text: "Most comments" }
  ]
}) }}
```

### With hint text

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="location">
    Choose location
  </label>
  <div id="location-hint" class="govuk-hint">
    Choose the location closest to you.
  </div>
  <select class="govuk-select" id="location" name="location" aria-describedby="location-hint">
    <option value="">Select a location</option>
    <option value="east-midlands">East Midlands</option>
    <option value="london">London</option>
    <option value="north-west">North West</option>
    <option value="south-east">South East</option>
  </select>
</div>
```

#### Nunjucks

```njk
{{ govukSelect({
  id: "location",
  name: "location",
  label: {
    text: "Choose location"
  },
  hint: {
    text: "Choose the location closest to you."
  },
  items: [
    { value: "", text: "Select a location" },
    { value: "east-midlands", text: "East Midlands" },
    { value: "london", text: "London" },
    { value: "north-west", text: "North West" },
    { value: "south-east", text: "South East" }
  ]
}) }}
```

### With error message

#### HTML

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="sort">
    Sort by
  </label>
  <p id="sort-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Select a sort order
  </p>
  <select class="govuk-select govuk-select--error" id="sort" name="sort" aria-describedby="sort-error">
    <option value="">Select</option>
    <option value="published">Recently published</option>
    <option value="updated">Recently updated</option>
    <option value="views">Most views</option>
  </select>
</div>
```

#### Nunjucks

```njk
{{ govukSelect({
  id: "sort",
  name: "sort",
  label: {
    text: "Sort by"
  },
  errorMessage: {
    text: "Select a sort order"
  },
  items: [
    { value: "", text: "Select" },
    { value: "published", text: "Recently published" },
    { value: "updated", text: "Recently updated" },
    { value: "views", text: "Most views" }
  ]
}) }}
```

### With value pre-selected from server data

Use the top-level `value` parameter to pre-select an option when re-rendering after validation.

#### Nunjucks

```njk
{{ govukSelect({
  id: "location",
  name: "location",
  label: {
    text: "Choose location"
  },
  value: data["location"],
  items: [
    { value: "", text: "Select a location" },
    { value: "london", text: "London" },
    { value: "south-east", text: "South East" },
    { value: "north-west", text: "North West" }
  ]
}) }}
```

### With custom width

#### Nunjucks

```njk
{{ govukSelect({
  id: "sort",
  name: "sort",
  classes: "govuk-!-width-one-half",
  label: {
    text: "Sort by"
  },
  items: [
    { value: "published", text: "Recently published" },
    { value: "updated", text: "Recently updated" }
  ]
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | The `id` attribute for the `<select>` element. |
| `name` | string | Yes | The `name` attribute for the `<select>` element. |
| `items` | array | Yes | Array of option objects. |
| `value` | string | No | Value of the option to pre-select. Matches against item `value` fields. |
| `label` | object | Yes | Options for the `<label>` element. Must include `text` or `html`. |
| `hint` | object | No | Options for hint text shown above the select. |
| `errorMessage` | object | No | Options for the error message. If provided, adds error styling to the form group and select. |
| `formGroup` | object | No | Options for the form group wrapper (classes, attributes). |
| `disabled` | boolean | No | If `true`, disables the select element. |
| `classes` | string | No | Classes to add to the `<select>` element. |
| `attributes` | object | No | HTML attributes (as key–value pairs) to add to the `<select>` element. |

### Item object options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes | The display text for the option. |
| `value` | string | No | The value of the option. If omitted, uses the `text` value. |
| `selected` | boolean | No | Pre-selects this option. Overridden by the top-level `value` parameter. |
| `disabled` | boolean | No | Disables this option. |
| `attributes` | object | No | HTML attributes to add to the `<option>` element. |

## Error Messages

| Situation | Error message |
|-----------|---------------|
| Nothing selected | "Select [the thing in lowercase]" — for example, "Select a location" or "Select a sort order" |

## Accessibility

- The `<select>` element is natively accessible — it has built-in keyboard navigation and screen readers announce it as expected.
- Always associate a `<label>` with the select using the `for`/`id` pairing.
- When hint text or error messages are present, `aria-describedby` is automatically added by the Nunjucks macro to associate them with the select.
- Avoid using `size` or `multiple` attributes on the select — both create usability and accessibility problems.
- Ensure the select is wide enough to display options without truncation.

## Do / Don't

**Do:**
- Provide a blank placeholder option ("Select a [thing]") when no default should be pre-selected.
- Use the top-level `value` option to restore an earlier selection when re-rendering after validation.
- Consider whether radios would be a better choice before deciding to use select.

**Don't:**
- Don't use a select for fewer than around 15 options — radios are more usable.
- Don't use a select for selecting more than one option — use checkboxes or a different pattern.
- Don't use disabled options within the list for items users cannot choose — omit those items instead.
- Don't use select for date or time entry — use the date input component.

## Related Components / Patterns

- [Radios](../radios/SKILLS.md) — preferred over select for most use cases
- [Checkboxes](../checkboxes/SKILLS.md) — for selecting more than one option
- [Date Input](../date-input/SKILLS.md) — for date entry
- [Text Input](../text-input/SKILLS.md) — for free-text entry
- [Error Message](../error-message/SKILLS.md)
- [Error Summary](../error-summary/SKILLS.md)
