# AGENTS.md

Instructions for AI agents working in this repo. (Work in progress; more to come.)

## What this repo is
A workspace for creating content **agentically**: infographics, short videos, Instagram Reels, social posts, posters, and more. Agents do the design and production. Humans give direction and taste.

## Where things go
| Path | What | In git? |
|---|---|---|
| `output/` | **All generated content.** One folder per project, e.g. `output/jev-explainers/`. | **No** (gitignored) |
| `output/<project>/brief.md` | The project's brief: audience, verified facts, deliverables. Read it first. | No |
| `design-languages/` | Written style guides studied from reference sites, plus CSS kits that implement them | Yes |
| `skills/` | Reusable how-tos and tools for each content type | Yes |

**Always write generated files (HTML sources, PNGs, MP4s, stills, scratch) inside `output/<project>/`.** Never put generated content anywhere else in the repo.

Suggested project layout:
```
output/<project>/
  brief.md
  infographics/src/NN-slug.html   → infographics/NN-slug.png
  videos/src/slug.html            → videos/slug.mp4
  videos/stills/                  (frame checks)
```

## How to make things
1. Read `output/<project>/brief.md`. If it does not exist, write one with the human first.
2. Pick a design language from `design-languages/`. **Default: `oregon-symphony.md`** (the house favourite).
3. Follow the matching skill:
   - Static graphics (infographics, posts, posters) → [`skills/infographic/SKILL.md`](skills/infographic/SKILL.md)
   - Animated video (reels, LinkedIn video) → [`skills/animated-video/SKILL.md`](skills/animated-video/SKILL.md)
4. **Look at your output** (open the PNG or still frames) and iterate. Never ship a render you have not looked at.

## Content rules
- Use only facts you have verified; put them in the brief with their sources. Do not invent numbers.
- Default audience is beginners: grade-5 vocabulary, short sentences, concrete examples over theory.
- Social formats: LinkedIn/IG portrait still = **1080×1350** (4:5); portrait video = **1080×1440** (3:4), or 1080×1920 (9:16) for Reels/Shorts.

## Setup
```bash
npm install          # playwright; uses your local Google Chrome
brew install ffmpeg  # for video
```
