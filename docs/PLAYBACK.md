# Playback

[Playback](https://github.com/philsherry/playback) turns YAML scripts into narrated, captioned terminal videos. Each video lives in its own directory under `tapes/` with a `tape.yaml` (the script) and a `meta.yaml` (title, description, voices, and other metadata).

This repo contains 18 tapes across six series, covering installation, tool setup, components, patterns, agents, and quality workflows.

## Tape structure

Each tape directory contains three files:

| File | Purpose |
|------|---------|
| `tape.yaml` | The recording script — terminal commands, narration text, and timing |
| `meta.yaml` | Episode metadata — title, description, series, voices, poster frame |
| `PROMPT.md` | The original prompt used to generate the tape |

## Validate tapes

Run the validator to check tape syntax and structure without recording anything. Pass the path to a single tape directory (the directory containing `tape.yaml`):

```sh
npm run playback:validate -- tapes/s1-getting-started/01-install-and-explore
```

## Build tapes

Run the full pipeline to generate a terminal recording, synthesise voiceover, create captions, and stitch the final `.mp4` and `.gif`:

```sh
npm run playback:build -- tapes/s1-getting-started/01-install-and-explore
```

Add `--web` to also export standalone audio and a `manifest.json` for embedding in web pages:

```sh
npm run playback:build -- tapes/s1-getting-started/01-install-and-explore --web
```

Output goes to `blockbuster/` (configured in `playback.config.ts`).

## Configuration

`playback.config.ts` in the project root sets the tape directory, output directory, default voices, and other options. See the file for the full list of settings.

## Further reading

The [Playback repository](https://github.com/philsherry/playback) has detailed documentation on the tape format, the timing editor TUI, voice synthesis, and the full pipeline:

- [README](https://github.com/philsherry/playback#readme) — full usage guide and tape format reference
- [docs/TUI.md](https://github.com/philsherry/playback/blob/main/docs/TUI.md) — timing editor design, keybindings, and accessibility modes
- [docs/VOICE.md](https://github.com/philsherry/playback/blob/main/docs/VOICE.md) — voice synthesis setup and audio pipeline
- [docs/CASE_STUDY.md](https://github.com/philsherry/playback/blob/main/docs/CASE_STUDY.md) — planning and production notes for the 18 tapes in this repo
