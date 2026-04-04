# DWP Design System Agents

Discipline-specific Claude Code agent definitions for building and reviewing DWP services and prototypes.

Each agent embodies a role from a multidisciplinary team working on DWP services. Load an agent as a system prompt and it will review your work, answer questions, and guide your decisions from that discipline's perspective. Every agent references both [DWP Design System foundations guidance](../foundations/SKILLS.md) and [GOV.UK Design System foundations guidance](../../govuk-design-system/foundations/SKILLS.md) as its knowledge base, and grounds its advice in the [GOV.UK Service Standard](https://www.gov.uk/service-manual/service-standard).

---

## Agents

| Agent | Role | Focus |
|-------|------|-------|
| [Frontend developer](frontend-developer.md) | DWP frontend developer | Correct markup, govuk-frontend and dwp-frontend APIs, progressive enhancement, Prototype Kit implementation |
| [Content designer](content-designer.md) | DWP content designer | Plain English for benefits content, Welsh language, error messages, benefits terminology, reading level |
| [Interaction designer](interaction-designer.md) | DWP interaction designer | User flows, pattern selection, benefits service journeys, session timeout, address lookup, add-another patterns |
| [Accessibility auditor](accessibility-auditor.md) | DWP accessibility auditor | WCAG 2.2 compliance, ARIA, keyboard access, screen readers, DWP Accessibility Manual, SCULPT framework |
| [Performance analyst](performance-analyst.md) | DWP performance analyst | Core Web Vitals, page weight budgets, dual-library costs, internal service data interface performance |
| [User researcher](user-researcher.md) | DWP user researcher | Test planning, task writing, benefits-specific assumptions, inclusive research, financial hardship contexts |
| [Service designer](service-designer.md) | DWP service designer | End-to-end benefits service thinking, cross-department dependencies, channel strategy, assessment readiness |
| [QA tester](qa-tester.md) | DWP QA tester | Testing strategy, session timeout, Welsh language, address lookup, assistive technology testing |

---

## Dual-system context

DWP agents know two design systems:

- **GOV.UK Design System** — core components (`govuk-` class prefix) used across all government services: buttons, form groups, radios, checkboxes, error summaries, and standard patterns
- **DWP Design System** — DWP-specific extensions (`dwp-` class prefix): internal service header and footer, navigation components, timeline, quick reference, language toggle, and DWP patterns

Agents reference SKILLS.md files from both systems. From the `agents/` directory, paths follow this structure:

- DWP components: `../components/internal-service-header/SKILLS.md`, `../components/timeline/SKILLS.md`, `../components/side-navigation/SKILLS.md`
- DWP patterns: `../patterns/manage-a-session-timeout/SKILLS.md`, `../patterns/toggle-to-welsh/SKILLS.md`
- GOV.UK components: `../../govuk-design-system/components/button/SKILLS.md`, `../../govuk-design-system/patterns/ask-users-for/dates/SKILLS.md`

---

## Internal vs public-facing services

DWP agents understand that DWP builds both citizen-facing and staff-facing services:

- **Public-facing** services on `service.gov.uk` use GOV.UK header, footer, and branding
- **Internal** (agent-facing) services use DWP internal service header, footer, and page template — no GOV.UK branding

Both contexts have the same accessibility obligations under the Public Sector Bodies Accessibility Regulations 2018.

---

## DWP Accessibility Manual

DWP maintains a standalone [Accessibility Manual](https://accessibility-manual.dwp.gov.uk/) with role-based guidance for each discipline. Every DWP agent references the corresponding role page from the manual, providing richer accessibility context than the GOV.UK or NHS design systems offer.

---

## How to use

### Load as a Claude Code agent

Each file is a Claude Code agent definition with YAML frontmatter. Reference it in your project's `.claude/agents/` directory or load it directly:

```bash
claude --agent dwp-design-system/agents/frontend-developer.md
```

### Load as LLM context

Open the agent file alongside the relevant `SKILLS.md` files to give your AI assistant both the reference knowledge and the discipline-specific perspective.

### Run a multidisciplinary review

Load agents in sequence to review a prototype from different angles:

1. **Interaction designer** — Does the flow handle session timeout, address lookup, and benefits eligibility branching?
2. **Content designer** — Does the content explain benefits terms? Do error messages help users recover? Does Welsh content work?
3. **Frontend developer** — Does the markup use govuk-frontend and dwp-frontend components as specified?
4. **Accessibility auditor** — Does it meet WCAG 2.2? Does the DWP Accessibility Manual flag any role-specific gaps?
5. **Performance analyst** — What is the combined library cost? Do data-heavy internal pages stay within budget?
6. **QA tester** — Does the timeout dialog work? Does the Welsh toggle switch all content? Does the address lookup handle edge cases?
7. **Service designer** — Does the prototype reflect the real end-to-end benefits journey, including cross-department steps?
8. **User researcher** — What assumptions about benefits knowledge need testing? Does the prototype work for users in financial hardship?

### Pair two agents

Some combinations work well together:

- **Content designer + user researcher** — Write realistic benefits content and plan how to test whether users understand it
- **Frontend developer + accessibility auditor** — Build DWP components and verify they meet WCAG
- **Service designer + interaction designer** — Map the end-to-end benefits journey and design the digital flows within it
- **Performance analyst + frontend developer** — Evaluate the combined weight of govuk-frontend and dwp-frontend, or optimise data-heavy internal pages

---

## Roles not included

Government digital teams include roles beyond those listed above. Business Analysts, Delivery Managers, and Product Managers shape and steer the work, but they make decisions *about* work rather than producing artefacts an AI coding tool can generate or review. Their output — backlogs, roadmaps, team processes — sits outside the scope of SKILLS.md-driven guidance.

If you hold one of these roles and want to use the agents, start with the **service designer** — it covers the broadest view of how a service fits together and references the GOV.UK Service Standard, which underpins assessment readiness across all roles.

---

## How agents reference `SKILLS.md` files

Agents point to `SKILLS.md` files using relative paths from the `agents/` directory (e.g. `../components/timeline/SKILLS.md`). When an agent recommends a component or pattern, it directs you to the relevant `SKILLS.md` file for the full reference — code examples, macro options, accessibility requirements, and do and do not rules.

The agents provide judgement and discipline-specific perspective. The `SKILLS.md` files provide the detailed reference. Together, they give you both "what to build" and "how to build it right".

---

## Licence

Content from the [DWP Design System](https://design-system.dwp.gov.uk/), [DWP Accessibility Manual](https://accessibility-manual.dwp.gov.uk/), and the [GOV.UK Design System](https://design-system.service.gov.uk/), published under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/).
