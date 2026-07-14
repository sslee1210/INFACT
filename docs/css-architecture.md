# INFACT CSS Architecture

## Responsive policy

- 1920px is the desktop visual baseline.
- Above 1920px, the site scales proportionally through the root `rem` scale defined in `variables.css`.
- Header, main content and footer use the same `--site-content-width` / `--site-content-max` guide.
- Do not add display-specific 2200px, 2560px or 32-inch-only layout correction layers.
- Do not reintroduce `ultrawide-layout-fix.css` or `large-desktop` override files.

## Current stylesheet ownership

### Common

- `variables.css`: tokens and the 1920px+ scale system
- `design-system.css`: shared UI tokens/components
- `base.css`: global element/layout defaults and common 1920px container guide
- `navigation.css`: base header/navigation styles
- `footer.css` + `footer-responsive.css`: footer ownership
- `subpages.css`: shared subpage structures
- `subpage-typography.css`: shared subpage typography
- `responsive-core.css`: global tablet/mobile responsive foundation
- `ui-system.css`: shared controls and contact-related UI behavior
- `responsive-safety.css`: cross-page overflow, shrink, touch and reduced-motion safety

### Home

- `home.css`: home base
- `home-company-intro.css`: company intro section
- `home-about.css`: home About section
- `home-experience.css`: active Experience section only
- `home-service*.css`: service section/cards
- `home-cta.css`: Home contact CTA base behavior and desktop sizing
- `home-contact.css`: shared contact banner styles plus the 1920px Home CTA refinement
- `home-mobile-responsive.css`: home mobile-specific layout
- `home-responsive.css`: home family tablet/mobile and 1920px Experience normalization
- `home-layout-responsive.css`: final full-width safety correction for Home marquee/CTA

### Page families

- `company-responsive.css`: company page family
- `services-responsive.css`: service page family
- `references-responsive.css`: references page family
- `company-history-responsive.css`: history-specific mobile correction
- `contact-responsive.css`: contact/home CTA mobile alignment
- `service-csv-responsive.css`: CSV-specific V-model and mobile pillar corrections

## Removed legacy layers

The following Stage-based or patch-style paths must not be restored:

- `responsive-foundation.css`
- `home-responsive-stage2.css`
- `company-responsive-stage3.css`
- `services-responsive-stage4.css`
- `references-responsive-stage5.css`
- `ui-system-stage6.css`
- `responsive-qa-stage7.css`
- `responsive-refinement-stage8.css`
- `home-mobile-polish.css`
- `references-year-menu-patch.css`
- all temporary `*-large-desktop.css` files
- `ultrawide-layout-fix.css`

## Completed Experience cleanup

`home-experience.css` no longer contains historical 2200px-only expansion rules, viewport-width breakout math, old Experience Showcase selectors, editorial page selectors, or the removed About process diagram styling. The active file now owns only the current Home Experience section and client marquee.

The Home CTA base styling was separated into `home-cta.css`. Existing tablet/mobile refinements remain in `home-responsive.css`, and the 1920px refinement remains in `home-contact.css`.

## Visit counter note

GitHub Pages is a static deployment. `useTodayVisitor` is therefore a browser-local fallback count, now reset using the `Asia/Seoul` calendar day. A true site-wide TODAY count requires a shared backend or external counter service.
