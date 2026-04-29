---
name: git-commit-changelog
description: 'Suggest conventional commit messages and append compact JSONL entries to changelog.md after commits. Use when preparing commits, generating commit suggestions, or updating changelog history with new/update/delete actions.'
argument-hint: 'Describe your staged changes or say: suggest commit messages'
user-invocable: true
---

# Git Commit + Changelog Skill

## Purpose

Help agents and users make concise, conventional commit messages and maintain a compact, token-efficient changelog that records every commit and whether it was a `new`, `update`, or `delete` event.

## When to trigger

- When preparing `git add .` + `git commit` operations.
- When creating or updating `changelog.md` after a commit.

## Goals

- Recommend short, conventional commit messages (types: `feat`, `fix`, `refactor`, `chore`, `docs`, `style`, `test`, `perf`, `ci`).
- Encourage an explicit small `action` marker (`new`, `update`, `delete`) for each commit so changelog entries can be filtered easily.
- Store each commit as a compact, newline-delimited JSON (JSONL) entry in `changelog.md` to minimize token use while preserving structured history.

## Commit message guidance (developer-friendly)

- Use this template:
  - `type(scope): short-description [action]`
  - Examples:
    - `feat(auth): add login form [new]`
    - `fix(api): handle null response [update]`
    - `refactor(db): remove legacy index [delete]`
- Recommended `type` pickups for quick suggestions: `feat`, `fix`, `refactor`, `chore`, `docs`, `style`, `test`, `perf`, `ci`.
- For short commit messages, prefer verbs like `add`, `update`, `remove` that map to `new`, `update`, `delete` actions.

## Changelog storage format (token-efficient)

- File: `changelog.md` at repo root.
- Each line is a compact JSON object (JSONL). Example line:
  {"h":"a1b2c3d","t":"feat","s":"auth","m":"add login form","a":"new","ts":"2026-04-29T12:34:56Z"}

  Field keys (short names to save tokens):
  - `h`: commit short hash
  - `t`: type (feat, fix, ...)
  - `s`: scope
  - `m`: message (short)
  - `a`: action (`new`/`update`/`delete`)
  - `ts`: UTC timestamp in ISO 8601

- Store one JSON object per line (no pretty printing) to minimize token usage.

## Append snippet (POSIX shell)

Use this snippet after committing to append the entry to `changelog.md`:

```sh
# After running `git commit -m "type(scope): message [action]"`
HASH=$(git rev-parse --short HEAD)
MSG_FULL=$(git log -1 --pretty=%B | tr -d '\n')
# Parse fields (simple shell parse; adjust for stricter parsing if needed)
# Expect message format: type(scope): message [action]
TYPE=$(echo "$MSG_FULL" | sed -n 's/^\([a-zA-Z0-9_-]*\)(\([^)]*\)):\s*\([^\[]*\)\s*\[\?\([a-zA-Z]*\)\]?/\1/p')
SCOPE=$(echo "$MSG_FULL" | sed -n 's/^\([a-zA-Z0-9_-]*\)(\([^)]*\)):.*/\2/p')
SHORT_MSG=$(echo "$MSG_FULL" | sed -n 's/^[^:]*:\s*\(.*\)\s*\[.*\]/\1/p')
# Fallbacks if parsing fails
[ -z "$TYPE" ] && TYPE="chore"
[ -z "$SCOPE" ] && SCOPE=""
[ -z "$SHORT_MSG" ] && SHORT_MSG="$MSG_FULL"
# action detection: look for [new], [update], [delete]
ACTION=$(echo "$MSG_FULL" | sed -n 's/.*\[\(new\|update\|delete\)\].*/\1/p')
[ -z "$ACTION" ] && ACTION="update"
TS=$(date -u +%Y-%m-%dT%H:%M:%SZ)
# Write JSONL (escape double quotes in message)
ESC_MSG=$(printf '%s' "$SHORT_MSG" | sed 's/\\/\\\\/g; s/"/\\\"/g')
printf '{"h":"%s","t":"%s","s":"%s","m":"%s","a":"%s","ts":"%s"}\n' "$HASH" "$TYPE" "$SCOPE" "$ESC_MSG" "$ACTION" "$TS" >> changelog.md
```

Notes:

- This is intentionally simple and dependency-free. For more robust parsing use a small Node/Python script.
- Keep `changelog.md` in the repo so agents can read it cheaply (one-line per commit).

## Agent behavior when invoked

- Offer 3 suggested commit messages based on staged changes (brief): one `feat`/`fix` candidate, one `refactor`/`chore`, and one minimal bugfix or docs change if applicable.
- Show the recommended conventional prefix and suggested `[action]` tag derived from verbs in the message.
- After user selects/edits a message, run `git commit -m "..."`, then append a JSONL entry to `changelog.md` using the snippet above.

## Parsing & consumption

- Agents should read `changelog.md` line-by-line and parse JSON per line. This is fast and token-efficient.
- Use `a` (action) to quickly show `new`/`update`/`delete` filters.

## Example workflow for user or agent

- `git add .`
- Agent suggests: `feat(api): add user list endpoint [new]`
- User accepts -> Agent runs `git commit -m "feat(api): add user list endpoint [new]"`
- Agent appends JSONL entry to `changelog.md` using the snippet.

## Trigger phrases for automation

- "prepare commit" / "suggest commit messages" / "commit and update changelog"

## Minimal implementation notes (for devs)

- Prefer JSONL to minimize tokens and keep history compact.
- If repo wants human-readable changelog, generate a derived `CHANGELOG.md` from `changelog.md` on release only.

## Security & correctness

- Do not auto-run commits without explicit confirmation.
- If commit message parsing fails, prompt user for `type`, `scope`, and `action` values before appending.

---

Skill created to help agents and users keep structured, low-token changelogs and consistent commit messages.
