# Usage guide

Once you have installed the skills files and set up your AI tool (see [INSTALL.md](INSTALL.md)), this guide shows you how to put them to work.

---

## Example prompts

These prompts work with any AI tool once you have loaded the skills files.

### Build a page from scratch

```text
I need a question page that asks the user for their email address.
It should follow the GOV.UK one-thing-per-page pattern.
Show me the full Nunjucks template.
```

### Add a component to an existing page

```text
I need to add date input fields to this page for "Date of birth".
Include hint text and error handling.
Here is my current template: [paste your code]
```

### Review your code

```text
Review this page template for GOV.UK Design System compliance.
Check the markup, accessibility, and content.
Here is the code: [paste your code]
```

### Fix a specific problem

```text
My error messages are not showing. Here is my route file and my template.
What am I doing wrong?
```

### Get content advice

```text
I need to write the error messages for a National Insurance number field.
What should I say when the field is empty, and when the format is wrong?
```

---

## Using agents effectively

Give agents a clear task and the relevant code or design to review.

### One agent at a time

Pick the agent that matches your current question:

- **Building a template?** Use the frontend developer.
- **Writing questions or error messages?** Use the content designer.
- **Planning a flow?** Use the interaction designer.
- **Checking accessibility?** Use the accessibility auditor.
- **Preparing for user research?** Use the user researcher.
- **Thinking about the whole service?** Use the service designer.
- **Writing a test plan?** Use the QA tester.

### Run a multidisciplinary review

Once you have built a page or flow, run it through agents in sequence. This mirrors a real GDS multidisciplinary team review:

1. **Interaction designer** first — check the flow makes sense and follows GOV.UK patterns.
2. **Content designer** second — check the words are clear, in plain English, and follow GOV.UK style.
3. **Frontend developer** third — check the markup is correct, uses GOV.UK Frontend properly, and works without JavaScript.
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

---

## Which skills files to load

Start with the files that match what you are building. You do not need every file at once.

### For a basic question page

- `govuk-design-system/components/text-input/SKILLS.md`
- `govuk-design-system/components/button/SKILLS.md`
- `govuk-design-system/components/error-message/SKILLS.md`
- `govuk-design-system/components/error-summary/SKILLS.md`
- `govuk-design-system/patterns/pages/question-pages/SKILLS.md`

### For a form with mixed input types

Add to the above:

- `govuk-design-system/components/radios/SKILLS.md`
- `govuk-design-system/components/checkboxes/SKILLS.md`
- `govuk-design-system/components/date-input/SKILLS.md`
- `govuk-design-system/components/textarea/SKILLS.md`
- `govuk-design-system/components/select/SKILLS.md`
- `govuk-design-system/components/fieldset/SKILLS.md`

### For a complete service flow

Add:

- `govuk-design-system/patterns/help-users-to/start-using-a-service/SKILLS.md`
- `govuk-design-system/patterns/help-users-to/check-answers/SKILLS.md`
- `govuk-design-system/patterns/pages/confirmation-pages/SKILLS.md`
- `govuk-design-system/components/back-link/SKILLS.md`
- `govuk-design-system/foundations/prototype-kit/SKILLS.md`

### For accessibility review

- `govuk-design-system/accessibility/SKILLS.md`
- Plus the SKILLS.md files for every component on the page you are reviewing

---

## Tips

- **Start small.** Load 3-5 skills files for the page you are working on. Add more as you need them.
- **Be specific.** "Help me build a question page that asks for a date of birth" gets better results than "Help me build a form".
- **Paste your code.** AI tools give better advice when they can see what you have built.
- **Say what you have tried.** If something is not working, describe what you expected and what happened instead.
- **Check the output.** AI tools sometimes get details wrong. Compare the generated code against the SKILLS.md file for that component to verify it matches the GOV.UK Design System.
- **Iterate.** You do not need to get everything right in one prompt. Build a rough version, then ask the AI to review and improve it.

---

## Licence

GOV.UK Design System content is Crown Copyright under the [Open Government Licence v3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/). All other materials are released under the [MIT License](LICENSE).
