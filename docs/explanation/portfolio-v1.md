# Why Portfolio v1 is shaped this way

## Product intent

A bilingual (EN/PT) software-engineer landing site for applications in Brazil, Portugal, and remote NA/EU markets. Copy is richer than the ATS CV, but still fact-based. Public personal projects are showcased; client NDA work stays nameless.

## Why this stack

- **Next.js App Router** — static-friendly marketing site with room for locale routes.
- **MUI** — professional Material baseline; dark default with a light toggle.
- **next-intl** — first-class EN/PT without a CMS.
- **Motion** — small, intentional presence animations; reduced-motion respected later in the board.
- **FE-only v1** — no contact backend; `mailto:`, WhatsApp `wa.me`, LinkedIn, GitHub, and static CV PDFs.

## Delivery model

Work is one epic broken into SDLC cycles (bootstrap → design system → i18n/content → sections → SEO/assets → motion/a11y → QA/release). Changes ship on `main`; reviews check board **Definition of Done**, not PR process.

## Documentation

Project docs use Diátaxis so tutorials, how-tos, reference, and explanation stay separate. See [docs/README.md](../README.md).
