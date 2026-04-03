---
category: components
description: Use the tabs component to let users navigate between related sections of content, displaying one section at a time.
govuk-frontend: "5.x"
keywords:
  - "tab list"
  - "tab panel"
  - "tabbed content"
  - "tabs"
last-reviewed: "2026-04-03"
name: Tabs
source: "https://design-system.service.gov.uk/components/tabs/"
---

# Tabs

> Use the tabs component to let users navigate between related sections of content, displaying one section at a time.
> Source: https://design-system.service.gov.uk/components/tabs/

## Overview

The tabs component allows users to switch between related panels of content, with one panel visible at a time. Use it when there are distinct sections of related content that most users need one of at a time — for example, different views of the same data or different time periods.

The component is progressively enhanced. Without JavaScript, all tab panels render as static sections with headings. When JavaScript is available, the tab interface hides and reveals panels. The URL hash updates when the user selects a tab, enabling deep-linking to a specific tab.

GOV.UK Frontend's tabs follow the ARIA tab pattern, using `role="tablist"`, `role="tab"`, and `role="tabpanel"` to ensure accessibility for screen reader users. Keyboard navigation uses arrow keys within the tab bar.

## When to use this component

- When you have 2 or more distinct sections of related content that users will switch between.
- When the content sections can carry short, meaningful tab titles.
- When viewing one section at a time avoids the need to navigate to a different page.

## When not to use this component

- Do not use tabs to split up a single linear piece of content — use headings and sections instead.
- Do not use tabs when users need to compare content across sections — the content would need to be visible simultaneously.
- Do not use tabs for navigation between different pages — use **service navigation** or **breadcrumbs**.
- Avoid tabs on mobile when labels are long or there are more than 5 tabs — they may not display as expected.

## How it works

The tabs component renders a list of links as the tab bar and a corresponding set of panel `<div>` elements. Each tab link has `role="tab"` and connects to a panel via `aria-controls`. Each panel has `role="tabpanel"` and `aria-labelledby` pointing to its tab.

The active tab has `aria-selected="true"`. Non-active tabs have `aria-selected="false"` and their panels have the `govuk-tabs__panel--hidden` class.

Keyboard navigation within the tab bar: left/right arrow keys move focus between tabs; the focused tab is automatically selected (automatic activation pattern).

When the user selects a tab, the page URL fragment updates to the panel `id`, enabling linking directly to a specific tab.

Each panel should contain a heading that matches the tab label — this heading is visible in the no-JS view and provides context when users navigate to a panel from a URL fragment.

## Code Examples

### Default / Basic

#### HTML

```html
<div class="govuk-tabs" data-module="govuk-tabs">
  <h2 class="govuk-tabs__title">Contents</h2>
  <ul class="govuk-tabs__list">
    <li class="govuk-tabs__list-item govuk-tabs__list-item--selected">
      <a class="govuk-tabs__tab" href="#past-day">Past day</a>
    </li>
    <li class="govuk-tabs__list-item">
      <a class="govuk-tabs__tab" href="#past-week">Past week</a>
    </li>
    <li class="govuk-tabs__list-item">
      <a class="govuk-tabs__tab" href="#past-month">Past month</a>
    </li>
  </ul>
  <div class="govuk-tabs__panel" id="past-day">
    <h2 class="govuk-heading-l">Past day</h2>
    <!-- content -->
  </div>
  <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-week">
    <h2 class="govuk-heading-l">Past week</h2>
    <!-- content -->
  </div>
  <div class="govuk-tabs__panel govuk-tabs__panel--hidden" id="past-month">
    <h2 class="govuk-heading-l">Past month</h2>
    <!-- content -->
  </div>
</div>
```

#### Nunjucks

```njk
{{ govukTabs({
  items: [
    {
      label: "Past day",
      id: "past-day",
      panel: {
        html: "<h2 class=\"govuk-heading-l\">Past day</h2><p class=\"govuk-body\">Content for past day.</p>"
      }
    },
    {
      label: "Past week",
      id: "past-week",
      panel: {
        html: "<h2 class=\"govuk-heading-l\">Past week</h2><p class=\"govuk-body\">Content for past week.</p>"
      }
    },
    {
      label: "Past month",
      id: "past-month",
      panel: {
        html: "<h2 class=\"govuk-heading-l\">Past month</h2><p class=\"govuk-body\">Content for past month.</p>"
      }
    }
  ]
}) }}
```

