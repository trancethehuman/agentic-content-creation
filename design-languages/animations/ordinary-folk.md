# Animation language: Ordinary Folk ★ (default for video)

> Studied October 2026 from:
> - [Ordinary Folk: Reel II](https://www.youtube.com/watch?v=SJ4u5pPMtKs), the studio reel (1:32)
> - [Equilibrium](https://www.youtube.com/watch?v=64BsL0SJhzo), a personal piece: *"we started with the two shapes"* (1:36, loops)
> - [Praxis: The Redemptive Frame](https://www.youtube.com/watch?v=pd97iwzFF74), an explainer (2:39). **The closest reference for our explainers.**
> - [CryptoCubes](https://www.ordinaryfolk.co/project/cryptocubes), a case study: *"a minimalist, cube-centric design … Spheres will always be our first love."*
>
> Motion kit: [`../kits/folk-motion.css`](../kits/folk-motion.css)
> Use together with the visual language [`../oregon-symphony.md`](../oregon-symphony.md) (palette and type). See §9.

Ordinary Folk is a motion-design studio in Vancouver (creative direction: Jorge R. Canedo E.). Their explainers make abstract ideas feel physical. **A few simple geometric shapes (a dot, a sphere, a ring, a cube) keep transforming into each other, and that transformation *is* the explanation.** Nothing cuts. Everything flows. It is calm, musical, and quietly delightful.

---

## 0. House rules (override everything below)
Same as [`AGENTS.md`](../../AGENTS.md): **less is more.** On screen there is no metadata, no numbering (no "1 of 5", scene counters, or progress bars), no dividers or slashes, no decorative marks, and no kicker above the headline. Each scene is one headline plus the main visual, with at most one short sentence. Ordinary Folk's own work already obeys this: most frames have **zero text**.

---

## 1. The feeling in five words
**Continuous. Geometric. Soft. Rhythmic. Restrained.**

- **Continuous**: one shape becomes the next. There are no hard cuts and no slide-ins from off-screen.
- **Geometric**: everything is built from primitives: dot, circle or sphere, ring, square or cube, ribbon, and the paths between them.
- **Soft**: gradient-filled forms with a blurred colour "aura" and fine film grain. Edges are crisp; light is diffuse.
- **Rhythmic**: motion lands on beats. Arrays move in staggered waves like music.
- **Restrained**: one hero object, centred, with lots of empty field. A single dot on a blank stage is a complete frame.

---

## 2. Shape language

| Primitive | How they use it | Meaning it carries |
|---|---|---|
| **Dot** (8–20px) | Travels along paths, orbits, lines up into timelines, splits and merges | An idea, a person, a data point, "a decision" |
| **Sphere / circle** | The hero. Soft radial gradient, often with concentric rings inside (Praxis: core → ethical → redemptive) | A whole, a system, a self |
| **Ring** | Unrolls into a ribbon, overlaps in Venn-like flowers, pulses outward | Relationship, a cycle, a boundary |
| **Square / cube** | Tiles into grids; grids ripple in waves; cubes nest and stack | Structure, data, "many things" |
| **Ribbon** | A ring opened up; swoops through space and re-closes | Change, flow |
| **Path** | A thin line (often dotted) that is drawn **only while something travels on it**, then disappears | Movement, a journey, a connection |

**Arrays** are a signature: radial flowers (8 pills around a centre), grids of tiles with a small group lit in the middle, orbits of 3 coloured dots, and ellipses of dots that collapse into a straight line (a timeline).

**Two-shape rule** (from *Equilibrium*): build a whole piece from **two primitives** (e.g. a sphere and a cube) and let all variety come from transformation, arrangement, colour, and scale.

---

## 3. Colour & surface

### 3.1 The Praxis palette (sampled from frames)
| Role | Hex |
|---|---|
| Stage (warm paper grey) | `#E2E6E5` |
| Ink (labels) | `#0C100F` |
| Teal | `#58B8D0` / `#3D8DA4` |
| Green | `#408E5A` / `#57AF7F` |
| Coral | `#EC6D5C` / `#D8726D` |
| Butter | `#F6D574` |

*Equilibrium* uses **tinted monochrome stages**: a mint field behind a green object, butter behind gold, blush behind pink. The **stage colour cross-fades as the object changes colour**, which works like a scene change without a cut.

### 3.2 Surface treatment
- **Radial gradient fills**: light core → saturated edge, or the reverse. Never flat fills on hero shapes.
- **Aura**: a large, heavily blurred blob of the object's colour behind it (blur ≈ 60–120px, opacity 0.35–0.6).
- **Grain**: fine monochrome noise over gradients (opacity 0.06–0.12). It makes digital gradients feel printed.
- **Glass**: translucent planes with a bright 1px edge, used for "layers".
- **Glow**: a soft white bloom only at a moment of insight, once per video.

---

## 4. Typography
Text is rare. When it appears:
- A **small geometric sans, ALL CAPS, very wide tracking** (≈0.3em), dark on light ("REDEMPTIVE", "I SACRIFICE").
- It sits **beside** the object (left or right of the hero), vertically centred, never on top of it.
- It fades in after the motion settles and fades out before the next transformation.
- A label may connect to the part it names with a thin line. **For us: use a short solid line only when the label names a specific part.** Otherwise place the label next to the thing. (House rules: no decorative dashes.)

For our videos, headlines follow the Oregon Symphony type (Newsreader Light), as described in §9.

---

## 5. Motion grammar (the important part)

### 5.1 Transform, don't cut
Every scene is born from the last one. Examples from the reel:
- A ring **unrolls** into a ribbon, which **splits** into two rings, and a sphere slides through the gap (*Equilibrium*, 3.0–6.0s).
- An ellipse of coloured dots **collapses** into a straight line, which becomes a timeline (*Praxis*, 57–62s).
- A circle **halves**; each half becomes a new shape (*Praxis*, 33s).
- The camera **pushes into** a sphere until its colour becomes the next stage.

**Rule:** the last shape of scene A is the first shape of scene B. Plan the "hand-off shape" for every transition.

### 5.2 Easing
- **Moves and morphs**: strong ease-in-out with long, soft tails: `cubic-bezier(.65, 0, .35, 1)`, or for a more "expo" feel `cubic-bezier(.87, 0, .13, 1)`. Objects accelerate out of rest and glide into rest.
- **Arrivals / pop-ins of small things** (dots, tiles): scale 0 → 1.08 → 1 with `cubic-bezier(.34, 1.56, .64, 1)`. Overshoot at most 8%, and only on small elements.
- **Text**: opacity only, plus at most a 12px drift, `cubic-bezier(.22, 1, .36, 1)`.
- **Never linear**, except constant rotation and orbits.

### 5.3 Stagger & overlap
Arrays never move in unison. Each element is offset 40–90ms (`animation-delay: calc(var(--i) * 60ms)`), producing waves, ripples, and dominoes. Secondary elements lag the hero by 100–200ms (follow-through).

### 5.4 Paths, orbits, trails
- A path **draws on just ahead of** the dot travelling along it (stroke-dashoffset) and **erases behind** it. Paths exist only while they carry motion.
- **Orbits**: 2–3 coloured dots circle a centre at a constant speed (linear) while everything else eases.
- **Trails**: a fast dot leaves 3–4 ghost copies at decreasing opacity (0.5, 0.3, 0.15), not a blur streak.

### 5.5 Breathing holds
Ordinary Folk frames never fully freeze. During a hold:
- the hero **rotates** slowly (≤ 8°/s) or **pulses** in scale (1 → 1.02 → 1 over 3–4s),
- orbiting dots keep orbiting,
- the aura drifts slightly.

This is what lets **us** hold a frame for 4–6 seconds (so beginners can read) without it feeling dead.

### 5.6 Rhythm & timing
- Their pace: transformations take 0.6–1.2s and holds 1.5–3s, cut to music.
- **Our explainer pace (calmer, for reading):** transform 1.0–1.6s → headline fades in 0.8s → **hold ≥ 3.5s** (1s per 3 words + 2s) with breathing → headline fades out 0.5s *while* the next transform begins.
- One idea per scene. 4–6 scenes, 28–40s.

### 5.7 Camera
The camera is mostly locked off, with the hero centred. Occasional slow push-ins (scale 1 → 1.15 over the hold) and one "zoom through" per video for a scene change.

---

## 6. Composition
- **Centred hero**, occupying 30–45% of the frame's width. Lots of empty field.
- On 3:4 (1080×1440): put the hero in the **upper-middle** (centre at y ≈ 620) and the headline in the lower third, left-aligned at the 72px margin. Or put the headline at the top and the hero below. Pick one and keep it for the whole video.
- Group 3 elements in a triangle and 8 in a ring. Grids are odd × odd so a centre cell exists.

---

## 7. Do / Don't

| Do | Don't |
|---|---|
| Morph one shape into the next | Hard cuts, wipes, slide-ins from off-screen |
| Use one centred hero on an empty field | Busy compositions, many things moving at once |
| Use gradient spheres with a soft aura and grain | Flat clip-art fills, drop shadows, neon outlines |
| Use staggered waves through arrays | Everything moving in lock-step |
| Draw paths only while something travels on them | Static lines, dividers, decorative dashes |
| Keep breathing motion during holds | A frozen frame for 4 seconds |
| Fade text in after the motion settles | Text flying, bouncing, or typing on |
| Overshoot only small dots and tiles (≤8%) | Bouncy, cartoony squash on everything |

---

## 8. CSS recipes (for `skills/animated-video`)

The renderer seeks CSS animations frame by frame, so all of this is deterministic. `../kits/folk-motion.css` ships these as ready classes and keyframes.

```css
/* Ease tokens */
--ease-move:  cubic-bezier(.65, 0, .35, 1);
--ease-expo:  cubic-bezier(.87, 0, .13, 1);
--ease-pop:   cubic-bezier(.34, 1.56, .64, 1);
--ease-text:  cubic-bezier(.22, 1, .36, 1);

/* Gradient sphere + aura */
.sphere { border-radius: 50%; background: radial-gradient(circle at 35% 30%, #CFF7C4 0%, #8AE679 35%, #22512C 100%); }
.aura   { border-radius: 50%; background: #8AE679; filter: blur(90px); opacity: .45; }

/* Staggered array: put --i on each child */
.wave > * { animation: of-pop .7s var(--ease-pop) both; animation-delay: calc(var(--t0) + var(--i) * 60ms); }

/* Orbit: rotate a wrapper; put the dot at the wrapper's edge */
.orbit { animation: of-spin 12s linear infinite; }

/* Path draws ahead of the travelling dot (dot uses offset-path with the same d) */
.path { stroke-dasharray: 1; stroke-dashoffset: 1; animation: of-draw 1.4s var(--ease-move) both; }  /* pathLength="1" on the <path> */
.rider { offset-path: path('M…'); animation: of-ride 1.4s var(--ease-move) both; }

/* Ring → ribbon: animate the dasharray of a circle so it "opens" */
/* Circle → ring: animate stroke-width down while fill opacity goes to 0 */
/* Stage colour change: animate background-color on .canvas with --ease-move over 1.2s */
```

Grain: one absolutely positioned layer with an SVG `feTurbulence` noise as a data-URI background, `mix-blend-mode: soft-light`, and opacity 0.08. It is static, which is fine.

---

## 9. Blending with Oregon Symphony (our house video style)

The user's direction: **Ordinary Folk is the animation style; Oregon Symphony is the influence.** So:

| From Ordinary Folk | From Oregon Symphony |
|---|---|
| Motion grammar (§5): transform-don't-cut, easing, stagger, orbits, breathing holds | **Stage**: ink `#0D0D0D` (the dark stage), with a light `#E2E6E5` Praxis stage allowed for one "insight" scene |
| Shape language: dot, sphere, ring, tile, ribbon | **Palette**: spheres and dots in `--green #8AE679`, `--forest #193D21`, `--butter #FFF38A`, `--peach #FCDAAC`, `--slate #2F515A`, `--wine #530B21` (butter = unsure, wine = blocked) |
| Gradient fills + aura + grain | **Headline type**: Newsreader Light, 84–96px, white, with one green italic phrase |
| Text beside the object, sparse | Calm, premium restraint, with green covering ≤10% of the frame |

Explainer translation for Jev, for example:
- *A decision* = a dot. *Choices* = 3–5 small spheres in a row. *Jev picking* = all choice-dots pulse **at once** and one swells green (parallel), vs. an LLM's dots appearing **one by one** along a path (word by word).
- *Confidence* = the aura's size and brightness around the chosen sphere.
- *Routing* = a dot travelling a path that forks; the fork lights the chosen branch.
- *Unsure* = the sphere turns butter and a peach "person" sphere approaches it.

---

## 10. Checklist
- [ ] Every scene transition is a transformation (name the hand-off shape)
- [ ] One hero per scene, centred, ≥40% empty field
- [ ] Gradient + aura + grain on hero shapes; no flat clip-art
- [ ] Arrays staggered; overshoot only on small elements
- [ ] Holds ≥3.5s with breathing motion; text readable on a phone (headline ≥84px)
- [ ] House rules: no metadata, numbering, progress bars, dividers, slashes, decorative marks, or kicker above the headline
