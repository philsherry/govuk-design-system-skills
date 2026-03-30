# GOV.UK Design System Skills

## Writing style

Run the linter before finishing any edit:

```sh
npm test        # passive voice check (must pass)
npm run lint    # all checks (advisory)
```

### Words to avoid

Avoid words that `write-good` flags as weasel words, weakeners, or wordy phrases. Replace with direct, concrete alternatives. If removing weakens the sentence, restructure it.

- **Weakeners (adverbs):** correctly, clearly, obviously, deliberately, silently, badly, poorly, rarely, regularly, recently, gracefully, tightly, closely
- **Weasel words:** just, several, many, various, things, few
- **Wordy phrases:** it is, in terms of, all of, majority of, not often, equivalent to, a number of
- **Wordy single words:** multiple, monitor, indicate, eliminate, approximately, purchase, requirement (when "rule" or "must" works)
- **Passive voice:** was received, was sent, be sent, is considered

### Known false positives to ignore

Not every `write-good` flag needs fixing. Ignore flags on:

- **WCAG criterion names** — "(Minimum)" in "Focus Not Obscured (Minimum)" is a proper name
- **Example text showing what not to write** — e.g., "write 'buy' not 'purchase'" must keep "purchase"
- **"only" as a necessary qualifier** — "Only use classes documented in GOV.UK Frontend" is direct and correct. Do not weaken instructions by removing "only" where it restricts scope.
- **"minimum" as a technical term** — "minimum target size" is the standard term
- **"requirement" meaning an actual rule** — "progressive enhancement is a requirement" is precise. Only replace when a simpler word works without losing meaning.

### Replacement patterns

| Instead of   | Write                                      |
| ------------ | ------------------------------------------ |
| correctly    | as expected, as intended, (or remove)      |
| clearly      | (remove, or restructure)                   |
| obviously    | (remove)                                   |
| deliberately | with intent, on purpose                    |
| silently     | without warning                            |
| it is        | that is, (restructure to remove)           |
| in terms of  | around, for, by                            |
| majority of  | most                                       |
| multiple     | more than one, (use a number)              |
| monitor      | track, watch, check                        |
| indicate     | show, suggest, point to                    |
| eliminate    | remove, cut                                |
| especially   | above all, in particular, (or remove)      |
| several      | more than one, (use a number)              |
| things       | (be specific: issues, steps, fields, etc.) |
