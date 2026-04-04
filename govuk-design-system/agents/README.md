# GOV.UK Design System Agents

Discipline-specific Claude Code agent definitions for building and reviewing GOV.UK prototypes and services.

Each agent embodies a role from a GDS multidisciplinary team. Load an agent as a system prompt and it will review your work, answer questions, and guide your decisions from that discipline's perspective. Every agent references the [SKILLS.md files](../../README.md) as its knowledge base and grounds its advice in the [GOV.UK Service Standard](https://www.gov.uk/service-manual/service-standard).

---

## Agents

| Agent | Role | Focus |
|-------|------|-------|
| [Frontend developer](frontend-developer.md) | Senior GOV.UK frontend developer | Correct markup, GOV.UK Frontend API, progressive enhancement, Prototype Kit implementation |
| [Content designer](content-designer.md) | GOV.UK content designer | Plain English, GOV.UK style guide, error messages, question framing, reading level |
| [Interaction designer](interaction-designer.md) | GOV.UK interaction designer | User flows, pattern selection, one-thing-per-page, branching logic, service journeys |
| [Accessibility auditor](accessibility-auditor.md) | GOV.UK accessibility auditor | WCAG 2.2 compliance, ARIA, keyboard access, screen readers, focus states |
| [User researcher](user-researcher.md) | GOV.UK user researcher | Test planning, task writing, assumption identification, inclusive research |
| [Service designer](service-designer.md) | GOV.UK service designer | End-to-end service thinking, policy translation, channel strategy, assessment readiness |
| [Performance analyst](performance-analyst.md) | GOV.UK performance analyst | Core Web Vitals, page weight budgets, render-blocking resources, progressive enhancement verification |
| [QA tester](qa-tester.md) | GOV.UK QA tester | Testing strategy, edge cases, cross-browser, assistive technology, error coverage |

---

## How to use

### Load as a Claude Code agent

Each file is a Claude Code agent definition with YAML frontmatter. Reference it in your project's `.claude/agents/` directory or load it directly:

```bash
claude --agent agents/frontend-developer.md
```

### Load as LLM context

Open the agent file alongside the relevant `SKILLS.md` files to give your AI assistant both the reference knowledge and the discipline-specific perspective.

### Run a multidisciplinary review

Load agents in sequence to review a prototype from different angles:

1. **Interaction designer** — Is the flow right? Does it follow one-thing-per-page?
2. **Content designer** — Is the content clear, in plain English, with correct error messages?
3. **Frontend developer** — Is the markup correct? Does it use GOV.UK Frontend properly?
4. **Accessibility auditor** — Does it meet WCAG 2.2? Are forms accessible?
5. **Performance analyst** — Is the page within weight budget? Are there render-blocking resources?
6. **QA tester** — What test cases should you write? What edge cases have you missed?
7. **Service designer** — Does the prototype reflect the real end-to-end service?
8. **User researcher** — What assumptions need testing? Is the prototype ready for research?

### Pair two agents

Some combinations work well together:

- **Content designer + interaction designer** — Design a question page with the right flow and the right words
- **Frontend developer + accessibility auditor** — Build a component and verify it meets WCAG
- **Service designer + user researcher** — Plan what to prototype and what to test
- **Performance analyst + frontend developer** — Add a dependency or optimise a page with performance data guiding the decisions

---

## Roles not included

Government digital teams include roles beyond those listed above. Business Analysts, Delivery Managers, and Product Managers shape and steer the work, but they make decisions *about* work rather than producing artefacts an AI coding tool can generate or review. Their output — backlogs, roadmaps, team processes — sits outside the scope of SKILLS.md-driven guidance.

If you hold one of these roles and want to use the agents, start with the **service designer** — it covers the broadest view of how a service fits together and references the GOV.UK Service Standard, which underpins assessment readiness across all roles.

---

## How agents reference `SKILLS.md` files

Agents point to `SKILLS.md` files using relative paths from the `agents/` directory (e.g. `../components/button/SKILLS.md`). When an agent recommends a component or pattern, it directs you to the relevant `SKILLS.md` file for the full reference — code examples, macro options, accessibility requirements, and do and do not rules.

The agents provide judgement and discipline-specific perspective. The `SKILLS.md` files provide the detailed reference. Together, they give you both "what to build" and "how to build it right".

---

## Licence

Content from the [GOV.UK Design System](https://design-system.service.gov.uk/) and [GOV.UK Service Manual](https://www.gov.uk/service-manual), published under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).
