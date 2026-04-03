---
category: components
description: A prominent banner for landing pages with a heading, text, and optional background image.
keywords:
  - "hero"
  - "hero banner"
  - "landing page"
  - "page header"
last-reviewed: "2026-04-03"
name: Hero
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/hero"
---

# Hero

> A prominent banner for landing pages with a heading, text, and optional background image.
> Source: https://service-manual.nhs.uk/design-system/components/hero

## Overview

The hero component creates a prominent banner at the top of a landing page. It draws attention to the most important content — typically a heading and introductory text — and can include a background image for visual impact.

The hero has three variants: a text-only hero with the NHS blue background, a hero with a background image and overlay text, and a hero with an image alongside the text content.

The component uses the class `nhsuk-hero` and sits directly below the header, before the main content area. It spans the full width of the page.

## When to use this component

Use the hero on landing pages or homepages where you need to introduce a service or topic with visual prominence. It works well as the first content a user sees after the header.

Use the image variant when a relevant, high-quality image supports the message and helps users understand the service.

## When not to use this component

Do not use the hero on content pages, transactional pages, or form pages. Standard page headings suit those pages better.

Do not use the hero on every page — reserve it for top-level landing pages.

Do not use a background image that reduces the readability of the overlay text. Ensure sufficient contrast between text and image.

## How it works

**Text-only hero:** A `<section class="nhsuk-hero">` with the NHS blue background contains a `<div class="nhsuk-hero__wrapper">` holding the heading and descriptive text.

**Hero with background image:** Adds `nhsuk-hero--image` and a `nhsuk-hero--image-description` modifier. The image loads via a CSS `background-image` style on the `<section>` element. An overlay `<div class="nhsuk-hero__overlay">` sits over the image to maintain text contrast.

**Hero with image beside text:** Uses a `<div class="nhsuk-hero-content">` layout that places an image alongside the text content in a two-column arrangement.

## Code Examples

### Text-only hero

#### HTML

```html
<section class="nhsuk-hero">
  <div class="nhsuk-width-container nhsuk-hero--border">
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-two-thirds">
        <div class="nhsuk-hero__wrapper">
          <h1 class="nhsuk-u-margin-bottom-3">We're here to help you stay well</h1>
          <p class="nhsuk-body-l nhsuk-u-margin-bottom-0">Find information and advice about health conditions, symptoms, healthy living, medicines, and how to get help.</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

#### Nunjucks

```njk
{{ hero({
  heading: "We're here to help you stay well",
  text: "Find information and advice about health conditions, symptoms, healthy living, medicines, and how to get help."
}) }}
```

### Hero with background image

#### HTML

```html
<section class="nhsuk-hero nhsuk-hero--image" style="background-image: url('/images/hero-image.jpg');">
  <div class="nhsuk-hero__overlay">
    <div class="nhsuk-width-container">
      <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-two-thirds">
          <div class="nhsuk-hero-content">
            <h1 class="nhsuk-u-margin-bottom-3">Your health, your way</h1>
            <p class="nhsuk-body-l nhsuk-u-margin-bottom-0">Access NHS services, book appointments, and manage your health online.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

#### Nunjucks

```njk
{{ hero({
  heading: "Your health, your way",
  text: "Access NHS services, book appointments, and manage your health online.",
  imageURL: "/images/hero-image.jpg"
}) }}
```

### Hero with image beside text

#### Nunjucks

```njk
{{ hero({
  heading: "Find your NHS number",
  text: "Your NHS number helps identify you so you can access health services.",
  imageURL: "/images/nhs-number.jpg",
  imageAlt: "A person looking at their phone"
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| heading | string | Yes | Heading text for the hero. |
| text | string | No | Descriptive text displayed below the heading. |
| imageURL | string | No | URL for the hero image. When set, the hero displays the image variant. |
| imageAlt | string | No | Alt text for the hero image. Required when `imageURL` is set. |
| classes | string | No | Classes to add to the `<section>` element. |
| attributes | object | No | HTML attributes to add to the `<section>` element as key–value pairs. |

## Accessibility

The hero heading must use an appropriate heading level — typically `<h1>` as the hero appears at the top of a landing page.

When using a background image, ensure the text overlay has sufficient colour contrast against the image. The `nhsuk-hero__overlay` provides a semi-transparent dark overlay to improve readability, but you should test contrast with the specific image you choose.

Provide meaningful `imageAlt` text when the image conveys information. Use an empty string for decorative images that do not add meaning beyond the text content.

Ensure the hero text remains readable when users increase the browser text size. The text should reflow and remain visible at 200% zoom.

## Do and Do not

**Do:**
- Use the hero only on landing pages and homepages.
- Write a concise heading that tells users what the service or page offers.
- Use high-quality, relevant images that support the message.
- Test the colour contrast of text against background images.
- Ensure the hero works at different viewport sizes and text zoom levels.

**Do not:**
- Do not use the hero on content or transactional pages.
- Do not use a background image that makes the text hard to read.
- Do not use more than one hero on a single page.
- Do not put interactive elements (buttons, forms, links) inside the hero — place them in the main content below.

## Related Components / Patterns

- [Card](https://service-manual.nhs.uk/design-system/components/card) — for presenting linked content below the hero on landing pages.
- [Header](https://service-manual.nhs.uk/design-system/components/header) — sits above the hero at the top of the page.
- [Action link](https://service-manual.nhs.uk/design-system/components/action-link) — for prominent links below the hero.
