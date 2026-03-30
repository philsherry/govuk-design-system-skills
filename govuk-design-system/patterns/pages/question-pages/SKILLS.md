---
category: patterns
description: Ask users a question on its own page so they can focus on answering it without distraction.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Question pages
subcategory: pages
---

# Question pages

> Ask users a question on its own page so they can focus on answering it without distraction.
> Source: https://design-system.service.gov.uk/patterns/question-pages/

---

## Overview

Question pages are the primary building blocks of transactional GOV.UK services. Each page asks users one question — or a set of related questions — and they answer before moving to the next step. This "one thing per page" approach is a core GOV.UK design principle.

Asking questions one at a time reduces cognitive load, makes it easier to handle errors precisely, allows users to save progress and resume later, and makes analytics more informative (you can see where users drop off). It also makes the service usable on small screens without long, complex form pages.

## When to use this pattern

- For every question in a transactional service
- When asking users for information to complete a task (apply, register, report, pay, and so on)
- When you need to validate each answer before proceeding
- When different answers may lead users down different paths through the service

## When not to use

- Do not use a question page layout for informational pages that do not ask anything
- Do not use a question page when the user is only reviewing information — use a check answers page
- Do not cram more than one unrelated question onto one page to "save steps" — keep questions focused

Sometimes it makes sense to group related questions together (for example, first name, last name, and title on a single page) when separating them would feel strange or patronising. But the default should always be one question per page.

## How it works

### One thing per page

Each question page should ask for one piece of information. Exceptions apply when:
- Questions are so interrelated that separating them would be awkward (for example, name components)
- The page is a structured data-entry form where all fields belong to one concept (for example, a UK address)

### Page structure

A question page must have:

1. An H1 that is the question — or the fieldset legend as the H1 for radio and checkbox groups
2. Optional hint text below the label or legend for extra explanation
3. The form control (text input, radios, checkboxes, date input, etc.)
4. A continue button labelled "Continue" (unless the action is more specific)
5. Optionally, a back link to the previous page

### Making the label or legend the page heading

To avoid redundancy, GOV.UK Frontend allows you to set the label or fieldset legend as the `<h1>` of the page. This means the question appears once — not as a separate heading and then again as a label.

For a single text input, wrap the `<label>` in an `<h1>` using `isPageHeading: true` in the Nunjucks macro.

For radios and checkboxes, set `isPageHeading: true` on the fieldset legend — this places the `<h1>` inside the `<legend>`.

### Labels and hint text

- Labels should be directly above inputs, not inline or as placeholder text
- Do not use placeholder text — it disappears when users start typing and has poor contrast
- Use hint text for extra explanation, not for examples that belong in the label
- Mark optional fields as "(optional)" in the label text — do not mark required fields as "(required)"

### Page title

- The page `<title>` should be "[Question text] – [Service name] – GOV.UK"
- In error state: "Error: [Question text] – [Service name] – GOV.UK"

### Back links

Include a back link if users have come from a previous step in the service. Do not show a back link on the first page of a service or on a confirmation page. The back link should go to the previous step, not necessarily the browser history.

### Buttons

Use "Continue" as the button label for most question pages. Only use a different label when the action is final and irreversible (for example, "Submit application", "Confirm and pay") or the service has a defined save point ("Save and continue"). Do not use "Next" or "Submit" as generic button labels.

## Code Examples

### HTML

Single question — label as page heading:

```html
<form method="post" novalidate>
  <div class="govuk-form-group">
    <h1 class="govuk-label-wrapper">
      <label class="govuk-label govuk-label--l" for="full-name">
        What is your full name?
      </label>
    </h1>
    <input class="govuk-input" id="full-name" name="fullName" type="text" autocomplete="name">
  </div>
  <button class="govuk-button" data-module="govuk-button" type="submit">
    Continue
  </button>
</form>
```

Radios — legend as page heading:

