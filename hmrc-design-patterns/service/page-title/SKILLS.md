---
category: patterns
description: Structure the HTML page title for HMRC services using the format "[Page heading] - [Section] - [Service name] - GOV.UK".
keywords:
  - "error prefix"
  - "head"
  - "page title"
  - "SEO"
  - "title element"
  - "title tag"
last-reviewed: "2026-04-03"
name: Page title
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/page-title/"
subcategory: service
---

# Page title

> Structure the HTML page title for HMRC services using the format "[Page heading] - [Section] - [Service name] - GOV.UK".
> Source: <https://design.tax.service.gov.uk/hmrc-design-patterns/page-title/>

## Overview

The page title is the text that appears in the browser tab and in search engine results. HMRC services follow the GOV.UK page title pattern with a specific structure that adds the section name between the page heading and the service name.

A well-structured page title helps users identify the correct tab when they have more than one open. It also helps screen reader users, who hear the page title announced when the page loads.

The standard HMRC page title format is:

```text
[Page heading] - [Section name] - [Service name] - GOV.UK
```

When a page has validation errors, prefix the title with "Error: ":

```text
Error: [Page heading] - [Section name] - [Service name] - GOV.UK
```

Keep page titles under 65 characters where possible. Search engines truncate longer titles, and browser tabs show only the start of the text.

## When to use

- On every page within an HMRC service.
- On question pages, confirmation pages, and error pages.
- On pages within a multi-section service where the section name adds context.

## When not to use

- On GOV.UK content pages that sit outside an HMRC service — those follow the standard GOV.UK title pattern.
- On pages served by a different department's service.

## How it works

### Building the title

Set the `<title>` element in the `<head>` of each page. Construct it from these parts, separated by en dashes surrounded by spaces:

1. **Page heading** — the same text as the `<h1>` on the page.
2. **Section name** — the section of the service (for example, "Income", "Employment"). Omit this part if the service has no sections.
3. **Service name** — the name of the service (for example, "Manage your tax credits").
4. **GOV.UK** — the platform identifier, always last.

### Question pages

When the page heading is a question, use that question as the first part of the title:

```text
What is your total income? - Income - Self Assessment - GOV.UK
```

### Pages without sections

For services with no section structure, omit the section name:

```text
Check your answers - Manage your tax credits - GOV.UK
```

### Error pages

Prefix the title with "Error: " when the page contains validation errors. This alerts screen reader users to the error as soon as the page loads:

```text
Error: What is your total income? - Income - Self Assessment - GOV.UK
```

## Code examples

### HTML

```html
<head>
  <title>What is your total income? - Income - Self Assessment - GOV.UK</title>
</head>
```

### HTML with error prefix

```html
<head>
  <title>Error: What is your total income? - Income - Self Assessment - GOV.UK</title>
</head>
```

### Nunjucks (GOV.UK Prototype Kit layout)

```njk
{% extends "govuk/template.njk" %}

{% block pageTitle %}
  {% if errors %}Error: {% endif %}What is your total income? - Income - Self Assessment - GOV.UK
{% endblock %}
```

### Nunjucks helper pattern

```njk
{% set errorPrefix = "Error: " if errors else "" %}
{% set pageHeading = "What is your total income?" %}
{% set sectionName = "Income" %}
{% set serviceName = "Self Assessment" %}

{% block pageTitle %}
  {{ errorPrefix }}{{ pageHeading }} - {{ sectionName }} - {{ serviceName }} - GOV.UK
{% endblock %}
```

### Without a section name

```njk
{% block pageTitle %}
  Check your answers - Manage your tax credits - GOV.UK
{% endblock %}
```

## Accessibility

- Screen readers announce the page title when the page loads. A descriptive title tells users which page they reached without waiting for the full page content.
- The "Error: " prefix alerts screen reader users to validation errors before they reach the page content.
- Keep the page heading as the first part of the title. Screen readers and browser tabs show the beginning of the title first, so the most specific information must come first.
- Match the page title to the `<h1>` text. Mismatched titles and headings confuse users.

## Do and Do not

**Do:**

- Match the first part of the page title to the `<h1>` on the page.
- Include the section name when the service has sections.
- Add "Error: " at the start when the page has validation errors.
- End every page title with "- GOV.UK".
- Keep page titles under 65 characters where possible.

**Do not:**

- Duplicate the service name or section name in the page heading part of the title.
- Use a generic title such as "HMRC" or "Tax service" without the specific page heading.
- Forget the "Error: " prefix on pages with validation errors.
- Add extra words to the title that do not appear in the heading or section name.
- Use the service name alone as the page title.

## Related components and patterns

- [Page heading](../page-heading/SKILLS.md) — the HMRC page heading pattern with section captions
- [Recover from validation errors](../../../govuk-design-system/patterns/help-users-to/recover-from-validation-errors/SKILLS.md) — GOV.UK error handling, including the error title prefix
- [Question pages](../../../govuk-design-system/patterns/pages/question-pages/SKILLS.md) — GOV.UK guidance on structuring question pages
- [Confirmation pages](../../../govuk-design-system/patterns/pages/confirmation-pages/SKILLS.md) — GOV.UK confirmation page pattern
