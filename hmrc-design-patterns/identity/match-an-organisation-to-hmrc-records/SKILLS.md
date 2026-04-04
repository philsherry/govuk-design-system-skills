---
category: patterns
description: Ask users to provide details so HMRC can match their organisation to its records.
keywords:
  - "match organisation"
  - "organisation matching"
  - "company registration"
  - "Unique Taxpayer Reference"
  - "UTR"
  - "PAYE reference"
  - "employer reference"
  - "Corporation Tax"
last-reviewed: "2026-04-03"
name: Match an organisation to HMRC records
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/match-an-organisation-to-hmrc-records/"
subcategory: identity
---

# Match an organisation to HMRC records

> Ask users to provide details so HMRC can match their organisation to its records.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/match-an-organisation-to-hmrc-records/

## Overview

This pattern collects organisation details so HMRC can match the organisation to its records. HMRC holds records for organisations under identifiers such as the Unique Taxpayer Reference (UTR), employer PAYE reference, company registration number, or VAT registration number.

Services use this pattern when they need to verify that an organisation exists in HMRC systems before allowing the user to act on its behalf. The pattern asks for one identifier at a time, following the one-thing-per-page approach. This reduces errors and helps users provide the right information.

If HMRC cannot match the organisation, the service must tell the user what went wrong and explain what they can do next.

## When to use

- When an HMRC service needs to verify that an organisation exists in its records before the user can proceed.
- When the user acts on behalf of an organisation (for example, as a director, agent, or authorised person) and the service must confirm which organisation they represent.
- When the service needs to link an authenticated user to a specific organisation record held by HMRC.

## When not to use

- Do not use this pattern to verify an individual's identity — use the identity verification patterns instead.
- Do not ask for organisation details that the service does not need. Only collect identifiers required to match the organisation.
- Do not use this pattern when the service already knows the organisation (for example, when the user has signed in through an account that links to a specific organisation).

## How it works

The pattern follows the one-thing-per-page approach. Ask for one identifier per page so users can focus on a single question at a time.

### Choosing the right identifier

Different services need different identifiers. Choose the one that best matches the service context:

- **Unique Taxpayer Reference (UTR)** — for Corporation Tax or Self Assessment
- **Employer PAYE reference** — for payroll and employment-related services
- **Company registration number** — for Companies House-registered organisations
- **VAT registration number** — for VAT-related services

Ask for the identifier that the user will most likely have to hand. For Corporation Tax services, ask for the UTR. For payroll services, ask for the employer PAYE reference.

### Collecting the identifier

Each identifier page should:

- Use a clear question as the H1, for example "What is the organisation's Unique Taxpayer Reference?"
- Provide a hint explaining where the user can find the identifier
- Use the appropriate input pattern for the identifier format (numeric keyboard for UTR, text input for PAYE reference)
- Validate the format before attempting to match against HMRC records

### Handling match failures

When HMRC cannot match the organisation:

- Show a page explaining that the service could not find the organisation
- Tell the user to check the details they entered
- Allow the user to try again with the same identifier or a different one
- Provide contact details for HMRC so users can get help if matching fails after more than one attempt

Do not reveal details about HMRC records. Keep error messages focused on what the user can do, not on what the system found or failed to find.

## Code examples

### HTML

#### Asking for the UTR

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--xl" for="organisation-utr">
      What is the organisation's Unique Taxpayer Reference?
    </label>
  </h1>
  <div id="organisation-utr-hint" class="govuk-hint">
    This is a 10-digit number. You can find it on letters from HMRC about Corporation Tax or Self Assessment.
  </div>
  <input class="govuk-input govuk-input--width-10" id="organisation-utr"
    name="organisation-utr" type="text"
    inputmode="numeric" pattern="[0-9]*"
    spellcheck="false"
    aria-describedby="organisation-utr-hint">
</div>

<button type="submit" class="govuk-button" data-module="govuk-button">
  Continue
</button>
```

#### Match failure

```html
<h1 class="govuk-heading-xl">We could not find the organisation</h1>

<p class="govuk-body">
  The details you entered do not match an organisation in our records.
</p>

<p class="govuk-body">Check the details and try again.</p>

<a href="/enter-organisation-details" role="button" draggable="false"
  class="govuk-button govuk-button--secondary"
  data-module="govuk-button">
  Try again
</a>

<h2 class="govuk-heading-m">Get help</h2>

<p class="govuk-body">
  If you cannot match your organisation, contact HMRC for help:
</p>

<ul class="govuk-list govuk-list--bullet">
  <li>phone — call 0300 200 3300 (Monday to Friday, 8am to 6pm)</li>
  <li>post — write to HMRC, BX9 1AS</li>
