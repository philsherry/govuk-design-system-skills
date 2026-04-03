---
category: foundations
description: Rapid prototyping setup for building realistic NHS service prototypes for user research, using the GOV.UK Prototype Kit with NHS UK Frontend.
keywords:
  - "Express"
  - "branching"
  - "kit"
  - "prototype"
  - "prototype kit"
  - "prototyping"
  - "routes"
  - "session data"
last-reviewed: "2026-04-03"
name: Prototype Kit
nhsuk-frontend: "9.x"
source: "https://github.com/nhsuk/nhsuk-prototype-kit"
---

# Prototype Kit

> Rapid prototyping setup for building realistic NHS service prototypes for user research, using the GOV.UK Prototype Kit with NHS UK Frontend.
> Source: <https://github.com/nhsuk/nhsuk-prototype-kit>

## Overview

The NHS prototype kit builds on the GOV.UK Prototype Kit and adds NHS UK Frontend so prototypes look and behave like real NHS services. It lets designers and developers build realistic, interactive HTML prototypes for user research without writing production code.

The kit ships with NHS UK Frontend pre-installed, the NHS page template, the Frutiger typeface, and all NHS components available as Nunjucks macros. Use it for user research and design exploration only — never for production services.

## When to use

- Building prototypes to test design ideas with users before committing to a technical implementation.
- Running usability research sessions where participants need to click through a realistic NHS service journey.
- Exploring branching logic and conditional flows without writing production code.
- Demonstrating a proposed service design to stakeholders.
- Iterating fast: the kit reloads automatically on file save.

## When not to use

- Production services — the kit has no hardening for security, performance, or scalability.
- Storing or processing real personal data — the kit stores session data unencrypted and ephemerally.
- As a substitute for auditing the accessibility of a production service.
- As a CMS or long-term content management tool.

## How it works

The kit is an Express.js application with Nunjucks templating. When you create a prototype, the kit scaffolds a project directory and installs NHS UK Frontend as a dependency. The development server watches your files and reloads the browser on save.

All NHS UK Frontend Nunjucks macros are available globally in every template — you do not need to import them individually. The kit's middleware saves session data submitted via HTML forms and makes it available to all templates as the `data` object.

## Installation

**Requirements:** Node.js 18 or later (LTS recommended), npm.

**Option A:** NHS Prototype Kit

If the NHS provides its own prototype kit:

```bash
git clone https://github.com/nhsuk/nhsuk-prototype-kit.git my-prototype
cd my-prototype && npm install && npm run watch
```

**Option B:** GOV.UK Prototype Kit with NHS UK Frontend

Create a GOV.UK prototype and add NHS UK Frontend:

```bash
npx govuk-prototype-kit create my-prototype
cd my-prototype
npm install nhsuk-frontend
```

Then update the layout to use the NHS template instead of the GOV.UK template. Replace the base layout import and update the Sass to import NHS UK Frontend.

**Start the development server:**

```bash
npm run dev
```

The kit opens at `http://localhost:3000`.

## Project Structure

```text
my-prototype/
├── app/
│   ├── assets/
│   │   ├── images/
│   │   ├── javascripts/
│   │   └── sass/
│   │       └── application.scss
│   ├── data/
│   │   └── session-data-defaults.js
│   ├── views/
│   │   ├── layouts/
│   │   │   └── main.html
│   │   └── index.html
│   ├── config.js
│   └── routes.js
├── node_modules/
├── package.json
└── package-lock.json
```

| Path | Purpose |
|---|---|
| `app/views/` | Nunjucks page templates. Each `.html` file maps to a URL path. |
| `app/routes.js` | Express route handlers for branching logic. |
| `app/data/session-data-defaults.js` | Default values for session data on a fresh session. |
| `app/assets/` | Custom CSS, JavaScript, and images. |
| `app/config.js` | Service name, port, and authentication settings. |

## Layout

Every page should extend the NHS base layout:

