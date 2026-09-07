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

### Pricing cards: opening sideways

Each card is a `.plan-slot` holding a `.plan`, split into a `.plan-face` (name, price,
scope line, CTA) and a `.plan-detail` (the full list). On a pointer device at 1200px and
up the panel is folded shut; hovering widens the card and squeezes the other three, and
the width it gains is the panel unfolding beside the face.

**The panel is a fixed width (`--pd`), and the card grows by exactly that.** This is the
part to preserve. The panel's text then has one measure open or shut, so it never
reflows — which means the row never changes height — and it is never clipped, because
the width it is laid out at is precisely the width it opens to. An earlier version let
the panel take a proportional share and pinned its contents with a `min-width` guess;
whenever the guess exceeded the width the panel actually opened to, the text overflowed
and was cut off mid-word.

**Why `calc(var(--pd) * 5 / 4)`.** Slots are `flex: 1 1 0`, so free space is shared five
ways. A slot given basis B ends up `B + (free - B)/5` wide — that is `B * 4/5` wider than
its resting fifth. To gain exactly one panel width P, B must be `P * 5/4`. That keeps
the face at precisely its resting width, so nothing inside it moves as the panel appears.
**Change the number of cards and this fraction changes** — it was `4 / 3` when there
were four.

`.plan-slot` needs an explicit `min-width` (8rem). Flex items default to
`min-width: auto`, which floors a slot at its own min-content width. That floor starves
the opening card: it cannot take the width it asked for, so its face shrinks and its
text reflows as the panel appears. An explicit floor below the natural one lets the
squeezed slots give up the width. **The fifth card made this tight.** At 1440px five
slots rest at 214px and squeeze to 149px, so the old 11rem (176px) floor left nothing to
give and the opening face collapsed 214 -> 106px. 8rem clears it, but only just: at
`--pd: 18rem` the squeeze reaches 145px and the Standard face clips again. 17rem is the
largest panel that fits. Verify with a real hover, not by reading the CSS.

A squeezed 149px card has ~85px of content width, which is narrower than `800 AZN` set
on one line. Two rules in the `min-width: 1200px` block keep it legible: `.plan-price`
is `flex-wrap: wrap`, so the currency drops below the figure, and `.plan-figure` takes a
smaller clamp than it does in the stacked layouts. Drop either and the price is clipped
mid-digit in every card that is not being hovered.

`.plan-face > .btn` overrides `.btn`'s `white-space: nowrap; overflow: hidden`, which
silently truncates a long label in a squeezed card. Labels here have to wrap.

**After touching any of this, verify three things** at rest and with each card open:
`.plans` height, `document.scrollHeight` and the FAQ's offset are unchanged; the face's
width is unchanged; and each panel child's `scrollWidth` equals its `clientWidth`. Those
three are the whole contract.

Below 1200px, or with no pointer, the panel sits under the face instead. There
`.plan-face` becomes `display: contents` so its two children become flex items of the
card and `order` can place the detail between the price and the button — a CTA above the
list of what you get asks for the decision before making the case. Padding moves onto
`.plan-top` and the button when that happens.

`.reveal` lives on `.plan-slot`, not on `.plan`: the stagger in `main.js` matches
`:scope > .reveal` inside `.plans`, so it has to be the direct grid child. **That has a
trap.** `.js .reveal` sets the `transition` shorthand on the very same element, at
(0,2,0) and later in the file, so a plain `.plan-slot { transition: ... }` is silently
discarded and the card snaps open with no animation at all. The slot's transition is
therefore written as `.js .plans > .plan-slot` (0,3,0) and must restate the reveal's own
`opacity` and `transform` transitions alongside `flex-basis`, or the entrance stagger
breaks instead. If the open ever feels instant again, check
`getComputedStyle(slot).transitionProperty` first — it should list `flex-basis`.

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

Five price columns only fit at full width; the grid drops to two below 1200px and to one
column below 900px, where `.plan-featured { order: -1 }` floats Standard to the top.
Five never divides evenly, so the two-column rows leave one card alone at the end — the
order puts *Build your own* there, which already reads as a different kind of thing.

**The row is as tall as the tallest panel even while every panel is shut.** That is what
keeps the row from resizing on hover, and it is why a long list in one card adds dead
space to all five. Standard at six bullets set the row to 561px; merging two of them
brought it to 524px. If the cards ever look empty, shorten the longest panel rather than
reaching for a height animation.

**Prices live in `index.html`, not in the translations** — `.plan-figure` is literal
text, because a number is the same in all three languages. The Standard card carries a
second line (`planAltPrice`) for the lower without-guardianship price; that one *is*
translated, since it is a sentence. Internal partner-payment figures are deliberately
absent from the repo.

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
