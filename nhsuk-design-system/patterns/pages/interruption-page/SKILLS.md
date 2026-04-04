---
category: patterns
description: Interrupt users with important information they need to read before they can continue with a task.
keywords:
  - "alert page"
  - "important information"
  - "interruption"
  - "interruption page"
  - "warning page"
last-reviewed: "2026-04-03"
name: Interruption page
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/patterns/interruption-page"
subcategory: pages
---

# Interruption page

> Interrupt users with important information they need to read before they can continue with a task.
> Source: <https://service-manual.nhs.uk/design-system/patterns/interruption-page>

## Overview

An interruption page forces users to stop and read critical information before proceeding. The page uses a distinct visual style — typically a coloured background — to signal that the content requires attention. Users must take an action (usually clicking a button) to continue past the interruption.

Use this pattern sparingly. Interrupting users breaks their flow and can cause frustration. Reserve it for information that users must read to make an informed decision or meet a legal requirement.

## When to use this pattern

- When users must acknowledge important information before proceeding (e.g. eligibility criteria, data sharing agreements, clinical warnings).
- When skipping the information could lead to harm, wasted effort, or a failed application.
- When the information is time-sensitive or applies to the specific transaction the user is completing.

## When not to use this pattern

- Do not use an interruption page for general information that could appear as standard page content.
- Do not use it as a way to force users to read terms and conditions — consider a checkbox on the relevant page instead.
- Do not use more than one interruption page in a single journey unless the information is genuinely separate and critical at different points.

## How it works

### Page structure

1. A full-width coloured background (typically NHS blue) to create visual distinction from standard pages.
2. White text on the coloured background for the heading and key message.
3. A clear `<h1>` heading that states the core message.
4. A short body of text explaining what users need to know.
5. A button to continue (e.g. "Continue" or "I understand").
6. No back link — users must proceed forward from an interruption.

### Content guidelines

Keep the content short and focused. Users who encounter an interruption page want to get past it. Long blocks of text reduce the chance that users read the important information.

- Lead with the most important point.
- Use short sentences and bullet points.
- Do not repeat information available on other pages.

## Code examples

### HTML

```html
<div class="app-interruption-page">
  <div class="nhsuk-width-container">
    <main class="nhsuk-main-wrapper" id="maincontent" role="main">
      <div class="nhsuk-grid-row">
        <div class="nhsuk-grid-column-two-thirds">

          <h1 class="nhsuk-heading-xl nhsuk-u-color-white">
            This service is for people registered with a GP in England
          </h1>

          <p class="nhsuk-body-l nhsuk-u-color-white">
            You need to be registered with a GP surgery in England to use this service. If you are registered in Scotland, Wales, or Northern Ireland, contact your local health service.
          </p>

          <form method="post" novalidate>
            <button class="nhsuk-button nhsuk-button--reverse" type="submit">
              Continue
            </button>
          </form>

        </div>
      </div>
    </main>
  </div>
</div>
```

### Custom CSS for the interruption background

```scss
.app-interruption-page {
  background-color: $color_nhsuk-blue;
  padding: nhsuk-spacing(8) 0;
}
```

## Accessibility

- Ensure sufficient colour contrast between the text and the background colour. White text on NHS blue (`#005eb8`) meets WCAG AA for large text but verify the exact combination for body text sizes.
- The page must work without CSS — the text content should still make sense on a plain white background.
- Do not use the interruption page to create a modal or dialog that traps keyboard focus — the page should be a standard page with a full URL.
- Screen reader users should understand the importance of the content from the heading and text alone, without relying on the visual distinction of the coloured background.

## Do and do not

**Do:**

- Use interruption pages for information that users must read before proceeding.
- Keep the content short and focused on one key message.
- Use a clear heading that states the core point.
- Provide a button to continue past the interruption.

**Do not:**

- Use interruption pages for general guidance or information.
- Include more than one interruption page in a journey unless the information is distinct and critical at separate points.
- Use long paragraphs — bullet points and short sentences work better.
- Remove the continue button — users must have a clear path forward.
- Use an interruption page as a substitute for good error messaging.

## Related components and patterns

- [Question pages pattern](../question-pages/SKILLS.md)
- [Start page pattern](../start-page/SKILLS.md)
- [Warning callout component](https://service-manual.nhs.uk/design-system/components/warning-callout)
