---
category: patterns
description: HMRC-specific guidance for collecting addresses, supplementing the GOV.UK addresses pattern with international address support and HMRC service considerations.
keywords:
  - "address"
  - "address lookup"
  - "country selector"
  - "international address"
  - "manual address entry"
  - "postcode"
last-reviewed: "2026-04-03"
name: Addresses
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/addresses/"
subcategory: service
---

# Addresses

> HMRC-specific guidance for collecting addresses, supplementing the GOV.UK addresses pattern with international address support and HMRC service considerations.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/addresses/

## Overview

The HMRC addresses pattern builds on the GOV.UK addresses pattern. HMRC services should follow the GOV.UK guidance as a baseline and apply the HMRC-specific guidance in this document where additional needs arise.

HMRC services often need to handle addresses that the standard GOV.UK pattern does not cover. Tax services deal with offshore accounts, international trade, import and export declarations, and non-UK resident taxpayers. These cases require international address support beyond what a UK postcode lookup provides.

Use the GOV.UK address lookup pattern as the default. Add international address support when your service needs it.

## When to use

- When an HMRC service needs to collect a postal address from a user.
- When the service handles international addresses — for example, offshore account details, import/export declarations, or non-UK resident taxpayers.
- When the GOV.UK address lookup pattern does not meet the needs of your service.

## When not to use

- Do not build a custom address pattern if the GOV.UK address lookup covers your needs.
- Do not collect addresses you do not need — only ask for an address when the service requires it.
- Do not force users to enter a UK-format address when they live outside the UK.

## How it works

### UK addresses

For UK addresses, use the GOV.UK address lookup (postcode lookup) pattern. This lets users enter a postcode and select their address from a list. Provide a manual entry option for users whose address does not appear in the lookup results.

Follow the GOV.UK guidance on separate address fields:

- Address line 1 (required)
- Address line 2 (optional)
- Town or city (required)
- County (optional — include only if the service needs it)
- Postcode (required)

### International addresses

When your service needs to accept addresses from outside the UK:

1. Add a country selector before the address fields. Use the GOV.UK accessible autocomplete component to help users find their country.
2. If the user selects a country other than the United Kingdom, show a manual address entry form instead of the postcode lookup.
3. Use a free-text textarea or separate address lines without postcode validation.
4. Do not validate international addresses against UK postcode rules.
5. Label the postcode or zip code field to match the selected country where possible (for example, "ZIP code" for US addresses).

### Choosing an approach

| Scenario | Approach |
|----------|----------|
| UK-only service | GOV.UK address lookup (postcode lookup) |
| UK and international | Address lookup for UK, manual entry with country selector for non-UK |
| International only | Manual entry with country selector |

## Code Examples

### UK address fields

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="address-line-1">
    Address line 1
  </label>
  <input class="govuk-input" id="address-line-1" name="addressLine1" type="text" autocomplete="address-line1">
</div>

<div class="govuk-form-group">
  <label class="govuk-label" for="address-line-2">
    Address line 2 (optional)
  </label>
  <input class="govuk-input" id="address-line-2" name="addressLine2" type="text" autocomplete="address-line2">
</div>

<div class="govuk-form-group">
  <label class="govuk-label" for="address-town">
    Town or city
  </label>
  <input class="govuk-input govuk-input--width-20" id="address-town" name="addressTown" type="text" autocomplete="address-level2">
</div>

<div class="govuk-form-group">
  <label class="govuk-label" for="address-postcode">
    Postcode
  </label>
  <input class="govuk-input govuk-input--width-10" id="address-postcode" name="addressPostcode" type="text" autocomplete="postal-code">
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: { text: "Address line 1" },
  id: "address-line-1",
  name: "addressLine1",
  autocomplete: "address-line1"
}) }}

{{ govukInput({
  label: { text: "Address line 2 (optional)" },
  id: "address-line-2",
  name: "addressLine2",
  autocomplete: "address-line2"
}) }}

{{ govukInput({
  label: { text: "Town or city" },
  classes: "govuk-input--width-20",
  id: "address-town",
  name: "addressTown",
  autocomplete: "address-level2"
}) }}

{{ govukInput({
  label: { text: "Postcode" },
  classes: "govuk-input--width-10",
  id: "address-postcode",
  name: "addressPostcode",
  autocomplete: "postal-code"
}) }}
```

### International address with country selector

#### Nunjucks

```njk
{{ govukSelect({
  id: "address-country",
  name: "addressCountry",
  label: {
    text: "Country"
  },
  items: [
    { value: "", text: "Select a country" },
    { value: "GB", text: "United Kingdom" },
    { value: "US", text: "United States" },
    { value: "FR", text: "France" },
    { value: "DE", text: "Germany" }
  ]
}) }}

{{ govukTextarea({
  label: { text: "Full address" },
  id: "address-international",
  name: "addressInternational",
  rows: 5
}) }}
```

## Error Messages

- Address line 1: "Enter the first line of your address"
- Town or city: "Enter your town or city"
- Postcode (UK): "Enter your postcode"
- Postcode format: "Enter a real postcode"
- Country: "Select a country"
- International address: "Enter your address"

## Accessibility

- Use the HTML `autocomplete` attribute on all address fields. Apply the correct token values: `address-line1`, `address-line2`, `address-level2` (town or city), `postal-code`, `country-name`.
- Give every form field a visible, descriptive `<label>` element.
- Mark optional fields with "(optional)" in the label text. Do not use asterisks to mark required fields.
- Link error messages to their input using `aria-describedby`.
- When using a country selector with autocomplete, test that keyboard users can navigate the suggestions and that screen readers announce results.

## Do and Do not

**Do:**
- Start with the GOV.UK address lookup pattern for UK addresses.
- Add a country selector when the service handles international addresses.
- Provide manual entry as a fallback for address lookups.
- Use `autocomplete` attributes with the correct address tokens.
- Accept postcodes with or without spaces, in upper or lowercase.
- Mark optional fields as "(optional)".

**Do not:**
- Do not build a custom address pattern when the GOV.UK pattern meets your needs.
- Do not apply UK postcode validation to international addresses.
- Do not force international users into a UK-format address structure.
- Do not make the address lookup the only entry method — always provide manual entry.
- Do not collect county unless the service needs it.
- Do not use placeholder text to show expected formats.

## Related Components / Patterns

- [../../../govuk-design-system/patterns/ask-users-for/addresses/SKILLS.md](../../../govuk-design-system/patterns/ask-users-for/addresses/SKILLS.md)
- [../../../govuk-design-system/components/text-input/SKILLS.md](../../../govuk-design-system/components/text-input/SKILLS.md)
- [../../../govuk-design-system/components/textarea/SKILLS.md](../../../govuk-design-system/components/textarea/SKILLS.md)
- [../../../govuk-design-system/components/select/SKILLS.md](../../../govuk-design-system/components/select/SKILLS.md)
- [../../../govuk-design-system/components/error-message/SKILLS.md](../../../govuk-design-system/components/error-message/SKILLS.md)
