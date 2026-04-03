---
category: components
description: The footer provides copyright, licensing and other information about your service and its owner.
govuk-frontend: "5.x"
keywords:
  - "footer"
  - "legal links"
  - "page footer"
last-reviewed: "2026-04-03"
name: Footer
source: "https://design-system.service.gov.uk/components/footer/"
---

# Footer

> The footer provides copyright, licensing and other information about your service and its owner.
> Source: https://design-system.service.gov.uk/components/footer/

## Overview

The footer component appears at the bottom of every page in a GOV.UK service. It provides copyright information, links to supporting content such as accessibility statements, privacy policies, terms and conditions, and navigation links to major sections of the service or site.

The footer has two main areas: a navigation section (for grouped links) and a meta section (for secondary links and legal information). Both are optional and you can combine them as needed. The component includes default Crown copyright and Open Government Licence text, which you can customise or replace.

In GOV.UK Frontend v5.x the footer supports more than one navigation column with headings and link lists, a meta section with custom HTML or a flat list of links, and customisable copyright and content licence text.

## When to use this component

- On every page of a GOV.UK service, as the last element in the page layout.
- To provide legal, accessibility, and privacy information.
- To provide navigation to important supporting pages (for example "Help", "Cookies", "Accessibility statement").

## When not to use this component

- Do not omit the footer from any page in a GOV.UK service.
- Do not use the footer as the primary navigation for your service — use the [Header](../header/SKILLS.md) or [Service navigation](../service-navigation/SKILLS.md) for that.

## How it works

The footer has two main sections:

**Navigation (`navigation`):** An array of column objects, each with a `title` and an `items` array of links. Columns appear in a grid. Each item has `text` and `href`, and optionally `attributes`.

**Meta (`meta`):** A section for secondary links and legal text. It accepts:
- `items`: a flat array of links (for example Cookies, Accessibility, Privacy).
- `html` or `text`: Custom content to display instead of or alongside items.
- `visuallyHiddenTitle`: An accessible heading for the meta section (visually hidden by default).

**Content licence (`contentLicence`):** Replaces the default Open Government Licence text. Accepts `html` or `text`.

**Copyright (`copyright`):** Replaces the default Crown copyright notice. Accepts `html` or `text`. By default it includes the Crown logo SVG and the standard copyright statement.

**Navigation column widths:** The `width` property on navigation columns controls the CSS grid width. Valid values are `"full"`, `"one-half"`, `"one-third"`, `"two-thirds"`, `"one-quarter"`, `"three-quarters"`.

## Code Examples

### Default / Basic (no navigation or meta)

#### HTML

```html
<footer class="govuk-footer">
  <div class="govuk-width-container">
    <div class="govuk-footer__meta">
      <div class="govuk-footer__meta-item govuk-footer__meta-item--grow">
        <svg
          aria-hidden="true"
          focusable="false"
          class="govuk-footer__licence-logo"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 483.2 195.7"
          height="17"
          width="41"
        >
          <path
            fill="currentColor"
            d="M421.5 142.8V.1l-50.7 32.3v161.1h112.4v-50.7zm-122.3-9.6A47.12 47.12 0 0 1 221 97.8c0-26 21.1-47.1 47.1-47.1 16.7 0 31.4 8.7 39.7 21.8l42.7-27.2A97.63 97.63 0 0 0 268.1 0c-36.5 0-68.3 20.1-85.1 49.7A98 98 0 0 0 248 280c90.4 0 130.4-71.4 130.4-135.2l-1.6-14.5h-92.8v47.2h-53.8zm-50.6-28.7L173.4 26.7l-6.3 32.6c-5 25.9-21 47.9-42.7 62.2l-12.3 8.3 34.4 141.8 55.2-12.3-25.4-104.8c19.5 3.1 38.8 5 56.1 5z"
          />
        </svg>
        <span class="govuk-footer__licence-description">
          All content is available under the
          <a class="govuk-footer__link" href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/" rel="license">Open Government Licence v3.0</a>, except where otherwise stated
        </span>
      </div>
      <div class="govuk-footer__meta-item">
        <a class="govuk-footer__link govuk-footer__copyright-logo" href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/">
          &copy; Crown copyright
        </a>
      </div>
    </div>
  </div>
</footer>
```

