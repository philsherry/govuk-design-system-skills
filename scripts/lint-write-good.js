#!/usr/bin/env node

/**
 * @file Filtered write-good linter for Design System Skills content.
 *
 * Wraps `write-good` and filters known false positives so the checks can run
 * without drowning authors in noise.
 *
 * Modes:
 * - default: passive voice only, for the gated `npm test` check
 * - `--all`: full `write-good` lint, for the advisory `npm run lint` check
 *
 * False positives that are filtered out:
 * - Lines inside markdown tables (pipe-delimited rows)
 * - Lines inside fenced code blocks (``` markers)
 * - Lines indented with 2+ spaces (code examples, HTML samples)
 * - Lines inside YAML frontmatter (--- delimiters)
 * - Inline quoted example text (e.g. "not 'A letter will be sent'")
 * - Contrast examples that teach preferred wording (e.g. "Write 'X', not 'Y'")
 * - Prescribed error message wording (bold headings + quoted strings)
 * - Standard technical phrases (e.g. "JavaScript is enabled", "is expanded")
 * - Terms whitelisted in `.vscode/settings.json` for editor parity
 *
 * @example
 * // Run via npm (preferred):
 * // npm test
 *
 * // Run directly:
 * // node scripts/lint-write-good.js
 *
 * @see {@link https://github.com/btford/write-good} write-good
 */

const { execSync } = require("child_process");
const { readFileSync } = require("fs");

const mode = process.argv.includes("--all") ? "all" : "passive";

/**
 * Read the editor whitelist so CLI lint matches the VS Code experience.
 *
 * @returns {Set<string>}
 */
function getWhitelist() {
  try {
    const settings = JSON.parse(readFileSync(".vscode/settings.json", "utf8"));
    const words = settings["write-good.write-good-config"]?.whitelist || [];
    return new Set(words);
  } catch {
    return new Set();
  }
}

const whitelist = getWhitelist();

// Repo-level false positives that are acceptable in this content set but are
// not a good fit for the editor whitelist because they include phrases or
// punctuation-heavy tokens from examples.
const allowedFlaggedText = new Set([
  "3,",
  "accidentally",
  "benefit from",
  "demonstrate",
  "Links",
  "Buttons",
  "accompany",
  "Implement",
  "fairly",
  "However",
  "Images",
]);

const files = execSync(
  "find . -maxdepth 1 -type d \\( -name '*-design-system' -o -name '*-design-patterns' \\) -exec find {} -name '*.md' -not -name 'README.md' \\;",
  { encoding: "utf8" }
)
  .trim()
  .split("\n")
  .filter(Boolean);

if (files.length === 0) {
  console.log("No files to lint.");
  process.exit(0);
}

// Run write-good in parse mode
let output;
try {
  const command =
    mode === "all"
      ? `npx write-good --parse ${files.join(" ")}`
      : `npx write-good --parse --passive ${files.join(" ")}`;
  output = execSync(command, { encoding: "utf8" });
} catch (err) {
  // write-good exits non-zero when it finds issues; capture stdout
  output = err.stdout || "";
}

const hits = output
  .split("\n")
  .filter((line) => line.trim() !== "");

if (hits.length === 0) {
  process.exit(0);
}

/** @type {Map<string, Array<[number, number]>>} Cache of fenced-block line ranges per file path */
const fenceCache = new Map();

/**
 * Return an array of [start, end] line ranges (0-based) that fall inside
 * fenced code blocks or YAML frontmatter for the given file.
 *
 * Results are cached in {@link fenceCache} so each file is only parsed once.
 *
 * @param {string} filePath — absolute or relative path to a markdown file
 * @returns {Array<[number, number]>} pairs of inclusive start/end line indices
 */
function getFencedRanges(filePath) {
  if (fenceCache.has(filePath)) return fenceCache.get(filePath);
  const lines = readFileSync(filePath, "utf8").split("\n");
  const ranges = [];
  let fenceStart = null;
  let inFrontmatter = false;

  for (let i = 0; i < lines.length; i++) {
    const trimmed = lines[i].trim();

    // Track YAML frontmatter (--- at line 1 opens, next --- closes)
    if (i === 0 && trimmed === "---") {
      inFrontmatter = true;
      fenceStart = i;
      continue;
    }
    if (inFrontmatter && trimmed === "---") {
      ranges.push([fenceStart, i]);
      inFrontmatter = false;
      fenceStart = null;
      continue;
    }

    // Track fenced code blocks
    if (trimmed.startsWith("```")) {
      if (fenceStart === null) {
        fenceStart = i;
      } else {
        ranges.push([fenceStart, i]);
        fenceStart = null;
      }
    }
  }
  fenceCache.set(filePath, ranges);
  return ranges;
}

