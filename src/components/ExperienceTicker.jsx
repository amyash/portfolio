import { useEffect, useRef } from "react";
import { clients } from "../data";

const SPEED_PX_PER_SEC = 42;

function wrapOffset(offset, halfWidth) {
  if (halfWidth <= 0) return 0;
  let next = offset % halfWidth;
  if (next < 0) next += halfWidth;
  return next;
}

export default function ExperienceTicker({ theme = "light" }) {
  const tickerRef = useRef(null);
  const trackRef = useRef(null);
  const stateRef = useRef({
    interacting: false,
    dragging: false,
    dragStartX: 0,
    dragStartOffset: 0,
    halfWidth: 0,
    offset: 0,
    lastTime: 0,
  });

  useEffect(() => {
    const ticker = tickerRef.current;
    const track = trackRef.current;
    if (!ticker || !track) return;

    const state = stateRef.current;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const applyTransform = () => {
      track.style.transform = `translate3d(${-state.offset}px, 0, 0)`;
    };

    const measure = () => {
      state.halfWidth = track.scrollWidth / 2;
      state.offset = wrapOffset(state.offset, state.halfWidth);
      applyTransform();
    };

    const setOffset = (next) => {
      state.offset = wrapOffset(next, state.halfWidth);
      applyTransform();
    };

    let rafId = 0;
    const tick = (now) => {
      if (!state.lastTime) state.lastTime = now;

      if (!reducedMotion && !state.interacting && state.halfWidth > 0) {
        const dt = Math.min((now - state.lastTime) / 1000, 0.05);
        setOffset(state.offset + SPEED_PX_PER_SEC * dt);
      }

      state.lastTime = now;
      rafId = requestAnimationFrame(tick);
    };

    const onWheel = (e) => {
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (delta === 0) return;

      e.preventDefault();
      state.interacting = true;
      setOffset(state.offset + delta);
      endInteractSoon();
    };

    const endInteractSoon = () => {
      window.setTimeout(() => {
        if (!state.dragging) state.interacting = false;
      }, 1200);
    };

    const onPointerDown = (e) => {
      if (e.button !== 0) return;
      state.dragging = true;
      state.interacting = true;
      state.dragStartX = e.clientX;
      state.dragStartOffset = state.offset;
      ticker.setPointerCapture(e.pointerId);
      ticker.classList.add("is-grabbing");
    };

    const onPointerMove = (e) => {
      if (!state.dragging) return;
      const dx = e.clientX - state.dragStartX;
      setOffset(state.dragStartOffset - dx);
    };

    const onPointerUp = (e) => {
      if (!state.dragging) return;
      state.dragging = false;
      ticker.releasePointerCapture(e.pointerId);
      ticker.classList.remove("is-grabbing");
      endInteractSoon();
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);

    ticker.addEventListener("wheel", onWheel, { passive: false });
    ticker.addEventListener("pointerdown", onPointerDown);
    ticker.addEventListener("pointermove", onPointerMove);
    ticker.addEventListener("pointerup", onPointerUp);
    ticker.addEventListener("pointercancel", onPointerUp);

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      track.style.transform = "";
      ticker.removeEventListener("wheel", onWheel);
      ticker.removeEventListener("pointerdown", onPointerDown);
      ticker.removeEventListener("pointermove", onPointerMove);
      ticker.removeEventListener("pointerup", onPointerUp);
      ticker.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return (
    <section
      className={`partners ${
        theme === "dark"
          ? "partners--dark"
          : theme === "orange"
            ? "partners--orange"
            : ""
      }`}
      aria-label="Organisations I've worked with"
    >
      <p className="partners-label">
        <span className="ai-chapter-num">01</span>Organisations I&apos;ve worked
        with
      </p>
      <div
        ref={tickerRef}
        className="ticker"
        role="region"
        aria-label="Company logos. Drag or scroll horizontally to explore."
        tabIndex={0}
      >
        <div ref={trackRef} className="ticker-track">
          {[0, 1].map((set) => (
            <ul
              key={set}
              className="ticker-list"
              aria-hidden={set === 1 ? true : undefined}
            >
              {clients.map((client) => (
                <li key={`${set}-${client.name}`}>
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="ticker-logo"
                    style={{ "--logo-scale": client.scale ?? 1 }}
                    loading="lazy"
                    height={52}
                    draggable={false}
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
