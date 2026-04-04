---
category: accessibility
description: WCAG 2.2 requirements and DWP Accessibility Manual guidance for DWP services.
dwp-frontend: "3.x"
keywords:
  - "ARIA"
  - "SCULPT"
  - "WCAG"
  - "a11y"
  - "accessibility manual"
  - "accessibility statement"
  - "assistive technology"
  - "contrast"
  - "keyboard"
  - "screen reader"
last-reviewed: "2026-04-04"
name: Accessibility
source: "https://accessibility-manual.dwp.gov.uk/"
---

# Accessibility

> WCAG 2.2 requirements and DWP Accessibility Manual guidance for DWP services.
> Source: <https://accessibility-manual.dwp.gov.uk/>

## Overview

DWP services must meet WCAG 2.2 Level AA under the Public Sector Bodies Accessibility Regulations 2018. This applies to both public-facing and internal (agent-facing) services — there is no exemption for staff-only tools.

GOV.UK Frontend and DWP Frontend provide accessible components by default, but correct implementation is essential. Using the libraries does not guarantee compliance.

DWP maintains a standalone [Accessibility Manual](https://accessibility-manual.dwp.gov.uk/) that goes beyond the GOV.UK Design System's accessibility guidance. It covers law, role-based responsibilities, testing practices, and tools.

## DWP Accessibility Manual

The manual covers five sections. Each links to the current live content — check the manual for the latest guidance rather than relying on summaries alone.

### Accessibility law

- [The Public Sector Bodies Accessibility Regulations 2018](https://accessibility-manual.dwp.gov.uk/accessibility-law/the-public-sector-bodies-accessibility-regulations-2018) — the legal framework
- [Accessibility regulations vs the GOV.UK Service Standard](https://accessibility-manual.dwp.gov.uk/accessibility-law/accessibility-regulations-vs-the-govuk-service-standard) — how the legal requirements relate to service assessments
- [Accessibility statements](https://accessibility-manual.dwp.gov.uk/accessibility-law/accessibility-statements) — what the law requires you to publish
- [Internal vs public-facing services](https://accessibility-manual.dwp.gov.uk/accessibility-law/internal-vs-public-facing-services) — both have the same legal obligations
- [Disproportionate burden](https://accessibility-manual.dwp.gov.uk/accessibility-law/disproportionate-burden) — when and how to claim an exemption (a high bar to meet)

### Guidance for your job role

The manual provides accessibility responsibilities for 11 roles. Each page lists specific actions and considerations.

| DWP role | Maps to agent |
|----------|---------------|
| [Software Engineer or Frontend Developer](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/software-engineer-or-frontend-developer) | frontend-developer |
| [Content Designer](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/content-designer) | content-designer |
| [Interaction Designer](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/interaction-designer) | interaction-designer |
| [QA Tester](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/qa-tester) | qa-tester |
| [Service Designer](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/service-designer) | service-designer |
| [User Researcher](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/user-researcher) | user-researcher |
| [Accessibility Specialist](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/accessibility-specialist) | accessibility-auditor |
| [Digital Performance Analyst](https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/digital-performance-analyst) | performance-analyst |

### Best practice

**Building:**
- [Building frontends](https://accessibility-manual.dwp.gov.uk/best-practice/building-frontends) — use GOV.UK Frontend, validate HTML, test with assistive technology
- [Designing screens](https://accessibility-manual.dwp.gov.uk/best-practice/designing-screens) — layout, colour, spacing, and interaction design for accessibility
- [Service features](https://accessibility-manual.dwp.gov.uk/best-practice/service-features) — accessible patterns for common service features
- [Writing content](https://accessibility-manual.dwp.gov.uk/best-practice/writing-content) — plain language, heading structure, link text

**Testing:**
- [How to do accessibility testing](https://accessibility-manual.dwp.gov.uk/best-practice/how-to-do-accessibility-testing) — the testing approach DWP recommends
- [Automated testing using axe-core and pa11y](https://accessibility-manual.dwp.gov.uk/best-practice/automated-testing-using-axe-core-and-pa11y) — CI integration
- [Manual testing](https://accessibility-manual.dwp.gov.uk/best-practice/manual-testing) — keyboard, visual, and cognitive checks
- [Screen reader testing](https://accessibility-manual.dwp.gov.uk/best-practice/screen-reader-testing) — NVDA, JAWS, VoiceOver, TalkBack
- [Voice controller testing](https://accessibility-manual.dwp.gov.uk/best-practice/voice-controller-testing) — Dragon, Voice Control
- [Screen magnifier testing](https://accessibility-manual.dwp.gov.uk/best-practice/screen-magnifier-testing) — ZoomText, built-in zoom

### Tools and resources

- [Basic accessibility checks](https://accessibility-manual.dwp.gov.uk/tools-and-resources/basic-accessibility-checks) — 10-step checks covering automated tools, responsive design, keyboard, headings, page title, links, colour contrast, images, announcements, and session timeouts
- [Accessibility cheatsheet](https://accessibility-manual.dwp.gov.uk/tools-and-resources/accessibility-cheatsheet) — quick reference card
- [SCULPT](https://accessibility-manual.dwp.gov.uk/tools-and-resources/sculpt) — a practical accessibility checking framework: Structure, Colour, Use of images, Links, Plain English, Tables
- [Accessibility posters](https://accessibility-manual.dwp.gov.uk/tools-and-resources/accessibility-posters) — printable awareness posters
- [Known accessibility issues](https://accessibility-manual.dwp.gov.uk/tools-and-resources/known-accessibility-issues) — tracked issues in DWP services

## WCAG 2.2 principles

Reference these resources when checking criteria:

- [WCAG 2.2 specification](https://www.w3.org/TR/WCAG22/) — the authoritative source
- [Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) — filterable list of criteria with techniques
- [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/) — intent, benefits, and examples for each criterion

The four WCAG principles (POUR):

- **Perceivable**: All users can perceive the content through sight, hearing, or touch
- **Operable**: All users can operate the interface using their preferred input method
- **Understandable**: Content and UI are clear and predictable
- **Robust**: Content works with current and future technologies, including assistive technology

## Key accessibility considerations for DWP services

### Internal services have the same obligations

DWP staff-facing tools must meet the same WCAG 2.2 AA standard as public services. The DWP Accessibility Manual has [dedicated guidance](https://accessibility-manual.dwp.gov.uk/accessibility-law/internal-vs-public-facing-services) on this.

### Session timeout accessibility

DWP services that use session timeouts must meet [WCAG 2.2.1 Timing Adjustable](https://www.w3.org/TR/WCAG22/#timing-adjustable). The DWP "Manage a session timeout" pattern provides a modal dialog that warns users before timeout and lets them extend their session. See `../patterns/manage-a-session-timeout/SKILLS.md`.

### Welsh language support

Services available in Welsh must meet [WCAG 3.1.1 Language of Page](https://www.w3.org/TR/WCAG22/#language-of-page) and [3.1.2 Language of Parts](https://www.w3.org/TR/WCAG22/#language-of-parts). The DWP language toggle component handles the `lang` and `hreflang` attributes. See `../components/language-toggle/SKILLS.md`.

### Navigation accessibility

The DWP navigation components (horizontal navigation, side navigation) use `aria-current="true"` to indicate the selected item and `aria-label` to identify the navigation landmark. The side navigation's mobile toggle uses `aria-expanded` to communicate state.

### Quick reference accessibility

The quick reference component uses a `<section>` with `aria-label` and a `<dl>` with visually hidden labels. Update the `ariaLabel` to describe the specific use (do not leave it as the default "Quick reference").

## Conformance levels

- **Level A**: Basic accessibility features (must have)
- **Level AA**: Standard for UK public sector (the legal requirement under the Public Sector Bodies Accessibility Regulations 2018)
- **Level AAA**: Highest standard (aspire to where possible, but not a legal requirement)

DWP services must meet Level AA. This applies to public-facing and internal (agent-facing) services alike.

## Focus states

GOV.UK Frontend provides a focus indicator with a yellow highlight (`#fd0`) and a thick black border. DWP services inherit this by default when using `govuk-frontend`.

Do not remove focus outlines (`outline: none`). If you redesign focus states, ensure:

- 3:1 contrast ratio between focused and unfocused states
- The focus indicator meets the minimum area requirement defined in WCAG 2.4.11

## Semantic HTML

Use the right HTML elements:

- **Landmark roles**: `<header>`, `<main>`, `<nav>`, `<footer>`, `<aside>` — each page needs a single `<main>`, and navigation landmarks need distinct `aria-label` values when more than one exists
- **Heading hierarchy**: Start with a single `<h1>`, then nest `<h2>`, `<h3>`, and so on without skipping levels
- **Buttons vs links**: Use `<button>` for actions (submit, toggle, open) and `<a>` for navigation to a new page or location
- **Labels**: Every `<input>` needs an associated `<label>`; grouped inputs need `<fieldset>` and `<legend>`
- **Dynamic errors**: Use `role="alert"` for error messages that appear without a page reload

## Screen reader considerations

- Give all images descriptive alt text; use `alt=""` for decorative images
- Mark decorative SVGs with `aria-hidden="true"`; give informative SVGs an `aria-label`
- Use `aria-live` regions or `role="alert"` for content that updates dynamically
- Connect hint text and error messages to inputs with `aria-describedby`
- Include a skip link that targets `#main-content` — visible on focus, present on every page
- Ensure the DOM reading order matches the visual order

## Keyboard navigation

All DWP components must work with keyboard alone. The expected key bindings:

- **Tab**: move to next focusable element
- **Shift+Tab**: move to previous focusable element
- **Enter / Space**: activate buttons and links
- **Arrow keys**: navigate within compound widgets (radios, tabs, accordions)
- **Escape**: close dialogs, overlays, and popups

Do not override default browser keyboard shortcuts.

## Colour contrast

Minimum contrast ratios (WCAG 1.4.3 and 1.4.11):

- Normal text (below 18px): 4.5:1
- Large text (18px+ or 14px+ bold): 3:1
- UI components and focus indicators: 3:1

GOV.UK Frontend colours meet these ratios by default. Custom styling (brand colours, overrides, status indicators) needs separate contrast checking. Never convey information by colour alone.

## Testing accessibility

Automated tools catch about 30% of issues. Combine them with manual testing:

- **Automated**: axe-core, pa11y, Lighthouse accessibility audit
- **Keyboard**: complete every task without a mouse
- **Screen readers**: NVDA + Firefox, JAWS + Chrome, VoiceOver + Safari, TalkBack
- **Zoom**: increase to 400% and confirm content remains usable
- **Without CSS**: disable stylesheets and check the content still makes sense

The DWP Accessibility Manual has detailed testing guidance:

- [How to do accessibility testing](https://accessibility-manual.dwp.gov.uk/best-practice/how-to-do-accessibility-testing)
- [Manual testing](https://accessibility-manual.dwp.gov.uk/best-practice/manual-testing)
- [Screen reader testing](https://accessibility-manual.dwp.gov.uk/best-practice/screen-reader-testing)

## Accessibility statements

The Public Sector Bodies Accessibility Regulations 2018 require every public sector service to publish an accessibility statement. The statement must:

- State the conformance level (partial or full WCAG 2.2 AA)
- List known accessibility issues with planned fix dates
- Provide a contact route for reporting accessibility problems
- Reference the enforcement body (the Equality and Human Rights Commission)
- Stay up to date when the accessibility status changes

The DWP Accessibility Manual has [dedicated guidance on accessibility statements](https://accessibility-manual.dwp.gov.uk/accessibility-law/accessibility-statements).

## Do and do not

**Do:**

- Use GOV.UK Frontend and DWP Frontend components — they ship accessible by default
- Test with real assistive technologies, not automated tools alone
- Write descriptive link text ("Change your name" not "Change")
- Use `aria-describedby` to connect hints and errors to inputs
- Treat internal services with the same accessibility rigour as public services

**Do not:**

- Remove focus outlines (`outline: none`) on interactive elements
- Use `tabindex` values greater than 0
- Rely on colour alone to convey meaning
- Use `aria-label` to patch poor HTML — fix the HTML instead
- Autoplay media or animations without user control
- Create keyboard traps that prevent users from tabbing away

## GOV.UK Design System accessibility guidance

The GOV.UK Design System provides comprehensive accessibility guidance that applies to all DWP services. See `../../govuk-design-system/accessibility/SKILLS.md` for the full reference.

## Related resources

- [DWP Accessibility Manual](https://accessibility-manual.dwp.gov.uk/) — the primary accessibility reference for DWP
- [GOV.UK Design System — Accessibility](https://design-system.service.gov.uk/accessibility/) — baseline accessibility guidance
- [WCAG 2.2 specification](https://www.w3.org/TR/WCAG22/) — the standard
- [Public Sector Bodies Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/contents/made) — the law
