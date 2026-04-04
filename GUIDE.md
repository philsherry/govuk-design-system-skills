# Usage guide

Once you have installed the skills files and set up your AI tool (see [INSTALL.md](INSTALL.md)), this guide shows you how to put them to work.

For design-system-specific prompts and file lists, see:

- **GOV.UK**: [docs/govuk/GUIDE.md](docs/govuk/GUIDE.md)
- **NHS UK**: [docs/nhsuk/GUIDE.md](docs/nhsuk/GUIDE.md)
- **HMRC**: [docs/hmrc/GUIDE.md](docs/hmrc/GUIDE.md)
- **DWP**: [docs/dwp/GUIDE.md](docs/dwp/GUIDE.md)

## Using agents effectively

Give agents a clear task and the relevant code or design to review.

### One agent at a time

Pick the agent that matches your current question:

- **Building a template?** Use the frontend developer.
- **Writing content or error messages?** Use the content designer.
- **Planning a flow?** Use the interaction designer.
- **Checking accessibility?** Use the accessibility auditor.
- **Preparing for user research?** Use the user researcher.
- **Thinking about the whole service?** Use the service designer.
- **Writing a test plan?** Use the QA tester.

### Run a multidisciplinary review

Once you have built a page or flow, run it through agents in sequence. This mirrors a real multidisciplinary team review:

1. **Interaction designer** first — check the flow makes sense and follows design system patterns.
2. **Content designer** second — check the words are clear, in plain English, and follow the relevant style guide.
3. **Frontend developer** third — check the markup uses the frontend library properly and works without JavaScript.
4. **Accessibility auditor** fourth — check it meets WCAG 2.2 and works with screen readers.
5. **QA tester** last — identify test cases and edge cases you may have missed.

You do not need all five every time. For a simple question page, the frontend developer and content designer cover most issues. For a complex multi-step flow, add the interaction designer and service designer.

### Pair two agents

Some tasks need two perspectives. Paste both agent files into your conversation context (or switch between them) for questions like:

- **Content designer + interaction designer** — "Should this be one question or two? How should we word the question?"
- **Frontend developer + accessibility auditor** — "Is this custom component accessible?"
- **Service designer + user researcher** — "What should we prototype next and what do we need to test?"

### Give agents your code

Agents give better feedback when they can see your code. Instead of describing what you built, paste the template:

```text
Review this page for accessibility issues:

{% extends "layouts/main.html" %}

{% block content %}
  [your template code here]
{% endblock %}
```

### Tell agents what phase you are in

The agents tailor their advice to your service phase. Tell them where you are:

```text
We are in alpha. This is a prototype for user research, not production code.
Review this flow for usability issues we should test next week.
```

This helps the agent calibrate — a QA tester in alpha focuses on flow coverage, while in beta they focus on cross-browser testing and assistive technology.

## Tips

- **Start small.** Load 3-5 skills files for the page you are working on. Add more as you need them.
- **Be specific.** "Help me build a question page that asks for a date of birth" gets better results than "Help me build a form".
- **Paste your code.** AI tools give better advice when they can see what you have built.
- **Say what you have tried.** If something is not working, describe what you expected and what happened instead.
- **Check the output.** AI tools sometimes get details wrong. Compare the generated code against the SKILLS.md file for that component to verify it matches the design system.
- **Iterate.** You do not need to get everything right in one prompt. Build a rough version, then ask the AI to review and improve it.

## Release workflow

GitHub can publish releases from the changelog for this repo.

1. Add the new version to `CHANGELOG.md`.
2. Bump the version in `package.json` and `package-lock.json`.
3. Merge the release PR to `main`.
4. Wait for the auto-release workflow to create `v1.2.0` and publish the
  GitHub Release from `main`.

The auto-tag workflow reads the version from `package.json`, checks that the
same version exists in `CHANGELOG.md` and `package-lock.json`, creates the
semantic version tag if needed, and publishes the GitHub Release with the
matching changelog notes.

Add the `RELEASE_SIGNING_SSH_PRIVATE_KEY` repository secret before you rely on
auto-release. The workflow uses that SSH private key to create a signed tag.
See `.github/RELEASE.md` for release setup and the verification steps.

To check the version metadata before you merge, run:

```bash
npm run release:check
```

If you need to backfill a release for an existing tag, run `tag-release.yml`
manually from the Actions tab.

To check the generated notes before you push a tag, run:

```bash
npm run release:notes -- 1.2.0
```

## Licence

Design system content is Crown Copyright under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/). All other materials fall under the [MIT License](LICENSE).
