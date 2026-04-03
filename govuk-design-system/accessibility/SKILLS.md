---
category: accessibility
description: WCAG 2.2 requirements, focus states, and accessibility guidance for GOV.UK services.
govuk-frontend: "5.x"
keywords:
  - "ARIA"
  - "WCAG"
  - "a11y"
  - "contrast"
  - "keyboard"
  - "screen reader"
last-reviewed: "2026-04-03"
name: Accessibility
source: "https://design-system.service.gov.uk/accessibility/"
---

# Accessibility

> WCAG 2.2 requirements, focus states, and accessibility guidance for GOV.UK services.
> Source: <https://design-system.service.gov.uk/accessibility/>

## Overview

GOV.UK services must meet WCAG 2.2 Level-AA as the Public Sector Bodies Accessibility Regulations 2018 require. GOV.UK Frontend is accessible by default, but correct implementation is essential.

## WCAG 2.2 Principles

Reference these resources when checking criteria and implementing fixes:

- [WCAG 2.2 specification](https://www.w3.org/TR/WCAG22/) — the authoritative source for all success criteria
- [Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/) — filterable list of criteria with techniques and failures
- [What's new in WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/) — summary of criteria added in 2.2
- [Techniques](https://www.w3.org/WAI/WCAG22/Techniques/) — sufficient and advisory techniques for meeting each criterion
- [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/) — intent, benefits, and examples for each criterion

The four WCAG principles (POUR):

- **Perceivable**: All users can perceive the content through sight, hearing, or touch
- **Operable**: All users can operate the interface
- **Understandable**: Content and UI are clear and predictable
- **Robust**: Assistive technologies can interpret the content

## Conformance Levels

- **Level-A**: Basic accessibility features (must have)
- **Level-AA**: Standard for UK public sector (required)
- **Level-AAA**: Highest standard (aspire to where possible)

New in WCAG 2.2:

- 2.4.11 Focus Not Obscured (AA): focus indicator not entirely hidden
- 2.4.12 Focus Not Obscured (Enhanced) (AAA)
- 2.4.13 Focus Appearance (AAA): focus indicator size/contrast requirements
- 2.5.7 Dragging Movements (AA): alternatives to drag operations
- 2.5.8 Target Size (Minimum) (AA): 24×24px minimum target size
- 3.2.6 Consistent Help (A): help mechanisms in consistent location
- 3.3.7 Redundant Entry (A): do not ask for info already provided
- 3.3.8 Accessible Authentication (Minimum) (AA): no cognitive tests required

## Focus States

GOV.UK Frontend implements focus states with a yellow highlight (#fd0) and a black border, meeting WCAG 2.2 focus visibility requirements.

Focus state CSS:

```css
:focus {
  outline: 3px solid transparent;
  background-color: #fd0;
  box-shadow: 0 -2px #fd0, 0 4px #0b0c0c;
}
```

Do not remove focus outlines (`outline: none`). If redesigning focus states, ensure:

- 3:1 contrast ratio between focused and unfocused state
- Focus indicator has minimum area requirement

## Semantic HTML

Use correct HTML elements:

- Headings in logical order (H1 > H2 > H3)
- Landmark roles: `<header>`, `<main>`, `<nav>`, `<footer>`, `<aside>`
- `<button>` for actions, `<a>` for navigation
- `<label>` associated with every input
- `<fieldset>` + `<legend>` for grouped inputs
- `role="alert"` for dynamic error messages

When ARIA is necessary, reference the spec:

- [WAI-ARIA overview](https://www.w3.org/WAI/standards-guidelines/aria/) — introduction and links to all ARIA resources
- [ARIA specification](https://w3c.github.io/aria/) — the living standard with roles, states, and properties

## Screen Reader Considerations

- Give all images alt text (`alt=""` for decorative)
- Mark SVGs with `aria-hidden="true"` if decorative, or `aria-label` if informative
- Dynamic content: use `aria-live` regions or `role="alert"`
- Link error messages to inputs via `aria-describedby`
- Skip links: required, visible on focus
- Reading order must match visual order

## Keyboard Navigation

Make all interactive elements keyboard accessible:

- Tab: move to next focusable element
- Shift+Tab: previous
- Enter/Space: activate buttons/links
- Arrow keys: navigate within components (radios, accordions, tabs)
- Escape: close dialogs/popups
- Do not override browser default keyboard shortcuts with custom ones

## Colour Contrast

Minimum contrast ratios:

- Normal text (<`18px`): 4.5:1
- Large text (≥`18px` or ≥`14px` bold): 3:1
- UI components and focus indicators: 3:1

The GOV.UK colour palette is contrast-tested. Key approved combinations:

- Black (`#0b0c0c`) on white: 21:1
- GOV.UK blue (`#1d70b8`) on white: 5.9:1
- Red error (`#d4351c`) on white: 5.5:1

Never convey information by colour alone.

## Testing Accessibility

Automated testing (finds ~30% of issues):

- axe-core / axe DevTools
- WAVE
- Lighthouse accessibility audit

Manual testing (required):

- Keyboard-only navigation
- Screen readers: NVDA+Firefox (Windows), JAWS+Chrome (Windows), VoiceOver+Safari (macOS/iOS), TalkBack (Android)
- 200% zoom
- Windows High Contrast Mode
- Colour blindness simulation

Testing checklist:

- [ ] Can complete all tasks with keyboard only
- [ ] Skip link works and targets `#main-content`
- [ ] All form fields have visible labels
- [ ] Screen readers announce error messages
- [ ] Page title is descriptive and unique
- [ ] Images have appropriate alt text
- [ ] Colour contrast passes for all text
- [ ] All interactive elements show visible focus
- [ ] Dynamic content updates announce to assistive technology

## Accessibility Statement

Public sector services must publish an accessibility statement. The statement must:

- State conformance level (partial/full WCAG 2.2 AA)
- List known issues
- Provide contact for accessibility problems
- Reference enforcement body (EHRC)
- Update when accessibility status changes

## Do and Do not

**Do:**

- Use GOV.UK Frontend components — they are accessible by default
- Test with real assistive technology users
- Write descriptive link text ("Change name" not "Change")
- Use `aria-describedby` to connect hints and errors to inputs
- Ensure focus states are always visible

**Do not:**

- Use `outline: none` on focused elements
- Use `tabindex` values greater than 0
- Rely on colour alone to convey meaning
- Use `aria-label` to fix poor HTML — fix the HTML instead
- Autoplay media or animations
- Create keyboard traps

## Related Components / Patterns

- [../../components/error-summary/SKILLS.md](../../components/error-summary/SKILLS.md)
- [../../components/error-message/SKILLS.md](../../components/error-message/SKILLS.md)
- [../../components/skip-link/SKILLS.md](../../components/skip-link/SKILLS.md)
- [../../components/exit-this-page/SKILLS.md](../../components/exit-this-page/SKILLS.md)
- [../../foundations/SKILLS.md](../../foundations/SKILLS.md)
