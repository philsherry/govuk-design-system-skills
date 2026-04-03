---
category: components
description: A component that lets users leave a page containing sensitive information fast.
govuk-frontend: "5.x"
keywords:
  - "emergency exit"
  - "escape"
  - "exit"
  - "exit this page"
  - "safety"
  - "this"
last-reviewed: "2026-04-03"
name: Exit This Page
source: "https://design-system.service.gov.uk/components/exit-this-page/"
---

# Exit This Page

> A component that lets users leave a page containing sensitive information fast.
> Source: https://design-system.service.gov.uk/components/exit-this-page/

## Overview

The exit this page component provides a prominent button that redirects users away from the current page at once. Use it for services where users may need to leave fast and discreetly — for example, services supporting people experiencing domestic abuse, housing crises, or other sensitive situations.

The button uses warning button styling and by default redirects to the BBC Weather website (`https://bbc.co.uk/weather`). The destination is a neutral, publicly accessible page that does not reveal the service the user was visiting. The component also supports a keyboard shortcut: pressing Shift three times activates the exit behaviour, so users can leave without moving their hands to a mouse.

When activated, the component overlays the page with a loading screen while the redirect occurs, hiding the sensitive page during the transition.

## When to use this component

Use the exit this page component on any page within a service that handles sensitive personal information where users may need to leave fast for their safety. This includes services for:

- Reporting domestic abuse or violence
- Accessing support for homelessness or crisis situations
- Services dealing with immigration, asylum, or other sensitive personal circumstances

Place it prominently on all pages of such services, not the first page alone.

## When not to use this component

Do not use the exit this page component on standard government services that do not handle sensitive or potentially dangerous personal information. Do not use it as a general "cancel" or "log out" mechanism.

Do not use it as a replacement for the back link or as part of the standard navigation of a service.

## How it works

The `data-module="govuk-exit-this-page"` attribute activates the component. When the user clicks the button or presses Shift three times, the component navigates straight away to the `redirectUrl` (defaulting to `https://bbc.co.uk/weather`).

A full-page overlay appears momentarily while the redirect occurs, hiding sensitive content during the browser navigation. Assistive technologies cannot perceive this overlay during the brief transition.

The button uses `rel="noopener noreferrer"` and opens in the same tab (not a new tab) to avoid the previous page appearing in browser history more prominently than needed. The URL will still appear in browser history — tell users to clear their browser history if needed.

The component uses `<div class="govuk-exit-this-page" data-module="govuk-exit-this-page">` as its outer container, and the button inside has the classes `govuk-button govuk-button--warning govuk-exit-this-page__button`.

Place it in the page header area to keep it visible at the top of every page, ideally using a sticky or fixed position so it remains visible as users scroll.

## Code Examples

### Default / Basic

#### HTML

```html
<div class="govuk-exit-this-page" data-module="govuk-exit-this-page">
  <a
    href="https://bbc.co.uk/weather"
    role="button"
    draggable="false"
    class="govuk-button govuk-button--warning govuk-exit-this-page__button"
    data-module="govuk-button"
    rel="noopener noreferrer"
  >
    <span class="govuk-visually-hidden">Emergency</span>
    Exit this page
    <span class="govuk-visually-hidden">
      — pressing Shift 3 times will take you to the exit page
    </span>
  </a>
</div>
```

#### Nunjucks

```njk
{{ govukExitThisPage({
  redirectUrl: "https://bbc.co.uk/weather"
}) }}
```

### With custom text

#### Nunjucks

```njk
{{ govukExitThisPage({
  text: "Leave this page now",
  redirectUrl: "https://bbc.co.uk/weather"
}) }}
```

### With custom redirect URL

#### Nunjucks

```njk
{{ govukExitThisPage({
  redirectUrl: "https://www.google.co.uk"
}) }}
```

### With custom id and classes

#### Nunjucks

```njk
{{ govukExitThisPage({
  id: "exit-page-button",
  classes: "custom-exit-page",
  redirectUrl: "https://bbc.co.uk/weather"
}) }}
```

### Positioned in the page layout (common pattern)

```njk
{# Placed in the page layout template, above main content #}
<div class="govuk-width-container">
  {{ govukExitThisPage({
    redirectUrl: "https://bbc.co.uk/weather"
  }) }}
</div>
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| text | string | No | Text for the button label. Defaults to `"Exit this page"`. |
| html | string | No | HTML for the button label. If provided, `text` is ignored. |
| redirectUrl | string | No | URL to redirect to when the button is activated. Defaults to `"https://bbc.co.uk/weather"`. |
| id | string | No | `id` attribute for the outer `<div>` container. |
| classes | string | No | Classes to add to the outer `<div>` container. |
| attributes | object | No | HTML attributes for the outer `<div>` container. |

## Error Messages

The exit this page component does not accept user input and does not produce validation error messages.

## Accessibility

The component is keyboard accessible: pressing Shift three times triggers the exit behaviour, regardless of where focus is on the page. A `keydown` event listener on the document implements this.

A visually hidden message within the button label announces to screen reader users that the keyboard shortcut is available: "pressing Shift 3 times will take you to the exit page".

The full-page loading overlay that appears during the redirect uses a live region to tell screen readers the page is navigating away.

The button uses `role="button"` and `draggable="false"` because it renders as an `<a>` element (to support `rel="noopener noreferrer"`) but behaves as a button.

Place the component in a consistent location on every page of the service so users can find it fast. Use a sticky/fixed position at the top of the viewport so it remains visible regardless of scroll position.

## Do and Do not

**Do:**
- Use the exit this page component on all pages of services that handle sensitive personal information.
- Place it in a consistent, prominent location — ideally fixed at the top of the page.
- Use the default redirect URL (`https://bbc.co.uk/weather`) unless you have a researched reason to use an alternative.
- Inform users in the service's content that they can press Shift three times to leave fast.
- Test keyboard activation (Shift × 3) as well as click/tap activation.

**Do not:**
- Do not use the exit this page component as a general navigation or logout mechanism.
- Do not use a URL that reveals anything about the service the user was visiting.
- Do not use it on services that do not handle sensitive personal information.
- Do not hide it in the footer or a position that users would struggle to find.
- Do not open the redirect URL in a new tab — doing so leaves the sensitive page visible.

## Related Components / Patterns

- [Button](https://design-system.service.gov.uk/components/button/) — the underlying button component, used in warning variant.
- [Safeguarding pattern](https://design-system.service.gov.uk/patterns/safeguarding/) — broader guidance on designing safe services for at-risk users.
