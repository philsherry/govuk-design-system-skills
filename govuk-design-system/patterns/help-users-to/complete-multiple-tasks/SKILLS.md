---
category: patterns
description: Use this pattern to help users complete a service that involves multiple distinct tasks, by giving them an overview of all tasks and their progress.
govuk-frontend: "5.x"
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
source: "https://design-system.service.gov.uk/patterns/complete-multiple-tasks/"
subcategory: help-users-to
---

# Complete multiple tasks

> Use this pattern to help users complete a service that involves multiple distinct tasks, by giving them an overview of all tasks and their progress.
> Source: https://design-system.service.gov.uk/patterns/complete-multiple-tasks/

## Overview

The complete multiple tasks pattern helps users work through a service that requires them to complete more than one distinct task, which may not need completing in a single session. It presents a task list page that gives users an overview of all tasks, shows the status of each task (not yet started, in progress, completed), and lets users navigate directly to any task.

Use this pattern when a service is too complex to present as a single linear form. Breaking the journey into separate tasks helps users understand the scope of what they need to do and reduces cognitive load. Users can return to the service across more than one session and pick up where they left off.

The task list page is not a step in the form itself — the task list is a navigation hub that sits above the individual task journeys. The GOV.UK Design System provides a Task list component (`govukTaskList`) for this pattern.

## When to use this pattern

- When users need to provide information across more than one distinct topic or section.
- When completing the service may take more than one session, or when users may need to gather information before they can complete certain tasks.
- When users can complete tasks in any order, or when some tasks depend on others that users must complete first.
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
3. Display the task list component listing all tasks grouped into sections if necessary.
4. Each task shows its name as a link (if the user can start or continue it) and a status tag.

### Task statuses

Tasks can have the following statuses:

| Status | Tag colour | When to use |
|--------|-----------|-------------|
| Cannot start yet | Grey | The user must complete a preceding task first |
| Not yet started | (no tag or blue) | The user has not started the task |
| In progress | Light blue | The user has started but not completed the task |
| Completed | Green | The user has finished the task |

### Task ordering and dependencies

- Where possible, allow users to complete tasks in any order.
- If a task depends on information from another task, mark it as "Cannot start yet" and explain why.
- Unlock dependent tasks automatically once their prerequisites are complete.

### Returning users

When a user returns to a service after leaving mid-journey:
- Restore all earlier entered data from their session or saved application.
- Show accurate statuses for all tasks.
- Let them continue any in-progress task from where they left off.

### Completing all tasks

Once all tasks are complete, direct users to a "Check your answers" page or a submission step. The task list page itself is not the final step — that is a navigation hub.

## Code Examples

### Basic task list page

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-xl">
      Apply for a juggling licence
    </h1>

    <p class="govuk-body govuk-!-margin-bottom-7">You have completed 2 of 4 sections.</p>

    <ul class="govuk-task-list">
      <li class="govuk-task-list__item govuk-task-list__item--with-link">
        <div class="govuk-task-list__name-and-hint">
          <a class="govuk-link govuk-task-list__link" href="/eligibility" aria-describedby="eligibility-status">
            Check eligibility
          </a>
        </div>
        <div class="govuk-task-list__status" id="eligibility-status">
          <strong class="govuk-tag govuk-tag--green">
            Completed
          </strong>
        </div>
      </li>
      <li class="govuk-task-list__item govuk-task-list__item--with-link">
        <div class="govuk-task-list__name-and-hint">
          <a class="govuk-link govuk-task-list__link" href="/personal-details" aria-describedby="personal-details-status">
            Personal details
          </a>
        </div>
        <div class="govuk-task-list__status" id="personal-details-status">
          <strong class="govuk-tag govuk-tag--green">
            Completed
          </strong>
        </div>
      </li>
      <li class="govuk-task-list__item govuk-task-list__item--with-link">
        <div class="govuk-task-list__name-and-hint">
          <a class="govuk-link govuk-task-list__link" href="/juggling-details" aria-describedby="juggling-details-status">
            Juggling details
          </a>
        </div>
        <div class="govuk-task-list__status" id="juggling-details-status">
          <strong class="govuk-tag govuk-tag--light-blue">
            In progress
          </strong>
        </div>
      </li>
      <li class="govuk-task-list__item">
        <div class="govuk-task-list__name-and-hint">
          <span>Apply and pay</span>
        </div>
        <div class="govuk-task-list__status" id="apply-status">
          <strong class="govuk-tag govuk-tag--grey">
            Cannot start yet
          </strong>
        </div>
      </li>
    </ul>

  </div>
