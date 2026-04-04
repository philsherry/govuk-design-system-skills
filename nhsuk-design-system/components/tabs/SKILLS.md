---
category: components
description: Use the tabs component to let users navigate between related sections of content, displaying one section at a time.
keywords:
  - "tab list"
  - "tab panel"
  - "tabbed content"
  - "tabs"
last-reviewed: "2026-04-03"
name: Tabs
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/tabs"
---

# Tabs

> Use the tabs component to let users navigate between related sections of content, displaying one section at a time.
> Source: https://service-manual.nhs.uk/design-system/components/tabs

## Overview

The tabs component allows users to switch between related panels of content, with one panel visible at a time. Use it when distinct sections of related content exist and most users need one section at a time — for example, different views of the same data or different time periods.

The component uses progressive enhancement. Without JavaScript, all tab panels render as static sections with headings. When JavaScript runs, the tab interface hides and reveals panels. The URL hash updates when the user selects a tab, enabling deep-linking to a specific tab.

NHS UK Frontend's tabs follow the ARIA tab pattern, using `role="tablist"`, `role="tab"`, and `role="tabpanel"` for screen reader accessibility. Keyboard navigation uses arrow keys within the tab bar.

## When to use this component

- When you have 2 or more distinct sections of related content that users will switch between.
- When the content sections can carry short, meaningful tab titles.
- When viewing one section at a time avoids the need to navigate to a different page.

## When not to use this component

- Do not use tabs to split up a single linear piece of content — use headings and sections instead.
- Do not use tabs when users need to compare content across sections — the content must be visible at the same time for comparison.
- Do not use tabs for navigation between different pages — use service navigation or breadcrumbs.
- Avoid tabs on mobile when labels run long or when you have more than 5 tabs.

## How it works

The tabs component renders a list of links as the tab bar and a corresponding set of panel `<div>` elements. Each tab link has `role="tab"` and connects to a panel via `aria-controls`. Each panel has `role="tabpanel"` and `aria-labelledby` pointing to its tab.

The active tab has `aria-selected="true"`. Non-active tabs have `aria-selected="false"` and their panels have the `nhsuk-tabs__panel--hidden` class.

Keyboard navigation within the tab bar: left/right arrow keys move focus between tabs. The focused tab activates automatically.

When the user selects a tab, the page URL fragment updates to the panel `id`, enabling direct links to a specific tab.

Each panel should contain a heading that matches the tab label — this heading is visible in the no-JS view and provides context when users navigate to a panel from a URL fragment.

## Code examples

### Default / Basic

#### HTML

```html
<div class="nhsuk-tabs" data-module="nhsuk-tabs">
  <h2 class="nhsuk-tabs__title">Contents</h2>
  <ul class="nhsuk-tabs__list">
    <li class="nhsuk-tabs__list-item nhsuk-tabs__list-item--selected">
      <a class="nhsuk-tabs__tab" href="#symptoms">Symptoms</a>
    </li>
    <li class="nhsuk-tabs__list-item">
      <a class="nhsuk-tabs__tab" href="#treatment">Treatment</a>
    </li>
    <li class="nhsuk-tabs__list-item">
      <a class="nhsuk-tabs__tab" href="#prevention">Prevention</a>
    </li>
  </ul>
  <div class="nhsuk-tabs__panel" id="symptoms">
    <h2 class="nhsuk-heading-l">Symptoms</h2>
    <!-- content -->
  </div>
  <div class="nhsuk-tabs__panel nhsuk-tabs__panel--hidden" id="treatment">
    <h2 class="nhsuk-heading-l">Treatment</h2>
    <!-- content -->
  </div>
  <div class="nhsuk-tabs__panel nhsuk-tabs__panel--hidden" id="prevention">
    <h2 class="nhsuk-heading-l">Prevention</h2>
    <!-- content -->
  </div>
</div>
```

#### Nunjucks

```njk
{{ tabs({
  items: [
    {
      label: "Symptoms",
      id: "symptoms",
      panel: {
        html: "<h2 class=\"nhsuk-heading-l\">Symptoms</h2><p class=\"nhsuk-body\">Content about symptoms.</p>"
      }
    },
    {
      label: "Treatment",
      id: "treatment",
      panel: {
        html: "<h2 class=\"nhsuk-heading-l\">Treatment</h2><p class=\"nhsuk-body\">Content about treatment.</p>"
      }
    },
    {
      label: "Prevention",
      id: "prevention",
      panel: {
        html: "<h2 class=\"nhsuk-heading-l\">Prevention</h2><p class=\"nhsuk-body\">Content about prevention.</p>"
      }
    }
  ]
}) }}
```

### With custom title

Screen readers read the title heading above the tab list, and that heading is also visible without JavaScript. Override it with something more descriptive when needed.

#### Nunjucks

```njk
{{ tabs({
  title: "View appointments by status",
  items: [
    {
      label: "Upcoming",
      id: "upcoming",
      panel: {
        html: "<h2 class=\"nhsuk-heading-l\">Upcoming</h2><p class=\"nhsuk-body\">Upcoming appointments will appear here.</p>"
      }
    },
    {
      label: "Past",
      id: "past",
      panel: {
        html: "<h2 class=\"nhsuk-heading-l\">Past</h2><p class=\"nhsuk-body\">Past appointments.</p>"
      }
    }
  ]
}) }}
```

### Linking to a specific tab

The component updates the URL hash when the user selects a tab. Link to a tab by pointing to `#[tab-id]`. The component activates the matching tab on page load.

```html
<a href="/conditions/diabetes#treatment">View treatment options</a>
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `items` | array | Yes | Array of tab item objects. |
| `id` | string | No | `id` for the outer `<div>`. |
| `idPrefix` | string | No | Prefix for generated `id` attributes. Defaults to `"tabs"`. |
| `title` | string | No | Text for the hidden `<h2>` above the tab list. Defaults to `"Contents"`. |
| `classes` | string | No | Classes to add to the outer `<div>`. |
| `attributes` | object | No | HTML attributes (as key-value pairs) to add to the outer `<div>`. |

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

## Accessibility

- The component uses the ARIA tab pattern: `role="tablist"`, `role="tab"`, and `role="tabpanel"`.
- The active tab has `aria-selected="true"`. All others have `aria-selected="false"`.
- Tab panels connect to their tab via `aria-controls` (on the tab) and `aria-labelledby` (on the panel).
- Left/right arrow keys navigate between tabs. The focused tab activates automatically and its panel shows.
- Each panel should include a heading matching the tab label. This heading is visible when JavaScript is unavailable and provides context for users who navigate to a panel via URL fragment.
- Without JavaScript, all panels are visible as static sections — ensure the no-JS experience is fully usable.
- Tab labels must be concise and meaningful as standalone link text.

## Do and do not

**Do:**
- Include a heading inside each panel that matches the tab label.
- Keep tab labels short and distinctive.
- Use tabs for genuinely distinct sections of related content.
- Ensure all panel content is meaningful in the no-JS degraded view.

**Do not:**
- Do not use tabs when users need to compare content across panels — show it side by side or on separate pages.
- Do not use tabs for navigating between pages — use service navigation.
- Do not nest tabs within tabs.
- Do not use more than about 5 or 6 tabs — the tab bar becomes unwieldy.

## Related components and patterns

- [Expander](../expander/SKILLS.md) — for showing and hiding sections on the same page
- [Details](../details/SKILLS.md) — for optional supplementary content hidden behind a toggle
