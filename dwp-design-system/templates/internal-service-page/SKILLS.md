---
category: templates
description: Page template for DWP internal services that do not appear on service.gov.uk. Uses the DWP internal header and footer instead of GOV.UK branding.
dwp-frontend: "3.x"
keywords:
  - "caseworker"
  - "internal"
  - "internal service"
  - "page template"
  - "staff facing"
last-reviewed: "2026-04-04"
name: Internal service page
source: "https://design-system.dwp.gov.uk/templates/internal-service-page"
---

# Internal service page

> Page template for DWP internal services that do not appear on service.gov.uk. Uses the DWP internal header and footer instead of GOV.UK branding.
> Source: <https://design-system.dwp.gov.uk/templates/internal-service-page>

## Overview

The internal service page template replaces the standard GOV.UK page template for DWP services that staff use internally. It removes GOV.UK branding (no crown logo, no "GOV.UK" text) and uses the DWP internal header and footer instead.

The template uses `dwp-header` and `dwp-footer` classes from DWP Frontend. The main content area and width container still use standard `govuk-` classes from GOV.UK Frontend.

## When to use

- On DWP internal tools and caseworker systems
- On services that do not appear on service.gov.uk
- When the service has no public-facing users

## When not to use

- Do not use this template on public-facing DWP services — use the standard GOV.UK page template
- Do not use it on pages that appear on the GOV.UK domain
- Do not combine the DWP internal header with the GOV.UK header on the same page

## How it works

The template has three sections:

1. **Header** (`dwp-header`) — displays the service name as a link. No GOV.UK branding.
2. **Main content** (`govuk-main-wrapper`) — uses standard GOV.UK layout classes for the content area.
3. **Footer** (`dwp-footer`) — contains an inline list of footer links (for example, cookies, accessibility statement, terms and conditions).

Replace "Service name" with the name of your internal service.

### Header

The header contains a service name link inside `dwp-header__service-name`. This link should point to the service home page. Keep the service name short and descriptive so staff can identify which tool they have open.

### Footer

The footer uses an inline list (`dwp-footer__inline-list`) for links. Add links as needed — common examples include "Cookies", "Accessibility statement", and "Terms and conditions".

The footer includes a visually hidden `<h2>` with the text "footer links" so screen reader users can navigate to it.

## Code examples

### HTML

```html
<header class="dwp-header">
  <div class="dwp-header__content govuk-width-container">
    <div class="dwp-header__service-name">
      <a href="#" class="dwp-header__link">Service name</a>
    </div>
  </div>
</header>

<main class="govuk-main-wrapper govuk-main-wrapper--auto-spacing" id="main-content" role="main">
  <div class="govuk-width-container">
    <!-- page content goes here -->
  </div>
</main>

<footer class="dwp-footer">
  <div class="govuk-width-container">
    <h2 class="govuk-visually-hidden">footer links</h2>
    <ul class="dwp-footer__inline-list">
      <li class="dwp-footer__inline-list-item">
        <a class="dwp-footer__link" href="/cookies">Cookies</a>
      </li>
      <li class="dwp-footer__inline-list-item">
        <a class="dwp-footer__link" href="/accessibility-statement">Accessibility statement</a>
      </li>
      <li class="dwp-footer__inline-list-item">
        <a class="dwp-footer__link" href="/terms-and-conditions">Terms and conditions</a>
      </li>
    </ul>
  </div>
</footer>
```

### Full page template (Nunjucks)

```njk
<!DOCTYPE html>
<html lang="en" class="govuk-template">
  <head>
    <meta charset="utf-8">
    <title>Page title - Service name</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
    <link rel="stylesheet" href="/stylesheets/application.css">
  </head>
  <body class="govuk-template__body">
    <script>document.body.className += ' js-enabled' + ('noModule' in HTMLScriptElement.prototype ? ' govuk-frontend-supported' : '');</script>

    <a href="#main-content" class="govuk-skip-link" data-module="govuk-skip-link">Skip to main content</a>

    <header class="dwp-header">
      <div class="dwp-header__content govuk-width-container">
        <div class="dwp-header__service-name">
          <a href="/" class="dwp-header__link">Service name</a>
        </div>
      </div>
    </header>

    <main class="govuk-main-wrapper govuk-main-wrapper--auto-spacing" id="main-content" role="main">
      <div class="govuk-width-container">
        {% block content %}{% endblock %}
      </div>
    </main>

    <footer class="dwp-footer">
      <div class="govuk-width-container">
        <h2 class="govuk-visually-hidden">footer links</h2>
        <ul class="dwp-footer__inline-list">
          <li class="dwp-footer__inline-list-item">
            <a class="dwp-footer__link" href="/cookies">Cookies</a>
          </li>
          <li class="dwp-footer__inline-list-item">
            <a class="dwp-footer__link" href="/accessibility-statement">Accessibility statement</a>
          </li>
        </ul>
      </div>
    </footer>

    <script src="/javascripts/application.js"></script>
  </body>
</html>
```

## Accessibility

- Include a skip link (`govuk-skip-link`) that targets `#main-content` so keyboard users can bypass the header
- The `<main>` element must have `id="main-content"` and `role="main"` to match the skip link target
- The footer must include a visually hidden heading (`govuk-visually-hidden`) so screen reader users can find the footer links
- The header service name link must have descriptive text that matches the service name
- The template must remain usable at 400% zoom — content should reflow without horizontal scrolling
- Keyboard users must be able to tab through the skip link, header link, main content, and footer links in a logical order

## Do and do not

**Do:**
- Use this template for all pages within a DWP internal service
- Include a skip link before the header
- Always provide a service name in the header
- Use `govuk-width-container` for consistent layout
- Include a visually hidden heading in the footer

**Do not:**
- Do not use GOV.UK branding (crown logo, "GOV.UK" text) on internal service pages
- Do not use this template on public-facing services
- Do not combine the DWP internal header with the GOV.UK header
- Do not remove the `role="main"` attribute from the `<main>` element
- Do not remove the visually hidden footer heading

## Related components and patterns

- [GOV.UK Header](../../../govuk-design-system/components/header/SKILLS.md) — use this on public-facing services instead
- [GOV.UK Footer](../../../govuk-design-system/components/footer/SKILLS.md) — the standard GOV.UK footer for public services
- [GOV.UK Skip link](../../../govuk-design-system/components/skip-link/SKILLS.md)
- [GOV.UK Page template](../../../govuk-design-system/styles/page-template/SKILLS.md)
