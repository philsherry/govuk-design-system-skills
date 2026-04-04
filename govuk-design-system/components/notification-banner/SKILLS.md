---
category: components
description: Use a notification banner to tell the user about something they need to know about, but that is not urgent enough to justify an error or warning message.
govuk-frontend: "5.x"
keywords:
  - "alert"
  - "banner"
  - "banner message"
  - "notice"
  - "notification"
  - "notification banner"
last-reviewed: "2026-04-03"
name: Notification Banner
source: "https://design-system.service.gov.uk/components/notification-banner/"
---

# Notification Banner

> Use a notification banner to tell the user about something they need to know about, but that is not urgent enough to justify an error or warning message.
> Source: https://design-system.service.gov.uk/components/notification-banner/

## Overview

The notification banner tells users about something important that has happened or that requires their attention. It sits at the top of the main content area and uses a coloured header to distinguish itself from surrounding content.

There are two variants:

- **Default ("important")** — blue header, `role="region"`. Used for information relevant to the user's current context.
- **Success** — green header, `role="alert"`. Used to confirm that the user completed an action.

The component has JavaScript behaviour: when `type` is `"success"`, the component moves keyboard focus to itself on page load by default, ensuring assistive technology users learn the outcome.

## When to use this component

- To confirm a successful action after a page redirect (for example, after a user submits a form and the service redirects them back to a list).
- To tell users about a change that affects the whole page or service (for example, a deadline, a maintenance window, or a policy update).
- When you need to communicate an outcome that is less prominent than the panel component but more prominent than inset text.

## When not to use this component

- Do not use it for form validation errors — use the **error summary** and inline **error message** components.
- Do not use it for supplementary information that is not time-sensitive — use **inset text** instead.
- Do not use it for critical destructive warnings — use **warning text** instead.
- Avoid showing more than one notification banner on a page at once.

## How it works

The default variant renders with `role="region"` and an `aria-labelledby` pointing to the banner's title element, making it a named landmark. The title defaults to "Important".

The success variant renders with `role="alert"`, which causes screen readers to announce the content as soon as the page loads. The title defaults to "Success". The component moves focus to the banner automatically on page load unless you set `disableAutoFocus: true`.

Pass content (the body of the banner) via `text` or `html`. The body can contain headings, paragraphs, lists, and links.

## Code examples

### Default / Basic (Important)

#### HTML

```html
<div class="govuk-notification-banner" role="region" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner">
  <div class="govuk-notification-banner__header">
    <h2 class="govuk-notification-banner__title" id="govuk-notification-banner-title">
      Important
    </h2>
  </div>
  <div class="govuk-notification-banner__content">
    <p class="govuk-body">You have 7 days left to send your application. <a class="govuk-notification-banner__link" href="#">View application</a>.</p>
  </div>
</div>
```

#### Nunjucks

```njk
{{ govukNotificationBanner({
  html: '<p class="govuk-body">You have 7 days left to send your application. <a class="govuk-notification-banner__link" href="#">View application</a>.</p>'
}) }}
```

### Success variant

#### HTML

```html
<div class="govuk-notification-banner govuk-notification-banner--success" role="alert" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner">
  <div class="govuk-notification-banner__header">
    <h2 class="govuk-notification-banner__title" id="govuk-notification-banner-title">
      Success
    </h2>
  </div>
  <div class="govuk-notification-banner__content">
    <h3 class="govuk-notification-banner__heading">
      Training outcome recorded and trainee withdrawn
    </h3>
    <p class="govuk-body">Contact <a class="govuk-notification-banner__link" href="#">example@department.gov.uk</a> if you think there's a problem.</p>
  </div>
</div>
```

#### Nunjucks

```njk
{{ govukNotificationBanner({
  type: "success",
  html: '<h3 class="govuk-notification-banner__heading">Training outcome recorded and trainee withdrawn</h3><p class="govuk-body">Contact <a class="govuk-notification-banner__link" href="#">example@department.gov.uk</a> if you think there\'s a problem.</p>'
}) }}
```

### With custom title text

#### HTML

