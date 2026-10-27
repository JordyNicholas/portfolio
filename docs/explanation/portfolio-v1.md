# Why this portfolio shape

Why Portfolio v1 uses a bilingual Next.js landing with MUI, next-intl, and static CV downloads.

## Product

A software-engineer site for applications in Brazil, Portugal, and remote NA/EU markets. Copy is richer than an ATS CV but still fact-based. Public GitHub projects are listed; client work stays NDA-safe (no client product names).

## Stack choices

| Choice | Reason |
| --- | --- |
| Next.js App Router | Static-friendly marketing site with locale segments |
| MUI | Familiar Material UI baseline; dark default + light toggle |
| next-intl | EN/PT without a CMS |
| Motion | A few intentional animations later; respect reduced motion |
| FE-only v1 | `mailto:`, WhatsApp, LinkedIn, GitHub, and PDFs — no contact API |

## How work is tracked

Implementation follows one GitHub epic broken into board issues (bootstrap → theme/shell → i18n → sections → SEO → a11y → release). Code ships on `main`. Reviews check each issue’s Definition of Done.

## Related

- [Project structure](../reference/project-structure.md)
- [Stack](../reference/stack.md)
- [Why `data/` and `messages/`](content-boundaries.md)
