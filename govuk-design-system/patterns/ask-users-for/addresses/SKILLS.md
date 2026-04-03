---
category: patterns
description: Use this pattern to collect a postal address from users — choose between a free-text field or a structured address lookup depending on your service's needs.
govuk-frontend: "5.x"
keywords:
  - "address entry"
  - "address lookup"
  - "addresses"
  - "postcode"
last-reviewed: "2026-04-03"
name: Addresses
source: "https://design-system.service.gov.uk/patterns/addresses/"
subcategory: ask-users-for
---

# Addresses

> Use this pattern to collect a postal address from users — choose between a free-text field or a structured address lookup depending on your service's needs.
> Source: https://design-system.service.gov.uk/patterns/addresses/

## Overview

The addresses pattern helps you collect postal addresses from users. No single approach suits every service — the right choice depends on your users and the kind of addresses your service needs to handle. The GOV.UK Design System provides guidance on two main approaches: a multi-field layout and an address lookup using a postcode search.

Multi-field address inputs give users a familiar, structured way to enter an address. An address lookup (postcode lookup) reduces the amount of typing required and can help reduce errors caused by mistyped addresses, but requires integration with a third-party postcode or address API and introduces extra technical complexity.

Base your choice on research. If your service handles international addresses, a free-text approach (single textarea) may be more inclusive, as structured fields often assume a UK address format.

## When to use this pattern

- When your service needs to collect a postal address from a user.
- When sending correspondence, deliveries, or official documents to a user.
- When you need to verify a user's identity or location against an address.

## When not to use this pattern

- Do not use a rigid structured format if your service needs to accept international addresses — structured UK fields will not accommodate all international formats. Use a free-text textarea instead.
- Do not build an address lookup if your user research does not justify the added complexity and maintenance cost.
- Do not collect addresses you do not need — only ask for an address if your service genuinely requires it.

## How it works

### Separate address fields

The most common approach for UK addresses is to use separate text input fields:

- **Address line 1** (required) — the building name or number and street
- **Address line 2** (optional) — extra address information, for example a flat number or village name
- **Town or city** (required)
- **County** (optional) — include only if needed; most UK addresses do not need a county
- **Postcode** (required for UK addresses)

Do not split the first line of an address into separate house number and street fields. Users enter their address in a wide range of formats and combining them into one field is more flexible and accessible.

Label the optional fields as "(optional)". Do not mark required fields with an asterisk — instead mark optional fields.

### Address lookup (postcode lookup)

An address lookup lets users enter their postcode and then select their address from a list. This reduces errors and speeds up entry. If you use a lookup:

1. Show a postcode input field.
2. On submission, call an address API and show a list of matching addresses.
3. Let the user select their address from the list or enter it manually if their address is not listed.
4. Populate the individual address fields from the selected address.
5. Allow users to edit the populated fields before submitting.

Always give users the option to enter their address manually, in case the lookup fails or their address is not found.

### International addresses

If your service needs to accept addresses from outside the UK:

- Consider using a single textarea for the full address.
- Add a country selector at the end.
- Avoid postcode-specific validation for international addresses.

## Code Examples

### Address fields

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
  <label class="govuk-label" for="address-county">
    County (optional)
  </label>
  <input class="govuk-input govuk-input--width-20" id="address-county" name="addressCounty" type="text">
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
  label: {
    text: "Address line 1"
  },
  id: "address-line-1",
  name: "addressLine1",
  autocomplete: "address-line1"
}) }}

{{ govukInput({
  label: {
    text: "Address line 2 (optional)"
  },
  id: "address-line-2",
  name: "addressLine2",
  autocomplete: "address-line2"
}) }}

{{ govukInput({
  label: {
    text: "Town or city"
  },
  classes: "govuk-input--width-20",
  id: "address-town",
  name: "addressTown",
  autocomplete: "address-level2"
}) }}

{{ govukInput({
  label: {
    text: "County (optional)"
  },
  classes: "govuk-input--width-20",
  id: "address-county",
  name: "addressCounty"
}) }}

{{ govukInput({
  label: {
    text: "Postcode"
  },
  classes: "govuk-input--width-10",
  id: "address-postcode",
  name: "addressPostcode",
  autocomplete: "postal-code"
}) }}
```

### With error messages

#### HTML

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="address-line-1">
    Address line 1
  </label>
  <p id="address-line-1-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Enter the first line of your address
  </p>
  <input class="govuk-input govuk-input--error" id="address-line-1" name="addressLine1" type="text" autocomplete="address-line1" aria-describedby="address-line-1-error">
</div>
```

#### Nunjucks

```njk
{{ govukInput({
  label: {
    text: "Address line 1"
  },
  id: "address-line-1",
  name: "addressLine1",
  autocomplete: "address-line1",
  errorMessage: {
    text: "Enter the first line of your address"
  }
}) }}
```

### Free-text (international addresses)

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="address">
    Address
  </label>
  <textarea class="govuk-textarea" id="address" name="address" rows="5"></textarea>
</div>
```

#### Nunjucks

```njk
{{ govukTextarea({
  label: {
    text: "Address"
  },
  id: "address",
  name: "address",
  rows: 5
}) }}
```

## Error Messages

If the user leaves a required field blank:

- Address line 1: "Enter the first line of your address"
- Town or city: "Enter your town or city"
- Postcode: "Enter your postcode"

If a postcode is in the wrong format:

- "Enter a real postcode"
- "Enter a full UK postcode" (if partial postcode entered)

If the address lookup finds no results:

- "We could not find any addresses for that postcode. Enter your address manually."

## Accessibility

- Use the HTML `autocomplete` attribute on address fields to help users with autofill. Use the appropriate autocomplete token values: `address-line1`, `address-line2`, `address-level2` (town/city), `postal-code`, `country-name`.
- All form fields must have a visible, descriptive `<label>` element.
- Optional fields must carry the "(optional)" label — do not rely on colour or placeholder text alone.
- Error messages must link to their input via `aria-describedby`.
- If using a postcode lookup, ensure keyboard navigation works as expected through the results list, and that screen readers announce the results to users.

## Do and Do not

**Do:**
- Use the `autocomplete` attribute with the correct address tokens on all address fields.
- Mark optional fields as "(optional)".
- Provide a manual entry option when using a postcode lookup.
- Allow users to enter postcodes with or without spaces and accept both upper and lowercase.
- Check postcodes using a format check, not a length check alone.
- Consider whether you actually need county — most UK addresses do not require it.

**Do not:**
- Do not split "house number" and "street name" into separate fields — combine them in "Address line 1".
- Do not use asterisks to mark required fields; mark optional fields instead.
- Do not make the address lookup the only way to enter an address.
- Do not use placeholder text to convey important information, such as the expected format.
- Do not use a rigid UK address structure for international users.
- Do not check against a specific list of valid towns or counties.

## Related Components / Patterns

- [../../components/text-input/SKILLS.md](../../components/text-input/SKILLS.md)
- [../../components/textarea/SKILLS.md](../../components/textarea/SKILLS.md)
- [../../components/error-message/SKILLS.md](../../components/error-message/SKILLS.md)
- [../../components/error-summary/SKILLS.md](../../components/error-summary/SKILLS.md)
- [../../components/fieldset/SKILLS.md](../../components/fieldset/SKILLS.md)
- [../names/SKILLS.md](../names/SKILLS.md)
