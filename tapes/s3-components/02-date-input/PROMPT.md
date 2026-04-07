---
title: Date input with validation
version: "1.0.0"
duration: ~90 seconds
---

## What this video shows

The date input component — a common source of mistakes when AI assistants generate GOV.UK markup. Covers the three-field pattern, selective error highlighting on individual fields, and the prescribed error messages for every validation failure case.

## What you will see

1. The three-field pattern (day, month, year as separate inputs)
2. The default code example with width classes and namePrefix
3. Error states that highlight only the affected fields
4. The prescribed error message wording for every failure case
5. Accessibility rules including `inputmode` numeric and server-side validation

## What you will need

- Copy `workspace.example.yaml` to `workspace.yaml`: `cp workspace.example.yaml workspace.yaml`
- Clone `govuk-design-system-skills` into `workspace/`: `npx -y degit philsherry/govuk-design-system-skills workspace/govuk-design-system-skills`

## What comes next

The next video shows how two components — error message and error summary — work together as a pair, one inline and one at the top of the page.
