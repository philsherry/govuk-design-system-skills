---
category: styles
description: GOV.UK Frontend provides three paragraph size classes. The default `govuk-body` class (19px desktop) works for most body text. `govuk-body-l` is for lead paragraphs and `govuk-body-s` for supporting or secondary text.
govuk-frontend: "5.x"
keywords:
  - "body copy"
  - "body text"
  - "paragraph text"
  - "paragraphs"
last-reviewed: "2026-04-03"
name: Paragraphs
source: "https://design-system.service.gov.uk/styles/typography/"
---

# Paragraphs

> GOV.UK Frontend provides three paragraph size classes. The default `govuk-body` class (19px desktop) works for most body text. `govuk-body-l` is for lead paragraphs and `govuk-body-s` for supporting or secondary text.
> Source: https://design-system.service.gov.uk/styles/typography/

## Overview

Paragraph styles in GOV.UK Frontend control font size, line height, and bottom margin for blocks of body text. Three classes cover three size points on the GOV.UK type scale. All paragraph classes are responsive — they use smaller values on mobile and larger on tablet and above.

Use the default paragraph class `govuk-body` for most body text in a service.

## When to use this style

Use `govuk-body` for all standard body text. Use `govuk-body-l` as a lead or introductory paragraph at the top of a page to draw the user into the content. Use `govuk-body-s` for secondary or supporting information such as hints, metadata, or captions where reduced visual prominence is appropriate.

## When not to use this style

Do not use `govuk-body-s` for large blocks of running text — 16px can be harder to read at length. Do not use paragraph classes on elements that are not `<p>` tags, unless the semantics are genuinely appropriate.

## How it works

### Paragraph classes

| Class | Mobile | Tablet and above | Use |
|---|---|---|---|
| `govuk-body-l` | 20px | 24px | Lead / introductory paragraph |
| `govuk-body` | 18px | 19px | Standard body text (default) |
| `govuk-body-s` | 16px | 16px | Secondary / supporting text |

All paragraph classes include a bottom margin of `govuk-spacing(4)` (20px) by default.

### Removing bottom margin

Use the spacing override class `govuk-!-margin-bottom-0` to remove the bottom margin from the last paragraph in a container:

```html
<p class="govuk-body govuk-!-margin-bottom-0">
  Last paragraph in a section.
</p>
```

### Inset text

When you need to draw attention to a paragraph of content without it being an error, warning, or callout box, use the inset text component rather than a styled paragraph.

## Code Examples

### Standard body text

```html
<p class="govuk-body">
  You can apply for a National Insurance number if you have the right to work
  in the UK and you're working or looking for work.
</p>
```

### Lead paragraph

```html
<p class="govuk-body-l">
  Apply online to get a National Insurance number.
</p>
<p class="govuk-body">
  You'll need to prove your identity and your right to work or study in the UK.
</p>
```

### Small paragraph (supporting text)

```html
<p class="govuk-body-s">
  This form usually takes 10 minutes to complete.
</p>
```

### Three paragraphs

```html
<p class="govuk-body">
  Your application has been received.
</p>
<p class="govuk-body">
  We will contact you within 5 working days.
</p>
<p class="govuk-body govuk-!-margin-bottom-0">
  You do not need to do anything else now.
</p>
```

### Combining paragraph size with a font-weight override

To make a standard-size paragraph bold without changing its size, use the font weight override class:

```html
<p class="govuk-body govuk-!-font-weight-bold">
  Important: your reference number is 12345678.
</p>
```

## Accessibility

- Use `<p>` elements for paragraph text. Do not use `<div>` or `<span>` elements styled to look like paragraphs.
- Line height for `govuk-body` (1.5) aids readability, especially for users with dyslexia. Do not override it.
- Do not use colour alone to convey meaning within a paragraph — always pair colour with text or another visual indicator.
- Avoid justified text alignment, which creates uneven word spacing that is harder to read for users with dyslexia.

## Do and Do not

**Do:**
- Use `govuk-body` as the default for all standard body text.
- Use `govuk-body-l` for one introductory paragraph near the top of a content page.
- Use `govuk-body-s` for hints, captions, and supporting information where smaller size is intentional.
- Remove bottom margin from the last paragraph in a component using `govuk-!-margin-bottom-0`.

**Do not:**
- Use `govuk-body-s` for long blocks of running text.
- Apply more than one paragraph size class to the same element.
- Use paragraph classes on non-`<p>` elements without a semantic reason.
- Override the default line height or letter spacing.

## Related Components / Patterns

- [Type scale style](https://design-system.service.gov.uk/styles/type-scale/)
- [Headings style](https://design-system.service.gov.uk/styles/typography/)
- [Font override classes](https://design-system.service.gov.uk/styles/font-override-classes/)
- [Spacing style](https://design-system.service.gov.uk/styles/spacing/)
- [Inset text component](https://design-system.service.gov.uk/components/inset-text/)
- [Warning text component](https://design-system.service.gov.uk/components/warning-text/)