```njk
{% extends "layouts/main.html" %}

{% block pageTitle %}
  Question - {{ serviceName }} - NHS
{% endblock %}

{% block beforeContent %}
  {{ backLink({
    text: "Go back",
    href: "javascript:window.history.back()"
  }) }}
{% endblock %}

{% block content %}
  <div class="nhsuk-grid-row">
    <div class="nhsuk-grid-column-two-thirds">
      <form method="post" action="/answer">
        {{ input({
          label: {
            text: "What is your full name?",
            classes: "nhsuk-label--l",
            isPageHeading: true
          },
          id: "full-name",
          name: "full-name",
          value: data['full-name']
        }) }}
        {{ button({ text: "Continue" }) }}
      </form>
    </div>
  </div>
{% endblock %}
```

## Using Macros

All NHS UK Frontend Nunjucks macros are available globally without imports. Macro names follow NHS UK Frontend naming conventions.

```njk
{{ button({ text: "Save and continue" }) }}

{{ radios({
  name: "contact-preference",
  fieldset: {
    legend: {
      text: "How should we contact you?",
      isPageHeading: true,
      classes: "nhsuk-fieldset__legend--l"
    }
  },
  items: [
    { value: "email", text: "Email", checked: data['contact-preference'] === 'email' },
    { value: "phone", text: "Phone", checked: data['contact-preference'] === 'phone' }
  ]
}) }}
```

## Routing

For simple linear journeys, use HTML `<form action="/next-page" method="post">` without defining a route handler. The kit POSTs the form data and redirects automatically.

Define routes in `app/routes.js` only when you need branching logic:

```javascript
router.post('/eligibility-check', function (req, res) {
  const eligible = req.session.data['eligible']

  if (eligible === 'yes') {
    res.redirect('/register/start')
  } else {
    res.redirect('/not-eligible')
  }
})
```

## Session Data

The kit automatically stores all submitted form field values in `req.session.data`. Read session data in templates through the `data` object:

```njk
<p class="nhsuk-body">
  Your name is {{ data['full-name'] }}.
</p>
```

Pre-populate form fields:

```njk
{{ input({
  label: { text: "Full name" },
  id: "full-name",
  name: "full-name",
  value: data['full-name']
}) }}
```

Set defaults in `app/data/session-data-defaults.js`:

```javascript
module.exports = {
  'full-name': '',
  'contact-preference': 'email'
}
```

Clear data between research participants by navigating to `/prototype-admin/clear-data`.

## Research Tips

- **Use realistic content** — Replace all placeholder text with realistic NHS service content.
- **Test the full journey** — Build the end-to-end flow including error states before a research session.
- **Show error states** — Set up routes that trigger error messages so participants encounter and respond to errors.
- **Never use real personal data** — Generate fictional but realistic names, NHS numbers, and addresses.
- **Enable password protection** — Set `useAuth: true` in `app/config.js` before sharing externally.
- **Clear data between participants** — Navigate to `/prototype-admin/clear-data` before each session.
- **Version your prototypes** — Use Git branches to preserve each round of research.
- **Never use for real services** — The kit has no security hardening or production data persistence.

## Accessibility

Prototypes built with the kit inherit NHS UK Frontend's accessibility features, but:

- Prototypes are not production code and the Public Sector Bodies Accessibility Regulations do not apply to them.
- Do test with participants who use assistive technology — this is the most valuable accessibility research you can do.
- Ensure your custom Nunjucks and HTML does not break the accessibility of NHS UK Frontend components — do not remove `for`/`id` associations, ARIA attributes, or focus management.

## Do and Do not

**Do** use the kit only for prototyping and user research — never as a production service.

**Do** clear session data between research participants.

**Do** enable password protection before sharing a prototype URL externally.

**Do** use realistic but fictional content so research findings are valid.

**Do** commit your prototype to version control and use branches for each research round.

**Do not** store real personal data in a prototype.

**Do not** use the kit to build production services.

**Do not** define routes for every page — only add entries to `routes.js` where you need branching logic.

## Related

- `foundations/SKILLS.md` — NHS Design System foundations and design principles
- `foundations/nhsuk-frontend/SKILLS.md` — NHS UK Frontend installation and API
- `styles/page-template/SKILLS.md` — Page template structure and blocks
- `patterns/pages/question-pages/SKILLS.md` — Question page pattern
- `patterns/help-users-to/check-answers/SKILLS.md` — Check your answers pattern
- `patterns/pages/confirmation-page/SKILLS.md` — Confirmation page pattern
- `accessibility/SKILLS.md` — Accessibility requirements