#### Nunjucks

```njk
{{ govukFooter({}) }}
```

### With meta links

#### Nunjucks

```njk
{{ govukFooter({
  meta: {
    items: [
      {
        href: "/help",
        text: "Help"
      },
      {
        href: "/cookies",
        text: "Cookies"
      },
      {
        href: "/contact",
        text: "Contact"
      },
      {
        href: "/terms-conditions",
        text: "Terms and conditions"
      },
      {
        href: "/privacy",
        text: "Privacy"
      },
      {
        href: "/accessibility-statement",
        text: "Accessibility statement"
      }
    ]
  }
}) }}
```

### With navigation

#### Nunjucks

```njk
{{ govukFooter({
  navigation: [
    {
      title: "Services and information",
      width: "two-thirds",
      columns: 2,
      items: [
        {
          href: "/browse/benefits",
          text: "Benefits"
        },
        {
          href: "/browse/births-deaths-marriages",
          text: "Births, deaths, marriages and care"
        },
        {
          href: "/browse/business",
          text: "Business and self-employed"
        },
        {
          href: "/browse/childcare-parenting",
          text: "Childcare and parenting"
        },
        {
          href: "/browse/citizenship",
          text: "Citizenship and living in the UK"
        },
        {
          href: "/browse/justice",
          text: "Crime, justice and the law"
        }
      ]
    },
    {
      title: "Departments and policy",
      width: "one-third",
      items: [
        {
          href: "/government/how-government-works",
          text: "How government works"
        },
        {
          href: "/government/organisations",
          text: "Departments"
        },
        {
          href: "/government/world",
          text: "Worldwide"
        },
        {
          href: "/government/policies",
          text: "Policies"
        }
      ]
    }
  ]
}) }}
```

### With navigation and meta links

#### Nunjucks

```njk
{{ govukFooter({
  navigation: [
    {
      title: "Two column list",
      width: "two-thirds",
      columns: 2,
      items: [
        { href: "#1", text: "Navigation item 1" },
        { href: "#2", text: "Navigation item 2" },
        { href: "#3", text: "Navigation item 3" },
        { href: "#4", text: "Navigation item 4" },
        { href: "#5", text: "Navigation item 5" },
        { href: "#6", text: "Navigation item 6" }
      ]
    },
    {
      title: "Single column list",
      width: "one-third",
      items: [
        { href: "#1", text: "Navigation item 1" },
        { href: "#2", text: "Navigation item 2" },
        { href: "#3", text: "Navigation item 3" }
      ]
    }
  ],
  meta: {
    items: [
      { href: "/help", text: "Help" },
      { href: "/cookies", text: "Cookies" },
      { href: "/accessibility-statement", text: "Accessibility statement" }
    ]
  }
}) }}
```

### With custom meta HTML

#### Nunjucks

```njk
{{ govukFooter({
  meta: {
    html: "<p class=\"govuk-footer__meta-custom\">Built by the <a href=\"/about\" class=\"govuk-footer__link\">Digital team</a></p>",
    items: [
      { href: "/cookies", text: "Cookies" },
      { href: "/accessibility-statement", text: "Accessibility statement" }
    ]
  }
}) }}
```

### With custom content licence

#### Nunjucks

```njk
{{ govukFooter({
  contentLicence: {
    html: "All content is available under the <a class=\"govuk-footer__link\" href=\"https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/\" rel=\"license\">Open Government Licence v3.0</a>, except where otherwise stated"
  }
}) }}
```

### With custom copyright

#### Nunjucks

```njk
{{ govukFooter({
  copyright: {
    text: "© Crown copyright"
  }
}) }}
```

### Full footer with navigation, meta, and custom text

#### Nunjucks

