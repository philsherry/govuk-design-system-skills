---
category: components
description: Lists of health advice with tick and cross icons showing what users should and should not do.
keywords:
  - "do and don't"
  - "do and don't list"
  - "dont"
  - "health advice"
  - "list"
  - "tick cross"
last-reviewed: "2026-04-03"
name: Do and Don't List
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/do-and-dont-list"
---

# Do and Don't List

> Lists of health advice with tick and cross icons showing what users should and should not do.
> Source: https://service-manual.nhs.uk/design-system/components/do-and-dont-list

## Overview

The do and don't list component presents health advice as two distinct lists: a "do" list with green tick icons and a "don't" list with red cross icons. This visual format makes it easy for users to scan practical health guidance at a glance.

The component renders as a `<div class="nhsuk-do-dont-list">` containing a heading and a `<ul class="nhsuk-list nhsuk-list--tick">` for "do" items or `<ul class="nhsuk-list nhsuk-list--cross">` for "don't" items. Each list item contains an SVG tick or cross icon alongside the advice text.

The NHS design system uses the do and don't list for practical health instructions — such as self-care advice for a condition, medication guidance, or lifestyle recommendations.

## When to use this component

Use the do and don't list to give users clear, practical health advice. It works well for self-care instructions, first aid guidance, and lifestyle recommendations related to a health condition.

Use it when the advice splits naturally into actions to take and actions to avoid.

## When not to use this component

Do not use the do and don't list for general instructions or form guidance — standard body text or inset text suits those cases better.

Do not use it when the advice does not split into positive and negative actions. If you only have "do" advice, use a standard bulleted list instead.

Do not use the component for urgent or emergency advice — use care cards for those situations.

## How it works

The "do" list uses a `<div>` with the heading "Do" (using the class `nhsuk-do-dont-list__label`) and a `<ul class="nhsuk-list nhsuk-list--tick">`. Each list item has a tick icon SVG with `aria-hidden="true"` and the text wrapped in a `<span>`.

The "don't" list follows the same pattern but uses the heading "Don't" and `<ul class="nhsuk-list nhsuk-list--cross">` with cross icon SVGs.

Place the "do" list before the "don't" list. The two lists sit as separate components — you can use one without the other if needed.

## Code examples

### Do list

#### HTML

```html
<div class="nhsuk-do-dont-list">
  <h3 class="nhsuk-do-dont-list__label">Do</h3>
  <ul class="nhsuk-list nhsuk-list--tick">
    <li>
      <svg class="nhsuk-icon nhsuk-icon__tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" height="34" width="34">
        <path stroke-width="4" stroke-linecap="round" d="M18.4 7.8l-8.5 8.4L5.6 12" stroke="#007f3b"></path>
      </svg>
      <p>cover blisters that are likely to burst with a soft plaster or dressing</p>
    </li>
    <li>
      <svg class="nhsuk-icon nhsuk-icon__tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" height="34" width="34">
        <path stroke-width="4" stroke-linecap="round" d="M18.4 7.8l-8.5 8.4L5.6 12" stroke="#007f3b"></path>
      </svg>
      <p>wash your hands before touching a burst blister</p>
    </li>
    <li>
      <svg class="nhsuk-icon nhsuk-icon__tick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true" height="34" width="34">
        <path stroke-width="4" stroke-linecap="round" d="M18.4 7.8l-8.5 8.4L5.6 12" stroke="#007f3b"></path>
      </svg>
      <p>allow the fluid in a burst blister to drain before covering it with a plaster or dressing</p>
    </li>
  </ul>
</div>
```

#### Nunjucks

```njk
{{ list({
  title: "Do",
  type: "tick",
  items: [
    {
      item: "cover blisters that are likely to burst with a soft plaster or dressing"
    },
    {
      item: "wash your hands before touching a burst blister"
    },
    {
      item: "allow the fluid in a burst blister to drain before covering it with a plaster or dressing"
    }
  ]
}) }}
```

### Don't list

#### HTML

```html
<div class="nhsuk-do-dont-list">
  <h3 class="nhsuk-do-dont-list__label">Don't</h3>
  <ul class="nhsuk-list nhsuk-list--cross">
    <li>
      <svg class="nhsuk-icon nhsuk-icon__cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34">
        <path d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z" fill="#d5281b"></path>
        <path d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z" fill="#d5281b"></path>
      </svg>
      <p>do not burst a blister yourself</p>
    </li>
    <li>
      <svg class="nhsuk-icon nhsuk-icon__cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34">
        <path d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z" fill="#d5281b"></path>
        <path d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z" fill="#d5281b"></path>
      </svg>
      <p>do not peel the skin off a burst blister</p>
    </li>
    <li>
      <svg class="nhsuk-icon nhsuk-icon__cross" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" height="34" width="34">
        <path d="M17 18.5c-.4 0-.8-.1-1.1-.4l-10-10c-.6-.6-.6-1.6 0-2.1.6-.6 1.5-.6 2.1 0l10 10c.6.6.6 1.5 0 2.1-.3.3-.6.4-1 .4z" fill="#d5281b"></path>
        <path d="M7 18.5c-.4 0-.8-.1-1.1-.4-.6-.6-.6-1.5 0-2.1l10-10c.6-.6 1.5-.6 2.1 0 .6.6.6 1.5 0 2.1l-10 10c-.3.3-.6.4-1 .4z" fill="#d5281b"></path>
      </svg>
      <p>do not pick at the edges of the remaining skin</p>
    </li>
  </ul>
</div>
```

#### Nunjucks

```njk
{{ list({
  title: "Don't",
  type: "cross",
  items: [
    {
      item: "do not burst a blister yourself"
    },
    {
      item: "do not peel the skin off a burst blister"
    },
    {
      item: "do not pick at the edges of the remaining skin"
    }
  ]
}) }}
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| title | string | Yes | Heading text for the list. Use `"Do"` or `"Don't"`. |
| type | string | Yes | Type of list. Use `"tick"` for a do list or `"cross"` for a don't list. |
| items | array | Yes | Array of list item objects. |
| items[].item | string | Yes | Text for the list item. |
| classes | string | No | Classes to add to the outer `<div>` element. |
| attributes | object | No | HTML attributes to add to the outer `<div>` as key–value pairs. |

## Accessibility

The tick and cross SVG icons have `aria-hidden="true"` so screen readers skip the decorative graphics and announce only the text content.

The list heading ("Do" or "Don't") provides context for the list items. Screen reader users hear the heading before the list, establishing whether the items represent actions to take or actions to avoid.

Start "don't" list items with lowercase "do not" so they read as complete sentences when combined with the "Don't" heading context. Avoid starting "don't" items with a capital letter.

Start "do" list items with a lowercase verb for consistency (e.g. "cover blisters" not "Cover blisters").

## Do and do not

**Do:**
- Place the "do" list before the "don't" list.
- Start each list item with a verb in lowercase.
- Use "do not" at the start of "don't" list items (not "never" or "avoid").
- Keep list items short and specific.
- Use the component for practical health advice.

**Do not:**
- Do not use the component for general instructions unrelated to health advice.
- Do not use it when the advice does not split into positive and negative actions.
- Do not use it for urgent health warnings — use care cards instead.
- Do not mix "do" and "don't" items in the same list.

## Related components and patterns

- [Care cards](https://service-manual.nhs.uk/design-system/components/care-cards) — for urgent health advice that needs a prominent visual treatment.
- [Inset text](https://service-manual.nhs.uk/design-system/components/inset-text) — for highlighting information within body content.
- [Warning callout](https://service-manual.nhs.uk/design-system/components/warning-callout) — for important warnings about health conditions or treatments.
