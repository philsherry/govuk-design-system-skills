---
category: styles
description: GOV.UK Frontend provides a `govuk-list` class for unstyled, bulleted, and numbered lists. A spaced modifier adds extra margin between list items for improved readability.
govuk-frontend: "5.x"
keywords:
  - "bullet list"
  - "lists"
  - "numbered list"
  - "ordered unordered"
last-reviewed: "2026-04-03"
name: Lists
source: "https://design-system.service.gov.uk/styles/typography/"
---

# Lists

> GOV.UK Frontend provides a `govuk-list` class for unstyled, bulleted, and numbered lists. A spaced modifier adds extra margin between list items for improved readability.
> Source: https://design-system.service.gov.uk/styles/typography/

## Overview

The GOV.UK list styles remove the browser default list indentation and reset margins. Modifier classes add bullet points or numbers, and a spacing modifier increases the gap between items when lists contain longer entries.

## When to use this style

Use `govuk-list` for any list of items in body content. Add `govuk-list--bullet` when the items have no specific order and need visual bullet markers. Add `govuk-list--number` for ordered sequences. Add `govuk-list--spaced` when list items contain more than around 5 words each.

## When not to use this style

Do not use a list when items would be better presented as a table (for comparative data), a definition list (for term-and-definition pairs), or a series of paragraphs (for content that requires explanation rather than enumeration). Do not use `govuk-list--bullet` in navigation contexts — use a nav component instead.

## How it works

### Base list class

`govuk-list` resets browser list styles (removes default padding, margin, and list markers) and applies the GOV.UK body font size:

```html
<ul class="govuk-list">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

### Bullet list

Add `govuk-list--bullet` to a `<ul>` to display bullet markers. The marker is `list-style-type: disc`. The style indents items to align the text with surrounding body content:

```html
<ul class="govuk-list govuk-list--bullet">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ul>
```

### Numbered list

Add `govuk-list--number` to an `<ol>` to display decimal numbers. The style indents items to align the text with surrounding body content:

```html
<ol class="govuk-list govuk-list--number">
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>
```

### Spaced list

Add `govuk-list--spaced` to increase the bottom margin on each list item. Use this when items contain more than around 5 words, or when items contain links:

```html
<ul class="govuk-list govuk-list--bullet govuk-list--spaced">
  <li>A longer item that benefits from extra vertical spacing</li>
  <li>Another longer item in the same list</li>
</ul>
```

You can combine `govuk-list--spaced` with either `govuk-list--bullet` or `govuk-list--number`, or use it with the plain `govuk-list` base class for unstyled spaced lists.

### Lists of links

A plain `govuk-list` (without bullet or number) is the standard pattern for a list of links:

```html
<ul class="govuk-list govuk-list--spaced">
  <li>
    <a class="govuk-link" href="/topic-a">Topic A</a>
  </li>
  <li>
    <a class="govuk-link" href="/topic-b">Topic B</a>
  </li>
</ul>
```

## Code examples

### Bullet list

```html
<p class="govuk-body">You will need:</p>
<ul class="govuk-list govuk-list--bullet">
  <li>your National Insurance number</li>
  <li>your passport or driving licence</li>
  <li>details of your previous addresses for the last 3 years</li>
</ul>
```

### Numbered list (steps)

```html
<ol class="govuk-list govuk-list--number">
  <li>Check your eligibility.</li>
  <li>Gather the required documents.</li>
  <li>Complete the online application.</li>
  <li>Attend your appointment.</li>
</ol>
```

### Spaced bullet list with longer items

```html
<ul class="govuk-list govuk-list--bullet govuk-list--spaced">
  <li>
    You can apply if you are 16 or over and have the right to work in the UK.
  </li>
  <li>
    You will need to provide proof of identity and your right to work or study.
  </li>
</ul>
```

### Unstyled list of links

```html
<ul class="govuk-list govuk-list--spaced">
  <li><a class="govuk-link" href="/apply">Apply for a benefit</a></li>
  <li><a class="govuk-link" href="/check">Check your entitlement</a></li>
  <li><a class="govuk-link" href="/report">Report a change</a></li>
</ul>
```

### GOV.UK Frontend does not provide a Nunjucks macro for lists

Use HTML directly. No `govukList` macro exists. Lists are standard HTML elements styled with CSS classes.

## Accessibility

- Use `<ul>` for unordered lists and `<ol>` for ordered lists. Do not use `<ul>` for a sequence of steps — use `<ol>` so screen readers convey the order.
- Do not fake a list using `<p>` tags with manual bullet characters or numbers — this is not announced as a list by screen readers.
- List items must be `<li>` elements that are direct children of `<ul>` or `<ol>`. Do not place other block elements directly inside a list without `<li>` wrappers.
- If a list contains links, ensure each link has descriptive text that makes sense out of context.
- `govuk-list--spaced` improves readability for all users, including those with dyslexia, by providing clear visual separation between items.

## Do and do not

**Do:**
- Use `<ul>` for unordered content and `<ol>` for sequential or ranked content.
- Add `govuk-list--spaced` when items contain more than around 5 words or include links.
- Use a plain `govuk-list` (no bullet or number modifier) for link lists.
- Keep list items short and parallel in structure where possible.

**Do not:**
- Use bullet lists for two or fewer items — consider running them together in a sentence instead.
- Nest lists more than two levels deep without a strong content reason.
- Apply `govuk-list--bullet` to an `<ol>` or `govuk-list--number` to a `<ul>`.
- Use lists for navigation menus — use a dedicated navigation component instead.
- Create fake lists using `<p>` tags or CSS `content` bullet characters.

## Related components and patterns

- [Typography – paragraphs](https://design-system.service.gov.uk/styles/typography/)
- [Links style](https://design-system.service.gov.uk/styles/typography/)
- [Spacing style](https://design-system.service.gov.uk/styles/spacing/)
- [Summary list component](https://design-system.service.gov.uk/components/summary-list/)
- [Table component](https://design-system.service.gov.uk/components/table/)
