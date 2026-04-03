# Contributing

Thank you for your interest in contributing to Design System Skills.

This project provides reference files (`SKILLS.md`) and agent personas for use with AI coding tools. Contributions that improve accuracy, coverage, or clarity are welcome.

## Before you start

- Check the [open issues](../../issues) to see if someone has already raised the same point.
- If you are proposing a new SKILLS.md file or a large change, open an issue first to discuss it.

## Writing style

All markdown prose must pass [`write-good`](https://github.com/btford/write-good) with no unresolved flags.

```bash
npx write-good govuk-design-system/components/button/SKILLS.md
```

### Rules

- Use active voice. Avoid passive constructions ("was sent", "is considered").
- Avoid weasel words: just, several, many, various, things, few.
- Avoid weakeners: clearly, obviously, correctly, recently.
- Avoid wordy phrases: "it is", "in terms of", "majority of". See the replacement table in `CLAUDE.md` for alternatives.

### Known false positives

Not every flag needs fixing. Ignore flags on:

- WCAG criterion names (e.g., "(Minimum)" in "Focus Not Obscured (Minimum)")
- WCAG technical headings and terms (e.g., "Minimum contrast ratios", "minimum target size")
- Example text that deliberately shows what not to write
- "only" as a necessary qualifier that restricts scope
- Accessibility compounds and constrained use phrases (e.g., "keyboard-only", "screen-reader-only", "official government use only")
- "minimum" as a technical term (e.g., "minimum target size")
- "requirement" when it means an actual rule

## `SKILLS.md` file format

Every `SKILLS.md` file must include YAML frontmatter at the top:

```yaml
category: components
description: One-line summary of the element.
govuk-frontend: "5.x"
keywords:
  - "button"
  - "submit"
  - "action"
last-reviewed: "2026-04-03"
name: Button
source: "https://design-system.service.gov.uk/components/button/"
```

Keys must be in alphabetical order. Required fields:

- `category` — one of: `accessibility`, `components`, `foundations`, `patterns`, `styles`
- `description` — one-line summary of the element
- `keywords` — search terms and aliases (e.g. "radio buttons" for radios, "dropdown" for select)
- `last-reviewed` — date of last review, updated with each PR
- `name` — human-readable name matching the `# Heading`
- `source` — canonical URL to the design system's page for this element

Conditional fields:

- `govuk-frontend` or `nhsuk-frontend` — the frontend library version (use the correct key for your design system)
- `subcategory` — patterns only: `ask-users-for`, `help-users-to`, or `pages`

After the frontmatter, each file follows this structure:

1. `# Name` — heading matching the frontmatter `name`
2. Blockquote — one-line description and source URL
3. `## When to use this component/pattern/style`
4. `## When not to use`
5. `## How it works`
6. `## Code Examples` — HTML and Nunjucks sub-sections
7. `## Nunjucks Macro Options` — parameter table
8. `## Error Messages` — for form components
9. `## Accessibility`
10. `## Do and Do not`
11. `## Related Components / Patterns`

Not every section applies to every file. Omit sections that have no relevant content.

## Pull request checklist

Before opening a PR, confirm:

- [ ] You ran `write-good` against every file you changed and resolved all flags (or confirmed their known false positive status)
- [ ] YAML frontmatter is present with keys in alphabetical order.
- [ ] Update `last-reviewed` to date of the PR.
- [ ] Code examples use the correct frontend library markup (GOV.UK Frontend v5.x or NHS UK Frontend v9.x).
- [ ] Nunjucks examples do not include import lines (the Prototype Kit handles imports).
- [ ] No new files without a corresponding issue or discussion.
- [ ] Frontmatter `source` field points to the canonical design system URL for the element.
- [ ] Frontmatter `keywords` include search terms and common aliases.
- [ ] Link to your design system documentation if you have one.
- [ ] Link to your frontend library repo if you have one.
- [ ] Link to your prototype kit repo if you have one.
- [ ] Link to your content style guide if you have one.
- [ ] Link to your service standard or service manual if you have one.

## Creating a release

This repo publishes GitHub Releases from `CHANGELOG.md` when you push a semantic version tag.

1. Add the new version entry to `CHANGELOG.md`.
2. Bump the version in `package.json` and `package-lock.json`.
3. Merge the release PR to `main`.
4. Wait for the auto-tag workflow to create and push the matching semantic
  version tag.

The auto-tag workflow reads the version from `package.json`, checks that the
same version exists in `CHANGELOG.md`, and pushes a tag such as `v1.2.0`.

The release workflow reads the matching `CHANGELOG.md` section for `1.2.0` and
publishes the GitHub Release with that body.

To check release metadata locally before you merge, run:

```bash
npm run release:check
```

To preview the generated release notes before you push a tag, run:

```bash
npm run release:notes -- 1.2.0
```

## Reporting issues

Use the issue templates to report:

- **Incorrect guidance** — a SKILLS.md file gives wrong advice, outdated markup, or missing macro options
- **New content request** — a component, pattern, or style that does not yet have a SKILLS.md file

## Code of conduct

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md). By participating, you agree to uphold it.

