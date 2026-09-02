# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

StepIn Budapest is a static landing page for a student relocation assistance service targeting Azerbaijani students moving to Budapest. It has zero dependencies and no build step.

The primary audience is **parents in Azerbaijan**, often reading on a phone in Azerbaijani or Russian. The page's single job is to get them to open WhatsApp. Design decisions should be weighed against whether they build confidence for that reader.

## Running Locally

Open `index.html` directly in a browser, or serve with any HTTP server:

```bash
# Python
python -m http.server 8080

# Node (if available)
npx serve .
```

## Architecture

Three files, no build:

- **index.html** — All markup. Content-only; carries no inline behavior beyond a one-line `.js` class flag in `<head>`.
- **styles.css** — The design system. CSS custom properties for color, type, and an 8pt spacing scale, followed by section styles and responsive rules.
- **main.js** — The translations object plus all behavior (language switching, mobile drawer, scroll effects, FAQ accordion). Wrapped in an IIFE.

### Design system

Defined as tokens at the top of `styles.css`. Two rules matter most:

- **Gold is structural, never a fill.** Use it for hairlines, active states, numerals, and single accents. `--gold` (`#E3B341`, 10.1:1 on `--ink`) is for dark backgrounds only — it fails contrast on light. On light backgrounds use `--gold-ink` (`#8A6D14`, 4.7:1 on `--paper`). The gold is deliberately matched to the lit Parliament in the hero photograph; an accent duller than the image it sits on reads as muddy.
- **Depth on dark is not the same as depth on light.** `--shadow-md`/`--shadow-lg` are navy at low opacity and do nothing on the ink bands — a navy shadow on a navy surface is invisible, which is what made the dark half of the page read as flat. Elevation on dark needs three things together: a surface lighter than its ground, a lit top edge (`--rise`), and a genuinely black cast shadow (`--cast-md`/`--cast-lg`). Gold that should read as lit rather than printed gets `--emit`. Use the `--rise`/`--cast-*` pair on dark, the `--shadow-*` pair on light.
- **Sections alternate dark → light → dark** via `.band-ink` / `.band-paper` / `.band-paper-alt`, so the page reads as chapters. `.section` controls vertical padding; `.band-*` controls background. Keep those responsibilities separate — don't add padding to a `.band-*` rule.

`.band-ink` carries two pseudo-element layers: `::before` is a wide, very low-contrast
lift giving the band a light source, `::after` is fine SVG grain that kills gradient
banding and gives the surface material. Both are `pointer-events: none` and sit under
`.band-ink > *`, which is raised to `z-index: 1`. The hero repeats the grain via
`.hero::after` — it is the largest dark surface on the page, and without it the
photograph has texture while the flat navy around it does not, so the seam shows.

The **itinerary** (`.itinerary` in the hero) is the signature element: a typed travel-document motif (`GYD → BUD`, mono codes, hairline rules, dashed route). Its vocabulary recurs as the `.process-spine` in the pinned Process section. Changes to one should keep the other consistent.

Type roles: `--display` (Fraunces) for headings, `--body` (Inter Tight) for prose, `--mono` (JetBrains Mono) for labels, codes, prices, and step numbers. The display stack lists Playfair Display second on purpose — Fraunces lacks Cyrillic and `ə`, so the browser falls back per glyph for Russian and Azerbaijani. **Don't remove that fallback.**

### Hero image

`hero-budapest.webp` (blue-hour Danube) is a CSS **background** on `.hero`, not an
`<img>`, layered under two scrims: a diagonal one holding the headline side near-solid
ink, and a bottom fade handing off to the ticker. `hero-budapest-sm.webp` is a cropped,
lighter file swapped in below 720px. Both are preloaded in `<head>` with `media`
attributes — a CSS background is discovered late, so without the preload the art
arrives after the headline.

The delivered files are **cropped from the source**, not just scaled: trimming the lower
water drops the lit Parliament to roughly three-quarter height, clear of the headline
block. Compose placement by cropping the file — `background-position` percentages shift
by the amount the image overflows the viewport, so they drift as the window widens and
cannot hold a subject in place.

