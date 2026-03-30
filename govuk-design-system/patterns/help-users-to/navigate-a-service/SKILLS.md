---
category: patterns
description: Choose the right navigation pattern for your service — back links for linear transactional journeys, breadcrumbs for content sites, service navigation for multi-section services.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Help users to navigate a service
subcategory: help-users-to
---

# Help users to navigate a service

> Choose the right navigation pattern for your service — back links for linear transactional journeys, breadcrumbs for content sites, service navigation for multi-section services.
> Source: https://design-system.service.gov.uk/patterns/navigate-a-service/

---

## Overview

The navigate a service pattern provides guidance on how to help users move through a service and understand where they are within it. Navigation requirements vary depending on the service: a simple linear form needs different navigation to a complex multi-section application or an informational content site.

The pattern covers the use of back links, breadcrumbs, service navigation, pagination, and task lists. Choosing the right approach depends on the structure of your service — whether primarily transactional (form-based) or informational (content-based), and whether users follow a set sequence or can move freely between sections.

Good navigation reduces frustration by making it clear where users are, how they arrived there, and how to get back or move forward. Poor navigation causes users to feel lost, make mistakes, or abandon a service entirely.

## When to use this pattern

- When designing any service that has more than a single page.
- When users need to move between pages in a defined sequence (transactional services).
- When users need to browse between sections freely (informational or content-led services).
- When users need to understand their progress through a multi-step or multi-task process.

## When not to use this pattern

- Do not add navigation elements for their own sake — include only components that genuinely help users.
- Do not use breadcrumbs and back links together on the same page — choose one.
- Do not add a service navigation bar to pages where it adds clutter without aiding navigation.
- Do not use a step indicator ("Step 1 of 5") as the primary navigation mechanism — it can mislead users when the number of steps changes.

## How it works

### Back links — linear transactional journeys

For transactional services that guide users through a sequence of steps, use a back link. This is the most common navigation pattern for GOV.UK services. A back link:

- Sits at the top of the page, above the `<main>` element and the main heading.
- Allows users to return to the previous page in the current journey.
- Should preserve the user's existing answers when navigating back — do not clear form state on back navigation.
- Typically uses `javascript:window.history.back()` for simplicity, or an explicit `href` if you need predictable routing.

Do not show a back link on the first page of a service (there is no previous page) or on a confirmation page (going back after confirming is rarely appropriate).

### Breadcrumbs — content and informational sites

For content-heavy or informational services where users can navigate freely, use breadcrumbs to show position in the site hierarchy. Breadcrumbs:

- Show the path from the top-level page to the current page.
- Sit at the top of the page, above the main heading.
- Must not appear alongside a back link.
- Must not appear on transactional pages (question pages, check your answers pages, confirmation pages).
- Should use `collapseOnMobile: true` on transactional-adjacent pages to reduce clutter on small screens.

### Service navigation — multi-section services

The Service navigation component (`govukServiceNavigation`, introduced in GOV.UK Frontend v5.7) provides navigation links specific to a service. Use it when:

- Your service has more than one distinct section that users can access at any time, not in a strict linear flow.
- Users need to switch between service areas (for example, "Your applications", "Your profile", "Messages" within an account area).
- The service needs to display its name consistently across pages.

Service navigation sits between the GOV.UK header and the main content area. This component is separate from the GOV.UK-wide header navigation.

### Pagination — long lists and documents

Use the Pagination component (`govukPagination`) when:

- A list of results or records spans more than one page.
- Users are reading through a long document split across more than one page.

### Task lists — complex multi-task services

For services with more than one distinct task that users can complete in any order, use the Task list component rather than navigation. See the complete multiple tasks pattern.

### Progress indicators

Do not use a "Step X of Y" indicator as the primary navigation mechanism for multi-step forms. The number of steps can change based on earlier answers, which confuses users. If users need to understand their progress through the service, use a task list instead.

## Code Examples

### Back link (using browser history)

#### HTML

```html
<a href="javascript:window.history.back()" class="govuk-back-link">Back</a>
```

#### Nunjucks

```njk
{{ govukBackLink({
  text: "Back",
  href: "javascript:window.history.back()"
}) }}
```

### Back link (to a specific page)

#### HTML

```html
<a href="/date-of-birth" class="govuk-back-link">Back</a>
```

#### Nunjucks

```njk
{{ govukBackLink({
  text: "Back",
  href: "/date-of-birth"
}) }}
```

### Breadcrumbs

#### HTML

```html
<div class="govuk-breadcrumbs">
  <ol class="govuk-breadcrumbs__list">
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/">Home</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      <a class="govuk-breadcrumbs__link" href="/benefits">Benefits</a>
    </li>
    <li class="govuk-breadcrumbs__list-item">
      Apply for Pension Credit
    </li>
  </ol>
</div>
```

#### Nunjucks

```njk
{{ govukBreadcrumbs({
  items: [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "Benefits",
      href: "/benefits"
    },
    {
      text: "Apply for Pension Credit"
    }
  ]
}) }}
```

