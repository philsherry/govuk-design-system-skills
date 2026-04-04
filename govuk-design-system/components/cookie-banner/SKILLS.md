---
category: components
description: A banner that lets users accept or reject cookies and confirms their choice.
govuk-frontend: "5.x"
keywords:
  - "banner"
  - "consent"
  - "cookie"
  - "cookie banner"
  - "cookies"
  - "privacy"
last-reviewed: "2026-04-03"
name: Cookie Banner
source: "https://design-system.service.gov.uk/components/cookie-banner/"
---

# Cookie Banner

> A banner that lets users accept or reject cookies and confirms their choice.
> Source: https://design-system.service.gov.uk/components/cookie-banner/

## Overview

The cookie banner component lets services ask users for consent to set cookies, in line with UK regulations (PECR and UK GDPR). It appears at the top of every page until the user has made a decision, and shows a confirmation message after the user accepts or rejects cookies.

The component uses a multi-message model. The initial message asks the user to accept or reject analytics and similar cookies. Once the user makes a choice, a confirmation message appears briefly before the banner closes. The banner manages these message states by showing and hiding different message elements.

Place the banner above the skip link at the top of the page, before any other content. It uses `data-nosnippet` to prevent search engines from indexing its content as page content.

## When to use this component

Use the cookie banner whenever your service sets non-essential cookies — for example, analytics, personalisation, or performance cookies. You are legally required to get user consent before setting these cookies under PECR.

Show the component on every page of the service until the user has made a decision. Use session or persistent cookies/storage to remember the user's choice.

## When not to use this component

Do not show the cookie banner if the user has already made a decision and the service has saved their preference. Do not use this component if your service only sets strictly necessary cookies — consent is not required for cookies that are essential for the service to function.

Do not use this component as a general-purpose banner or notification — use the notification banner component for that purpose.

## How it works

The cookie banner is a `<div class="govuk-cookie-banner" role="region" aria-label="Cookies on [service name]" data-nosnippet>` element. Inside it, each distinct message state (ask, accepted, rejected) is a separate `<div class="govuk-cookie-banner__message">` element.

The initial "ask" message contains the question and two action buttons (Accept and Reject). The confirmation messages contain a short confirmation text and a "Hide this message" button.

When a user makes a choice, JavaScript hides the ask message and shows the relevant confirmation message. After the user dismisses the confirmation, the whole banner closes. Without JavaScript, all messages without the `hidden` attribute appear — ensure your server-side code or your own JavaScript sets the `hidden` attribute as needed.

## Code examples

### Default / Basic

#### HTML

```html
<div class="govuk-cookie-banner" data-nosnippet role="region" aria-label="Cookies on [service name]">
  <div class="govuk-cookie-banner__message govuk-width-container">
    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        <h2 class="govuk-cookie-banner__heading govuk-heading-m">Cookies on [service name]</h2>
        <div class="govuk-cookie-banner__content">
          <p class="govuk-body">We use some essential cookies to make this service work.</p>
          <p class="govuk-body">We'd also like to use analytics cookies so we can understand how you use the service and make improvements.</p>
        </div>
      </div>
    </div>
    <div class="govuk-button-group">
      <button type="button" class="govuk-button" data-accept-cookies>Accept analytics cookies</button>
      <button type="button" class="govuk-button" data-reject-cookies>Reject analytics cookies</button>
      <a class="govuk-link" href="/cookies">View cookies</a>
    </div>
  </div>

  <div class="govuk-cookie-banner__message govuk-width-container" hidden>
    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        <div class="govuk-cookie-banner__content">
          <p class="govuk-body">You've accepted analytics cookies. You can <a class="govuk-link" href="/cookies">change your cookie settings</a> at any time.</p>
        </div>
      </div>
    </div>
    <div class="govuk-button-group">
      <button class="govuk-button" type="button" data-hide-cookie-banner>Hide this message</button>
    </div>
  </div>

  <div class="govuk-cookie-banner__message govuk-width-container" hidden>
    <div class="govuk-grid-row">
      <div class="govuk-grid-column-two-thirds">
        <div class="govuk-cookie-banner__content">
          <p class="govuk-body">You've rejected analytics cookies. You can <a class="govuk-link" href="/cookies">change your cookie settings</a> at any time.</p>
        </div>
      </div>
    </div>
    <div class="govuk-button-group">
      <button class="govuk-button" type="button" data-hide-cookie-banner>Hide this message</button>
    </div>
  </div>
</div>
```

#### Nunjucks

