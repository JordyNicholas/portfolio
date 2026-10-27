# Layout and breakpoints

Shared layout rules for Portfolio v1. Use MUI’s breakpoint system; keep one page width wrapper for all sections.

## Breakpoints

Align with MUI defaults unless you intentionally override the theme later (C1.1):

| Token | Typical width | Use |
| --- | --- | --- |
| `xs` | 0+ | Base mobile layout |
| `sm` | 600px+ | Large phones / small tablets |
| `md` | 900px+ | Tablet / small desktop; expand nav |
| `lg` | 1200px+ | Desktop |
| `xl` | 1536px+ | Wide desktop |

**Smoke checks (C0.3 / C6.1):** ~375px and ≥1280px — no horizontal page scroll, no clipped controls.

## Page width

Provide one wrapper (e.g. `components/layout/PageContainer`) used by every section:

- Horizontal padding on `xs` (avoid edge-to-edge text)
- `maxWidth` consistent with the marketing layout (MUI `maxWidth="lg"` or theme spacing equivalent)
- Full width of the content column on mobile; centered column on desktop

Do not invent per-section max widths.

## Navigation pattern

| Viewport | Pattern |
| --- | --- |
| `md` and up | Inline section links in the app bar |
| below `md` | Icon button opens a MUI `Drawer` or `Menu` with the same links |

Stub for C0.3 is enough: open/close, links that scroll to placeholder `id`s (or `#`). Focus trap and polish land with a11y (C5.2). App bar chrome lands fully in C1.3 — here only the **responsive behavior** and shared container.

## Touch and spacing

- Interactive controls ≥ 44×44px CSS on mobile where practical
- Prefer theme spacing (`theme.spacing`) over one-off pixel padding once the theme exists; until C1.1, use MUI defaults / consistent spacing values

## Related

- [Project structure](project-structure.md)
- [Stack](stack.md)
- [Getting started](../tutorials/getting-started.md)
