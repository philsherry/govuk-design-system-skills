---
category: styles
description: GOV.UK Frontend styles links with an underline, the GOV.UK link blue, and a distinct visited state in purple. Modifier classes control underline visibility, visited state, colour inversion, and muted appearance for secondary links.
govuk-frontend: "5.x"
keywords:
  - "hyperlinks"
  - "link styles"
  - "links"
  - "visited links"
last-reviewed: "2026-04-03"
name: Links
source: "https://design-system.service.gov.uk/styles/typography/"
---

# Links

> GOV.UK Frontend styles links with an underline, the GOV.UK link blue, and a distinct visited state in purple. Modifier classes control underline visibility, visited state, colour inversion, and muted appearance for secondary links.
> Source: https://design-system.service.gov.uk/styles/typography/

## Overview

Links in GOV.UK Frontend use the `govuk-link` class. By default links are blue (`#1d70b8`), underlined, and turn purple (`#4c2c92`) after a user visits them. On hover the colour darkens to `#003078`. On focus, links receive a yellow focus indicator with a black outline to meet WCAG contrast requirements.

GOV.UK Frontend provides modifier classes for common link variants: muted (secondary), no underline, no visited state, and inverse (white on dark backgrounds).

## When to use this style

Apply `govuk-link` to all `<a>` elements in body content, navigation, and components where links appear inline with text. Use modifier classes only when there is a clear user need — for example, using `govuk-link--no-visited-state` when tracking visited state would confuse users (such as in a navigation menu).

## When not to use this style

Do not style buttons as links or links as buttons. If an action submits data or triggers a process, use a button. If an action navigates to a new page or resource, use a link. Do not remove the underline from inline body text links — users who cannot distinguish colour need underlines.

## How it works

### Base link class

```html
<a class="govuk-link" href="/next-page">Continue</a>
```

Default appearance:
- Colour: `#1d70b8`
- Underlined
- Visited: `#4c2c92`
- Hover: `#003078`
- Focus: yellow `#fd0` background with `#0b0c0c` text and `#0b0c0c` outline

### Modifier classes

| Class | Effect |
|---|---|
| `govuk-link--muted` | Secondary link in `#505a5f` (dark grey), maintains underline |
| `govuk-link--no-underline` | Removes the underline; underline reappears on hover and focus |
| `govuk-link--no-visited-state` | Prevents the purple visited colour; link remains blue after visiting |
| `govuk-link--inverse` | White link for use on dark backgrounds |

You can combine modifier classes, for example `govuk-link--no-visited-state govuk-link--no-underline`.

### Muted links

Use `govuk-link--muted` for secondary navigation or supplementary links that should be visually de-emphasised relative to primary actions:

```html
<a class="govuk-link govuk-link--muted" href="/help">Help</a>
```

### No visited state

Use `govuk-link--no-visited-state` in navigation menus and contexts where the visited state would be misleading. For example, if a user can return to a step they have already completed, showing the link as visited might imply the user cannot return to the step:

```html
<a class="govuk-link govuk-link--no-visited-state" href="/step-1">
  Step 1: Personal details
</a>
```

### No underline

Use `govuk-link--no-underline` only when surrounding context makes it clear the element is a link — for example, in a navigation list where all items are links:

```html
<a class="govuk-link govuk-link--no-underline" href="/home">Home</a>
```

### Inverse links

Use `govuk-link--inverse` on dark-coloured backgrounds such as the GOV.UK footer:

```html
<a class="govuk-link govuk-link--inverse" href="/cookies">Cookies</a>
```

### External links and opening in a new tab

Avoid opening links in a new tab or window without warning the user. If you must open a link in a new tab, add "(opens in new tab)" to the link text and include `rel="noreferrer noopener"`:

```html
<a class="govuk-link" href="https://example.com" target="_blank" rel="noreferrer noopener">
  Example website (opens in new tab)
</a>
```

Do not use `target="_blank"` without informing the user.

## Code Examples

### Inline link in body text

```html
<p class="govuk-body">
  You can
  <a class="govuk-link" href="/find-address">find your address</a>
  using your postcode.
</p>
```

### Navigation link without visited state

```html
<nav>
  <ul class="govuk-list">
    <li>
      <a class="govuk-link govuk-link--no-visited-state" href="/overview">Overview</a>
    </li>
    <li>
      <a class="govuk-link govuk-link--no-visited-state" href="/eligibility">Eligibility</a>
    </li>
  </ul>
</nav>
```

### Muted secondary link

```html
<p class="govuk-body">
  <a class="govuk-link govuk-link--muted" href="/privacy">Privacy policy</a>
</p>
```

### Inverse link in a dark footer

```html
<footer class="govuk-footer">
  <div class="govuk-width-container">
    <p class="govuk-footer__meta-item">
      <a class="govuk-link govuk-footer__link" href="/accessibility-statement">
        Accessibility statement
      </a>
    </p>
  </div>
</footer>
```

### External link

```html
<p class="govuk-body">
  Read the
  <a class="govuk-link" href="https://example.com" target="_blank" rel="noreferrer noopener">
    full guidance on example.com (opens in new tab)
  </a>.
</p>
```

## Accessibility

- Users who cannot distinguish colour need underlined links in body text. Only remove underlines in contexts where the link nature is unambiguous (e.g. navigation lists, breadcrumbs).
- The GOV.UK focus style — yellow background with black text and outline — meets WCAG 2.1 AA contrast requirements. Do not override it.
- Link text must be descriptive. Avoid "click here", "read more", or "find out more" as the sole link text. The destination or purpose should be clear from the link text alone.
- If a link opens in a new tab, inform the user in the link text so they are not disoriented.
- Visited link colour (`#4c2c92`) helps users understand which pages they have already seen. Disable the visited state only when it would genuinely mislead.

## Do and Do not

**Do:**
- Apply `govuk-link` to all `<a>` elements in body content.
- Use `govuk-link--no-visited-state` in navigation menus where visited state is unhelpful.
- Include "(opens in new tab)" in the link text and `rel="noreferrer noopener"` for external links that open in a new tab.
- Write descriptive link text that makes sense out of context.

**Do not:**
- Remove link underlines from inline body text links.
- Style a `<button>` to look like a link or a `<a>` to look like a button.
- Use `govuk-link--no-underline` in contexts where the link nature is unambiguous without underlines (for example, navigation lists or breadcrumbs).
- Use `target="_blank"` without informing the user.
- Override the focus styles.

## Related Components / Patterns

- [Paragraphs style](https://design-system.service.gov.uk/styles/typography/)
- [Button component](https://design-system.service.gov.uk/components/button/)
- [Breadcrumbs component](https://design-system.service.gov.uk/components/breadcrumbs/)
- [Footer component](https://design-system.service.gov.uk/components/footer/)
- [Colour style](https://design-system.service.gov.uk/styles/colour/)
