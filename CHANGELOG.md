# Changelog

All notable changes to this project appear in this file.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

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
