# NHS UK Design System Agents

Discipline-specific Claude Code agent definitions for building and reviewing NHS digital service prototypes.

Each agent embodies a role from a multidisciplinary team. Load an agent as a system prompt and it will review your work, answer questions, and guide your decisions from that discipline's perspective. Every agent references the [SKILLS.md files](../README.md) as its knowledge base and grounds its advice in the [NHS Digital Service Manual](https://service-manual.nhs.uk/).

---

## Agents

| Agent | Role | Focus |
|-------|------|-------|
| [Frontend developer](frontend-developer.md) | Senior NHS UK frontend developer | Correct markup, NHS UK Frontend API, progressive enhancement, Prototype Kit implementation |
| [Content designer](content-designer.md) | NHS content designer | Plain English, NHS content style guide, error messages, health literacy, question framing |
| [Interaction designer](interaction-designer.md) | NHS interaction designer | User flows, pattern selection, one-thing-per-page, branching logic, health service journeys |
| [Accessibility auditor](accessibility-auditor.md) | NHS accessibility auditor | WCAG 2.2 compliance, ARIA, keyboard access, screen readers, focus states |
| [User researcher](user-researcher.md) | NHS user researcher | Test planning, task writing, assumption identification, inclusive research, health research ethics |
| [Service designer](service-designer.md) | NHS service designer | End-to-end service thinking, clinical pathway translation, channel strategy, assessment readiness |
| [QA tester](qa-tester.md) | NHS QA tester | Testing strategy, edge cases, cross-browser, assistive technology, error coverage |

---

## How to use

### Load as a Claude Code agent

Each file is a Claude Code agent definition with YAML frontmatter. Reference it in your project's `.claude/agents/` directory or load it directly:

```bash
claude --agent nhsuk-design-system/agents/frontend-developer.md
```

### Load as LLM context

Open the agent file alongside the relevant `SKILLS.md` files to give your AI assistant both the reference knowledge and the discipline-specific perspective.

### Run a multidisciplinary review

Load agents in sequence to review a prototype from different angles:

1. **Interaction designer** — Does the flow follow NHS patterns? Does it handle urgent care routing?
2. **Content designer** — Does the content follow the NHS content style guide? Does it support health literacy?
3. **Frontend developer** — Does the markup use NHS UK Frontend properly? Does it work without JavaScript?
4. **Accessibility auditor** — Does it meet WCAG 2.2? Does it work with screen readers?
5. **QA tester** — What test cases should you write? What edge cases have you missed?
6. **Service designer** — Does the prototype reflect the real end-to-end service, including clinical steps?
7. **User researcher** — What assumptions need testing? Does the prototype have realistic health content?

### Pair two agents

Some combinations work well together:

- **Content designer + interaction designer** — Design a triage flow with the right questions and the right words
- **Frontend developer + accessibility auditor** — Build a component and verify it meets WCAG
- **Service designer + user researcher** — Plan what to prototype and what to test

---

## How agents reference `SKILLS.md` files

Agents point to `SKILLS.md` files using relative paths from the `agents/` directory (e.g. `../components/button/SKILLS.md`). When an agent recommends a component or pattern, it directs you to the relevant `SKILLS.md` file for the full reference — code examples, macro options, accessibility requirements, and do and do not rules.

The agents provide judgement and discipline-specific perspective. The `SKILLS.md` files provide the detailed reference. Together, they give you both "what to build" and "how to build it right".

---

## Licence

Content from the [NHS UK Design System](https://service-manual.nhs.uk/design-system) and [NHS Digital Service Manual](https://service-manual.nhs.uk/), published under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).
