---
title: Setting up govuk-design-system-skills with Cursor
version: "1.0.0"
duration: ~60 seconds
---

## What this video shows

How to setup `govuk-design-system-skills` with Cursor. The skills files
go into `.cursor/rules/` — Cursor indexes them and applies them when you
edit HTML or Nunjucks files in your prototype.

## What you will see

1. Creating the `.cursor/rules/` directory
2. Copying components, styles, and patterns into it
3. The resulting directory structure
4. An explanation of the `govuk.mdc` rules file

## What you will need

- Copy `workspace.example.yaml` to `workspace.yaml`: `cp workspace.example.yaml workspace.yaml`
- Clone `govuk-design-system-skills` into `workspace/`: `npx -y degit philsherry/govuk-design-system-skills workspace/govuk-design-system-skills`
- A project directory to copy the files into
- Cursor installed

## What comes next

The next video covers the same setup for GitHub Copilot, which reads from `.github/copilot-instructions.md` instead of a rules directory.
