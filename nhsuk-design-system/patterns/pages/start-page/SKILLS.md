---
category: patterns
description: The first page of a transactional service that explains what the service does and who can use it.
keywords:
  - "landing page"
  - "service entry"
  - "start"
  - "start now"
  - "start page"
last-reviewed: "2026-04-03"
name: Start page
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/patterns/start-page"
subcategory: pages
---

# Start page

> The first page of a transactional service that explains what the service does and who can use it.
> Source: <https://service-manual.nhs.uk/design-system/patterns/start-page>

## Overview

A start page is the front door to a transactional NHS service. It tells users what the service does, who can use it, what they need before they begin, and how long it takes. The page ends with a prominent green "Start now" button that takes users into the service.

Start pages help users decide whether the service is right for them before they invest time in completing it. A well-written start page reduces drop-off rates and prevents users from starting a service they cannot complete.

## When to use this pattern

- At the beginning of every transactional NHS service.
- When users need to understand eligibility, requirements, or preparation steps before starting.

## When not to use this pattern

- Do not use a start page for informational content that does not lead into a transactional journey.
- Do not use it for services where the first step is the question itself and the user needs no introduction (rare cases).

## How it works

### Page structure

1. An `<h1>` heading with the service name (e.g. "Register with a GP surgery").
2. A lead paragraph explaining what the service does.
3. A bulleted list of what users need before they start (e.g. "your NHS number", "your previous GP surgery name").
4. Optional information about how long the process takes.
5. A "Start now" button using the `nhsuk-button--start` class.
6. Optional related links or contact information below the button.

### Start button

The start button must:

- Use the green button style (`nhsuk-button nhsuk-button--start`).
- Include the start icon (arrow) SVG.
- Link to the first question page of the service.
- Use the text "Start now".

### Content guidelines

- Keep the introduction short — one or two paragraphs at most.
- Use bullet points for "what you need" lists.
- State eligibility criteria up front so users know if they can use the service.
- Mention how long the process takes if you know.

## Code Examples

### HTML

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-two-thirds">

    <h1 class="nhsuk-heading-xl">Register with a GP surgery</h1>

    <p class="nhsuk-body-l">Use this service to register as a new patient at a GP surgery in England.</p>

    <p class="nhsuk-body">You will need:</p>
    <ul class="nhsuk-list nhsuk-list--bullet">
      <li>your NHS number (if you know it)</li>
      <li>the name of your previous GP surgery (if you had one)</li>
      <li>your current address</li>
    </ul>

    <p class="nhsuk-body">Registering takes about 10 minutes.</p>

    <a class="nhsuk-button nhsuk-button--start" href="/register/start" role="button" draggable="false">
      Start now
      <svg class="nhsuk-icon nhsuk-icon__arrow-right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" width="36" height="36">
        <path d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 2a10 10 0 0 0-9.95 9h11.64L9.74 7.05a1 1 0 0 1 1.41-1.41l5.66 5.65a1 1 0 0 1 0 1.42l-5.66 5.65a1 1 0 0 1-1.41 0 1 1 0 0 1 0-1.41L13.69 13H2.05A10 10 0 1 0 12 2z"></path>
      </svg>
    </a>

  </div>
</div>
```

### Nunjucks

```njk
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-two-thirds">

    <h1 class="nhsuk-heading-xl">Register with a GP surgery</h1>

    <p class="nhsuk-body-l">Use this service to register as a new patient at a GP surgery in England.</p>

    <p class="nhsuk-body">You will need:</p>
    <ul class="nhsuk-list nhsuk-list--bullet">
      <li>your NHS number (if you know it)</li>
      <li>the name of your previous GP surgery (if you had one)</li>
      <li>your current address</li>
    </ul>

    <p class="nhsuk-body">Registering takes about 10 minutes.</p>

    {{ actionLink({
      text: "Start now",
      href: "/register/start"
    }) }}

  </div>
</div>
```

## Accessibility

- The "Start now" button must have `role="button"` when implemented as an `<a>` element, so assistive technology announces it as a button.
- Add `draggable="false"` to prevent the link from being accidentally dragged.
- The start icon SVG must have `aria-hidden="true"` — the button text communicates the action.
- Keep the page content scannable so users can quickly decide whether to proceed.
- Do not use the start button style for other actions — reserve the green start button for beginning a service.

## Do and Do not

**Do:**

- Explain what the service does and who can use it.
- List what users need before they start.
- State how long the process takes.
- Use the green "Start now" button with the arrow icon.
- Keep the page content short and scannable.

**Do not:**

- Use the start page to collect information — that belongs on question pages.
- Include more than one "Start now" button on the page.
- Use the green start button for actions other than beginning a service.
- Hide eligibility criteria — state them before the start button.
- Add a back link to the start page — users should arrive here from external navigation.

## Related Components / Patterns

- [Action link component](https://service-manual.nhs.uk/design-system/components/action-link)
- [Button component](https://service-manual.nhs.uk/design-system/components/buttons)
- [Question pages pattern](../question-pages/SKILLS.md)
- [Interruption page pattern](../interruption-page/SKILLS.md)
