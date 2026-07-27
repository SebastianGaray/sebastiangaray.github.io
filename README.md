# sebastiangaray.github.io

Bilingual one-page portfolio built with Astro and deployed as a static site to GitHub Pages.

## Commands

```sh
npm install
npm run dev
npm run format:check
npm run check
npm run build
```

English and Spanish copy live in separate files under `src/content`.

## Deployment

Pull requests run formatting, content and type checks, and a production build. Pushes to `main` deploy through `.github/workflows/deploy.yml`.
