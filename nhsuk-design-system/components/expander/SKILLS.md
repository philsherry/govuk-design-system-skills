---
category: components
description: An expandable section for longer content that users can show or hide.
keywords:
  - "accordion"
  - "disclosure group"
  - "expandable content"
  - "expander"
last-reviewed: "2026-04-03"
name: Expander
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/expander"
---

# Expander

> An expandable section for longer content that users can show or hide.
> Source: https://service-manual.nhs.uk/design-system/components/expander

## Overview

The expander component lets users show or hide longer sections of content. It uses the native `<details>` and `<summary>` HTML elements but adds a more prominent visual style than the standard details component — with a bordered container and a plus/minus icon.

Expanders suit situations where you need to present more than two expandable sections on a page. They work well for FAQs, step-by-step guides, and content that users need at different stages of their journey.

The expander uses the class `nhsuk-expander` on the `<details>` element. When grouped together, a containing `<div class="nhsuk-expander-group">` wraps the set.

## When to use this component

Use expanders when you have more than two sections of content that users can expand and collapse. They work well for:

- Frequently asked questions about a health condition or service.
- Step-by-step guidance where users need only one step at a time.
- Detailed information that supports the main content but that most users do not need all at once.

## When not to use this component

Do not use the expander for a single expandable section — use the details component instead.

Do not use expanders to hide content that most users need. If the content supports the primary task, display it in full view.

Do not use expanders for urgent health advice — use care cards for that.

## How it works

The expander renders as a `<details class="nhsuk-details nhsuk-expander">` element. Inside, the `<summary class="nhsuk-details__summary">` contains the toggle label. The body content sits in a `<div class="nhsuk-details__text">`.

When grouping expanders, wrap them in a `<div class="nhsuk-expander-group">`. The group class adds consistent spacing between expanders.

The component works without JavaScript, relying on native browser support for the `<details>` element.

## Code examples

### Single expander

#### HTML

```html
<details class="nhsuk-details nhsuk-expander">
  <summary class="nhsuk-details__summary">
    <span class="nhsuk-details__summary-text">
      How to measure your blood pressure at home
    </span>
  </summary>
  <div class="nhsuk-details__text">
    <p>You can buy a blood pressure monitor from a pharmacy, supermarket, or online. Make sure you get one that measures your blood pressure at the upper arm, not the wrist.</p>
    <p>Sit quietly for 5 minutes before taking a reading. Rest your arm on a flat surface at heart level. Take 2 readings, 1 minute apart, and record the lower number.</p>
  </div>
</details>
```

#### Nunjucks

```njk
{{ expander({
  text: "How to measure your blood pressure at home",
  html: "<p>You can buy a blood pressure monitor from a pharmacy, supermarket, or online. Make sure you get one that measures your blood pressure at the upper arm, not the wrist.</p><p>Sit quietly for 5 minutes before taking a reading. Rest your arm on a flat surface at heart level. Take 2 readings, 1 minute apart, and record the lower number.</p>"
}) }}
```

### Expander group

#### HTML

```html
<div class="nhsuk-expander-group">
  <details class="nhsuk-details nhsuk-expander">
    <summary class="nhsuk-details__summary">
      <span class="nhsuk-details__summary-text">
        How to get a blood pressure test
      </span>
    </summary>
    <div class="nhsuk-details__text">
      <p>You can ask for a blood pressure test at your GP surgery, some pharmacies, and some workplaces. You can also buy a monitor and test your blood pressure at home.</p>
    </div>
  </details>

  <details class="nhsuk-details nhsuk-expander">
    <summary class="nhsuk-details__summary">
      <span class="nhsuk-details__summary-text">
        What your blood pressure reading means
      </span>
    </summary>
    <div class="nhsuk-details__text">
      <p>Blood pressure readings have 2 numbers. The first (systolic) measures pressure when your heart pushes blood out. The second (diastolic) measures pressure when your heart rests between beats.</p>
    </div>
  </details>

  <details class="nhsuk-details nhsuk-expander">
    <summary class="nhsuk-details__summary">
      <span class="nhsuk-details__summary-text">
        Things that can increase your risk of high blood pressure
      </span>
    </summary>
    <div class="nhsuk-details__text">
      <p>Your risk of high blood pressure increases if you eat too much salt, do not exercise enough, drink too much alcohol or caffeine, smoke, or do not get enough sleep.</p>
    </div>
  </details>
</div>
```

#### Nunjucks

```njk
{{ expanderGroup({
  items: [
    {
      expander: {
        text: "How to get a blood pressure test",
        html: "<p>You can ask for a blood pressure test at your GP surgery, some pharmacies, and some workplaces. You can also buy a monitor and test your blood pressure at home.</p>"
      }
    },
    {
      expander: {
        text: "What your blood pressure reading means",
        html: "<p>Blood pressure readings have 2 numbers. The first (systolic) measures pressure when your heart pushes blood out. The second (diastolic) measures pressure when your heart rests between beats.</p>"
      }
    },
    {
      expander: {
        text: "Things that can increase your risk of high blood pressure",
        html: "<p>Your risk of high blood pressure increases if you eat too much salt, do not exercise enough, drink too much alcohol or caffeine, smoke, or do not get enough sleep.</p>"
      }
    }
  ]
}) }}
```

## Nunjucks macro options

### expander()

| Name | Type | Required | Description |
|------|------|----------|-------------|
| text | string | Yes | Text for the summary (visible toggle label). |
| html | string | No | HTML content to show when expanded. |
| details | string | No | Plain text content to show when expanded. When `HTML` is provided, the component ignores `details`. |
| id | string | No | `id` attribute for the `<details>` element. |
| classes | string | No | Classes to add to the `<details>` element. |
| attributes | object | No | HTML attributes for the `<details>` element as key–value pairs. |

### expanderGroup()

| Name | Type | Required | Description |
|------|------|----------|-------------|
| items | array | Yes | Array of expander group item objects. |
| items[].expander | object | Yes | Expander options object (same parameters as `expander()` above). |
| classes | string | No | Classes to add to the `<div>` wrapper element. |
| attributes | object | No | HTML attributes for the wrapper `<div>` as key–value pairs. |

## Accessibility

The expander uses native `<details>` and `<summary>` elements, which provide built-in accessibility. Screen readers announce the summary as an expandable button and communicate whether the section has expanded or collapsed.

Write specific summary text that tells users what content they will find when they expand the section. Avoid vague labels.

Do not place essential form instructions or urgent health information inside expanders — users may miss it if they do not expand the section.

Ensure the expanded content does not contain heading levels that break the page's heading hierarchy.

## Do and do not

**Do:**
- Use expanders when you have more than two expandable sections.
- Write clear, specific summary text.
- Group related expanders in an expander group wrapper.
- Test with keyboard navigation — summaries respond to Enter and Space natively.

**Do not:**
- Do not use a single expander — use the details component instead.
- Do not hide critical health information inside expanders.
- Do not nest expanders inside other expanders.
- Do not use expanders for content that most users need — display that content in full view.

## Related components and patterns

- [Details](https://service-manual.nhs.uk/design-system/components/details) — for a single, less prominent expandable section.
- [Contents list](https://service-manual.nhs.uk/design-system/components/contents-list) — for splitting long content across pages.
- [Card](https://service-manual.nhs.uk/design-system/components/card) — for presenting topics as navigable blocks rather than expandable sections.
