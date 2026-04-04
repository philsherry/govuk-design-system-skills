---
category: components
collection: public
description: A toggle for switching between English and Welsh language versions of a service.
dwp-frontend: "3.x"
keywords:
  - "Cymraeg"
  - "Welsh"
  - "bilingual"
  - "language"
  - "language toggle"
  - "toggle"
  - "translation"
last-reviewed: "2026-04-04"
name: Language toggle
source: "https://design-system.dwp.gov.uk/components/language-toggle"
---

# Language toggle

> A toggle for switching between English and Welsh language versions of a service.
> Source: <https://design-system.dwp.gov.uk/components/language-toggle>

## Overview

The language toggle lets users switch between English and Welsh versions of a service. It displays both language options in their native language, separated by a pipe character. The current language appears as plain text while the alternative language appears as a link. The component sets the correct `lang`, `hreflang`, and `rel="alternate"` attributes on the link so screen readers pronounce each language name with the right voice.

## When to use this component

Use the language toggle when a service offers two languages and the user can switch between them. The [Toggle to Welsh](../../patterns/toggle-to-welsh/SKILLS.md) pattern uses this component.

## When not to use this component

Do not use this component for switching between more than two languages.

## How it works

The component presents two language options in their own language, separated by a pipe character. The current language is plain text; the alternative language is an active link. When the user selects the link, the page changes to the selected language.

The mechanism for changing language depends on how you build your service. The component handles the UI; your service handles the routing.

## Code examples

### Nunjucks — English selected

```njk
{{ dwpLanguageToggle({
  selectedLang: "en",
  href: {
    en: "/apply?lang=en",
    cy: "/apply?lang=cy"
  }
}) }}
```

### Nunjucks — Welsh selected

```njk
{{ dwpLanguageToggle({
  selectedLang: "cy",
  href: {
    en: "/apply?lang=en",
    cy: "/apply?lang=cy"
  }
}) }}
```

### HTML — English selected

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

### HTML — Welsh selected

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

## Nunjucks macro options

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `selectedLang` | string | No | Selected language code: "en" or "cy" (default: "en") |
| `href` | object | Yes | URLs keyed by language code: `{ en: "...", cy: "..." }` |

## Accessibility

The language toggle handles several WCAG requirements automatically:

- **[3.1.1 Language of Page](https://www.w3.org/TR/WCAG22/#language-of-page) (A)**: your page must set the correct `<html lang>` attribute ("en" or "cy")
- **[3.1.2 Language of Parts](https://www.w3.org/TR/WCAG22/#language-of-parts) (AA)**: the component sets `lang` and `hreflang` on the alternate language link

In the English version:
- The page's default language must be `<html lang="en">`
- The link text "Cymraeg" has `lang="cy"` so screen readers pronounce it in Welsh

In the Welsh version:
- The page's default language must be `<html lang="cy">`
- The link text "English" has `lang="en"` so screen readers pronounce it in English
- The `aria-label` on the `<nav>` changes to "Togl iaith" (Welsh for "Language toggle")

The inactive language text (current language) does not need a separate `lang` attribute because it matches the page's default language.

The alternate language link uses `rel="alternate"` to indicate it leads to an equivalent page in another language.

## CSS classes

| Class | Purpose |
|-------|---------|
| `dwp-language-toggle` | Block: the toggle component |
| `dwp-language-toggle__list` | Element: the language list |
| `dwp-language-toggle__list-item` | Element: a language option |

## Do and do not

**Do:**
- Do set the correct `<html lang>` attribute on the page ("en" for English, "cy" for Welsh) to match the selected language.
- Do use this component alongside the Toggle to Welsh pattern for a complete bilingual service.
- Do let the component handle `lang`, `hreflang`, and `rel="alternate"` attributes — the macro sets these automatically.

**Do not:**
- Do not use this component for switching between more than two languages.
- Do not remove or override the `lang` attributes on the alternate language link — screen readers rely on them for correct pronunciation.
- Do not forget to handle language routing in your service — the component provides the UI, not the server-side logic.

## Related components and patterns

- [Toggle to Welsh pattern](../../patterns/toggle-to-welsh/SKILLS.md) — the pattern that uses this component
- [HMRC Welsh language toggle](https://design.tax.service.gov.uk/hmrc-design-patterns/welsh-language-toggle/) — HMRC's equivalent pattern
