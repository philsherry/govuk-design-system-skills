---
category: components
description: A form control that lets users select and upload a file.
keywords:
  - "document upload"
  - "file"
  - "file input"
  - "file upload"
  - "upload"
last-reviewed: "2026-04-03"
name: File Upload
nhsuk-frontend: "9.x"
source: "https://service-manual.nhs.uk/design-system/components/file-upload"
---

# File Upload

> A form control that lets users select and upload a file.
> Source: https://service-manual.nhs.uk/design-system/components/file-upload

## Overview

The file upload component provides a native browser file input that lets users select a file from their device to upload. It matches the styling of other NHS UK Frontend form components and supports labels, hint text, error messages, and the standard form group wrapper.

The component renders a native `<input type="file">` element. This is the most accessible and widely supported approach for file uploads. Custom styled file inputs built with JavaScript often lack accessibility and compatibility with assistive technologies.

## When to use this component

- When users need to upload a document, image, or other file as part of an NHS service.
- When file upload is a required step in a transaction — for example, uploading a photo of a prescription or a medical document.
- When you need to accept supporting evidence or identity documents.

## When not to use this component

- Do not use file upload to collect data that a form could collect more efficiently — for example, asking users to upload a spreadsheet when a form would be clearer.
- Do not use file upload when a different channel (post, email) would better serve the user.
- Avoid allowing large file uploads unless your service infrastructure supports them.

## How it works

The component renders an `<input type="file">` within the standard NHS form group pattern: a `<div class="nhsuk-form-group">` containing a `<label>`, optional hint, optional error message, and the input.

**accept:** The `accept` attribute specifies which file types the browser should accept. For example, `accept: ".pdf,.doc,.docx"` or `accept: "image/*"`. This hints to the browser to filter the file picker, but does not prevent users from selecting other file types — always validate server-side.

**Error state:** When you provide `errorMessage`, the form group receives `nhsuk-form-group--error` and the input receives `nhsuk-file-upload--error`. The error message sits between the hint and the input.

**Label as page heading:** The `label.isPageHeading` option wraps the label text in an `<h1>`, following the one-question-per-page pattern.

## Code Examples

### Default / Basic

#### HTML

```html
<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="file-upload-1">
    Upload a file
  </label>
  <input class="nhsuk-file-upload" id="file-upload-1" name="file-upload-1" type="file">
</div>
```

#### Nunjucks

```njk
{{ fileUpload({
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
<div class="nhsuk-form-group">
  <label class="nhsuk-label" for="file-upload-docs">
    Upload your supporting documents
  </label>
  <div id="file-upload-docs-hint" class="nhsuk-hint">
    Your files must be a PDF, JPG or PNG. Maximum file size 10MB.
  </div>
  <input class="nhsuk-file-upload" id="file-upload-docs" name="file-upload-docs" type="file" aria-describedby="file-upload-docs-hint" accept=".pdf,.jpg,.jpeg,.png">
</div>
```

#### Nunjucks

```njk
{{ fileUpload({
  id: "file-upload-docs",
  name: "file-upload-docs",
  label: {
    text: "Upload your supporting documents"
  },
  hint: {
    text: "Your files must be a PDF, JPG or PNG. Maximum file size 10MB."
  },
  attributes: {
    accept: ".pdf,.jpg,.jpeg,.png"
  }
}) }}
```

### With error message

#### HTML

```html
<div class="nhsuk-form-group nhsuk-form-group--error">
  <label class="nhsuk-label" for="file-upload-error">
    Upload a file
  </label>
  <span id="file-upload-error-error" class="nhsuk-error-message">
    <span class="nhsuk-u-visually-hidden">Error: </span>Select a file to upload
  </span>
  <input class="nhsuk-file-upload nhsuk-file-upload--error" id="file-upload-error" name="file-upload-error" type="file" aria-describedby="file-upload-error-error">
</div>
```

#### Nunjucks

```njk
{{ fileUpload({
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

#### Nunjucks

```njk
{{ fileUpload({
  id: "file-upload-heading",
  name: "file-upload-heading",
  label: {
    text: "Upload your prescription photo",
    classes: "nhsuk-label--l",
    isPageHeading: true
  },
  hint: {
    text: "The photo must be a JPG or PNG. Maximum file size 2MB."
  },
  attributes: {
    accept: ".jpg,.jpeg,.png"
  }
}) }}
```

## Nunjucks Macro Options

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `id` | string | Yes | The `id` attribute for the file input. |
| `name` | string | Yes | The `name` attribute for the file input. |
| `label` | object | Yes | Options for the label element. |
| `label.text` | string | Yes (or html) | Text for the label. |
| `label.html` | string | Yes (or text) | HTML for the label. |
| `label.classes` | string | No | Classes to add to the label. Use `nhsuk-label--l` for large label. |
| `label.isPageHeading` | boolean | No | Whether the label also acts as the page `<h1>`. Default is `false`. |
| `hint` | object | No | Options for hint text. |
| `hint.text` | string | Yes (or html) | Text for the hint. |
| `hint.html` | string | Yes (or text) | HTML for the hint. |
| `errorMessage` | object | No | Options for the error message. |
| `errorMessage.text` | string | Yes (or html) | Text of the error message. |
| `errorMessage.html` | string | Yes (or text) | HTML of the error message. |
| `formGroup` | object | No | Options for the wrapping form group. |
| `classes` | string | No | Classes to add to the file input. |
| `attributes` | object | No | HTML attributes to add to the file input (e.g. `accept`). |
| `disabled` | boolean | No | Whether the input is disabled. Default is `false`. |

## Error Messages

**If the user selects no file and the service requires one:**
"Select [whatever the file is]"
Example: "Select a supporting document"

**If the file is the wrong type:**
"The selected file must be a [list of file types]"
Example: "The selected file must be a PDF or Word document"

**If the file is too large:**
"The selected file must be smaller than [size]"
Example: "The selected file must be smaller than 2MB"

**If the file is empty:**
"The selected file is empty"

**If the upload fails:**
"The selected file could not be uploaded — try again"

## Accessibility

- The native `<input type="file">` is fully accessible: keyboard focusable, operable with Space or Enter, and announced as expected by screen readers.
- The label connects to the input via `for` and `id`, so screen readers announce it when the input receives focus.
- Hint text connects via `aria-describedby` on the input.
- Error messages also connect via `aria-describedby`.
- Avoid replacing the native file input with a custom JavaScript implementation — these are often inaccessible.
- The `accept` attribute hints to sighted users but browsers do not enforce it — always validate file types and sizes server-side.

## Do and Do not

**Do:**
- Use hint text to tell users what file types and size limits the service supports before they choose a file.
- Validate file type, size, and content server-side regardless of the `accept` attribute.
- Show clear, specific error messages explaining what went wrong and how to fix it.
- Use `label.isPageHeading: true` when the file upload is the only element on the page.

**Do not:**
- Do not hide the native file input and replace it with a custom styled element unless you can guarantee full accessibility.
- Do not rely on the `accept` attribute alone for validation — users can bypass it.
- Do not use vague error messages like "Upload failed" — tell users what went wrong.
- Do not require users to upload files when they could enter the same information through a form instead.

## Related Components / Patterns

- [Error message](../error-message/SKILLS.md) — for displaying validation errors.
- [Error summary](../error-summary/SKILLS.md) — for listing page-level errors after form submission.
- [Text input](../text-input/SKILLS.md) — for text-based data input as an alternative to file upload.
