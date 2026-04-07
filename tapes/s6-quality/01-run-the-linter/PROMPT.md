---
title: Run the linter
version: "1.0.0"
duration: ~90 seconds
---

## What this video shows

The passive voice linter that enforces active voice across all skills files and agent files. Covers what it checks, how it filters false positives, what a passing and failing run look like, and the difference between the strict gate (npm test) and the advisory check (npm run lint).

## What you will see

1. A passing npm test run across all files
2. Inside the linter script — the seven false positive filters
3. What a failure looks like and how to fix it
4. The broader npm run lint check for weasel words and readability

## What you will need

- Copy `workspace.example.yaml` to `workspace.yaml`: `cp workspace.example.yaml workspace.yaml`
- Clone `govuk-design-system-skills` into `workspace/`: `npx -y degit philsherry/govuk-design-system-skills workspace/govuk-design-system-skills`
- npm installed

## What comes next

The next video covers the `SKILLS.md` format — the anatomy of a skills file
and how to write one from scratch.
