---
category: patterns
description: Let users switch between English and Welsh in HMRC services, as required by the Welsh Language Act 1993 and Welsh Language (Wales) Measure 2011.
hmrc-frontend: "7.x"
keywords:
  - "Cymraeg"
  - "English"
  - "hmrcLanguageSelect"
  - "language"
  - "language select"
  - "language toggle"
  - "Welsh"
  - "Welsh Language Act"
  - "Welsh language toggle"
last-reviewed: "2026-04-03"
name: Welsh language toggle
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/welsh-language-toggle/"
subcategory: service
---

# Welsh language toggle

> Let users switch between English and Welsh in HMRC services, as required by the Welsh Language Act 1993 and Welsh Language (Wales) Measure 2011.
> Source: <https://design.tax.service.gov.uk/hmrc-design-patterns/welsh-language-toggle/>

## Overview

HMRC services must support the Welsh language where the Welsh Language Act 1993 and the Welsh Language (Wales) Measure 2011 require it. The Welsh language toggle lets users switch between English and Welsh versions of a page.

The toggle displays "English | Cymraeg". The current language appears as plain text, and the other language appears as a link. When a user selects the link, the full page content switches to the chosen language — not only the toggle text.

Place the toggle at the top of the page content area, after the service name and before the back link or main heading.

The `hmrcLanguageSelect` macro from `hmrc-frontend` generates the toggle markup.

## When to use

- In HMRC services that Welsh language legislation covers.
- On every page of a service that offers Welsh language support.

## When not to use

- In services that do not have Welsh language translations available.
- On pages where the content exists in English only. Adding a toggle without translated content creates a broken experience.
- In services that serve only non-Welsh jurisdictions (for example, services exclusive to Scotland or Northern Ireland).

## How it works

### Toggle behaviour

The toggle shows two language options separated by a pipe character:

- When the page displays in English: "English | **Cymraeg**" — "Cymraeg" is a link.
- When the page displays in Welsh: "**English** | Cymraeg" — "English" is a link.

The current language always appears as plain text, and the alternative language appears as a link. This follows the convention of not linking to the current page.

### Placement

Place the toggle at the top of the main content area. It sits:

1. After the service header.
2. Before the back link (if present).
3. Before the main heading.

### Full page translation

When a user switches language, update all page content:

- Headings, body text, and form labels.
- Error messages and validation text.
- Button text.
- Hint text.
- The page title (`<title>` element).
- The toggle text itself (the current language label changes to plain text).

Do not translate:

- Proper nouns and official form names that have no Welsh equivalent.
- Reference numbers and codes.
- URLs.

### Server-side implementation

The toggle link includes a language parameter (for example, `?lang=cy` for Welsh or `?lang=en` for English). The server reads this parameter, stores the language preference in the session, and renders the page in the chosen language.

Set the `lang` attribute on the `<html>` element to match the current language:

- `<html lang="en">` for English.
- `<html lang="cy">` for Welsh.

## Code examples

### HTML (English active)

```html
<nav class="hmrc-language-select" aria-label="Choose a language">
  <ul class="hmrc-language-select__list">
    <li class="hmrc-language-select__list-item">
      <span aria-current="true">English</span>
    </li>
    <li class="hmrc-language-select__list-item">
      <a href="?lang=cy" hreflang="cy" lang="cy" rel="alternate"
         class="govuk-link hmrc-language-select__link">
        Cymraeg
      </a>
    </li>
  </ul>
</nav>
```

### HTML (Welsh active)

```html
<nav class="hmrc-language-select" aria-label="Dewiswch iaith">
  <ul class="hmrc-language-select__list">
    <li class="hmrc-language-select__list-item">
      <a href="?lang=en" hreflang="en" lang="en" rel="alternate"
         class="govuk-link hmrc-language-select__link">
        English
      </a>
    </li>
    <li class="hmrc-language-select__list-item">
      <span aria-current="true">Cymraeg</span>
    </li>
  </ul>
</nav>
```

### Nunjucks (English active)

```njk
{% from "hmrc/components/language-select/macro.njk" import hmrcLanguageSelect %}

{{ hmrcLanguageSelect({
  en: {
    href: "?lang=en"
  },
  cy: {
    href: "?lang=cy"
  }
}) }}
```

### Nunjucks (Welsh active)

```njk
{% from "hmrc/components/language-select/macro.njk" import hmrcLanguageSelect %}

{{ hmrcLanguageSelect({
  en: {
    href: "?lang=en"
  },
  cy: {
    href: "?lang=cy"
  },
  activeLanguage: "cy"
}) }}
```

### Setting the HTML lang attribute

```njk
{# In your layout template #}
<html lang="{{ currentLanguage | default('en') }}" class="govuk-template">
```

## Accessibility

- The toggle sits in a `<nav>` element with an `aria-label` that describes its purpose ("Choose a language" in English, "Dewiswch iaith" in Welsh).
- The current language uses `aria-current="true"` so screen readers announce it as the active selection.
- Each language link includes `hreflang` and `lang` attributes so screen readers pronounce the language name in the correct accent.
- The `rel="alternate"` attribute on language links tells assistive technologies that the linked page is an alternative language version.
- Set the `lang` attribute on the `<html>` element to match the current language. Screen readers use this attribute to select the correct speech synthesis voice.
- Translate the `aria-label` on the `<nav>` element when the page displays in Welsh.

## Do and Do not

**Do:**

- Place the toggle at the top of the main content area, before the back link and heading.
- Translate all page content when the user switches language.
- Set the `lang` attribute on the `<html>` element to match the active language.
- Include `hreflang` and `lang` attributes on the language link.
- Store the language preference in the session so it persists across pages.
- Use the `hmrcLanguageSelect` macro for consistent markup.
- Translate the `aria-label` on the `<nav>` element for each language.

**Do not:**

- Add the toggle without having full Welsh translations for the page content.
- Translate only the toggle text while leaving the rest of the page in English.
- Forget to update the page `<title>` element when switching language.
- Remove `aria-current="true"` from the current language span.
- Link the current language to the current page — show it as plain text.
- Place the toggle inside the header or footer — it belongs in the main content area.

## Related components and patterns

- [Page title](../page-title/SKILLS.md) — the HMRC page title pattern (translate the title when switching language)
- [Page heading](../page-heading/SKILLS.md) — the HMRC page heading pattern (translate headings and captions)
- [Header](../../../govuk-design-system/components/header/SKILLS.md) — the GOV.UK header component
- [HMRC Frontend](../foundations/hmrc-frontend/SKILLS.md) — installation and setup for the hmrc-frontend package
