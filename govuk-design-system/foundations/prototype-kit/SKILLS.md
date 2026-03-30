---
category: foundations
description: Rapid prototyping tool for building realistic GOV.UK service prototypes for user research.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: GOV.UK Prototype Kit
---

# GOV.UK Prototype Kit

> Rapid prototyping tool for building realistic GOV.UK service prototypes for user research.
> Source: https://prototype-kit.service.gov.uk/docs/

---

## Overview

The GOV.UK Prototype Kit is a rapid prototyping tool built on Node.js and Express. It lets designers and developers build realistic, interactive HTML prototypes of GOV.UK services without writing production code. The kit ships with GOV.UK Frontend pre-installed, so prototypes look and behave like real GOV.UK services from the first page.

Use the kit for user research and design exploration only. The kit is not a production application framework. Never use prototypes built with the kit to handle real user data or present them to the public as a live service.

---

## When to use

- Building prototypes to test design ideas with users before committing to a technical implementation.
- Running usability research sessions where participants need to click through a realistic service journey.
- Exploring branching logic and conditional flows without writing production code.
- Demonstrating a proposed service design to stakeholders.
- Learning how GOV.UK components and patterns work together in realistic page flows.
- Iterating fast: the kit reloads automatically on file save.

## When not to use

- Production services — the kit has no hardening for security, performance, or scalability.
- Storing or processing real personal data — the kit stores session data unencrypted and ephemerally.
- As a substitute for auditing the accessibility of a production service.
- As a CMS or long-term content management tool.

---

## How it works

The kit is an Express.js application with Nunjucks templating. When you create a prototype, the kit scaffolds a project directory and installs GOV.UK Frontend as a dependency. The development server watches your files and reloads the browser on save with Browsersync.

All GOV.UK Frontend Nunjucks macros are available globally in every template — you do not need to import them individually. The kit's middleware automatically saves session data submitted via HTML forms and makes it available to all templates as the `data` object.

---

## Installation

**Requirements:** Node.js 18 or later (LTS recommended), npm.

**Create a new prototype:**

```bash
npx govuk-prototype-kit create my-prototype
```

**Start the development server:**

```bash
cd my-prototype && npm run dev
```

The kit opens at `http://localhost:3000` in your browser. The server watches all files in `app/` and reloads automatically on change.

**Install a specific version:**

```bash
npx govuk-prototype-kit@14 create my-prototype
```

---

## Project Structure

After installation, the kit creates this directory layout:

```text
my-prototype/
├── app/
│   ├── assets/
│   │   ├── images/               # Static images
│   │   ├── javascripts/          # Custom JavaScript
│   │   └── sass/
│   │       └── application.scss  # Custom Sass (imports govuk-frontend)
│   ├── data/
│   │   └── session-data-defaults.js  # Default session values
│   ├── views/
│   │   ├── layouts/
│   │   │   └── main.html         # Base layout to extend
│   │   └── index.html            # Your prototype pages
│   ├── config.js                 # Service name, port, password protection
│   └── routes.js                 # Express route handlers for branching logic
├── node_modules/
├── package.json
└── package-lock.json
```

**Directory purposes:**

| Path | Purpose |
|---|---|
| `app/views/` | Nunjucks page templates. Each `.html` file maps to a URL path. |
| `app/routes.js` | Express route handlers. Add routes here for branching logic. |
| `app/data/session-data-defaults.js` | Default values for session data on a fresh session. |
| `app/assets/` | Custom CSS, JavaScript, and images served statically. |
| `app/config.js` | Service name, port, and authentication settings. |

---

## Layout

Every page should extend the kit's built-in base layout:

```nunjucks
{% extends "govuk-prototype-kit/lib/nunjucks/views/layouts/main.html" %}
```

In practice the kit re-exports this as `layouts/main.html`, so in most projects you write:

```nunjucks
{% extends "layouts/main.html" %}
```

**Available template blocks:**

| Block | Purpose |
|---|---|
| `pageTitle` | `<title>` tag content. Format: `[Page] – [Service] – GOV.UK`. |
| `beforeContent` | Phase banner, back link, and breadcrumbs. |
| `content` | Main page content inside `<main>`. |
| `head` | Extra `<head>` content (extra CSS, meta tags). |
| `bodyStart` | Straight after `<body>` (cookie banner). |
| `bodyEnd` | Before `</body>`, after scripts. |

**Minimal page example:**

