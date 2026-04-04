---
category: accessibility
description: WCAG 2.2 requirements, focus states, and accessibility guidance for NHS UK services.
keywords:
  - "ARIA"
  - "WCAG"
  - "a11y"
  - "contrast"
  - "keyboard"
  - "screen reader"
last-reviewed: "2026-04-03"
name: Accessibility
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/accessibility"
---

# Accessibility

> WCAG 2.2 requirements, focus states, and accessibility guidance for NHS UK services.
> Source: <https://service-manual.nhs.uk/accessibility>

## Overview

NHS services must meet WCAG 2.2 Level-AA as the Public Sector Bodies Accessibility Regulations 2018 require. NHS UK Frontend is accessible by default, but correct implementation is essential. NHS services also carry extra responsibility because they serve people who may have health conditions that affect their ability to use digital services.

## WCAG 2.2 Principles

Reference these resources when checking criteria and implementing fixes:

- [WCAG 2.2 specification](https://www.w3.org/TR/WCAG22/) — the authoritative source for all success criteria
- [Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) — filterable list of criteria with techniques and failures
- [What's new in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/) — summary of criteria added in 2.2
- [Techniques](https://www.w3.org/WAI/WCAG22/Techniques/) — sufficient and advisory techniques for meeting each criterion
- [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/) — intent, benefits, and examples for each criterion

The four WCAG principles (POUR):

- **Perceivable**: All users can perceive the content through sight, hearing, or touch.
- **Operable**: All users can operate the interface.
- **Understandable**: Content and UI are clear and predictable.
- **Robust**: Assistive technologies can interpret the content.

## Conformance Levels

- **Level-A**: Basic accessibility features (must have).
- **Level-AA**: Standard for UK public sector (required).
- **Level-AAA**: Highest standard (aspire to where possible).

New in WCAG 2.2:

- 2.4.11 Focus Not Obscured (Minimum) (AA): focus indicator not entirely hidden.
- 2.4.12 Focus Not Obscured (Enhanced) (AAA).
- 2.4.13 Focus Appearance (AAA): focus indicator size/contrast requirements.
- 2.5.7 Dragging Movements (AA): alternatives to drag operations.
- 2.5.8 Target Size (Minimum) (AA): 24x24px minimum target size.
- 3.2.6 Consistent Help (A): help mechanisms in consistent location.
- 3.3.7 Redundant Entry (A): do not ask for information already provided.
- 3.3.8 Accessible Authentication (Minimum) (AA): no cognitive tests required.

## What all teams need to do

Every team building an NHS service must:

1. **Understand the regulations** — The Public Sector Bodies Accessibility Regulations 2018 require WCAG 2.2 AA conformance.
2. **Build accessibility into every phase** — Start considering accessibility in discovery, not as a pre-launch check.
3. **Test with assistive technology** — Automated testing catches about 30% of accessibility problems. Manual testing and real user testing cover the rest.
4. **Publish an accessibility statement** — Every public-facing NHS service must have one.
5. **Fix issues without delay** — Prioritise accessibility bugs alongside other defects.

## Focus States

NHS UK Frontend implements focus states with a yellow highlight (`#ffeb3b`) and a black border (`#212b32`), meeting WCAG 2.2 focus visibility requirements.

Focus state CSS:

```css
a:focus {
  background-color: #ffeb3b;
  box-shadow: 0 -2px #ffeb3b, 0 4px #212b32;
  color: #212b32;
  outline: 4px solid transparent;
}
```

Do not remove focus outlines (`outline: none`). If you redesign focus states, ensure:

- 3:1 contrast ratio between focused and unfocused state.
- The focus indicator has sufficient area to be visible.

## Semantic HTML

Use correct HTML elements:

- Headings in logical order (h1 > h2 > h3) — do not skip levels.
- Landmark roles: `<header>`, `<main>`, `<nav>`, `<footer>`, `<aside>`.
- `<button>` for actions, `<a>` for navigation.
- `<label>` associated with every input.
- `<fieldset>` + `<legend>` for grouped inputs (radios, checkboxes).
- `role="alert"` for dynamic error messages.

When ARIA is necessary, reference the spec:

- [WAI-ARIA overview](https://www.w3.org/WAI/standards-guidelines/aria/) — introduction and links to all ARIA resources
- [ARIA specification](https://w3c.github.io/aria/) — the living standard with roles, states, and properties

## Screen Reader Considerations

- Give all images alt text (`alt=""` for decorative images).
- Mark decorative SVGs with `aria-hidden="true"`. Give informative SVGs an `aria-label`.
- Dynamic content: use `aria-live` regions or `role="alert"`.
- Link error messages to inputs via `aria-describedby`.
- Skip links: required, visible on focus.
- Reading order must match visual order.

## Keyboard Navigation

Make all interactive elements keyboard accessible:

- Tab: move to next focusable element.
- Shift+Tab: move to previous focusable element.
- Enter/Space: activate buttons and links.
- Arrow keys: navigate within components (radios, tabs).
- Escape: close dialogs or dismiss popups.
- Do not override default browser keyboard shortcuts.

## Colour Contrast

Minimum contrast ratios:

- Normal text (< 18px): 4.5:1.
- Large text (>= 18px or >= 14px bold): 3:1.
- UI components and focus indicators: 3:1.

The NHS colour palette is contrast-tested. Key approved combinations:

- NHS black (`#212b32`) on white: 15.4:1.
- NHS blue (`#005eb8`) on white: 4.6:1.
- NHS red (`#d5281b`) on white: 4.6:1.

Never convey information by colour alone.

## Testing Accessibility

Automated testing (finds about 30% of problems):

- axe-core / axe DevTools.
- WAVE.
- Lighthouse accessibility audit.

Manual testing (required):

- Keyboard-only navigation.
- Screen readers: NVDA + Firefox (Windows), JAWS + Chrome (Windows), VoiceOver + Safari (macOS/iOS), TalkBack (Android).
- 200% zoom.
- Windows High Contrast Mode.
- Colour blindness simulation.

Testing checklist:

- [ ] Can complete all tasks with keyboard only.
- [ ] Skip link works and targets `#maincontent`.
- [ ] All form fields have visible labels.
- [ ] Screen readers announce error messages.
- [ ] Page title is descriptive and unique.
- [ ] Images have appropriate alt text.
- [ ] Colour contrast passes for all text.
- [ ] All interactive elements show visible focus.
- [ ] Dynamic content updates announce to assistive technology.

## NHS-specific accessibility considerations

NHS services have particular accessibility demands:

- **Health literacy** — Write content at a reading level that works for the broadest audience. Use short sentences and common words.
- **Stress and anxiety** — People use NHS services when they feel unwell or worried. Keep interfaces calm, predictable, and forgiving of errors.
- **Motor impairment** — Conditions like arthritis, tremors, or stroke affect fine motor control. Ensure touch targets meet the 24x24px minimum (WCAG SC 2.5.8) and provide generous spacing between interactive elements.
- **Cognitive load** — Ask one question per page. Avoid complex layouts. Keep the number of choices manageable.
- **BSL users** — Where BSL content exists, link to it prominently.

## Accessibility Statement

Public sector services must publish an accessibility statement. The statement must:

- State conformance level (partial or full WCAG 2.2 AA).
- List known accessibility problems.
- Provide contact details for reporting accessibility problems.
- Reference the enforcement body (EHRC in England and Wales, ECNI in Northern Ireland, EHRC in Scotland).
- Update when the accessibility status changes.

## Do and do not

**Do:**

- Use NHS UK Frontend components — they are accessible by default.
- Test with real assistive technology and real users.
- Write descriptive link text ("Change name" not "Change").
- Use `aria-describedby` to connect hints and errors to inputs.
- Ensure focus states are always visible.
- Publish and maintain an accessibility statement.

**Do not:**

- Use `outline: none` on focused elements.
- Use `tabindex` values greater than 0.
- Rely on colour alone to convey meaning.
- Use `aria-label` to fix poor HTML — fix the HTML instead.
- Autoplay media or animations.
- Create keyboard traps.
- Assume that passing automated tests means the service is accessible.

## Related components and patterns

- [Focus state style](../styles/focus-state/SKILLS.md)
- [Colour style](../styles/colour/SKILLS.md)
- [Error summary component](https://service-manual.nhs.uk/design-system/components/error-summary)
- [Error message component](https://service-manual.nhs.uk/design-system/components/error-message)
- [Skip link component](https://service-manual.nhs.uk/design-system/components/skip-link)
- [Foundations](../foundations/SKILLS.md)
