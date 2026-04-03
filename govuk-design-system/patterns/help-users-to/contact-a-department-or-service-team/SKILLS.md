---
category: patterns
description: Use this pattern to help users find and use the right contact channel for your service or department.
govuk-frontend: "5.x"
keywords:
  - "contact"
  - "contact details"
  - "support"
last-reviewed: "2026-04-03"
name: Contact a department or service team
source: "https://design-system.service.gov.uk/patterns/contact-a-department-or-service-team/"
subcategory: help-users-to
---

# Contact a department or service team

> Use this pattern to help users find and use the right contact channel for your service or department.
> Source: https://design-system.service.gov.uk/patterns/contact-a-department-or-service-team/

## Overview

The contact a department or service team pattern helps users find the most appropriate way to get in touch with a government department or service team. This might be because they have a question, need support, want to report a problem, or need to make a complaint.

Present contact information consistently, with the right contact channel for each query type. The pattern follows the GOV.UK principle of offering users appropriate contact methods while managing demand on support channels. Where possible, services should direct users to self-service options before presenting contact details.

This is primarily a content pattern. The exact implementation depends on what contact channels your service offers. Common channels include online contact forms, email addresses, phone numbers, postal addresses, web chat, and social media.

## When to use this pattern

- When users need to contact your service or department for support, information, or to make a complaint.
- When you need to present more than one contact method and help users choose the most appropriate one.
- When your service has a dedicated support channel separate from the main service journey.
- When users may have accessibility needs that affect which contact method is most suitable for them.

## When not to use this pattern

- Do not use this pattern as a first resort — always try to answer users' questions within the service itself through clear guidance, hint text, and help content.
- Do not present contact details when content or an FAQ can answer the user's question more effectively.
- Do not present contact channels that nobody monitors or maintains — only show contact details that the team keeps up to date.

## How it works

### Present the right contact method first

Lead with the contact method most likely to help users resolve their query fast and efficiently. Consider:

- **Online contact form**: Suitable for non-urgent queries. Allows users to provide all necessary information upfront.
- **Email**: Suitable for non-urgent queries where a reference trail is useful.
- **Phone**: Suitable for urgent queries or complex situations that need two-way communication.
- **Post**: For formal correspondence, documents, or where no digital option is available.
- **Web chat**: For quick questions where real-time support is available.

### Manage expectations

Always tell users:

- How long they should expect to wait for a response.
- Opening hours for phone and web chat support.
- Whether the contact channel has capacity constraints during busy periods.

### Direct users to self-service first

Before showing contact details, direct users to:
- Relevant guidance pages.
- FAQ or help content.
- The ability to track their application or query status online.

### Accessibility

Make sure at least one contact method does not require users to have a phone, internet access, or a particular device. Provide a text relay or similar service for users who are deaf or hard of hearing.

## Code Examples

### Basic contact page with more than one channel

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-xl">Contact us</h1>

    <p class="govuk-body">
      If you need help with your application or have a question about the service, contact us using one of the methods below.
    </p>

    <h2 class="govuk-heading-m">Online</h2>
    <p class="govuk-body">
      <a href="/contact/form" class="govuk-link">Send us a message using our online form</a>
    </p>
    <p class="govuk-body">
      We aim to respond within 5 working days.
    </p>

    <h2 class="govuk-heading-m">By phone</h2>
    <p class="govuk-body">
      0300 123 4567
    </p>
    <p class="govuk-body">
      Monday to Friday, 9am to 5pm (except public holidays)
    </p>
    <p class="govuk-body">
      <a href="https://www.gov.uk/call-charges" class="govuk-link">Find out about call charges</a>
    </p>

    <h2 class="govuk-heading-m">By post</h2>
    <p class="govuk-body">
      Department Name<br>
      PO Box 1234<br>
      Bristol<br>
      BS1 1AB
    </p>

  </div>
</div>
```

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-xl">Contact us</h1>

    <p class="govuk-body">
      If you need help with your application or have a question about the service, contact us using one of the methods below.
    </p>

    <h2 class="govuk-heading-m">Online</h2>
    <p class="govuk-body">
      <a href="/contact/form" class="govuk-link">Send us a message using our online form</a>
    </p>
    <p class="govuk-body">
      We aim to respond within 5 working days.
    </p>

    <h2 class="govuk-heading-m">By phone</h2>
    <p class="govuk-body">
      0300 123 4567
    </p>
    <p class="govuk-body">
      Monday to Friday, 9am to 5pm (except public holidays)
    </p>
    <p class="govuk-body">
      <a href="https://www.gov.uk/call-charges" class="govuk-link">Find out about call charges</a>
    </p>

    <h2 class="govuk-heading-m">By post</h2>
    <p class="govuk-body">
      Department Name<br>
      PO Box 1234<br>
      Bristol<br>
      BS1 1AB
    </p>

  </div>
</div>
```

