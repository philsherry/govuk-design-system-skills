---
title: Setting up govuk-design-system-skills with GitHub Copilot
version: "1.0.0"
duration: ~60 seconds
---

## What this video shows

How to setup `govuk-design-system-skills` with GitHub Copilot in VS Code.
Copilot reads project-wide instructions from `.github/copilot-instructions.md`
and context-specific instructions from `.github/instructions/`.

## What you will see

1. Creating the `.github/instructions/` directory
2. Copying skills files into `docs/govuk/` so Copilot indexes them
3. The resulting `.github/` directory structure
4. An explanation of the two instruction files and how to fill them in

## What you will need

- Copy `workspace.example.yaml` to `workspace.yaml`: `cp workspace.example.yaml workspace.yaml`
- Clone `govuk-design-system-skills` into `workspace/`: `npx -y degit philsherry/govuk-design-system-skills workspace/govuk-design-system-skills`
- A project directory to copy the files into
- GitHub Copilot installed in VS Code

## What comes next

The next video covers Claude.ai on the web. That setup is different — you attach files to a Claude.ai Project rather than copying them into your repository.
