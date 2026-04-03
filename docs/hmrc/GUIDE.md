# HMRC Design Patterns — Usage guide

For general tips on using agents, running multidisciplinary reviews, and getting the best results, see the [root GUIDE.md](../../GUIDE.md).

This page covers HMRC-specific prompts and file recommendations.

## Example prompts

### Build a page from scratch

```text
I need a question page that asks the user for their Unique Taxpayer Reference.
It should follow the HMRC Design Patterns UTR pattern.
Show me the full Nunjucks template.
```

### Add an HMRC component to an existing page

```text
I need to add a currency input with a £ prefix to this page.
Here is my current template: [paste your code]
```

### Review your code

```text
Review this page template for HMRC and GOV.UK Design System compliance.
Check the markup, accessibility, and content.
Here is the code: [paste your code]
```

### Fix a specific problem

```text
My service timeout dialog is not appearing. Here is my template.
What am I doing wrong?
```

### Get content advice

```text
I need error messages for a VAT registration number field.
What wording should I use for empty and invalid inputs?
```

## Which skills files to load

HMRC services use both GOV.UK and HMRC skills files. Start with the files that match what you build.

### For a tax identifier page

- `hmrc-design-patterns/identifiers/unique-taxpayer-reference/SKILLS.md` (or whichever identifier you need)
- `govuk-design-system/components/text-input/SKILLS.md`
- `govuk-design-system/components/error-message/SKILLS.md`
- `govuk-design-system/components/error-summary/SKILLS.md`

### For a basic question page

- `govuk-design-system/components/text-input/SKILLS.md`
- `govuk-design-system/components/button/SKILLS.md`
- `govuk-design-system/components/error-message/SKILLS.md`
- `govuk-design-system/components/error-summary/SKILLS.md`
- `govuk-design-system/patterns/pages/question-pages/SKILLS.md`

### For HMRC-specific components

- `hmrc-design-patterns/service/currency-input/SKILLS.md`
- `hmrc-design-patterns/service/service-timeout/SKILLS.md`
- `hmrc-design-patterns/service/welsh-language-toggle/SKILLS.md`
- `hmrc-design-patterns/headers/timeline/SKILLS.md`
- `hmrc-design-patterns/foundations/hmrc-frontend/SKILLS.md`

### For a complete HMRC service flow

- `hmrc-design-patterns/foundations/SKILLS.md`
- `hmrc-design-patterns/foundations/hmrc-frontend/SKILLS.md`
- `govuk-design-system/patterns/help-users-to/start-using-a-service/SKILLS.md`
- `govuk-design-system/patterns/help-users-to/check-answers/SKILLS.md`
- `govuk-design-system/patterns/pages/confirmation-pages/SKILLS.md`
- `govuk-design-system/foundations/prototype-kit/SKILLS.md`
- Plus the identifier and component files for your service

### For accessibility review

- `govuk-design-system/accessibility/SKILLS.md`
- `hmrc-design-patterns/foundations/SKILLS.md` (covers the accessibility statement YAML service)
- Plus the `SKILLS.md` files for every component on the page you review

## HMRC-specific setup snippets

### CLAUDE.md for your prototype

```markdown
This is an HMRC tax service prototype.

For core component guidance, refer to the `SKILLS.md` files in the
govuk-design-system/ directory.

For HMRC-specific patterns, refer to the `SKILLS.md` files in the
hmrc-design-patterns/ directory.

Use GOV.UK Frontend components (govuk- prefix) for core interface elements.
Use HMRC Frontend components (hmrc- prefix) only for HMRC-specific patterns.
Do not invent custom class names.
```

### Cursor rule (`my-prototype/.cursor/rules/hmrc.mdc`)

```yaml
description: HMRC Design Patterns guidance for prototyping
globs: "app/**/*.html,app/**/*.njk"
alwaysApply: true

This is an HMRC tax service prototype. Use GOV.UK Frontend components
(govuk- prefix) for core elements and HMRC Frontend components (hmrc- prefix)
for HMRC-specific patterns.

When writing Nunjucks macros, do not include the import line — the kit
handles imports automatically.

For component guidance, refer to the `SKILLS.md` files in .cursor/rules/.
```

### GitHub Copilot instructions

```markdown
This is an HMRC tax service prototype using GOV.UK Frontend and HMRC Frontend.

When generating HTML or Nunjucks:
- Use GOV.UK Frontend class names (govuk- prefix) for core components
- Use HMRC Frontend class names (hmrc- prefix) for HMRC-specific components
- Follow the HMRC Design Patterns and GOV.UK Design System patterns
- Include accessibility attributes (aria-describedby for hints and errors,
  fieldset and legend for grouped inputs)
- When writing Nunjucks macros, do not include the import line

When writing error messages:
- Say what went wrong and how to fix it
- Use the format recommended by the HMRC and GOV.UK design patterns
```

### ChatGPT / Claude.ai project instructions

```text
I am building an HMRC tax service prototype using GOV.UK Frontend and HMRC
Frontend. When I ask for help with components, refer to the SKILLS.md files
I have uploaded. Use the HTML and Nunjucks examples from those files.
Use govuk- prefixed classes for core components and hmrc- prefixed classes
for HMRC-specific patterns. When writing Nunjucks, do not include the macro
import line.
```
