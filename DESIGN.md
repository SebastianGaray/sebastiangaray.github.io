# Portfolio Design Language

This document records the visual system implemented in `sebastiangaray.github.io`. It is descriptive and normative: the shipped portfolio is the source of truth, and this file explains how to preserve its identity across Sebastián Garay's public project family.

## 1. Purpose and audience

The portfolio is Sebastián Garay's professional front door for recruiters, engineering leaders, collaborators and technically curious visitors. It presents software-engineering, data and applied-machine-learning work with restrained confidence, verifiable detail and accessible interaction. It also anchors the visual family used by Retail Demand Intelligence, Retail Recommendation Lab and future technical demonstrations.

## 2. Preservation statement

The current portfolio implementation defines the canonical visual identity. Adaptations must preserve its warm neutral palette, tonal character, typography, action hierarchy, link behavior, focus treatment, border-led surfaces, spacing rhythm, theme behavior, attribution and direct writing style. Projects may adapt density and domain-specific visuals, but must not substitute a fashionable or generic aesthetic.

## 3. Design principles

1. **Technical clarity first.** Content and interaction explain the work without decorative interference.
2. **Editorial hierarchy.** Serif display type gives important statements authority; sans-serif body type carries detail.
3. **Warm restraint.** Near-white pink and warm charcoal replace sterile white and pure black.
4. **Borders before decoration.** One-pixel rules define structure; shadows are reserved for floating menus.
5. **Evidence over claims.** Project descriptions name methods, constraints and reproducibility.
6. **Progressive interaction.** The static document remains semantic while minimal JavaScript adds views, themes and transitions.
7. **Bilingual parity.** English and Spanish receive equivalent structure and controls.
8. **Motion with an exit.** Animation reinforces the blueprint metaphor and is neutralized by reduced-motion preferences.

## 4. Visual family model

All family projects inherit the palette family, warm tonal character, Source Serif 4 / Inter / JetBrains Mono typography, primary-versus-secondary action hierarchy, understated link behavior, visible focus treatment, one-pixel border and low-radius surface language, generous section rhythm, System/Light/Dark themes, portfolio attribution, evidence-led writing and WCAG-oriented interaction.

Projects may adapt domain semantic colors, information density, chart encodings, retail product imagery, navigation composition and domain-specific components. Adaptation should look like a specialist tool from the same author, not a reskin of the portfolio or an unrelated brand.

## 5. Exact color palette

These are the implemented CSS custom properties. A dash means no separate token is implemented; do not invent one until a real interface state requires it.

