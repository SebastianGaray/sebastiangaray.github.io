# Design

## Architecture

Astro renders static locale routes. Typed content modules contain visitor-facing copy, while shared
components implement navigation, theme selection, projects, professional background, credentials,
and contact. A small browser script owns view transitions and section-aware scroll controls.

## State and accessibility

Only the theme preference is persisted in `localStorage`. Native links, buttons, landmarks, heading
hierarchy, focus management, reduced motion, and bilingual accessible names provide the interaction
contract. No visitor data leaves the browser.

## Verification

Node tests isolate theme behavior. Playwright validates production routes, navigation, responsive
layouts, public files, and automated accessibility rules. Astro Check and Prettier enforce typed,
consistent source. npm audit, CodeQL, pinned actions, and Dependabot cover supply-chain risk.
