# Why split `data/` and `messages/`

This site is bilingual. If English and Portuguese strings live inside components, every wording change touches UI files and the two languages drift.

Frontend apps that use next-intl (and similar i18n libraries) normally keep:

- **message catalogs** for UI copy, and  
- **modules or CMS data** for structured fields that are the same in every language.

Here the “CMS” is just TypeScript under `data/`. Components read an id from `data/`, then load the matching strings from `messages/`. That matches how most Next.js + i18n codebases are organized, without extra architecture jargon.
