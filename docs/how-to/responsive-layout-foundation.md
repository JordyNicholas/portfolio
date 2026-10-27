# How to build the responsive layout foundation (C0.3)

Add a shared page width wrapper, document breakpoints, and stub a mobile vs desktop nav pattern—without building the full app bar theme (C1) or real sections (C3).

## Outcome

- `PageContainer` wraps page content
- Nav: inline links from `md` up; drawer (or menu) below `md`
- No horizontal scroll at ~375px and ≥1280px
- Placeholder section targets exist for later anchors

## Steps

### 1. Add layout components

Under `components/layout/` (create the folder if needed):

| File | Responsibility |
| --- | --- |
| `PageContainer.tsx` | MUI `Container` (e.g. `maxWidth="lg"`) + consistent vertical rhythm; accepts `children` |
| `AppShell.tsx` (or `MainNav.tsx`) | Top bar region + nav links + mobile open state |
| `MobileNav.tsx` (optional split) | `Drawer` / temporary drawer listing the same links |

Keep these presentational. No theme palette work beyond defaults.

### 2. Define nav items once

In `data/site.ts` or a tiny `data/nav.ts`:

```ts
export const navItems = [
  { id: "about", href: "#about" },
  { id: "experience", href: "#experience" },
  // …education, skills, projects, personal, contact
] as const;
```

Labels stay in `messages/` later; for the stub, hardcoded English labels or raw ids are acceptable until C2.2.

### 3. Wire desktop vs mobile

- Use MUI `useMediaQuery(theme.breakpoints.up("md"))` **or** CSS/`sx` `display` breakpoints.
- **Desktop (`md+`):** map `navItems` to text buttons / links in a row.
- **Mobile (`< md`):** `IconButton` toggles a `Drawer`; drawer lists the same `navItems`; close on link click.

Do not build locale/theme/CV controls here (C1.3). One menu icon + links is enough.

### 4. Put anchors on the smoke page

In `app/page.tsx` (or a thin stub sections list):

1. Wrap content in `PageContainer`.
2. Render `AppShell` above content.
3. Add placeholder blocks with `id` matching nav (`about`, `experience`, …)—simple `Box`/`Typography` is fine.

### 5. Keep the MUI cache in the root layout

Leave `AppRouterCacheProvider` in `app/layout.tsx` wrapping `{children}`. Shell and page render inside it.

### 6. Verify

| Check | Pass |
| --- | --- |
| ~375px width | No horizontal scrollbar; menu opens/closes; links reachable |
| ≥1280px width | Inline nav visible; no drawer required |
| Resize across `md` | Layout switches without broken overlap |

Browser devtools responsive mode is enough; no need for a test runner in C0.3.

## Out of scope

| Later issue | Leave for later |
| --- | --- |
| C1.1–C1.3 | Brand colors, theme toggle, CV button, sticky polish |
| C2.* | Locale routing and translated nav labels |
| C3.* | Real section content |
| C5.2 | Focus trap, skip link, axe cleanup |

## Related

- [Layout and breakpoints](../reference/layout.md)
- [Project structure](../reference/project-structure.md)
- [How-to index](README.md)
