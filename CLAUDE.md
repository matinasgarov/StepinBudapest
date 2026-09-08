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

Defined as tokens at the top of `styles.css`. The system is **Electric**: flat
surfaces, one typeface, and a single saturated signal colour. It replaced a
navy-and-gold system built on elevation — if you find a rule that still speaks
of gold, gradients or shadow, it is a survivor, not a decision.

- **The accent exists twice and the two are not interchangeable.** `--accent`
  (`#4C82FF`, 5.8:1 on `--ink`) is for dark grounds and fails on white.
  `--accent-ink` (`#1B45C4`, 7.8:1 on `--paper`) is for light ones. Putting the
  bright one on paper is the single easiest way to break this palette. The old
  `--gold*` names are kept as aliases only because some rules still say them;
  they are not a second colour.
- **There is no elevation.** `--shadow-*`, `--rise`, `--cast-*` and `--emit`
  are all `none`. They remain only so rules that still name them resolve to
  nothing rather than to a stale navy glow. Surfaces separate by ground and by
  hairline. Do not reintroduce a shadow to solve a separation problem.
- **Weight never ranks anything.** Every heading is 400. Size is the only
  hierarchy, which is what keeps the page calm at these sizes.
- **Sections alternate dark → light → dark** via `.band-ink` / `.band-paper` /
  `.band-paper-alt`, so the page reads as chapters. `.section` controls vertical
  padding; `.band-*` controls background. Keep those responsibilities separate.

**Colour written as a literal always survives a palette change.** Both times
this page has changed colour, the real work was not the tokens — it was the
dozen-odd `rgba(...)` values written directly into rules, which kept rendering
the old palette after every token was correct. Before declaring a colour change
done, grep for the old values, not just the old token names.

### Type

One family: **Inter Tight**, for display and body alike, with **JetBrains Mono**
for labels, codes, prices and step numbers. `--display` and `--body` both point
at Inter Tight on purpose.

This is also why the old per-glyph fallback is gone. Fraunces has no Cyrillic and
no `ə`, so Russian and Azerbaijani used to fall back to Playfair Display glyph by
glyph. Inter Tight covers both, so **all three languages now render in one face**
and neither Fraunces nor Playfair is requested any more.

### The marker

One drawn stroke under one phrase per section — emphasis, never decoration, and
never handwriting. Currently five in total: the hero and four section heads.

The stroke is a **background image, not an inline SVG**, so the marked phrase can
live inside a translation string and each language can mark its own words. Two
consequences follow:

- The colour is baked into the data URI, because a custom property cannot resolve
  inside one. That is why `.mark` is written twice — bright, then deep under
  `.band-paper`/`.band-paper-alt`.
- `.mark` is `white-space: nowrap`. A marked phrase that wraps draws the stroke
  **twice**, once under each fragment, which reads as two mistakes rather than one
  emphasis. Keep marked phrases short in all three languages.

Because those headings contain markup, their keys are in `RICH_KEYS` and are
applied with `innerHTML`. Every value is a literal in `main.js` — nothing comes
from a user or a URL — so the list carries no injection surface. **If a string
ever starts coming from outside, it does not belong in that list.**

### Hero image

`hero-budapest.webp` (blue-hour Danube) is a CSS **background** on `.hero`, not an
`<img>`. `hero-budapest-sm.webp` is a cropped, lighter file swapped in below 720px.
Both are preloaded in `<head>` with `media` attributes — a CSS background is
discovered late, so without the preload the art arrives after the headline.

The copy is a single centred column, and the scrim is shaped to match: a **centred
radial**, not a diagonal wash. A diagonal darkens one edge, which was right when
the text hugged the left and is wrong now — it would shade an empty margin while
leaving the headline on the lit Parliament. If you ever move the copy off-centre,
the scrim has to move with it.

`.hero-title`'s `text-shadow` is load-bearing, not decorative: the headline crosses
the lit half of the photograph and the scrim alone does not hold it. Re-check it
against any new image.

`.hero` carries `min-height: calc(100svh - var(--ticker-h))` so the hero and ticker
together fill exactly one screen, and `align-items: center` so the copy sits in the
middle of whatever height that is. `--ticker-h` must stay in sync with `.ticker`'s
padding plus line box.