## Adding a new design system

If you want to add support for another design system (beyond GOV.UK and NHS UK), follow these steps. Prefer to squash all commits and submit a clean PR from a fork. For a reference list of other UK government design systems, see the [GOV.UK Design System community resources](https://design-system.service.gov.uk/community/).

### Directory structure

Create a new directory named `{prefix}-design-system/` at the project root for SKILLS.md files and agents. Create a matching `docs/{prefix}/` directory for the design-system-specific setup and usage guides.

```text
{prefix}-design-system/
├── agents/
│   ├── README.md
│   ├── accessibility-auditor.md
│   ├── content-designer.md
│   ├── frontend-developer.md
│   ├── interaction-designer.md
│   ├── qa-tester.md
│   ├── service-designer.md
│   └── user-researcher.md
├── accessibility/
│   └── SKILLS.md
├── foundations/
│   └── SKILLS.md
├── styles/
│   └── {style-name}/SKILLS.md
├── components/
│   └── {component-name}/SKILLS.md
└── patterns/
    ├── ask-users-for/{pattern-name}/SKILLS.md
    ├── help-users-to/{pattern-name}/SKILLS.md
    └── pages/{pattern-name}/SKILLS.md

docs/{prefix}/
├── GUIDE.md
└── INSTALL.md
```

### SKILLS.md files

- Follow the file format described above, with YAML frontmatter keys in alphabetical order.
- Use the design system's own frontend library key in the frontmatter (e.g., `nhsuk-frontend: "9.x"` for NHS UK).
- Include a `source` URL pointing to the canonical design system page for each element.
- Include `keywords` with search terms and aliases so agents can find files by common names (e.g. "dropdown" should find `select/SKILLS.md`).
- Write content based on the design system's own guidance — do not copy GOV.UK content and replace class prefixes. Research the actual design system documentation.
- Include links to authoritative specs (WCAG, ARIA, frontend repo) so agents look up fresh knowledge rather than assume.
- Every file must pass `write-good` with no unresolved flags.

### Agent personas

- Create all 7 agent personas, adapted for the design system's service standard, content style guide, and component library.
- Each agent should reference SKILLS.md files using relative paths from the `agents/` directory.
- Every agent must ask "what is the user need?" when users propose custom patterns or deviations from the design system.
- Every agent must pair problems with solutions — never flag an issue without a recommendation or a link to guidance.
- Include links to the design system's service standard, content style guide, and frontend repo so agents verify against current sources.
- Write an agents `README.md` with an overview table and usage instructions.

### Configuration updates

- The lint scripts auto-discover `*-design-system` directories — no changes needed.
- Add the design system's VS Code snippet extension to `.vscode/extensions.json` (if one exists).
- Add relevant words to `.vscode/settings.json` write-good whitelist (if needed).
- Add licensing details to `LICENSE` for the new design system's content.

### Documentation updates

- Update `README.md`: add the new design system to the directory tree, agents section, and getting started section.
- Update `CHANGELOG.md` with a new version entry listing all additions.
- Update this `CONTRIBUTING.md` if the new design system introduces any unique requirements.

### Checklist

- [ ] All SKILLS.md files have valid YAML frontmatter with keys in alphabetical order
- [ ] All 7 agent personas have complete body content
- [ ] `docs/{prefix}/GUIDE.md` and `docs/{prefix}/INSTALL.md` created for the new design system
- [ ] agents/README.md created
- [ ] `npm test` passes (passive voice check)
- [ ] `npm run lint` reviewed (advisory)
- [ ] README.md, CHANGELOG.md, and CONTRIBUTING.md updated
- [ ] LICENSE updated with new content licensing
- [ ] Single clean commit, squashed from a fork

## Licence

Design system content (guidance, examples, and wording in `*-design-system/` SKILLS.md files) is Crown Copyright under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/). All other contributions (agent files, tooling, documentation) fall under the [MIT License](../LICENSE).