/**
 * Check whether a 1-based line number falls inside a fenced block or
 * YAML frontmatter.
 *
 * @param {string} filePath — path to the markdown file
 * @param {number} lineNum  — 1-based line number (as reported by write-good)
 * @returns {boolean}
 */
function isInFencedBlock(filePath, lineNum) {
  const zeroLine = lineNum - 1;
  const ranges = getFencedRanges(filePath);
  return ranges.some(([start, end]) => zeroLine >= start && zeroLine <= end);
}

/**
 * Read a single line from a file by its 1-based line number.
 *
 * @param {string} filePath — path to the file
 * @param {number} lineNum  — 1-based line number
 * @returns {string} the line content, or an empty string if out of range
 */
function getSourceLine(filePath, lineNum) {
  const lines = readFileSync(filePath, "utf8").split("\n");
  return lines[lineNum - 1] || "";
}

/**
 * Extract the flagged token or phrase from a write-good reason string.
 *
 * @param {string} reason
 * @returns {string | null}
 */
function getFlaggedText(reason) {
  const patterns = [
    /"([^"]+)" may be passive voice/,
    /"([^"]+)" can weaken meaning/,
    /"([^"]+)" is a weasel word(?: and can weaken meaning)?/,
    /"([^"]+)" is wordy or unneeded/,
    /"([^"]+)" is repeated/,
  ];

  for (const pattern of patterns) {
    const match = reason.match(pattern);
    if (match) return match[1];
  }

  return null;
}

// Filter hits — each rule below corresponds to a category of false positive
// listed in the file-level JSDoc. To add a new exception, add a `continue`
// guard in this loop and document it above.
const real = [];
for (const hit of hits) {
  // write-good --parse output format: filepath:line:column:"reason"
  const match = hit.match(/^(.+?):(\d+):(\d+):(.+)$/);
  if (!match) continue;

  const [, filePath, lineStr, , reason] = match;
  const lineNum = parseInt(lineStr, 10);
  const sourceLine = getSourceLine(filePath, lineNum);
  const trimmed = sourceLine.trim();
  const flaggedText = getFlaggedText(reason);

  // Skip table rows
  if (trimmed.startsWith("|")) continue;

  // Skip indented lines (code examples, HTML samples)
  if (sourceLine.match(/^[ ]{2,}/)) continue;

  // Skip fenced code blocks and YAML frontmatter
  if (isInFencedBlock(filePath, lineNum)) continue;

  // Skip error message section headings and prescribed wording
  // These are GOV.UK standard error messages that must use specific phrasing
  if (trimmed.startsWith("**If ") || trimmed.startsWith('"') || trimmed.startsWith('"')) continue;

  // Skip lines containing inline quoted examples
  // e.g. not "A letter will be sent to you"
  // e.g. (for example, "You must do this by [date] or you'll be charged")
  if (/not ['"\u201c]/.test(trimmed)) continue;
  if (/for example,\s*['"\u201c]/.test(trimmed)) continue;

  // Skip teaching examples that contrast preferred and non-preferred wording.
  // e.g. Write "We will send you a letter", not "A letter will be sent to you".
  if (/^[-*]\s+.*\bWrite\s+['"\u201c].+['"\u201d],\s+not\s+['"\u201c].+['"\u201d]/.test(trimmed)) continue;

  // Skip words explicitly whitelisted for the editor extension so the CLI and
  // editor agree on what counts as a known false positive.
  if (flaggedText && whitelist.has(flaggedText)) continue;

  // Skip repo-level false positives that we accept in prose, examples, or
  // domain-specific wording but do not want to encode as editor-only terms.
  if (flaggedText && allowedFlaggedText.has(flaggedText)) continue;

  // Skip standard technical phrases that are not actionable.
  // Add new entries here when write-good flags a phrase that is technically
  // passive but is the accepted term in accessibility or UI contexts.
  const allowedPhrases = [
    "is expanded",
    "is collapsed",
    "is enabled",
    "is disabled",
  ];
  const reasonMatch = reason.match(/"([^"]+)" may be passive voice/);
  if (reasonMatch && allowedPhrases.includes(reasonMatch[1])) continue;

  real.push({ filePath, lineNum, reason: reason.trim(), sourceLine });
}

if (real.length === 0) {
  process.exit(0);
}

// Report remaining issues in a readable format
let currentFile = null;
for (const { filePath, lineNum, reason, sourceLine } of real) {
  if (filePath !== currentFile) {
    if (currentFile !== null) console.log();
    console.log(`In ${filePath}`);
    console.log("=".repeat(60));
    currentFile = filePath;
  }
  console.log(`  Line ${lineNum}: ${reason}`);
  console.log(`  > ${sourceLine.trim()}`);
  console.log();
}

const label = mode === "all" ? "write-good" : "passive voice";
console.log(`${real.length} ${label} issue(s) found.`);
process.exit(1);
