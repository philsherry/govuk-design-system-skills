---
category: components
description: Use the skip link component to help keyboard users skip past repeated navigation and header content and jump directly to the main content of a page.
govuk-frontend: "5.x"
keywords:
  - "bypass"
  - "link"
  - "skip"
  - "skip link"
  - "skip navigation"
  - "skip to content"
last-reviewed: "2026-04-03"
name: Skip Link
source: "https://design-system.service.gov.uk/components/skip-link/"
---

# Skip Link

> Use the skip link component to help keyboard users skip past repeated navigation and header content and jump directly to the main content of a page.
> Source: https://design-system.service.gov.uk/components/skip-link/

## Overview

The skip link is a visually hidden link that becomes visible when it receives keyboard focus. It allows keyboard users and screen reader users to bypass repeated navigation, header, and phase banner content at the top of every page and jump directly to the main content.

Without a skip link, keyboard users must tab through every interactive element in the header and navigation on every page before reaching the main content. The skip link solves this by providing a shortcut to the `<main>` element.

The skip link must be the first focusable element on the page — placed before the GOV.UK header, before any navigation, before everything else.

## When to use this component

- On every page of every GOV.UK service, without exception.
- The skip link should be the first element in the `<body>` tag.

## When not to use this component

No valid reason exists to omit the skip link. Providing a skip link is a mandatory accessibility requirement for all GOV.UK services.

## How it works

The component renders as an `<a>` element with the class `govuk-skip-link`. The `href` attribute points to the `id` of the main content element — typically `#main-content`. The link text defaults to "Skip to main content".

The target element (the `<main>` element with `id="main-content"`) must be focusable. GOV.UK Frontend's standard page template adds `tabindex="-1"` to the main wrapper to allow programmatic focus from the skip link without placing it in the natural tab order.

The JavaScript module (`govuk-skip-link`) manages smooth scrolling and focus when the user activates the link.

## Code examples

### Default / Basic

#### HTML

```html
<a href="#main-content" class="govuk-skip-link" data-module="govuk-skip-link">Skip to main content</a>
```

#### Nunjucks

```njk
{{ govukSkipLink({
  href: "#main-content",
  text: "Skip to main content"
}) }}
```

### Complete page structure example

The skip link is the first element in `<body>`, before the header. The main content target has `id="main-content"` and `tabindex="-1"`.

```html
<!DOCTYPE html>
<html lang="en" class="govuk-template">
  <head>
    <!-- head content -->
  </head>
  <body class="govuk-template__body">

    <a href="#main-content" class="govuk-skip-link" data-module="govuk-skip-link">Skip to main content</a>

    <header class="govuk-header" role="banner" data-module="govuk-header">
      <!-- GOV.UK header -->
    </header>

    <div class="govuk-width-container">
      <main class="govuk-main-wrapper" id="main-content" role="main" tabindex="-1">
        <!-- page content -->
      </main>
    </div>

  </body>
</html>
```

### Pointing to a non-standard target

If your page uses a different `id` for the main content area, point the skip link to that element instead.

#### Nunjucks

```njk
{{ govukSkipLink({
  href: "#content",
  text: "Skip to main content"
}) }}
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `href` | string | Yes | The URL fragment the skip link points to — for example, `"#main-content"`. |
| `text` | string | No | The link text. Defaults to `"Skip to main content"`. |
| `classes` | string | No | Classes to add to the `<a>` element. |
| `attributes` | object | No | HTML attributes (as key–value pairs) to add to the `<a>` element. |

## Error messages

The skip link does not have error states. This is a navigation component.

## Accessibility

- The skip link is the primary mechanism for keyboard and screen reader users to bypass repetitive navigation content.
- It must be the first focusable element on the page — placed before the GOV.UK header and all other content.
- The target element (`<main id="main-content">`) must have `tabindex="-1"` so it can receive programmatic focus from the skip link. The `govuk-main-wrapper` class handles this in GOV.UK Frontend's standard page templates.
- The skip link uses CSS to visually hide until it receives keyboard focus (a `govuk-visually-hidden-focusable` approach).
- The standard text "Skip to main content" is well understood by screen reader users and changing it requires strong user research justification.
- The GOV.UK Frontend JavaScript module improves cross-browser compatibility for the focus and scroll behaviour when the user activates the skip link.

## Do and do not

**Do:**
- Place the skip link as the first element inside `<body>`, before everything else.
- Ensure the target element has a matching `id` attribute and `tabindex="-1"`.
- Use the standard "Skip to main content" link text.
- Include the skip link on every page of the service.

**Do not:**
- Do not omit the skip link — providing one is a mandatory accessibility requirement.
- Do not position the skip link anywhere other than before the header.
- Do not point the skip link to an element that does not exist on the page or that does not have `tabindex="-1"`.
- Do not make the skip link permanently visible — it should only appear when it receives keyboard focus.

## Related components and patterns

- [Header](../header/SKILLS.md) — place the skip link before the header
- [Service Navigation](../service-navigation/SKILLS.md) — the skip link allows bypassing service navigation
