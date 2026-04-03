---
category: foundations
description: Core design principles, technology stack, and guidance for building NHS digital services.
keywords:
  - "Nunjucks"
  - "POUR"
  - "Sass"
  - "design principles"
  - "npm"
  - "progressive enhancement"
  - "technology stack"
last-reviewed: "2026-04-03"
name: NHS Design System — Foundations
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system"
---

# NHS Design System — Foundations

> Core design principles, technology stack, and guidance for building NHS digital services.
> Source: <https://service-manual.nhs.uk/design-system>

## Overview

The NHS Design System provides styles, components, and patterns for building accessible, consistent, and usable health services. NHS Digital maintains it, and it sets the standard for public-facing NHS digital services.

NHS UK Frontend backs the Design System — an npm package (`nhsuk-frontend`) that delivers production-ready HTML, Sass, and JavaScript for every component. Teams building NHS services should use the Design System as the starting point, diverging only when evidence from user research shows that a different approach works better for their users.

The Design System covers three areas:

- **Styles** — Visual foundations: layout, spacing, colour, typography, and icons.
- **Components** — Reusable interface elements: buttons, form inputs, navigation, care cards, warnings.
- **Patterns** — Higher-level guidance for recurring design problems, combining components with content and interaction guidance.

## When to use the Design System

Use the NHS Design System when:

- Building any public-facing NHS digital service.
- Building internal NHS tools that should align with NHS accessibility and consistency standards.
- Prototyping an NHS service for user research.
- You need accessible, tested components without building them from scratch.

## When not to use the Design System

Do not use the NHS Design System when:

- Building a service or product that is not an NHS service and has no need to look like the NHS.
- Applying the NHS logo, Frutiger typeface, or the `nhsuk-` class namespace to non-NHS contexts — this violates NHS identity guidelines.

If your service is not part of the NHS but must use accessible patterns, you can adapt the underlying HTML structure to your own brand.

## The 10 NHS Design Principles

1. **Put people at the heart of everything you do** — Design for the people who use NHS services, not for organisational convenience.

2. **Design for the outcome** — Focus on what users need to achieve, not on the process they go through.

3. **Be inclusive** — Build services that work for everyone, including people with disabilities, low digital literacy, or limited connectivity.

4. **Design for context** — People use NHS services in stressful, unfamiliar situations. Design for those real contexts, not ideal conditions.

5. **Design for trust** — People trust the NHS. Maintain that trust through consistent, professional, honest design.

6. **Test your assumptions** — Research with real users. Test early, test often, and change what does not work.

7. **Make, learn, iterate** — Build the minimum viable service, learn from users, and improve. Never treat a service as finished.

8. **Do the hard work to make it simple** — Making a health service simple to use is hard. Do the hard work so users do not have to.

9. **Make things open. It makes things better** — Share code, designs, data, and learning. Open work produces better outcomes.

10. **Design to protect the environment** — Consider the environmental impact of digital services. Reduce unnecessary data transfer, processing, and storage.

## How it works

NHS UK Frontend is the npm package that implements the Design System. It contains:

- Sass source files for every component, compiled into a single stylesheet.
- Nunjucks macros for server-side rendering of every component.
- JavaScript for components that require client-side behaviour.
- Frutiger font files and the NHS logo SVG.

The package does not depend on any JavaScript framework. It works alongside any server-side language or framework that can serve HTML. Node.js projects can use the Nunjucks macros; other environments use the plain HTML output.

## Technology Stack

| Layer | Technology |
|---|---|
| Package management | npm |
| CSS preprocessor | Sass (SCSS syntax) |
| Templating | Nunjucks (server-side, Node.js) |
| JavaScript | Vanilla JS |
| HTML | Semantic HTML5 |
| Fonts | Frutiger (served from your own assets) |

**Package name:** `nhsuk-frontend`

## HTML vs Nunjucks

You can use NHS UK Frontend components as plain HTML or via Nunjucks macros.

**Plain HTML** — Copy the component HTML directly into any template. This works with any server-side language (PHP, Python, Ruby, .NET). You are responsible for keeping the markup current when upgrading NHS UK Frontend.

**Nunjucks macros** — Available to projects using Nunjucks as a template engine. Macros accept a parameters object and render the correct HTML. When you upgrade the package, macros update automatically.

**When to use which:**

- Use Nunjucks macros in Express.js and NHS prototype projects.
- Use plain HTML when your framework does not support Nunjucks.
- Choose one approach consistently — do not mix both for the same component.

## Accessibility

NHS UK Frontend targets WCAG 2.2 Level-AA, the minimum the Public Sector Bodies Accessibility Regulations 2018 require.

All components:

- Use semantic HTML5 elements.
- Include ARIA roles and attributes only where HTML semantics alone are insufficient.
- Support full keyboard navigation.
- Meet WCAG SC 1.4.3 colour contrast (4.5:1 for normal text, 3:1 for large text and UI components).
- Meet WCAG SC 2.4.11 and 2.4.13 focus appearance requirements (high-contrast yellow focus ring).
- Tested with NVDA + Firefox, JAWS + Chrome, VoiceOver (macOS and iOS), and TalkBack (Android).

Teams are responsible for ensuring their use of components remains accessible. Custom CSS that changes colour, spacing, or visibility can break accessibility. Test with real assistive technologies before release.

## Do and Do not

**Do** use the Design System before building anything custom — the team has tested components for accessibility, and NHS users find them familiar.

**Do** use Nunjucks macros in Node.js projects to keep component HTML in sync with the package.

**Do** import NHS UK Frontend Sass before your own custom Sass, so your overrides take effect.

**Do** run `npm audit` and keep the package up to date — security patches and accessibility fixes ship in minor and patch versions.

**Do** copy font and image assets from NHS UK Frontend to your public directory — do not serve them from `node_modules` at runtime.

**Do not** change files inside `node_modules/nhsuk-frontend` — override via Sass variables and your own stylesheet instead.

**Do not** remove the skip link — keyboard-only users and screen reader users need it.

**Do not** use `nhsuk-` class names, the NHS logo, or the Frutiger typeface on non-NHS services.

## Related Components / Patterns

- `foundations/nhsuk-frontend/SKILLS.md` — NHS UK Frontend npm package setup and usage
- `foundations/prototype-kit/SKILLS.md` — NHS prototype kit setup
- `styles/page-template/SKILLS.md` — The NHS page template
- `styles/layout/SKILLS.md` — Page layout and grid system
- `accessibility/SKILLS.md` — Accessibility requirements and testing guidance