```html
<form method="post" novalidate>
  <div class="govuk-form-group">
    <fieldset class="govuk-fieldset">
      <legend class="govuk-fieldset__legend govuk-fieldset__legend--l">
        <h1 class="govuk-fieldset__heading">
          Where do you live?
        </h1>
      </legend>
      <div class="govuk-radios" data-module="govuk-radios">
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="where-do-you-live" name="whereDoYouLive" type="radio" value="england">
          <label class="govuk-label govuk-radios__label" for="where-do-you-live">England</label>
        </div>
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="where-do-you-live-2" name="whereDoYouLive" type="radio" value="scotland">
          <label class="govuk-label govuk-radios__label" for="where-do-you-live-2">Scotland</label>
        </div>
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="where-do-you-live-3" name="whereDoYouLive" type="radio" value="wales">
          <label class="govuk-label govuk-radios__label" for="where-do-you-live-3">Wales</label>
        </div>
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="where-do-you-live-4" name="whereDoYouLive" type="radio" value="northern-ireland">
          <label class="govuk-label govuk-radios__label" for="where-do-you-live-4">Northern Ireland</label>
        </div>
      </div>
    </fieldset>
  </div>
  <button class="govuk-button" data-module="govuk-button" type="submit">
    Continue
  </button>
</form>
```

### Nunjucks

Single question — label as page heading:

```njk
<form method="post" novalidate>
  {{ govukInput({
    label: {
      text: "What is your full name?",
      classes: "govuk-label--l",
      isPageHeading: true
    },
    id: "full-name",
    name: "fullName",
    autocomplete: "name"
  }) }}

  {{ govukButton({
    text: "Continue"
  }) }}
</form>
```

Radios — legend as page heading:

```njk
<form method="post" novalidate>
  {{ govukRadios({
    name: "whereDoYouLive",
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

  {{ govukButton({
    text: "Continue"
  }) }}
</form>
```

With hint text:

```njk
<form method="post" novalidate>
  {{ govukInput({
    label: {
      text: "What is your National Insurance number?",
      classes: "govuk-label--l",
      isPageHeading: true
    },
    hint: {
      text: "It's on your National Insurance card, benefit letter, payslip or P60. For example, 'QQ 12 34 56 C'."
    },
    id: "national-insurance-number",
    name: "nationalInsuranceNumber",
    classes: "govuk-input--width-10",
    spellcheck: false
  }) }}

  {{ govukButton({
    text: "Continue"
  }) }}
</form>
```

## Accessibility

- Always make the label or fieldset legend the `<h1>` of the page (`isPageHeading: true`) — this removes redundancy and ensures screen reader users hear the question once as the page heading
- The Error summary must appear before the form and link directly to the field in error using `href="#[field-id]"`
- In error state, the page `<title>` must start with "Error: " so screen reader users hear the error before the page content
- Use `novalidate` on `<form>` elements to prevent browser-native validation interfering with GOV.UK validation patterns
- Use `autocomplete` attributes on relevant inputs to help users with autofill and to meet WCAG 1.3.5 (Identify Input Purpose)
- Do not use placeholder text — it disappears on input and has poor contrast
- Do not disable the submit button during form submission — use `data-prevent-double-click` on the button instead

## Do / Don't

**Do:**
- Ask one thing per page as the default
- Make the label or legend the page heading (`isPageHeading: true`)
- Place labels directly above inputs
- Use hint text for extra explanation
- Mark optional fields as "(optional)" in the label
- Use "Continue" as the primary button label for most pages
- Show an Error summary at the top of the page when there are validation errors
- Prefix the page `<title>` with "Error: " when the page has errors
- Include a back link when the user has come from a previous step

**Don't:**
- Put more than one unrelated question on one page
- Use placeholder text in inputs
- Use "Submit" or "Next" as the button label unless the context demands it
- Use client-side only validation — always validate on the server
- Add a separate `<h1>` when the label or legend is already the page heading
- Disable the submit button to prevent double submission — use `data-prevent-double-click` instead
- Show error messages before the user has attempted to submit the form
- Mark required fields as "(required)" — mark optional ones as "(optional)" instead

## Related Components / Patterns

- [../../../components/text-input/SKILLS.md](../../../components/text-input/SKILLS.md)
- [../../../components/radios/SKILLS.md](../../../components/radios/SKILLS.md)
- [../../../components/checkboxes/SKILLS.md](../../../components/checkboxes/SKILLS.md)
- [../../../components/date-input/SKILLS.md](../../../components/date-input/SKILLS.md)
- [../../../components/textarea/SKILLS.md](../../../components/textarea/SKILLS.md)
- [../../../components/error-summary/SKILLS.md](../../../components/error-summary/SKILLS.md)
- [../../../components/error-message/SKILLS.md](../../../components/error-message/SKILLS.md)
- [../../../components/back-link/SKILLS.md](../../../components/back-link/SKILLS.md)
- [../../../components/button/SKILLS.md](../../../components/button/SKILLS.md)
- [../confirmation-pages/SKILLS.md](../confirmation-pages/SKILLS.md)
