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
- **`--jade-ink` (`#0B6A5A`) marks; `--accent` acts.** Jade exists for exactly
  one job: the recommended package. Electric blue could not do that job, because
  it is already the page's action colour — a blue-tinted row beside blue buttons
  reads as another button rather than as a recommendation. Jade is cool enough
  to sit with the navy without arguing, and 6.5:1 on paper. Use it for the
  Standard row's label, tint, edge and ticks; **do not** use it for a control,
  and do not spend it on anything else.
- `--accent-deep` holds the deep blue and `--accent-ink` points at it. The
  indirection exists because a block that *remaps* `--accent-ink` for its
  subtree cannot also use it: a custom property is already remapped by the time
  the same block's own declarations resolve. Anything that both recolours a
  subtree and paints itself must name `--accent-deep`.
- **Sections have no eyebrow.** The mono kicker over every heading was removed;
  the headline and the marker under it carry the section on their own, and the
  `*Label` translation keys went with the markup.
- **Every raised surface is one material.** The glass tokens
  (`--glass-*`, `--radius-glass`) are the whole system: services and pricing
  rows, FAQ cards, contact links, the partner portrait and the open partner
  row, the active process step, the hero's ghost button and the scrolled
  header. If something needs to look raised, use the tokens rather than
  inventing a second recipe. There are **two grounds and they are not
  interchangeable**: on paper the pane is white over a coloured backdrop, on
  ink it is lit white at low alpha over a dark one. Paper values on an ink
  band give a grey smear.
- **Glass is nothing without a backdrop.** A frosted pane over a flat fill is
  a rectangle: the blur has nothing to bend and the saturate no colour to
  lift. `.band-aurora` and `.band-ink` paint wide radial colour fields for the
  glass to sit in front of. Adding glass to a band with neither is the mistake
  that made the first two attempts at this look like a tint.
- **Those fields are `background-image` on the band itself, never a layer
  inside it.** They began as inset `::before` pseudo-elements under
  `filter: blur(60px)` with `will-change: transform`, and that was the single
  biggest source of dropped frames on the page — see Performance. Do not put
  them back on a pseudo-element, and do not add `filter: blur()` to them: the
  `transparent 70%` stops already give the falloff the blur was there for.
- **There is no elevation, with one exception.** `--shadow-*`, `--rise`,
  `--cast-*` and `--emit` are all `none`. They remain only so rules that still
  name them resolve to nothing rather than to a stale navy glow. Surfaces
  separate by ground and by hairline. Do not reintroduce a shadow to solve a
  separation problem. The exception is the glass pane a hovered services or
  pricing row lifts out of the list, where the shadow is what makes it a pane;
  it is written as a literal in that one rule and is not a token.
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

### Hero

**There is no hero photograph.** The blue-hour Danube shot was the only image on
the page and the only thing the copy ever had to fight: the headline crossed the
lit Parliament, which is why it carried a `text-shadow` and why the scrim had to
be re-mixed every time the ink changed. The ground is now the same ink, the same
blurred colour fields and the same grid overlay every other dark band uses, so
the hero belongs to the page rather than sitting on top of a postcard. The
`text-shadow`, the two preloads and the phone-specific crop went with it.
`hero-budapest.webp` and `hero-budapest-sm.webp` are still in the repo and no
longer referenced — safe to delete.

The copy is a single centred column and the fields are placed to match. The
bottom fade stays: it hands the hero off to the ticker.

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

**The featured row is one of the rows.** It was a dark card, and as a dark card it
stopped being a row and became a poster dropped into the middle of a list — the eye
landed on it and then had to work out what the other four were. It is now the same
glass pane in the same paper, tinted in **jade** and edged in it: enough to be found
first, not enough to break the sequence. It keeps that tint when it lifts rather than
washing out to its neighbours' white.

Three things inside it follow the jade — the numeral, the "what is included" label and
the tick marks. **The CTA does not.** A recommended package is still bought with the
same blue button as every other one, and that split is the point: jade says *this is
the one*, blue says *do it*.

**The badge is an eyebrow, not a pill.** `.plan-tag` sits above the name as a line of
tracked-out caps rather than beside it as a filled capsule. A capsule next to the title
competes with the title — the eye reads a coloured object before it can read the word
"Standard", and the row ends up looking like it has a button in it.

**Hovering a row lifts a pane of glass out of the list** — translucent, blurred,
rounded, edge-lit and casting onto the rows behind it. One rule serves both `.plan` and
`.svc`. Because nothing inside changes colour, every contrast ratio on the row survives
untouched — which is exactly what the blue fill it replaced could not do: that version
needed a block of token remapping under it to keep the numeral, ticks, scope line and
buttons legible, and any element added to a row later would have missed it.

