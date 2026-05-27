import { useEffect, useRef } from "react";
import "./AsciiCursor.css";

const PORTRAIT_SRC = "/amy-portrait.png?v=2025-eyes";
const CELL = 7;
const SPOTLIGHT_RADIUS = 240;
const SPOTLIGHT_FADE = 1.25; // lower = softer, wider fade at edges
const LERP = 0.12;
const WHITE_SKIP = 0.98;
const VARIANT_STEP = 72; // px of travel before next ASCII style

// Four distinct ASCII palettes for the same portrait
const CHARSETS = [
  " .:-=+*#%@", // classic
  " .'`^\",:;!l|iI][{}", // fine detail
  " .oO0@#", // soft organic
  " ..::==++***###@@@", // bold blocks
];

function lumToChar(lum, charset) {
  const idx = Math.min(
    charset.length - 1,
    Math.floor(lum * (charset.length - 1))
  );
  return charset[idx];
}

function buildGrid(img, width, height) {
  const cols = Math.floor(width / CELL);
  const rows = Math.floor(height / CELL);
  if (cols < 1 || rows < 1) return { cells: [], cols: 0, rows: 0 };

  const sample = document.createElement("canvas");
  sample.width = cols;
  sample.height = rows;
  const sctx = sample.getContext("2d", { willReadFrequently: true });

  const imgAspect = img.width / img.height;
  const gridAspect = cols / rows;
  let sw;
  let sh;
  let sx;
  let sy;

  if (imgAspect > gridAspect) {
    sh = img.height;
    sw = sh * gridAspect;
    sx = (img.width - sw) / 2;
    sy = 0;
  } else {
    sw = img.width;
    sh = sw / gridAspect;
    sx = 0;
    sy = (img.height - sh) / 2;
  }

  sctx.drawImage(img, sx, sy, sw, sh, 0, 0, cols, rows);
  const data = sctx.getImageData(0, 0, cols, rows).data;

  const cells = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const i = (row * cols + col) * 4;
      const lum = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255;
      if (lum > WHITE_SKIP) continue;

      // Map light → dense chars so white-on-black reads correctly (not inverted).
      const tone = lum;
      cells.push({
        px: col * CELL + CELL / 2,
        py: row * CELL + CELL / 2,
        chars: CHARSETS.map((charset) => lumToChar(tone, charset)),
      });
    }
  }

  return { cells, cols, rows };
}

export default function AsciiCursor({ className = "" }) {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const state = {
      w: 0,
      h: 0,
      targetX: 0,
      targetY: 0,
      x: 0,
      y: 0,
      prevX: 0,
      prevY: 0,
      travel: 0,
      active: false,
      cells: [],
      ready: false,
    };

    const rect = { left: 0, top: 0 };
    const img = new Image();
    img.src = PORTRAIT_SRC;

    const syncRect = () => {
      const r = canvas.getBoundingClientRect();
      rect.left = r.left;
      rect.top = r.top;
    };

    const rebuildGrid = () => {
      if (!img.complete || !img.naturalWidth) return;
      const built = buildGrid(img, state.w, state.h);
      state.cells = built.cells;
      state.ready = built.cells.length > 0;
    };

    const setSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const { width, height } = wrap.getBoundingClientRect();
      if (width < 1 || height < 1) return;

      state.w = width;
      state.h = height;
      syncRect();

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cx = width / 2;
      const cy = height / 2;
      if (!state.active) {
        state.x = cx;
        state.y = cy;
        state.targetX = cx;
        state.targetY = cy;
        state.prevX = cx;
        state.prevY = cy;
      }

      rebuildGrid();
    };

    img.onload = () => {
      setSize();
    };

    const pointFromEvent = (e) => {
      state.targetX = e.clientX - rect.left;
      state.targetY = e.clientY - rect.top;
      state.active = true;
    };

    const onPointerMove = (e) => pointFromEvent(e);
    const onPointerEnter = (e) => {
      syncRect();
      state.travel = 0;
      pointFromEvent(e);
    };
    const onPointerLeave = () => {
      state.active = false;
      state.travel = 0;
    };

    let rafId = 0;
    const r2 = SPOTLIGHT_RADIUS * SPOTLIGHT_RADIUS;

    const draw = () => {
      rafId = requestAnimationFrame(draw);

      const { w: width, h: height, cells } = state;
      if (width < 1 || height < 1) {
        setSize();
        return;
      }

      const prevX = state.x;
      const prevY = state.y;
      state.x += (state.targetX - state.x) * LERP;
      state.y += (state.targetY - state.y) * LERP;

      if (state.active) {
        state.travel += Math.hypot(state.x - prevX, state.y - prevY);
      } else {
        const cx = width / 2;
        const cy = height / 2;
        state.targetX += (cx - state.targetX) * 0.04;
        state.targetY += (cy - state.targetY) * 0.04;
      }

      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, width, height);

      if (!state.ready || !state.active) return;

      const variant =
        Math.floor(state.travel / VARIANT_STEP) % CHARSETS.length;

      const sx = state.x;
      const sy = state.y;
      const pad = SPOTLIGHT_RADIUS;
      const minX = sx - pad;
      const maxX = sx + pad;
      const minY = sy - pad;
      const maxY = sy + pad;

      ctx.font = `${CELL}px ui-monospace, Menlo, Consolas, monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#ffffff";

      for (let i = 0; i < cells.length; i++) {
        const { px, py, chars } = cells[i];
        if (px < minX || px > maxX || py < minY || py > maxY) continue;

        const dx = px - sx;
        const dy = py - sy;
        const dist2 = dx * dx + dy * dy;
        if (dist2 > r2) continue;

        const dist = Math.sqrt(dist2);
        const t = dist / SPOTLIGHT_RADIUS;
        const alpha = Math.pow(Math.max(0, 1 - t), SPOTLIGHT_FADE);
        if (alpha < 0.03) continue;

        ctx.globalAlpha = alpha;
        ctx.fillText(chars[variant], px, py);
      }

      ctx.globalAlpha = 1;
    };

    setSize();
    const ro = new ResizeObserver(setSize);
    ro.observe(wrap);

    canvas.addEventListener("pointermove", onPointerMove, { passive: true });
    canvas.addEventListener("pointerenter", onPointerEnter);
    canvas.addEventListener("pointerleave", onPointerLeave);

    rafId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerenter", onPointerEnter);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`ascii-cursor ${className}`.trim()}
      aria-hidden
    >
      <canvas ref={canvasRef} />
      <p className="ascii-cursor-hint">Move cursor to explore</p>
    </div>
  );
}
