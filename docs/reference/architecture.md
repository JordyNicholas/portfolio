# Project structure (Portfolio v1)

Standard Next.js App Router layout. FE-only: no API routes required for v1.

## Folders

```text
app/
  [locale]/              # next-intl (C2.1+)
    layout.tsx
    page.tsx               # composes section components
  styles/fonts/            # next/font (already present)
  globals.css
components/
  layout/                  # shell: providers, app bar, page width
  sections/                # landing blocks (Hero, About, …)
  ui/                      # small reusable UI (e.g. status pill)
data/                      # typed lists / config (not translated prose)
  projects.ts
  site.ts                  # contact links, CV paths
  experience.ts            # optional: ids, dates, order
  education.ts             # optional
  skills.ts                # optional: group + chip ids
messages/                  # next-intl catalogs
  en.json
  pt.json
lib/                       # i18n config, helpers (no React UI)
public/
  cv/                      # static PDFs (C4.1)
docs/                      # Diátaxis
```

## Conventions (common FE)

| Concern | Put it in | Notes |
| --- | --- | --- |
| Routes & providers | `app/` | Keep pages thin |
| React UI | `components/` | Prefer props + `useTranslations` over hardcoded copy |
| Translated copy | `messages/*.json` | next-intl default |
| Shared/non-translated data | `data/*.ts` | URLs, status, dates, tech tags |
| Config & pure helpers | `lib/` | e.g. `lib/i18n.ts` |
| Static files | `public/` | CV PDFs, favicon, OG image |

## Data vs messages

- **`data/`** — values that do not change with language (GitHub URL, `ongoing` \| `complete`, ISO-ish dates, stack tags).
- **`messages/`** — titles, descriptions, bullets, button labels, meta description.

Link them by **id** (e.g. `data/projects.ts` has `id: "tokenforge"` → keys under `projects.tokenforge.*` in JSON).

### `data/projects.ts` shape

```ts
export type ProjectStatus = "ongoing" | "complete";

export type Project = {
  id: string;
  status: ProjectStatus; // curated here; do not infer from GitHub
  github: string;
  stack: string[];
  family?: "monokit";
};
```

Monokit = two projects (`monokit-api`, `monokit-web`) with the same `family`.

### `data/site.ts`

Stable links: LinkedIn, `mailto:`, WhatsApp (`wa.me/…`), GitHub, CV paths per locale.

## Import rules (keep it boring)

- `data/` and `lib/` do not import React or MUI.
- Section components may import `data/*` and next-intl; they should not embed EN/PT string literals (keys/stubs OK until C2.2).
- Do not import one section from another; compose on the page.

## Not in C0.2

Locale middleware wiring (C2.1), full copy (C2.2), theme tokens (C1), real section UI (C3). Empty `messages` shells + typed stubs in `data/` are enough.
