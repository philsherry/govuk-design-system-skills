# Design System Skills

Comprehensive `SKILLS.md` reference files for every style, component, and pattern in the GOV.UK and NHS UK Design Systems, and the HMRC Design Patterns.

These files provide LLM context for use when prototyping and building government services. Each `SKILLS.md` file provides a focused, machine-readable reference for a single design system element — covering usage guidance, code examples, macro options, accessibility requirements, and do and do not rules. Load them into your AI assistant or IDE extension, or concatenate them to build a complete design system context for your project.

Based on the [GOV.UK Design System](https://design-system.service.gov.uk/), [GOV.UK Frontend](https://github.com/alphagov/govuk-frontend), the [NHS UK Design System](https://service-manual.nhs.uk/design-system), [NHS UK Frontend](https://github.com/nhsuk/nhsuk-frontend), the [HMRC Design Patterns](https://design.tax.service.gov.uk/hmrc-design-patterns/), and [HMRC Frontend](https://github.com/hmrc/hmrc-frontend).

## Getting started

**[INSTALL.md](INSTALL.md)** — Set up the skills files with your AI tool. Covers Claude Code, Cursor, GitHub Copilot, Continue.dev, ChatGPT, and Claude.ai with step-by-step instructions.

**[GUIDE.md](GUIDE.md)** — How to put it all together. Agent workflows, tips, and how to get the best results.

Each design system also has its own pages with specific prompts, file recommendations, and setup snippets:

| Design system | Setup details | Usage guide |
|---------------|---------------|-------------|
| GOV.UK | [docs/govuk/INSTALL.md](docs/govuk/INSTALL.md) | [docs/govuk/GUIDE.md](docs/govuk/GUIDE.md) |
| NHS UK | [docs/nhsuk/INSTALL.md](docs/nhsuk/INSTALL.md) | [docs/nhsuk/GUIDE.md](docs/nhsuk/GUIDE.md) |
| HMRC | [docs/hmrc/INSTALL.md](docs/hmrc/INSTALL.md) | [docs/hmrc/GUIDE.md](docs/hmrc/GUIDE.md) |

<details>
  <summary>Directory tree</summary>

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
  │       ├── lint.yml
  │       └── release.yml
  ├── CHANGELOG.md
  ├── CLAUDE.md
  ├── GUIDE.md
  ├── INSTALL.md
  ├── LICENSE
  ├── README.md
  ├── package.json
  ├── docs/
  │   ├── AUDIT_EXAMPLE.md
  │   ├── govuk/
  │   │   ├── GUIDE.md
  │   │   └── INSTALL.md
  │   └── nhsuk/
  │       ├── GUIDE.md
  │       └── INSTALL.md
  ├── govuk-design-system/
  │   ├── agents/
  │   │   ├── README.md
  │   │   ├── accessibility-auditor.md
  │   │   ├── content-designer.md
  │   │   ├── frontend-developer.md
  │   │   ├── interaction-designer.md
  │   │   ├── qa-tester.md
  │   │   ├── service-designer.md
  │   │   └── user-researcher.md
  │   ├── accessibility/
  │   │   └── SKILLS.md
  │   ├── foundations/
  │   │   ├── SKILLS.md
  │   │   ├── govuk-frontend/SKILLS.md
  │   │   └── prototype-kit/SKILLS.md
  │   ├── styles/
  │   │   └── [13 SKILLS.md files]
  │   ├── components/
  │   │   └── [33 SKILLS.md files]
  │   └── patterns/
  │       ├── ask-users-for/ [10 SKILLS.md files]
  │       ├── help-users-to/ [12 SKILLS.md files]
  │       └── pages/ [7 SKILLS.md files]
  ├── nhsuk-design-system/
  │   ├── agents/
  │   │   ├── README.md
  │   │   ├── accessibility-auditor.md
  │   │   ├── content-designer.md
  │   │   ├── frontend-developer.md
  │   │   ├── interaction-designer.md
  │   │   ├── qa-tester.md
  │   │   ├── service-designer.md
  │   │   └── user-researcher.md
  │   ├── accessibility/
  │   │   └── SKILLS.md
  │   ├── foundations/
  │   │   ├── SKILLS.md
  │   │   ├── nhsuk-frontend/SKILLS.md
  │   │   └── prototype-kit/SKILLS.md
  │   ├── styles/
  │   │   └── [8 SKILLS.md files]
  │   ├── components/
  │   │   └── [38 SKILLS.md files]
  │   └── patterns/
  │       ├── ask-users-for/ [1 SKILLS.md file]
  │       ├── help-users-to/ [5 SKILLS.md files]
  │       └── pages/ [6 SKILLS.md files]
  └── hmrc-design-patterns/
      ├── agents/
      │   ├── README.md
      │   ├── accessibility-auditor.md
      │   ├── content-designer.md
      │   ├── frontend-developer.md
      │   ├── interaction-designer.md
      │   ├── qa-tester.md
      │   ├── service-designer.md
      │   └── user-researcher.md
      ├── foundations/
      │   ├── SKILLS.md
      │   └── hmrc-frontend/SKILLS.md
      ├── identifiers/ [5 SKILLS.md files]
      ├── service/ [12 SKILLS.md files]
      ├── identity/ [3 SKILLS.md files]
      ├── headers/ [6 SKILLS.md files]
      └── pages/ [3 SKILLS.md files]
  ```

</details>

## How to use the skills files

**Load individual files as LLM context**
Open the `SKILLS.md` file for the component you are working with and attach it to your conversation. The structured format gives the model precise, design-system-specific knowledge.

**Concatenate relevant files**
When building a full page or flow, concatenate the `SKILLS.md` files for every component and pattern involved. For example, an NHS question page might combine `nhsuk-design-system/patterns/pages/question-pages`, `nhsuk-design-system/components/text-input`, `nhsuk-design-system/components/error-message`, `nhsuk-design-system/components/error-summary`, and `nhsuk-design-system/components/button`.

**Reference when building services**
Use these files as a checklist during development and code review. Each file captures the full usage guidance, so you can verify your implementation against the design system without switching to a browser.

**Works with any AI assistant or IDE extension**
The plain Markdown format works with any tool that accepts file context — Claude, ChatGPT, GitHub Copilot, Cursor, Continue, and others. No special tooling required.

## `SKILLS.md` file format

Each `SKILLS.md` file follows a consistent structure, making it straightforward to parse, scan, and use as LLM context.

```markdown
## Overview

A short description of the element — what it does, what problem it solves,
and where it sits in the design system (style, component, or pattern).

## When to use

The specific circumstances in which to use this element, drawn from design
system guidance. Includes conditions and prerequisites.

## When not to use

Circumstances in which this element is not appropriate. Often includes
alternative approaches.

## How it works

A detailed explanation of the element's behaviour, variants, states, and any
JavaScript dependencies. Covers defaults, edge cases, and interactions with
other components.

## Code Examples

### HTML
The rendered markup, suitable for use in any HTML template or static site.

### Nunjucks
The macro call used in Express.js projects and the Prototype Kit.

## Nunjucks Macro Options

A Markdown table of every parameter the Nunjucks macro accepts, with columns
for name, type, required/optional, and description.

## Error Messages

For form components: the standard error message wording recommended by the
design system, including examples for common validation scenarios.

## Accessibility

Specific accessibility requirements, ARIA roles, keyboard interactions,
screen reader behaviour, and any known assistive technology considerations
for this element.

## Do and Do not

A concise paired list of recommended practices and anti-patterns, derived
from design system guidance and research.

## Related Components / Patterns

Links to related components, patterns, and styles commonly used alongside
or instead of this element.
```

Not every section applies to every file. Omit sections that have no relevant content.

## Agents

Each design system directory contains its own Claude Code agent definitions for 7 multidisciplinary team roles: frontend developer, content designer, interaction designer, accessibility auditor, user researcher, service designer, and QA tester. Each agent reviews your work from its discipline's perspective, referencing the `SKILLS.md` files as its knowledge base.

- **GOV.UK agents**: See [govuk-design-system/agents/README.md](govuk-design-system/agents/README.md) — grounded in the [GOV.UK Service Standard](https://www.gov.uk/service-manual/service-standard)
- **NHS UK agents**: See [nhsuk-design-system/agents/README.md](nhsuk-design-system/agents/README.md) — grounded in the [NHS Digital Service Manual](https://service-manual.nhs.uk/)
- **HMRC agents**: See [hmrc-design-patterns/agents/README.md](hmrc-design-patterns/agents/README.md) — grounded in both the GOV.UK Service Standard and [HMRC Design Patterns](https://design.tax.service.gov.uk/)

## Accessibility audit snippets

The `.vscode/audit.code-snippets` file provides VS Code snippets for writing consistent accessibility audit reports. Type the prefix in a markdown file and VS Code expands the snippet with tab stops for each field.

**Report structure snippets:**

| Prefix | What it creates |
|--------|----------------|
| `summ_exec` | Executive summary with auditor name, service name, and date |
| `summ_vib` | Results summary table |
| `audit_issue` | Issue template with WCAG violation, description, impact, recommendation, and code example |
| `audit_obs` | Observation with impact and recommendation |
| `report_recs` | Recommendations section heading |
| `report_suggs` | Suggestions section heading |
| `appx_reading` | Appendix with recommended reading links |
| `appx_writing` | Appendix with references used during the audit |

**WCAG criteria snippets:**

| Prefix | What it creates |
|--------|----------------|
| `report_wcag_table` | Complete WCAG 2.2 criteria table with pass/fail scoring (all levels through AAA) |
| `sc_1_1_1` through `sc_4_1_3` | Individual criterion row with status, level, and Quick Reference link |
| `sc_title_*` | Criterion title as a markdown heading (e.g. `sc_title_1_3_1_info_and_relationships`) |

**User journey snippets:**

| Prefix | What it creates |
|--------|----------------|
| `uj` | User journey heading |
| `ujd` | User journey description |
| `ujsc` | User journey screenshot |
| `ujse` | User journey step with error |
| `ujss` | User journey step with success |

The issue template enforces the "problem + solution" pattern — every issue includes a Description, Impact, and Recommendation field, so nobody can log a problem without also thinking about the fix.

See [docs/AUDIT_EXAMPLE.md](docs/AUDIT_EXAMPLE.md) for a worked example showing what a completed audit report looks like using these snippets.

## Releases

This repo auto-tags releases from `main` when a merged release PR updates both
`CHANGELOG.md` and `package.json`. The existing release workflow then publishes
the GitHub Release from the matching changelog entry.

1. Update `CHANGELOG.md`, `package.json`, and `package-lock.json` in your release PR.
2. Merge to `main`.
3. Wait for the `tag-release.yml` workflow to create and push the semantic
  version tag automatically.

The `tag-release.yml` workflow reads the version from `package.json`, checks
that `CHANGELOG.md` has a matching heading such as `## [1.2.0]`, and pushes a
tag like `v1.2.0`.

The `release.yml` workflow then reads the matching `CHANGELOG.md` section for
`1.2.0` and publishes the GitHub Release with that body.

If you want to check the release metadata before opening or merging the PR, run:

```bash
npm run release:check
```

If you want to preview the generated release notes locally, run:

```bash
npm run release:notes -- 1.2.0
```

## Licence

This project uses two licences:

- **Design system content** (guidance, examples, and wording in `govuk-design-system/`, `nhsuk-design-system/`, and `hmrc-design-patterns/` SKILLS.md files) is Crown Copyright, published under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).
- **Everything else** (file structure, frontmatter schema, agent personas, documentation) uses the [MIT License](LICENSE).
