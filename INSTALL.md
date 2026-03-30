# Installation

This guide walks you through setting up the GOV.UK Design System skills and agents with your AI coding tool. It assumes you know what the GOV.UK Prototype Kit is but have not used AI tools for coding before.

---

## What you get

This project gives your AI assistant two resources.

- **Skills files** (`SKILLS.md`) — Reference files for every GOV.UK Design System style, component, and pattern. They contain usage guidance, code examples, Nunjucks macro options, accessibility rules, and do/don't lists. When your AI reads these, it learns how to write correct GOV.UK markup.

- **Agent files** (`agents/`) — Role-based personas that review your work from different perspectives: frontend developer, content designer, interaction designer, accessibility auditor, user researcher, service designer, and QA tester. Each agent knows the GOV.UK Service Standard and references the skills files.

---

## Step 1: Get the files

### Option A: Clone with Git

If you have Git installed, open a terminal and run:

```bash
git clone https://github.com/philsherry/govuk-design-system-skills.git
```

This creates a `govuk-design-system-skills` folder on your machine.

### Option B: Download as a ZIP

Go to the repository page on GitHub, click the green "Code" button, then "Download ZIP". Unzip the file somewhere you can find it later.

---

## Step 2: Set up your AI tool

Pick the tool you use from the list below. You only need to follow the instructions for your tool.

### Claude Code (CLI or desktop app)

Claude Code can read these files directly. You can use them in four ways.

#### Load a skills file into your conversation

When you want help with a specific component, tell Claude to read the file:

```text
Read govuk-design-system/components/button/SKILLS.md and help me add a start button to my page
```

Or reference it with `@`:

```text
@govuk-design-system/components/button/SKILLS.md — I need a start button with an arrow icon
```

#### Use an agent

Run Claude Code with an agent file to get role-specific guidance:

```bash
claude --agent govuk-design-system-skills/agents/frontend-developer.md
```

Claude now behaves as a senior GOV.UK frontend developer for the whole session. Ask it to review your code, build a page, or explain how a component works.

#### Install agents into your project

Copy the agents into your prototype's `.claude/agents/` directory so they are always available:

```bash
cp govuk-design-system-skills/agents/*.md my-prototype/.claude/agents/
```

Then start Claude Code from your prototype directory. The agents appear automatically.

#### Add skills as project context

To make Claude always aware of the GOV.UK Design System when working on your prototype, copy the `govuk-design-system/` directory into your prototype and add a `CLAUDE.md` file to your prototype's root directory:

```bash
cp -r govuk-design-system-skills/govuk-design-system my-prototype/govuk-design-system
```

```markdown
This is a GOV.UK Prototype Kit project.

For component guidance, refer to the SKILLS.md files in the
govuk-design-system/ directory.

Use GOV.UK Frontend components and Nunjucks macros.
Follow the GOV.UK Design System patterns.
Do not invent custom class names — use the govuk- prefixed classes.
```

---

### Cursor

Cursor uses rules files to give the AI context about your project.

#### Add skills as rules

Copy the skills files into your prototype's `.cursor/rules/` directory:

```bash
mkdir -p my-prototype/.cursor/rules
cp -r govuk-design-system-skills/govuk-design-system/components my-prototype/.cursor/rules/
cp -r govuk-design-system-skills/govuk-design-system/styles my-prototype/.cursor/rules/
cp -r govuk-design-system-skills/govuk-design-system/patterns my-prototype/.cursor/rules/
```

#### Add a GOV.UK rule

Create a file at `my-prototype/.cursor/rules/govuk.mdc`:

```yaml
---
description: GOV.UK Design System guidance for prototyping
globs: "app/**/*.html,app/**/*.njk"
alwaysApply: true
---

This is a GOV.UK Prototype Kit project. Use GOV.UK Frontend components
and Nunjucks macros. Follow the GOV.UK Design System patterns.

When writing Nunjucks macros in the Prototype Kit, do not include the
import line — the kit handles imports automatically.

For component guidance, refer to the SKILLS.md files in .cursor/rules/.
```

Now when you ask Cursor to help with any `.html` or `.njk` file in your prototype, it automatically applies GOV.UK Design System rules.

---

### GitHub Copilot

Copilot reads instruction files from your repository's `.github/` directory.