```njk
{{ govukCookieBanner({
  ariaLabel: "Cookies on [service name]",
  messages: [
    {
      headingText: "Cookies on [service name]",
      html: "
        <p class=\"govuk-body\">We use some essential cookies to make this service work.</p>
        <p class=\"govuk-body\">We'd also like to use analytics cookies so we can understand how you use the service and make improvements.</p>
      ",
      actions: [
        {
          text: "Accept analytics cookies",
          type: "button",
          name: "cookies",
          value: "accept"
        },
        {
          text: "Reject analytics cookies",
          type: "button",
          name: "cookies",
          value: "reject"
        },
        {
          text: "View cookies",
          href: "/cookies"
        }
      ]
    },
    {
      html: "<p class=\"govuk-body\">You've accepted analytics cookies. You can <a class=\"govuk-link\" href=\"/cookies\">change your cookie settings</a> at any time.</p>",
      hidden: true,
      actions: [
        {
          text: "Hide this message",
          type: "button"
        }
      ]
    },
    {
      html: "<p class=\"govuk-body\">You've rejected analytics cookies. You can <a class=\"govuk-link\" href=\"/cookies\">change your cookie settings</a> at any time.</p>",
      hidden: true,
      actions: [
        {
          text: "Hide this message",
          type: "button"
        }
      ]
    }
  ]
}) }}
```

### Server-side rendered accepted state (no JavaScript)

#### Nunjucks

```njk
{# The ask message is hidden server-side; the accepted message is shown #}
{{ govukCookieBanner({
  ariaLabel: "Cookies on [service name]",
  messages: [
    {
      headingText: "Cookies on [service name]",
      html: "<p class=\"govuk-body\">We use analytics cookies.</p>",
      hidden: true,
      actions: [
        { text: "Accept analytics cookies", type: "button", name: "cookies", value: "accept" },
        { text: "Reject analytics cookies", type: "button", name: "cookies", value: "reject" }
      ]
    },
    {
      html: "<p class=\"govuk-body\">You've accepted analytics cookies. You can <a class=\"govuk-link\" href=\"/cookies\">change your cookie settings</a> at any time.</p>",
      actions: [
        { text: "Hide this message", type: "button" }
      ]
    }
  ]
}) }}
```

### Entire banner hidden (user has already decided)

#### Nunjucks

```njk
{{ govukCookieBanner({
  hidden: true,
  ariaLabel: "Cookies on [service name]",
  messages: [
    {
      headingText: "Cookies on [service name]",
      html: "<p class=\"govuk-body\">We use analytics cookies.</p>",
      actions: [
        { text: "Accept analytics cookies", type: "button", name: "cookies", value: "accept" },
        { text: "Reject analytics cookies", type: "button", name: "cookies", value: "reject" }
      ]
    }
  ]
}) }}
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| messages | array | Yes | Array of message objects. Each represents a banner state (ask, accepted, rejected). |
| messages[].headingText | string | No | Heading text for the message. |
| messages[].headingHtml | string | No | Heading HTML for the message. |
| messages[].html | string | No | HTML body content for the message. |
| messages[].text | string | No | Text body content for the message. |
| messages[].actions | array | No | Array of action objects (buttons or links). |
| messages[].actions[].text | string | Yes | Text for the action button or link. |
| messages[].actions[].type | string | No | Button type: `"button"` or `"submit"`. |
| messages[].actions[].href | string | No | `href` to render the action as a link. |
| messages[].actions[].name | string | No | `name` attribute for button actions. |
| messages[].actions[].value | string | No | `value` attribute for button actions. |
| messages[].hidden | boolean | No | When `true`, the message has the `hidden` attribute by default. |
| messages[].classes | string | No | Classes to add to the message container. |
| messages[].attributes | object | No | HTML attributes for the message container. |
| hidden | boolean | No | When `true`, hides the entire cookie banner. |
| ariaLabel | string | No | `aria-label` for the `<div role="region">`. Defaults to `"Cookie banner"`. |
| classes | string | No | Classes to add to the outer cookie banner `<div>`. |
| attributes | object | No | HTML attributes for the outer cookie banner `<div>`. |

## Error messages

The cookie banner does not accept user input for validation and does not produce field-level error messages. If you use form submission to handle cookie preferences for users without JavaScript, standard form validation applies server-side.

## Accessibility

The outer element uses `role="region"` and `aria-label` to create a landmark region that screen reader users can navigate to directly.

The `data-nosnippet` attribute prevents search engines from indexing the banner content as part of the page.

When the confirmation message appears after a user makes a choice, focus management is important. Move focus to the confirmation message or to the "Hide this message" button so keyboard and screen reader users know the state has changed.

The banner must be the first significant element in the `<body>`, before the skip link, so it appears near the top of the reading order without interfering with main content navigation.

## Do and do not

**Do:**
- Place the cookie banner before the skip link at the top of the `<body>`.
- Include a link to your cookies policy page in the ask message.
- Use server-side logic to suppress the banner once the service saves the user's preference.
- Provide a way for users to change their cookie settings at any time (link to cookies page).

**Do not:**
- Do not use the cookie banner for non-cookie-consent purposes — use the notification banner instead.
- Do not show the banner to users who have already set their cookie preferences.
- Do not block page content with the banner or make it modal.
- Do not set analytics cookies before the user has given consent.

## Related components and patterns

- [Notification banner](https://design-system.service.gov.uk/components/notification-banner/) — for general page-level notifications not related to cookie consent.
- [Cookies page pattern](https://design-system.service.gov.uk/patterns/cookies-page/) — the recommended pattern for a full cookies settings page.