**Glass needs something behind it**, which is the part a first attempt at this got
wrong. A frosted pane over a flat white band is a grey rectangle: the blur has nothing
to bend and the saturate has no colour to lift. So `#services` and `#pricing` carry
`.band-aurora` — three wide, heavily blurred colour fields behind the content, low
enough in alpha that body text keeps its contrast (the muted grey measures ~5.2:1 over
the strongest part of the wash) and the band still reads as paper. The rows have no
ground of their own, so the fields show through and a hovered row has something to
frost. Its `overflow: hidden` is load-bearing — the fields are inset past the band's
edges so their soft ends never land inside it.

The featured row is **the same material in the dark**: `rgba(8,14,32,0.86)` with its
own blur and the same radius, so it belongs to the treatment rather than arguing with
it, and still measures about 14:1 behind white text. Its hover lightens rather than
darkens, since a dark pane over dark glass is a smudge.

**This is the one place on the page with real elevation.** The flat system separates
surfaces by hairline everywhere else; the shadow here is what makes the pane read as a
pane rather than as a lighter stripe. It is not licence to reintroduce shadow elsewhere — but it is now the same
cast (`--glass-cast`, `--glass-cast-ink`) every other pane uses.
Note also that a hovered row's own bottom hairline must go transparent, or a straight
line crosses the bottom of a rounded card.

The rule sits inside `@media (hover: hover)`. A touch browser fires `:hover` on tap and
holds it until something else is tapped, so unguarded it would leave the row a parent
just opened frosted with no way to clear it.

**An open row drops the blur.** Closed, a row is a short strip and its backdrop is
sampled once. Open, it is a panel several hundred pixels tall with a 0.85s entrance
animation running inside it, so the blur has to be recomputed over that whole area for
every frame — the same mistake the partner rows made, and the same fix: blur what holds
still, not what is moving. The pane stays; the tint rises to cover the missing
`saturate`. `.plan-featured` never blurs at all, because it ships `open`.

`.plan-detail` and `.svc-detail` carry `contain: layout paint` so the entrance
animation's repaint stays inside the panel.

**Nothing on this page animates a size.** Every panel — pricing, services, FAQ and
the partner rows — opens instantly to full height with its content fading in over 0.3s
(`planOpen`, opacity and transform only). Services and FAQ are plain `<details>`; the
partner rows are a `display` toggle.

Three of those four used to animate their height from JavaScript, and **it could not be
made smooth.** A height in normal flow re-lays out every section below the row on every
frame. Sampling `requestAnimationFrame` during an open showed callbacks arriving 4-37ms
apart with the panel lurching 39px in a single step, against a metronomic 10ms for a
pricing row that animates no layout at all. There was also 85-100ms of dead air before
anything moved: un-hide the panel, force a synchronous layout to measure it, wait a
frame for rAF, wait another for the transition to start.

**Do not reintroduce a height, max-height or grid-row animation here.** If an accordion
needs to feel less abrupt, lengthen the fade or add a transform — not a size.

**Prices live in `index.html`, not in the translations** — `.plan-figure` is literal
text, because a number is the same in all three languages. Prices are quoted in **USD**
(99 / 119 / 299 / 469, with 235 without guardianship); the AZN figures they replaced are
gone from the page. Internal partner-payment figures are deliberately absent from the
repo.

The Standard row carries **two prices, ranked**. A student over 18 needs no guardian,
so for many families 235 is the one they will actually pay — but 299 is the price of the
package, and it stays the biggest figure in the row. Under it, past a hairline, 235 sits
in jade at half the size with the qualifying words trailing in muted body text: the
second entry in a price list, the way a phone is "$999, or $41.62/mo. for 24 months".

It was a filled block, which inverted that rank — the cheaper number became the loudest
thing in the row and the actual price looked like the footnote. Before that it was one
translated sentence with the number inside it, which wrapped mid-phrase in all three
languages. Keep the figure in the markup, keep `planAltPrice` down to the qualifying
words alone, and keep the note on its own line so a long Russian phrase cannot widen the
price column and squeeze the name beside it.

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
work: a promise from a named human is something a third-person card can never
be — so `pt*line` stays in first person.

**They do not have separate jobs.** Any of the three can act as legal guardian,
meet a student at the airport and handle what follows, which is why every
`pt*role` says the same thing. The one real distinction is that **Firuzə works
with female students**, and it is stated twice on purpose: in her role line and
in her paragraph. `.partner-role` is `display: none` below 720px, so anything
that only lives in a role line does not reach a phone.

**Clicking the open row does not close it.** With one shared portrait, a state
where no row is open leaves a face belonging to no name.

**These rows carry no `backdrop-filter`.** The ground behind them is near-flat
ink, so the blur bought almost nothing — the tint, the edge light and the cast
are what read as glass here, and they are free to paint. Their tints are raised
slightly to cover the missing `saturate`.

