---
category: patterns
description: Use care cards to help users understand the urgency of a medical situation and decide where to get care.
keywords:
  - "111"
  - "999"
  - "A&E"
  - "care card"
  - "emergency"
  - "GP"
  - "non-urgent"
  - "symptom urgency"
  - "triage"
  - "urgent care"
last-reviewed: "2026-04-03"
name: Decide when and where to get care
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/patterns"
subcategory: help-users-to
---

# Decide when and where to get care

> Use care cards to help users understand the urgency of a medical situation and decide where to get care.
> Source: <https://service-manual.nhs.uk/design-system/patterns>

## Overview

The care card pattern helps users understand the urgency of their symptoms and take the right action. Care cards come in three levels that correspond to the urgency of the medical situation: non-urgent, urgent, and emergency (immediate). Each level uses a distinct colour to reinforce the urgency.

This pattern plays a critical role in NHS health content. Getting care advice wrong can have serious consequences, so care cards must use the correct level, present the advice precisely, and make the next action unmistakable.

## When to use this pattern

- When health content needs to direct users to a specific care setting (GP, urgent care, A&E, 999).
- When users need to understand the severity of symptoms and respond with the right level of urgency.
- When clinical content includes "see a GP", "go to A&E", or "call 999" guidance.

## When not to use this pattern

- Do not use care cards for non-clinical advice or general signposting.
- Do not use them within transactional form pages where the context is data collection rather than health guidance.
- Do not use the emergency care card colour for non-emergency content — this undermines the visual hierarchy of urgency.

## How it works

### Care card levels

| Level | Card type | Colour | When to use |
|---|---|---|---|
| Non-urgent | `nhsuk-care-card--non-urgent` | NHS blue (`#005eb8`) | See a GP or contact 111 |
| Urgent | `nhsuk-care-card--urgent` | NHS red (`#d5281b`) | Go to urgent care, walk-in centre, or minor injuries unit |
| Emergency (immediate) | `nhsuk-care-card--immediate` | NHS dark red (`#8a1538`) | Call 999 or go to A&E |

### Card structure

Each care card contains:

1. A heading that states the action ("See a GP if:", "Call 999 if:", "Go to A&E if:")
2. A list of symptoms or conditions that trigger that action
3. Optional further guidance below the list

### Heading level

The care card heading defaults to `<h2>`. Change the heading level to match the page's heading hierarchy.

## Code examples

### Non-urgent care card

```html
<div class="nhsuk-care-card nhsuk-care-card--non-urgent">
  <div class="nhsuk-care-card__heading-container">
    <h2 class="nhsuk-care-card__heading">
      <span role="text">
        <span class="nhsuk-u-visually-hidden">Non-urgent advice: </span>See a GP if:
      </span>
    </h2>
    <span class="nhsuk-care-card__arrow" aria-hidden="true"></span>
  </div>
  <div class="nhsuk-care-card__content">
    <ul>
      <li>your symptoms do not improve after 2 weeks</li>
      <li>you have a high temperature for more than 3 days</li>
    </ul>
  </div>
</div>
```

### Urgent care card

```html
<div class="nhsuk-care-card nhsuk-care-card--urgent">
  <div class="nhsuk-care-card__heading-container">
    <h2 class="nhsuk-care-card__heading">
      <span role="text">
        <span class="nhsuk-u-visually-hidden">Urgent advice: </span>Ask for an urgent GP appointment or call 111 if:
      </span>
    </h2>
    <span class="nhsuk-care-card__arrow" aria-hidden="true"></span>
  </div>
  <div class="nhsuk-care-card__content">
    <ul>
      <li>you have severe pain that does not improve with painkillers</li>
      <li>your skin is very hot or cold and changes colour</li>
    </ul>
  </div>
</div>
```

### Emergency (immediate) care card

```html
<div class="nhsuk-care-card nhsuk-care-card--immediate">
  <div class="nhsuk-care-card__heading-container">
    <h2 class="nhsuk-care-card__heading">
      <span role="text">
        <span class="nhsuk-u-visually-hidden">Immediate action required: </span>Call 999 if:
      </span>
    </h2>
    <span class="nhsuk-care-card__arrow" aria-hidden="true"></span>
  </div>
  <div class="nhsuk-care-card__content">
    <ul>
      <li>you have sudden, severe chest pain</li>
      <li>you are struggling to breathe</li>
      <li>someone has lost consciousness</li>
    </ul>
  </div>
</div>
```

## Accessibility

- Each care card includes a visually hidden prefix ("Non-urgent advice:", "Urgent advice:", "Immediate action required:") so screen reader users hear the urgency level before the heading text.
- Use `role="text"` on the `<span>` wrapping the hidden prefix and the heading text to ensure screen readers read them as a single phrase.
- The colour of the care card heading reinforces urgency visually, but the text content must convey the urgency independently — do not rely on colour alone.
- Set the heading level to maintain the page's heading hierarchy.

## Do and do not

**Do:**

- Use the correct care card level for the clinical urgency of the advice.
- Include the visually hidden urgency prefix in every care card heading.
- List specific symptoms or conditions that trigger the care action.
- Work with clinical content designers to ensure medical accuracy.

**Do not:**

- Use care cards for non-clinical content.
- Mix urgency levels — do not put GP advice in an emergency care card.
- Remove the visually hidden prefix — screen reader users depend on it.
- Use more than one care card of the same type on a single page unless the clinical guidance requires it.

## Related components and patterns

- [Warning callout component](https://service-manual.nhs.uk/design-system/components/warning-callout)
- [Do and Don't list component](https://service-manual.nhs.uk/design-system/components/do-and-dont-list)
- [Inset text component](https://service-manual.nhs.uk/design-system/components/inset-text)
