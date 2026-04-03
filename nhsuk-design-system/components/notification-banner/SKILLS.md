---
category: components
description: Use a notification banner to tell users about something they need to know, but that does not require an error or warning message.
keywords:
  - "alert"
  - "banner"
  - "banner message"
  - "notice"
  - "notification"
  - "notification banner"
last-reviewed: "2026-04-03"
name: Notification Banner
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/notification-banner"
---

# Notification Banner

> Use a notification banner to tell users about something they need to know, but that does not require an error or warning message.
> Source: https://service-manual.nhs.uk/design-system/components/notification-banner

## Overview

The notification banner tells users about something important that has happened or that requires their attention. It sits at the top of the main content area and uses a coloured header to distinguish itself from surrounding content.

The component supports two variants:

- **Default ("important")** — blue header, `role="region"`. Use this for information relevant to the user's current context.
- **Success** — green header, `role="alert"`. Use this to confirm that the user completed an action.

The component has JavaScript behaviour: when `type` equals `"success"`, the component moves keyboard focus to itself on page load by default, so assistive technology users learn the outcome.

## When to use this component

- To confirm a successful action after a page redirect (for example, after a user submits a form and the service redirects them back to a list).
- To tell users about a change that affects the whole page or service (for example, a deadline or a maintenance window).
- When you need to communicate an outcome that has less prominence than the panel component but more prominence than inset text.

## When not to use this component

- Do not use it for form validation errors — use the **error summary** and inline **error message** components.
- Do not use it for supplementary information that has no time sensitivity — use **inset text** instead.
- Do not use it for urgent health warnings — use the **warning callout** component.
- Avoid showing more than one notification banner on a page at once.

## How it works

The default variant renders with `role="region"` and an `aria-labelledby` pointing to the banner's title element, creating a named landmark. The title defaults to "Important".

The success variant renders with `role="alert"`, which causes screen readers to announce the content as soon as the page loads. The title defaults to "Success". The component moves focus to the banner on page load unless you set `disableAutoFocus: true`.

Pass content (the body of the banner) via `text` or `html`. The body can contain headings, paragraphs, lists, and links.

## Code Examples

### Default / Basic (Important)

#### HTML

```html
<div class="nhsuk-notification-banner" role="region" aria-labelledby="nhsuk-notification-banner-title" data-module="nhsuk-notification-banner">
  <div class="nhsuk-notification-banner__header">
    <h2 class="nhsuk-notification-banner__title" id="nhsuk-notification-banner-title">
      Important
    </h2>
  </div>
  <div class="nhsuk-notification-banner__content">
    <p class="nhsuk-body">You have 7 days left to complete your registration. <a class="nhsuk-notification-banner__link" href="#">Complete registration</a>.</p>
  </div>
</div>
```

#### Nunjucks

```njk
{{ notificationBanner({
  html: '<p class="nhsuk-body">You have 7 days left to complete your registration. <a class="nhsuk-notification-banner__link" href="#">Complete registration</a>.</p>'
}) }}
```

### Success variant

#### HTML

```html
<div class="nhsuk-notification-banner nhsuk-notification-banner--success" role="alert" aria-labelledby="nhsuk-notification-banner-title" data-module="nhsuk-notification-banner">
  <div class="nhsuk-notification-banner__header">
    <h2 class="nhsuk-notification-banner__title" id="nhsuk-notification-banner-title">
      Success
    </h2>
  </div>
  <div class="nhsuk-notification-banner__content">
    <h3 class="nhsuk-notification-banner__heading">
      Appointment booked
    </h3>
    <p class="nhsuk-body">We have sent a confirmation email to your registered address.</p>
  </div>
</div>
```

#### Nunjucks

```njk
{{ notificationBanner({
  type: "success",
  html: '<h3 class="nhsuk-notification-banner__heading">Appointment booked</h3><p class="nhsuk-body">We have sent a confirmation email to your registered address.</p>'
}) }}
```

### With custom title text

#### Nunjucks

```njk
{{ notificationBanner({
  titleText: "Action required",
  html: '<p class="nhsuk-body">You must <a class="nhsuk-notification-banner__link" href="#">verify your email address</a> before you can continue.</p>'
}) }}
```

### With auto-focus disabled

By default, `type: "success"` moves focus to the banner on page load. Use `disableAutoFocus` to suppress this when you manage focus yourself.

#### Nunjucks

```njk
{{ notificationBanner({
  type: "success",
  disableAutoFocus: true,
  html: '<h3 class="nhsuk-notification-banner__heading">Your details have been updated</h3>'
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes (or `html`) | Text content of the banner body. If `html` appears, ignore `text`. |
| `html` | string | Yes (or `text`) | HTML content of the banner body. Takes precedence over `text`. |
| `titleText` | string | No | Title shown in the coloured header area. Defaults to `"Important"` or `"Success"` depending on type. |
| `titleHtml` | string | No | HTML for the title. If provided, ignore `titleText`. |
| `titleHeadingLevel` | number | No | Heading level for the title element. Defaults to `2`. |
| `type` | string | No | Set to `"success"` for the green success variant. Defaults to the blue important variant. |
| `role` | string | No | Overrides the ARIA `role`. Defaults to `"region"` for default type, `"alert"` for success type. |
| `titleId` | string | No | `id` for the title element, referenced by `aria-labelledby`. Defaults to `"nhsuk-notification-banner-title"`. |
| `disableAutoFocus` | boolean | No | If `true`, prevents the component from moving focus to itself on page load. Defaults to `false`. |
| `classes` | string | No | Classes to add to the outer `<div>`. |
| `attributes` | object | No | HTML attributes (as key-value pairs) to add to the outer `<div>`. |

## Accessibility

- The default variant uses `role="region"` with `aria-labelledby`, creating a named landmark that screen reader users can navigate to.
- The success variant uses `role="alert"` — screen readers announce its content as soon as the page loads.
- For `type: "success"`, the component moves focus to the banner on page load by default, so keyboard and screen reader users learn the outcome after a redirect.
- Use `disableAutoFocus: true` only when you manage focus yourself, for example in a single-page application.
- Do not set `role="alert"` on the default/important variant — only the success variant should use `role="alert"`.
- Keep banner content concise. Long banners or more than one banner on a page can disorient screen reader users.

## Do and Do not

**Do:**
- Use the success variant to confirm a completed action after a page redirect.
- Use the important variant for contextual information that affects what the user should do next.
- Include an actionable link when the user can do something in response.
- Keep content concise and scannable.

**Do not:**
- Do not use the notification banner for form validation errors.
- Do not display more than one notification banner on a page at the same time.
- Do not use the success variant for neutral or informational messages.
- Do not place large amounts of content or complex layouts inside the banner.

## Related Components / Patterns

- [Error Summary](../error-summary/SKILLS.md) — for form validation errors at the top of a page
- [Error Message](../error-message/SKILLS.md) — for inline field-level errors
- [Warning Callout](../warning-callout/SKILLS.md) — for important health warnings
- [Inset Text](../inset-text/SKILLS.md) — for supplementary information without time sensitivity
- [Panel](../panel/SKILLS.md) — for prominent end-of-transaction confirmation