The old two-column hero is gone, and with it a whole class of bug: the itinerary
card's height was fixed by its own content while the copy column's swung with
translation length, so the two columns disagreed differently in each language.
One column cannot disagree with itself. **The three-language check still matters
for anything with a fixed width**, but the hero no longer needs it.

The inline `<head>` script sets `history.scrollRestoration = 'manual'`. Browsers
default to restoring scroll position on reload, which on a one-page site drops the
reader into the middle of the hero instead of at the headline.

### Pricing

Five `<details>` rows, matching the services section directly above it. Each row is a
`.plan-summary` — numeral, name, scope line, figure, open/shut sign — over a
`.plan-detail` holding the list and the CTA.

**This replaced a hover interaction**, and the reasons are worth keeping because the
old version looked more sophisticated and worked less well. Five columns forced every
price into 234px; the row was as tall as its tallest panel *even while every panel was
shut*, so one long list added roughly 300px of dead air to all five; and the detail was
behind a hover, which does not exist on the phone most of this audience reads on.

As rows, each package is only as tall as its own content, the figure gets to be the
size it deserves (60px at 1440, 35px at 390), and open/shut is a native `<details>` —
identical on a phone and a desktop, keyboard-operable, and working with JavaScript off.
Everything delicate went with the columns: the flex-basis arithmetic, the `min-width`
floor, the fixed panel width, the three-part no-layout-shift contract.

Standard ships `open`. A section where every row is shut shows five prices and no
reason for any of them.

**The featured row is filled, not outlined** — the only emphasis a flat page has. Its
hover has to be excluded explicitly: `.plan:hover` is (0,2,0) and `.plan-featured` is
(0,1,0), so a bare `.plan:hover { background }` wins the cascade, repaints the featured
row paper, and leaves its white text on a pale ground with the price all but invisible.
That is why the rule reads `.plan:not(.plan-featured):hover`.

**Prices live in `index.html`, not in the translations** — `.plan-figure` is literal
text, because a number is the same in all three languages. The Standard row carries a
second line (`planAltPrice`) for the lower without-guardianship price; that one *is*
translated, since it is a sentence. Internal partner-payment figures are deliberately
absent from the repo.

Below 720px the figure cannot share a line with the name, so `.plan-price` moves to the
second grid column under the name and left-aligns. The sign keeps its own column.

### Build your own package

The last pricing row (`.plan-pick`) is a set of native checkboxes whose ticks are
composed into the first WhatsApp message, so a parent never has to write one. The label
text is read from the DOM at build time rather than from a fixed list, so the message
comes out in whatever language is on screen. `updateCustomLink()` runs on every tick and
at the end of `applyLanguage()` — miss the second call and switching language leaves a
stale message behind the button.

Newlines in that message are `String.fromCharCode(10)`, not an escape, on purpose.
Editing this file through shell heredocs has repeatedly eaten the backslash and produced
a real line break inside a string literal, which is a syntax error. Keep it escape-free.

### Partners section

`#partners` sits between Pricing and FAQ. The price is where a parent stops and
asks who they are actually handing their child to, so the faces answer that
question exactly where it gets asked. It also keeps the band alternation intact:
paper -> ink -> paper-alt -> ink.

It is an **accordion of first-person stories against one shared portrait**.
Opening a name swaps the portrait to that person. First person is doing the
work: "I do not leave until the door is open" is a promise from a named human,
which a third-person card can never be — so keep `pt*line` written in first
person when the real people are filled in.

**Clicking the open row does not close it.** With one shared portrait, a state
where no row is open leaves a face belonging to no name.

`openPartner()` sets the body's height to a **measured pixel value** — `auto` is
not animatable — and `hidePartnerSlots()` re-opens the first surviving row on
every language switch so the height is re-measured. Skip that and a language
change leaves a Russian story clipped to the height of the English one.

**Nothing about a real person renders until it is confirmed.** A row whose
**name** is empty does not render; if no row survives, the section and both nav
links go too. An invented partner card would poison every other claim on the
page.

