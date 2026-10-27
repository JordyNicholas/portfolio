# Documentation

This project’s docs follow [Diátaxis](https://diataxis.fr/). Each page has one job.

| Type | Job | Folder |
| --- | --- | --- |
| Tutorials | Learn by doing a first successful run | [tutorials/](tutorials/) |
| How-to guides | Complete a specific task | [how-to/](how-to/) |
| Reference | Look up facts (stack, folders, types) | [reference/](reference/) |
| Explanation | Understand why the app is shaped this way | [explanation/](explanation/) |

**New here?** Start with [tutorials/getting-started.md](tutorials/getting-started.md).

## Page format (all docs)

Use the same shape on every page:

1. **Title** — `#` heading; noun phrase (e.g. “Project structure”).
2. **Lead** — one short paragraph under the title: what the page is for.
3. **Body** — `##` sections only (no deeper than `###` unless needed).
4. **Lists & tables** — prefer tables for inventories; fenced `ts` / `bash` / `text` for code and trees.
5. **Related** — last section with links to other Diátaxis pages (not to random files).

### Wording

Prefer common Frontend / Next.js terms:

| Use | Avoid |
| --- | --- |
| App Router, pages, layouts | delivery “cycles” as folder names |
| components, providers | ports, adapters, use-cases |
| `messages/` (i18n catalogs) | content contracts, locale-invariant prose |
| `data/` (shared structured data) | domain layer, entities |
| `lib/` (config & helpers) | application / infrastructure layer |

Board issue ids (C0.2, etc.) may appear in **Related** or scope notes; they are not Frontend structure vocabulary.

## Index

| Page | Type |
| --- | --- |
| [Getting started](tutorials/getting-started.md) | Tutorial |
| [How-to index](how-to/README.md) | How-to |
| [Responsive layout foundation](how-to/responsive-layout-foundation.md) | How-to |
| [Stack](reference/stack.md) | Reference |
| [Project structure](reference/project-structure.md) | Reference |
| [Layout and breakpoints](reference/layout.md) | Reference |
| [Why this portfolio shape](explanation/portfolio-v1.md) | Explanation |
| [Why `data/` and `messages/`](explanation/content-boundaries.md) | Explanation |