### With custom title

Screen readers read the "Contents" heading above the tab list, and that heading is also visible without JavaScript. Override it with something more descriptive when needed.

#### Nunjucks

```njk
{{ govukTabs({
  title: "View applications by status",
  items: [
    {
      label: "Submitted",
      id: "submitted",
      panel: {
        html: "<h2 class=\"govuk-heading-l\">Submitted</h2><p class=\"govuk-body\">Submitted applications will appear here.</p>"
      }
    },
    {
      label: "In review",
      id: "in-review",
      panel: {
        html: "<h2 class=\"govuk-heading-l\">In review</h2><p class=\"govuk-body\">Applications now under review.</p>"
      }
    },
    {
      label: "Approved",
      id: "approved",
      panel: {
        html: "<h2 class=\"govuk-heading-l\">Approved</h2><p class=\"govuk-body\">Approved applications.</p>"
      }
    }
  ]
}) }}
```

### Linking to a specific tab

The component updates the URL hash when the user selects a tab. Link directly to a tab by pointing to `#[tab-id]`. The component activates the matching tab on page load.

```html
<a href="/reports#past-week">View past week report</a>
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `items` | array | Yes | Array of tab item objects. |
| `id` | string | No | `id` for the outer `<div>`. Defaults to the `idPrefix` value. |
| `idPrefix` | string | No | Prefix for generated `id` attributes. Defaults to `"tabs"`. |
| `title` | string | No | Text for the hidden `<h2>` above the tab list. Defaults to `"Contents"`. |
| `classes` | string | No | Classes to add to the outer `<div>`. |
| `attributes` | object | No | HTML attributes (as key–value pairs) to add to the outer `<div>`. |

### Item object options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | The `id` for the tab panel. Used as the URL fragment identifier. |
| `label` | string | Yes | The tab label text displayed in the tab bar. |
| `panel` | object | Yes | Options for the panel content. Must include `text` or `html`. |
| `attributes` | object | No | HTML attributes to add to the tab `<a>` element. |

### Panel object options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `text` | string | Yes (or `html`) | Text content for the panel. |
| `html` | string | Yes (or `text`) | HTML content for the panel. |
| `attributes` | object | No | HTML attributes to add to the panel `<div>`. |

## Error Messages

The tabs component does not have error states. This is a navigation/display component.

## Accessibility

- The component uses the ARIA tab pattern: `role="tablist"`, `role="tab"`, and `role="tabpanel"`.
- The active tab has `aria-selected="true"`. All others have `aria-selected="false"`.
- Tab panels connect to their tab via `aria-controls` (on the tab) and `aria-labelledby` (on the panel).
- Left/right arrow keys navigate between tabs; the focused tab is automatically selected and its panel shown.
- Each panel should include a heading matching the tab label. This heading is visible when JavaScript is unavailable and provides context for users who navigate directly to a panel via URL fragment.
- Without JavaScript, all panels are visible as static sections — ensure the no-JS experience is fully usable.
- Tab labels must be concise and meaningful as standalone link text.

## Do and Do not

**Do:**
- Include a heading inside each panel that matches the tab label.
- Keep tab labels short and distinctive.
- Use tabs for genuinely distinct sections of related content.
- Ensure all panel content is meaningful in the no-JS degraded view.

**Do not:**
- Do not use tabs when users need to compare content across panels — show it side by side or on separate pages.
- Do not use tabs for navigating between pages — use service navigation.
- Do not nest tabs within tabs.
- Do not use more than about 5–6 tabs — the tab bar becomes unwieldy.

## Related Components / Patterns

- [Accordion](../accordion/SKILLS.md) — for showing and hiding sections on the same page (better for mobile)
- [Service Navigation](../service-navigation/SKILLS.md) — for navigating between service sections
- [Details](../details/SKILLS.md) — for optional supplementary content hidden behind a toggle
