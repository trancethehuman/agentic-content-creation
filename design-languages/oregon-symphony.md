# Design language: Oregon Symphony (Fictive Kin)

> Source: [Fictive Kin: Oregon Symphony](https://fictivekin.com/work/oregon-symphony), studied twice (Oct 2026), including at 1440px desktop width.
> Status: **reference.** The user's favourite site. Its calm, its space, its type system, and its gesture lines feed into [`house-style.md`](house-style.md), which is what agents build with.
> **Superseded parts:** the dark stage, the green accent, and the green italic headline phrase (§2–§3 below) are **not** used anymore. The house style is monochrome on white, with no italic or coloured emphasis.

### New findings from the second pass (desktop)
- **The brand typeface is Neulis Neue** (Light, Regular, Semibold), a geometric sans with gentle ink traps. The specimen lists "NEULIS NEUE LIGHT REGULAR SEMIBOLD ARPEGGIO® OPUS №503 Æ CRESCENDO RIFF & RONDO TONIC * V7-I TERRAIN KODŌ EIGHTH NOTE ECHOS CODA PORTLANDIA". On the symphony's own website, headlines are set in **Neulis Neue Semibold, ALL CAPS** ("FIND JOY IN THE HARMONY OF TIMELESS MUSIC.").
- The case-study page uses a different, quieter system: Victor Serif Light titles, Lab Grotesque body, and Lab Grotesque Mono labels.
- **The palette has a white and off-white pair** ("WHITE", "OFF WHITE" tiles with vertical labels) as well as the greens. That light pair is the part we keep.
- **Gesture lines**: single, continuous, hand-drawn strokes (a conductor's baton path) drawn on flat colour tiles. Each tile has one stroke and nothing else. This is our "gesture line" motif, drawn in ink on a `--snow` tile.
- **Grid overlays**: the website hero is shown with its 12-column grid drawn over it, as if the design were opened up to show how it is built.
- The ticketing UI uses light cards, black-and-white photography, and outlined pill tags.


Fictive Kin rebranded the oldest orchestra west of the Mississippi to feel *"more welcoming, human"*, dropping the stiff formality of classical music while keeping its quiet confidence. The result is a **dark, calm, mostly empty stage**, where one electric green moves through it like a conductor's baton. It feels expensive because it holds back.

This document records how it works in enough detail that an agent can recreate it from scratch.

---

## 0. House rules: less is more (these override everything below)

The reference site uses hairlines, numbered labels, and little UI marks. **We do not.** On every graphic and every video:

- **No metadata.** No series name, topic tag, source or credit footer, date, or header/footer bar. The piece is the content.
- **No numbering.** Each piece stands alone. No "1 of 5", "06 / 15", chapter or scene counters, or numbered section labels.
- **No slashes or dividers.** No hairline rules, separator lines, progress lines, "/" or "·" separators, decorative "—", or "↳" arrows.
- **No random decoration.** No corner ticks, crosshairs, stray dots, or construction marks that do not explain something.
- **No kicker or subtitle above the headline**, and no stacks of big text, subtext, and small text. One headline + the main visual, plus at most one short sentence. About two text sizes per piece.
- **Instead:** a strong headline, a beautiful Fictive Kin-style illustration, and nicely designed diagrams or flowcharts. Separate things with **space** or a **surface colour**, never a line.

---

## 1. The feeling in five words

**Dark. Calm. Precise. Warm. Electric.**

- **Dark**: a near-black stage (`#0D0D0D`), never pure `#000`. Content sits on it the way performers sit on a lit stage.
- **Calm**: lots of empty space. Sections are separated by whole screens of nothing. Slow fades, never bounces.
- **Precise**: thin hairlines, small monospaced labels, everything on a grid, numbers in mono.
- **Warm**: a light, high-contrast *serif* for big statements, which reads like a concert programme rather than a tech site.
- **Electric**: one acid green (`#8AE679`) used for the most important thing on the screen, often set on its own deep forest green (`#193D21`).

If a design feels busy, loud, gradient-heavy, or "techy", it is off-brand.

---

## 2. Colour

### 2.1 Core palette (sampled from the site's own palette strip)

| Token | Hex | Role |
|---|---|---|
| `--ink` | `#0D0D0D` | Page background. The stage. |
| `--ink-2` | `#161616` | Raised cards on the stage |
| `--graphite` | `#343434` | Hairlines, card borders, empty bar tracks |
| `--stone` | `#726F6E` | Small labels, captions, metadata (the site's mono label colour) |
| `--fog` | `#CACACA` | Body copy on dark |
| `--paper` | `#F4F4F4` | Light surfaces (UI screenshots, rare light sections) |
| `--white` | `#FFFFFF` | Headlines, key text |
| **`--green`** | **`#8AE679`** | **The signature.** Wordmark, accent words, the "answer" |
| **`--forest`** | **`#193D21`** | Deep green panels that carry green type and drawings |

### 2.2 Supporting "Oregon landscape" hues

The palette strip continues into a quieter set taken from Oregon's landscape. They appear as **flat tiles**, never as gradients:

| Token | Hex | Feels like |
|---|---|---|
| `--butter` | `#FFF38A` | Sun on wheat. Good for "warning / look here / low confidence" |
| `--olive` | `#574D2A` | Dry grass. Muted tile background |
| `--peach` | `#FCDAAC` | Skin, warmth. Human element |
| `--wine` | `#530B21` | Velvet seats. Rare, for "stop / danger" |
| `--slate` | `#2F515A` | The Willamette river. Calm secondary tile |

### 2.3 Colour rules

1. **About 85% of any frame is ink.** Green covers 5–10% at most. The rest is white and grey type.
2. **Green means "the answer" or "the thing that matters".** Do not use it for decoration.
3. **Green-on-forest** is the signature combination: green line drawings or text on a `#193D21` rounded panel. Use it for the hero illustration or the key takeaway.
4. Use **one** supporting hue per piece, two at most. Butter is the most useful (uncertainty, attention).
5. No gradients, glows, or drop shadows. (The site's photography has motion blur; we use crisp, flat vector instead.)
6. Contrast: body copy is `--fog` on `--ink` (about 12:1). Never set body text in `--stone`; that is for labels only.

---

## 3. Typography

The site uses three families, each with exactly one job:

| Role | On the site | Our free stand-in | Use |
|---|---|---|---|
| Display serif | **Victor Serif** (Light 300, Light Italic) | **Newsreader** 300 / 300 italic | Headlines, big statements, pull quotes |
| Sans | **Lab Grotesque** Regular/Bold | **Geist** 400/500 | Body copy, sub-heads, UI |
| Mono | **Lab Grotesque Mono** | **Geist Mono** 400 | Labels, tags, numbers, data, "system" voice |

### 3.1 Measured specs from the site
- Headline (h1 "Oregon Symphony"): Victor Serif **weight 300**, 48px, line-height 56px (1.17), **letter-spacing −0.01em**, white.
- Section heads ("Music for All", "Bridgetown"): sans at roughly 2× body size, regular weight, white.
- Body: sans, about 17px on the web, line-height about 1.45, white or light grey, set in a **narrow column of about 40–45 characters**.
- Mono labels: 11px, **bold, uppercase, letter-spacing 0.06em**, colour `#726F6E`.
- Service pills: mono uppercase, wide letter-spacing, 1px light outline, fully rounded, with a small • dot before the text. (We keep the pill and drop the dot.)

### 3.2 Scaled for social (1080px wide canvas)
| Style | Font | Size / line-height | Notes |
|---|---|---|---|
| `.display` | Newsreader 300 | 88–96px / 1.02 | −0.015em tracking. One idea, two lines max |
| `.title` | Newsreader 300 | 60–68px / 1.06 | Secondary headline |
| ~~`em` inside headlines~~ | | | **Retired.** No italic or coloured emphasis (house rule) |
| `.lede` | Geist 400 | 30–34px / 1.38 | `--fog`. 1–2 sentences |
| `.body` | Geist 400 | 25–28px / 1.42 | `--fog`. Never smaller than 24px on social |
| `.h3` | Geist 500 | 30–34px / 1.2 | White, or green inside a forest panel |
| ~~`.kicker`~~ | | | **Not used.** No line above the headline (house rule) |
| `.label` | Geist Mono | 18px, +0.12em, UPPERCASE | `--stone`. Only *inside* diagrams, to name things |
| `.pill` | Geist Mono | 18px, +0.10em, UPPERCASE | 1.5px outline, radius 999px, no dot. Only for labels that carry meaning |

### 3.3 Type rules
- **Pair serif and mono deliberately.** Serif means human and emotional ("Sorting money, *in a blink.*"). Mono means machine and factual ("97% · −$6.40 · 0.1 SEC").
- Headlines are **sentence case**, short, often ending in a full stop. They should read like a line from a concert programme, not a SaaS slogan.
- Never use bold serif. The light weight is the whole look.
- Numbers, money, percentages, timings, and code always go in mono.
- Left-align everything. Centre only a single, isolated word or wordmark.

---

## 4. Layout & composition

- **Asymmetric two-column editorial grid.** On the site, the title sits in the left third and body copy in the middle third, leaving the right third empty. On a portrait canvas, translate this into a left-aligned text column with the illustration pushed to one side.
- **Generous margins**: 72px on a 1080px canvas (6.7%). The top bar and footer bar sit inside them.
- **No frame furniture.** The site frames pages with nav bars and hairlines; we use **no header, footer, rules, or metadata**. The headline sits directly on the stage.
- **Big vertical rhythm.** Major blocks are separated by 40–56px. When unsure, add space rather than content.
- **Rounded rectangles** (radius about 20px) for panels and cards. The site uses them for every image and the palette tiles.
- **One hero per frame**: a headline *or* an illustration *or* a data block carries the frame. Everything else supports it.
- On the site, sections are often a single statement alone on a full black screen. In video, give each idea its own scene the same way.

---

## 5. Graphic motifs

These come straight from the identity system on the case-study page:

1. **The Bridgetown curve.** Portland has 12 bridges, and the identity borrows their suspension curves: a pair of concave arcs meeting at a sharp peak, like the green peak on forest green. Use it as a hero shape, a divider, or a "connection" line between two things.
2. **Text on a path.** The tagline is set along a big looping ribbon, in green on forest. It is good for a single quote, used at most once per series.
3. **Construction drawings.** The wordmark is shown with its geometry exposed: dashed bounding boxes, circles at the corners, tiny mono captions ("ADDED CORNER RADIUS", "REFINED GEOMETRIC FORM") with thin leader lines. We borrow this **only when the annotation explains something** (e.g. a label naming the box the model picked). Never use it as decoration.
4. **Giant ghost type.** "OREGON SYMPHONY" set huge in `#1E1E1E` on `#0D0D0D`, almost invisible, bleeding off the edges. It works as a background texture behind one key word.
5. **Conductor lines.** Thin green strokes slicing across a photo, tracing the conductor's motion. In vector, use a few long, thin, straight or gently curved green lines crossing an illustration.
6. **Monogram in a circle.** The "OS" mark is a single-weight line drawing. Our illustrations follow it: **single-weight line art, 2.5px strokes, round caps and joins.**
7. **Palette tiles.** Tall rounded colour bars with tiny vertical mono hex labels. Use them for category legends.

### 5.1 Illustration recipe (for this repo)
- Use inline SVG with **line art only**: `stroke-width: 2.5`, round caps and joins, `fill: none` or flat `--forest` fills.
- Draw in green on forest, or white and grey on ink with a single green element (the "answer").
- Build from simple geometry (rounded rectangles, circles, arcs, dotted connectors) plus one recognisable object (receipt, browser window, router, ticket, shield, flowchart diamond).
- Label only with meaning: a short word placed next to the thing it names. No corner ticks, crosshairs, or decorative marks.
- Keep it friendly, not technical. A beginner should recognise the object in one second.

---

## 6. Motion (for video)

Motion on the site is slow and theatrical: text rises gently out of darkness, and the wordmark is drawn piece by piece.

- **Easing**: `cubic-bezier(.22, 1, .36, 1)` (ease-out-quint) for entrances, and `cubic-bezier(.65, 0, .35, 1)` for moves.
- **Entrances**: fade from 0 to 1 while rising 24–40px, over **0.9–1.4s**. Stagger lines by 0.25–0.4s.
- **Line drawing**: SVG strokes draw on with `stroke-dashoffset` over 1.2–2s. Use this for curves, connectors, and bounding boxes.
- **Holds**: after a scene finishes animating, **hold for at least 2.5–4s** so a beginner can read it. A rough rule: 1 second per 3 words, plus 2 seconds.
- **Exits**: fade to ink over 0.6–0.8s. Never slide out, spin, or bounce.
- **Pacing**: 4–6 scenes, 25–40s total. One idea per scene.
- **Loud moments** are allowed once per video: a green panel filling the frame, or a big green number.

---

## 7. Voice

- Warm, plain, and confident. The site says *"Music for All"*; we say *"AI for everyone."*
- Write short sentences at about a grade-5 reading level. Use concrete nouns: coffee, receipt, button, ticket.
- Mono labels speak like a machine (`JEV PICKS`, `HOW SURE`); headlines speak like a person.

---

## 8. Do / Don't

| Do | Don't |
|---|---|
| Let black space do the work | Fill every corner |
| Use one green thing per frame | Use green as decoration |
| Use a light serif for feelings, mono for facts | Bold serif, ALL-CAPS serif headlines |
| Use flat colour tiles from the palette | Gradients, neon glows, drop shadows |
| Use single-weight line art with construction marks | Stock 3D blobs, emoji clip-art |
| Use slow fades and long holds | Fast cuts, bounces, kinetic-type chaos |
| Use space and surface colour between sections | Divider lines, slashes, "·" separators |
| Let the piece stand alone | Series names, "1 of 5", topic tags, credit footers |
| Use beautiful illustrations and flowcharts | Corner ticks, crosshairs, random decorative marks |

---

## 9. Checklist before shipping a piece

- [ ] Background is `#0D0D0D`; green covers ≤10% of the frame
- [ ] Exactly one headline, with no italic or coloured phrase and **nothing above it**
- [ ] About two text sizes: the headline plus at most one short supporting sentence
- [ ] All numbers are in mono
- [ ] Body copy is ≥24px at 1080 wide and reads at grade 5
- [ ] There is a hero illustration (line art) that a beginner understands in one second
- [ ] No metadata (series, topic, source, date), no numbering, no dividers, slashes, or decorative marks
- [ ] Nothing spills off the canvas (the renderer warns `⚠ OVERFLOW`)