```html
<div class="govuk-notification-banner" role="region" aria-labelledby="govuk-notification-banner-title" data-module="govuk-notification-banner">
  <div class="govuk-notification-banner__header">
    <h2 class="govuk-notification-banner__title" id="govuk-notification-banner-title">
      Action required
    </h2>
  </div>
  <div class="govuk-notification-banner__content">
    <p class="govuk-body">You must <a class="govuk-notification-banner__link" href="#">confirm your email address</a> before you can submit.</p>
  </div>
</div>
```

#### Nunjucks

```njk
{{ govukNotificationBanner({
  titleText: "Action required",
  html: '<p class="govuk-body">You must <a class="govuk-notification-banner__link" href="#">confirm your email address</a> before you can submit.</p>'
}) }}
```

### With auto-focus disabled

By default, `type: "success"` moves focus to the banner on page load. Use `disableAutoFocus` to suppress this when you are managing focus manually.

#### Nunjucks

```njk
{{ govukNotificationBanner({
  type: "success",
  disableAutoFocus: true,
  html: '<h3 class="govuk-notification-banner__heading">Your profile has been updated</h3>'
}) }}
```

### With more than one content block

#### Nunjucks

```njk
{{ govukNotificationBanner({
  html: '
    <h3 class="govuk-notification-banner__heading">3 applications are awaiting review</h3>
    <p class="govuk-body">You need to respond before 28 March 2025.</p>
    <p class="govuk-body"><a class="govuk-notification-banner__link" href="/applications">View applications</a></p>
  '
}) }}
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes (or `html`) | Text content of the banner body. If there is an `html` value, ignore `text`. |
| `html` | string | Yes (or `text`) | HTML content of the banner body. Takes precedence over `text`. |
| `titleText` | string | No | Title shown in the coloured header area. Defaults to `"Important"` or `"Success"` depending on type. |
| `titleHtml` | string | No | HTML for the title. If provided, ignore `titleText`. |
| `titleHeadingLevel` | number | No | Heading level for the title element. Defaults to `2`. |
| `type` | string | No | Set to `"success"` for the green success variant. Defaults to the blue important variant. |
| `role` | string | No | Overrides the ARIA `role`. Defaults to `"region"` for default type, `"alert"` for success type. |
| `titleId` | string | No | `id` for the title element, referenced by `aria-labelledby`. Defaults to `"govuk-notification-banner-title"`. |
| `disableAutoFocus` | boolean | No | If `true`, prevents the component from moving focus to itself on page load. Defaults to `false`. |
| `classes` | string | No | Classes to add to the outer `<div>`. |
| `attributes` | object | No | HTML attributes (as key–value pairs) to add to the outer `<div>`. |

## Error messages

The notification banner does not have form error states. For validation errors use the error summary and error message components.

## Accessibility

- The default variant uses `role="region"` with `aria-labelledby`, creating a named landmark that screen reader users can navigate to.
- The success variant uses `role="alert"` — screen readers announce its content as soon as the page loads.
- For `type: "success"`, the component moves focus to the banner on page load by default, ensuring keyboard and screen reader users learn the outcome after a redirect.
- Use `disableAutoFocus: true` only when you are managing focus yourself, for example in a single-page application.
- Do not manually set `role="alert"` on the default/important variant — only the success variant should use `role="alert"`.
- Keep banner content concise. Long banners or more than one banner on a page can disorient screen reader users.

## Do and do not

**Do:**
- Use the success variant to confirm a completed action after a page redirect.
- Use the important variant for contextual information that affects what the user should do next.
- Include an actionable link when there is something the user can do in response.
- Keep content concise and scannable.

**Do not:**
- Do not use the notification banner for form validation errors.
- Do not display more than one notification banner on a page at the same time.
- Do not use the success variant for neutral or informational messages.
- Do not place large amounts of content or complex layouts inside the banner.

## Related components and patterns

- [Error Summary](../error-summary/SKILLS.md) — for form validation errors at the top of a page
- [Error Message](../error-message/SKILLS.md) — for inline field-level errors
- [Warning Text](../warning-text/SKILLS.md) — for critical or legal warnings
- [Inset Text](../inset-text/SKILLS.md) — for supplementary information that is not time-sensitive
- [Panel](../panel/SKILLS.md) — for prominent end-of-transaction confirmation
