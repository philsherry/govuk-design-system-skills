# Changelog

All notable changes to this project appear in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [1.2.1] — 2026-04-03

### Added

- `tag-release.yml` to create and push a semantic version tag when a release PR merges to `main`
- `scripts/check-release-version.js` and `npm run release:check` to verify version alignment across `package.json`, `package-lock.json`, and `CHANGELOG.md`

### Changed

- Updated the lint workflow to run the release metadata check on pull requests
- Updated release documentation in `README.md`, `GUIDE.md`, and `.github/CONTRIBUTING.md` to reflect automatic tagging
- Bumped the package version to `1.2.1`

## [1.2.0] — 2026-04-03

### Added

- Full `hmrc-design-patterns/` coverage: 29 patterns across 5 categories (identifiers, service, identity, headers, pages) and 2 foundations files
- 7 HMRC agent personas adapted for HMRC's dual-system context (GOV.UK + HMRC)
- `hmrc-design-patterns/agents/README.md` with HMRC agent guidance
- `docs/hmrc/GUIDE.md` and `docs/hmrc/INSTALL.md` for HMRC usage and setup
- HMRC Design Patterns licensing in `LICENSE`

### Changed

- Updated lint discovery in `scripts/lint-write-good.js` to scan `*-design-patterns` directories alongside `*-design-system`
- Added `hmrc-design-patterns/**/*.md` to the lint workflow path trigger
- Updated `README.md` with HMRC directory tree, getting started row, and licence section
- Bumped the package version to `1.2.0`

## [1.1.1] — 2026-04-03

### Added

- `.github/workflows/release.yml` to publish GitHub Releases when we push a `v*.*.*` tag
- `scripts/release-notes-from-changelog.js` to extract release notes from `CHANGELOG.md`
- Release workflow guidance in `README.md`, `GUIDE.md`, and `.github/CONTRIBUTING.md`

### Changed

- Bumped the package version to `1.1.1`

## [1.1.0] — 2026-04-03

### Added

- Full `nhsuk-design-system/` coverage: 38 components, 8 styles, 12 patterns, 3 foundations, and 1 accessibility guide
- 7 NHS UK agent personas adapted for the NHS Digital Service Manual
- `nhsuk-design-system/agents/README.md` with NHS agent guidance
- `docs/nhsuk/GUIDE.md` and `docs/nhsuk/INSTALL.md` for NHS UK usage and setup
- `docs/govuk/GUIDE.md` and `docs/govuk/INSTALL.md` for GOV.UK-specific usage and setup
- `docs/AUDIT_EXAMPLE.md` and `.vscode/audit.code-snippets` for accessibility audit workflows
- `markdownlint-cli`, `npm run lint:md`, `.vale.ini`, and a `postinstall` Vale sync step
- `source` and `keywords` frontmatter fields across all `SKILLS.md` files
- WCAG 2.2, WAI-ARIA, frontend repo, prototype kit, and service manual links across guidance and agents
- "What is the user need?" and custom pattern guidance across all 14 agent personas
- NHS UK Design System licensing in `LICENSE`
- "Adding a new design system" guidance in `CONTRIBUTING.md`
- Markdown and gitignore updates for the new docs and tooling

### Changed

- Moved `agents/` into `govuk-design-system/agents/` so each design system owns its agents
- Reworked `README.md` so getting started appears first and the directory tree sits in a collapsible section
- Updated lint discovery in `scripts/lint-write-good.js` and `package.json` to scan `*-design-system` directories
- Updated `CLAUDE.md` wording and examples to work across both design systems
- Updated `last-reviewed` dates to 2026-04-03 across all `SKILLS.md` files
- Enabled markdownlint MD012 and removed horizontal rules from content files
- Standardised NHS blockquotes and Nunjucks parameter casing in details and expander components
- Cleaned filler words from auto-generated keywords across 26 files
- Bumped the package version to `1.1.0`

## [1.0.0] — 2026-03-30

### Added

- YAML frontmatter to all `SKILLS.md` files (category, description, govuk-frontend, last-reviewed, name, subcategory for patterns)
- `govuk-design-system/` parent directory for all skills content (accessibility, components, foundations, patterns, styles)
- `INSTALL.md` — per-tool setup instructions split from `GUIDE.md`
- `GUIDE.md` — usage guidance, example prompts, and agent workflows
- `.github/` community health files: `CONTRIBUTING.md`, `CODE_OF_CONDUCT.md`, `SUPPORT.md`, PR template, issue templates
- `LICENSE` (MIT for original work, OGL v3.0 for GOV.UK Design System content)
- `package.json` with `write-good` as a dev dependency and lint scripts
- GitHub Actions workflow to run `write-good` on pull requests
- `.editorconfig` for consistent formatting
- Active voice throughout all `govuk-design-system/patterns/` and `govuk-design-system/styles/` `SKILLS.md` files
- Dual-licence notice in `README.md` with links to `INSTALL.md` and `GUIDE.md`