The monogram is derived from whatever name is on screen (`name.charAt(0)`), so a
Cyrillic transliteration follows for free. The portrait `<img>` and the monogram
share one grid cell, so **adding a real photograph changes no layout** — put the
file's path in `data-photo` on the row and `showPartner()` does the rest. Note
that `hidden` alone loses to an explicit `display`, which is why
`.partner[hidden]` and friends are spelled out.

`.partner-stage` needs an explicit `width: 100%` beside its `max-width`.
`margin-left: auto` cancels the grid item's default stretch, and an
`aspect-ratio` box with no intrinsic width then collapses to its min-content —
which is the width of the BUDAPEST badge, about 80px.

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

## Performance

The page is 217KB of local files, and none of it is the bottleneck. The slowest thing on
it by an order of magnitude is the **Google Fonts stylesheet** — a 1KB file that costs
~420-470ms of DNS, TLS and round trip to a third-party origin. It used to be a plain
`<link rel="stylesheet">`, so it blocked first paint for all of that.

It now loads as `media="print"` with an `onload` swap, preceded by
`<link rel="preload" as="style">` and followed by a `<noscript>` copy. That takes it off
the critical path entirely: `domContentLoaded` went 584ms to ~120ms and `load` 951ms to
~440ms, measured cold-cache over localhost. `display=swap` is in the request, so text
paints in the fallback stack and swaps when the webfonts land. **Don't turn this back
into a plain stylesheet link.**

Only request weights that `styles.css` actually uses. The request is now two
families — Inter Tight and JetBrains Mono — down from four. Fraunces and Playfair
Display went with the serif, which also removed the per-glyph fallback Cyrillic
used to need.

`onScroll` runs once per animation frame via `requestAnimationFrame`, not once per scroll
event, and it performs every read (`scrollY`, `innerHeight`, `scrollHeight`, the process
section's rect) before any write. It previously interleaved them — read `scrollHeight`,
write a style, then call `getBoundingClientRect` — which forced a synchronous re-layout
in the middle of the handler, several times per frame while scrolling. `updateProcess`
takes the rect as an argument for that reason; **don't have it measure anything itself.**

`.hero-atmosphere` carries `will-change: transform` because it is a 20px blur over an
element 160% the size of the hero, transformed continuously for 26 seconds. Without the
hint the blur is re-applied every frame.

The hero's grain layer and `.hero-atmosphere` are gone with the depth system —
the second was a 20px blur transformed every frame for 26 seconds, so its removal
is a real saving rather than only a visual change.

Still expensive and deliberately left alone, since removing them changes the
design: `backdrop-filter` on `.site-header.is-scrolled` (blur 20px), and the grain
layer on `.band-ink`.

## Testing changes

Headless screenshots on Windows have two traps worth knowing:

- Windows enforces a **minimum window width around 496px**, so `--window-size=390` still lays out at 496 and crops the image. To check a real phone width, load the page in an `<iframe width="390">` — the iframe gets its own layout viewport.
- Screenshots capture at **first paint**; `setTimeout` callbacks have not run yet. Layout is valid, but anything driven by a timer (the ticker count-up) will not appear.
- A section rewrite that replaces everything between two comment headers will
  silently eat any unrelated block that happens to sit between them. That is how
  `.mark` and the hero's buttons were deleted mid-rollout, and the page rendered
  without either until it was measured. **Grep for the rules you did not intend
  to touch after any range-based edit.**

## Known placeholders

The four **partners** (`pt1..4name/role/line` in `main.js`) are invented people,
sitting in one flagged block per language. They claim a named human meets students at
the airport and acts as legal guardian to minors — replace them with the real
partners before this page is shown to a parent. Blanking a name hides that card;
blanking all four hides the section and its nav links.


The WhatsApp number `994000000000` is a placeholder: **5 occurrences in `index.html`**
plus `CUSTOM_WA` in `main.js` (the build-your-own card), and the displayed
`+994 XX XXX XX XX`. Replace all seven before launch.

## Deployment

Static files only — deploy directly to GitHub Pages, Vercel, Netlify, or any static host with no build step required.
