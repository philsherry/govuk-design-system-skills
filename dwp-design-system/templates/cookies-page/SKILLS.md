---
category: templates
description: Standard DWP cookies page that tells users about cookies and lets them accept or reject non-essential cookies.
dwp-frontend: "3.x"
keywords:
  - "consent"
  - "cookie policy"
  - "cookie settings"
  - "cookies"
  - "cookies page"
last-reviewed: "2026-04-04"
name: Cookies page
source: "https://design-system.dwp.gov.uk/templates/cookies-page"
---

# Cookies page

> Standard DWP cookies page that tells users about cookies and lets them accept or reject non-essential cookies.
> Source: <https://design-system.dwp.gov.uk/templates/cookies-page>

## Overview

The cookies page lists every cookie the service sets, explains each cookie's purpose, and states how long each one lasts. Users must be able to accept or reject non-essential cookies before the service places them.

DWP services follow the GOV.UK cookies page pattern. The page uses standard `govuk-` classes throughout — there are no `dwp-` specific classes on this template.

DWP has approved the intro text for cookies pages across the department. Do not change the wording. Replace `[service name]` with the name of your service.

## When to use

Add a cookies page to every DWP service that sets cookies beyond those strictly necessary for the service to function. This includes:

- Services that use Google Analytics
- Services that set functional or settings cookies
- Services that use third-party cookies

## When not to use

If your service sets only a single strictly necessary session cookie, you may not need a full cookies page — but a brief explanation of the session cookie remains good practice.

Do not use the cookies page as a substitute for a full privacy notice. Link to the privacy notice separately.

## How it works

The page title must follow the format "Cookies on [service name]".

### Variants

**Analytics only** — the simpler variant. The page has one group of non-essential cookies (analytics) and one set of radios.

**Analytics plus other cookies** — when the service sets more than one category of non-essential cookies. Each category gets its own fieldset with its own set of radios. Users accept or reject each category individually.

### Radio button defaults

On a user's first visit, preselect the "Do not use cookies that measure my website use" radio (the reject option). Never preselect the accept option.

### Cookie table for Google Analytics

DWP services using Google Analytics include the following standard cookie entries:

| Name | Purpose | Expires |
|------|---------|---------|
| `_ga` | Checks if you have visited the service before | 2 years |
| `_ga_<container-id>` | Collects information about how you use the service | 2 years |

Replace `<container-id>` with your GA4 measurement ID.

### Footer link

Add a link with the text "Cookies" to the footer of every page in the service.

### Confirmation after saving

After a user saves their preferences, show a `govukNotificationBanner` with `type: "success"` at the top of the page, above the `<h1>`. Do not redirect to a different page.

## Code examples

### HTML — analytics only

