---
category: patterns
description: Use this pattern when you need to collect equality information from users to track bias or meet legal requirements — always making clear why you collect the data and that answering is optional.
govuk-frontend: "5.x"
keywords:
  - "diversity"
  - "equality"
  - "equality information"
  - "equality monitoring"
  - "information"
  - "protected characteristics"
last-reviewed: "2026-04-03"
name: Equality Information
source: "https://design-system.service.gov.uk/patterns/equality-information/"
subcategory: ask-users-for
---

# Equality Information

> Use this pattern when you need to collect equality information from users to track bias or meet legal requirements — always making clear why you collect the data and that answering is optional.
> Source: https://design-system.service.gov.uk/patterns/equality-information/

## Overview

The equality information pattern provides guidance on collecting sensitive personal information related to protected characteristics under the Equality Act 2010, such as sex, gender identity, ethnicity, disability, religion, and sexual orientation. The law may require government services to track the diversity of their users to ensure equal access and to identify and address potential discrimination.

This information is personal and sensitive. Users are often uncomfortable sharing it, especially if the reason is not clear. The pattern emphasises transparency — always explain why you are asking, who will see the data, and how you will use it. Crucially, equality monitoring questions must always be optional.

The GOV.UK Design System does not provide a single template for every equality question, as the categories and wording vary depending on your service's specific monitoring requirements and the relevant census or government standards. It provides principles and examples to follow when designing these questions.

## When to use this pattern

- When your organisation has a legal obligation to track diversity under the Equality Act 2010 or Public Sector Equality Duty (PSED).
- When your service wants to understand whether it serves all groups of users equitably.
- When your organisation needs to report on diversity and inclusion data.
- When users may benefit from services tailored to their specific protected characteristics.

## When not to use this pattern

- Do not collect equality information unless you have a specific, lawful, and proportionate reason to do so.
- Do not make equality information mandatory — these questions must always be optional.
- Do not use equality information to make eligibility decisions unless there is a specific legal basis.
- Do not embed equality questions in the middle of a transactional service flow where they could appear to affect the outcome. Separate them from eligibility or service questions.

## How it works

### Keep equality questions separate

Present equality monitoring questions separately from the main service flow — for example, at the end of a transaction, or in a separate section labelled as optional monitoring questions. Users must not feel that their answers will affect the outcome of their application or transaction.

### Always explain why

Tell users why you are collecting this information and what you will do with it. Typical explanations include:

- "We collect this information to make sure the service is working fairly for all groups of people."
- "Your answers will not affect your [application / claim / registration]."
- "We use the information anonymously to track equality."

### Always make questions optional

Every equality question must be optional. Always include a "Prefer not to say" option for every question. Where the question uses a text input, make the field optional and label it as "(optional)".

### Use the standard government categories

