---
category: patterns
description: Help users confirm they understand or agree to something before submitting information.
dwp-frontend: "3.x"
keywords:
  - "agreement"
  - "confirm"
  - "declaration"
  - "legal"
  - "submit"
  - "terms"
last-reviewed: "2026-04-04"
name: Make a declaration
source: "https://design-system.dwp.gov.uk/patterns/make-a-declaration"
---

# Make a declaration

> Help users confirm they understand or agree to something before submitting information.
> Source: <https://design-system.dwp.gov.uk/patterns/make-a-declaration>

## Overview

The "Make a declaration" pattern presents users with a statement they must acknowledge before the service processes their submission. It sits on the final page before submission and explains, in plain language, what the user agrees to and the consequences of providing false information. The pattern uses a submit button labelled with the action (such as "Agree and submit") and optionally adds a checkbox or radios for explicit recorded consent.

## When to use this pattern

Use this pattern when:

- false or inaccurate information has significant consequences, such as legal penalties or loss of benefits
- users must confirm they understand specific terms or obligations before the service processes their submission
- legislation or policy requires an explicit declaration

## When not to use this pattern

Do not use this pattern when:

- the submission has no significant consequences for inaccurate information — a standard submit button is enough
- you want to use it as a general "terms and conditions" acceptance — keep terms and conditions on a separate page

## How it works

Place the declaration on the final page before submission, after the user has reviewed their answers (using the [Check answers](https://design-system.service.gov.uk/patterns/check-answers/) pattern where appropriate).

### Declaration content

Write the declaration content to be:

- **Clear** — state what the user is agreeing to in plain language
- **Tailored to the service** — do not use generic legal text; explain the specific obligations
- **Honest about consequences** — tell users what happens if the information they provide is false

For example: "By submitting this application, you confirm that the information you have given is true and complete. If you give false or incomplete information, you may face prosecution."

### Submit button

Use a standard GOV.UK [Button](https://design-system.service.gov.uk/components/button/) with a label that describes the action, such as "Agree and submit" or "Accept and send".

### Checkboxes or radios (optional)

Some services add a [Checkbox](https://design-system.service.gov.uk/components/checkboxes/) or [Radios](https://design-system.service.gov.uk/components/radios/) to force an explicit selection before the user can submit. Use this approach when:

- the consequences of a false declaration are severe
- your legal team requires recorded consent through an active control

If you use a checkbox, label it with the declaration statement — for example: "I confirm that the information I have given is true and complete."

## Code examples

### Declaration with submit button

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h2 class="govuk-heading-m">Now submit your application</h2>
    <p class="govuk-body">
      By submitting this application, you confirm that the information you have given is true and complete.
    </p>
    <p class="govuk-body">
      If you deliberately give false or incomplete information, you may face prosecution.
    </p>

    <form method="post" novalidate>
      <button type="submit" class="govuk-button" data-module="govuk-button">
        Agree and submit
      </button>
    </form>

  </div>
</div>
```

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h2 class="govuk-heading-m">Now submit your application</h2>
    <p class="govuk-body">
      By submitting this application, you confirm that the information you have given is true and complete.
    </p>
    <p class="govuk-body">
      If you deliberately give false or incomplete information, you may face prosecution.
    </p>

    <form method="post" novalidate>
      {{ govukButton({
        text: "Agree and submit"
      }) }}
    </form>

  </div>
</div>
```

### Declaration with checkbox

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h2 class="govuk-heading-m">Declaration</h2>
    <p class="govuk-body">
      If you deliberately give false or incomplete information, you may face prosecution.
    </p>

    <form method="post" novalidate>
      <div class="govuk-form-group">
        <div class="govuk-checkboxes">
          <div class="govuk-checkboxes__item">
            <input class="govuk-checkboxes__input" id="declaration" name="declaration" type="checkbox" value="agreed">
            <label class="govuk-label govuk-checkboxes__label" for="declaration">
              I confirm that the information I have given is true and complete
            </label>
          </div>
        </div>
      </div>

      <button type="submit" class="govuk-button" data-module="govuk-button">
        Accept and send
      </button>
    </form>

  </div>
</div>
```

## Accessibility

- The declaration text must be readable and understandable. Write at a reading level appropriate for the service's audience.
- If using a checkbox, the label must contain the full declaration statement so screen reader users hear the complete commitment when they reach the control.
- The submit button must be inside a `<form>` element.
- Error messages for an unchecked declaration checkbox should read: "Select the declaration checkbox to confirm you agree."

## Do and do not

**Do:**
- Write the declaration in plain language tailored to the service — state the specific obligations.
- Tell users what happens if the information they provide is false.
- Place the declaration after the "Check answers" page, as the final step before submission.
- Label the submit button with the action, such as "Agree and submit" or "Accept and send".

**Do not:**
- Do not use generic legal text — explain the specific consequences for the service.
- Do not use this pattern as a general "terms and conditions" acceptance.
- Do not add a checkbox unless your legal team requires recorded consent through an active control.
- Do not place the declaration before users have reviewed their answers.

## Related components and patterns

- [Check answers](https://design-system.service.gov.uk/patterns/check-answers/) — place the declaration after the check answers summary
- [Button](https://design-system.service.gov.uk/components/button/) — used for the submit action
- [Checkboxes](https://design-system.service.gov.uk/components/checkboxes/) — optional explicit consent control
- [Radios](https://design-system.service.gov.uk/components/radios/) — alternative explicit consent control
- [Confirmation pages](https://design-system.service.gov.uk/patterns/confirmation-pages/) — shown after a successful submission
