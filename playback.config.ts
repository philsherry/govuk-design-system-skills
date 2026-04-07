import { defineConfig } from 'playback-cli/config';

/**
 * Project-level configuration for playback.
 *
 * These values override the built-in defaults. Omit any field to keep its
 * default. See `src/config.ts` for the full `PlaybackConfig` interface.
 *
 * This file is loaded directly via `tsx`.
 */
export default defineConfig({
	/**
	 * Default voices when not specified in a tape's `meta.yaml`.
	 * Override voices per-tape via the `voices` field in `meta.yaml`.
	 * Available:
	 *  - 'alan'
	 *  - 'alba'
	 *  - 'northern_english_male'
	 *  - 'southern_english_female'
	 * @default ['southern_english_female']
	 */
	defaultVoices: ['southern_english_female'],

	/**
	 * Directory where rendered output (mp4, gif, webvtt) is written.
	 * @default 'blockbuster'
	 */
	outputDir: 'blockbuster',

	/**
	 * Root directory scanned for tape directories by `npm run playlist:build`.
	 * The scanner expects the `s<n>-<slug>/<nn>-<slug>/` naming convention.
	 * @default 'tapes'
	 */
	tapesDir: 'tapes',

	/**
	 * Directory containing piper-tts `.onnx` voice model files.
	 * Run `npm run setup` to download the default models here.
	 * @default 'voices'
	 */
	voicesDir: 'voices',

	/**
	 * Nudge step size in seconds for the TUI timing editor. Each arrow-key
	 * press shifts a narration clip's start time by this amount.
	 * @default 0.25
	 */
	nudgeStep: 0.25,
});
