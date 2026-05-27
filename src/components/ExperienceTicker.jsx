import { useEffect, useRef } from "react";
import { clients } from "../data";

const AUTO_SPEED = 0.6;

export default function ExperienceTicker({ theme = "light" }) {
  const scrollerRef = useRef(null);
  const stateRef = useRef({
    interacting: false,
    dragging: false,
    dragStartX: 0,
    dragStartScroll: 0,
    halfWidth: 0,
  });

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const state = stateRef.current;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const measure = () => {
      state.halfWidth = el.scrollWidth / 2;
    };

    const loopScroll = () => {
      if (state.halfWidth > 0 && el.scrollLeft >= state.halfWidth - 1) {
        el.scrollLeft = 0;
      }
    };

    let rafId = 0;
    const tick = () => {
      if (!reducedMotion && !state.interacting && state.halfWidth > 0) {
        el.scrollLeft += AUTO_SPEED;
        loopScroll();
      }
      rafId = requestAnimationFrame(tick);
    };

    const onWheel = (e) => {
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (delta === 0) return;

      e.preventDefault();
      state.interacting = true;
      el.scrollLeft += delta;
      loopScroll();
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
      state.dragStartScroll = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
      el.classList.add("is-grabbing");
    };

    const onPointerMove = (e) => {
      if (!state.dragging) return;
      const dx = e.clientX - state.dragStartX;
      el.scrollLeft = state.dragStartScroll - dx;
      loopScroll();
    };

    const onPointerUp = (e) => {
      if (!state.dragging) return;
      state.dragging = false;
      el.releasePointerCapture(e.pointerId);
      el.classList.remove("is-grabbing");
      endInteractSoon();
    };

    const onScroll = () => {
      if (!state.dragging) {
        state.interacting = true;
        loopScroll();
        endInteractSoon();
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("pointerdown", onPointerDown);
    el.addEventListener("pointermove", onPointerMove);
    el.addEventListener("pointerup", onPointerUp);
    el.addEventListener("pointercancel", onPointerUp);
    el.addEventListener("scroll", onScroll, { passive: true });

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("pointermove", onPointerMove);
      el.removeEventListener("pointerup", onPointerUp);
      el.removeEventListener("pointercancel", onPointerUp);
      el.removeEventListener("scroll", onScroll);
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
      <p className="partners-label">Organisations I&apos;ve worked with</p>
      <div
        ref={scrollerRef}
        className="ticker"
        role="region"
        aria-label="Company logos. Drag or scroll horizontally to explore."
        tabIndex={0}
      >
        <div className="ticker-track">
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