### Online contact form

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">Send us a message</h1>

    <form method="post" novalidate>

      <div class="govuk-form-group">
        <label class="govuk-label" for="full-name">
          Full name
        </label>
        <input class="govuk-input" id="full-name" name="fullName" type="text" autocomplete="name">
      </div>

      <div class="govuk-form-group">
        <label class="govuk-label" for="email">
          Email address
        </label>
        <div id="email-hint" class="govuk-hint">
          We'll use this to respond to your message.
        </div>
        <input class="govuk-input" id="email" name="email" type="email" autocomplete="email" spellcheck="false" aria-describedby="email-hint">
      </div>

      <div class="govuk-form-group">
        <label class="govuk-label" for="subject">
          Subject
        </label>
        <input class="govuk-input" id="subject" name="subject" type="text">
      </div>

      <div class="govuk-form-group">
        <label class="govuk-label" for="message">
          Message
        </label>
        <textarea class="govuk-textarea" id="message" name="message" rows="7"></textarea>
      </div>

      <button type="submit" class="govuk-button" data-module="govuk-button">
        Send message
      </button>

    </form>

  </div>
</div>
```

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">Send us a message</h1>

    <form method="post" novalidate>

      {{ govukInput({
        label: {
          text: "Full name"
        },
        id: "full-name",
        name: "fullName",
        autocomplete: "name"
      }) }}

      {{ govukInput({
        label: {
          text: "Email address"
        },
        hint: {
          text: "We'll use this to respond to your message."
        },
        id: "email",
        name: "email",
        type: "email",
        autocomplete: "email",
        spellcheck: false
      }) }}

      {{ govukInput({
        label: {
          text: "Subject"
        },
        id: "subject",
        name: "subject"
      }) }}

      {{ govukTextarea({
        label: {
          text: "Message"
        },
        id: "message",
        name: "message",
        rows: 7
      }) }}

      {{ govukButton({
        text: "Send message"
      }) }}

    </form>

  </div>
</div>
```

### Contact page with self-service direction

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-xl">Get help</h1>

    <h2 class="govuk-heading-m">Search for an answer</h2>
    <p class="govuk-body">
      Common questions are answered in our
      <a href="/help" class="govuk-link">help and support section</a>.
    </p>

    <h2 class="govuk-heading-m">Track your application</h2>
    <p class="govuk-body">
      You can
      <a href="/track" class="govuk-link">track the status of your application</a>
      without contacting us.
    </p>

    <h2 class="govuk-heading-m">Contact us</h2>
    <p class="govuk-body">
      If you cannot find the answer to your question, contact us.
    </p>
    <p class="govuk-body">
      Phone: 0300 123 4567<br>
      Monday to Friday, 9am to 5pm
    </p>
    <p class="govuk-body">
      <a href="https://www.gov.uk/call-charges" class="govuk-link">Find out about call charges</a>
    </p>

  </div>
</div>
```

### Contact page in service footer area

#### Nunjucks

```njk
{% from "govuk/components/inset-text/macro.njk" import govukInsetText %}

{{ govukInsetText({
  html: "If you need help using this service, <a href='/contact' class='govuk-link'>contact the support team</a>."
}) }}
```

## Error Messages

For online contact forms, standard validation applies:

| Field | Empty error | Invalid format |
|-------|-------------|----------------|
| Full name | "Enter your full name" | — |
| Email address | "Enter your email address" | "Enter an email address in the correct format, like name@example.com" |
| Subject | "Enter a subject" | — |
| Message | "Enter your message" | — |

## Accessibility

- Display phone numbers as plain text that users can select and copy, or as a `tel:` link.
- Do not use images to convey contact information — all contact details must be in plain text.
- Opening hours and response time expectations are critical context for users — include them alongside contact details.
- For phone-based support, provide information about text relay services (such as Relay UK) for deaf and hard of hearing users.
- If using a web chat service, ensure the service is keyboard accessible and works with screen readers.
- Contact forms must follow standard form accessibility guidance: labels, hints, error messages, and focus management.

## Do and Do not

**Do:**
- Direct users to self-service options before showing contact details.
- Include opening hours and expected response times.
- Include a link to call charges information next to phone numbers.
- Make sure all contact details are accurate and kept up to date.
- Offer at least one contact method that does not require a phone.
- Provide text relay information for users who are deaf or hard of hearing.

**Do not:**
- Do not hide contact details from users who genuinely need them.
- Do not publish email addresses as the primary contact method — use a contact form to avoid spam.
- Do not use images or non-selectable text for phone numbers or postal addresses.
- Do not list contact channels that are not actively monitored.
- Do not make users explain their problem more than once across different channels.

## Related Components / Patterns

- [../../../components/text-input/SKILLS.md](../../../components/text-input/SKILLS.md)
- [../../../components/textarea/SKILLS.md](../../../components/textarea/SKILLS.md)
- [../../../components/inset-text/SKILLS.md](../../../components/inset-text/SKILLS.md)
- [../../../components/error-summary/SKILLS.md](../../../components/error-summary/SKILLS.md)
- [../../../components/footer/SKILLS.md](../../../components/footer/SKILLS.md)
- [../../../patterns/pages/problem-with-the-service-pages/SKILLS.md](../../../patterns/pages/problem-with-the-service-pages/SKILLS.md)
