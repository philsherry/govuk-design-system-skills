---
category: styles
description: Guidance for using images in GOV.UK services, including responsive image styles, alt text requirements, decorative image handling, and inline SVG accessibility.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Images
---

# Images

> Guidance for using images in GOV.UK services, including responsive image styles, alt text requirements, decorative image handling, and inline SVG accessibility.
> Source: https://design-system.service.gov.uk/styles/images/

---

## Overview

GOV.UK Frontend provides a `govuk-image` class that makes images responsive by default (max-width 100%, height auto). A `govuk-image--no-margin` modifier removes the default bottom margin. All images in GOV.UK services must meet accessibility requirements: meaningful images need descriptive alt text, and decorative images must use an empty alt attribute so screen readers ignore them.

---

## When to use this style

Use `govuk-image` on any content image that should scale with its container. Use inline SVGs for icons and other vector graphics that are part of the UI. Apply the `govuk-image` class to `<img>` elements in body content, not to images inside components that manage their own image styling.

---

## When not to use this style

Do not use images to convey information that text can communicate. Avoid images that are purely decorative but contain embedded text — screen readers and users who override fonts or zoom in will not see the text as expected. Do not use images to replace proper semantic HTML, such as using a screenshot of a table instead of a real table.

---

## How it works

### Base class

```html
<img class="govuk-image" src="/path/to/image.jpg" alt="Description of the image">
```

`govuk-image` applies:
- `max-width: 100%` — the image scales down within its container
- `height: auto` — maintains aspect ratio
- `display: block` — removes the inline baseline gap
- A bottom margin (matching `govuk-spacing(6)`)

### No-margin modifier

Use `govuk-image--no-margin` to remove the default bottom margin, for example when the image is the last element in a container or when a caption follows straight after:

```html
<img class="govuk-image govuk-image--no-margin" src="/path/to/image.jpg" alt="Description">
```

### Meaningful images (informative alt text)

Images that convey content or context must have a descriptive `alt` attribute. The description should convey the same information a sighted user gets from looking at the image:

```html
<img
  class="govuk-image"
  src="/images/passport-photo-example.jpg"
  alt="A passport photo showing a person facing forward against a plain light background"
>
```

### Decorative images

Images that are purely visual and add no informational content should use an empty alt attribute (`alt=""`). This causes screen readers to skip over them entirely. Do not omit the `alt` attribute — its absence causes some screen readers to read out the filename instead.

```html
<img class="govuk-image" src="/images/decorative-divider.png" alt="">
```

### Inline SVGs

Inline SVGs used as icons or decorative elements must include `focusable="false"` to prevent Internet Explorer from placing them in the tab order. If the SVG conveys meaningful information, provide an accessible label:

```html
<!-- Decorative inline SVG -->
<svg
  class="my-icon"
  focusable="false"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
>
  <path d="..." />
</svg>

<!-- Informative inline SVG with accessible label -->
<svg
  focusable="false"
  aria-labelledby="svg-title"
  role="img"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
>
  <title id="svg-title">Warning</title>
  <path d="..." />
</svg>
```

### Responsive images with srcset

For images where more than one resolution is available, use `srcset` and `sizes` to help browsers choose the most appropriate source:

```html
<img
  class="govuk-image"
  src="/images/example-800.jpg"
  srcset="/images/example-400.jpg 400w, /images/example-800.jpg 800w, /images/example-1200.jpg 1200w"
  sizes="(max-width: 641px) 100vw, 800px"
  alt="Description of the image"
>
```

### Hiding images

To hide an image visually and from assistive technologies, use the display override class:

```html
<img class="govuk-image govuk-!-display-none" src="..." alt="">
```

To hide an image visually but keep it accessible, use `govuk-visually-hidden` on a container instead.

---

## Code Examples

### Standard content image

```html
<figure>
  <img
    class="govuk-image"
    src="/images/how-to-apply.jpg"
    alt="A completed application form with sections highlighted"
  >
  <figcaption class="govuk-body-s">
    Example of a completed application form.
  </figcaption>
</figure>
```

### Decorative image with empty alt text

```html
<img class="govuk-image" src="/images/banner-graphic.png" alt="">
```

### Image with no bottom margin (before a caption)

```html
<img
  class="govuk-image govuk-image--no-margin"
  src="/images/map.png"
  alt="Map showing the location of the service centre"
>
<p class="govuk-body-s">Figure 1: Location of the service centre.</p>
```

### Decorative inline SVG icon (used inside a button or link)

```html
<button class="govuk-button" type="submit">
  <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
    <path d="M16 8.5l-7.5 7.5-1.4-1.4 5.6-5.6H0v-2h12.7L7.1 1.4 8.5 0z"/>
  </svg>
  Continue
</button>
```

---

## Accessibility

- All `<img>` elements must have an `alt` attribute. Omitting the attribute is a WCAG failure.
- Meaningful images require alt text that conveys the same information a sighted user receives.
- Decorative images must have `alt=""` (empty string). Screen readers will then skip them.
- Inline SVGs must include `focusable="false"` to prevent IE and Edge from including them in the tab order.
- Decorative inline SVGs must include `aria-hidden="true"` so screen readers ignore them.
- Informative inline SVGs must include `role="img"` and either an `aria-label` or an associated `<title>` element.
- Do not use images that convey information solely through colour — users who cannot distinguish colour will lose that information.
- Complex images (diagrams, charts, infographics) need a longer text description placed next to the image or via a link to a separate page.

---

## Do / Don't

**Do:**
- Use `govuk-image` on all content `<img>` elements.
- Provide descriptive alt text that conveys the meaning and context of meaningful images.
- Use `alt=""` for purely decorative images.
- Add `focusable="false"` and `aria-hidden="true"` to decorative inline SVGs.
- Use `<figure>` and `<figcaption>` to associate images with their captions.

**Don't:**
- Omit the `alt` attribute from any `<img>` element.
- Use images of text — use real text with GOV.UK typography instead.
- Convey information using colour alone in images.
- Use large, high-resolution images without providing responsive alternatives.
- Use `govuk-image` inside components that provide their own image layout.

---

## Related Components / Patterns

- [Spacing style](https://design-system.service.gov.uk/styles/spacing/)
- [Colour style](https://design-system.service.gov.uk/styles/colour/)
- [Layout style](https://design-system.service.gov.uk/styles/layout/)
- [GOV.UK Frontend – accessibility guidance](https://design-system.service.gov.uk/accessibility/)
