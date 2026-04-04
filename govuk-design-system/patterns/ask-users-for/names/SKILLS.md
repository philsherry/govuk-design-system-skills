---
category: patterns
description: Use this pattern to ask users for their name, using a single full name field in most cases rather than separate first name and last name fields.
govuk-frontend: "5.x"
keywords:
  - "first name last name"
  - "full name"
  - "name field"
  - "names"
last-reviewed: "2026-04-03"
name: Names
source: "https://design-system.service.gov.uk/patterns/names/"
subcategory: ask-users-for
---

# Names

> Use this pattern to ask users for their name, using a single full name field in most cases rather than separate first name and last name fields.
> Source: https://design-system.service.gov.uk/patterns/names/

## Overview

The names pattern provides guidance on how to ask users for their name. Names are deceptively complex — they come in a wide range of formats across cultures and do not fit into a "first name / last name" model. Some names do not have a family name, some have more than one given name, some cultures put the family name first, and some people use mononyms (a single name).

The GOV.UK Design System recommends using a single full name field in most cases, rather than splitting the name into separate first name and last name fields. This is more inclusive, works for a wider range of name formats, and reduces unnecessary friction for users.

Ask for names only when your service genuinely needs them. Avoid asking for title (Mr, Mrs, Ms, etc.) unless your service has a specific reason to need it — titles can be exclusionary and some users find them irrelevant.

## When to use this pattern

- When your service needs to identify the user by name.
- When your service needs a name to personalise correspondence or official documents.
- When you need to verify a user's identity against a record that includes their name.
- When the name will appear on a certificate, licence, or other official output.

## When not to use this pattern

- Do not ask for a name if your service can work without it.
- Do not ask for both a legal name and a preferred name unless your service needs both — for example, for a formal document (legal name) and for addressing the user in correspondence (preferred name).
- Do not ask for a title (Mr, Mrs, Miss, Ms, Dr, etc.) unless you have a specific operational need — titles can be exclusionary and some users find them unnecessary. Consider using the person's full name in correspondence instead.
- Do not split the name into first name and last name fields unless you have a specific need for separate components of the name (for example, to sort alphabetically by surname on a case management system).

## How it works

### Use a single full name field

In most cases, use a single text input labelled "Full name" or "Name". This works for the widest possible range of name formats and reduces the risk of users being unable to enter their name.

### Only use separate fields when necessary

If you have a genuine operational need to collect given name and family name separately (for example, to address a letter as "Dear [given name]" or to sort records by family name), use two fields:

- "First name" (or "Given name")
- "Last name" (or "Family name")

Consider whether users with a single name (mononyms) or unusual name formats can still complete your service with these two fields.

### Do not validate names strictly

Names contain a wide range of characters, including hyphens, apostrophes, spaces, accented characters, and characters from non-Latin scripts. Do not reject names that contain these characters. Do not enforce minimum or maximum name lengths beyond what is technically necessary.

### Autocomplete

Use `autocomplete="name"` on a full name field. Use `autocomplete="given-name"` and `autocomplete="family-name"` on separate first/last name fields. This allows browsers to autofill names from saved data.

### Spellcheck

Set `spellcheck="false"` on name inputs to prevent browsers from underlining names as spelling errors.

## Code examples

### Single full name field

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="full-name">
    Full name
  </label>
  <input class="govuk-input" id="full-name" name="fullName" type="text" autocomplete="name" spellcheck="false">
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "Full name"
  },
  id: "full-name",
  name: "fullName",
  autocomplete: "name",
  spellcheck: false
}) }}
```

### As page heading

#### HTML

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="full-name">
      What is your full name?
    </label>
  </h1>
  <input class="govuk-input" id="full-name" name="fullName" type="text" autocomplete="name" spellcheck="false">
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "What is your full name?",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  id: "full-name",
  name: "fullName",
  autocomplete: "name",
  spellcheck: false
}) }}
```

### Separate first and last name fields

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="first-name">
    First name
  </label>
  <input class="govuk-input" id="first-name" name="firstName" type="text" autocomplete="given-name" spellcheck="false">
</div>

<div class="govuk-form-group">
  <label class="govuk-label" for="last-name">
    Last name
  </label>
  <input class="govuk-input" id="last-name" name="lastName" type="text" autocomplete="family-name" spellcheck="false">
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "First name"
  },
  id: "first-name",
  name: "firstName",
  autocomplete: "given-name",
  spellcheck: false
}) }}

{{ govukInput({
  label: {
    text: "Last name"
  },
  id: "last-name",
  name: "lastName",
  autocomplete: "family-name",
  spellcheck: false
}) }}
```

### With error message

#### HTML

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="full-name">
    Full name
  </label>
  <p id="full-name-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter your full name
  </p>
  <input class="govuk-input govuk-input--error" id="full-name" name="fullName" type="text" autocomplete="name" spellcheck="false" aria-describedby="full-name-error">
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "Full name"
  },
  id: "full-name",
  name: "fullName",
  autocomplete: "name",
  spellcheck: false,
  errorMessage: {
    text: "Enter your full name"
  }
}) }}
```

### With preferred name

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "Full name"
  },
  hint: {
    text: "This is the name on your official documents, such as your passport."
  },
  id: "full-name",
  name: "fullName",
  autocomplete: "name",
  spellcheck: false
}) }}

{{ govukInput({
  label: {
    text: "Preferred name (optional)"
  },
  hint: {
    text: "Tell us if you'd like us to use a different name when we contact you."
  },
  id: "preferred-name",
  name: "preferredName",
  spellcheck: false
}) }}
```

## Error messages

### If the full name field is empty

- "Enter your full name"
- "Enter your name"

### If a first name field is empty

- "Enter your first name"

### If a last name field is empty

- "Enter your last name"

## Accessibility

- Use `autocomplete="name"` on a single full name field, `autocomplete="given-name"` on a first name field, and `autocomplete="family-name"` on a last name field to support browser autofill.
- Set `spellcheck="false"` to prevent browsers from flagging names as spelling errors.
- Always use a visible `<label>` associated with the input via the `for` attribute.
- Link error messages to the input via `aria-describedby`.
- Do not use placeholder text as a substitute for a label.

## Do and do not

**Do:**
- Use a single "Full name" field in most cases.
- Use `autocomplete="name"` (or `given-name`/`family-name` for separate fields).
- Set `spellcheck="false"` on name inputs.
- Accept names with hyphens, apostrophes, accented characters, and other non-ASCII characters.
- Be inclusive of users who have a single name (mononym).
- If you need to split the name, use "First name" and "Last name" rather than "Forename" and "Surname" — these terms are more widely understood.

**Do not:**
- Do not split names into first/last without a genuine operational reason.
- Do not ask for a title (Mr, Mrs, Miss, Ms) unless specifically required.
- Do not validate names against a strict character set — names include hyphens, apostrophes, accented letters, and other characters from a wide range of scripts.
- Do not enforce an unreasonably short upper length limit.
- Do not use "Christian name" or "Forename" — use "First name" or "Given name".
- Do not use placeholder text to convey the expected format.

## Related components and patterns

- [../../components/text-input/SKILLS.md](../../../components/text-input/SKILLS.md)
- [../../components/error-message/SKILLS.md](../../../components/error-message/SKILLS.md)
- [../../components/error-summary/SKILLS.md](../../../components/error-summary/SKILLS.md)
- [../addresses/SKILLS.md](../addresses/SKILLS.md)
- [../email-addresses/SKILLS.md](../email-addresses/SKILLS.md)
