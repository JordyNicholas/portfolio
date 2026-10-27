# Project structure

Recommended Next.js App Router folders for this portfolio. Frontend-only for v1 (no required API routes).

## Folder tree

```text
app/
  [locale]/                 # next-intl segment (from C2.1)
    layout.tsx
    page.tsx                  # composes section components
  styles/fonts/               # next/font exports
  globals.css
components/
  layout/                     # providers, app bar, page width
  sections/                   # Hero, About, Experience, …
  ui/                         # small shared UI (e.g. status pill)
data/                         # structured data (not translated prose)
  projects.ts
  site.ts                     # contact URLs, CV paths
  experience.ts               # optional
  education.ts                # optional
  skills.ts                   # optional
messages/                     # next-intl message catalogs
  en.json
  pt.json
lib/                          # i18n setup, pure helpers (no UI)
public/
  cv/                         # static CV PDFs (from C4.1)
docs/                         # Diátaxis documentation
```

## Where things go

| Concern | Folder | Notes |
| --- | --- | --- |
| Routes, root providers | `app/` | Keep `page.tsx` thin |
| React UI | `components/` | Layout vs sections vs small `ui/` |
| Translated UI copy | `messages/` | next-intl catalogs |
| Shared structured data | `data/` | Same in every language |
| Config & helpers | `lib/` | e.g. next-intl config |
| Static assets | `public/` | PDFs, images, favicon |

## Data and messages

Link rows in `data/` to message keys by **`id`**.

| In `data/` | In `messages/` |
| --- | --- |
| GitHub URL, status, dates, stack tags | Titles, descriptions, bullets, button labels |
| Contact URLs, CV file paths | Link labels, section headings |

### Project type

```ts
export type ProjectStatus = "ongoing" | "complete";

export type Project = {
  id: string;
  status: ProjectStatus; // set in data; do not infer from GitHub
  github: string;
  stack: string[];
  family?: "monokit";
};
```

Monokit is two projects (`monokit-api`, `monokit-web`) that share `family: "monokit"`.

### Site links

Put LinkedIn, `mailto:`, WhatsApp (`wa.me/…`), GitHub, and CV paths in `data/site.ts`. Put visible labels in `messages/`.

## Import guidelines

- `data/` and `lib/` do not import React or MUI.
- Components may import `data/*` and use next-intl; avoid hardcoded EN/PT strings (message keys or stubs are fine until copy is loaded).
- Section components do not import each other; the page composes them.

## Scope note

For folder scaffolding (C0.2): create the directories, typed stubs in `data/`, and empty `messages` shells. Do not require theme work (C1), next-intl routing (C2.1), full copy (C2.2), or section UI (C3).

## Related

- [Layout and breakpoints](layout.md)
- [Why `data/` and `messages/`](../explanation/content-boundaries.md)
- [Stack](stack.md)
- [Getting started](../tutorials/getting-started.md)
