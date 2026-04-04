---
category: patterns
description: Help users who use British Sign Language (BSL) find BSL versions of NHS content.
keywords:
  - "BSL"
  - "british"
  - "content"
  - "deaf"
  - "find"
  - "find british sign language content"
  - "language"
  - "sign"
  - "sign language"
last-reviewed: "2026-04-03"
name: Find British Sign Language content
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/patterns"
subcategory: help-users-to
---

# Find British Sign Language content

> Help users who use British Sign Language (BSL) find BSL versions of NHS content.
> Source: <https://service-manual.nhs.uk/design-system/patterns>

## Overview

The British Sign Language (BSL) pattern helps Deaf users who use BSL as their first language find signed versions of NHS content. BSL is a visual language with its own grammar and syntax — not a signed version of English. Around 87,000 people in the UK use BSL as their preferred language.

This pattern provides a link to BSL content at the top of health information pages, so Deaf BSL users can switch to video-based content without reading through text they may find difficult.

## When to use this pattern

- On health information pages where a BSL version of the content exists.
- When your service has produced BSL video content and you need to signpost users to it.

## When not to use this pattern

- Do not use this pattern if no BSL content exists for the page — a link that leads nowhere frustrates users.
- Do not use this pattern as a substitute for making your service accessible to Deaf users through other means (such as clear, simple content and visual aids).

## How it works

### Placement

Place the BSL link near the top of the page content, before the main body text. This makes it one of the first elements users encounter so they do not need to scroll through text content to find it.

### Link text

Use clear, direct link text that tells users what they get:

```text
BSL health content on this topic (opens in a new window)
```

### Opening behaviour

BSL content often lives on a third-party platform (such as SignHealth or the NHS BSL website). Open BSL links in a new window so users do not lose their place on the NHS page. Always tell users the link opens in a new window.

## Code examples

### HTML

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-two-thirds">

    <h1 class="nhsuk-heading-xl">Diabetes</h1>

    <div class="nhsuk-u-margin-bottom-5">
      <a class="nhsuk-link" href="https://bsl.nhs.uk/diabetes" target="_blank" rel="noopener noreferrer">
        Watch a BSL video about diabetes on the NHS BSL website (opens in a new window)
      </a>
    </div>

    <p class="nhsuk-body-l">
      Diabetes is a condition that causes a person's blood sugar level to become too high.
    </p>

  </div>
</div>
```

## Accessibility

- BSL content supports the needs of Deaf users for whom English text presents a barrier. This aligns with WCAG 2.2 SC 1.2.6 (Sign Language - AAA).
- Always include "(opens in a new window)" in the link text so screen reader users and sighted users know the link behaviour.
- Use `rel="noopener noreferrer"` on external links for security.
- The BSL video content itself should include captions for deaf-blind users and for users who have partial hearing alongside BSL comprehension.

## Do and do not

**Do:**

- Place the BSL link near the top of the page, before the main content.
- Use descriptive link text that mentions BSL and the topic.
- Open BSL content in a new window and tell users this in the link text.
- Work with BSL content creators to ensure the signed content matches the text content.

**Do not:**

- Add a BSL link if no BSL content exists for that page.
- Hide the BSL link below the fold or at the bottom of the page.
- Assume that providing a text transcript replaces the need for BSL content — BSL is a separate language from English.
- Use an icon without text to represent BSL — always include a text label.

## Related components and patterns

- [Action link component](https://service-manual.nhs.uk/design-system/components/action-link)
- [Inset text component](https://service-manual.nhs.uk/design-system/components/inset-text)
- [Accessibility guidance](https://service-manual.nhs.uk/accessibility)
