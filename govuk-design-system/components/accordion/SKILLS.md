---
category: components
description: A component that lets users show and hide sections of related content on a page.
govuk-frontend: "5.x"
keywords:
  - "accordion"
  - "collapsible"
  - "expandable sections"
  - "show hide sections"
last-reviewed: "2026-04-03"
name: Accordion
source: "https://design-system.service.gov.uk/components/accordion/"
---

# Accordion

> A component that lets users show and hide sections of related content on a page.
> Source: https://design-system.service.gov.uk/components/accordion/

## Overview

The accordion component lets users show and hide sections of related content on a page. It reduces the amount of content visible at one time, above all when users need only specific sections of a page.

Each section has a heading and a toggle button. Users can expand all sections at once using a "Show all sections" button that appears above the accordion, or expand individual sections by clicking their headings. Once all sections are open, the button changes to "Hide all sections".

By default, the accordion remembers which sections a user has opened, storing this state in the browser's session storage. This means if a user navigates away and returns to the page within the same session, their earlier opened sections remain open. Set `rememberExpanded: false` to turn this off.

## When to use this component

Use the accordion component when you have more than one section of content on a page that users may want to read selectively. It works well for pages with long-form reference content, FAQs, or step-by-step guidance where users may need only certain sections.

Use it when research shows users do not need to read all sections, and grouping content into labelled sections helps them find what they need faster.

## When not to use this component

Do not use an accordion if users need to see all the content at once. If the information is critical and users need all sections, display the content in full.

Do not use an accordion to hide important warnings or error information. Do not use it as a shortcut for reducing page length when content should be fully visible. Avoid using it on simple or short pages where the content is manageable without progressive disclosure.

## How it works

The accordion uses progressive enhancement. Without JavaScript, all sections display as expanded content with no toggle controls. With JavaScript enabled, the `data-module="govuk-accordion"` attribute activates the component behaviour.

Each section consists of a header (containing the heading and optional summary line) and a content panel. The heading level is configurable via the `headingLevel` parameter and defaults to `<h2>`. The `id` parameter must be unique on the page — the component uses it to construct `id` and `aria-controls` attributes on each section.

Session storage remembers the expanded/collapsed state of each section between page loads in the same session. The "Show all sections" / "Hide all sections" button at the top right controls all sections simultaneously.

## Code examples

### Default / Basic

#### HTML

```html
<div class="govuk-accordion" data-module="govuk-accordion" id="accordion-default">
  <div class="govuk-accordion__controls">
    <button type="button" class="govuk-accordion__show-all" aria-expanded="false">
      <span class="govuk-accordion__show-all-text">Show all sections</span>
    </button>
  </div>
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <button
          type="button"
          class="govuk-accordion__section-button"
          id="accordion-default-heading-1"
          aria-controls="accordion-default-content-1"
          aria-expanded="false"
        >
          Writing well for the web
          <span class="govuk-visually-hidden govuk-accordion__section-heading-divider">,</span>
          <span class="govuk-accordion__section-toggle" data-nosnippet="">
            <span class="govuk-accordion__section-toggle-focus">
              <span class="govuk-accordion__section-show-hide-text">Show</span>
            </span>
          </span>
        </button>
      </h2>
    </div>
    <div id="accordion-default-content-1" class="govuk-accordion__section-content">
      <p class="govuk-body">Content about writing well for the web.</p>
    </div>
  </div>
  <div class="govuk-accordion__section">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <button
          type="button"
          class="govuk-accordion__section-button"
          id="accordion-default-heading-2"
          aria-controls="accordion-default-content-2"
          aria-expanded="false"
        >
          Writing well for specialists
          <span class="govuk-visually-hidden govuk-accordion__section-heading-divider">,</span>
          <span class="govuk-accordion__section-toggle" data-nosnippet="">
            <span class="govuk-accordion__section-toggle-focus">
              <span class="govuk-accordion__section-show-hide-text">Show</span>
            </span>
          </span>
        </button>
      </h2>
    </div>
    <div id="accordion-default-content-2" class="govuk-accordion__section-content">
      <p class="govuk-body">Content about writing well for specialists.</p>
    </div>
  </div>
</div>
```

#### Nunjucks

```njk
{{ govukAccordion({
  id: "accordion-default",
  items: [
    {
      heading: {
        text: "Writing well for the web"
      },
      content: {
        html: "<p class=\"govuk-body\">Content about writing well for the web.</p>"
      }
    },
    {
      heading: {
        text: "Writing well for specialists"
      },
      content: {
        html: "<p class=\"govuk-body\">Content about writing well for specialists.</p>"
      }
    }
  ]
}) }}
```