</ul>
```

### Nunjucks

#### Asking for the UTR

```njk
{{ govukInput({
  label: {
    text: "What is the organisation's Unique Taxpayer Reference?",
    classes: "govuk-label--xl",
    isPageHeading: true
  },
  hint: {
    text: "This is a 10-digit number. You can find it on letters from HMRC about Corporation Tax or Self Assessment."
  },
  id: "organisation-utr",
  name: "organisation-utr",
  classes: "govuk-input--width-10",
  inputmode: "numeric",
  pattern: "[0-9]*",
  spellcheck: false
}) }}

{{ govukButton({
  text: "Continue"
}) }}
```

#### Match failure

```njk
<h1 class="govuk-heading-xl">We could not find the organisation</h1>

<p class="govuk-body">
  The details you entered do not match an organisation in our records.
</p>

<p class="govuk-body">Check the details and try again.</p>

{{ govukButton({
  text: "Try again",
  href: "/enter-organisation-details",
  classes: "govuk-button--secondary"
}) }}

<h2 class="govuk-heading-m">Get help</h2>

<p class="govuk-body">
  If you cannot match your organisation, contact HMRC for help:
</p>

{{ govukList({
  items: [
    { text: "phone — call 0300 200 3300 (Monday to Friday, 8am to 6pm)" },
    { text: "post — write to HMRC, BX9 1AS" }
  ],
  classes: "govuk-list--bullet"
}) }}
```

## Accessibility

- Each identifier question page must have the `<label>` as the `<h1>`, wrapped in a `govuk-label-wrapper`. This ensures screen reader users hear the question when the page loads.
- Set `inputmode="numeric"` and `pattern="[0-9]*"` on inputs that accept only digits (UTR, VAT registration number). This triggers a numeric keyboard on mobile devices.
- Set `spellcheck="false"` on all identifier inputs to prevent browsers from flagging reference numbers as misspelled words.
- Link hint text to the input using `aria-describedby` so screen readers announce the hint when the input receives focus.
- Error messages must explain what went wrong and how to fix it. For example: "Enter the organisation's Unique Taxpayer Reference" or "The Unique Taxpayer Reference must be 10 digits".
- The match failure page must have a page `<title>` that reflects the outcome, for example "We could not find the organisation – Service name – GOV.UK".

## Do and do not

**Do:**
- Ask for one identifier per page (one-thing-per-page approach)
- Choose the identifier that matches the service context (UTR for Corporation Tax, PAYE reference for payroll)
- Provide hints explaining where users can find the identifier
- Validate the format before attempting to match against HMRC records
- Give users a way to try again when matching fails
- Provide HMRC contact details on the failure page
- Use `inputmode="numeric"` for digit-only identifiers

**Do not:**
- Ask for more than one identifier on a single page
- Collect identifiers the service does not need
- Reveal details about HMRC records when matching fails
- Leave users at a dead end after a match failure
- Show technical error codes or system information
- Use free-text search for organisation names — use structured identifiers instead

## Related components and patterns

- [../../../govuk-design-system/components/text-input/SKILLS.md](../../../govuk-design-system/components/text-input/SKILLS.md)
- [../../../govuk-design-system/components/error-message/SKILLS.md](../../../govuk-design-system/components/error-message/SKILLS.md)
- [../../../govuk-design-system/components/error-summary/SKILLS.md](../../../govuk-design-system/components/error-summary/SKILLS.md)
- [../../../govuk-design-system/components/button/SKILLS.md](../../../govuk-design-system/components/button/SKILLS.md)
- [../../../govuk-design-system/patterns/help-users-to/recover-from-validation-errors/SKILLS.md](../../../govuk-design-system/patterns/help-users-to/recover-from-validation-errors/SKILLS.md)
- [../../../govuk-design-system/patterns/pages/question-pages/SKILLS.md](../../../govuk-design-system/patterns/pages/question-pages/SKILLS.md)
- [../../identifiers/unique-taxpayer-reference/SKILLS.md](../../identifiers/unique-taxpayer-reference/SKILLS.md)
- [../../identifiers/employer-paye-reference/SKILLS.md](../../identifiers/employer-paye-reference/SKILLS.md)
- [../../identifiers/vat-registration-number/SKILLS.md](../../identifiers/vat-registration-number/SKILLS.md)
- [../confirmed-identity/SKILLS.md](../confirmed-identity/SKILLS.md)
- [../could-not-confirm-identity/SKILLS.md](../could-not-confirm-identity/SKILLS.md)
