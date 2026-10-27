# Stack

Libraries and npm scripts used by Portfolio v1.

Delivery board: [Portfolio v1 Delivery](https://github.com/users/JordyNicholas/projects/7) · epic [#1](https://github.com/JordyNicholas/portfolio/issues/1).

## Runtime

| Piece | Choice |
| --- | --- |
| Framework | Next.js (App Router) |
| Language | TypeScript |
| UI | MUI + Emotion (`@mui/material`, `@mui/material-nextjs`) |
| i18n | next-intl (`messages/en.json`, `messages/pt.json`) |
| Animation | Motion (`motion`) |
| Fonts | Sora + Source Sans 3 via `next/font/google` |

Tailwind may still appear from the `create-next-app` scaffold until the MUI theme owns layout chrome.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

## Related

- [Project structure](project-structure.md)
- [Getting started](../tutorials/getting-started.md)
- [Why this portfolio shape](../explanation/portfolio-v1.md)