| Semantic role / token                         |                     Light |                      Dark | Intended use                                 | Adaptation rule                                          |
| --------------------------------------------- | ------------------------: | ------------------------: | -------------------------------------------- | -------------------------------------------------------- |
| Primary background `--background-primary`     |                 `#fdf8f8` |                 `#1b1918` | Page canvas                                  | Preserve warm character                                  |
| Secondary background `--background-secondary` |                 `#f7f3f2` |                 `#23201f` | Alternating sections, figures, footer        | Remain adjacent to the canvas                            |
| Surface `--surface`                           |                 `#ffffff` |                 `#292624` | Project and card surfaces                    | Use for content-bearing panels                           |
| Elevated surface `--surface-elevated`         |                 `#ebe7e6` |                 `#312d2a` | Hover, selected and chip states              | Do not use as a dominant canvas                          |
| Primary text `--text-primary`                 |                 `#1c1b1b` |                 `#f1ece7` | Headings and core content                    | Highest text emphasis                                    |
| Secondary text `--text-secondary`             |                 `#444748` |                 `#c9c0b8` | Descriptions                                 | Preserve hierarchy beneath primary                       |
| Muted text `--text-muted`                     |                 `#515f74` |                 `#aaa098` | Metadata, captions, numbering                | Never use where primary comprehension depends on it      |
| Border `--border`                             |                 `#c4c7c7` |                 `#48423e` | Default structural rules                     | Default one-pixel boundary                               |
| Strong border `--border-strong`               |                 `#8d9292` |                 `#6a615b` | Hover emphasis and chart separators          | Use sparingly                                            |
| Soft border `--border-soft`                   |                 `#e5e7eb` |                 `#393431` | Internal list dividers                       | Lower emphasis than panel boundaries                     |
| Accent `--accent`                             |                 `#334155` |                 `#d8cec5` | Labels, navigation, charts, leadership field | Keep the slate/warm-neutral family                       |
| Accent hover `--accent-hover`                 |                 `#475569` |                 `#eee6df` | Filled-action hover                          | Must retain contrast with accent contrast                |
| Accent contrast `--accent-contrast`           |                 `#f8fafc` |                 `#211e1c` | Text on accent fields                        | Pair only with accent/hover fields                       |
| Focus `--focus-ring`                          |                 `#64748b` |                 `#c5a98f` | Keyboard outline                             | Preserve visibility and 2 px treatment                   |
| Success `--success`                           |                 `#2f6b4f` |                 `#79aa8d` | Positive domain status                       | Use only when status semantics exist                     |
| Warning `--warning`                           |                 `#8a5b16` |                 `#d5ad6c` | Cautionary domain status                     | Use only when status semantics exist                     |
| Primary button background                     |                 `#000000` |                 `#e3dad2` | Dominant action                              | Preserve high-contrast filled hierarchy                  |
| Primary button text                           |                 `#ffffff` |                 `#211e1c` | Dominant action label                        | Keep paired with button background                       |
| Code background                               |                 `#ebe7e6` |                 `#312d2a` | Inline/code surfaces                         | Match elevated surface tone                              |
| Selection                                     |                 `#d5e3fd` |                 `#594f48` | Selected text                                | Keep subtle but visible                                  |
| Header background                             | `rgb(253 248 248 / 0.94)` |    `rgb(27 25 24 / 0.94)` | Sticky translucent header                    | Preserve underlying theme tone                           |
| Accent border                                 |  `rgb(255 255 255 / 0.3)` | `rgb(241 236 231 / 0.24)` | Rules on accent fields                       | Use only over accent backgrounds                         |
| Danger / info / active accent                 |                         — |                         — | Not implemented                              | Add only for demonstrated semantics and test both themes |

## 6. Typography

- Display: `"Source Serif 4", Georgia, serif`, weights 600 and 700. Hero `h1` is `clamp(2.55rem, 7.4vw, 4.5rem)`, line-height `1.04`, tracking `-0.045em`. Section titles use `clamp(2.1rem, 5vw, 3.5rem)`, `1.08`, `-0.035em`. Large editorial copy uses `clamp(1.35rem, 3vw, 1.75rem)` at `1.45`.
- Body: `"Inter", Arial, sans-serif`, weights 400, 600 and 700. Browser-default `1rem` body text uses paragraph line-height `1.65`; descriptive project copy is `1.05rem`.
- Monospace: `"JetBrains Mono", monospace`, weight 400. It identifies technology lists, chart labels, numbering and captions at approximately `0.68–0.76rem`.
- Eyebrows are `0.72rem`, weight 700, `0.12em` tracking and uppercase. Utility labels typically use `0.7–0.75rem` with `0.05–0.08em` tracking. Text widths are deliberately constrained: `52rem` for the hero title, `48rem` for major headings, `42.5rem` for reading copy and `39rem` for the hero description.
- Fonts load from Google Fonts. Fallback stacks must remain usable if the request fails and must support English and Spanish characters.

## 7. Spacing and sizing

The content container is `70rem`; reading width is `42.5rem`. Horizontal gutter is `1.25rem`, growing to `2rem` at `48rem` and `3rem` at `64rem`. Section spacing is `clamp(5rem, 9vw, 8rem)`. Recurring local gaps are `0.25`, `0.35`, `0.5`, `0.75`, `1`, `1.25`, `1.5`, `1.75`, `2`, `2.5`, `3`, `3.5`, `4`, `4.5` and `7rem`; these are a practical vocabulary, not a mandatory mathematical scale.

The sticky header is `4rem`, becoming `4.5rem` at `64rem`. Full views subtract that height from `100svh`. The hero becomes an `8fr / 4fr` grid at `64rem`; project layouts become `7fr / 5fr` at `48rem`. Two-column editorial layouts become `4fr / 8fr`. Breakpoints are `48rem` and `64rem`, with `47.999rem` used for the complementary mobile rule. Interactive targets are at least `2.75rem`; primary buttons are `3.25rem`, project actions `3rem` and contact cards `4rem` high.

## 8. Borders, radii and shadows

