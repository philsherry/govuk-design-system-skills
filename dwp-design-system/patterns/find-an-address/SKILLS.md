---
category: patterns
description: Help users find and confirm a UK residential address using the DWP Address Service.
dwp-frontend: "3.x"
keywords:
  - "address"
  - "address lookup"
  - "find address"
  - "manual address"
  - "postcode"
  - "postcode lookup"
last-reviewed: "2026-04-04"
name: Find an address
source: "https://design-system.dwp.gov.uk/patterns/find-an-address"
---

# Find an address

> Help users find and confirm a UK residential address using the DWP Address Service.
> Source: <https://design-system.dwp.gov.uk/patterns/find-an-address>

## Overview

The "Find an address" pattern lets users look up a UK residential address by postcode, choose from a list of matches, and confirm the result. It connects to the DWP Address Service and reduces input errors compared to free-text address entry. The pattern always includes a manual entry fallback for addresses that do not appear in the lookup results or for users who prefer to type their address directly.

## When to use this pattern

Use this pattern when a service needs a UK residential address from the user. The postcode lookup reduces input errors and speeds up the process.

## When not to use this pattern

Do not use this pattern when:

- the service already holds the user's address — do not ask for information DWP already has
- you need international addresses — this pattern and the DWP Address Service handle UK addresses only
- the user needs to enter a business or commercial address — the lookup handles residential addresses only

## How it works

The pattern has three steps:

### Step 1: Enter postcode

Ask the user for their postcode and, optionally, a building name or number to narrow the results.

Use a single text input for the postcode. Add a second text input for building name or number if your service benefits from narrower results.

Always provide a "I cannot find my address" link or a direct link to manual entry beneath the search button.

### Step 2: Choose from a list

Show matching addresses in a `<select>` element. The first option should read "X addresses found" (where X is the count) and have an empty value.

Do not paginate the results. Display all matches in a single list.

Include a link to enter the address manually below the select, in case the correct address does not appear.

### Step 3: Confirm the address

Display the selected address on a confirmation page. Let the user change or re-enter their address if the result is wrong.

### Manual entry fallback

The manual entry form must always be available. Some addresses do not appear in lookup results, and some users prefer to type their address directly.

The manual entry form should include:

- Address line 1
- Address line 2 (optional)
- Town or city
- County (optional)
- Postcode

## Code examples

### Step 1: Postcode input

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">Find your address</h1>

    <form method="post" novalidate>
      <div class="govuk-form-group">
        <label class="govuk-label" for="postcode">
          Postcode
        </label>
        <input class="govuk-input govuk-input--width-10" id="postcode" name="postcode" type="text" autocomplete="postal-code">
      </div>

      <div class="govuk-form-group">
        <label class="govuk-label" for="building">
          Building name or number (optional)
        </label>
        <input class="govuk-input govuk-input--width-20" id="building" name="building" type="text">
      </div>

      <button type="submit" class="govuk-button" data-module="govuk-button">
        Find address
      </button>
    </form>

    <p class="govuk-body">
      <a href="/address/manual" class="govuk-link">Enter address manually</a>
    </p>

  </div>
</div>
```

#### Nunjucks

```njk
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">Find your address</h1>

    <form method="post" novalidate>
      {{ govukInput({
        label: { text: "Postcode" },
        classes: "govuk-input--width-10",
        id: "postcode",
        name: "postcode",
        autocomplete: "postal-code"
      }) }}

      {{ govukInput({
        label: { text: "Building name or number (optional)" },
        classes: "govuk-input--width-20",
        id: "building",
        name: "building"
      }) }}

      {{ govukButton({
        text: "Find address"
      }) }}
    </form>

    <p class="govuk-body">
      <a href="/address/manual" class="govuk-link">Enter address manually</a>
    </p>

  </div>
</div>
```

### Step 2: Choose from results

#### HTML

```html
<div class="govuk-grid-row">
  <div class="govuk-grid-column-two-thirds">

    <h1 class="govuk-heading-l">Choose your address</h1>

    <form method="post" novalidate>
      <div class="govuk-form-group">
        <label class="govuk-label" for="address-select">
          Select an address
        </label>
        <select class="govuk-select" id="address-select" name="address">
          <option value="">7 addresses found</option>
          <option value="1">1 Example Street, London, SE1 1AA</option>
          <option value="2">2 Example Street, London, SE1 1AA</option>
          <option value="3">3 Example Street, London, SE1 1AA</option>
          <option value="4">4 Example Street, London, SE1 1AA</option>
          <option value="5">5 Example Street, London, SE1 1AA</option>
          <option value="6">Flat A, 6 Example Street, London, SE1 1AA</option>
          <option value="7">Flat B, 6 Example Street, London, SE1 1AA</option>
        </select>
      </div>

      <button type="submit" class="govuk-button" data-module="govuk-button">
        Continue
      </button>
    </form>

    <p class="govuk-body">
      <a href="/address/manual" class="govuk-link">I cannot find my address in the list</a>
    </p>

  </div>
</div>
```

## Accessibility

This pattern must meet:

- **[1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG22/#info-and-relationships) (A)**: all form inputs must have visible labels and be programmatically associated using `for` and `id` attributes
- **[1.3.4 Orientation](https://www.w3.org/TR/WCAG22/#orientation) (AA)**: the form must work in both portrait and landscape orientations
- **[1.4.3 Contrast (Minimum)](https://www.w3.org/TR/WCAG22/#contrast-minimum) (AA)**: all text and form controls must meet the 4.5:1 contrast ratio
- **[2.4.11 Focus Not Obscured (Minimum)](https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum) (AA)**: focused elements must remain visible — no other content should obscure them
- **[2.5.8 Target Size (Minimum)](https://www.w3.org/TR/WCAG22/#target-size-minimum) (AA)**: interactive elements must have a target area of at least 24 by 24 CSS pixels

Always offer manual address entry. The postcode lookup requires JavaScript; manual entry works without it.

## Do and do not

**Do:**
- Always provide a manual address entry fallback alongside the postcode lookup.
- Include a "I cannot find my address" or "Enter address manually" link on every step.
- Show all matching addresses in a single `<select>` list — do not paginate results.
- Let users change or re-enter their address on the confirmation step.

**Do not:**
- Do not use this pattern for international addresses — the DWP Address Service handles UK addresses only.
- Do not use this pattern for business or commercial addresses — the lookup handles residential addresses only.
- Do not ask for an address DWP already holds.
- Do not remove the manual entry option, even if the lookup covers most addresses.

## Related components and patterns

- [Ask users for addresses](https://design-system.service.gov.uk/patterns/addresses/) — the GOV.UK pattern for collecting addresses
- [Text input](https://design-system.service.gov.uk/components/text-input/) — used for postcode and building inputs
- [Select](https://design-system.service.gov.uk/components/select/) — used for the address results list
- [Button](https://design-system.service.gov.uk/components/button/) — used for "Find address" and "Continue"