**`openPartner()` measures nothing.** It toggles `is-open` and lets CSS show the
body. It used to set the body's height to a measured pixel value and transition
it, which took a whole family of problems with it when it went: a
children-not-`scrollHeight` helper (because `scrollHeight` returns the larger of
a box and its content, so a panel mid-transition handed back the previous
language's height), a measure-all-then-write-all pass to stop three rows forcing
three synchronous layouts per click, and `contain: layout paint` to fence the
per-frame reflow. A panel with no inline height cannot hold a stale one.

**Nothing about a real person renders until it is confirmed.** A row whose
**name** is empty does not render; if no row survives, the section and both nav
links go too. An invented partner card would poison every other claim on the
page. Three of the four slots are filled — Firuzə Osmanova, İbrahim Musayev and
Aqşin Sakif — all written from what they said about themselves. Slot 04 is blank
on purpose.

`openPartner()` measures with **`contentHeight()`, not `scrollHeight`**.
`scrollHeight` on an element with `overflow: hidden` returns the larger of its
content and its own height, and this body is always mid-transition from the
previous language's height at the moment it is re-measured — so it handed back
the old number and English kept Azerbaijani's spacing under its shorter
paragraph. Adding up the children answers the question actually being asked.

The rows are inset by `--pt-inset` and the list pulled back out by the same
amount, so the names still line up with the section heading while a row that
becomes a pane has room inside its own rounded edge. That inset shrinks below
720px: at full size the negative margin is wider than the page gutter and the
page scrolls sideways.

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

The page is well under 200KB of local files now that the hero photograph is gone, and
none of it is the bottleneck. The slowest thing on
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

**The colour fields must not live on a resizing layer.** This was the page's worst
performance bug and it took four wrong guesses to find, because every synthetic metric
I tried — throttled frame timing, `Performance.getMetrics`, timeline totals — was too
noisy to show it. What found it was **`Page.startScreencast`**: capture the real
compositor frames during an interaction and read the gaps between their timestamps.
Opening a services row produced deltas like `13 18 19 13 65 21 5 21 60 24 9 65 24 15
13 15 64 78` — five or six stalls of 60-80ms, four dropped frames each.

Bisecting by disabling one suspect at a time, `.band-aurora::before` was the whole of
it: with it hidden, zero drops and a 14ms worst frame. Nothing else moved the number —
not the header blur, not the grain, not the row hover glass, not the FAQ or contact
panes.

The mechanism: the pseudo-element was `inset: -12% -8%`, so **its box was a percentage
of the band**. Every frame that an accordion inside the band grew, a promoted,
`blur(60px)`-filtered, band-sized layer had to be re-rasterised. `will-change` made it
worse, not better — promoting a layer whose size changes every frame is the opposite of
what promotion is for.

As `background-image` on the band there is no layer to promote and nothing to
re-raster; the band paints gradients, which is cheap. Result: **0-1 dropped frames,
worst 25-35ms**, for both the services rows and the partner accordion, and the bands
look the same because the soft stops were doing the blur's work already.

**The lesson worth keeping: measure interaction smoothness with a screencast, not with
counters.** Frame timestamps are the thing the reader actually perceives. The same
method then found the second cause — the JS height animations — by comparing rAF
cadence during an open: 4-37ms and lurching for a section that animates layout,
a metronomic 10ms for one that does not.

Two things about the harness, both of which cost real time here:

- **Disable the HTTP cache** (`Network.setCacheDisabled`) before navigating. Chrome
  will serve a cached `index.html`, which pulls the *previous* `?v=` of the CSS and JS,
  and a measurement of code you already deleted looks exactly like a fix that did not
  work.
- **Establish the noise floor.** Recording frame deltas with no interaction at all gives
  3 drops and a 43ms worst frame on this machine. Any result at or under that is not
  evidence of anything. Both the services rows and the partner accordion now sit there;
  before the fixes they were at 5-6 drops with 60-80ms stalls.

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

Three of the four **partner** slots hold real people; slot 04 is blank, which is why
three names render. Blanking a name hides that card; blanking all four hides the
section and its nav links.

**Aqşin Sakif's hobbies are invented** — hiking, Sunday football, knowing where the
Azerbaijani food is — added at the owner's request to fill out a paragraph that
otherwise had only his age, his university and his PhD in it. Everything else about
all three is theirs. Have him read his paragraph before launch.


The WhatsApp number `994000000000` is a placeholder: **5 occurrences in `index.html`**
plus `CUSTOM_WA` in `main.js` (the build-your-own card), and the displayed
`+994 XX XXX XX XX`. Replace all seven before launch.

## Deployment

Static files only — deploy directly to GitHub Pages, Vercel, Netlify, or any static host with no build step required.
