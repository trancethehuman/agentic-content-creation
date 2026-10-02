# House style: Monochrome Editorial ★ (default for everything)

> This is the style agents actually build with. It distills three references, each studied in detail:
> - [Palantir by Fictive Kin](palantir.md): the **primary influence**. Austere, black and white, a light grotesk, "show, don't tell".
> - [Oregon Symphony by Fictive Kin](oregon-symphony.md): calm pacing, generous space, single-line gesture drawings, a geometric brand sans.
> - [Modal](modal.md): diagram vocabulary (box-and-cell systems, dot grids, isometric line icons).
> - Motion: [Ordinary Folk](animations/ordinary-folk.md).
>
> CSS: [`kits/mono.css`](kits/mono.css) (stills and video), plus [`kits/folk-motion.css`](kits/folk-motion.css) (video).
> Icons: [Lucide](https://lucide.dev) (`npm i` installs it; see §5).

**In one line:** a white page, black ink, lots of air, one light-weight grotesk headline, and one beautiful monochrome diagram or illustration that *shows* the idea.

---

## 0. House rules (non-negotiable; also in `AGENTS.md`)
1. **Less is more.** Only the content: no metadata, series names, tags, footers, numbering, or "1 of 5".
2. **No dividers or slashes.** No rules, separator lines, "/", "·", decorative "—", "↳", corner ticks, or crosshairs.
3. **No kicker above the headline.** One headline, the main visual, and at most one short sentence.
4. **Monochrome.** Greyscale only. **No accent colour.**
5. **No italic or coloured emphasis** inside headlines (e.g. a green italic phrase). That trend is over. That includes **grey "ghosted" lines**: a headline is one colour (ink), one weight. Let the words do the work.
6. **White background** for stills and video.
7. **Generous negative space.** If in doubt, remove an element or make the margin bigger.

---

## 1. The feeling
**Quiet. Precise. Confident. Spacious. Tactile.**

Think of a page from a Palantir white paper crossed with a Swiss museum catalogue. It reads as expensive because so little is on it. The diagram does the talking, and the type just names things.

---

## 2. Colour: greyscale only

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#FFFFFF` | Page / stage |
| `--snow` | `#F6F6F6` | Quiet surface: cards, panels, the "screen" of a UI illustration |
| `--fog` | `#EDEDED` | Stronger surface; empty tracks of bars |
| `--mist` | `#D6D6D6` | Outlines, inactive strokes, unchosen options |
| `--ash` | `#A6A6A6` | Labels, tertiary text, ghosted elements |
| `--stone` | `#6B6B6B` | Secondary text (Palantir's grey body copy) |
| `--graphite` | `#333333` | Strong secondary |
| `--ink` | `#0D0D0D` | Headline, **the answer**, solid fills |

**How emphasis works without colour** (this is the core skill of this style):
- **The answer = solid ink.** Chosen option: black fill, white text. Unchosen: thin `--mist` outline, `--ash` text.
- **Active vs. inactive = dark vs. light.** A path being taken is ink; paths not taken are mist.
- **Uncertainty = hollow or dashed-free lightness.** Low confidence is shown as a lighter fill (`--ash`), or a half-filled bar, never as yellow.
- **Danger or blocked** = an ink outline with a Lucide `ban` / `shield-x` icon. The icon carries the meaning, not colour.
- Photographs (if ever used) are black and white, as on the Palantir site.

Ratio guide: about 80% white, 15% light greys, 5% ink.

### 2b. Dark mode (a variant, made on request)
White is the default. When dark versions are wanted, **don't redesign**. Generate them, because the style is strictly greyscale and every token has a dark partner (Palantir's dark HUD sections are the reference):

| Light token | → | Dark | Role in dark mode |
|---|---|---|---|
| `--paper #FFFFFF` | → | `#0D0D0D` | Stage |
| `--snow #F6F6F6` | → | `#171717` | Cards, panels |
| `--fog #EDEDED` | → | `#222222` | Stronger surface, bar tracks |
| `--mist #D6D6D6` | → | `#3A3A3A` | Outlines, unchosen options |
| `--ash #A6A6A6` | → | `#6E6E6E` | Labels |
| `--stone #6B6B6B` | → | `#A3A3A3` | Secondary text |
| `--graphite #333333` | → | `#D9D9D9` | Strong secondary |
| `--ink #0D0D0D` | → | `#F2F2F2` | Headline and **the answer**. A black chip becomes a light chip, so it stays the brightest thing on the page |

Greys in between are interpolated. Gradient spheres keep their lighting (highlight lighter than edge) and only their overall tone moves, so the "answer" sphere becomes luminous. Grain switches to light speckle that screens onto the dark stage.

```bash
node skills/lib/make-dark.mjs --kits                       # rebuild kits/*.dark.css after editing a light kit
node skills/lib/make-dark.mjs output/<project>/infographics/src   # writes src-dark/ beside it
node skills/infographic/render.mjs output/<project>/infographics/src-dark --out output/<project>/infographics/dark
```
Then **look at every dark render**. Watch for SVG elements that relied on the default black fill, and for anything that read as "light = unimportant" and now glows.

---

## 3. Typography

| Role | Reference fonts | Our free stand-in | Spec at 1080px wide |
|---|---|---|---|
| Display | Palantir UI grotesk Light, Lab Grotesque (FK), ABC Diatype (Modal), Neulis Neue (Oregon brand) | **Hanken Grotesk 300** | 76–88px, line-height 1.04, tracking −0.025em, `--ink` |
| Title | the same grotesk, Regular | **Hanken Grotesk 300/400** | 56–64px (FK case studies use section heads at 2× body) |
| Body | Lab Grotesque Regular | **Hanken Grotesk 400** | 26–30px, line-height 1.4, `--stone`; key words in `--ink` |
| Labels and data | Lab Grotesque Mono, DM Mono (Modal) | **DM Mono 400** | 18–22px, UPPERCASE for labels (+0.08em), sentence case for data |

Rules:
- **Sentence case** for headlines, ending in a full stop: "Every button is a box." Use Palantir's short declaratives: "Show. Don't tell."
- **Light weight at large sizes** (300), regular for body. Never bold display. Use 500 only for a short in-diagram title.
- **No italics.** No coloured words.
- Numbers, money, %, timings, and code go in **DM Mono**.
- Aim for about **two text sizes per piece** (headline + body). Mono labels inside diagrams are allowed only when they name something.
- Measured on fictivekin.com at 1440px: case-study title 48px Light serif, section heads 32px Regular sans, body 16px/22px, labels 11px bold caps +0.06em. **The ratio is about 3 : 2 : 1.** Keep it.

---

## 4. Layout & negative space
- **Margins: 96px** on a 1080-wide canvas (9%). Posters use 144px at 2160 wide.
- **Asymmetric editorial grid.** Palantir's light section puts a big headline in the left half and grey body copy in the right column, with a large gap in between. Our portrait version: the headline top-left with a ~720px max width, and the visual below with space all around it.
- **One hero visual**, occupying about 45–60% of the canvas height. It must have air on all sides (≥64px from text).
- **At most 3 blocks** on a still: headline, visual, and an optional one-line takeaway.
- Separate blocks with **space** (64–120px) or a `--snow` surface, never a line.
- Lists are Palantir-style rows: big regular text + an `arrow-right` Lucide icon at the right edge, separated by space, not rules.

---

## 5. Icons: Lucide
Use [Lucide](https://lucide.dev/icons) for every pictogram (receipt, credit-card, router, shield-check, mouse-pointer-click, split, ticket, gauge…). Don't hand-draw a standard icon that Lucide has.

```html
<script src="<root>/node_modules/lucide/dist/umd/lucide.min.js"></script>
<i data-lucide="receipt" style="width:48px;height:48px"></i>
<script>lucide.createIcons({ attrs: { 'stroke-width': 1.5 } })</script>
```
- **Stroke 1.5** (thin, Palantir-like), colour from `currentColor` (`--ink`, or `--ash` when inactive).
- Size icons in relation to type: 1× cap height inline, 40–64px inside diagram nodes, and 96–160px as a hero glyph.
- Raw SVGs are in `node_modules/lucide-static/icons/<name>.svg` if you need to inline or compose one.

---

## 6. Illustrations & diagrams
Monochrome line work, with **ink for the important thing** and mist for context.

1. **Interface-as-illustration (Palantir).** Draw simplified product UI: a panel on `--snow` with rows, buttons, a cursor, and a selection box. Show the system working rather than describing it.
2. **Box-and-cell systems (Modal).** Rounded frames with a DM Mono name in the corner, filled with grids of small cells. Lit cells are ink; idle cells are mist outlines.
3. **Flow diagrams.** Nodes are rounded rectangles or circles; connectors are 1.5px lines with soft curves. The taken path is ink and the untaken paths are mist. Diamonds are fine for flowchart decisions.
4. **Gesture line (Oregon Symphony).** A single, continuous, hand-drawn-feeling ink stroke (like a conductor's baton trace) on a `--snow` tile. Use it as a quiet hero for abstract ideas. One per piece, max.
5. **Soft monochrome solids (Ordinary Folk / CryptoCubes).** Grey-gradient spheres and cubes with fine grain, for abstract concepts (a decision, a choice set).
6. **Lucide glyphs as nouns.** A receipt, a router, or a ticket inside a node makes a diagram readable at a glance.

Stroke weights: 1.5px for structure, 2.5px for the "answer" path. No drop shadows or glows. One gentle `--snow` surface behind the hero is allowed.

---

## 7. Formats
| Format | Size | Notes |
|---|---|---|
| Social still | 1080×1350 (4:5) | ≤ 3 blocks, two text sizes |
| **Dense cheat sheet / poster** | **2160×2700 (4:5, 2×)** | Many sections on a modular grid. Body 26–30px, so it is readable when zoomed. Section titles are plain words (no numbers). Still white, still with air between modules |
| Video | 1080×1440 (3:4) | See `animations/ordinary-folk.md` (motion) and §8 below |

---

## 8. Video in this style
- White stage, monochrome, Hanken headline, Lucide icons.
- **Interactive-looking diagrams.** The visuals should look like a live product being used:
  - a cursor glides in and clicks (with a small press-scale on the button),
  - a toggle switches, a list row highlights on hover, a dropdown opens and an option gets picked,
  - a bar fills and a number counts up in DM Mono, a node lights from mist to ink as a "signal" passes along a connector,
  - a panel zooms into a tile (Palantir), or a selection box snaps around the chosen element.
- Motion grammar (transform-don't-cut, easing, staggering, breathing holds) comes from `animations/ordinary-folk.md`.

---

## 9. Checklist
- [ ] White page, greyscale only, with no accent colour anywhere (including inside SVGs)
- [ ] One light-grotesk headline: no italics, no coloured words, nothing above it
- [ ] ≤ 3 blocks, ≥ 96px margins, the hero visual has air on all sides
- [ ] Emphasis comes from ink vs. mist and filled vs. outlined
- [ ] Icons are Lucide at stroke 1.5
- [ ] No metadata, numbering, dividers, slashes, or decorative marks
- [ ] The renderer prints ✓ (no overflow), and you looked at the PNG
