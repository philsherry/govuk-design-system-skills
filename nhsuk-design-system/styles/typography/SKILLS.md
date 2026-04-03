---
category: styles
description: NHS typography uses Frutiger for headings and body text, with a defined type scale and responsive sizing.
keywords:
  - "body text"
  - "font size"
  - "headings"
  - "type scale"
  - "typography"
last-reviewed: "2026-04-03"
name: Typography
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/styles/typography"
---

# Typography

> NHS typography uses Frutiger for headings and body text, with a defined type scale and responsive sizing.
> Source: <https://service-manual.nhs.uk/design-system/styles/typography>

## Overview

NHS UK Frontend provides a complete typography system built on the Frutiger typeface. The type scale covers headings, body text, lead text, links, lists, and captions. Font sizes adjust responsively at different breakpoints to maintain readability across devices.

All typography classes use the `nhsuk-` prefix. The type scale pairs with the spacing scale to create consistent vertical rhythm across pages.

## When to use this style

Use NHS typography classes on all text content in NHS services. Apply the correct heading classes for each heading level, use body text classes for paragraphs, and use link styles that follow NHS conventions.

## When not to use this style

Do not mix NHS typography classes with typography from other design systems. Do not use custom font sizes outside the defined type scale unless user research demonstrates a specific need.

## How it works

### Headings

| Class | Element | Mobile | Desktop |
|---|---|---|---|
| `nhsuk-heading-xl` | `<h1>` | 32px | 48px |
| `nhsuk-heading-l` | `<h2>` | 24px | 32px |
| `nhsuk-heading-m` | `<h3>` | 20px | 24px |
| `nhsuk-heading-s` | `<h4>` | 18px | 22px |
| `nhsuk-heading-xs` | `<h5>`, `<h6>` | 16px | 19px |

```html
<h1 class="nhsuk-heading-xl">Page heading</h1>
<h2 class="nhsuk-heading-l">Section heading</h2>
<h3 class="nhsuk-heading-m">Subsection heading</h3>
<h4 class="nhsuk-heading-s">Small heading</h4>
```

Heading classes separate visual size from semantic level. Use the correct semantic heading level (h1, h2, h3) and apply a visual class to adjust size if needed:

```html
<h2 class="nhsuk-heading-xl">Visually large h2</h2>
```

### Body text

| Class | Mobile | Desktop |
|---|---|---|
| `nhsuk-body-l` | 20px | 24px |
| `nhsuk-body` | 16px | 19px |
| `nhsuk-body-s` | 14px | 16px |

```html
<p class="nhsuk-body-l">Lead paragraph text at a larger size.</p>
<p class="nhsuk-body">Standard body text for most content.</p>
<p class="nhsuk-body-s">Smaller body text for supporting content.</p>
```

### Lead text

Use `nhsuk-body-l` as lead text for the introductory paragraph on a page:

```html
<p class="nhsuk-body-l">
  Find out how to register with a GP surgery near you.
</p>
```

### Links

Links use NHS blue (`#005eb8`) by default and follow standard link state colours:

```html
<a class="nhsuk-link" href="/page">Link text</a>
```

### Lists

Bulleted and numbered lists:

```html
<ul class="nhsuk-list nhsuk-list--bullet">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>

<ol class="nhsuk-list nhsuk-list--number">
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>
```

Plain lists without bullets or numbers:

```html
<ul class="nhsuk-list">
  <li><a class="nhsuk-link" href="/item-1">Item one</a></li>
  <li><a class="nhsuk-link" href="/item-2">Item two</a></li>
</ul>
```

### Captions

Use captions above headings to provide context:

```html
<span class="nhsuk-caption-xl">GP services</span>
<h1 class="nhsuk-heading-xl">Register with a GP surgery</h1>
```

Caption classes: `nhsuk-caption-xl`, `nhsuk-caption-l`, `nhsuk-caption-m`.

### Section break

Use a horizontal rule to separate sections of content:

```html
<hr class="nhsuk-section-break nhsuk-section-break--visible nhsuk-section-break--l">
```

Sizes: `nhsuk-section-break--xl`, `nhsuk-section-break--l`, `nhsuk-section-break--m`. Add `nhsuk-section-break--visible` to show the line.

### Font weight

```html
<p class="nhsuk-body nhsuk-u-font-weight-bold">Bold text for emphasis.</p>
```

## Code Examples

### Complete page heading with caption

```html
<span class="nhsuk-caption-xl">Urgent and emergency care</span>
<h1 class="nhsuk-heading-xl">When to call 999</h1>
<p class="nhsuk-body-l">
  Call 999 if you think someone is having a heart attack or stroke.
</p>
```

### Nunjucks heading macro

```njk
{{ heading({
  text: "Register with a GP surgery",
  headingLevel: "1",
  size: "xl"
}) }}
```

## Accessibility

- Use heading levels in a logical sequence (h1, h2, h3) — do not skip levels. Screen readers use headings for page navigation.
- Do not use heading classes on elements that are not headings (`<div>`, `<span>`) — this confuses screen readers.
- Keep link text descriptive and unique. Avoid "click here" or "read more" as link text.
- Ensure text resizes up to 200% without loss of content or functionality (WCAG SC 1.4.4).
- Do not justify text — left-aligned text is easier to read for users with dyslexia and other cognitive differences.

## Do and Do not

**Do:**

- Use heading classes to control visual size while keeping the correct semantic heading level.
- Use `nhsuk-body-l` for the lead paragraph on each page.
- Use bulleted lists for unordered groups and numbered lists for sequential steps.
- Keep paragraphs short — aim for 2 to 3 sentences.

**Do not:**

- Skip heading levels (e.g. h1 to h3 with no h2).
- Use bold text as a substitute for a heading.
- Use heading markup for text that is not a heading.
- Override the type scale with custom font sizes unless user research supports the change.
- Justify or centre body text.

## Related Components / Patterns

- [Typeface style](https://service-manual.nhs.uk/design-system/styles/use-the-nhs-frutiger-font)
- [Spacing style](https://service-manual.nhs.uk/design-system/styles/spacing)
- [Colour style](https://service-manual.nhs.uk/design-system/styles/colour)
- [Layout style](https://service-manual.nhs.uk/design-system/styles/layout)