</div>
```

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-xl">Apply for a juggling licence</h1>

    <p class="govuk-body govuk-!-margin-bottom-7">You have completed 2 of 4 sections.</p>

    {{ govukTaskList({
      items: [
        {
          title: {
            text: "Check eligibility"
          },
          href: "/eligibility",
          status: {
            tag: {
              text: "Completed",
              classes: "govuk-tag--green"
            }
          }
        },
        {
          title: {
            text: "Personal details"
          },
          href: "/personal-details",
          status: {
            tag: {
              text: "Completed",
              classes: "govuk-tag--green"
            }
          }
        },
        {
          title: {
            text: "Juggling details"
          },
          href: "/juggling-details",
          status: {
            tag: {
              text: "In progress",
              classes: "govuk-tag--light-blue"
            }
          }
        },
        {
          title: {
            text: "Apply and pay"
          },
          status: {
            tag: {
              text: "Cannot start yet",
              classes: "govuk-tag--grey"
            }
          }
        }
      ]
    }) }}

  </div>
</div>
```

### With sections (grouped tasks)

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-xl">Apply for a juggling licence</h1>
    <p class="govuk-body govuk-!-margin-bottom-7">You have completed 1 of 4 sections.</p>

    <h2 class="govuk-heading-s govuk-task-list__section">
      About you
    </h2>
    {{ govukTaskList({
      idPrefix: "about-you",
      items: [
        {
          title: { text: "Personal details" },
          href: "/personal-details",
          status: {
            tag: { text: "Completed", classes: "govuk-tag--green" }
          }
        },
        {
          title: { text: "Contact details" },
          href: "/contact-details",
          status: {
            tag: { text: "Not yet started" }
          }
        }
      ]
    }) }}

    <h2 class="govuk-heading-s govuk-task-list__section">
      Your licence
    </h2>
    {{ govukTaskList({
      idPrefix: "licence",
      items: [
        {
          title: { text: "Juggling details" },
          href: "/juggling-details",
          status: {
            tag: { text: "Not yet started" }
          }
        },
        {
          title: { text: "Apply and pay" },
          status: {
            tag: { text: "Cannot start yet", classes: "govuk-tag--grey" }
          }
        }
      ]
    }) }}

  </div>
</div>
```

### With hint text on a task

#### Nunjucks

```njk
{{ govukTaskList({
  items: [
    {
      title: {
        text: "Juggling details"
      },
      hint: {
        text: "Include all objects you juggle with"
      },
      href: "/juggling-details",
      status: {
        tag: {
          text: "Not yet started"
        }
      }
    }
  ]
}) }}
```

## Nunjucks Macro Options

The `govukTaskList` macro accepts the following options:

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `items` | array | Yes | Array of task list item objects. |
| `items[].title.text` | string | Yes | The title text for the task. |
| `items[].title.html` | string | No | HTML for the task title. If provided, overrides `title.text`. |
| `items[].hint.text` | string | No | Hint text displayed below the task title. |
| `items[].hint.html` | string | No | HTML hint text. |
| `items[].href` | string | No | The URL the task title links to. If omitted, the task is not a link (used for "Cannot start yet"). |
| `items[].status.tag` | object | No | A tag object `{ text, classes }` to display a status badge. |
| `items[].status.text` | string | No | Plain text status (used instead of a tag). |
| `items[].status.html` | string | No | HTML status content. |
| `items[].classes` | string | No | Extra CSS classes for the task item. |
| `items[].attributes` | object | No | HTML attributes to add to the task item element. |
| `idPrefix` | string | No | Prefix for the auto-generated `id` attributes on status elements. Defaults to `"task-list"`. |
| `classes` | string | No | Extra CSS classes for the task list `<ul>`. |
| `attributes` | object | No | HTML attributes to add to the task list `<ul>`. |

## Accessibility

- Each task's status element links to the task link using `aria-describedby`, so screen reader users hear both the task name and its current status.
- Task names that are not yet actionable (e.g. "Cannot start yet") must not use a link — wrapping them in a link would send screen reader users to a dead-end page.
- Place the progress count ("You have completed X of Y sections") before the task list in the DOM so users encounter it before the list.
- Use the `idPrefix` option when rendering more than one task list on the same page to avoid duplicate IDs.

## Do and Do not

**Do:**
- Show the number of completed tasks at the top of the task list page.
- Use status tags to show the state of each task.
- Allow users to return and complete tasks across more than one session where possible.
- Link directly to the relevant task, not to the start of the whole service.
- Group tasks into sections with headings when the list is long.

**Do not:**
- Do not make the task list page the final submission step — use a separate "Check your answers" page.
- Do not use this pattern for short, simple services that users can complete in a single linear flow.
- Do not show "Completed" status for tasks that still have required fields missing.
- Do not prevent users from returning to completed tasks to make changes unless there is a strong reason.
- Do not use more status states than necessary — a large number of states confuses users.

## Related Components / Patterns

- [../../../components/task-list/SKILLS.md](../../../components/task-list/SKILLS.md)
- [../../../components/tag/SKILLS.md](../../../components/tag/SKILLS.md)
- [../check-answers/SKILLS.md](../check-answers/SKILLS.md)
- [../../../patterns/pages/confirmation-pages/SKILLS.md](../../../patterns/pages/confirmation-pages/SKILLS.md)
- [../../../patterns/pages/question-pages/SKILLS.md](../../../patterns/pages/question-pages/SKILLS.md)