### With summary line

#### Nunjucks

```njk
{{ govukAccordion({
  id: "accordion-with-summary",
  items: [
    {
      heading: {
        text: "Understanding your tax code"
      },
      summary: {
        text: "A short description of what this section covers."
      },
      content: {
        html: "<p class=\"govuk-body\">Detailed content about tax codes.</p>"
      }
    }
  ]
}) }}
```

### With a section expanded by default

#### Nunjucks

```njk
{{ govukAccordion({
  id: "accordion-expanded",
  items: [
    {
      heading: {
        text: "Open by default"
      },
      content: {
        html: "<p class=\"govuk-body\">This section starts expanded.</p>"
      },
      expanded: true
    },
    {
      heading: {
        text: "Collapsed by default"
      },
      content: {
        html: "<p class=\"govuk-body\">This section starts collapsed.</p>"
      }
    }
  ]
}) }}
```

### Without session storage (no remember expanded)

#### Nunjucks

```njk
{{ govukAccordion({
  id: "accordion-no-remember",
  rememberExpanded: false,
  items: [
    {
      heading: {
        text: "Section 1"
      },
      content: {
        html: "<p class=\"govuk-body\">Content.</p>"
      }
    }
  ]
}) }}
```

### With custom heading level

#### Nunjucks

```njk
{{ govukAccordion({
  id: "accordion-h3",
  headingLevel: 3,
  items: [
    {
      heading: {
        text: "Subsection heading"
      },
      content: {
        html: "<p class=\"govuk-body\">Content under an h3.</p>"
      }
    }
  ]
}) }}
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| id | string | Yes | Must be unique across the whole page. Used to construct `id` and `aria-controls` attributes for each section. |
| headingLevel | integer | No | Heading level from 1 to 6. Default is `2`. |
| items | array | Yes | Array of section objects (see below). |
| items[].heading.text | string | Yes (or html) | Text for the section heading. |
| items[].heading.html | string | Yes (or text) | HTML for the section heading. |
| items[].summary.text | string | No | Summary line displayed beneath the heading. |
| items[].summary.html | string | No | HTML summary line displayed beneath the heading. |
| items[].content.html | string | Yes | HTML content displayed inside the section. |
| items[].expanded | boolean | No | Whether the section starts expanded on load. Default is `false`. |
| rememberExpanded | boolean | No | Whether to use session storage to remember expanded sections. Default is `true`. |
| hideAllSectionsText | string | No | Custom text for the "Hide all sections" button. |
| hideSectionText | string | No | Custom text for each section's "Hide" toggle. |
| showAllSectionsText | string | No | Custom text for the "Show all sections" button. |
| showSectionText | string | No | Custom text for each section's "Show" toggle. |
| classes | string | No | Classes to add to the accordion container `<div>`. |
| attributes | object | No | HTML attributes to add to the accordion container as key–value pairs. |

## Error messages

The accordion does not accept user input, so it does not produce validation error messages.

## Accessibility

The component uses `aria-expanded` on each section `<button>` to communicate expanded/collapsed state to assistive technologies. The `aria-controls` attribute links each button to its content panel by `id`.

The "Show all sections" / "Hide all sections" button also uses `aria-expanded`. Visually hidden text appended to section headings provides screen reader context for each toggle state.

The component is fully keyboard operable: Tab moves focus to each section button, and Enter or Space toggles the section. The component does not trap focus.

Without JavaScript, the component falls back to showing all sections fully expanded with no toggle buttons.

## Do and do not

**Do:**
- Provide a unique `id` for each accordion on the page.
- Set `headingLevel` to match the correct position in the page's document outline.
- Use a `summary` line to give users context before they open a section.
- Test with JavaScript disabled to confirm all content remains accessible.

**Do not:**
- Do not use the accordion to hide information that all users need to read.
- Do not nest accordions inside each other.
- Do not use the accordion as a substitute for good page structure and information architecture.
- Do not set `rememberExpanded: false` without a specific reason — the default improves repeat-visit usability.

## Related components and patterns

- [Details](https://design-system.service.gov.uk/components/details/) — for a single collapsible section of supplementary content.
- [Tabs](https://design-system.service.gov.uk/components/tabs/) — for switching between related panels of content.
- [Summary list](https://design-system.service.gov.uk/components/summary-list/) — for presenting key–value pairs of information.
