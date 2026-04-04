---
category: patterns
description: Provide a prominent, keyboard-accessible button that takes users away from a sensitive page at once and replaces browser history to protect their safety.
govuk-frontend: "5.x"
keywords:
  - "emergency exit"
  - "escape page"
  - "exit"
  - "quickly"
  - "safety"
last-reviewed: "2026-04-03"
name: Help users to exit a page quickly
source: "https://design-system.service.gov.uk/patterns/exit-a-page-quickly/"
subcategory: help-users-to
---

# Help users to exit a page quickly

> Provide a prominent, keyboard-accessible button that takes users away from a sensitive page at once and replaces browser history to protect their safety.
> Source: https://design-system.service.gov.uk/patterns/exit-a-page-quickly/

## Overview

The exit a page quickly pattern lets users leave a sensitive page fast if they are in a situation where someone else might see what they are doing. This is a critical safeguarding pattern for services that deal with topics such as domestic abuse, stalking, sexual violence, mental health support, immigration status, or other situations where a user's safety or privacy could be at risk if another person saw their screen.

The pattern uses the Exit this page component (`govukExitThisPage`), which displays a prominent button that redirects the user at once to a neutral page — by default, the BBC Weather homepage — and attempts to replace the current entry in the browser's history so the back button cannot return to the sensitive page. Users can also activate the button by pressing the Shift key three times in quick succession, allowing them to exit without reaching for the mouse.

Place this pattern in the page template so it appears on every page of the service. Users may need to exit from any page, at any moment.

## When to use this pattern

- When your service deals with domestic abuse, stalking, sexual or domestic violence, or coercive control.
- When your service deals with sensitive topics such as mental health, substance misuse, debt, or immigration where discovery could put a user at risk.
- When users may be accessing the service while under surveillance by an abusive or controlling person.
- When user research or a safeguarding assessment indicates that a quick exit mechanism is appropriate.

## When not to use this pattern

- Do not use it on services where the content is not sensitive and there is no risk to users from others seeing what they are doing.
- Do not use it merely as a convenience feature — use it only where there is a genuine safeguarding rationale.
- Do not use it as a substitute for proper privacy controls, safeguarding guidance, or support signposting.

## How it works

### The Exit this page button

The button:

- Appears prominently, typically in the top-right of the page or in a sticky position so it remains visible as the user scrolls.
- Has a visually distinctive appearance (GOV.UK warning button style — red background) to make it easy to identify in an emergency.
- Redirects the browser to a safe, neutral destination when clicked or activated.
- Attempts to replace the current page in the browser history so the back button cannot navigate back to the sensitive page.
- Shows a brief "Activating" loading message to reassure the user that the component has received the action.

### Keyboard shortcut

Pressing the Shift key three times activates the exit without any mouse interaction. This is important in situations where a user may not have time to move the mouse to the button. The shortcut works at any time on the page — the button does not need focus.

Visually hidden text within the button explains the keyboard shortcut to screen reader users.

### Safe destination

The default redirect URL is `https://www.bbc.co.uk/weather`. The team chose this page because:

- The page is neutral and non-suspicious if seen on screen.
- The page is always publicly available and does not require sign-in.
- It does not reveal anything about the service the user was using.

You can configure a different destination using the `redirectUrl` parameter, but it must be a neutral, publicly available page that cannot disclose anything about the service.

### Browser history

The component attempts to clear the browser history back to the exit page, but not all browsers and devices support this behaviour. Make users aware of this limitation through safeguarding guidance elsewhere in the service. The exit button is one layer of protection, not the only one.

### Placement

Include the component in the page template — the `beforeContent` block in the GOV.UK Frontend page template is the recommended location — ensuring the button appears on every page of the service, not only the first page or a subset of pages.

## Code examples

### Basic usage

#### HTML

```html
<div class="govuk-exit-this-page" data-module="govuk-exit-this-page">
  <a
    href="https://www.bbc.co.uk/weather"
    role="button"
    draggable="false"
    class="govuk-button govuk-button--warning govuk-exit-this-page__button govuk-js-exit-this-page-button"
    data-module="govuk-button"
  >
    Exit this page
    <span class="govuk-visually-hidden">
      (Press Shift 3 times to activate)
    </span>
  </a>
</div>
```

#### Nunjucks

```njk
{{ govukExitThisPage({
  redirectUrl: "https://www.bbc.co.uk/weather"
}) }}
```

### With custom button text

#### HTML

```html
<div class="govuk-exit-this-page" data-module="govuk-exit-this-page">
  <a
    href="https://www.bbc.co.uk/weather"
    role="button"
    draggable="false"
    class="govuk-button govuk-button--warning govuk-exit-this-page__button govuk-js-exit-this-page-button"
    data-module="govuk-button"
  >
    Leave this page
    <span class="govuk-visually-hidden">
      (Press Shift 3 times to activate)
    </span>
  </a>
</div>
```

#### Nunjucks

```njk
{{ govukExitThisPage({
  text: "Leave this page",
  redirectUrl: "https://www.bbc.co.uk/weather"
}) }}
```

### In the page template (recommended placement)

#### Nunjucks

```njk
{% extends "govuk/template.njk" %}

{% block beforeContent %}
  {{ govukExitThisPage({
    redirectUrl: "https://www.bbc.co.uk/weather"
  }) }}
  {{ govukBackLink({
    text: "Back",
    href: "javascript:window.history.back()"
  }) }}
{% endblock %}

{% block content %}
  <div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <h1 class="govuk-heading-l">Get help with domestic abuse</h1>
      <p class="govuk-body">...</p>
    </div>
  </div>
{% endblock %}
```

## Accessibility

- The keyboard shortcut (Shift pressed three times) must work at any time on the page, not only when the button has focus.
- Visually hidden text within the button must describe the keyboard shortcut so screen reader users are aware of it.
- Screen readers announce the "Activating" loading message when the user activates the button, reassuring them that the action has registered.
- The component uses the GOV.UK warning button style, which meets colour contrast requirements.
- Do not remove or change the visually hidden keyboard shortcut instruction text.

## Do and do not

**Do:**
- Use this pattern whenever your service deals with topics that could put users at risk if discovered.
- Place the component in the page template so it appears on every page of the service.
- Use the default redirect URL (BBC Weather) unless you have a well-researched, neutral alternative.
- Test the exit functionality across a range of devices and browsers.
- Include safeguarding guidance elsewhere in your service explaining the button's limitations (for example, that it may not clear all browser history).

**Do not:**
- Do not use this pattern on non-sensitive services where there is no safeguarding rationale.
- Do not redirect to your own service's homepage — this may reveal the nature of the service.
- Do not rely on the exit button as the sole safeguarding measure in your service.
- Do not remove the keyboard shortcut — this is a critical accessibility and safety feature.
- Do not change the button to a colour other than the GOV.UK warning button red without strong justification and accessibility testing.

## Related components and patterns

- [../../../components/exit-this-page/SKILLS.md](../../../components/exit-this-page/SKILLS.md)
- [../../../components/button/SKILLS.md](../../../components/button/SKILLS.md)
- [../../../components/back-link/SKILLS.md](../../../components/back-link/SKILLS.md)
- [../navigate-a-service/SKILLS.md](../navigate-a-service/SKILLS.md)