```nunjucks
{% extends "layouts/main.html" %}

{% block pageTitle %}
  Question – {{ serviceName }} – GOV.UK
{% endblock %}

{% block beforeContent %}
  {{ govukBackLink({
    text: "Back",
    href: "javascript:window.history.back()"
  }) }}
{% endblock %}

{% block content %}
  <div class="govuk-grid-row">
    <div class="govuk-grid-column-two-thirds">
      <form method="post" action="/answer">
        {{ govukInput({
          label: {
            text: "What is your full name?",
            classes: "govuk-label--l",
            isPageHeading: true
          },
          id: "full-name",
          name: "full-name",
          value: data['full-name']
        }) }}
        {{ govukButton({ text: "Continue" }) }}
      </form>
    </div>
  </div>
{% endblock %}
```

---

## Using Macros

All GOV.UK Frontend Nunjucks macros are available globally in every template without imports. The macro name is always `govuk` + PascalCase component name.

**Direct import syntax** (also valid, used in non-kit Express projects):

```nunjucks
{% from "govuk/components/button/macro.html" import govukButton %}
```

**Examples of macro calls:**

```nunjucks
{{ govukButton({ text: "Save and continue" }) }}

{{ govukRadios({
  name: "contact-preference",
  fieldset: {
    legend: {
      text: "How should we contact you?",
      isPageHeading: true,
      classes: "govuk-fieldset__legend--l"
    }
  },
  items: [
    { value: "email", text: "Email", checked: data['contact-preference'] === 'email' },
    { value: "phone", text: "Phone", checked: data['contact-preference'] === 'phone' }
  ]
}) }}

{{ govukErrorSummary({
  titleText: "There is a problem",
  errorList: errors
}) }}
```

---

## Configuration

Edit `app/config.js` to configure the service:

```javascript
module.exports = {
  // Service name shown in the GOV.UK header
  serviceName: 'Apply for a juggling licence',

  // Port the prototype runs on (default: 3000)
  port: 3000,

  // Enable password protection (recommended when sharing externally)
  useAuth: true,
  password: 'correct-horse-battery-staple'
}
```

---

## Routing

The kit uses Express.js for routing. For simple linear journeys — where every page leads to the next — you can use HTML `<form action="/next-page" method="post">` without defining any route handler. The kit POSTs the form data and redirects to `/next-page` automatically.

Define routes in `app/routes.js` only when you need branching logic or custom data manipulation.

**Basic route setup:**

```javascript
const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Simple redirect after a POST
router.post('/question', function (req, res) {
  res.redirect('/next-question')
})

module.exports = router
```

**Branching on session data:**

```javascript
router.post('/eligibility-check', function (req, res) {
  const eligible = req.session.data['eligible-for-service']

  if (eligible === 'yes') {
    res.redirect('/apply/start')
  } else {
    res.redirect('/not-eligible')
  }
})
```

**More than one condition:**

```javascript
router.post('/contact-preference', function (req, res) {
  const preference = req.session.data['contact-preference']
  const hasEmail   = req.session.data['email-address']

  if (preference === 'email' && hasEmail) {
    res.redirect('/check-your-answers')
  } else if (preference === 'email' && !hasEmail) {
    res.redirect('/enter-email')
  } else {
    res.redirect('/enter-phone')
  }
})
```

**Rendering a template with extra variables:**

```javascript
router.get('/summary', function (req, res) {
  res.render('summary', {
    data: req.session.data,
    applicationRef: 'GOV-' + Math.random().toString(36).substr(2, 8).toUpperCase()
  })
})
```

---

## Session Data

The kit automatically stores all submitted form field values in `req.session.data`. It saves every `<input>`, `<textarea>`, and `<select>` with a `name` attribute when the user submits the form. Session data persists throughout the browser session.

**Reading session data in a route:**

```javascript
router.post('/name', function (req, res) {
  const firstName = req.session.data['first-name']
  const lastName  = req.session.data['last-name']
  res.redirect('/address')
})
```

**Reading session data in a template:**

All Nunjucks templates can access session data through the `data` object:

```nunjucks
<p class="govuk-body">
  Your name is {{ data['first-name'] }} {{ data['last-name'] }}.
</p>
```

**Pre-populating form fields with session data:**

Pass the session value as the `value` parameter:

```nunjucks
{{ govukInput({
  label: { text: "First name" },
  id: "first-name",
  name: "first-name",
  value: data['first-name']
}) }}
```

For radios and checkboxes, use `checked`:

```nunjucks
{{ govukRadios({
  name: "contact-preference",
  items: [
    {
      value: "email",
      text: "Email",
      checked: data['contact-preference'] === 'email'
    },
    {
      value: "phone",
      text: "Phone",
      checked: data['contact-preference'] === 'phone'
    }
  ]
}) }}
```

