# Architecture (Portfolio v1)

FE-only Next.js App Router landing. Boundaries stay thin: **routes → UI → content/i18n → theme**. No backend, no CMS.

## Folder map (target)

```text
app/
  [locale]/                 # next-intl routes (lands in C2.1)
    layout.tsx
    page.tsx                  # composes section components only
  styles/fonts/               # next/font exports (exists)
  globals.css
components/
  layout/                     # AppBar, PageContainer, ThemeRegistry
  sections/                   # Hero, About, Experience, …
  ui/                         # dumb presentational bits (StatusPill, …)
content/
  projects.ts                 # structured data + i18n key refs (not prose)
  experience.ts               # optional: ids/dates/order; prose in messages
  education.ts                # optional: same pattern
  skills.ts                   # chip ids / group keys
  site.ts                     # contact URLs, CV paths (locale-invariant)
messages/
  en.json
  pt.json
public/
  cv/                         # AmplifyIT PDFs (C4.1)
docs/                         # Diátaxis (this tree)
```

Keep `app/` for routing and providers. Domain lists and copy contracts live under `content/` + `messages/`, not inside components.

## Content contracts

### Rule

| Kind | Where | Example |
| --- | --- | --- |
| Locale-invariant facts | `content/*.ts` | GitHub URL, status, dates, stack tech ids |
| Human prose / labels | `messages/{en,pt}.json` | Description, bullets, section titles |
| UI structure | `components/` | Layout, MUI composition |

Components receive **data + `t()`**, not hardcoded EN/PT strings (stubs/keys OK in C0.2).

### `content/projects.ts` (minimum shape)

```ts
export type ProjectStatus = "ongoing" | "complete";

export type Project = {
  id: string;                 // slug: "tokenforge"
  status: ProjectStatus;      // set here — never infer from GitHub
  github: string;
  stack: string[];            // tech labels or ids shared with Skills
  family?: "monokit";         // optional grouping for API + Web
  // i18n: messages projects.<id>.{title,description,bullets}
};
```

Monokit = two `Project` rows (`monokit-api`, `monokit-web`) with `family: "monokit"`.

### Messages

- Flat or lightly nested JSON keyed by section: `hero.*`, `about.*`, `experience.<id>.*`, `projects.<id>.*`, …
- Bullets = string arrays under the same id.
- Meta strings (`metadata.title`) live in messages too (wired in C4.2).

### Contact / CV

Put stable URLs in `content/site.ts` (LinkedIn, mailto, `wa.me/5512982088663`, GitHub, `/cv/jordy-nicholas-en.pdf` | `…-pt.pdf`). Labels stay in messages.

## Dependency direction

```text
app/[locale]  →  components/sections  →  content/* + next-intl messages
              →  components/layout    →  theme (C1)
```

- Sections must not import other sections’ internals.
- `content/*` must not import React, MUI, or `next/navigation`.
- Theme/tokens (C1) must not import section copy.

## Out of scope for C0.2

Wiring `next-intl` middleware, real copy dump (C2.2), theme palette (C1), section UIs (C3). Stubs and empty message shells are enough.
