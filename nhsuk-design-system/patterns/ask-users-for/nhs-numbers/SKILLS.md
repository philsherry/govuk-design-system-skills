---
category: patterns
description: Ask users for their 10-digit NHS number and help them find it if they do not know it.
keywords:
  - "NHS number"
  - "nhs"
  - "nhs numbers"
  - "numbers"
  - "patient number"
  - "ten digit"
last-reviewed: "2026-04-03"
name: NHS numbers
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/patterns/ask-users-for-their-nhs-number"
subcategory: ask-users-for
---

# NHS numbers

> Ask users for their 10-digit NHS number and help them find it if they do not know it.
> Source: <https://service-manual.nhs.uk/design-system/patterns/ask-users-for-their-nhs-number>

## Overview

An NHS number is a unique 10-digit number assigned to every patient registered with the NHS in England, Wales, and the Isle of Man. Services sometimes need this number to look up patient records, verify identity, or link data across NHS systems.

Not all users know their NHS number. Your service must help users find it and handle the case where they cannot provide one.

## When to use this pattern

- When your service needs the NHS number to retrieve a patient record or link data.
- When identity verification requires the NHS number as one of the matching criteria.

## When not to use this pattern

- Do not ask for an NHS number unless your service needs it. If you can identify the user through other means (such as PDS lookup by name and date of birth), do not add an extra question.
- Do not use this pattern for staff identifiers — NHS numbers belong to patients only.

## How it works

### Formatting

NHS numbers contain 10 digits. Display them in a 3, 3, 4 format for readability:

```text
485 777 3456
```

Accept input with or without spaces. Strip non-numeric characters before validation.

### Label and hint text

Use a clear question as the label. Provide hint text that tells users where to find their NHS number:

- on a letter from the NHS or their GP
- on a prescription
- by logging in to the NHS App

### Validation

- The NHS number must be exactly 10 digits (after removing spaces and non-numeric characters).
- Apply the modulus 11 check digit algorithm to validate the number.
- If the number fails validation, show an error message explaining what went wrong.

### What if the user does not know their NHS number

Provide a way for users to continue without an NHS number. Options include:

- A link to find their NHS number through the NHS website or NHS App.
- An alternative path that looks up the patient by name, date of birth, and postcode.
- A "I do not know my NHS number" option that routes users to an alternative verification method.

## Code Examples

### HTML

```html
<form method="post" novalidate>
  <div class="nhsuk-form-group">
    <h1 class="nhsuk-label-wrapper">
      <label class="nhsuk-label nhsuk-label--l" for="nhs-number">
        What is your NHS number?
      </label>
    </h1>
    <div class="nhsuk-hint" id="nhs-number-hint">
      <p>Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example, 485 777 3456.</p>
      <p>
        <a class="nhsuk-link" href="https://www.nhs.uk/nhs-services/online-services/find-nhs-number/">
          Find your NHS number
        </a>
      </p>
    </div>
    <input class="nhsuk-input nhsuk-input--width-10" id="nhs-number" name="nhsNumber" type="text" inputmode="numeric" pattern="[0-9 ]*" aria-describedby="nhs-number-hint" autocomplete="off" spellcheck="false">
  </div>
  <button class="nhsuk-button" type="submit">
    Continue
  </button>
</form>
```

### Nunjucks

```njk
<form method="post" novalidate>
  {{ input({
    label: {
      text: "What is your NHS number?",
      classes: "nhsuk-label--l",
      isPageHeading: true
    },
    hint: {
      html: '<p>Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example, 485 777 3456.</p><p><a class=\"nhsuk-link\" href=\"https://www.nhs.uk/nhs-services/online-services/find-nhs-number/\">Find your NHS number</a></p>'
    },
    id: "nhs-number",
    name: "nhsNumber",
    classes: "nhsuk-input--width-10",
    inputmode: "numeric",
    pattern: "[0-9 ]*",
    autocomplete: "off",
    spellcheck: false
  }) }}

  {{ button({
    text: "Continue"
  }) }}
</form>
```

### Error state

```njk
<form method="post" novalidate>
  {{ input({
    label: {
      text: "What is your NHS number?",
      classes: "nhsuk-label--l",
      isPageHeading: true
    },
    hint: {
      html: '<p>Your NHS number is a 10 digit number that you find on any letter the NHS has sent you. For example, 485 777 3456.</p>'
    },
    errorMessage: {
      text: "Enter your NHS number using 10 digits"
    },
    id: "nhs-number",
    name: "nhsNumber",
    classes: "nhsuk-input--width-10 nhsuk-input--error",
    inputmode: "numeric",
    pattern: "[0-9 ]*"
  }) }}

  {{ button({
    text: "Continue"
  }) }}
</form>
```

## Accessibility

- Use `inputmode="numeric"` to trigger the numeric keyboard on mobile devices. Do not use `type="number"` — it adds increment arrows and strips leading zeros.
- Link the hint text to the input with `aria-describedby`.
- In error state, the error message must also link to the input via `aria-describedby`.
- The page `<title>` must include "Error: " as a prefix when validation fails.
- Provide the "Find your NHS number" link as part of the hint, not hidden behind a disclosure.

## Do and Do not

**Do:**

- Display the NHS number in 3, 3, 4 format (485 777 3456) for readability.
- Accept input with or without spaces.
- Validate using the modulus 11 check digit algorithm.
- Tell users where to find their NHS number.
- Provide an alternative path for users who do not know their number.

**Do not:**

- Ask for an NHS number when your service does not need one.
- Reject input that contains spaces — strip spaces before validation.
- Use `type="number"` — it causes usability problems on mobile.
- Store or display NHS numbers without appropriate data protection measures.
- Assume all users have an NHS number (some users may be exempt or unregistered).

## Related Components / Patterns

- [Question pages pattern](../../pages/question-pages/SKILLS.md)
- [Check answers pattern](../../help-users-to/check-answers/SKILLS.md)
- [Error message component](https://service-manual.nhs.uk/design-system/components/error-message)
- [Error summary component](https://service-manual.nhs.uk/design-system/components/error-summary)
- [Text input component](https://service-manual.nhs.uk/design-system/components/text-input)
