---
category: components
collection: internal
description: A footer for DWP internal services, based on the GOV.UK footer but without Crown copyright or the Royal Coat of Arms.
dwp-frontend: "3.x"
keywords:
  - "agent-facing"
  - "footer"
  - "internal service"
  - "meta links"
  - "navigation"
last-reviewed: "2026-04-04"
name: Internal service footer
source: "https://design-system.dwp.gov.uk/components/internal-service-footer"
---

# Internal service footer

> A footer for DWP internal services, based on the GOV.UK footer but without Crown copyright or the Royal Coat of Arms.
> Source: <https://design-system.dwp.gov.uk/components/internal-service-footer>

## Overview

The internal service footer sits at the bottom of DWP internal service pages. It follows the same structure as the GOV.UK footer but omits Crown copyright and the Royal Coat of Arms, since internal services do not carry GOV.UK branding. The footer supports navigation sections, meta links, and plain text content in any combination.

## When to use this component

Use this footer for internal services not hosted on `service.gov.uk` domains. Users of these services are DWP staff but may also include staff of other organisations such as local authorities.

## When not to use this component

If your service runs on a `service.gov.uk` domain, use the [GOV.UK footer component](https://design-system.service.gov.uk/components/footer/).

## How it works

Like the GOV.UK footer, the internal service footer can adapt to your service's needs. When deciding what to place in the footer, remember that:

- Information in the footer is sometimes skipped or not noticed
- The grey background lowers the contrast ratio, which limits readability for some people

The footer supports three content types: navigation sections, meta links, and plain text. You can combine them.

## Code examples

### Nunjucks — with meta links

```njk
{{ dwpFooter({
  meta: {
    visuallyHiddenTitle: "Footer links",
    items: [
      { href: "/accessibility-statement", text: "Accessibility statement" },
      { href: "/cookies", text: "Cookies" },
      { href: "/privacy-policy", text: "Privacy policy" }
    ]
  }
}) }}
```

### Nunjucks — with secondary navigation

```njk
{{ dwpFooter({
  navigation: [
    {
      title: "Support",
      width: "two-thirds",
      columns: 2,
      items: [
        { text: "Help", href: "/help" },
        { text: "Contact us", href: "/contact" },
        { text: "Feedback", href: "/feedback" }
      ]
    },
    {
      title: "Related services",
      width: "one-third",
      items: [
        { text: "Service A", href: "/service-a" },
        { text: "Service B", href: "/service-b" }
      ]
    }
  ]
}) }}
```

### Nunjucks — with navigation, meta links, and plain text

```njk
{{ dwpFooter({
  navigation: [
    {
      title: "Support",
      width: "two-thirds",
      columns: 2,
      items: [
        { text: "Help", href: "/help" },
        { text: "Contact us", href: "/contact" }
      ]
    }
  ],
  meta: {
    visuallyHiddenTitle: "Footer links",
    items: [
      { href: "/accessibility-statement", text: "Accessibility statement" },
      { href: "/cookies", text: "Cookies" }
    ],
    text: "Built by the Example team"
  }
}) }}
```

## Nunjucks macro options

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `navigation` | array | No | Navigation sections (see below) |
| `meta` | object | No | Meta links and text (see below) |
| `classes` | string | No | Extra classes for the `<footer>` element |
| `containerClasses` | string | No | Extra classes for the container |
| `attributes` | object | No | HTML attributes for the `<footer>` element |

### Navigation item parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `title` | string | Section heading |
| `width` | string | Grid width: "full", "two-thirds", "one-third", etc. |
| `columns` | number | Number of columns for the link list |
| `items` | array | Links, each with `text`, `href`, and optional `attributes` |

### Meta parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `visuallyHiddenTitle` | string | Accessible heading for meta section |
| `items` | array | Links, each with `text`, `href`, and optional `attributes` |
| `text` | string | Plain text content |
| `html` | string | HTML content (takes precedence over `text`) |

## HTML structure

```html
<footer class="dwp-footer">
  <div class="govuk-width-container">
    <h2 class="govuk-visually-hidden">Footer links</h2>
    <ul class="dwp-footer__inline-list">
      <li class="dwp-footer__inline-list-item">
        <a class="dwp-footer__link" href="/accessibility-statement">Accessibility statement</a>
      </li>
      <li class="dwp-footer__inline-list-item">
        <a class="dwp-footer__link" href="/cookies">Cookies</a>
      </li>
    </ul>
  </div>
</footer>
```

## Accessibility

- When using navigation sections, each section has an `<h2>` heading for structure.
- Meta links have a visually hidden heading (`visuallyHiddenTitle`) so screen readers can identify the section.
- The grey background lowers contrast — do not place critical information in the footer.

## CSS classes

| Class | Purpose |
|-------|---------|
| `dwp-footer` | Block: the footer component |
| `dwp-footer__navigation` | Element: navigation sections container |
| `dwp-footer__section` | Element: a navigation section |
| `dwp-footer__heading` | Element: section heading |
| `dwp-footer__list` | Element: link list |
| `dwp-footer__list--columns-2` | Modifier: two-column list layout |
| `dwp-footer__list-item` | Element: list item |
| `dwp-footer__link` | Element: link |
| `dwp-footer__section-break` | Element: `<hr>` between navigation and meta |
| `dwp-footer__inline-list` | Element: horizontal meta link list |
| `dwp-footer__inline-list-item` | Element: meta link list item |

## Do and do not

**Do:**
- Do include an accessibility statement, cookies page, and privacy policy link in the meta section.
- Do set a descriptive `visuallyHiddenTitle` on the meta section so screen readers can identify it.
- Do keep footer content brief — users often skip information placed in the footer.

**Do not:**
- Do not place critical information in the footer — the grey background lowers contrast and users may miss it.
- Do not use this footer on `service.gov.uk` domains — use the GOV.UK footer component instead.
- Do not add Crown copyright or the Royal Coat of Arms — this footer is for internal services without GOV.UK branding.

## Related components

- [GOV.UK footer](https://design-system.service.gov.uk/components/footer/) — for public-facing services
- [Internal service header](../internal-service-header/SKILLS.md)
- [Internal service page template](../../templates/internal-service-page/SKILLS.md)