```html
<!-- Success notification banner — shown only after saving -->
<div class="govuk-notification-banner govuk-notification-banner--success" role="alert"
  aria-labelledby="govuk-notification-banner-title"
  data-module="govuk-notification-banner">
  <div class="govuk-notification-banner__header">
    <h2 class="govuk-notification-banner__title" id="govuk-notification-banner-title">
      Success
    </h2>
  </div>
  <div class="govuk-notification-banner__content">
    <p class="govuk-body govuk-notification-banner__heading">
      You've set your cookie preferences.
    </p>
  </div>
</div>

<h1 class="govuk-heading-l">Cookies on [service name]</h1>

<p class="govuk-body">Cookies are files saved on your phone, tablet or computer when you visit a website.</p>

<p class="govuk-body">We use cookies to store information about how you use the [service name] service, such as the pages you visit.</p>

<h2 class="govuk-heading-m">Cookie settings</h2>

<p class="govuk-body">We use Google Analytics to measure how you use the service so we can improve it based on user needs. We do not allow Google to use or share our analytics data.</p>

<form method="post" novalidate>

  <div class="govuk-form-group">
    <fieldset class="govuk-fieldset">
      <legend class="govuk-fieldset__legend govuk-fieldset__legend--s">
        <h3 class="govuk-fieldset__heading">Cookies that measure website use</h3>
      </legend>

      <table class="govuk-table">
        <caption class="govuk-table__caption govuk-visually-hidden">Analytics cookies</caption>
        <thead class="govuk-table__head">
          <tr class="govuk-table__row">
            <th scope="col" class="govuk-table__header">Name</th>
            <th scope="col" class="govuk-table__header">Purpose</th>
            <th scope="col" class="govuk-table__header">Expires</th>
          </tr>
        </thead>
        <tbody class="govuk-table__body">
          <tr class="govuk-table__row">
            <td class="govuk-table__cell">_ga</td>
            <td class="govuk-table__cell">Checks if you have visited the service before</td>
            <td class="govuk-table__cell">2 years</td>
          </tr>
          <tr class="govuk-table__row">
            <td class="govuk-table__cell">_ga_&lt;container-id&gt;</td>
            <td class="govuk-table__cell">Collects information about how you use the service</td>
            <td class="govuk-table__cell">2 years</td>
          </tr>
        </tbody>
      </table>

      <div class="govuk-radios" data-module="govuk-radios">
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="analytics" name="analytics" type="radio" value="yes">
          <label class="govuk-label govuk-radios__label" for="analytics">
            Use cookies that measure my website use
          </label>
        </div>
        <div class="govuk-radios__item">
          <input class="govuk-radios__input" id="analytics-2" name="analytics" type="radio" value="no" checked>
          <label class="govuk-label govuk-radios__label" for="analytics-2">
            Do not use cookies that measure my website use
          </label>
        </div>
      </div>
    </fieldset>
  </div>

  <h2 class="govuk-heading-m">Strictly necessary cookies</h2>

  <p class="govuk-body">These essential cookies remember your progress through the service. They always need to be on.</p>

  <table class="govuk-table">
    <caption class="govuk-table__caption govuk-visually-hidden">Strictly necessary cookies</caption>
    <thead class="govuk-table__head">
      <tr class="govuk-table__row">
        <th scope="col" class="govuk-table__header">Name</th>
        <th scope="col" class="govuk-table__header">Purpose</th>
        <th scope="col" class="govuk-table__header">Expires</th>
      </tr>
    </thead>
    <tbody class="govuk-table__body">
      <tr class="govuk-table__row">
        <td class="govuk-table__cell">session</td>
        <td class="govuk-table__cell">Keeps you signed in while you use the service</td>
        <td class="govuk-table__cell">When you close your browser</td>
      </tr>
      <tr class="govuk-table__row">
        <td class="govuk-table__cell">cookie_policy</td>
        <td class="govuk-table__cell">Saves your cookie consent settings</td>
        <td class="govuk-table__cell">1 year</td>
      </tr>
    </tbody>
  </table>

  <button class="govuk-button" data-module="govuk-button" type="submit">
    Save cookie settings
  </button>

</form>
```

### Nunjucks — analytics only

```njk
{% if cookiesSaved %}
  {{ govukNotificationBanner({
    type: "success",
    html: '<p class="govuk-body govuk-notification-banner__heading">You\'ve set your cookie preferences.</p>'
  }) }}
{% endif %}

<h1 class="govuk-heading-l">Cookies on [service name]</h1>

<p class="govuk-body">Cookies are files saved on your phone, tablet or computer when you visit a website.</p>

<p class="govuk-body">We use cookies to store information about how you use the [service name] service, such as the pages you visit.</p>

<h2 class="govuk-heading-m">Cookie settings</h2>

<p class="govuk-body">We use Google Analytics to measure how you use the service so we can improve it based on user needs. We do not allow Google to use or share our analytics data.</p>

<form method="post" novalidate>

  {{ govukTable({
    caption: "Analytics cookies",
    captionClasses: "govuk-visually-hidden",
    head: [
      { text: "Name" },
      { text: "Purpose" },
      { text: "Expires" }
    ],
    rows: [
      [
        { text: "_ga" },
        { text: "Checks if you have visited the service before" },
        { text: "2 years" }
      ],
      [
        { text: "_ga_<container-id>" },
        { text: "Collects information about how you use the service" },
        { text: "2 years" }
      ]
    ]
  }) }}

  {{ govukRadios({
    name: "analytics",
    fieldset: {
      legend: {
        text: "Cookies that measure website use",
        classes: "govuk-fieldset__legend--s"
      }
    },
    items: [
      {
        value: "yes",
        text: "Use cookies that measure my website use"
      },
      {
        value: "no",
        text: "Do not use cookies that measure my website use",
        checked: true
      }
    ]
  }) }}

  <h2 class="govuk-heading-m">Strictly necessary cookies</h2>

  <p class="govuk-body">These essential cookies remember your progress through the service. They always need to be on.</p>

  {{ govukTable({
    caption: "Strictly necessary cookies",
    captionClasses: "govuk-visually-hidden",
    head: [
      { text: "Name" },
      { text: "Purpose" },
      { text: "Expires" }
    ],
    rows: [
      [
        { text: "session" },
        { text: "Keeps you signed in while you use the service" },
        { text: "When you close your browser" }
      ],
      [
        { text: "cookie_policy" },
        { text: "Saves your cookie consent settings" },
        { text: "1 year" }
      ]
    ]
  }) }}

  {{ govukButton({
    text: "Save cookie settings"
  }) }}

</form>
```

