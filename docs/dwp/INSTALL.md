# DWP Design System — Setup details

For the full installation guide (cloning the repo, setting up your AI tool), see the [root INSTALL.md](../../INSTALL.md).

This page covers DWP-specific paths, class prefixes, and configuration snippets you will need when following the root guide.

## Paths

| Item | Path |
|------|------|
| Components | `dwp-design-system/components/` |
| Patterns | `dwp-design-system/patterns/` |
| Templates | `dwp-design-system/templates/` |
| Agent files | `dwp-design-system/agents/` |
| Foundations | `dwp-design-system/foundations/` |
| Accessibility | `dwp-design-system/accessibility/` |
| GOV.UK core | `govuk-design-system/components/`, `govuk-design-system/styles/`, `govuk-design-system/patterns/` |

## Key details

| Detail | Value |
|--------|-------|
| CSS class prefix (core) | `govuk-` |
| CSS class prefix (DWP) | `dwp-` |
| Frontend packages | `govuk-frontend` (v5.x) + `@dwp/dwp-frontend` (v3.x) |
| Prototype Kit | GOV.UK Prototype Kit |
| Design system | [design-system.dwp.gov.uk](https://design-system.dwp.gov.uk/) |
| Accessibility manual | [accessibility-manual.dwp.gov.uk](https://accessibility-manual.dwp.gov.uk/) |

## Prerequisites

- Node.js (check the version your project requires — GOV.UK Prototype Kit specifies this in `package.json`)
- npm

## Installing the packages

```bash
npm install govuk-frontend @dwp/dwp-frontend
```

The DWP Frontend source code lives on GitLab. The npm package on the public registry contains the compiled assets.

## GOV.UK Prototype Kit setup

If you use the GOV.UK Prototype Kit, DWP Frontend auto-registers its Nunjucks macros when you install the package. No extra configuration needed.

Install and run:

```bash
npm install @dwp/dwp-frontend
npx govuk-prototype-kit start
```

The kit picks up DWP Frontend macros and Sass automatically through the plugin system.

## Standalone build setup

If you build outside the Prototype Kit, configure Nunjucks paths, Sass imports, and JavaScript manually.

### Nunjucks paths

Add both GOV.UK Frontend and DWP Frontend to your Nunjucks search paths:

```js
const nunjucks = require('nunjucks');

const nunjucksEnv = nunjucks.configure([
  'node_modules/govuk-frontend/dist',
  'node_modules/@dwp/dwp-frontend/packages/components',
  'app/views'
]);
```

### Sass imports

Import GOV.UK Frontend first, then DWP Frontend:

```scss
@import "node_modules/govuk-frontend/dist/govuk/all";
@import "node_modules/@dwp/dwp-frontend/packages/components/all";
```

### JavaScript

Initialise GOV.UK Frontend components:

```js
import { initAll } from 'govuk-frontend';

initAll();
```

DWP Frontend components that need JavaScript will document their own initialisation in the relevant SKILLS.md file.

## Usage guide

See [GUIDE.md](GUIDE.md) for DWP-specific example prompts, file recommendations, and setup snippets for Claude Code, Cursor, Copilot, ChatGPT, and Claude.ai.
