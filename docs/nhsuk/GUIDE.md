# NHS UK Design System — Usage guide

For general tips on using agents, running multidisciplinary reviews, and getting the best results, see the [root GUIDE.md](../../GUIDE.md).

This page covers NHS UK-specific prompts and file recommendations.

## Example prompts

### Build a page from scratch

```text
I need a question page that asks the user for their NHS number.
It should follow the NHS UK Design System question page pattern.
Show me the full Nunjucks template.
```

### Add a component to an existing page

```text
I need to add a care card to this page for urgent medical advice.
Here is my current template: [paste your code]
```

### Review your code

```text
Review this page template for NHS UK Design System compliance.
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
I need to write the content for a Do and Don't list about managing
a long-term condition. What wording should I use?
```

## Which skills files to load

Start with the files that match what you are building. You do not need every file at once.

### For a basic question page

- `nhsuk-design-system/components/text-input/SKILLS.md`
- `nhsuk-design-system/components/button/SKILLS.md`
- `nhsuk-design-system/components/error-message/SKILLS.md`
- `nhsuk-design-system/components/error-summary/SKILLS.md`
- `nhsuk-design-system/patterns/pages/question-pages/SKILLS.md`

### For a form with mixed input types

Add to the above:

- `nhsuk-design-system/components/radios/SKILLS.md`
- `nhsuk-design-system/components/checkboxes/SKILLS.md`
- `nhsuk-design-system/components/date-input/SKILLS.md`
- `nhsuk-design-system/components/textarea/SKILLS.md`
- `nhsuk-design-system/components/select/SKILLS.md`
- `nhsuk-design-system/components/fieldset/SKILLS.md`

### For a complete service flow

Add:

- `nhsuk-design-system/patterns/pages/start-page/SKILLS.md`
- `nhsuk-design-system/patterns/help-users-to/check-answers/SKILLS.md`
- `nhsuk-design-system/patterns/pages/confirmation-page/SKILLS.md`
- `nhsuk-design-system/components/back-link/SKILLS.md`
- `nhsuk-design-system/foundations/prototype-kit/SKILLS.md`

### For health content pages

- `nhsuk-design-system/components/warning-callout/SKILLS.md`
- `nhsuk-design-system/components/do-and-dont-list/SKILLS.md`
- `nhsuk-design-system/components/card/SKILLS.md`
- `nhsuk-design-system/components/action-link/SKILLS.md`
- `nhsuk-design-system/patterns/help-users-to/decide-when-and-where-to-get-care/SKILLS.md`

### For accessibility review

- `nhsuk-design-system/accessibility/SKILLS.md`
- Plus the `SKILLS.md` files for every component on the page you are reviewing

## NHS UK-specific setup snippets

### CLAUDE.md for your prototype

```markdown
This is an NHS UK service prototype.

For component guidance, refer to the `SKILLS.md` files in the
nhsuk-design-system/ directory.

Use NHS UK Frontend components and Nunjucks macros.
Follow the NHS UK Design System patterns.
Do not invent custom class names — use the nhsuk- prefixed classes.
```

### Cursor rule (`my-prototype/.cursor/rules/nhsuk.mdc`)

```yaml
description: NHS UK Design System guidance for prototyping
globs: "app/**/*.html,app/**/*.njk"
alwaysApply: true

This is an NHS UK service prototype. Use NHS UK Frontend components
and Nunjucks macros. Follow the NHS UK Design System patterns.

When writing Nunjucks macros, do not include the import line — the kit
handles imports automatically.

For component guidance, refer to the `SKILLS.md` files in .cursor/rules/.
```

### GitHub Copilot instructions

```markdown
This is an NHS UK service prototype using NHS UK Frontend.

When generating HTML or Nunjucks:
- Use NHS UK Frontend component markup and class names (`nhsuk-` prefix)
- Follow the NHS UK Design System patterns
- Include accessibility attributes (`aria-describedby` for hints and errors,
  `fieldset` and `legend` for grouped inputs)
- When writing Nunjucks macros, do not include the import line

When writing error messages:
- Say what went wrong and how to fix it
- Use the format recommended by the NHS UK Design System
```

### ChatGPT / Claude.ai project instructions

```text
I am building an NHS UK service prototype using NHS UK Frontend. When I
ask for help with components, refer to the `SKILLS.md` files I have
uploaded. Use the HTML and Nunjucks examples from those files. Do not
invent class names — only use the nhsuk- prefixed classes from NHS UK
Frontend. When writing Nunjucks, do not include the macro import line.
```
