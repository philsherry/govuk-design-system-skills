# GOV.UK Design System — Usage guide

For general tips on using agents, running multidisciplinary reviews, and getting the best results, see the [root GUIDE.md](../../GUIDE.md).

This page covers GOV.UK-specific prompts and file recommendations.

## Example prompts

### Build a page from scratch

```text
I need a question page that asks the user for their email address.
It should follow the GOV.UK one-thing-per-page pattern.
Show me the full Nunjucks template.
```

### Add a component to an existing page

```text
I need to add date input fields to this page for "Date of birth".
Include hint text and error handling.
Here is my current template: [paste your code]
```

### Review your code

```text
Review this page template for GOV.UK Design System compliance.
Check the markup, accessibility, and content.
Here is the code: [paste your code]
```

### Fix a specific problem

```text
My error messages are not showing. Here is my route file and my template.
What am I doing wrong?
```

### Get content advice

```text
I need to write the error messages for a National Insurance number field.
What should I say when the field is empty, and when the format is wrong?
```

## Which skills files to load

Start with the files that match what you are building. You do not need every file at once.

### For a basic question page

- `govuk-design-system/components/text-input/SKILLS.md`
- `govuk-design-system/components/button/SKILLS.md`
- `govuk-design-system/components/error-message/SKILLS.md`
- `govuk-design-system/components/error-summary/SKILLS.md`
- `govuk-design-system/patterns/pages/question-pages/SKILLS.md`

### For a form with mixed input types

Add to the above:

- `govuk-design-system/components/radios/SKILLS.md`
- `govuk-design-system/components/checkboxes/SKILLS.md`
- `govuk-design-system/components/date-input/SKILLS.md`
- `govuk-design-system/components/textarea/SKILLS.md`
- `govuk-design-system/components/select/SKILLS.md`
- `govuk-design-system/components/fieldset/SKILLS.md`

### For a complete service flow

Add:

- `govuk-design-system/patterns/help-users-to/start-using-a-service/SKILLS.md`
- `govuk-design-system/patterns/help-users-to/check-answers/SKILLS.md`
- `govuk-design-system/patterns/pages/confirmation-pages/SKILLS.md`
- `govuk-design-system/components/back-link/SKILLS.md`
- `govuk-design-system/foundations/prototype-kit/SKILLS.md`

### For accessibility review

- `govuk-design-system/accessibility/SKILLS.md`
- Plus the `SKILLS.md` files for every component on the page you are reviewing

## GOV.UK-specific setup snippets

### CLAUDE.md for your prototype

```markdown
This is a GOV.UK Prototype Kit project.

For component guidance, refer to the `SKILLS.md` files in the
govuk-design-system/ directory.

Use GOV.UK Frontend components and Nunjucks macros.
Follow the GOV.UK Design System patterns.
Do not invent custom class names — use the govuk- prefixed classes.
```

### Cursor rule (`my-prototype/.cursor/rules/govuk.mdc`)

```yaml
description: GOV.UK Design System guidance for prototyping
globs: "app/**/*.html,app/**/*.njk"
alwaysApply: true

This is a GOV.UK Prototype Kit project. Use GOV.UK Frontend components
and Nunjucks macros. Follow the GOV.UK Design System patterns.

When writing Nunjucks macros in the Prototype Kit, do not include the
import line — the kit handles imports automatically.

For component guidance, refer to the `SKILLS.md` files in .cursor/rules/.
```

### GitHub Copilot instructions

```markdown
This is a GOV.UK Prototype Kit project using GOV.UK Frontend.

When generating HTML or Nunjucks:
- Use GOV.UK Frontend component markup and class names (`govuk-` prefix)
- Follow the GOV.UK Design System patterns
- Include accessibility attributes (`aria-describedby` for hints and errors,
  `fieldset` and `legend` for grouped inputs)
- When writing Nunjucks macros, do not include the import line

When writing error messages:
- Say what went wrong and how to fix it
- Use the format recommended by the GOV.UK Design System
```

### ChatGPT / Claude.ai project instructions

```text
I am building a GOV.UK service prototype using the GOV.UK Prototype Kit
and GOV.UK Frontend. When I ask for help with components, refer to the
`SKILLS.md` files I have uploaded. Use the HTML and Nunjucks examples from
those files. Do not invent class names — only use the govuk- prefixed
classes from GOV.UK Frontend. When writing Nunjucks in the Prototype Kit,
do not include the macro import line.
```
