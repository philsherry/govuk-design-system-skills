---
category: components
description: A responsive image component with optional caption for health content pages.
keywords:
  - "image styles"
  - "images"
  - "picture element"
  - "responsive images"
last-reviewed: "2026-04-03"
name: Images
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/images"
---

# Images

> A responsive image component with optional caption for health content pages.
> Source: https://service-manual.nhs.uk/design-system/components/images

## Overview

The images component provides a consistent way to display responsive images within NHS content pages. It renders an image that scales to fit its container, with an optional caption below for context or attribution.

The component uses a `<figure class="nhsuk-image">` element containing an `<img class="nhsuk-image__img">`. When a caption exists, a `<figcaption class="nhsuk-image__caption">` sits below the image.

Images play a key role in NHS health content. They can help users identify symptoms, understand anatomy, follow instructions for exercises or treatments, and recognise medical devices or medications.

## When to use this component

Use the images component to display photographs, diagrams, or illustrations within health content pages. It works well for:

- Showing symptoms so users can identify a condition.
- Illustrating exercises or treatment techniques.
- Displaying medical devices or medications.
- Supporting written instructions with visual context.

## When not to use this component

Do not use decorative images that add no information. Every image should support the content and help users understand the topic.

Do not use images as a substitute for text content. Users who cannot see images rely on the written content and alt text.

Do not use the images component for icons or logos — those belong in other components (header, footer, action link).

## How it works

The component renders a `<figure class="nhsuk-image">` containing an `<img>` with the class `nhsuk-image__img`. The image scales responsively to fill the available width of its container.

When you provide a caption, the component adds a `<figcaption class="nhsuk-image__caption">` below the image. Use captions to credit sources, describe what the image shows, or provide context that the alt text alone cannot convey.

The `<figure>` and `<figcaption>` pairing gives assistive technologies a semantic relationship between the image and its caption.

## Code examples

### Default / Basic

#### HTML

```html
<figure class="nhsuk-image">
  <img class="nhsuk-image__img" src="/images/symptoms/rash.jpg" alt="A red, blotchy rash on a person's forearm">
</figure>
```

#### Nunjucks

```njk
{{ image({
  src: "/images/symptoms/rash.jpg",
  alt: "A red, blotchy rash on a person's forearm"
}) }}
```

### With caption

#### HTML

```html
<figure class="nhsuk-image">
  <img class="nhsuk-image__img" src="/images/symptoms/chickenpox.jpg" alt="Small red spots on the chest and stomach of a child">
  <figcaption class="nhsuk-image__caption">
    Chickenpox spots can appear anywhere on the body and may spread over a few days.
  </figcaption>
</figure>
```

#### Nunjucks

```njk
{{ image({
  src: "/images/symptoms/chickenpox.jpg",
  alt: "Small red spots on the chest and stomach of a child",
  caption: "Chickenpox spots can appear anywhere on the body and may spread over a few days."
}) }}
```

### With extra classes

#### Nunjucks

```njk
{{ image({
  src: "/images/exercises/knee-bend.jpg",
  alt: "A person bending their knee while seated in a chair",
  caption: "Bend your knee as far as you can, then straighten it. Repeat 10 times.",
  classes: "nhsuk-u-margin-bottom-4"
}) }}
```

## Nunjucks macro options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| src | string | Yes | URL of the image file. |
| alt | string | Yes | Alt text for the image. Must describe the image content for users who cannot see it. |
| caption | string | No | Caption text displayed below the image in a `<figcaption>`. |
| classes | string | No | Classes to add to the `<figure>` element. |
| attributes | object | No | HTML attributes to add to the `<figure>` element as key–value pairs. |

## Accessibility

Every image must have alt text that describes what the image shows. Write alt text as if you were describing the image to someone who cannot see it. Keep it concise but informative.

For medical images showing symptoms, describe the visible characteristics: colour, location on the body, size, and texture. For example, "A red, blotchy rash on the back of a hand" gives users the information they need.

The `<figure>` and `<figcaption>` elements create a semantic link between the image and caption. Screen readers announce the caption as associated with the image.

Do not repeat the alt text in the caption. The alt text describes the image; the caption provides Extra context, attribution, or instructions.

Ensure images do not convey information that the surrounding text does not also cover. Users who cannot see the image should still get the full picture from the written content.

## Do and do not

**Do:**
- Write descriptive alt text for every image.
- Use captions to provide context or credit the image source.
- Use high-quality images that show the subject matter with enough detail.
- Ensure images scale well on smaller screens.
- Describe visible symptoms in alt text: colour, size, location, and texture.

**Do not:**
- Do not use decorative images that add no information to the content.
- Do not repeat the alt text in the caption — each should serve a distinct purpose.
- Do not use images as the sole way to convey critical information.
- Do not use images with embedded text — keep text in the HTML so screen readers and translation tools can process it.
- Do not omit alt text on any image.

## Related components and patterns

- [Card](https://service-manual.nhs.uk/design-system/components/card) — for images within a navigable card layout.
- [Hero](https://service-manual.nhs.uk/design-system/components/hero) — for prominent banner images on landing pages.
- [Do and don't list](https://service-manual.nhs.uk/design-system/components/do-and-dont-list) — for visual health advice that may sit alongside image content.
