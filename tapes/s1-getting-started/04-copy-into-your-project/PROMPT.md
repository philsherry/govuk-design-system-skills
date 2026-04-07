---
title: Copying skills into your own project
version: "1.0.0"
duration: ~90 seconds
---

## What this video shows

How to copy the `govuk-design-system-skills` files and agents into your own project so Claude Code picks them up automatically — no need to reference an external directory.

## What you will see

1. Creating the `.claude/agents` directory Claude Code expects
2. Copying all eight agent files into the project
3. Copying the full skills repository (four design systems with components, patterns, styles, foundations)
4. The resulting project structure with everything in place
5. An explanation of the CLAUDE.md file that ties it all together

## What you will need

- Copy `workspace.example.yaml` to `workspace.yaml`: `cp workspace.example.yaml workspace.yaml`
- Clone `govuk-design-system-skills` into `workspace/`: `npx -y degit philsherry/govuk-design-system-skills workspace/govuk-design-system-skills`
- A project directory to copy the files into

## Series wrap-up

This is the final episode in the getting started series. After this, your project has everything it needs — skills files, agents, and a `CLAUDE.md` file — for Claude Code to work with the GOV.UK Design System out of the box.
