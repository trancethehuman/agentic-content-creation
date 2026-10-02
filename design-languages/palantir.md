# Design language: Palantir (Fictive Kin) ★ primary influence

> Source: [Fictive Kin: Palantir](https://fictivekin.com/work/palantir), studied twice (Oct 2026), including at 1440px desktop width.
> Role in this repo: **the primary influence on the house style** ([`house-style.md`](house-style.md)).

## 1. The brief, and why it looks the way it does
Palantir works for intelligence agencies, governments, Airbus, Ferrari, IBM, and 3M, and *"had trouble describing themselves, even internally, so we decided not to."* Instead of defining the company, the site **defines the problems they solve**. The cornerstone principle:

> **Show. Don't tell.** A transparent system that showcases what Palantir does, presenting deep information in a clear, yet digestible way.

The results Fictive Kin report: +123% time on page, +94% mobile traffic, and +1000% high-quality leads. Restraint sells.

**Lesson for us:** never explain Jev in the abstract. Show the system working on a real example.

## 2. Feeling
**Austere. Instrumented. Monochrome. Cinematic. Confident.** Fictive Kin call it *"futurism without the cliché"*: inspired by sci-fi and real intelligence and military interfaces, with no neon, circuit boards, or glowing brains.

## 3. Colour
- **Strictly monochrome.** The light sections use a white page (`#FFFFFF`), near-black type (`#111`), mid-grey body copy (≈ `#7A7A7A`), and light-grey panels (≈ `#E6E6E6`). The dark sections use charcoal (`#1E1F21`) with white type.
- Photography is **black and white only**: high-contrast industrial subjects (wind farms, microscopes, aircraft, factories).
- There is one flat **orange tile** (Swiss Re) in the whole site. Accent colour is so rare it is effectively absent. **We drop it** (house rule: monochrome).

## 4. Typography (measured)
- A **neo-grotesk** used at large sizes in **light/regular weight**: "Operating system for the modern enterprise.", "Latest on Partnerships", "Contact Us". Tight, calm, never bold.
- Grey body copy in a narrow column beside the headline: "Our open data fusion platforms allow customers to integrate commercial data sources…".
- Tiny uppercase micro-labels above inputs ("TRY OUR PLATFORMS", "FOR MORE INFORMATION").
- The Fictive Kin page itself: section heads 32px Regular, body 16/22px, title 48px Light. **Ratio ≈ 3 : 2 : 1.**
- Our stand-in: **Hanken Grotesk** 300/400, with **DM Mono** for labels and data.

## 5. Layout
- **The light "whitepaper" section** (the best reference for our stills): a huge headline at the left ("Latest on Partnerships", "Whitepaper"), grey body copy in the right column, a black-and-white photo block, and lots of empty white.
- **List rows**: large regular text ("Scuderia Ferrari", "3M", "Doosan", "Airbus") with a `→` at the far right. (They separate rows with hairlines. **We separate with space instead**, per the house rules.)
- **Quadrant navigation (the HUD)**: instead of a nav bar, controls sit in the four corners of the screen as small outlined square buttons (menu, search, globe, theme toggle). The middle stays empty for content.
- **Tile explorer** ("Artifacts of insight"): a grid of black-and-white photo tiles. You zoom into one and it comes into focus while the rest fade. The white-paper visual vernacular is "elevated" into the site.

## 6. Interaction & motion
- The UI behaves like an **instrument**: you scrub a slider to zoom, tiles focus, panels slide in from a quadrant, and a light/dark toggle flips the whole HUD.
- The video passes slowly over black-and-white footage, and the UI animates with calm, precise easing.
- **For our videos:** make diagrams look *operable*. A cursor clicks, a tile zooms into focus, a row highlights, a toggle flips. See `house-style.md` §8.

## 7. What we take, what we leave
| Take | Leave (house rules) |
|---|---|
| Monochrome palette, white "whitepaper" sections | The orange accent tile |
| Light grotesk at large sizes, grey body copy | Hairline rules under rows and labels |
| Show-don't-tell: real systems, real examples | ↳ arrows, ⊕ crosshairs, corner brackets |
| Huge negative space, asymmetric headline and body | Numbered section labels ("04 /", "05 /") |
| Interface-as-illustration, operable-looking UI | "/ END MESSAGE" and other decorative system text |
| Rows with an `arrow-right` icon (Lucide), separated by space | Black-and-white stock photography (we use diagrams) |
