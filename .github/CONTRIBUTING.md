# Contributing

Thank you for your interest in contributing to GOV.UK Design System Skills.

This project provides reference files (`SKILLS.md`) and agent personas for use with AI coding tools. Contributions that improve accuracy, coverage, or clarity are welcome.

---

## Before you start

- Check the [open issues](../../issues) to see if someone has already raised the same point.
- If you are proposing a new SKILLS.md file or a large change, open an issue first to discuss it.

---

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
- Example text that deliberately shows what not to write
- "only" as a necessary qualifier that restricts scope
- "minimum" as a technical term (e.g., "minimum target size")
- "requirement" when it means an actual rule

---

## `SKILLS.md` file format

Every `SKILLS.md` file must include YAML frontmatter at the top:

```yaml
---
category: components
description: One-line summary of the element.
govuk-frontend: "5.x"
last-reviewed: "2026-03-30"
name: Button
---
```

Keys must be in alphabetical order. Pattern files also include a `subcategory` field (`ask-users-for`, `help-users-to`, or `pages`).

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
10. `## Do / Don't`
11. `## Related Components / Patterns`

Not every section applies to every file. Omit sections that have no relevant content.

---

## Pull request checklist

Before opening a PR, confirm:

- [ ] You ran `write-good` against every file you changed and resolved all flags (or confirmed they are known false positives)
- [ ] YAML frontmatter is present with keys in alphabetical order
- [ ] `last-reviewed` date is updated to today
- [ ] Code examples use GOV.UK Frontend v5.x markup
- [ ] Nunjucks examples do not include import lines (the Prototype Kit handles imports)
- [ ] No new files without a corresponding issue or discussion

---

## Reporting issues

Use the issue templates to report:

- **Incorrect guidance** — a SKILLS.md file gives wrong advice, outdated markup, or missing macro options
- **New content request** — a component, pattern, or style that does not yet have a SKILLS.md file

---

## Code of conduct

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md). By participating, you agree to uphold it.

---

## Licence

GOV.UK Design System content (guidance, examples, and wording in `govuk-design-system/` SKILLS.md files) is Crown Copyright under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/). All other contributions (agent files, tooling, documentation) fall under the [MIT License](../LICENSE).
