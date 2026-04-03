# Installation

This guide walks you through setting up the design system skills and agents with your AI coding tool. It assumes you have some familiarity with your design system's Prototype Kit but have not used AI tools for coding before.

This project supports two design systems:

- **[GOV.UK Design System](govuk-design-system/)** — for UK government services
- **[NHS UK Design System](nhsuk-design-system/)** — for NHS digital services

Pick the one you need, or use both.

## What you get

This project gives your AI assistant two resources for each design system.

- **Skills files** (`SKILLS.md`) — Reference files for every style, component, and pattern. They contain usage guidance, code examples, Nunjucks macro options, accessibility rules, and do and do not lists. When your AI reads these, it learns how to write correct markup for that design system.

- **Agent files** (`agents/`) — Role-based personas that review your work from different perspectives: frontend developer, content designer, interaction designer, accessibility auditor, user researcher, service designer, and QA tester. Each agent references the skills files and the relevant service standard.

## Step 1: Get the files

### Option A: Clone with Git

If you have Git installed, open a terminal and run:

```bash
git clone https://github.com/philsherry/govuk-design-system-skills.git
```

This creates a `govuk-design-system-skills` folder on your machine.

### Option B: Download as a ZIP

Go to the repository page on GitHub, click the green "Code" button, then "Download ZIP". Unzip the file somewhere you can find it later.

## Step 2: Set up your AI tool

Pick the tool you use from the list below. You only need to follow the instructions for your tool. Replace `{system}` with `govuk-design-system` or `nhsuk-design-system` depending on which design system you use.

### Claude Code (CLI or desktop app)

Claude Code can read these files directly. You can use them in four ways.

#### Load a skills file into your conversation

When you want help with a specific component, tell Claude to read the file:

```text
Read {system}/components/button/SKILLS.md and help me add a button to my page
```

Or reference it with `@`:

```text
@{system}/components/button/SKILLS.md — I need a primary button
```

#### Use an agent

Run Claude Code with an agent file to get role-specific guidance:

```bash
claude --agent {system}/agents/frontend-developer.md
```

Claude now behaves as a senior frontend developer for the whole session. Ask it to review your code, build a page, or explain how a component works.

#### Install agents into your project

Copy the agents into your prototype's `.claude/agents/` directory so they are always available:

```bash
cp {system}/agents/*.md my-prototype/.claude/agents/
```

Then start Claude Code from your prototype directory. The agents appear automatically.

#### Add skills as project context

To make Claude always aware of the design system when working on your prototype, copy the skills directory into your prototype and add a `CLAUDE.md` file to your prototype's root directory. See the design-system-specific guides for example `CLAUDE.md` content:

- [GOV.UK setup details](docs/govuk/INSTALL.md)
- [NHS UK setup details](docs/nhsuk/INSTALL.md)

### Cursor

Cursor uses rules files to give the AI context about your project.

#### Add skills as rules

Copy the skills files into your prototype's `.cursor/rules/` directory:

```bash
mkdir -p my-prototype/.cursor/rules
cp -r {system}/components my-prototype/.cursor/rules/
cp -r {system}/styles my-prototype/.cursor/rules/
cp -r {system}/patterns my-prototype/.cursor/rules/
```

#### Add a design system rule

Create a `.mdc` rule file in `.cursor/rules/` with instructions specific to your design system. See the design-system-specific guides for example rule content:

- [GOV.UK Cursor setup](docs/govuk/INSTALL.md)
- [NHS UK Cursor setup](docs/nhsuk/INSTALL.md)

### GitHub Copilot

Copilot reads instruction files from your repository's `.github/` directory.

#### Add project-wide instructions

Create a file at `my-prototype/.github/copilot-instructions.md` with design-system-specific instructions. See:

- [GOV.UK Copilot setup](docs/govuk/INSTALL.md)
- [NHS UK Copilot setup](docs/nhsuk/INSTALL.md)

#### Reference skills files

Copy the skills files into your repository so Copilot indexes them:

```bash
cp -r {system}/components my-prototype/docs/design-system/
cp -r {system}/styles my-prototype/docs/design-system/
cp -r {system}/patterns my-prototype/docs/design-system/
```

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
          - "/path/to/govuk-design-system-skills/{system}/**/*.md"
```

Replace `/path/to/` with the actual path to where you cloned or unzipped the files.

### ChatGPT

ChatGPT uses Projects to organise files and instructions.

1. Open ChatGPT and click "Projects" in the left sidebar.
2. Click "Create new project" and name it after your prototype.
3. Upload the SKILLS.md files for the components you need. Start with button, text-input, radios, error-message, and error-summary — these cover most form pages.
4. Add project instructions telling ChatGPT which design system to use and which class prefix to follow.

You can paste the content of an agent file into the project instructions to give ChatGPT a specific role.

### Claude.ai (web)

Claude's web interface uses Projects, as ChatGPT does.

1. Open claude.ai and click "Projects" in the left sidebar.
2. Click "Create new project".
3. Upload the SKILLS.md files you need to "Project knowledge", or paste their content as text snippets.
4. Add project instructions specific to your design system.

Upload an agent file to the project knowledge, then tell Claude to adopt that role for the conversation.

## Next steps

For design-system-specific setup details, example instructions, and `CLAUDE.md` content:

- **GOV.UK**: [docs/govuk/INSTALL.md](docs/govuk/INSTALL.md)
- **NHS UK**: [docs/nhsuk/INSTALL.md](docs/nhsuk/INSTALL.md)

For usage guidance, example prompts, and tips:

- **GOV.UK**: [docs/govuk/GUIDE.md](docs/govuk/GUIDE.md)
- **NHS UK**: [docs/nhsuk/GUIDE.md](docs/nhsuk/GUIDE.md)
