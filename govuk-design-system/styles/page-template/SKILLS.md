---
category: styles
description: The GOV.UK page template provides the required HTML structure, meta tags, skip link, header, main content area, and footer for any GOV.UK service page. This is the mandatory starting point for all services using GOV.UK Frontend.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Page Template
---

# Page Template

> The GOV.UK page template provides the required HTML structure, meta tags, skip link, header, main content area, and footer for any GOV.UK service page. This is the mandatory starting point for all services using GOV.UK Frontend.
> Source: https://design-system.service.gov.uk/styles/page-template/

---

## Overview

The GOV.UK page template defines the full HTML document structure required for a compliant GOV.UK service. It includes all required meta tags, the GOV.UK header and footer, a skip link for keyboard accessibility, and the main content wrapper. Using the template ensures consistency across services and satisfies GOV.UK accessibility and branding requirements.

The template ships as a Nunjucks macro (via `govuk/template.njk`) for use with Node.js-based services, and as a plain HTML reference for other environments.

---

## When to use this style

Use the page template for every page in a GOV.UK service. All public-facing GOV.UK services must use this structure.

---

## When not to use this style

Do not use this template for internal tools, admin interfaces, or pages that are not part of a public GOV.UK service. Non-GOV.UK products should not use GDS Transport or GOV.UK branding.

---

## How it works

### Required HTML attributes

The `<html>` element must include `lang="en"` and the class `govuk-template`. The `<body>` element must include the class `govuk-template__body`. JavaScript adds a `js-enabled` class to the body to enable progressive enhancement.

### Required meta tags

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
```

The charset declaration must appear within the first 1024 bytes of the document. The viewport meta tag ensures correct rendering on mobile devices.

### Skip link

A skip link must appear as the first focusable element in the page, allowing keyboard and screen reader users to bypass the header navigation and jump directly to the main content:

```html
<a href="#main-content" class="govuk-skip-link" data-module="govuk-skip-link">
  Skip to main content
</a>
```

### Header

The GOV.UK header component comes directly after the skip link. It displays the GOV.UK crown logo and service name if applicable.

### Main content area

Two elements wrap the main content:

```html
<div class="govuk-width-container">
  <main class="govuk-main-wrapper" id="main-content" role="main">
    <!-- page content -->
  </main>
</div>
```

The `id="main-content"` attribute is the skip link target and must be present. The `role="main"` attribute supports compatibility with older assistive technologies.

### Footer

The GOV.UK footer component closes the page. It includes Crown copyright and the Open Government Licence notice.

### Nunjucks template

Extend the base template and override the provided blocks:

```njk
{% extends "govuk/template.njk" %}

{% block pageTitle %}My service – GOV.UK{% endblock %}

{% block head %}
  <link rel="stylesheet" href="/assets/styles.css">
{% endblock %}

{% block bodyStart %}{% endblock %}

{% block header %}
  {{ govukHeader({ serviceName: "My service" }) }}
{% endblock %}

{% block main %}
  <div class="govuk-width-container">
    <main class="govuk-main-wrapper" id="main-content" role="main">
      {% block content %}{% endblock %}
    </main>
  </div>
{% endblock %}

{% block footer %}
  {{ govukFooter({}) }}
{% endblock %}

{% block bodyEnd %}
  <script src="/assets/javascript.js"></script>
{% endblock %}
```

### Available Nunjucks blocks

| Block | Purpose |
|---|---|
| `pageTitle` | Contents of `<title>` |
| `head` | Extra content inside `<head>` (stylesheets, meta tags) |
| `bodyStart` | Content directly after `<body>` opens |
| `header` | Replace or augment the GOV.UK header |
| `main` | The full main content area, including the width container |
| `content` | Inner content within the default main block |
| `footer` | Replace or augment the GOV.UK footer |
| `bodyEnd` | Content directly before `</body>` closes (scripts) |

---

## Code Examples

### Minimal HTML page template

```html
<!DOCTYPE html>
<html lang="en" class="govuk-template">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Page title – My service – GOV.UK</title>
    <link rel="stylesheet" href="/assets/govuk-frontend.min.css">
  </head>
  <body class="govuk-template__body">
    <script>
      document.body.className += ' js-enabled' + ('noModule' in HTMLScriptElement.prototype ? ' govuk-frontend-supported' : '');
    </script>

    <a href="#main-content" class="govuk-skip-link" data-module="govuk-skip-link">
      Skip to main content
    </a>

    <header class="govuk-header" data-module="govuk-header">
      <!-- GOV.UK header -->
    </header>

    <div class="govuk-width-container">
      <main class="govuk-main-wrapper" id="main-content" role="main">
        <!-- Page content -->
      </main>
    </div>

    <footer class="govuk-footer">
      <!-- GOV.UK footer -->
    </footer>

    <script type="module" src="/assets/govuk-frontend.min.js"></script>
    <script type="module">
      import { initAll } from '/assets/govuk-frontend.min.js'
      initAll()
    </script>
  </body>
</html>
```

### Page title format

Page titles should follow this pattern to aid navigation in browser tabs and screen reader announcements:

```text
[Page or error heading] – [Service name] – GOV.UK
```

When a page contains a validation error, prefix the title with "Error:":

```text
Error: [Page or error heading] – [Service name] – GOV.UK
```

---

## Accessibility

- The skip link must be the first focusable element on the page. It allows keyboard users to skip repeated navigation.
- You must set `lang="en"` on the `<html>` element so screen readers use the correct language pronunciation rules.
- You must set `id="main-content"` on `<main>` as the skip link target.
- `role="main"` supports older assistive technologies that do not fully support HTML5 landmark elements.
- The `govuk-frontend-supported` class tells GOV.UK Frontend JavaScript to activate enhanced behaviour in supported browsers only, preserving a no-JS baseline.
- Page titles must be unique and descriptive. Avoid generic titles such as "GOV.UK".

---

## Do / Don't

**Do:**
- Include `charset="UTF-8"` within the first 1024 bytes of the document.
- Include the viewport meta tag on every page.
- Use the skip link as the first focusable element.
- Set a meaningful, unique `<title>` for every page.
- Add `id="main-content"` to the `<main>` element.
- Initialise GOV.UK Frontend JavaScript using `initAll()` or individual component imports.

**Don't:**
- Remove or reorder the skip link.
- Use `govuk-template` or `govuk-template__body` classes for non-GOV.UK services.
- Omit the `lang` attribute from `<html>`.
- Place render-blocking scripts inside `<head>` unless they are essential and properly deferred.
- Use GDS Transport typeface outside gov.uk domains — it requires a Crown licence.

---

## Related Components / Patterns

- [Header component](https://design-system.service.gov.uk/components/header/)
- [Footer component](https://design-system.service.gov.uk/components/footer/)
- [Skip link component](https://design-system.service.gov.uk/components/skip-link/)
- [Layout style](https://design-system.service.gov.uk/styles/layout/)
- [GOV.UK Frontend on GitHub](https://github.com/alphagov/govuk-frontend)
