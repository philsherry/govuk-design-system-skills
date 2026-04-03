---
category: components
description: A card presents content in a visually distinct block, with optional clickable and grouped variants.
keywords:
  - "card"
  - "clickable card"
  - "content card"
  - "link card"
last-reviewed: "2026-04-03"
name: Card
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/card"
---

# Card

> A card presents content in a visually distinct block, with optional clickable and grouped variants.
> Source: https://service-manual.nhs.uk/design-system/components/card

## Overview

The card component organises related content into a distinct visual block. Cards can contain a heading, description, image, and link. They work well for presenting topics, services, or categories that users can browse and select from.

The NHS card has three main variants: a basic card with a heading and description, a clickable card where the entire surface acts as a link, and a card group that arranges cards in a responsive grid layout.

Cards use the class `nhsuk-card` and sit inside `nhsuk-card-group` containers when displayed in groups. The clickable variant adds `nhsuk-card--clickable` and wraps the heading in a link that becomes the interactive target for the entire card.

## When to use this component

Use cards to present a collection of related topics or pages that users can browse — for example, a hub page listing health conditions, services, or guidance categories.

Use clickable cards when each card represents a single navigable destination.

Use card groups to arrange cards in a consistent grid layout.

## When not to use this component

Do not use cards for sequential content where users must read items in order. Use standard page content or numbered lists instead.

Do not use cards as a replacement for form elements. Cards navigate; they do not submit data.

Do not use a single card in isolation as a call to action — the action link component suits that purpose better.

## How it works

**Basic card:** A `<div class="nhsuk-card">` containing a `<div class="nhsuk-card__content">` with a heading and optional description paragraph.

**Clickable card:** Adds `nhsuk-card--clickable` to the card div. The heading contains an `<a class="nhsuk-card__link">`. This link stretches across the entire card surface using CSS, so users can click anywhere on the card to follow the link.

**Card with image:** Adds a `<div class="nhsuk-card__img">` containing an `<img>` element before the content block.

**Card group:** A `<ul class="nhsuk-card-group">` with `<li>` items using width classes such as `nhsuk-card-group__item nhsuk-grid-column-one-half` or `nhsuk-grid-column-one-third`.

## Code Examples

### Basic card

#### HTML

```html
<div class="nhsuk-card">
  <div class="nhsuk-card__content">
    <h2 class="nhsuk-card__heading nhsuk-heading-m">
      If you need help now but it's not an emergency
    </h2>
    <p class="nhsuk-card__description">
      Go to 111.nhs.uk or call 111.
    </p>
  </div>
</div>
```

#### Nunjucks

```njk
{{ card({
  heading: "If you need help now but it's not an emergency",
  headingLevel: "2",
  descriptionText: "Go to 111.nhs.uk or call 111."
}) }}
```

### Clickable card

#### HTML

```html
<div class="nhsuk-card nhsuk-card--clickable">
  <div class="nhsuk-card__content">
    <h2 class="nhsuk-card__heading nhsuk-heading-m">
      <a class="nhsuk-card__link" href="/conditions/diabetes">
        Type 2 diabetes
      </a>
    </h2>
    <p class="nhsuk-card__description">
      Find out about type 2 diabetes, including symptoms, diagnosis, treatment, and how to reduce your risk.
    </p>
  </div>
</div>
```

#### Nunjucks

```njk
{{ card({
  heading: "Type 2 diabetes",
  headingLevel: "2",
  href: "/conditions/diabetes",
  descriptionText: "Find out about type 2 diabetes, including symptoms, diagnosis, treatment, and how to reduce your risk.",
  clickable: true
}) }}
```

### Card with image

#### HTML

```html
<div class="nhsuk-card nhsuk-card--clickable">
  <div class="nhsuk-card__img">
    <img src="/images/exercise.jpg" alt="A person stretching before exercise">
  </div>
  <div class="nhsuk-card__content">
    <h2 class="nhsuk-card__heading nhsuk-heading-m">
      <a class="nhsuk-card__link" href="/live-well/exercise">
        Exercise
      </a>
    </h2>
    <p class="nhsuk-card__description">
      Physical activity guidelines for adults and older adults.
    </p>
  </div>
</div>
```

#### Nunjucks

```njk
{{ card({
  imgURL: "/images/exercise.jpg",
  imgALT: "A person stretching before exercise",
  heading: "Exercise",
  headingLevel: "2",
  href: "/live-well/exercise",
  descriptionText: "Physical activity guidelines for adults and older adults.",
  clickable: true
}) }}
```

