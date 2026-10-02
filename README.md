# Agentic Content Creation

Create content (infographics, videos, Instagram Reels, social posts, graphic-design posters) **with AI agents**.

Agents read a brief, pick a written **design language**, follow a **skill**, render the result, *look at it*, and iterate. Everything is plain HTML/CSS/SVG rendered by headless Chrome, so it is editable, diffable, and reproducible.

```
AGENTS.md            ← start here (agents: read this first)
design-languages/    ← detailed style guides studied from reference sites + CSS kits
  oregon-symphony.md ★ house style
  palantir.md
  modal.md
  kits/symphony.css
skills/              ← one folder per content type
  infographic/       → HTML → PNG (1080×1350)
  animated-video/    → CSS-animated HTML → MP4 (1080×1440)
output/              ← generated content (gitignored)
```

## Quick start
```bash
npm install
node skills/infographic/render.mjs output/<project>/infographics/src --out output/<project>/infographics
node skills/animated-video/render.mjs output/<project>/videos/src/<slug>.html
```
Requires Google Chrome (or `npx playwright install chromium`) and `ffmpeg` for video.

## Using it with an agent
Point Claude Code (or any coding agent) at this repo and ask for content, for example:

> "Make 5 LinkedIn infographics explaining X for beginners, in the Oregon Symphony style."

The agent writes `output/<project>/brief.md`, builds the pieces with the skills, and saves everything to `output/`.

## License
[MIT](LICENSE)