The subject sits low-left, under the copy, so the hero copy carries `text-shadow` and a
left-hand scrim gradient. Those are load-bearing for legibility — if you swap the image,
re-check `.hero-sub` and `.hero-note` against whatever is now behind them.

The hero has no grid overlay; `.hero-grid-lines` remains in use by the contact section only.

`.hero-inner` is `align-items: start`, not `center`. The itinerary's height is set by
its own content, but the copy column's height swings with translation length — the
headline runs three lines in English and five in Russian. Centring made whichever
language happened to match the card look deliberate and the other two look like they
were floating. Anchoring both tops means every language lines up at the same y and the
difference falls out of the bottom instead. Check a layout change here in **all three
languages**, not just the one you are reading — this class of bug is invisible in one.

`.hero` also carries `min-height: calc(100svh - var(--ticker-h))` so the hero and the
ticker together fill exactly one screen. Without it the hero's height was purely
content-driven, so on a viewport taller than the copy the fold landed past the ticker
and showed a bare strip of the white Services band — which reads as a gap, not as the
next section. `--ticker-h` must stay in sync with `.ticker`'s padding plus line box.
On viewports shorter than the content the min-height simply doesn't bind.

The inline `<head>` script also sets `history.scrollRestoration = 'manual'`. Browsers
default to restoring the last scroll position on reload, which on a one-page site means
refreshing drops the reader into the middle of the hero instead of at the headline.
Fragment links (`#services`) are unaffected — the browser handles those separately.

### Build your own package

The fourth pricing card (`.plan-custom`) is a set of native checkboxes whose ticks are
composed into the first WhatsApp message, so a parent never has to write one. The label
text is read from the DOM at build time rather than from a fixed list, so the message
comes out in whatever language is on screen. `updateCustomLink()` runs on every tick and
at the end of `applyLanguage()` — miss the second call and switching language leaves a
stale message behind the button.

Newlines in that message are `String.fromCharCode(10)`, not `
`, on purpose. Editing
this file through shell heredocs has repeatedly eaten the backslash and produced a real
line break inside a string literal, which is a syntax error. Keep it escape-free.

Four price columns only fit at full width; the grid drops to 2×2 below 1080px and to one
column below 900px, where `.plan-featured { order: -1 }` floats Standard to the top.

### Internationalization

Translations live in the `translations` object in `main.js`, with `en`, `az`, and `ru`. Elements carry `data-i18n="key"`.

To add a translatable string:

1. Add the key to **all three** language objects
2. Add `data-i18n="your_key"` to the element

Values are applied with `textContent`. Only keys listed in `RICH_KEYS` (currently just `heroTitle`) are applied with `innerHTML` — keep that list minimal.

Language is resolved from `localStorage` first, then `navigator.language`, defaulting to English. The choice persists across visits.

### Motion

All animation is CSS or vanilla JS and must stay inside the `prefers-reduced-motion: reduce` block at the bottom of `styles.css`. Reveal-on-scroll uses IntersectionObserver.

Entrance styles (`.anim`, `.reveal`, `.itin-step`) are scoped under `.js`, which the inline `<head>` script adds. This means **content is never hidden when JavaScript fails** — preserve that scoping when adding new reveal effects.

The Process section uses a 300vh scroll container driving a sticky stage. Below 900px it degrades to a plain stacked list — the JS scroll driver bails out at that width.

## Testing changes

Headless screenshots on Windows have two traps worth knowing:

- Windows enforces a **minimum window width around 496px**, so `--window-size=390` still lays out at 496 and crops the image. To check a real phone width, load the page in an `<iframe width="390">` — the iframe gets its own layout viewport.
- Screenshots capture at **first paint**; `setTimeout` callbacks have not run yet. Layout is valid, but anything driven by a timer (the itinerary illumination sequence, count-up) will not appear.

## Known placeholders

The WhatsApp number `994000000000` is a placeholder: **5 occurrences in `index.html`**
plus `CUSTOM_WA` in `main.js` (the build-your-own card), and the displayed
`+994 XX XXX XX XX`. Replace all seven before launch.

## Deployment

Static files only — deploy directly to GitHub Pages, Vercel, Netlify, or any static host with no build step required.
