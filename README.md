# Sebastian Garay · Data and software portfolio

I build data products that connect modeling, software engineering, and clear product decisions. This
repository contains the Astro site I use to present selected projects, professional experience,
education, publications, and contact information in English and Spanish.

[View the portfolio](https://sebastiangaray.github.io/) · [English site](https://sebastiangaray.github.io/en/) · [Sitio en español](https://sebastiangaray.github.io/es/)

<p align="center">
  <img src="public/profile.png" width="220" alt="Portrait of Sebastian Garay" />
</p>

## What you will find

- A concise professional profile focused on data science, machine learning, and software delivery.
- Two end-to-end retail projects with live demos, architecture notes, tests, and honest limitations.
- English and Spanish content maintained as typed source modules rather than scattered conditions.
- Accessible System, Light, and Dark themes with keyboard-friendly navigation.
- Responsive layouts and section controls tested on desktop and mobile.

## Featured projects

| Project                    | What it explores                                                                      | Demo                                                                     |
| -------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Retail Demand Intelligence | Synthetic demand forecasting, inventory risk, FastAPI, and Streamlit                  | [Open demo](https://retail-demand-intelligence.streamlit.app/)           |
| Retail Recommendation Lab  | Explainable offline recommendations, PySpark artifacts, and a static Astro storefront | [Open demo](https://sebastiangaray.github.io/retail-recommendation-lab/) |

The Streamlit demo may be asleep after a period of inactivity. Streamlit lets visitors wake it from
the page, which can take a few minutes.

## Technology

- Astro and strict TypeScript
- Semantic HTML and responsive CSS
- Node test runner, Playwright, and axe accessibility checks
- Prettier, Astro Check, npm audit, CodeQL, and Dependabot
- GitHub Actions and GitHub Pages

## Run locally

Requires Node.js 22 or newer and npm.

```bash
git clone https://github.com/SebastianGaray/sebastiangaray.github.io.git
cd sebastiangaray.github.io
npm ci
npm run dev
```

Useful checks:

```bash
npm run format:check
npm run check
npm test
npm run build
npm run test:e2e
npm run audit
```

## How the project is maintained

Work is guided by [`sdd/spec.md`](sdd/spec.md), [`sdd/plan.md`](sdd/plan.md), and
[`sdd/tasks.md`](sdd/tasks.md). The specification describes observable behavior, the plan records
technical decisions, and the task list connects implementation with validation.

AI-assisted tools supported implementation, review, and test generation. I remained responsible for
the content, product choices, acceptance criteria, and final review. Generated changes had to pass the
same local and CI checks as every other contribution.

Pull requests run formatting, Astro checks, unit tests, dependency auditing, a production build, and
browser tests. Validated commits on `main` are deployed with least-privilege GitHub Pages permissions.

## Repository structure

```text
src/components/   Shared interface components
src/content/      Typed English and Spanish content
src/layouts/      Metadata and page layout
src/pages/        Static locale routes and 404 page
public/           Profile image, favicon, robots, and social card
sdd/              Specification, implementation plan, and completed tasks
tests/            Unit and production-preview browser tests
```

## License and security

The source is available under the [MIT License](LICENSE). Please report vulnerabilities privately as
described in [SECURITY.md](SECURITY.md).