Structural boundaries are `1px solid var(--border)`. Internal dividers use `--border-soft`; interaction emphasis uses `--border-strong`. The global component radius is `0.25rem`; focus and chips use `2px`. Do not globally increase rounding. The only general shadow token is `0 1rem 2.5rem rgb(28 27 27 / 0.12)` in Light and `rgb(0 0 0 / 0.28)` in Dark, reserved for floating theme menus. Standard cards do not float or gain decorative shadows.

## 9. Buttons and links

Primary buttons are filled with `--button-background`, use `--button-text`, a one-pixel matching border, `0.25rem` radius, `0.85rem 1.4rem` padding and weight 600. Hover changes fill and border to `--accent-hover`. Secondary buttons share geometry but remain transparent; hover uses the elevated surface. Project actions are compact bordered rows; the first action is the filled primary. Tertiary actions are native underlined text links with `0.22em` underline offset. Desktop navigation uses an animated two-pixel underline. External destinations append `↗`; icon actions use inline SVG and accessible names.

No disabled state is currently implemented. If required, it must remain perceivable, suppress activation and expose semantic disabled state. All actions use the common `2px solid --focus-ring` outline with `4px` offset. Active navigation adds weight and `aria-current`, not color alone.

## 10. Themes

System is the initial preference. An inline head script reads `theme-preference`, resolves `prefers-color-scheme`, writes concrete `data-theme` and `data-theme-preference` values before paint, and updates the browser theme color. Light and Dark overrides persist in local storage. System resumes live operating-system updates; explicit overrides ignore them until System is reselected. The three-option disclosure communicates selection through `aria-pressed`, background, weight and a checkmark. Dark is warm charcoal rather than black; Light is warm pink-white rather than neutral white.

## 11. Navigation

The sticky header contains the name, section navigation, theme control, EN/ES switch, GitHub mark and a mobile disclosure. At desktop width the primary sections are visible; below `64rem` the disclosure carries them. View changes update the hash, history, focus and `aria-current`. Language changes retain the current section. Project applications must provide a clear, persistent or contextually prominent return link to `https://sebastiangaray.github.io/`, localized where applicable.

## 12. Cards and surfaces

Project presentations use a white/warm-charcoal surface, a chart panel on the secondary background, one-pixel borders and almost-square corners. Technical-focus cards are grid cells separated by rules, not independent floating tiles. Contact cards are bordered surface rows. Chips use the elevated surface and monospace uppercase text. Selected menu states use the elevated surface plus weight. Disclosures use bordered floating panels only when overlaying content.

## 13. Portrait and imagery

`public/profile.png` is the canonical black-and-white professional portrait. Its source dimensions are `1536 × 1024`, and explicit HTML dimensions prevent layout shift. It appears only from `64rem`, in the right `4fr` hero column, within a bordered frame at least `29rem` high. The image fills the frame with `object-fit: cover` and centered positioning; mobile omits it rather than forcing a poor crop. Alt text is the subject's name, “Sebastian Garay.” Do not recolor, replace, decorate or apply filters to it.

Project imagery follows the same bordered, low-radius panel language. Diagrammatic visuals use theme tokens, sparse grid lines and monospace captions. Product imagery in retail tools may be photographic, but must have useful alt text, stable dimensions and a resilient fallback.

## 14. Data visualization

Charts begin with `--text-primary`, `--accent`, `--text-muted`, `--border-strong` and the secondary background. Use line style, shape, labels or pattern in addition to color; the portfolio forecast already distinguishes a dashed series and explicit legend. Analytics projects may add tested semantic colors for series, risk and status, while retail projects may derive restrained category colors. New colors must work in both themes and must not displace the shared accent as the family cue.

## 15. Motion

Standard hover transitions are `160ms ease`; theme surface transitions are `120ms ease`; overlay opacity is `180ms ease`. Hero entry is `600ms ease`, with the portrait delayed `120ms`. The blueprint draw is `520ms cubic-bezier(0.65, 0, 0.35, 1)` inside an `820ms` view handoff, followed by a `220ms` fade. Desktop navigation underlines scale over `160ms ease`. Under `prefers-reduced-motion: reduce`, smooth scrolling is disabled and animation/transition duration becomes `0.01ms` with one iteration.

## 16. Accessibility

