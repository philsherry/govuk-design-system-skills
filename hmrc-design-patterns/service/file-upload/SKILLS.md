---
category: patterns
description: HMRC-specific guidance for file uploads, supplementing the GOV.UK file upload component with accepted file types, size limits, and document handling for tax services.
keywords:
  - "document upload"
  - "evidence"
  - "file"
  - "file type"
  - "file upload"
  - "tax return"
  - "upload"
last-reviewed: "2026-04-03"
name: File upload
source: "https://design.tax.service.gov.uk/hmrc-design-patterns/file-upload/"
subcategory: service
---

# File upload

> HMRC-specific guidance for file uploads, supplementing the GOV.UK file upload component with accepted file types, size limits, and document handling for tax services.
> Source: https://design.tax.service.gov.uk/hmrc-design-patterns/file-upload/

## Overview

The HMRC file upload pattern builds on the GOV.UK file upload component. HMRC services that accept document uploads — such as tax returns, evidence for disputes, or identity documents — need additional guidance beyond the base component.

This pattern covers what to tell users about accepted file types and size limits, how to handle upload success and errors, and how to let users review and remove uploaded files.

Use the GOV.UK file upload component as the foundation. Apply the HMRC-specific guidance in this document to handle the extra requirements of tax services.

## When to use

- When an HMRC service needs users to upload documents (for example, tax calculations, P60s, bank statements, or identity documents).
- When users need to submit evidence to support a claim, dispute, or application.
- When the service accepts attachments as part of a transaction.

## When not to use

- Do not use file upload when a form can collect the same information more efficiently — for example, asking users to type values from a P60 rather than uploading the document.
- Do not use file upload for information the service can get from another HMRC system — avoid asking users to provide what you already hold.
- Do not use file upload when post or email would serve the user better.

## How it works

### Before the upload

Tell users:

1. **What documents to upload** — list the specific documents the service accepts (for example, "Upload your P60 for the 2024 to 2025 tax year").
2. **Accepted file types** — state the file types the service accepts (for example, "You can upload PDF, JPG, or PNG files").
3. **Maximum file size** — state the size limit (for example, "Each file must be smaller than 10MB").

Place this information before the file input so users read it before selecting a file.

### The upload input

Use the GOV.UK file upload component. Add the `accept` attribute to hint at allowed file types, but validate on the server side — the `accept` attribute does not prevent users from selecting other file types.

### After a successful upload

Show a success message confirming the upload. Display the file name so users can verify they uploaded the correct file. Provide a "Remove" link so users can delete the file and upload a different one.

### Uploading more than one file

If the service accepts more than one file, show each uploaded file in a list with its file name and a "Remove" link. Add an "Upload another file" button below the list.

Do not use the `multiple` attribute on the file input to select more than one file at once — this approach lacks feedback on individual file status and makes error handling harder. Upload files one at a time.

### Error handling

Show error messages for:

- No file selected: "Select a [document type]"
- Wrong file type: "The selected file must be a [list of accepted types]"
- File too large: "The selected file must be smaller than [size limit]"
- Upload failed: "The file upload failed — try again"
- Virus detected: "The selected file contains a virus"

## Code Examples

### Default file upload with guidance

#### HTML

```html
<h1 class="govuk-heading-l">Upload your P60</h1>

<p class="govuk-body">Upload your P60 for the 2024 to 2025 tax year.</p>

<ul class="govuk-list govuk-list--bullet">
  <li>You can upload PDF, JPG, or PNG files</li>
  <li>Each file must be smaller than 10MB</li>
</ul>

<div class="govuk-form-group">
  <label class="govuk-label" for="file-upload">
    Upload a file
  </label>
  <input
    class="govuk-file-upload"
    id="file-upload"
    name="fileUpload"
    type="file"
    accept=".pdf,.jpg,.jpeg,.png"
  >
</div>
```

#### Nunjucks

