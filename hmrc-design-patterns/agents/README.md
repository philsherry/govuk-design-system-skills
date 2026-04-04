# HMRC Design Patterns Agents

Discipline-specific Claude Code agent definitions for building and reviewing HMRC tax services and prototypes.

Each agent embodies a role from a multidisciplinary team working on HMRC services. Load an agent as a system prompt and it will review your work, answer questions, and guide your decisions from that discipline's perspective. Every agent references both [HMRC Design Patterns foundations guidance](../foundations/SKILLS.md) and [GOV.UK Design System foundations guidance](../../govuk-design-system/foundations/SKILLS.md) as its knowledge base, and grounds its advice in the [GOV.UK Service Standard](https://www.gov.uk/service-manual/service-standard).

---

## Agents

| Agent | Role | Focus |
|-------|------|-------|
| [Frontend developer](frontend-developer.md) | HMRC frontend developer | Correct markup, govuk-frontend and hmrc-frontend APIs, progressive enhancement, Prototype Kit implementation |
| [Content designer](content-designer.md) | HMRC content designer | Plain English for tax content, Welsh language, error messages, tax terminology, reading level |
| [Interaction designer](interaction-designer.md) | HMRC interaction designer | User flows, pattern selection, tax service journeys, identity verification flows, timeout handling |
| [Accessibility auditor](accessibility-auditor.md) | HMRC accessibility auditor | WCAG 2.2 compliance, ARIA, keyboard access, screen readers, focus states, accessibility statements |
| [User researcher](user-researcher.md) | HMRC user researcher | Test planning, task writing, tax-specific assumptions, inclusive research, Accessibility Empathy Hub |
| [Service designer](service-designer.md) | HMRC service designer | End-to-end tax service thinking, cross-department dependencies, identity verification, channel strategy |
| [Performance analyst](performance-analyst.md) | HMRC performance analyst | Core Web Vitals, page weight budgets, dual-library costs, multi-step form journey performance |
| [QA tester](qa-tester.md) | HMRC QA tester | Testing strategy, timeout dialog, Welsh language, currency input, tax identifier validation |

---

## Dual-system context

HMRC agents know two design systems:

- **GOV.UK Design System** — core components (`govuk-` class prefix) used across all government services: buttons, form groups, radios, checkboxes, error summaries, and standard patterns
- **HMRC Design Patterns** — tax-specific extensions (`hmrc-` class prefix): currency input, tax identifiers, timeout dialog, Welsh language toggle, and HMRC page patterns

Agents reference SKILLS.md files from both systems. From the `agents/` directory, paths follow this structure:

- HMRC patterns: `../identifiers/accounts-office-reference/SKILLS.md`, `../service/currency-input/SKILLS.md`, `../identity/confirmed-identity/SKILLS.md`
- GOV.UK components: `../../govuk-design-system/components/button/SKILLS.md`, `../../govuk-design-system/patterns/ask-users-for/dates/SKILLS.md`

---

## How to use

### Load as a Claude Code agent

Each file is a Claude Code agent definition with YAML frontmatter. Reference it in your project's `.claude/agents/` directory or load it directly:

```bash
claude --agent agents/qa-tester.md
```

### Load as LLM context

Open the agent file alongside the relevant SKILLS.md files to give your AI assistant both the reference knowledge and the discipline-specific perspective.

### Run a multidisciplinary review

Load agents in sequence to review a prototype from different angles:

1. **Interaction designer** — Does the flow handle identity verification, timeout, and branching?
2. **Content designer** — Does the content explain tax terms? Do error messages help users recover? Does Welsh content work?
3. **Frontend developer** — Does the markup use govuk-frontend and hmrc-frontend components as specified?
4. **Accessibility auditor** — Does it meet WCAG 2.2? Does the accessibility statement YAML file cover all required fields?
5. **Performance analyst** — What is the combined govuk-frontend and hmrc-frontend cost? Do multi-step journeys stay within budget?
6. **QA tester** — Does the timeout dialog work? Do tax identifiers validate? Does the Welsh toggle switch all content?
7. **Service designer** — Does the prototype reflect the real end-to-end tax journey, including identity and offline steps?
8. **User researcher** — What assumptions about tax knowledge need testing? Does the prototype work for all user groups?

### Pair two agents

Some combinations work well together:

- **Content designer + user researcher** — Write realistic tax content and plan how to test whether users understand it
- **Frontend developer + accessibility auditor** — Build HMRC components and verify they meet WCAG
- **Service designer + interaction designer** — Map the end-to-end tax journey and design the digital flows within it
- **Performance analyst + frontend developer** — Evaluate the combined weight of govuk-frontend and hmrc-frontend, or optimise multi-step form journeys

---

## Roles not included

Government digital teams include roles beyond those listed above. Business Analysts, Delivery Managers, and Product Managers shape and steer the work, but they make decisions *about* work rather than producing artefacts an AI coding tool can generate or review. Their output — backlogs, roadmaps, team processes — sits outside the scope of SKILLS.md-driven guidance.

If you hold one of these roles and want to use the agents, start with the **service designer** — it covers the broadest view of how a service fits together and references the GOV.UK Service Standard, which underpins assessment readiness across all roles.

---

## How agents reference `SKILLS.md` files

Agents point to `SKILLS.md` files using relative paths from the `agents/` directory. HMRC agents reference two sets of files:

- HMRC patterns: `../identifiers/accounts-office-reference/SKILLS.md`, `../service/currency-input/SKILLS.md`
- GOV.UK components: `../../govuk-design-system/components/button/SKILLS.md`, `../../govuk-design-system/patterns/ask-users-for/dates/SKILLS.md`

When an agent recommends a component or pattern, it directs you to the relevant `SKILLS.md` file for the full reference — code examples, macro options, accessibility requirements, and do and do not rules.

The agents provide judgement and discipline-specific perspective. The `SKILLS.md` files provide the detailed reference. Together, they give you both "what to build" and "how to build it right".

---

## Licence

Content from [HMRC Design Patterns](https://design.tax.service.gov.uk/) and the [GOV.UK Design System](https://design-system.service.gov.uk/), published under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).