Use semantic landmarks and headings, an early skip link, descriptive labels, meaningful image alternatives, language attributes, keyboard-operable native controls and visible focus. Targets must remain at least `44px` where practical. Selected state cannot rely on color alone. Maintain text contrast in both themes, respect reduced motion, preserve `aria-current` and `aria-pressed`, and move focus to newly displayed views. Pages must not overflow horizontally at the supported `20rem` minimum width.

## 17. Localization

English lives at `/en/`, Spanish at `/es/`, and `/` redirects to English. Copy is stored in typed parallel content modules. Both languages keep the same information architecture, project evidence, theme controls and current view when switching. Metadata declares canonical URLs, reciprocal `hreflang` entries and `x-default`. New visible copy must be added in both languages, with natural Spanish rather than literal word-for-word translation.

## 18. Writing style

Write directly, calmly and concretely. Prefer verbs such as “built,” “reduced,” “modernized,” “evaluates” and “compares.” State synthetic-data status, constraints and evaluation methods. Avoid hype, unsupported performance claims, inflated seniority and unexplained acronyms. Project summaries should answer what it does, how it works and what evidence a visitor can inspect.

## 19. Shared conceptual components

The family shares concepts, not a runtime package: site header, portfolio-return link, language switch, three-state theme control, primary/secondary actions, eyebrow-plus-title section header, bordered project panel, technology metadata, evidence list, status chip, chart legend, contact/footer attribution, skip link and focus rules. Each repository should implement these locally so deployment remains independent and dependencies stay minimal.

## 20. Adaptation profiles

### Portfolio

Use the most generous whitespace, editorial display hierarchy, portrait, single-view section navigation and blueprint transition. Project evidence is concise and curated.

### Retail Demand Intelligence

Increase analytics density while retaining warm backgrounds, typography, borders and action hierarchy. Forecasting, inventory risk, temporal validation and operational decision support may use denser tables and risk semantics. Python and machine-learning provenance must remain explicit. Streamlit Community Cloud may suspend the demo while idle, so the portfolio sets the expectation that visitors can wake it and may need to wait a few minutes for startup.

### Retail Recommendation Lab

Allow product cards, cart controls, filters and comparison tables while retaining the family frame. Product imagery may add natural color, but surrounding surfaces remain neutral. Explainability, synthetic shopping behavior, PySpark provenance, strategy comparison and offline evaluation should be visible. Its public GitHub Pages demo is currently available.

## 21. Non-negotiable visual invariants

- Slate/warm-neutral accent hue family.
- Warm neutral background character in both themes.
- Primary, secondary and muted text-tone hierarchy.
- Filled primary and bordered secondary action hierarchy.
- Two-pixel offset focus-ring treatment.
- Source Serif 4, Inter and JetBrains Mono family roles.
- One-pixel border-led, low-radius component language.
- Warm Light, warm-charcoal Dark and true System behavior.
- Clear “by Sebastián Garay” or portfolio-return attribution pattern.

## 22. Allowed project deviations

Analytics tools may use compact controls, sticky tables, additional semantic risk colors and higher chart density. Retail tools may use responsive product grids, image fallbacks, cart drawers, quantity steppers, category filters and strategy comparison controls. Either may replace the portfolio's section-switching navigation with task navigation. Deviations must preserve theme parity, typography roles, action hierarchy, focus visibility, border language and truthful synthetic-data disclosure.

## 23. Do and do not

| Do                                                            | Do not                                                                     |
| ------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Reuse the exact warm canvases and slate/warm accent family    | Replace them with pure white, pure black, neon or an unrelated brand color |
| Use borders and tonal surfaces to group content               | Add glassmorphism, large soft shadows or highly rounded cards              |
| Keep serif headings, sans-serif body and monospace metadata   | Substitute a generic all-sans dashboard typography                         |
| Keep primary actions filled and secondary actions bordered    | Give every action equal visual weight                                      |
| Add semantic chart colors only when the domain requires them  | Treat decorative color as evidence                                         |
| Explain synthetic data, evaluation and limitations            | Imply production performance or real customer behavior                     |
| Preserve System, Light and Dark with pre-paint initialization | Implement Dark as an after-paint inversion                                 |
| Adapt density to the task while preserving rhythm and focus   | Copy the portfolio layout mechanically into an application                 |
