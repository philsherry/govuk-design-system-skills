---
category: components
description: A form control that lets users select and upload one or more files.
govuk-frontend: "5.x"
keywords:
  - "document upload"
  - "file"
  - "file input"
  - "file upload"
  - "upload"
last-reviewed: "2026-04-03"
name: File Upload
source: "https://design-system.service.gov.uk/components/file-upload/"
---

# File Upload

> A form control that lets users select and upload one or more files.
> Source: https://design-system.service.gov.uk/components/file-upload/

## Overview

The file upload component provides a native browser file input that lets users select one or more files from their device to upload. It matches the styling of other GOV.UK Frontend form components and supports labels, hint text, error messages, and the standard form group wrapper.

The component renders a native `<input type="file">` element. This is the most accessible and widely supported approach for file uploads. Custom styled file inputs built with JavaScript often lack accessibility and compatibility with assistive technologies.

In GOV.UK Frontend v5.x the component supports the `multiple` attribute for selecting more than one file at a time, the `accept` attribute for restricting file types, and all standard form component options including error states and the full accessible label/hint/error pattern.

## When to use this component

- When users need to upload a document, image, or other file as part of a service.
- When file upload is a required step in a transaction.
- When you need to accept supporting evidence, identity documents, or application attachments.

## When not to use this component

- Do not use file upload to collect data that a form could collect more efficiently — for example, asking users to upload a spreadsheet when a form would be clearer.
- Do not use file upload when a different channel (post, email) would better serve the user.
- Avoid allowing large file uploads unless your service infrastructure supports them.

## How it works

The component renders an `<input type="file">` within the standard GOV.UK form group pattern: a `<div class="govuk-form-group">` containing a `<label>`, optional hint, optional error message, and the input.

**accept:** The `accept` attribute specifies which file types the browser should accept. For example, `accept: ".pdf,.doc,.docx"` or `accept: "image/*"`. This hints to the browser to filter the file picker, but does not prevent users from selecting other file types — always validate server-side.

**multiple:** Setting `multiple: true` adds the `multiple` attribute to the input, letting users select more than one file at a time.

**Error state:** When you provide `errorMessage`, the form group receives `govuk-form-group--error` and the input receives `govuk-file-upload--error`. The error message sits between the hint and the input.

**Label as page heading:** The `label.isPageHeading` option wraps the label text in an `<h1>`, following the one-question-per-page pattern.

**JavaScript enhancement:** GOV.UK Frontend v5.x does not add custom JavaScript behaviour to the file upload component — it uses the native browser file input. Some services add progressive enhancement on top of this (for example, showing a file preview), but this is outside the scope of the component itself.

## Code Examples

### Default / Basic

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-1">
    Upload a file
  </label>
  <input class="govuk-file-upload" id="file-upload-1" name="file-upload-1" type="file">
</div>
```

#### Nunjucks

```njk
{{ govukFileUpload({
  id: "file-upload-1",
  name: "file-upload-1",
  label: {
    text: "Upload a file"
  }
}) }}
```

### With hint text

#### HTML

```html
<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload-docs">
    Upload supporting documents
  </label>
  <div id="file-upload-docs-hint" class="govuk-hint">
    Your files must be a PDF, JPG or PNG. Maximum file size 10MB.
  </div>
  <input class="govuk-file-upload" id="file-upload-docs" name="file-upload-docs" type="file" aria-describedby="file-upload-docs-hint" accept=".pdf,.jpg,.jpeg,.png">
</div>
```

#### Nunjucks

```njk
{{ govukFileUpload({
  id: "file-upload-docs",
  name: "file-upload-docs",
  label: {
    text: "Upload supporting documents"
  },
  hint: {
    text: "Your files must be a PDF, JPG or PNG. Maximum file size 10MB."
  },
  accept: ".pdf,.jpg,.jpeg,.png"
}) }}
```

### With error message

#### HTML

```html
<div class="govuk-form-group govuk-form-group--error">
  <label class="govuk-label" for="file-upload-error">
    Upload a file
  </label>
  <p id="file-upload-error-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Select a file to upload
  </p>
  <input class="govuk-file-upload govuk-file-upload--error" id="file-upload-error" name="file-upload-error" type="file" aria-describedby="file-upload-error-error">
</div>
```

#### Nunjucks

```njk
{{ govukFileUpload({
  id: "file-upload-error",
  name: "file-upload-error",
  label: {
    text: "Upload a file"
  },
  errorMessage: {
    text: "Select a file to upload"
  }
}) }}
```

### With label as page heading

#### HTML

```html
<div class="govuk-form-group">
  <h1 class="govuk-label-wrapper">
    <label class="govuk-label govuk-label--l" for="file-upload-heading">
      Upload your passport photo
    </label>
  </h1>
  <div id="file-upload-heading-hint" class="govuk-hint">
    The photo must be a JPG or PNG. Maximum file size 2MB.
  </div>
  <input class="govuk-file-upload" id="file-upload-heading" name="file-upload-heading" type="file" aria-describedby="file-upload-heading-hint" accept=".jpg,.jpeg,.png">
