# Why content is split from UI

Portfolio copy is bilingual and locked in a content freeze. If prose lives inside JSX, every edit risks EN/PT drift and forces UI PRs for wording.

**Invariant data** (URLs, dates, status, stack ids) rarely changes with locale — it belongs in typed TypeScript modules. **Words** change with locale — they belong in `messages/`. Sections only compose the two.

That keeps C2.2 (load locked copy) a data task, and C3.* a presentation task, instead of one mixed rewrite.