#### Add project-wide instructions

Create a file at `my-prototype/.github/copilot-instructions.md`:

```markdown
This is a GOV.UK Prototype Kit project using GOV.UK Frontend.

When generating HTML or Nunjucks:
- Use GOV.UK Frontend component markup and class names (govuk- prefix)
- Follow the GOV.UK Design System patterns
- Include accessibility attributes (aria-describedby for hints and errors,
  fieldset and legend for grouped inputs)
- When writing Nunjucks macros, do not include the import line

When writing error messages:
- Say what went wrong and how to fix it
- Use the format recommended by the GOV.UK Design System
```

#### Add component-specific instructions

Create files in `my-prototype/.github/instructions/` for specific contexts:

```markdown
---
applyTo: "app/views/**/*.html,app/views/**/*.njk"
---

Use GOV.UK Frontend Nunjucks macros for all components.
Do not include macro import lines — the Prototype Kit handles them.
Always wrap form inputs in a govuk-form-group div.
Always associate labels with inputs using the `for` attribute.
```

#### Reference skills files

You can also copy the skills files into your repository so Copilot indexes them:

```bash
cp -r govuk-design-system-skills/govuk-design-system/components my-prototype/docs/govuk/
cp -r govuk-design-system-skills/govuk-design-system/styles my-prototype/docs/govuk/
cp -r govuk-design-system-skills/govuk-design-system/patterns my-prototype/docs/govuk/
```

---

### Continue.dev (VS Code extension)

Continue uses a configuration file to set up context providers.

#### Point Continue at the skills files

Edit `~/.continue/config.yaml` (macOS/Linux) or `%USERPROFILE%\.continue\config.yaml` (Windows):

```yaml
context:
  providers:
    - provider: file
      params:
        paths:
          - "/path/to/govuk-design-system-skills/govuk-design-system/**/*.md"
```

Replace `/path/to/` with the actual path to where you cloned or unzipped the files.

#### Add rules

Create a `.continue/rules/` directory in your prototype and add a rule file:

```markdown
This is a GOV.UK Prototype Kit project. Use GOV.UK Frontend components
and Nunjucks macros. Follow the GOV.UK Design System patterns.

For component reference, check the SKILLS.md files in the
govuk-design-system/ directory.
```

---

### ChatGPT

ChatGPT uses Projects to organise files and instructions.

#### Create a project

1. Open ChatGPT and click "Projects" in the left sidebar.
2. Click "Create new project" and name it something like "GOV.UK Prototype".
3. Click the "+" button in the right sidebar to upload files.
4. Upload the SKILLS.md files for the components you need. Start with the ones you use most — button, text-input, radios, error-message, and error-summary cover most form pages.
5. Open "Project settings" and add instructions:

```text
I am building a GOV.UK service prototype using the GOV.UK Prototype Kit
and GOV.UK Frontend. When I ask for help with components, refer to the
SKILLS.md files I have uploaded. Use the HTML and Nunjucks examples from
those files. Do not invent class names — only use the govuk- prefixed
classes from GOV.UK Frontend. When writing Nunjucks in the Prototype Kit,
do not include the macro import line.
```

Every conversation you start within this project now has access to those files and instructions.

#### Use an agent persona

You can paste the content of an agent file into the project instructions to give ChatGPT a specific role. For example, paste the content of `agents/content-designer.md` and ChatGPT will review your content from a content designer's perspective.

---

### Claude.ai (web)

Claude's web interface uses Projects, as ChatGPT does.

#### Create a project

1. Open claude.ai and click "Projects" in the left sidebar.
2. Click "Create new project".
3. In the project, find "Project knowledge" and click "Add content".
4. Upload the SKILLS.md files you need, or paste their content as text snippets.
5. Add project instructions:

```text
I am building a GOV.UK service prototype. When I ask for help with
components, refer to the `SKILLS.md` files in the project knowledge.
Use the HTML and Nunjucks examples from those files. Only use GOV.UK
Frontend class names. When writing Nunjucks in the Prototype Kit,
do not include the macro import line.
```

#### Use an agent persona

Upload an agent file to the project knowledge, then tell Claude to adopt that role:

```text
Read the frontend-developer agent file and use it as your guide for
this conversation. Review my code from a frontend developer's perspective.
```
