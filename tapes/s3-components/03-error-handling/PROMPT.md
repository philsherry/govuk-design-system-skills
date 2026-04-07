---
title: "Error handling: error message and error summary together"
version: "1.0.0"
duration: ~2 minutes
---

## What this video shows

How two GOV.UK components work together to handle form validation errors. The error message component provides inline feedback next to each field. The error summary component provides a linked list at the top of the page. Both must be present, and the wording must match.

## What you will see

1. The error message component — inline errors with a visually hidden "Error" prefix
2. Prescribed wording rules — tell users what went wrong and how to fix it
3. The Related section pointing at error summary
4. The error summary component — role alert, auto-focus, link-to-field pattern
5. The matching cross-reference back to error message
6. Why both components must appear together

## What you will need

- Copy `workspace.example.yaml` to `workspace.yaml`: `cp workspace.example.yaml workspace.yaml`
- Clone `govuk-design-system-skills` into `workspace/`: `npx -y degit philsherry/govuk-design-system-skills workspace/govuk-design-system-skills`

## Series wrap-up

This is the final episode in the components series. Each video showed a different strength of the skills files: the button covered variants and accessibility rules, the date input covered prescribed error messages, and this one showed how two components connect to form a complete pattern.
