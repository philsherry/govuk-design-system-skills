---
category: patterns
description: Let users switch between English and Welsh language versions of a service.
dwp-frontend: "3.x"
keywords:
  - "Cymraeg"
  - "Welsh"
  - "bilingual"
  - "language"
  - "language switch"
  - "toggle"
  - "translation"
last-reviewed: "2026-04-04"
name: Toggle to Welsh
source: "https://design-system.dwp.gov.uk/patterns/toggle-to-welsh"
---

# Toggle to Welsh

> Let users switch between English and Welsh language versions of a service.
> Source: <https://design-system.dwp.gov.uk/patterns/toggle-to-welsh>

## Overview

The "Toggle to Welsh" pattern lets users switch between the English and Welsh versions of a service. It uses the DWP Language toggle component, positioned below the GOV.UK header and phase banner, right-aligned within the page width container. Welsh language provision is a legal obligation under the Welsh Language (Wales) Measure 2011 for services used in Wales.

## When to use this pattern

Use this pattern when a service must be available in both English and Welsh. Welsh language provision is a legal obligation under the Welsh Language (Wales) Measure 2011 for services used in Wales.

## When not to use this pattern

Do not use this pattern when:

- the service is only available in English — instead, signpost the Welsh language option on the start page if one exists elsewhere
- the service supports more than two languages — this pattern handles two languages only

## How it works

Use the DWP [Language toggle](../../components/language-toggle/SKILLS.md) component to let users switch between English and Welsh.

### Position

Place the language toggle:

1. Below the GOV.UK header
2. Below the phase banner (if present)
3. Right-aligned within the page width container

The toggle must appear on every page of the service.

### Behaviour

When a user selects a language:

- the page stays the same — do not redirect to a different page
- any information the user has entered stays intact
- the selected language persists for the rest of the journey

### Start page signposting

If your service cannot use the language toggle component (for example, on GOV.UK start pages that the service team does not control), add a link to the Welsh version on the start page. Do not place this link in the footer — users are unlikely to look there.

## Code examples

### Language toggle — English version

#### HTML

```html
<nav class="dwp-language-toggle" aria-label="Language toggle">
  <ul class="dwp-language-toggle__list">
    <li class="dwp-language-toggle__list-item" aria-current="true">
      English
    </li>
    <li class="dwp-language-toggle__list-item">
      <a href="/apply?lang=cy"
        hreflang="cy"
        lang="cy"
        rel="alternate"
        class="govuk-link"
        aria-label="Newid yr iaith ir Gymraeg">Cymraeg</a>
    </li>
  </ul>
</nav>
```

### Language toggle — Welsh version

#### HTML

```html
<nav class="dwp-language-toggle" aria-label="Togl iaith">
  <ul class="dwp-language-toggle__list">
    <li class="dwp-language-toggle__list-item">
      <a href="/apply?lang=en"
        hreflang="en"
        lang="en"
        rel="alternate"
        class="govuk-link"
        aria-label="Change the language to English">English</a>
    </li>
    <li class="dwp-language-toggle__list-item" aria-current="true">
      Cymraeg
    </li>
  </ul>
</nav>
```

### Nunjucks — English version

```njk
{{ dwpLanguageToggle({
  selectedLang: "en",
  href: {
    en: "/apply?lang=en",
    cy: "/apply?lang=cy"
  }
}) }}
```

### Nunjucks — Welsh version

```njk
{{ dwpLanguageToggle({
  selectedLang: "cy",
  href: {
    en: "/apply?lang=en",
    cy: "/apply?lang=cy"
  }
}) }}
```

## Accessibility

This pattern must meet:

- **[3.1.1 Language of Page](https://www.w3.org/TR/WCAG22/#language-of-page) (A)**: set the `lang` attribute on the `<html>` element to match the current page language
  - English page: `<html lang="en">`
  - Welsh page: `<html lang="cy">`
- **[3.1.2 Language of Parts](https://www.w3.org/TR/WCAG22/#language-of-parts) (AA)**: set `lang` on any content that differs from the page language
  - On the English page, the "Cymraeg" link has `lang="cy"` so screen readers pronounce it in Welsh
  - On the Welsh page, the "English" link has `lang="en"` so screen readers pronounce it in English

The `<nav>` element wrapping the toggle must have an `aria-label` in the page's language:

- English: `aria-label="Language toggle"`
- Welsh: `aria-label="Togl iaith"`

The current language uses plain text (not a link) with `aria-current="true"` to tell assistive technology which language is active.

The alternate language link uses `rel="alternate"` and `hreflang` to signal that it leads to the same page in another language.

## Do and do not

**Do:**
- Show the language toggle on every page of the service.
- Set the `lang` attribute on the `<html>` element to match the current page language (`en` or `cy`).
- Set `lang` on any content that differs from the page language, so screen readers pronounce it in the right language.
- Preserve user input when switching languages — do not clear form data.

**Do not:**
- Do not use this pattern for services with more than two languages — it handles two languages only.
- Do not place the Welsh language link in the footer — users will not look there.
- Do not redirect to a different page when the user switches language — keep them on the same page.
- Do not remove `rel="alternate"` and `hreflang` from the alternate language link.

## Related components and patterns

- [Language toggle component](../../components/language-toggle/SKILLS.md) — the DWP component this pattern uses
- [HMRC Welsh language toggle](https://design.tax.service.gov.uk/hmrc-design-patterns/welsh-language-toggle/) — HMRC's equivalent pattern
