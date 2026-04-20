# AI Sydney Engineers Website

Business-facing React and Vite website for AI Sydney Engineers, using selected public engineering portfolio material and project figures supplied in the workspace.

## Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Lucide icons

## Development

```bash
npm run dev
```

## Production build

```bash
npm run build
```

## Content editing

Most site content now lives in `src/content/siteContent.js`.

Update this file to:

- add or remove projects
- swap project figures
- expand team member biographies
- revise services, FAQs, and proof sections

Project images live in `public/portfolio`.

## Deployment

The repository includes a GitHub Pages workflow in `.github/workflows/deploy.yaml`.

`vite.config.js` uses `base: './'` so the built site is safer to deploy on GitHub Pages project paths as well as simple static hosting.