```njk
<h1 class="govuk-heading-l">Upload your P60</h1>

<p class="govuk-body">Upload your P60 for the 2024 to 2025 tax year.</p>

<ul class="govuk-list govuk-list--bullet">
  <li>You can upload PDF, JPG, or PNG files</li>
  <li>Each file must be smaller than 10MB</li>
</ul>

{{ govukFileUpload({
  id: "file-upload",
  name: "fileUpload",
  label: {
    text: "Upload a file"
  },
  attributes: {
    accept: ".pdf,.jpg,.jpeg,.png"
  }
}) }}
```

### With error message

#### Nunjucks

```njk
{{ govukFileUpload({
  id: "file-upload",
  name: "fileUpload",
  label: {
    text: "Upload a file"
  },
  attributes: {
    accept: ".pdf,.jpg,.jpeg,.png"
  },
  errorMessage: {
    text: "The selected file must be a PDF, JPG, or PNG"
  }
}) }}
```

### Uploaded file with remove link

#### HTML

```html
<h2 class="govuk-heading-m">Uploaded files</h2>

<dl class="govuk-summary-list">
  <div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      my-p60-2024.pdf
    </dt>
    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="/file/1/remove">
        Remove<span class="govuk-visually-hidden"> my-p60-2024.pdf</span>
      </a>
    </dd>
  </div>
</dl>
```

#### Nunjucks

```njk
{{ govukSummaryList({
  rows: [
    {
      key: { text: "my-p60-2024.pdf" },
      actions: {
        items: [
          {
            href: "/file/1/remove",
            text: "Remove",
            visuallyHiddenText: "my-p60-2024.pdf"
          }
        ]
      }
    }
  ]
}) }}
```

## Error Messages

- No file selected: "Select a [document type]" — for example, "Select a P60"
- Wrong file type: "The selected file must be a PDF, JPG, or PNG"
- File too large: "The selected file must be smaller than 10MB"
- Upload failure: "The file upload failed — try again"
- Virus detected: "The selected file contains a virus"

## Accessibility

- State accepted file types and size limits in visible text before the file input — do not rely on the `accept` attribute alone.
- Each "Remove" link must include visually hidden text with the file name so screen reader users can distinguish between files. "Remove my-p60-2024.pdf" is clear; "Remove" on its own is ambiguous.
- Show error messages using the GOV.UK error message pattern, linked to the file input with `aria-describedby`.
- Success messages should appear in the page content, not as transient notifications that screen readers might miss.
- Upload one file at a time rather than using `multiple` — single file uploads give clearer feedback to assistive technology users.

## Do and Do not

**Do:**
- State accepted file types before the file input.
- State the maximum file size before the file input.
- Show the file name after a successful upload.
- Provide a "Remove" link for each uploaded file.
- Upload files one at a time for clearer error handling.
- Validate file type and size on the server side.
- Tell users what specific documents the service accepts.

**Do not:**
- Do not use file upload when a form can collect the information directly.
- Do not use the `multiple` attribute for HMRC file uploads — upload one file at a time.
- Do not rely on the `accept` attribute for validation — it only hints to the browser.
- Do not ask users to upload documents the service can get from other HMRC systems.
- Do not show success messages as transient alerts — display them in the page content.
- Do not let users proceed without confirming they uploaded the correct file.

## Related Components / Patterns

- [../../../govuk-design-system/components/file-upload/SKILLS.md](../../../govuk-design-system/components/file-upload/SKILLS.md)
- [../../../govuk-design-system/components/summary-list/SKILLS.md](../../../govuk-design-system/components/summary-list/SKILLS.md)
- [../../../govuk-design-system/components/error-message/SKILLS.md](../../../govuk-design-system/components/error-message/SKILLS.md)
- [../../../govuk-design-system/components/error-summary/SKILLS.md](../../../govuk-design-system/components/error-summary/SKILLS.md)
