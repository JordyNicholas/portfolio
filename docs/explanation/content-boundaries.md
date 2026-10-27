# Why `data/` and `messages/`

Why translated copy does not live inside React components.

## Problem

The site is EN/PT. Hardcoded strings in JSX cause language drift and force UI edits for every wording change.

## Usual Frontend approach

Apps using next-intl (and similar libraries) typically split:

1. **Message catalogs** — `messages/en.json`, `messages/pt.json` for UI text.
2. **Structured data** — modules (or a CMS) for fields that are the same in every language (URLs, dates, status, tech tags).

This repo uses TypeScript files under `data/` instead of a CMS. A component reads an `id` from `data/`, then loads strings from `messages/` with next-intl.

## Related

- [Project structure](../reference/project-structure.md)
- [Why this portfolio shape](portfolio-v1.md)
