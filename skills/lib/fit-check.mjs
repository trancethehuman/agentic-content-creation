// Fit check: does every piece of content sit inside the format's borders?
//
// Runs in the page (pass `fitCheck` to page.evaluate). Returns a list of problems:
//   OVERFLOW  content extends past the canvas edge (it will be cut off)
//   MARGIN    content intrudes into the outer half of the canvas margin (too tight)
//   CLIPPED   an element with overflow hidden/clip is hiding part of its content
// Elements (or their ancestors) marked data-bleed="true" are allowed to bleed,
// and decorative full-canvas layers like .grain are ignored.
export function fitCheck() {
  const canvas = document.querySelector(".canvas");
  if (!canvas) return [{ kind: "OVERFLOW", what: "no .canvas element found" }];
  const c = canvas.getBoundingClientRect();
  const cs = getComputedStyle(canvas);
  const pad = {
    top: parseFloat(cs.paddingTop), right: parseFloat(cs.paddingRight),
    bottom: parseFloat(cs.paddingBottom), left: parseFloat(cs.paddingLeft),
  };
  const problems = [];
  const describe = (el) => {
    const t = (el.textContent || "").trim().replace(/\s+/g, " ").slice(0, 50);
    return `<${el.tagName.toLowerCase()}${el.className && typeof el.className === "string" ? "." + el.className.trim().split(/\s+/).join(".") : ""}>${t ? ` "${t}"` : ""}`;
  };
  const visible = (el) => {
    const s = getComputedStyle(el);
    return s.visibility !== "hidden" && s.display !== "none" && parseFloat(s.opacity) > 0.01;
  };
  const skip = (el) => el.closest("[data-bleed='true'], .grain");

  for (const el of canvas.querySelectorAll("*")) {
    if (skip(el) || !visible(el)) continue;
    // Measure text-bearing elements and graphics; skip pure wrappers with no own box.
    const r = el.getBoundingClientRect();
    if (r.width < 1 || r.height < 1) continue;
    const ownText = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
    const isGraphic = /^(svg|img|canvas|video)$/i.test(el.tagName) || el.classList.contains("lucide");
    const hasBox = (() => { const s = getComputedStyle(el); return s.backgroundColor !== "rgba(0, 0, 0, 0)" || parseFloat(s.borderTopWidth) > 0; })();
    if (!ownText && !isGraphic && !hasBox) continue;

    const out = r.left < c.left - 1 || r.top < c.top - 1 || r.right > c.right + 1 || r.bottom > c.bottom + 1;
    if (out) { problems.push({ kind: "OVERFLOW", what: describe(el), px: Math.round(Math.max(c.top - r.top, r.bottom - c.bottom, c.left - r.left, r.right - c.right)) }); continue; }
    const tight = r.top < c.top + pad.top / 2 || r.bottom > c.bottom - pad.bottom / 2 || r.left < c.left + pad.left / 2 || r.right > c.right - pad.right / 2;
    if (tight) problems.push({ kind: "MARGIN", what: describe(el) });

    const s = getComputedStyle(el);
    if (el !== canvas && /hidden|clip/.test(s.overflow + s.overflowX + s.overflowY) && !isGraphic &&
        (el.scrollHeight > el.clientHeight + 2 || el.scrollWidth > el.clientWidth + 2)) {
      problems.push({ kind: "CLIPPED", what: describe(el) });
    }
  }
  if (canvas.scrollHeight > canvas.clientHeight + 1 || canvas.scrollWidth > canvas.clientWidth + 1) {
    problems.push({ kind: "OVERFLOW", what: "canvas content is taller or wider than the canvas" });
  }
  // De-duplicate nested reports of the same text.
  const seen = new Set();
  return problems.filter((p) => { const k = p.kind + p.what; if (seen.has(k)) return false; seen.add(k); return true; });
}

export function report(problems, label) {
  if (!problems.length) { console.log(`✓ ${label}`); return true; }
  const kinds = [...new Set(problems.map((p) => p.kind))].join(", ");
  console.log(`⚠ ${kinds}  ${label}`);
  for (const p of problems.slice(0, 8)) console.log(`    ${p.kind.padEnd(8)} ${p.what}${p.px ? `  (${p.px}px past the edge)` : ""}`);
  if (problems.length > 8) console.log(`    … and ${problems.length - 8} more`);
  return false;
}