</div>
```

#### Nunjucks

```njk
{{ govukFileUpload({
  id: "file-upload-heading",
  name: "file-upload-heading",
  label: {
    text: "Upload your passport photo",
    classes: "govuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "The photo must be a JPG or PNG. Maximum file size 2MB."
  },
  accept: ".jpg,.jpeg,.png"
}) }}
```

### Multiple file upload

#### Nunjucks

```njk
{{ govukFileUpload({
  id: "file-upload-multiple",
  name: "file-upload-multiple",
  label: {
    text: "Upload your supporting documents"
  },
  hint: {
    text: "You can select up to 10 files. Each file must be less than 5MB."
  },
  multiple: true,
  accept: ".pdf,.doc,.docx"
}) }}
```

### With extra attributes (for example JavaScript hooks)

#### Nunjucks

```njk
{{ govukFileUpload({
  id: "file-upload-custom",
  name: "file-upload-custom",
  label: {
    text: "Upload a document"
  },
  attributes: {
    "data-max-file-size": "10485760",
    "data-allowed-file-types": "pdf,docx"
  }
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | The `id` attribute for the file input. Also used as a prefix for related element IDs. |
| `name` | string | Yes | The `name` attribute for the file input. |
| `label` | object | Yes | Options for the label element. |
| `label.text` | string | Yes (or html) | Text for the label. |
| `label.html` | string | Yes (or text) | HTML for the label. |
| `label.classes` | string | No | Classes to add to the label. Use `govuk-label--l` for large label. |
| `label.isPageHeading` | boolean | No | Whether the label also acts as the page `<h1>`. Default is `false`. |
| `label.for` | string | No | The `for` attribute on the label. Defaults to the `id` of the input. |
| `label.attributes` | object | No | HTML attributes to add to the label. |
| `hint` | object | No | Options for hint text. |
| `hint.text` | string | Yes (or html) | Text for the hint. |
| `hint.html` | string | Yes (or text) | HTML for the hint. |
| `hint.id` | string | No | `id` for the hint element. |
| `hint.classes` | string | No | Classes for the hint element. |
| `hint.attributes` | object | No | HTML attributes for the hint element. |
| `errorMessage` | object | No | Options for the error message. |
| `errorMessage.text` | string | Yes (or html) | Text of the error message. |
| `errorMessage.html` | string | Yes (or text) | HTML of the error message. |
| `formGroup` | object | No | Options for the wrapping form group. |
| `formGroup.classes` | string | No | Classes to add to the form group. |
| `formGroup.attributes` | object | No | HTML attributes to add to the form group. |
| `classes` | string | No | Classes to add to the file input. |
| `attributes` | object | No | HTML attributes to add to the file input. |
| `accept` | string | No | The `accept` attribute specifying allowed file types. For example `".pdf,.jpg"` or `"image/*"`. |
| `multiple` | boolean | No | Whether to allow multiple file selection. Adds the `multiple` attribute. Default is `false`. |
| `disabled` | boolean | No | Whether the input is disabled. Default is `false`. |
| `value` | string | No | Note: file inputs do not support `value` for security reasons. This parameter is not used. |

## Error Messages

**If the user selects no file and the service requires one:**
"Select [whatever the file is]"
Example: "Select a supporting document"
Example: "Select a passport photo"

**If the file is the wrong type:**
"The selected file must be a [list of file types]"
Example: "The selected file must be a PDF or Word document"
Example: "The selected file must be a JPG or PNG"

**If the file is too large:**
"The selected file must be smaller than [size]"
Example: "The selected file must be smaller than 2MB"

**If the file is empty:**
"The selected file is empty"

**If the file is corrupt or cannot be read:**
"The selected file could not be uploaded — try again"

**If the user selects more files than the limit allows (for more than one upload):**
"You can select up to [number] files at the same time"

**If the upload fails:**
"The selected file could not be uploaded — try again"

## Accessibility

- The native `<input type="file">` is fully accessible: keyboard focusable, operable with Space or Enter, and announced as expected by screen readers.
- The label connects to the input via `for` and `id`, so screen readers announce it when the input receives focus.
- Hint text connects via `aria-describedby` on the input, so screen readers read it when the field receives focus.
- Error messages also connect via `aria-describedby`.
- Avoid replacing the native file input with a custom JavaScript implementation — these are frequently inaccessible.
- The `accept` attribute hints to sighted users but browsers do not enforce it — always validate file types and sizes server-side.
- After a failed upload attempt, show validation errors using the standard error summary and error message pattern.

## Do and Do not

**Do:**
- Use hint text to tell users what file types and size limits the service supports before they choose a file.
- Validate file type, size, and content server-side regardless of the `accept` attribute.
- Show clear, specific error messages explaining what was wrong and how to fix it.
- Use `label.isPageHeading: true` when the file upload is the only (or primary) element on the page.
- Consider the user's connectivity — provide clear feedback if an upload is in progress.

**Do not:**
- Do not hide the native file input and replace it with a custom styled element unless you can guarantee full accessibility.
- Do not rely on the `accept` attribute alone for validation — users can bypass it.
- Do not use vague error messages like "Upload failed" — tell users precisely what went wrong.
- Do not require users to upload files when they could enter the same information through a form instead.
- Do not allow files larger than your infrastructure can handle without communicating the limit to users.

## Related Components / Patterns

- [Error message](../error-message/SKILLS.md) — for displaying validation errors.
- [Error summary](../error-summary/SKILLS.md) — for listing page-level errors after form submission.
- [Text input](../text-input/SKILLS.md) — for text-based data input as an alternative to file upload.
- Upload files pattern — the broader pattern guidance for collecting file uploads in a service.