```njk
{{ govukFooter({
  navigation: [
    {
      title: "Guidance",
      width: "one-half",
      items: [
        { href: "/guidance/overview", text: "Overview" },
        { href: "/guidance/eligibility", text: "Eligibility" },
        { href: "/guidance/how-to-apply", text: "How to apply" }
      ]
    },
    {
      title: "About",
      width: "one-half",
      items: [
        { href: "/about", text: "About this service" },
        { href: "/about/team", text: "The team" },
        { href: "/about/blog", text: "Blog" }
      ]
    }
  ],
  meta: {
    visuallyHiddenTitle: "Support links",
    items: [
      { href: "/help", text: "Help" },
      { href: "/cookies", text: "Cookies" },
      { href: "/privacy", text: "Privacy" },
      { href: "/accessibility", text: "Accessibility statement" }
    ]
  }
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `navigation` | array | No | Array of navigation column objects. |
| `navigation[].title` | string | Yes | Title of the navigation column. |
| `navigation[].width` | string | No | Column width. Valid values: `"full"`, `"one-half"`, `"one-third"`, `"two-thirds"`, `"one-quarter"`, `"three-quarters"`. |
| `navigation[].columns` | integer | No | Number of columns to split the item list into within this navigation section. Defaults to `1`. |
| `navigation[].items` | array | Yes | Array of link objects. |
| `navigation[].items[].text` | string | Yes | Text for the link. |
| `navigation[].items[].href` | string | Yes | URL for the link. |
| `navigation[].items[].attributes` | object | No | HTML attributes for the link. |
| `meta` | object | No | Options for the meta section. |
| `meta.items` | array | No | Array of meta link objects (for example Cookies, Privacy, Accessibility). |
| `meta.items[].text` | string | Yes | Text for the meta link. |
| `meta.items[].href` | string | Yes | URL for the meta link. |
| `meta.items[].attributes` | object | No | HTML attributes for the meta link. |
| `meta.html` | string | No | HTML content to display in the meta section. Rendered above the items list. |
| `meta.text` | string | No | Text content to display in the meta section. When `html` is provided, `text` has no effect. |
| `meta.visuallyHiddenTitle` | string | No | Visually hidden title for the meta navigation. Defaults to `"Support links"`. |
| `contentLicence` | object | No | Options for the content licence text. |
| `contentLicence.html` | string | No | HTML for the content licence. Replaces the default Open Government Licence text. |
| `contentLicence.text` | string | No | Text for the content licence. When `html` is provided, `text` has no effect. |
| `copyright` | object | No | Options for the copyright notice. |
| `copyright.html` | string | No | HTML for the copyright notice. Replaces the default Crown copyright text and logo. |
| `copyright.text` | string | No | Text for the copyright notice. When `html` is provided, `text` has no effect. |
| `classes` | string | No | Classes to add to the footer element. |
| `attributes` | object | No | HTML attributes to add to the footer element. |

## Accessibility

- Navigation link lists in the footer sit within `<nav>` elements with accessible headings, so screen reader users can discover them when navigating by landmarks.
- The meta section uses a visually hidden heading (defaulting to "Support links") to label the meta navigation landmark for screen readers.
- The Open Government Licence logo has `aria-hidden="true"` so screen readers skip it.
- The Crown copyright link points to the National Archives, which provides context for the copyright.
- Footer links use the `govuk-footer__link` class which meets colour contrast requirements on the footer's dark grey background.

## Do and Do not

**Do:**
- Include an accessibility statement link in the meta section on every service.
- Include a cookies link so users can review and change their cookie preferences.
- Use the `navigation` section for site-wide links and the `meta` section for legal and support links.
- Keep footer navigation links concise and limit them to high-priority items.
- Use the default copyright and licence text unless you have a specific reason to change it.

**Do not:**
- Do not use the footer as the primary navigation for your service.
- Do not omit the footer from any page.
- Do not add excessive numbers of links to the footer — use the header or service navigation for primary navigation.
- Do not change the Open Government Licence text without authorisation.

## Related Components / Patterns

- [Header](../header/SKILLS.md) — the primary site header, which appears at the top of every page.
- [Service navigation](../service-navigation/SKILLS.md) — for primary navigation within a service.
- [Phase banner](../phase-banner/SKILLS.md) — appears below the header to communicate service phase (alpha/beta).
- Accessibility statement pattern — a key link to include in the footer meta section.
