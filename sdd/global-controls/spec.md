# Global controls requirements

## Goal

Keep the portfolio's theme disclosure and compact language switch as the canonical shared chrome for the public project family.

## Requirements

- Theme and language controls MUST remain in the sticky header.
- Theme MUST expose System, Light, and Dark as accessible disclosure-menu buttons.
- Language MUST expose the active and alternate `EN / ES` locales and preserve the active portfolio view.
- Tests and the design reference MUST describe the reusable contract for project applications.

## Acceptance criteria

- Theme and language controls retain keyboard, persistence, selected-state, and mobile behavior.
- Browser tests assert the canonical shared-control hooks and locale preservation.
