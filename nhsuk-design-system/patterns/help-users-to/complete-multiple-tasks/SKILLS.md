---
category: patterns
description: Help users complete a service that involves more than one distinct task by giving them an overview of all tasks and their progress.
keywords:
  - "application sections"
  - "complete"
  - "complete multiple tasks"
  - "multi-task"
  - "multiple"
  - "task list pattern"
  - "tasks"
last-reviewed: "2026-04-03"
name: Complete multiple tasks
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/patterns/complete-multiple-tasks"
subcategory: help-users-to
---

# Complete multiple tasks

> Help users complete a service that involves more than one distinct task by giving them an overview of all tasks and their progress.
> Source: <https://service-manual.nhs.uk/design-system/patterns/complete-multiple-tasks>

## Overview

The complete-multiple-tasks pattern helps users work through a service that requires more than one distinct task, which may not need completing in a single session. It presents a task list page that gives users an overview of all tasks, shows the status of each task (not yet started, in progress, completed), and lets users navigate directly to any task.

Use this pattern when a service is too complex to present as a single linear form. Breaking the journey into separate tasks helps users understand the scope of what they need to do and reduces cognitive load. Users can return across more than one session and pick up where they left off.

The task list page is a navigation hub that sits above the individual task journeys. NHS UK Frontend provides a Task list component for this pattern.

## When to use this pattern

- When users need to provide information across more than one distinct topic or section.
- When completing the service may take more than one session, or when users need to gather information before they can finish certain tasks.
- When users can complete tasks in any order, or when some tasks depend on others.
- When users need to understand their progress through a complex service.

## When not to use this pattern

- Do not use this pattern for simple, short services where users can answer all questions in a single linear flow.
- Do not use it when users must complete all tasks in strict sequence and showing an overview offers no benefit.
- Do not use it if the tasks are so granular that the list becomes overwhelming — group related questions into logical tasks instead.

## How it works

### Task list page structure

The task list page should:

1. Have a clear `<h1>` heading — typically the name of the service or application.
2. Show a count of completed tasks, for example "You have completed 2 of 5 sections."
3. Display the task list component listing all tasks with status tags.
4. Each task shows its name as a link (if the user can start or continue it) and a status tag.

### Task statuses

| Status | Tag colour | When to use |
|---|---|---|
| Cannot start yet | Grey | The user must complete a preceding task first |
| Not yet started | Blue or no tag | The user has not started the task |
| In progress | Light blue | The user has started but not completed the task |
| Completed | Green | The user has finished the task |

### Completing all tasks

Once all tasks are complete, direct users to a "Check your answers" page or a submission step. The task list page is a navigation hub, not the final step.

## Code examples

### HTML

```html
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-two-thirds">

    <h1 class="nhsuk-heading-xl">Register with a GP surgery</h1>

    <p class="nhsuk-body nhsuk-u-margin-bottom-7">You have completed 1 of 4 sections.</p>

    <ul class="nhsuk-task-list">
      <li class="nhsuk-task-list__item nhsuk-task-list__item--with-link">
        <div class="nhsuk-task-list__name-and-hint">
          <a class="nhsuk-link nhsuk-task-list__link" href="/personal-details" aria-describedby="personal-details-status">
            Personal details
          </a>
        </div>
        <div class="nhsuk-task-list__status" id="personal-details-status">
          <strong class="nhsuk-tag nhsuk-tag--green">Completed</strong>
        </div>
      </li>
      <li class="nhsuk-task-list__item nhsuk-task-list__item--with-link">
        <div class="nhsuk-task-list__name-and-hint">
          <a class="nhsuk-link nhsuk-task-list__link" href="/medical-history" aria-describedby="medical-history-status">
            Medical history
          </a>
        </div>
        <div class="nhsuk-task-list__status" id="medical-history-status">
          <strong class="nhsuk-tag nhsuk-tag--blue">In progress</strong>
        </div>
      </li>
      <li class="nhsuk-task-list__item nhsuk-task-list__item--with-link">
        <div class="nhsuk-task-list__name-and-hint">
          <a class="nhsuk-link nhsuk-task-list__link" href="/contact-preferences" aria-describedby="contact-status">
            Contact preferences
          </a>
        </div>
        <div class="nhsuk-task-list__status" id="contact-status">
          Not yet started
        </div>
      </li>
      <li class="nhsuk-task-list__item">
        <div class="nhsuk-task-list__name-and-hint">
          <span>Submit registration</span>
        </div>
        <div class="nhsuk-task-list__status" id="submit-status">
          <strong class="nhsuk-tag nhsuk-tag--grey">Cannot start yet</strong>
        </div>
      </li>
    </ul>

  </div>
</div>
```

### Nunjucks

```njk
<div class="nhsuk-grid-row">
  <div class="nhsuk-grid-column-two-thirds">

    <h1 class="nhsuk-heading-xl">Register with a GP surgery</h1>

    <p class="nhsuk-body nhsuk-u-margin-bottom-7">You have completed 1 of 4 sections.</p>

    {{ taskList({
      items: [
        {
          title: { text: "Personal details" },
          href: "/personal-details",
          status: {
            tag: { text: "Completed", classes: "nhsuk-tag--green" }
          }
        },
        {
          title: { text: "Medical history" },
          href: "/medical-history",
          status: {
            tag: { text: "In progress", classes: "nhsuk-tag--blue" }
          }
        },
        {
          title: { text: "Contact preferences" },
          href: "/contact-preferences",
          status: {
            text: "Not yet started"
          }
        },
        {
          title: { text: "Submit registration" },
          status: {
            tag: { text: "Cannot start yet", classes: "nhsuk-tag--grey" }
          }
        }
      ]
    }) }}

  </div>
</div>
```

## Accessibility

- Each task's status element links to the task link using `aria-describedby`, so screen reader users hear both the task name and its current status.
- Task names that are not actionable ("Cannot start yet") must not use a link — wrapping them in a link would send users to a dead-end page.
- Place the progress count before the task list in the DOM so users encounter it before the list.
- Use unique `id` values when rendering more than one task list on the same page.

## Do and do not

**Do:**

- Show the number of completed tasks at the top of the task list page.
- Use status tags to show the state of each task.
- Allow users to return and complete tasks across more than one session where possible.
- Link directly to the relevant task, not to the start of the whole service.

**Do not:**

- Make the task list page the final submission step — use a separate "Check your answers" page.
- Use this pattern for short, simple services that users can complete in a single linear flow.
- Show "Completed" status for tasks that still have required fields missing.
- Prevent users from returning to completed tasks to make changes unless a strong reason exists.

## Related components and patterns

- [Task list component](https://service-manual.nhs.uk/design-system/components/task-list)
- [Tag component](https://service-manual.nhs.uk/design-system/components/tag)
- [Check answers pattern](../check-answers/SKILLS.md)
- [Confirmation page pattern](../../pages/confirmation-page/SKILLS.md)
- [Question pages pattern](../../pages/question-pages/SKILLS.md)
