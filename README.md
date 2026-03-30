# GOV.UK Design System Skills

Comprehensive `SKILLS.md` reference files for every style, component, and pattern in the GOV.UK Design System.

These files provide LLM context for use during development. Each `SKILLS.md` file provides a focused, machine-readable reference for a single GOV.UK Design System element — covering usage guidance, code examples, macro options, accessibility requirements, and do/don't rules. Load them into your AI assistant or IDE extension, or concatenate them to build a complete design system context for your project.

Based on the [GOV.UK Design System](https://design-system.service.gov.uk/) and [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend).

---

## Directory Tree

```text
govuk-design-system-skills/
├── .editorconfig
├── .github/
│   ├── CODE_OF_CONDUCT.md
│   ├── CONTRIBUTING.md
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── SUPPORT.md
│   ├── ISSUE_TEMPLATE/
│   │   ├── config.yml
│   │   ├── incorrect-guidance.md
│   │   └── new-content.md
│   └── workflows/
│       └── lint.yml
├── CHANGELOG.md
├── CLAUDE.md
├── GUIDE.md
├── INSTALL.md
├── LICENSE
├── README.md
├── package.json
├── agents/
│   ├── README.md
│   ├── accessibility-auditor.md
│   ├── content-designer.md
│   ├── frontend-developer.md
│   ├── interaction-designer.md
│   ├── qa-tester.md
│   ├── service-designer.md
│   └── user-researcher.md
└── govuk-design-system/
    ├── accessibility/
    │   └── SKILLS.md
    ├── foundations/
    │   ├── SKILLS.md
    │   ├── govuk-frontend/
    │   │   └── SKILLS.md
    │   └── prototype-kit/
    │       └── SKILLS.md
    ├── styles/
    │   ├── page-template/SKILLS.md
    │   ├── layout/SKILLS.md
    │   ├── spacing/SKILLS.md
    │   ├── section-break/SKILLS.md
    │   ├── typeface/SKILLS.md
    │   ├── type-scale/SKILLS.md
    │   ├── headings/SKILLS.md
    │   ├── paragraphs/SKILLS.md
    │   ├── links/SKILLS.md
    │   ├── lists/SKILLS.md
    │   ├── font-override-classes/SKILLS.md
    │   ├── colour/SKILLS.md
    │   └── images/SKILLS.md
    ├── components/
    │   ├── accordion/SKILLS.md
    │   ├── back-link/SKILLS.md
    │   ├── breadcrumbs/SKILLS.md
    │   ├── button/SKILLS.md
    │   ├── character-count/SKILLS.md
    │   ├── checkboxes/SKILLS.md
    │   ├── cookie-banner/SKILLS.md
    │   ├── date-input/SKILLS.md
    │   ├── details/SKILLS.md
    │   ├── error-message/SKILLS.md
    │   ├── error-summary/SKILLS.md
    │   ├── exit-this-page/SKILLS.md
    │   ├── fieldset/SKILLS.md
    │   ├── file-upload/SKILLS.md
    │   ├── footer/SKILLS.md
    │   ├── header/SKILLS.md
    │   ├── inset-text/SKILLS.md
    │   ├── notification-banner/SKILLS.md
    │   ├── pagination/SKILLS.md
    │   ├── panel/SKILLS.md
    │   ├── password-input/SKILLS.md
    │   ├── phase-banner/SKILLS.md
    │   ├── radios/SKILLS.md
    │   ├── select/SKILLS.md
    │   ├── service-navigation/SKILLS.md
    │   ├── skip-link/SKILLS.md
    │   ├── summary-list/SKILLS.md
    │   ├── table/SKILLS.md
    │   ├── tabs/SKILLS.md
    │   ├── tag/SKILLS.md
    │   ├── task-list/SKILLS.md
    │   ├── text-input/SKILLS.md
    │   ├── textarea/SKILLS.md
    │   └── warning-text/SKILLS.md
    └── patterns/
        ├── ask-users-for/
        │   ├── addresses/SKILLS.md
        │   ├── bank-details/SKILLS.md
        │   ├── dates/SKILLS.md
        │   ├── email-addresses/SKILLS.md
        │   ├── equality-information/SKILLS.md
        │   ├── names/SKILLS.md
        │   ├── national-insurance-numbers/SKILLS.md
        │   ├── passwords/SKILLS.md
        │   ├── payment-card-details/SKILLS.md
        │   └── phone-numbers/SKILLS.md
        ├── help-users-to/
        │   ├── check-a-service-is-suitable/SKILLS.md
        │   ├── check-answers/SKILLS.md
        │   ├── complete-multiple-tasks/SKILLS.md
        │   ├── confirm-a-phone-number/SKILLS.md
        │   ├── confirm-an-email-address/SKILLS.md
        │   ├── contact-a-department-or-service-team/SKILLS.md
        │   ├── create-a-username/SKILLS.md
        │   ├── create-accounts/SKILLS.md
        │   ├── exit-a-page-quickly/SKILLS.md
        │   ├── navigate-a-service/SKILLS.md
        │   ├── start-using-a-service/SKILLS.md
        │   └── recover-from-validation-errors/SKILLS.md
        └── pages/
            ├── confirmation-pages/SKILLS.md
            ├── cookies-page/SKILLS.md
            ├── page-not-found-pages/SKILLS.md
            ├── problem-with-the-service-pages/SKILLS.md
            ├── question-pages/SKILLS.md
            ├── service-unavailable-pages/SKILLS.md
            └── step-by-step-navigation/SKILLS.md
```

---

## `SKILLS.md` File Format

Each `SKILLS.md` file follows a consistent structure, making it straightforward to parse, scan, and use as LLM context.

### Overview

A short description of the element — what it does, what problem it solves, and where it sits in the design system (style, component, or pattern).

### When to use

The specific circumstances in which to use this element, drawn from GOV.UK Design System guidance. Includes conditions and prerequisites.

### When not to use

Circumstances in which this element is not appropriate. Often includes alternative approaches.

### How it works

A detailed explanation of the element's behaviour, variants, states, and any JavaScript dependencies. Covers defaults, edge cases, and interactions with other components.

### Code Examples

Two sub-sections:

- **HTML** — the rendered markup, suitable for use in any HTML template or static site.
- **Nunjucks** — the macro call used in Express.js projects and the GOV.UK Prototype Kit.

### Nunjucks Macro Options

A Markdown table of every parameter the Nunjucks macro accepts, with columns for name, type, required/optional, and description. Reflects the GOV.UK Frontend v5.x macro API.

### Error Messages

For form components: the standard error message wording recommended by the GOV.UK Design System, including examples for common validation scenarios.

### Accessibility

Specific accessibility requirements, ARIA roles, keyboard interactions, screen reader behaviour, and any known assistive technology considerations for this element.

### Do / Don't

A concise paired list of recommended practices and anti-patterns, derived from GOV.UK Design System guidance and GDS research.

### Related

Links to related components, patterns, and styles commonly used alongside or instead of this element.

---

## Agents

The `agents/` directory contains Claude Code agent definitions for 7 GDS multidisciplinary team roles: frontend developer, content designer, interaction designer, accessibility auditor, user researcher, service designer, and QA tester. Each agent reviews your work from its discipline's perspective, referencing the `SKILLS.md` files as its knowledge base and grounding advice in the [GOV.UK Service Standard](https://www.gov.uk/service-manual/service-standard).

See [agents/README.md](agents/README.md) for full details on how to load and use them.

---

## Getting started

**[INSTALL.md](INSTALL.md)** — Set up the skills files with your AI tool. Covers Claude Code, Cursor, GitHub Copilot, Continue.dev, ChatGPT, and Claude.ai with step-by-step instructions.

**[GUIDE.md](GUIDE.md)** — How to put it all together. Example prompts, how to use the agents effectively, which skills files to load for different tasks, and tips for getting the best results.

---

## How to use the skills files

**Load individual files as LLM context**
Open the `SKILLS.md` file for the component you are working with and attach it to your conversation. The structured format gives the model precise, GOV.UK-specific knowledge.

**Concatenate relevant files**
When building a full page or flow, concatenate the `SKILLS.md` files for every component and pattern involved. For example, a question page might combine `govuk-design-system/patterns/pages/question-pages`, `govuk-design-system/components/text-input`, `govuk-design-system/components/error-message`, `govuk-design-system/components/error-summary`, and `govuk-design-system/components/button`.

**Reference when building GOV.UK services**
Use these files as a checklist during development and code review. Each file captures the full usage guidance, so you can verify your implementation against the design system without switching to a browser.

**Works with any AI assistant or IDE extension**
The plain Markdown format works with any tool that accepts file context — Claude, ChatGPT, GitHub Copilot, Cursor, Continue, and others. No special tooling required.

---

## Licence

This project uses two licences:

- **GOV.UK Design System content** (guidance, examples, and wording in `govuk-design-system/` SKILLS.md files) is Crown Copyright, published under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).
- **Everything else** (file structure, frontmatter schema, agent personas, documentation) uses the [MIT License](LICENSE).
