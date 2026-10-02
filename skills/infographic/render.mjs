#!/usr/bin/env node
// Render HTML infographics to PNG with headless Chrome.
//
//   node skills/infographic/render.mjs <file.html | dir> [...more] [--out <dir>] [--scale 1|2]
//
// Each HTML file must contain one element with class "canvas"; that element
// is screenshotted at its own size. PNGs are written next to the source
// (or into --out) with the same base name.

import { chromium } from "playwright";
import { readdirSync, statSync, mkdirSync } from "node:fs";
import { resolve, join, basename, dirname, extname } from "node:path";
import { pathToFileURL } from "node:url";
import { fitCheck, report } from "../lib/fit-check.mjs";

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(name);
  if (i === -1) return fallback;
  const v = args[i + 1];
  args.splice(i, 2);
  return v;
};
const outDir = opt("--out", null);
const scale = Number(opt("--scale", "1"));

const files = args.flatMap((p) => {
  const abs = resolve(p);
  return statSync(abs).isDirectory()
    ? readdirSync(abs).filter((f) => extname(f) === ".html").sort().map((f) => join(abs, f))
    : [abs];
});
if (!files.length) {
  console.error("usage: render.mjs <file.html | dir> [--out dir] [--scale 2]");
  process.exit(1);
}

const browser = await chromium.launch({ channel: "chrome" }).catch(() => chromium.launch());
const page = await browser.newPage({ viewport: { width: 1200, height: 1600 }, deviceScaleFactor: scale });

let failures = 0;
for (const file of files) {
  await page.goto(pathToFileURL(file).href, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const canvas = page.locator(".canvas").first();
  const dest = join(outDir ? resolve(outDir) : dirname(file), basename(file, ".html") + ".png");
  mkdirSync(dirname(dest), { recursive: true });
  await canvas.screenshot({ path: dest, animations: "disabled" });
  // Fit check: every element must sit inside the format's borders (see skills/lib/fit-check.mjs).
  if (!report(await page.evaluate(fitCheck), dest)) failures++;
}
await browser.close();
if (failures) {
  console.log(`\n${failures} file(s) do not fit their format. Fix them before shipping.`);
  process.exit(1);
}