### Nunjucks — analytics plus other cookies

```njk
{% if cookiesSaved %}
  {{ govukNotificationBanner({
    type: "success",
    html: '<p class="govuk-body govuk-notification-banner__heading">You\'ve set your cookie preferences.</p>'
  }) }}
{% endif %}

<h1 class="govuk-heading-l">Cookies on [service name]</h1>

<p class="govuk-body">Cookies are files saved on your phone, tablet or computer when you visit a website.</p>

<p class="govuk-body">We use cookies to store information about how you use the [service name] service, such as the pages you visit.</p>

<h2 class="govuk-heading-m">Cookie settings</h2>

<form method="post" novalidate>

  {{ govukRadios({
    name: "analytics",
    fieldset: {
      legend: {
        text: "Cookies that measure website use",
        classes: "govuk-fieldset__legend--s"
      }
    },
    items: [
      {
        value: "yes",
        text: "Use cookies that measure my website use"
      },
      {
        value: "no",
        text: "Do not use cookies that measure my website use",
        checked: true
      }
    ]
  }) }}

  {{ govukRadios({
    name: "settings",
    fieldset: {
      legend: {
        text: "Cookies that remember your settings",
        classes: "govuk-fieldset__legend--s"
      }
    },
    items: [
      {
        value: "yes",
        text: "Use cookies that remember my settings"
      },
      {
        value: "no",
        text: "Do not use cookies that remember my settings",
        checked: true
      }
    ]
  }) }}

  {{ govukButton({
    text: "Save cookie settings"
  }) }}

</form>
```

## Accessibility

- The success notification banner must use `role="alert"` so screen readers announce the confirmation
- Each radio group must sit inside a `<fieldset>` with a `<legend>` that names the cookie category
- Cookie tables should have a `<caption>` (use `govuk-visually-hidden` if needed) so screen reader users understand the table's purpose
- The cookies page must be reachable from a "Cookies" link in the footer — do not hide it behind authentication
- After saving preferences, move focus to a logical position (typically the notification banner or the top of the page)
- The form must work without JavaScript using a standard POST

## Do and do not

**Do:**
- Use "Cookies on [service name]" as the page title
- Use the approved DWP intro text — do not change the wording
- Replace `[service name]` with the name of your service
- List every cookie the service sets, with name, purpose, and expiry
- Group cookies by purpose
- Use radio buttons for each non-essential cookie category
- Preselect the reject option on first visit
- Show a success notification banner after the user saves
- Link to the cookies page from the footer with the text "Cookies"
- Let users accept or reject each optional category individually when the service has more than one

**Do not:**
- Set non-essential cookies before the user gives consent
- Use checkboxes for consent — use radio buttons
- Redirect to a different page after saving — show the confirmation on the same page
- Ask users to consent to strictly necessary cookies
- Use the cookies page as a privacy notice
- Preselect the accept option as the default
- Change the approved DWP intro text

## Related components and patterns

- [GOV.UK Cookies page](../../../govuk-design-system/patterns/pages/cookies-page/SKILLS.md)
- [GOV.UK Cookie banner](../../../govuk-design-system/components/cookie-banner/SKILLS.md)
- [GOV.UK Notification banner](../../../govuk-design-system/components/notification-banner/SKILLS.md)
- [GOV.UK Radios](../../../govuk-design-system/components/radios/SKILLS.md)
- [GOV.UK Table](../../../govuk-design-system/components/table/SKILLS.md)
