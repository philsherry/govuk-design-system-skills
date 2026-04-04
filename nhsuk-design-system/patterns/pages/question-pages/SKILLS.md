---
category: patterns
description: Ask users a question on its own page so they can focus on answering it without distraction.
keywords:
  - "ask a question"
  - "form page"
  - "one thing per page"
  - "question"
  - "question pages"
last-reviewed: "2026-04-03"
name: Question pages
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/patterns/question-pages"
subcategory: pages
---

# Question pages

> Ask users a question on its own page so they can focus on answering it without distraction.
> Source: <https://service-manual.nhs.uk/design-system/patterns/question-pages>

## Overview

Question pages are the primary building blocks of transactional NHS services. Each page asks users one question — or a set of related questions — and they answer before moving to the next step. This "one thing per page" approach reduces cognitive load, makes error handling precise, allows users to save progress and resume later, and makes analytics more informative.

## When to use this pattern

- For every question in a transactional service.
- When asking users for information to complete a task (register, book, report, and so on).
- When you need to validate each answer before proceeding.
- When different answers may lead users down different paths through the service.

## When not to use this pattern

- Do not use a question page layout for informational pages that do not ask anything.
- Do not use a question page when the user only reviews information — use a check answers page.
- Do not cram more than one unrelated question onto one page to "save steps" — keep questions focused.

Sometimes grouping related questions makes sense (for example, first name and last name on a single page) when separating them would feel awkward. But the default should always be one question per page.

## How it works

### One thing per page

Each question page should ask for one piece of information. Exceptions apply when:

- The questions relate to each other and separating them would feel awkward (e.g. name components).
- The page collects structured data where all fields belong to one concept (e.g. a UK address).

### Page structure

A question page must have:

1. An `<h1>` that is the question — or the fieldset legend as the `<h1>` for radio and checkbox groups.
2. Optional hint text below the label or legend for extra explanation.
3. The form control (text input, radios, checkboxes, date input, etc.).
4. A continue button labelled "Continue" (unless the action is more specific).
5. Optionally, a back link to the previous page.

### Making the label or legend the page heading

To avoid redundancy, NHS UK Frontend allows you to set the label or fieldset legend as the `<h1>` of the page. This means the question appears once — not as a separate heading and then again as a label.

For a single text input, wrap the `<label>` in an `<h1>` using `isPageHeading: true` in the Nunjucks macro.

For radios and checkboxes, set `isPageHeading: true` on the fieldset legend.

### Page title

- The page `<title>` should be "[Question text] - [Service name] - NHS"
- In error state: "Error: [Question text] - [Service name] - NHS"

### Back links

Include a back link if users have come from a previous step. Do not show a back link on the first page of a service or on a confirmation page.

### Buttons

Use "Continue" as the button label for most question pages. Only use a different label when the action is final ("Submit registration", "Confirm and send") or the service has a save point ("Save and continue"). Do not use "Next" or "Submit" as generic button labels.

## Code examples

### HTML — single question, label as page heading

```html
<form method="post" novalidate>
  <div class="nhsuk-form-group">
    <h1 class="nhsuk-label-wrapper">
      <label class="nhsuk-label nhsuk-label--l" for="full-name">
        What is your full name?
      </label>
    </h1>
    <input class="nhsuk-input" id="full-name" name="fullName" type="text" autocomplete="name">
  </div>
  <button class="nhsuk-button" type="submit">
    Continue
  </button>
</form>
```

### HTML — radios, legend as page heading

```html
<form method="post" novalidate>
  <div class="nhsuk-form-group">
    <fieldset class="nhsuk-fieldset">
      <legend class="nhsuk-fieldset__legend nhsuk-fieldset__legend--l">
        <h1 class="nhsuk-fieldset__heading">
          How would you like us to contact you?
        </h1>
      </legend>
      <div class="nhsuk-radios">
        <div class="nhsuk-radios__item">
          <input class="nhsuk-radios__input" id="contact-email" name="contact" type="radio" value="email">
          <label class="nhsuk-label nhsuk-radios__label" for="contact-email">Email</label>
        </div>
        <div class="nhsuk-radios__item">
          <input class="nhsuk-radios__input" id="contact-phone" name="contact" type="radio" value="phone">
          <label class="nhsuk-label nhsuk-radios__label" for="contact-phone">Phone</label>
        </div>
        <div class="nhsuk-radios__item">
          <input class="nhsuk-radios__input" id="contact-text" name="contact" type="radio" value="text">
          <label class="nhsuk-label nhsuk-radios__label" for="contact-text">Text message</label>
        </div>
      </div>
    </fieldset>
  </div>
  <button class="nhsuk-button" type="submit">
    Continue
  </button>
</form>
```

### Nunjucks — single question

```njk
<form method="post" novalidate>
  {{ input({
    label: {
      text: "What is your full name?",
      classes: "nhsuk-label--l",
      isPageHeading: true
    },
    id: "full-name",
    name: "fullName",
    autocomplete: "name"
  }) }}

  {{ button({
    text: "Continue"
  }) }}
</form>
```

### Nunjucks — radios

```njk
<form method="post" novalidate>
  {{ radios({
    name: "contact",
    fieldset: {
      legend: {
        text: "How would you like us to contact you?",
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

  {{ button({
    text: "Continue"
  }) }}
</form>
```

## Accessibility

- Always make the label or fieldset legend the `<h1>` of the page (`isPageHeading: true`) — this removes redundancy and ensures screen reader users hear the question once as the page heading.
- The Error summary must appear before the form and link directly to the field in error using `href="#[field-id]"`.
- In error state, the page `<title>` must start with "Error: " so screen reader users hear the error before the page content.
- Use `novalidate` on `<form>` elements to prevent browser-native validation interfering with NHS validation patterns.
- Use `autocomplete` attributes on relevant inputs to meet WCAG SC 1.3.5 (Identify Input Purpose).
- Do not use placeholder text — it disappears on input and has poor contrast.

## Do and do not

**Do:**

- Ask one question per page as the default.
- Make the label or legend the page heading (`isPageHeading: true`).
- Place labels directly above inputs.
- Use hint text for extra explanation.
- Mark optional fields as "(optional)" in the label.
- Use "Continue" as the primary button label.
- Show an Error summary at the top of the page when validation fails.
- Prefix the page `<title>` with "Error: " when the page has errors.

**Do not:**

- Put more than one unrelated question on one page.
- Use placeholder text in inputs.
- Use "Submit" or "Next" as the button label unless the context demands it.
- Use client-side only validation — always validate on the server.
- Add a separate `<h1>` when the label or legend is already the page heading.
- Disable the submit button to prevent double submission.

## Related components and patterns

- [Text input component](https://service-manual.nhs.uk/design-system/components/text-input)
- [Radios component](https://service-manual.nhs.uk/design-system/components/radios)
- [Checkboxes component](https://service-manual.nhs.uk/design-system/components/checkboxes)
- [Date input component](https://service-manual.nhs.uk/design-system/components/date-input)
- [Error summary component](https://service-manual.nhs.uk/design-system/components/error-summary)
- [Error message component](https://service-manual.nhs.uk/design-system/components/error-message)
- [Back link component](https://service-manual.nhs.uk/design-system/components/back-link)
- [Button component](https://service-manual.nhs.uk/design-system/components/buttons)
- [Confirmation page pattern](../confirmation-page/SKILLS.md)
