---
category: patterns
description: Tell users about the cookies your service sets on their device, and let them accept or reject non-essential cookies.
govuk-frontend: "5.x"
keywords:
  - "consent"
  - "cookie policy"
  - "cookie settings"
  - "cookies"
  - "cookies page"
last-reviewed: "2026-04-03"
name: Cookies page
source: "https://design-system.service.gov.uk/patterns/cookies-page/"
subcategory: pages
---

# Cookies page

> Tell users about the cookies your service sets on their device, and let them accept or reject non-essential cookies.
> Source: https://design-system.service.gov.uk/patterns/cookies-page/

## Overview

A cookies page explains all the cookies a service sets on the user's device, what each cookie is for, and how long it lasts. Where cookies are not essential to running the service, users must be able to accept or reject them before the service places those cookies.

The UK's Privacy and Electronic Communications Regulations (PECR) require that users give informed consent before your service places non-essential cookies on their device. The cookies page is the canonical place to provide this information and to allow users to change their consent settings at any time.

GOV.UK Frontend provides a Cookie banner component to ask for consent on first visit. The cookies page uses radio buttons to let users change their choices at any time. When a user saves their preferences, a notification banner should confirm the change. The page must be accessible from the footer of every page in the service.

## When to use this pattern

Use a cookies page on every GOV.UK service that sets cookies beyond those strictly necessary for the service to function. This includes:

- Services that use analytics cookies (for example Google Analytics)
- Services that use any functional or settings cookies
- Services that use any third-party cookies
- Whenever the Cookie banner component appears — it should always link to the cookies page

## When not to use

If your service sets only a single strictly necessary session cookie, a full cookies page may not apply, though a brief explanation of the session cookie is still good practice.

Do not use the cookies page as a substitute for a full privacy notice — link to the privacy notice separately.

## How it works

The page title should be "Cookies on [service name]".

The cookies page must:

1. List every cookie the service sets, grouped by purpose (essential, analytics, settings)
2. For each cookie group, explain in plain English what the cookies do
3. For each non-essential cookie group, provide radio buttons ("Yes" / "No") so users can accept or reject that category — do not use checkboxes
4. Include a "Save cookie settings" button
5. Show a success notification banner after the user saves their preferences
6. Appear as a link in the footer of every page in the service
7. Not be behind a login — it must be publicly accessible

For each individual cookie (or group of similar cookies), include:
- Name of the cookie
- What it does
- When it expires

Do not ask for consent for strictly necessary cookies — the service needs them to work and users cannot switch them off. Display information about them but do not show accept/reject radio buttons.

Use JavaScript to set cookies only after the user has given consent. The page must also work without JavaScript using a standard form POST.

Update the cookies page whenever you add or change any cookies.

### Cookie categories

Cookies are typically grouped as:
- **Essential cookies** — strictly necessary; the service cannot run without them
- **Analytics cookies** — measure how users interact with the service
- **Settings cookies** — remember user preferences such as cookie consent itself

### Confirmation after saving

After a user saves their preferences, show a `govukNotificationBanner` with `type: "success"` at the top of the page, above the `<h1>`. Do not redirect to a different page.

## Code Examples

### HTML

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

<p class="govuk-body">We use 3 types of cookie. You can choose which cookies you're happy for us to use.</p>

<form method="post" novalidate>

  <div class="govuk-form-group">
    <fieldset class="govuk-fieldset">
      <legend class="govuk-fieldset__legend govuk-fieldset__legend--s">
        <h3 class="govuk-fieldset__heading">Cookies that measure website use</h3>
      </legend>
      <p class="govuk-body">We use Google Analytics to measure how you use the website so we can improve it based on user needs. We do not allow Google to use or share our analytics data.</p>

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
            <td class="govuk-table__cell">Helps us count the number of people who visit the service by tracking if you've visited before</td>
            <td class="govuk-table__cell">2 years</td>
          </tr>
          <tr class="govuk-table__row">
            <td class="govuk-table__cell">_ga_[id]</td>
            <td class="govuk-table__cell">Used by Google Analytics to find and track an individual session with your device</td>
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

  <p class="govuk-body">These essential cookies remember your progress through the form. They always need to be on.</p>

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

### Nunjucks

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

  {{ govukButton({
    text: "Save cookie settings"
  }) }}

</form>
```

## Accessibility

- The success notification banner must use `role="alert"` so screen readers announce the saved confirmation automatically
- Each radio group must be inside a `<fieldset>` with a `<legend>` that names the cookie category
- Cookie tables should have a `<caption>` (can be visually hidden with `govuk-visually-hidden`) so screen reader users understand the table's purpose
- The cookies page must be reachable via a link in the footer — do not hide it behind authentication
- After the user saves preferences, focus should return to a logical position (typically the notification banner or the top of the page)
- Do not use JavaScript to change the page in a way that removes the ability to save preferences without JS — the form must work without JavaScript using a standard POST

## Do and Do not

**Do:**
- Use "Cookies on [service name]" as the page title
- List every cookie the service sets, with name, purpose, and expiry
- Group cookies by purpose
- Use radio buttons (Yes / No) for each non-essential cookie category
- Show a success notification banner after the user saves settings
- Link to the cookies page from the footer
- Pre-select "Do not use" for non-essential cookies when there is no prior consent
- Update the page whenever you add or change cookies

**Do not:**
- Set non-essential cookies before the user has given consent
- Use checkboxes for consent — use radio buttons
- Redirect to a different page after saving — show the confirmation on the same page
- Ask users to consent to strictly necessary cookies
- Use the cookies page as a privacy notice
- Make the "Accept all" option the pre-selected default

## Related Components / Patterns

- [../../../components/cookie-banner/SKILLS.md](../../../components/cookie-banner/SKILLS.md)
- [../../../components/notification-banner/SKILLS.md](../../../components/notification-banner/SKILLS.md)
- [../../../components/radios/SKILLS.md](../../../components/radios/SKILLS.md)
- [../../../components/table/SKILLS.md](../../../components/table/SKILLS.md)
