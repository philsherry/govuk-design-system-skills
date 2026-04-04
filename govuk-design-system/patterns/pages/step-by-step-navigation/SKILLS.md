---
category: patterns
description: Guide users through a complex journey made up of more than one task or stage, showing them where they are and what to do next.
govuk-frontend: "5.x"
keywords:
  - "guided journey"
  - "linear process"
  - "navigation"
  - "step"
  - "step by step"
  - "step by step navigation"
last-reviewed: "2026-04-03"
name: Step by step navigation
source: "https://design-system.service.gov.uk/patterns/step-by-step-navigation/"
subcategory: pages
---

# Step by step navigation

> Guide users through a complex journey made up of more than one task or stage, showing them where they are and what to do next.
> Source: https://design-system.service.gov.uk/patterns/step-by-step-navigation/

## Overview

Step by step navigation is a GOV.UK pattern used on GOV.UK guidance pages to help users understand and complete a multi-stage process. It presents a numbered list of steps, each of which the user can expand to reveal content, links to related pages, or links to tools and services.

GOV.UK uses this pattern (for example "Learn to drive a car", "Register to vote") and implements it through the GOV.UK publishing platform (Whitehall, Content Publisher), not through govuk-frontend directly. Teams building standalone transactional services should not attempt to replicate this pattern inside their service — use the Task list component instead.

## When to use this pattern

Use step by step navigation when:

- Users need to complete a process that spans more than one separate task or page
- The process has a defined sequence or some tasks must finish before others can start
- The content lives on GOV.UK as guidance pages rather than in a transactional service
- Users may need to return to check their progress or find the next step
- The process involves more than one government department or external organisation

Examples of appropriate use:
- "Learn to drive a car" — spans theory test, driving lessons, practical test, getting a licence
- "Register to vote" — spans eligibility checks, registration, polling card
- "Get a UK passport" — spans application, photos, supporting documents, payment

## When not to use

- Do not use step by step navigation inside a transactional service — use the Task list component instead
- Do not use it for simple linear forms with a small number of steps — use question pages
- Do not attempt to build this pattern from scratch using govuk-frontend components — this is a GOV.UK platform pattern delivered via the publishing CMS
- Do not use it when there is no clear sequence to the tasks

## How it works

Step by step navigation consists of:

1. A numbered list of steps displayed in a sidebar or page on GOV.UK guidance content
2. Each step has a title and the user can expand it (show/hide) to reveal explanatory content, links to relevant GOV.UK guidance pages, links to tools or services, and optional "and" or "or" connectors between tasks
3. The active step highlights to show users where they are in the journey
4. Related guidance pages link back to the step by step navigation, showing users the context of that page within the larger journey

The GOV.UK publishing platform implements this pattern. Content designers add step by step navigation through the CMS — not through govuk-frontend Nunjucks macros or HTML templates like other components.

### Difference from Task list

The Task list component (available in govuk-frontend) appears inside transactional services to show users the tasks they need to complete to finish an application. Step by step navigation is for GOV.UK guidance content that spans more than one page or service.

| | Step by step navigation | Task list |
|---|---|---|
| Where used | GOV.UK guidance pages | Inside a transactional service |
| Implemented via | GOV.UK publishing platform (CMS) | govuk-frontend component |
| Shows progress | Yes — highlights current step | Yes — shows status of each task |
| Suitable for | Multi-agency guidance journeys | Single service applications |

## Code examples

### HTML

govuk-frontend HTML templates do not include step by step navigation. The following illustrates the conceptual structure as used on GOV.UK — the GOV.UK publishing platform handles the actual implementation:

```html
<!-- Illustrative only — use the GOV.UK CMS to implement step by step navigation -->
<div class="app-step-nav app-step-nav--large app-step-nav--active"
  data-module="appstepnav"
  id="step-by-step-navigation"
  data-show-text="Show"
  data-hide-text="Hide"
  data-show-all-text="Show all steps"
  data-hide-all-text="Hide all steps">

  <ol class="app-step-nav__steps">

    <li class="app-step-nav__step js-step" id="check-youre-allowed-to-drive">
      <div class="app-step-nav__header js-toggle-panel" data-position="1">
        <h2 class="app-step-nav__title">
          <span class="app-step-nav__circle app-step-nav__circle--number">
            <span class="app-step-nav__circle-inner">
              <span class="app-step-nav__circle-background">
                <span class="app-step-nav__circle-step-label govuk-visually-hidden">Step</span> 1
                <span class="app-step-nav__circle-step-colon govuk-visually-hidden" aria-hidden="true">:</span>
              </span>
            </span>
          </span>
          <span class="js-step-title">
            Check you're allowed to drive
          </span>
        </h2>
      </div>
      <div class="app-step-nav__panel js-panel js-hidden" id="step-panel-check-youre-allowed-to-drive-1">
        <p class="app-step-nav__paragraph">Most people can start learning to drive when they're 17.</p>
        <ol class="app-step-nav__list" data-length="1">
          <li class="app-step-nav__list-item js-list-item">
            <a data-position="1.1" class="app-step-nav__link js-link" href="/vehicles-can-drive">
              Check what age you can drive
            </a>
          </li>
        </ol>
      </div>
    </li>

    <li class="app-step-nav__step js-step" id="get-a-provisional-licence">
      <div class="app-step-nav__header js-toggle-panel" data-position="2">
        <h2 class="app-step-nav__title">
          <span class="app-step-nav__circle app-step-nav__circle--number">
            <span class="app-step-nav__circle-inner">
              <span class="app-step-nav__circle-background">
                <span class="app-step-nav__circle-step-label govuk-visually-hidden">Step</span> 2
              </span>
            </span>
          </span>
          <span class="js-step-title">
            Get a provisional driving licence
          </span>
        </h2>
      </div>
      <div class="app-step-nav__panel js-panel js-hidden" id="step-panel-get-a-provisional-licence-2">
        <ol class="app-step-nav__list" data-length="1">
          <li class="app-step-nav__list-item js-list-item">
            <a data-position="2.1" class="app-step-nav__link js-link" href="/apply-first-provisional-driving-licence">
              Apply for a provisional driving licence
            </a>
          </li>
        </ol>
      </div>
    </li>

  </ol>
</div>
```

### Nunjucks

govuk-frontend does not offer step by step navigation as a Nunjucks macro. Configure it through the GOV.UK publishing CMS.

For transactional services, use the Task list component instead:

```njk
{{ govukTaskList({
  items: [
    {
      title: { text: "Check eligibility" },
      href: "/check-eligibility",
      status: { text: "Completed" }
    },
    {
      title: { text: "Complete your application" },
      href: "/application",
      status: { text: "In progress" }
    },
    {
      title: { text: "Submit and pay" },
      status: { text: "Cannot start yet" }
    }
  ]
}) }}
```

## Accessibility

- Step by step navigation on GOV.UK uses JavaScript to show and hide step content. When JavaScript is unavailable, all steps display expanded so content remains accessible
- Each step title is an `<h2>` element — the page heading (`<h1>`) is the process name; do not skip heading levels
- The active step uses `aria-current="true"` on the `<li>` and `aria-current="step"` on the active link so screen reader users can identify where they are in the journey
- Step numbers are in visually styled circles — the number includes visually hidden text with `<span class="govuk-visually-hidden">Step </span>` so screen readers announce "Step 1" not "1" alone
- The `<ol>` element conveys the ordered sequence to assistive technology — do not rely on the numbered circles alone
- Links within each step must have descriptive text — avoid "click here" or bare URLs

## Do and do not

**Do:**
- Use step by step navigation for complex multi-stage guidance journeys on GOV.UK
- Deliver it through the GOV.UK publishing platform (CMS), not govuk-frontend
- Link from related guidance pages back to the step by step navigation
- Highlight the current step so users know where they are
- Use the Task list component inside transactional services instead

**Do not:**
- Use step by step navigation inside a transactional service — use Task list instead
- Attempt to recreate this pattern from scratch with govuk-frontend HTML and CSS
- Use it for simple linear journeys with 2 or 3 steps
- Use it for journeys where the steps can run in any order with no clear sequence

## Related components and patterns

- [../../../components/task-list/SKILLS.md](../../../components/task-list/SKILLS.md)
- [../question-pages/SKILLS.md](../question-pages/SKILLS.md)
- [../confirmation-pages/SKILLS.md](../confirmation-pages/SKILLS.md)
