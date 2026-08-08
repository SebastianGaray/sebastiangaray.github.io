# sebastiangaray.github.io

Bilingual portfolio with animated view transitions, built with Astro and deployed as a static site to GitHub Pages.

## Commands

```sh
npm install
npm run dev
npm run format:check
npm run check
npm test
npm run build
npm run test:e2e
npm run audit
```

English and Spanish copy live in separate files under `src/content`.

## Development approach

The project follows a spec-driven workflow. Observable requirements, implementation decisions, and
completed validation tasks are recorded under [`sdd/`](sdd/README.md) and evolve with the code.

AI-assisted development was used for implementation support, review, and test generation. Product
decisions, content, and acceptance remained human-directed, and generated changes were accepted only
after repository checks and production-preview tests passed.

## Deployment

Pull requests run formatting, content and type checks, unit tests, dependency auditing, a production
build, and browser tests. Pushes to `main` pass the same validation before deployment through
`.github/workflows/deploy.yml`. CodeQL and Dependabot provide additional security maintenance.

## License and security

The source is available under the MIT License. Report vulnerabilities privately as described in
`SECURITY.md`.