### Breadcrumbs (collapsed on mobile)

#### Nunjucks

```njk
{{ govukBreadcrumbs({
  collapseOnMobile: true,
  items: [
    {
      text: "Home",
      href: "/"
    },
    {
      text: "Benefits",
      href: "/benefits"
    },
    {
      text: "Apply for Pension Credit"
    }
  ]
}) }}
```

### Service navigation

#### HTML

```html
<section class="govuk-service-navigation" aria-label="Service information">
  <div class="govuk-width-container">
    <div class="govuk-service-navigation__container">
      <span class="govuk-service-navigation__service-name">
        Apply for a juggling licence
      </span>
      <nav aria-label="Menu" class="govuk-service-navigation__wrapper">
        <button
          type="button"
          class="govuk-service-navigation__toggle govuk-js-service-navigation-toggle"
          aria-controls="navigation"
          hidden
        >
          Menu
        </button>
        <ul class="govuk-service-navigation__list" id="navigation">
          <li class="govuk-service-navigation__item govuk-service-navigation__item--active">
            <a
              class="govuk-service-navigation__link"
              href="/account/applications"
              aria-current="page"
            >
              <strong>Your applications</strong>
            </a>
          </li>
          <li class="govuk-service-navigation__item">
            <a class="govuk-service-navigation__link" href="/account/profile">
              Your profile
            </a>
          </li>
          <li class="govuk-service-navigation__item">
            <a class="govuk-service-navigation__link" href="/account/messages">
              Messages
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</section>
```

#### Nunjucks

```njk
{{ govukServiceNavigation({
  serviceName: "Apply for a juggling licence",
  serviceUrl: "/",
  navigation: [
    {
      href: "/account/applications",
      text: "Your applications",
      active: true
    },
    {
      href: "/account/profile",
      text: "Your profile"
    },
    {
      href: "/account/messages",
      text: "Messages"
    }
  ]
}) }}
```

### Pagination (results list)

#### Nunjucks

```njk
{{ govukPagination({
  previous: {
    href: "?page=2"
  },
  next: {
    href: "?page=4"
  },
  items: [
    {
      number: 1,
      href: "?page=1"
    },
    {
      number: 2,
      href: "?page=2"
    },
    {
      number: 3,
      href: "?page=3",
      current: true
    },
    {
      number: 4,
      href: "?page=4"
    }
  ]
}) }}
```

### Pagination (previous / next navigation for documents)

#### Nunjucks

```njk
{{ govukPagination({
  previous: {
    href: "/guidance/section-2",
    labelText: "Eligibility criteria"
  },
  next: {
    href: "/guidance/section-4",
    labelText: "How to apply"
  }
}) }}
```

## Accessibility

- Render back links as `<a>` elements, not `<button>` elements.
- Breadcrumbs must use an `<ol>` (ordered list) wrapped in a `<nav>` element with an appropriate `aria-label` such as "Breadcrumb".
- The current page in breadcrumbs should be plain text or an `<a>` with `aria-current="page"` — it should not be a link that takes the user to the same page they are already on.
- Service navigation must use a `<nav>` element with an appropriate `aria-label`.
- The active navigation item in service navigation must use `aria-current="page"` so screen reader users know where they are.
- Pagination must use a `<nav>` element with `aria-label="Pagination"` and `aria-current="page"` on the active page item.
- Do not use both breadcrumbs and a back link on the same page.

## Do / Don't

**Do:**
- Use a back link on transactional (form-based) service pages.
- Use breadcrumbs on content-heavy or informational pages with a clear hierarchy.
- Use service navigation when users need to move freely between distinct service sections.
- Use `collapseOnMobile: true` on breadcrumbs where you have limited space.
- Preserve user-entered data when navigating back — do not clear form state.
- Mark the current page with `aria-current="page"` in navigation components.

**Don't:**
- Don't use both back links and breadcrumbs on the same page.
- Don't use a "Step X of Y" indicator as the primary navigation mechanism.
- Don't add breadcrumbs to transactional pages (question pages, confirmation pages).
- Don't show a back link on the first page of a service.
- Don't use navigation that resets or discards user-entered data when the user navigates back.

## Related Components / Patterns

- [../../../components/back-link/SKILLS.md](../../../components/back-link/SKILLS.md)
- [../../../components/breadcrumbs/SKILLS.md](../../../components/breadcrumbs/SKILLS.md)
- [../../../components/service-navigation/SKILLS.md](../../../components/service-navigation/SKILLS.md)
- [../../../components/pagination/SKILLS.md](../../../components/pagination/SKILLS.md)
- [../../../components/skip-link/SKILLS.md](../../../components/skip-link/SKILLS.md)
- [../complete-multiple-tasks/SKILLS.md](../complete-multiple-tasks/SKILLS.md)
- [../start-using-a-service/SKILLS.md](../start-using-a-service/SKILLS.md)
