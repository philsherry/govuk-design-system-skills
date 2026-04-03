---
category: components
description: The NHS footer provides links to supporting pages and legal information at the bottom of every page.
keywords:
  - "footer"
  - "legal links"
  - "page footer"
last-reviewed: "2026-04-03"
name: Footer
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/footer"
---

# Footer

> The NHS footer provides links to supporting pages and legal information at the bottom of every page.
> Source: https://service-manual.nhs.uk/design-system/components/footer

## Overview

The footer component appears at the bottom of every page in an NHS service. It provides links to supporting content such as accessibility statements, privacy policies, terms and conditions, and contact information. It also contains the NHS copyright notice.

The NHS footer uses the class `nhsuk-footer` and includes two main areas: a list of links and a copyright/legal section. The footer also includes the NHS logo in a compact form and a "Back to top" link on longer pages.

Unlike the GOV.UK footer, the NHS footer does not include Open Government Licence text. Instead, it uses the Crown copyright notice specific to NHS Digital content.

## When to use this component

Use the footer on every page of an NHS service. Include links to the accessibility statement, contact information, cookies policy, privacy policy, and terms and conditions.

## When not to use this component

Do not omit the footer from any page in an NHS service.

Do not use the footer as the primary navigation — use the header for that.

## How it works

The footer renders as a `<footer class="nhsuk-footer">` element containing a `<div class="nhsuk-width-container">`. Inside sits a list of links in a `<ul class="nhsuk-footer__list">` and a `<p class="nhsuk-footer__copyright">` element for the copyright notice.

Each link in the footer uses the class `nhsuk-footer__list-item-link`.

## Code Examples

### Default / Basic

#### HTML

```html
<footer role="contentinfo">
  <div class="nhsuk-footer" id="nhsuk-footer">
    <div class="nhsuk-width-container">
      <h2 class="nhsuk-u-visually-hidden">Support links</h2>
      <ul class="nhsuk-footer__list">
        <li class="nhsuk-footer__list-item">
          <a class="nhsuk-footer__list-item-link" href="/accessibility-statement">Accessibility statement</a>
        </li>
        <li class="nhsuk-footer__list-item">
          <a class="nhsuk-footer__list-item-link" href="/contact">Contact us</a>
        </li>
        <li class="nhsuk-footer__list-item">
          <a class="nhsuk-footer__list-item-link" href="/cookies">Cookies</a>
        </li>
        <li class="nhsuk-footer__list-item">
          <a class="nhsuk-footer__list-item-link" href="/privacy">Privacy policy</a>
        </li>
        <li class="nhsuk-footer__list-item">
          <a class="nhsuk-footer__list-item-link" href="/terms">Terms and conditions</a>
        </li>
      </ul>
      <p class="nhsuk-footer__copyright">&copy; Crown copyright</p>
    </div>
  </div>
</footer>
```

#### Nunjucks

```njk
{{ footer({
  links: [
    {
      label: "Accessibility statement",
      URL: "/accessibility-statement"
    },
    {
      label: "Contact us",
      URL: "/contact"
    },
    {
      label: "Cookies",
      URL: "/cookies"
    },
    {
      label: "Privacy policy",
      URL: "/privacy"
    },
    {
      label: "Terms and conditions",
      URL: "/terms"
    }
  ]
}) }}
```

### With custom copyright text

#### Nunjucks

```njk
{{ footer({
  links: [
    {
      label: "Accessibility statement",
      URL: "/accessibility-statement"
    },
    {
      label: "Cookies",
      URL: "/cookies"
    }
  ],
  copyright: "© NHS England 2026"
}) }}
```

### Minimal footer (no links)

#### Nunjucks

```njk
{{ footer({}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| links | array | No | Array of footer link objects. |
| links[].label | string | Yes | Text for the footer link. |
| links[].URL | string | Yes | URL for the footer link. |
| links[].attributes | object | No | HTML attributes for the link as key–value pairs. |
| copyright | string | No | Custom copyright text. Defaults to `"© Crown copyright"`. |
| classes | string | No | Classes to add to the footer element. |
| attributes | object | No | HTML attributes to add to the footer element as key–value pairs. |

## Accessibility

The footer uses a `<footer>` element with `role="contentinfo"`, making it a landmark that screen reader users can navigate to directly.

A visually hidden `<h2>Support links</h2>` heading labels the footer link list for screen reader users who navigate by headings.

Footer links use sufficient colour contrast against the footer's dark background. The `nhsuk-footer__list-item-link` class handles this styling.

Ensure link text describes the destination — avoid generic labels like "Link 1".

## Do and Do not

**Do:**
- Include the footer on every page of the service.
- Include an accessibility statement link in the footer.
- Include links to the cookies policy and privacy policy.
- Keep footer links concise and limited to high-priority supporting pages.
- Use the default copyright text unless you have a specific reason to change it.

**Do not:**
- Do not use the footer as the primary navigation for your service.
- Do not omit the footer from any page.
- Do not add excessive numbers of links to the footer.
- Do not duplicate navigation from the header in the footer.

## Related Components / Patterns

- [Header](https://service-manual.nhs.uk/design-system/components/header) — the primary site header that appears at the top of every page.
- [Breadcrumbs](https://service-manual.nhs.uk/design-system/components/breadcrumbs) — for hierarchical page navigation.
