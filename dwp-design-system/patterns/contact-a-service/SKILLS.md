---
category: patterns
description: Show users how to contact a service for offline support.
dwp-frontend: "3.x"
keywords:
  - "contact"
  - "contact details"
  - "offline support"
  - "phone"
  - "support"
last-reviewed: "2026-04-04"
name: Contact a service
source: "https://design-system.dwp.gov.uk/patterns/contact-a-service"
---

# Contact a service

> Show users how to contact a service for offline support.
> Source: <https://design-system.dwp.gov.uk/patterns/contact-a-service>

## Overview

The "Contact a service" pattern gives users a way to get help outside the digital journey. It displays a short contact block — typically a phone number, opening hours, and a link to call charges — below the main page content and above the footer. The pattern builds on the GOV.UK "Contact a department or service team" pattern.

## When to use this pattern

Use this pattern to give users a way to get help outside the digital service. Show contact details when users may need to:

- ask a question the service does not answer online
- report a problem with the service
- get support they cannot get through the digital journey

Services using this pattern include Apply for a National Insurance Number and Apply for Pension Credit.

## When not to use this pattern

Do not use this pattern when:

- contact information is long or complex — create a dedicated contact page instead
- the information users need is available within the service itself — answer the question in the service content first

Do not hide contact details to reduce support calls. Users who need offline help must be able to find it.

## How it works

Position the contact details after the main page body content and before the footer. Follow the GOV.UK [Contact a department or service team](https://design-system.service.gov.uk/patterns/contact-a-department-or-service-team/) pattern for styling and structure.

Keep the contact block short. Include:

- a heading such as "Get help"
- the phone number as plain text or a `tel:` link
- opening hours
- a link to [call charges information](https://www.gov.uk/call-charges)

### Short contact block

Place this below the main content area on pages where users are likely to need support.

## Code examples

### Contact block below page content

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h2 class="govuk-heading-m">Get help</h2>
    <p class="govuk-body">
      If you need help with your application, contact us.
    </p>
    <p class="govuk-body">
      Telephone: 0800 123 4567<br>
      Monday to Friday, 9am to 5pm
    </p>
    <p class="govuk-body">
      <a href="https://www.gov.uk/call-charges" class="govuk-link">Find out about call charges</a>
    </p>

  </div>
</div>
```

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h2 class="govuk-heading-m">Get help</h2>
    <p class="govuk-body">
      If you need help with your application, contact us.
    </p>
    <p class="govuk-body">
      Telephone: 0800 123 4567<br>
      Monday to Friday, 9am to 5pm
    </p>
    <p class="govuk-body">
      <a href="https://www.gov.uk/call-charges" class="govuk-link">Find out about call charges</a>
    </p>

  </div>
</div>
```

## Accessibility

This pattern must meet:

- **[1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG22/#info-and-relationships) (A)**: use semantic headings and paragraph elements to convey the structure of the contact block
- **[1.3.4 Orientation](https://www.w3.org/TR/WCAG22/#orientation) (AA)**: the contact block must work in both portrait and landscape orientations
- **[1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG22/#contrast-minimum) (AA)**: all text, including phone numbers and opening hours, must meet the 4.5:1 contrast ratio
- **[2.4.11 Focus Not Obscured (Minimum)](https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum) (AA)**: links within the contact block must remain visible when they receive keyboard focus
- **[2.5.8 Target Size (Minimum)](https://www.w3.org/TR/WCAG22/#target-size-minimum) (AA)**: links must have a target area of at least 24 by 24 CSS pixels

Display phone numbers as plain text that users can select and copy. Do not use images to show contact information.

## Do and do not

**Do:**
- Keep the contact block short — include a phone number, opening hours, and a call charges link.
- Position the contact block after the main page content and before the footer.
- Use semantic headings and paragraph elements to structure the contact block.
- Display phone numbers as plain text that users can select and copy.

**Do not:**
- Do not hide contact details to reduce support calls — users who need offline help must find it.
- Do not use images to display contact information.
- Do not place contact details inside the footer.
- Do not duplicate the contact block if the information users need already appears within the service content.

## Related components and patterns

- [Contact a department or service team](https://design-system.service.gov.uk/patterns/contact-a-department-or-service-team/) — the GOV.UK pattern this builds on
- [Choose alternative contact formats](../choose-alternative-contact-formats/SKILLS.md) — for offering correspondence in alternative formats
- [Footer](https://design-system.service.gov.uk/components/footer/) — contact details sit above the footer, not inside it
