# DWP Design System — Usage guide

For general tips on using agents, running multidisciplinary reviews, and getting the best results, see the [root GUIDE.md](../../GUIDE.md).

This page covers DWP-specific prompts and file recommendations.

## About the DWP Design System

The [DWP Design System](https://design-system.dwp.gov.uk/) extends the [GOV.UK Design System](https://design-system.service.gov.uk/) with components and templates specific to DWP services. DWP services use [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend) as the foundation, with [@dwp/dwp-frontend](https://www.npmjs.com/package/@dwp/dwp-frontend) layered on top for DWP-specific patterns.

This dual-system approach means you load two sets of skills files: GOV.UK skills for core components (buttons, inputs, radios, error handling) and DWP skills for DWP-specific templates and patterns.

### Public vs internal services

DWP builds two types of service:

- **Public-facing services** — appear on service.gov.uk, use the GOV.UK header and footer, follow GOV.UK branding
- **Internal services** — used by DWP staff, use the DWP internal header and footer, no GOV.UK branding

The skills files cover both. Check whether your service is public or internal before picking a page template.

### Accessibility

DWP publishes the [DWP Accessibility Manual](https://accessibility-manual.dwp.gov.uk/), which covers accessibility guidance specific to DWP services. Use it alongside the GOV.UK accessibility skills files.

## Example prompts

### Build a page from scratch

```text
I need a question page that asks the user for their National Insurance number.
It should follow the GOV.UK one-thing-per-page pattern.
Show me the full Nunjucks template.
```

### Build a cookies page

```text
I need a DWP cookies page for a service called "Apply for Pension Credit".
Use the standard DWP cookies page template with Google Analytics cookies.
```

### Build an internal service page

```text
I need a page template for a DWP internal caseworker tool called "Case Manager".
Use the DWP internal service page template.
```

### Review your code

```text
Review this page template for GOV.UK and DWP Design System compliance.
Check the markup, accessibility, and content.
Here is the code: [paste your code]
```

### Fix a specific problem

```text
My DWP internal header is not displaying. Here is my template and my Sass imports.
What am I doing wrong?
```

## Which skills files to load

DWP services use both GOV.UK and DWP skills files. Start with the files that match what you build.

### For a basic question page

- `govuk-design-system/components/text-input/SKILLS.md`
- `govuk-design-system/components/button/SKILLS.md`
- `govuk-design-system/components/error-message/SKILLS.md`
- `govuk-design-system/components/error-summary/SKILLS.md`
- `govuk-design-system/patterns/pages/question-pages/SKILLS.md`

### For a DWP cookies page

- `dwp-design-system/templates/cookies-page/SKILLS.md`
- `govuk-design-system/components/radios/SKILLS.md`
- `govuk-design-system/components/table/SKILLS.md`
- `govuk-design-system/components/notification-banner/SKILLS.md`

### For a DWP internal service

- `dwp-design-system/templates/internal-service-page/SKILLS.md`
- `govuk-design-system/components/skip-link/SKILLS.md`
- Plus the component files for whatever content the page contains

### For a complete public-facing service flow

- `govuk-design-system/patterns/help-users-to/start-using-a-service/SKILLS.md`
- `govuk-design-system/patterns/help-users-to/check-answers/SKILLS.md`
- `govuk-design-system/patterns/pages/confirmation-pages/SKILLS.md`
- `govuk-design-system/components/back-link/SKILLS.md`
- `govuk-design-system/foundations/prototype-kit/SKILLS.md`
- `dwp-design-system/templates/cookies-page/SKILLS.md`
- Plus the component files for your service

### For accessibility review

- `govuk-design-system/accessibility/SKILLS.md`
- Plus the `SKILLS.md` files for every component on the page you review

## DWP-specific setup snippets

### CLAUDE.md for your prototype

```markdown
This is a DWP service prototype.

For core component guidance, refer to the `SKILLS.md` files in the
govuk-design-system/ directory.

For DWP-specific templates, refer to the `SKILLS.md` files in the
dwp-design-system/ directory.

Use GOV.UK Frontend components (govuk- prefix) for core interface elements.
Use DWP Frontend components (dwp- prefix) only for DWP-specific patterns.
Do not invent custom class names.
```

### Cursor rule (`my-prototype/.cursor/rules/dwp.mdc`)

```yaml
description: DWP Design System guidance for prototyping
globs: "app/**/*.html,app/**/*.njk"
alwaysApply: true

This is a DWP service prototype. Use GOV.UK Frontend components
(govuk- prefix) for core elements and DWP Frontend components (dwp- prefix)
for DWP-specific patterns.

When writing Nunjucks macros in the Prototype Kit, do not include the
import line — the kit handles imports automatically.

For component guidance, refer to the `SKILLS.md` files in .cursor/rules/.
```

### GitHub Copilot instructions

```markdown
This is a DWP service prototype using GOV.UK Frontend and DWP Frontend.

When generating HTML or Nunjucks:
- Use GOV.UK Frontend class names (govuk- prefix) for core components
- Use DWP Frontend class names (dwp- prefix) for DWP-specific components
- Follow the DWP Design System and GOV.UK Design System patterns
- Include accessibility attributes (aria-describedby for hints and errors,
  fieldset and legend for grouped inputs)
- When writing Nunjucks macros, do not include the import line

When writing error messages:
- Say what went wrong and how to fix it
- Use the format recommended by the GOV.UK Design System
```

### ChatGPT / Claude.ai project instructions

```text
I am building a DWP service prototype using GOV.UK Frontend and DWP Frontend.
When I ask for help with components, refer to the SKILLS.md files I have
uploaded. Use the HTML and Nunjucks examples from those files.
Use govuk- prefixed classes for core components and dwp- prefixed classes
for DWP-specific patterns. When writing Nunjucks, do not include the macro
import line.
```