### Card group (two columns)

#### HTML

```html
<ul class="nhsuk-card-group">
  <li class="nhsuk-card-group__item nhsuk-grid-column-one-half">
    <div class="nhsuk-card nhsuk-card--clickable">
      <div class="nhsuk-card__content">
        <h2 class="nhsuk-card__heading nhsuk-heading-m">
          <a class="nhsuk-card__link" href="/conditions/asthma">Asthma</a>
        </h2>
        <p class="nhsuk-card__description">Find out about asthma symptoms and treatments.</p>
      </div>
    </div>
  </li>
  <li class="nhsuk-card-group__item nhsuk-grid-column-one-half">
    <div class="nhsuk-card nhsuk-card--clickable">
      <div class="nhsuk-card__content">
        <h2 class="nhsuk-card__heading nhsuk-heading-m">
          <a class="nhsuk-card__link" href="/conditions/diabetes">Diabetes</a>
        </h2>
        <p class="nhsuk-card__description">Find out about diabetes symptoms and treatments.</p>
      </div>
    </div>
  </li>
</ul>
```

#### Nunjucks

```njk
{{ cardGroup({
  classes: "",
  items: [
    {
      card: {
        heading: "Asthma",
        headingLevel: "2",
        href: "/conditions/asthma",
        descriptionText: "Find out about asthma symptoms and treatments.",
        clickable: true
      },
      columnClass: "nhsuk-grid-column-one-half"
    },
    {
      card: {
        heading: "Diabetes",
        headingLevel: "2",
        href: "/conditions/diabetes",
        descriptionText: "Find out about diabetes symptoms and treatments.",
        clickable: true
      },
      columnClass: "nhsuk-grid-column-one-half"
    }
  ]
}) }}
```

## Nunjucks Macro Options

### card()

| Name | Type | Required | Description |
|------|------|----------|-------------|
| heading | string | Yes | Text for the card heading. |
| headingLevel | string | No | Heading level (e.g. `"2"`, `"3"`). Defaults to `"2"`. |
| headingClasses | string | No | Classes to add to the heading element. |
| href | string | No | URL for the card link. Required when `clickable` is `true`. |
| clickable | boolean | No | When `true`, makes the entire card surface a clickable link. |
| descriptionText | string | No | Text content for the card description. |
| descriptionHtml | string | No | HTML content for the card description. Overrides `descriptionText`. |
| imgURL | string | No | URL for the card image. |
| imgALT | string | No | Alt text for the card image. Required when `imgURL` is set. |
| classes | string | No | Classes to add to the card `<div>`. |
| attributes | object | No | HTML attributes to add to the card `<div>` as key–value pairs. |

### cardGroup()

| Name | Type | Required | Description |
|------|------|----------|-------------|
| items | array | Yes | Array of card group item objects. |
| items[].card | object | Yes | Card options object (same parameters as `card()` above). |
| items[].columnClass | string | No | Grid column class for the item (e.g. `"nhsuk-grid-column-one-half"`). |
| classes | string | No | Classes to add to the `<ul>` element. |

## Accessibility

Clickable cards use a link within the heading as the interactive element. The CSS stretches this link across the entire card surface, so the card appears fully clickable. Screen readers announce the heading link text as the accessible name for the card.

Ensure card headings use the appropriate heading level for the page structure. Do not skip heading levels.

Card images must have meaningful alt text when the image conveys information. Use an empty `alt=""` for decorative images.

Card descriptions should not repeat the heading text — they should add context that helps users decide whether to follow the link.

## Do and Do not

**Do:**
- Use clickable cards when each card links to a single destination.
- Write concise heading text that describes the destination.
- Use card groups with consistent column widths for visual alignment.
- Include a description that gives users enough context to decide which card to follow.

**Do not:**
- Do not put more than one link inside a card.
- Do not use cards for sequential or ordered content.
- Do not mix clickable and non-clickable cards in the same group.
- Do not omit alt text on card images that convey information.

## Related Components / Patterns

- [Action link](https://service-manual.nhs.uk/design-system/components/action-link) — for single prominent links with an arrow icon.
- [Contents list](https://service-manual.nhs.uk/design-system/components/contents-list) — for navigating between pages in the same content group.
- [Hero](https://service-manual.nhs.uk/design-system/components/hero) — for prominent landing page content.
