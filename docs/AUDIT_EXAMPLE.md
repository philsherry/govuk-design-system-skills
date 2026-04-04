# Accessibility audit report example

This document shows a sample audit report built from the VS Code snippets in `.vscode/audit.code-snippets`. It demonstrates the structure, tone, and level of detail expected in a real report.

The snippets create scaffolding — you fill in the specifics. Every issue must include a description of the problem, the impact on users, and a recommendation for fixing it.

For details on each snippet prefix, see the [audit snippets section in README.md](../README.md#accessibility-audit-snippets).

<!-- summ_exec -->

## Executive summary

Jane Smith conducted an accessibility audit of the Register with a GP service, starting on 03 April.

The service failed to meet WCAG 2.2 to a minimum of Level AA, as summarised below.

<!-- summ_vib -->

### WCAG violation summary (brief)

The following violations need fixing to comply to an AA standard.

| Status                     | Level | Amount |
| -------------------------- | ----- | ------ |
| 🔴 (H) Fail: High Priority   | A     | 3      |
| 🟠 (M) Fail: Medium Priority | AA    | 2      |
| 🟣 (L) Fail: Low Priority    | AAA   | 0      |

The audit also identified usability issues which, while not WCAG violations, should still receive attention before a retest.

<!-- summ_vith + summ_vitd rows -->

The following violations need fixing to comply to an AA standard.

| Status | Level | Issue | Success Criterion |
| ------ | ----- | ----- | ----------------- |
| 🔴 (H) | A | [Form inputs have no associated labels](#form-inputs-have-no-associated-labels) | [1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html) |
| 🔴 (H) | A | [Error summary does not receive focus](#error-summary-does-not-receive-focus) | [4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html) |
| 🔴 (H) | A | [Images missing alt text](#images-missing-alt-text) | [1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html) |
| 🟠 (M) | AA | [Colour contrast fails on hint text](#colour-contrast-fails-on-hint-text) | [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) |
| 🟠 (M) | AA | [Touch targets too small on mobile](#touch-targets-too-small-on-mobile) | [2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) |

<!-- uj -->

## Details for the Register with a GP service

### Instructions to access the service

<!-- ujd -->

- URL: `https://register-with-a-gp.staging.nhs.uk/`
- Browser: `Chrome`
- Operating system: `macOS`
- Assistive technology: `VoiceOver`

The user journey is a sequence of steps that a user takes to complete a task on the website. It includes the following steps:

<!-- ujse, ujsc, ujss steps -->

1. **Start page**

    1. select <kbd>Start now</kbd>

1. **Enter your NHS number**

    1. enter `485 777 3456`
    1. then select <kbd>Continue</kbd>

1. **Enter your date of birth**

    1. enter `15` in Day, `03` in Month, `1984` in Year
    1. then select <kbd>Continue</kbd>

1. **Do you have a current GP?**

    1. choose <kbd>Yes</kbd>
    1. then select <kbd>Continue</kbd>

1. **Check your answers**

    1. select <kbd>Accept and send</kbd>

Test each step for accessibility issues and document them in the report.

## Audit findings

<!-- audit_issue — repeated for each issue found -->

### Form inputs have no associated labels

- **WCAG 2.2 violation**: 1.3.1 Info and Relationships (Level A);
- **Page**: Enter your NHS number;
- **URL**: `/register/nhs-number`;
- **Journey/step**: Step 2;

#### Description

The NHS number input field uses a `<span>` element styled to look like a label, but it has no programmatic association with the input. The `<span>` has no `for` attribute and the input has no `id` that a `<label>` could reference.

#### Impact

Screen reader users (NVDA, JAWS, VoiceOver) will hear "edit text" when they navigate to the input, with no description of what to enter. Sighted users cannot select the label text to focus the input. This affects all users who rely on the programmatic relationship between labels and inputs.

#### Recommendation

Replace the `<span>` with a `<label>` element and associate it with the input using `for` and `id` attributes. Use the NHS UK Frontend `nhsuk-label` class.

```html
<!-- Before (broken) -->
<span class="label-text">What is your NHS number?</span>
<input type="text" name="nhs-number" class="nhsuk-input">

<!-- After (fixed) -->
<label class="nhsuk-label" for="nhs-number">
  What is your NHS number?
</label>
<div class="nhsuk-hint" id="nhs-number-hint">
  Your NHS number is a 10 digit number, like 485 777 3456.
</div>
<input class="nhsuk-input" id="nhs-number" name="nhs-number"
  type="text" inputmode="numeric" aria-describedby="nhs-number-hint">
```

##### Recommended reading

- [Understanding SC 1.3.1 Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [Technique H44: Using label elements to associate text labels with form controls](https://www.w3.org/WAI/WCAG22/Techniques/html/H44)

### Error summary does not receive focus

- **WCAG 2.2 violation**: 4.1.3 Status Messages (Level A);
- **Page**: Enter your NHS number (error state);
- **URL**: `/register/nhs-number`;
- **Journey/step**: Step 2 (after submitting with empty field);

#### Description

When the form submits with validation errors, the error summary appears at the top of the page but does not receive keyboard focus. The page scrolls to the top visually, but focus remains on the submit button.

#### Impact

Screen reader users will not hear the error summary announce. They may not realise errors occurred and will not understand why the form did not proceed. Keyboard-only users must Tab backwards through the page to reach the error links.

#### Recommendation

Add `tabindex="-1"` to the error summary container and use JavaScript to move focus to it on page load when errors exist. NHS UK Frontend handles this automatically when using the `nhsuk-error-summary` component with `data-module="nhsuk-error-summary"` — check that the `data-module` attribute is present.

```html
<div class="nhsuk-error-summary" aria-labelledby="error-summary-title"
  role="alert" tabindex="-1" data-module="nhsuk-error-summary">
  <h2 class="nhsuk-error-summary__title" id="error-summary-title">
    There is a problem
  </h2>
  <div class="nhsuk-error-summary__body">
    <ul class="nhsuk-list nhsuk-error-summary__list">
      <li>
        <a href="#nhs-number">Enter your NHS number</a>
      </li>
    </ul>
  </div>
</div>
```

##### Recommended reading

- [Understanding SC 4.1.3 Status Messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html)
- [NHS UK error summary component](https://service-manual.nhs.uk/design-system/components/error-summary)

### Images missing alt text

- **WCAG 2.2 violation**: 1.1.1 Non-text Content (Level A);
- **Page**: Start page;
- **URL**: `/register/start`;
- **Journey/step**: Step 1;

#### Description

The start page includes a photograph of a GP surgery building. The `<img>` element has no `alt` attribute.

#### Impact

Screen reader users will hear the file name announced instead of a description (for example, "gp-surgery-building-2024-final-v2.jpg"). If the image conveys information relevant to the user's task, the user misses that information. If the image is decorative, the file name adds noise and confusion.

#### Recommendation

If the image is informative, add an `alt` attribute that describes the content: `alt="Exterior of a GP surgery"`. If the image is decorative and adds no information beyond what the text already provides, use an empty alt attribute: `alt=""`.

```html
<!-- Informative image -->
<img src="/images/gp-surgery.jpg" alt="Exterior of a GP surgery"
  class="nhsuk-image__img" width="800" height="600">

<!-- Decorative image -->
<img src="/images/gp-surgery.jpg" alt=""
  class="nhsuk-image__img" width="800" height="600">
```

##### Recommended reading

- [Understanding SC 1.1.1 Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [Technique H37: Using alt attributes on img elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H37)

### Colour contrast fails on hint text

- **WCAG 2.2 violation**: 1.4.3 Contrast (Minimum) (Level AA);
- **Page**: Enter your date of birth;
- **URL**: `/register/date-of-birth`;
- **Journey/step**: Step 3;

#### Description

The hint text "For example, 15 3 1984" uses a custom colour (`#aeb7bd`) on a white background, giving a contrast ratio of 2.8:1. The minimum for normal-sized text is 4.5:1.

#### Impact

Users with low vision or colour vision deficiency may struggle to read the hint text. The hint tells users the expected date format — without it, users may enter dates in the wrong format and trigger avoidable validation errors.

#### Recommendation

Use the NHS UK Frontend hint class `nhsuk-hint`, which applies the pre-tested colour `#4c6272` (NHS Grey 1). This gives a contrast ratio of 5.6:1 against white, meeting the 4.5:1 minimum.

```html
<!-- Before (fails contrast) -->
<span style="color: #aeb7bd">For example, 15 3 1984</span>

<!-- After (passes contrast) -->
<div class="nhsuk-hint" id="dob-hint">For example, 15 3 1984</div>
```

##### Recommended reading

- [Understanding SC 1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [NHS UK colour styles](https://service-manual.nhs.uk/design-system/styles/colour)

### Touch targets too small on mobile

- **WCAG 2.2 violation**: 2.5.8 Target Size (Minimum) (Level AA);
- **Page**: Check your answers;
- **URL**: `/register/check-answers`;
- **Journey/step**: Step 5;

#### Description

The "Change" links in the summary list render at 16x16px on mobile viewports. WCAG 2.2 SC 2.5.8 requires a minimum target size of 24x24px.

#### Impact

Users with motor impairments (arthritis, tremors, limited dexterity) may struggle to activate the small touch targets. This also affects all users on touch devices who have reduced fine motor control — for example, a patient in a hospital bed using a phone.

#### Recommendation

Use the NHS UK Frontend `nhsuk-summary-list` component, which applies sufficient padding to meet the 24x24px minimum. If using custom link styles, ensure the clickable area (including padding) meets the minimum.

##### Recommended reading

- [Understanding SC 2.5.8 Target Size (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)

<!-- audit_obs -->

### Observations

Observations made during the audit.

- **Page titles do not follow the NHS pattern**: Page titles use the format "Register" on every page instead of "[Page heading] - Register with a GP - NHS". This is not a WCAG violation but affects usability for screen reader users who rely on the page title to orient themselves.
- **Impact**: Screen reader users hear "Register" announced on every page, making navigation by page title impossible.
- **Recommendation**: Update page titles to follow the pattern `[Page heading] - [Service name] - NHS`. On error pages, prefix with "Error: ".
- **Recommended reading**: [NHS UK page title pattern](https://service-manual.nhs.uk/design-system)

#### Notes

The team should also consider adding `autocomplete` attributes to the NHS number, name, and date of birth fields to meet WCAG 2.2 SC 1.3.5 Identify Input Purpose. This was not flagged as a violation because the fields were not personal data in the strictest sense, but it would improve the experience for users with cognitive disabilities and users of password managers.

<!-- report_recs -->

### Recommendations

1. Fix all 3 High Priority (Level A) violations before the next assessment. These are legal compliance issues.
2. Fix the 2 Medium Priority (Level AA) violations. These represent the minimum standard for NHS services.
3. Update page titles to follow the NHS pattern.
4. Add `autocomplete` attributes to personal data fields.
5. Retest with NVDA + Firefox and VoiceOver + Safari after fixes to confirm the issues no longer exist.

<!-- report_suggs -->

### Suggestions

1. Add the NHS UK Frontend `data-module` attributes to all components that require JavaScript initialisation. The error summary focus issue points to a missing `data-module="nhsuk-error-summary"` attribute.
2. Run axe DevTools on each page before the next manual audit to catch further automated-detectable issues.
3. Test with a keyboard-only user and a screen reader user during the next round of user research.

<!-- appx_reading -->

### Appendix: reading

- [Accessibility Developer Guide](https://www.accessibility-developer-guide.com/)
- [Adrian Roselli — Consultant, Writer, Speaker](https://adrianroselli.com/)
- [Modern CSS Solutions](https://moderncss.dev/)
- [Web Accessibility Cookbook](https://accessibility-cookbook.com/)

<!-- appx_writing -->

### Appendix: writing

- [Can I Use](https://caniuse.com/)
- [HTML Standard - WHATWG](https://html.spec.whatwg.org/)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [How to Meet WCAG (Quick Reference)](https://www.w3.org/WAI/WCAG22/quickref/)
- [W3C WAI](https://www.w3.org/WAI/)