Use the categories from the most recent census (England and Wales Census, Scotland's Census, or the corresponding categories for Northern Ireland) or from your organisation's approved equality monitoring framework. The government refreshes these over time to ensure comparability with national data.

Common categories include:

**Sex:**
- Female
- Male
- Prefer not to say

**Gender identity (is your gender the same as the sex registered at birth?):**
- Yes
- No
- Prefer not to say

**Age:** typically collected as age ranges or year of birth.

**Ethnicity:** use the ONS ethnic group categories or your organisation's approved list.

**Disability:**
- Yes
- No
- Prefer not to say

**Religion or belief:** use ONS religion categories.

**Sexual orientation:**
- Heterosexual or straight
- Gay or lesbian
- Bisexual
- Other (please describe)
- Prefer not to say

### Use radios for categorical questions

Use radio buttons for questions with a fixed set of options. Always include a "Prefer not to say" option. If a question has a large number of options (for example, ethnicity), consider grouping options under sub-headings or using a select component — but prefer radios where possible.

For "Other" options, provide a conditional text input to allow users to describe their identity in their own words.

## Code Examples

### Sex question

#### HTML

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
      <h2 class="govuk-fieldset__heading">
        What is your sex?
      </h2>
    </legend>
    <div id="sex-hint" class="govuk-hint">
      This information helps us make sure the service is working fairly for everyone.
    </div>
    <div class="govuk-radios" data-module="govuk-radios">
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="sex" name="sex" type="radio" value="female">
        <label class="govuk-label govuk-radios__label" for="sex">
          Female
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="sex-2" name="sex" type="radio" value="male">
        <label class="govuk-label govuk-radios__label" for="sex-2">
          Male
        </label>
      </div>
      <div class="govuk-radios__divider">or</div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="sex-3" name="sex" type="radio" value="prefer-not-to-say">
        <label class="govuk-label govuk-radios__label" for="sex-3">
          Prefer not to say
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks

```njk
{{ govukRadios({
  name: "sex",
  fieldset: {
    legend: {
      text: "What is your sex?",
      classes: "govuk-fieldset__legend--m",
      isPageHeading: false
    }
  },
  hint: {
    text: "This information helps us make sure the service is working fairly for everyone."
  },
  items: [
    {
      value: "female",
      text: "Female"
    },
    {
      value: "male",
      text: "Male"
    },
    {
      divider: "or"
    },
    {
      value: "prefer-not-to-say",
      text: "Prefer not to say"
    }
  ]
}) }}
```

### Disability question

#### HTML

```html
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
      <h2 class="govuk-fieldset__heading">
        Do you have any physical or mental health conditions or illnesses lasting or expected to last 12 months or more?
      </h2>
    </legend>
    <div class="govuk-radios">
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="disability" name="disability" type="radio" value="yes">
        <label class="govuk-label govuk-radios__label" for="disability">
          Yes
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="disability-2" name="disability" type="radio" value="no">
        <label class="govuk-label govuk-radios__label" for="disability-2">
          No
        </label>
      </div>
      <div class="govuk-radios__divider">or</div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="disability-3" name="disability" type="radio" value="prefer-not-to-say">
        <label class="govuk-label govuk-radios__label" for="disability-3">
          Prefer not to say
        </label>
      </div>
    </div>
  </fieldset>
</div>
```

#### Nunjucks

```njk
{{ govukRadios({
  name: "disability",
  fieldset: {
    legend: {
      text: "Do you have any physical or mental health conditions or illnesses lasting or expected to last 12 months or more?",
      classes: "govuk-fieldset__legend--m"
    }
  },
  items: [
    {
      value: "yes",
      text: "Yes"
    },
    {
      value: "no",
      text: "No"
    },
    {
      divider: "or"
    },
    {
      value: "prefer-not-to-say",
      text: "Prefer not to say"
    }
  ]
}) }}
```

### Ethnicity question (with conditional reveal for "Other")

#### Nunjucks

```njk
{{ govukRadios({
  name: "ethnicity",
  fieldset: {
    legend: {
      text: "What is your ethnic group?",
      classes: "govuk-fieldset__legend--m"
    }
  },
  hint: {
    text: "Choose the option that best describes your ethnic group or background."
  },
  items: [
    {
      value: "asian-or-asian-british",
      text: "Asian or Asian British"
    },
    {
      value: "black-african-caribbean-or-black-british",
      text: "Black, African, Caribbean or Black British"
    },
    {
      value: "mixed-or-multiple-ethnic-groups",
      text: "Mixed or multiple ethnic groups"
    },
    {
      value: "white",
      text: "White"
    },
    {
      value: "other-ethnic-group",
      text: "Other ethnic group",
      conditional: {
        html: govukInput({
          label: { text: "Please describe your ethnic group" },
          id: "ethnicity-other",
          name: "ethnicityOther"
        }) | safe
      }
    },
    {
      divider: "or"
    },
    {
      value: "prefer-not-to-say",
      text: "Prefer not to say"
    }
  ]
}) }}
```

## Error Messages

Because all equality questions are optional, you should not show validation errors for unanswered equality questions. However, if a user selects "Other" and the conditional text field appears, you may wish to encourage (but not require) them to complete it.

If you make a question optional and the user submits without answering, treat the value as "Not answered" or "Prefer not to say" on the back end — do not show an error.

## Accessibility

- Use `<fieldset>` and `<legend>` for all radio button groups.
- The "Prefer not to say" option should always be visually and semantically separated (using a divider) from the substantive options, making it a distinct choice.
- If using conditional reveal for "Other" free-text fields, use the GOV.UK Frontend `data-module="govuk-radios"` attribute to ensure accessible JavaScript-driven reveal.
- Associate hint text explaining why you collect the data with the fieldset via `aria-describedby`.
- Do not use colour alone to show whether a question is optional.

## Do and Do not

**Do:**
- Always make equality questions optional.
- Always include a "Prefer not to say" option.
- Explain why you are collecting equality information and how you will use it.
- Separate equality questions from the main service flow.
- Use the most up-to-date census categories for your jurisdiction.
- Use a divider to visually separate "Prefer not to say" from other options.
- Allow users to describe their own identity in their own words for "Other" options.

**Do not:**
- Do not make equality questions mandatory.
- Do not embed equality questions in the middle of transactional flows.
- Do not use equality information to determine eligibility or outcomes.
- Do not use outdated or non-standard categories that users cannot relate to.
- Do not ask for more information than you will actually use.
- Do not use gendered language in your service that could make non-binary or trans users feel excluded.

## Related Components / Patterns

- [../../components/radios/SKILLS.md](../../components/radios/SKILLS.md)
- [../../components/checkboxes/SKILLS.md](../../components/checkboxes/SKILLS.md)
- [../../components/fieldset/SKILLS.md](../../components/fieldset/SKILLS.md)
- [../../components/text-input/SKILLS.md](../../components/text-input/SKILLS.md)
- [../names/SKILLS.md](../names/SKILLS.md)