**Setting default session data values:**

Set defaults in `app/data/session-data-defaults.js` so each new session starts with known values:

```javascript
module.exports = {
  'first-name': '',
  'last-name': '',
  'contact-preference': 'email',
  'user-type': 'individual'
}
```

The user's form submission overwrites defaults when a field name matches.

**Writing to session data directly in a route** (without a form submission):

```javascript
router.get('/set-flag', function (req, res) {
  req.session.data['seen-intro'] = 'true'
  res.redirect('/intro')
})
```

**Clearing session data:**

Navigate to `/prototype-admin/clear-data`, or in a route:

```javascript
req.session.data = {}
```

---

## Auto Data Plugin

The kit's built-in middleware automatically saves every form field to `req.session.data` on POST. You do not need to write code to capture form values — submit a form and the data is available at once in the next template as `data['field-name']`.

This behaviour applies to all `<input>`, `<textarea>`, and `<select>` elements with a `name` attribute. It does not apply to inputs with `name` attributes that conflict with reserved kit properties.

Use hyphens in field names, not spaces: `name="first-name"`, not `name="first name"`.

---

## Research Tips

**Use realistic content** — Replace all placeholder text with realistic service content. Unrealistic copy affects screen reader users and low-literacy participants.

**Test the full journey** — Build the end-to-end flow including error states before a session. Participants should be able to complete the whole journey.

**Show error states** — Pre-populate incorrect data or set up routes that trigger error messages so participants encounter and respond to errors.

**Never use real personal data** — Generate fictional but realistic names, addresses, and reference numbers. Do not reuse data from a previous participant.

**Enable password protection** — Set `useAuth: true` in `app/config.js` before sharing a prototype URL externally.

**Clear data between participants** — Navigate to `/prototype-admin/clear-data` or call `req.session.data = {}` in a route before each session.

**Version your prototypes** — Use Git branches to preserve each round of research. This lets you compare changes across rounds and return to earlier designs.

**Host remotely for remote research** — Deploy the prototype to Heroku or a similar platform for remote usability testing where the participant shares their screen.

**Never use for real services** — The kit has no security hardening, rate limiting, or production data persistence. Never use it as a live service or present it to the public as one.

---

## Accessibility

Prototypes built with the kit inherit GOV.UK Frontend's accessibility features, but:

- Prototypes are not production code and the Public Sector Bodies Accessibility Regulations do not apply to them.
- Do test with participants who use assistive technology — this is the most valuable accessibility research you can do at the start of a project.
- Do not use a prototype as a proxy for auditing the accessibility of a production service.
- Ensure your custom Nunjucks and HTML does not break the accessibility of GOV.UK Frontend components — do not remove `for`/`id` associations, ARIA attributes, or focus management.

---

## Do / Don't

**Do** use the kit only for prototyping and user research — never as a production service.

**Do** clear session data between research participants to prevent data cross-contamination.

**Do** enable password protection (`useAuth: true`) before sharing a prototype URL externally.

**Do** use realistic but fictional content so research findings are valid.

**Do** commit your prototype to version control and use branches for each research round.

**Do** use `req.session.data` to store and read form answers — all templates can access it as `data`.

**Do** name form fields with hyphens, not spaces: `name="date-of-birth"` not `name="date of birth"`.

**Don't** store real personal data in a prototype — the kit stores session data unencrypted.

**Don't** use the kit to build production services — it has no security hardening, rate limiting, or proper data persistence.

**Don't** define routes for every page — only add entries to `routes.js` where you need branching logic or custom data manipulation.

**Don't** call `npm start` and `npm run dev` interchangeably without checking which starts the live-reload server — use `npm run dev` during active design work.

**Don't** import jQuery or large libraries unless necessary for a specific research question.

---

## Related

- `foundations/SKILLS.md` — GOV.UK Design System foundations and GOV.UK Frontend installation
- `styles/page-template/SKILLS.md` — Page template structure and blocks
- `components/radios/SKILLS.md` — Radios component (commonly used in branching prototypes)
- `components/checkboxes/SKILLS.md` — Checkboxes component
- `components/button/SKILLS.md` — Button component
- `patterns/help-users-to/check-answers/SKILLS.md` — Check your answers pattern
- `patterns/pages/confirmation-pages/SKILLS.md` — Confirmation page pattern
- `patterns/help-users-to/complete-multiple-tasks/SKILLS.md` — Task list pattern
