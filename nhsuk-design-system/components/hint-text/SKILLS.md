---
category: components
description: Use hint text to help users understand what information to enter in a form field.
keywords:
  - "help text"
  - "hint"
  - "hint text"
  - "input guidance"
  - "text"
last-reviewed: "2026-04-03"
name: Hint Text
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/hint-text"
---

# Hint Text

> Use hint text to help users understand what information to enter in a form field.
> Source: https://service-manual.nhs.uk/design-system/components/hint-text

## Overview

The hint text component provides extra guidance below a label and above an input to help users understand what to enter. It renders as a `<div>` (or `<span>` in some contexts) with the `nhsuk-hint` class, styled in a lighter grey to distinguish it from labels and error messages.

Hint text gives users context about the format, source, or purpose of the information they need to provide. Good hint text reduces errors and support queries by setting expectations before the user starts typing.

In the NHS context, hint text often includes examples of where to find information (like NHS numbers on letters) or the format expected (like date formats).

## When to use this component

Use hint text when users need additional help to answer a question. Common uses include:

- Explaining the format you need: "For example, 485 777 3456"
- Telling users where to find the information: "You can find this on any letter the NHS has sent you"
- Clarifying what to include or exclude: "Do not include personal or financial information"
- Providing context for a group of checkboxes or radios: "Select all that apply"

## When not to use this component

Do not use hint text for information that most users do not need. If the hint is essential, consider rewriting the label or question to make it self-explanatory.

Do not use hint text for long or complex instructions. Keep it brief — ideally one sentence. If you need more than a sentence, consider placing the extra guidance on a separate page or in expandable details.

Do not rely on hint text to convey critical validation rules — users may overlook it.

## How it works

Hint text renders as `<div id="[input-id]-hint" class="nhsuk-hint">`. The associated input's `aria-describedby` attribute references the hint's `id`, so screen readers read it when the input receives focus.

For form components (text input, textarea, radios, checkboxes, date input, select), the hint object integrates directly through the `hint` parameter. The Nunjucks macros handle the `aria-describedby` association automatically.

When hint text appears on individual radios or checkboxes, the hint element sits beneath the option label and uses the same pattern.

## Code examples

### On a text input

#### HTML

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="nhs-number">
    What is your NHS number?
  </label>
  <div id="nhs-number-hint" class="nhsuk-hint">
    Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example, 485 777 3456.
  </div>
  <input class="nhsuk-input" id="nhs-number" name="nhs-number" type="text" aria-describedby="nhs-number-hint">
</div>
```

#### Nunjucks

```njk
{{ input({
  id: "nhs-number",
  name: "nhs-number",
  label: {
    text: "What is your NHS number?"
  },
  hint: {
    text: "Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example, 485 777 3456."
  }
}) }}
```

### On a radio group

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
  hint: {
    text: "We need this so we can send you appointment confirmations."
  },
  items: [
    { value: "email", text: "Email" },
    { value: "phone", text: "Phone" },
    { value: "text", text: "Text message" }
  ]
}) }}
```

### On a checkbox group

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
    { value: "tiredness", text: "Tiredness" }
  ]
}) }}
```

### On individual radio items

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

## Nunjucks macro options

The hint text is not a standalone macro in NHS UK Frontend. It integrates into other components through the `hint` parameter. The hint object accepts:

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes (or html) | Text for the hint. |
| `html` | string | Yes (or text) | HTML for the hint. If provided, `text` is ignored. |
| `id` | string | No | Custom `id` for the hint element. Defaults to `[input-id]-hint`. |
| `classes` | string | No | Classes to add to the hint element. |
| `attributes` | object | No | HTML attributes for the hint element. |

## Error messages

The hint text component does not have its own error messages. It works alongside error messages on form components.

## Accessibility

- Hint text connects to the input through `aria-describedby`, so screen readers read the hint when the input receives focus.
- Do not rely on hint text as the only way to communicate essential information — some users skip it.
- Keep hint text brief. Long hints are harder for screen reader users to remember while filling in the field.
- Do not use hint text that duplicates the label — if the label is "Email address", do not hint "Enter your email address".
- Hint text uses a lighter colour than labels. Ensure the colour contrast meets WCAG 2.2 AA standards (at least 4.5:1 for normal-sized text).

## Do and do not

**Do:**
- Keep hints to one sentence where possible.
- Use examples to show the expected format: "For example, 485 777 3456".
- Tell users where to find information: "You can find this on any letter the NHS has sent you."
- Use "Select all that apply" for checkbox groups.

**Do not:**
- Do not write hints that repeat the label.
- Do not use hints for long instructions — put those on a separate page or in expandable details.
- Do not rely on hint text for critical validation rules that the label should convey.
- Do not use hint text on every field — only add it when users need extra help.

## Related components and patterns

- [Text Input](../text-input/SKILLS.md) — uses `hint` parameter for hint text.
- [Textarea](../textarea/SKILLS.md) — uses `hint` parameter.
- [Radios](../radios/SKILLS.md) — supports hints on the group and on individual items.
- [Checkboxes](../checkboxes/SKILLS.md) — supports hints on the group and on individual items.
- [Date Input](../date-input/SKILLS.md) — uses `hint` for format examples.
- [Error Message](../error-message/SKILLS.md) — appears alongside hint text in the error state.
