---
category: patterns
description: Use this pattern when an HMRC service needs explicit user consent for data sharing, communication preferences, or other choices that require informed agreement.
keywords:
  - "checkboxes"
  - "consent"
  - "data sharing"
  - "GDPR"
  - "opt-in"
  - "permission"
  - "privacy"
last-reviewed: "2026-04-03"
name: Ask the user for their consent
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/ask-the-user-for-their-consent/"
subcategory: service
---

# Ask the user for their consent

> Use this pattern when an HMRC service needs explicit user consent for data sharing, communication preferences, or other choices that require informed agreement.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/ask-the-user-for-their-consent/

## Overview

This pattern collects explicit consent from users. HMRC services sometimes need users to agree to data sharing, receiving communications, or other actions that require informed agreement.

Use checkboxes for consent, not radios. Checkboxes require users to take an active step — they must check the box to give consent. This meets the GDPR requirement for consent to involve a clear affirmative action.

The consent question must explain what the user agrees to in plain language. Do not hide important details behind links or legal jargon. Give users enough information on the page to make an informed decision.

## When to use

- When a service needs explicit user consent before sharing data with a third party.
- When a service offers optional communications (for example, email updates about a tax return).
- When a service needs users to confirm they understand and agree to specific terms.
- When consent is a legal or regulatory requirement (for example, GDPR).

## When not to use

- Do not use this pattern for mandatory actions that the user cannot opt out of — state those as facts (for example, "We will send you a confirmation letter").
- Do not use this pattern for terms and conditions that apply to everyone using the service — use a declaration pattern instead.
- Do not use checkboxes to confirm that information is correct — use the GOV.UK check answers pattern.

## How it works

### Consent question structure

1. Use a heading that states what the consent is for (for example, "Sharing your details with your agent").
2. Explain in body text what the user agrees to and what happens if they give or withhold consent.
3. Show one or more checkboxes, each describing a specific consent item.
4. Do not pre-check any consent checkbox. The user must take an active step.

### Single consent item

For a single consent choice, use one checkbox. The label must describe what the user agrees to in full.

### More than one consent item

When users can give consent to more than one item independently (for example, email contact and postal contact), show each item as a separate checkbox. Group the checkboxes in a `<fieldset>` with a `<legend>` describing the group question.

### What happens without consent

Tell users what happens if they do not give consent. For example: "If you do not agree, we will not share your details and your agent will not have access to your tax records."

## Code Examples

### Single consent checkbox

#### HTML

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
      <h1 class="govuk-fieldset__heading">
        Do you agree to share your details with your agent?
      </h1>
    </legend>
    <p class="govuk-body">
      If you agree, we will share your name, address, and Unique Taxpayer Reference with your agent so they can manage your tax affairs.
    </p>
    <p class="govuk-body">
      If you do not agree, your agent will not have access to your tax records through this service.
    </p>
    <div class="govuk-checkboxes" data-module="govuk-checkboxes">
      <div class="govuk-checkboxes__item">
        <input class="govuk-checkboxes__input" id="consent" name="consent" type="checkbox" value="yes">
        <label class="govuk-label govuk-checkboxes__label" for="consent">
          I agree to share my details with my agent
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks

```njk
{{ govukCheckboxes({
  name: "consent",
  fieldset: {
    legend: {
      text: "Do you agree to share your details with your agent?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    {
      value: "yes",
      text: "I agree to share my details with my agent"
    }
  ]
}) }}
```

### Communication preferences with separate consent items

#### Nunjucks

```njk
{{ govukCheckboxes({
  name: "contactPreferences",
  fieldset: {
    legend: {
      text: "How would you like us to contact you about your tax return?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  hint: {
    text: "Select all that apply. We will only use these methods to send you updates about your tax return."
  },
  items: [
    {
      value: "email",
      text: "Email"
    },
    {
      value: "text",
      text: "Text message"
    }
  ]
}) }}
```

### With error message

#### Nunjucks

```njk
{{ govukCheckboxes({
  name: "consent",
  fieldset: {
    legend: {
      text: "Do you agree to share your details with your agent?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  errorMessage: {
    text: "Select whether you agree to share your details with your agent"
  },
  items: [
    {
      value: "yes",
      text: "I agree to share my details with my agent"
    }
  ]
}) }}
```

## Error Messages

- When the user does not select a required consent checkbox: "Select whether you agree to [specific action]"
- When the user does not select any communication preference and the service requires at least one: "Select how you would like us to contact you"

## Accessibility

- Wrap consent checkboxes in a `<fieldset>` with a `<legend>` so screen readers announce the question before the options.
- Do not rely on surrounding body text alone to convey the purpose of the checkbox — the label text must make sense on its own.
- Do not pre-check consent checkboxes. Pre-checked consent boxes create a barrier for users who do not notice the pre-selection and unintentionally give consent.
- Error messages must link to the first checkbox using `aria-describedby`.
- The explanatory text about what consent means should sit before the checkboxes in the DOM order so screen readers encounter it first.

## Do and Do not

**Do:**
- Use checkboxes for consent — they require an active step from the user.
- Explain what the user agrees to in plain language on the same page.
- Tell users what happens if they do not give consent.
- Make each checkbox label describe the specific consent item in full.
- Treat consent as a separate question on its own page where possible.

**Do not:**
- Do not pre-check consent checkboxes.
- Do not use radios for consent — radios force a selection, which removes the "no action taken" default.
- Do not bundle unrelated consent items into a single checkbox.
- Do not hide important consent details behind links or expandable sections.
- Do not use legal jargon — explain consent in plain English.
- Do not use consent checkboxes to confirm that information is correct.

## Related Components / Patterns

- [../../../govuk-design-system/components/checkboxes/SKILLS.md](../../../govuk-design-system/components/checkboxes/SKILLS.md)
- [../../../govuk-design-system/components/radios/SKILLS.md](../../../govuk-design-system/components/radios/SKILLS.md)
- [../../../govuk-design-system/components/error-message/SKILLS.md](../../../govuk-design-system/components/error-message/SKILLS.md)
- [../../../govuk-design-system/components/fieldset/SKILLS.md](../../../govuk-design-system/components/fieldset/SKILLS.md)
- [../../../govuk-design-system/patterns/help-users-to/check-answers/SKILLS.md](../../../govuk-design-system/patterns/help-users-to/check-answers/SKILLS.md)
