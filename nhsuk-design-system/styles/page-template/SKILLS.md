---
category: styles
description: The NHS page template provides the required HTML structure, skip link, header, main content area, and footer for any NHS service page.
keywords:
  - "HTML template"
  - "document structure"
  - "page structure"
  - "page template"
  - "template"
last-reviewed: "2026-04-03"
name: Page Template
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/styles/page-template"
---

# Page Template

> The NHS page template provides the required HTML structure, skip link, header, main content area, and footer for any NHS service page.
> Source: <https://service-manual.nhs.uk/design-system/styles/page-template>

## Overview

The NHS page template defines the full HTML document structure for an NHS service. It includes all required meta tags, the NHS header and footer, a skip link for keyboard accessibility, and the main content wrapper. Using the template ensures consistency across services and satisfies NHS accessibility and branding requirements.

The template ships as a Nunjucks layout (via `nhsuk/template.njk`) for Node.js-based services, and as a plain HTML reference for other environments.

## When to use this style

Use the page template for every page in an NHS digital service. All public-facing NHS services should use this structure to maintain brand consistency and meet accessibility requirements.

## When not to use this style

Do not use this template for non-NHS products. Do not use the NHS logo, the Frutiger typeface, or the `nhsuk-` class namespace on services that are not part of the NHS.

## How it works

### Required HTML attributes

The `<html>` element must include `lang="en"` and the class `nhsuk-template`. The `<body>` element must include the class `nhsuk-template__body`. JavaScript adds a `js-enabled` class to the body for progressive enhancement.

### Required meta tags

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### Skip link

A skip link must appear as the first focusable element on the page, allowing keyboard and screen reader users to bypass the header navigation:

```html
<a class="nhsuk-skip-link" href="#maincontent">Skip to main content</a>
```

### Header

The NHS header component comes directly after the skip link. It displays the NHS logo and service name if applicable.

### Main content area

Two elements wrap the main content:

```html
<div class="nhsuk-width-container">
  <main class="nhsuk-main-wrapper" id="maincontent" role="main">
    <!-- page content -->
  </main>
</div>
```

The `id="maincontent"` attribute is the skip link target and must be present. The `role="main"` attribute supports compatibility with older assistive technologies.

### Footer

The NHS footer component closes the page. It includes NHS copyright and links to standard NHS pages (accessibility statement, contact us, cookies, terms and conditions).

### Nunjucks template

Extend the base template and override the provided blocks:

```njk
{% extends "template.njk" %}

{% block pageTitle %}My service - NHS{% endblock %}

{% block head %}
  <link rel="stylesheet" href="/assets/styles.css">
{% endblock %}

{% block header %}
  {{ header({
    service: {
      name: "My service"
    }
  }) }}
{% endblock %}

{% block content %}
  <div class="nhsuk-grid-row">
    <div class="nhsuk-grid-column-two-thirds">
      <h1 class="nhsuk-heading-xl">Page heading</h1>
    </div>
  </div>
{% endblock %}

{% block footer %}
  {{ footer({}) }}
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
| `header` | Replace or augment the NHS header |
| `content` | Inner content within the default main block |
| `footer` | Replace or augment the NHS footer |
| `bodyEnd` | Content directly before `</body>` closes (scripts) |

## Code examples

### Minimal HTML page template

```html
<!DOCTYPE html>
<html lang="en" class="nhsuk-template">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Page title - My service - NHS</title>
    <link rel="stylesheet" href="/assets/nhsuk-frontend.min.css">
  </head>
  <body class="nhsuk-template__body">
    <script>
      document.body.className += ' js-enabled';
    </script>

    <a class="nhsuk-skip-link" href="#maincontent">Skip to main content</a>

    <header class="nhsuk-header" role="banner">
      <!-- NHS header -->
    </header>

    <div class="nhsuk-width-container">
      <main class="nhsuk-main-wrapper" id="maincontent" role="main">
        <!-- Page content -->
      </main>
    </div>

    <footer role="contentinfo">
      <!-- NHS footer -->
    </footer>

    <script src="/assets/nhsuk-frontend.min.js"></script>
  </body>
</html>
```

### Page title format

Page titles should follow this pattern to aid navigation in browser tabs and screen reader announcements:

```text
[Page heading] - [Service name] - NHS
```

When a page contains a validation error, prefix the title with "Error:":

```text
Error: [Page heading] - [Service name] - NHS
```

## Accessibility

- The skip link must be the first focusable element on the page. It allows keyboard users to skip repeated navigation.
- Set `lang="en"` on the `<html>` element so screen readers use the correct language pronunciation rules.
- Set `id="maincontent"` on `<main>` as the skip link target.
- `role="main"` supports older assistive technologies that do not fully support HTML5 landmark elements.
- Page titles must be unique and descriptive. Avoid generic titles such as "NHS".

## Do and do not

**Do:**

- Include `charset="UTF-8"` within the first 1024 bytes of the document.
- Include the viewport meta tag on every page.
- Use the skip link as the first focusable element.
- Set a meaningful, unique `<title>` for every page.
- Add `id="maincontent"` to the `<main>` element.

**Do not:**

- Remove or reorder the skip link.
- Use `nhsuk-template` or `nhsuk-template__body` classes for non-NHS services.
- Omit the `lang` attribute from `<html>`.
- Use the NHS Frutiger typeface outside NHS services — it requires an NHS licence.
- Place render-blocking scripts inside `<head>` unless they are essential and properly deferred.

## Related components and patterns

- [Header component](https://service-manual.nhs.uk/design-system/components/header)
- [Footer component](https://service-manual.nhs.uk/design-system/components/footer)
- [Skip link component](https://service-manual.nhs.uk/design-system/components/skip-link)
- [Layout style](https://service-manual.nhs.uk/design-system/styles/layout)
- [NHS UK Frontend on GitHub](https://github.com/nhsuk/nhsuk-frontend)
