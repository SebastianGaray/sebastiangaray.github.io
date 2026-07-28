# Design

## Themes

The portfolio supports System, Light and Dark preferences. System is the
default, follows `prefers-color-scheme` live and resolves to a concrete
`data-theme` value before rendering. Explicit choices are stored in
`localStorage`, persist between English and Spanish, and ignore later operating
system changes until System is selected again.

Colors use semantic roles for backgrounds, surfaces, text, borders, accents,
focus, status and code. Light preserves the original palette; Dark uses warm
charcoal surfaces, off-white text and restrained borders without modifying the
portrait. The header control exposes all three choices with localized labels,
keyboard-accessible buttons and a non-color selected state. Focus remains
visible and theme transitions are disabled when reduced motion is requested.
