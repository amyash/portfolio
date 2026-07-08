import { useCallback, useEffect, useRef, useState } from "react";
import { caseStudies, getCaseStudiesForGroup } from "../data";

const MOBILE_MQ = "(max-width: 899px)";

function getDefaultPeakIndex() {
  return 0;
}

function isMobileViewport() {
  return window.matchMedia(MOBILE_MQ).matches;
}

function scrollToStart(track, behavior = "auto") {
  if (behavior === "smooth") {
    track.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    track.scrollLeft = 0;
  }
}

function scrollToPeakIndex(track, index, behavior = "auto") {
  const card = track.children[index];
  if (!card) return;

  const style = getComputedStyle(track);
  const padStart = Number.parseFloat(style.paddingLeft) || 0;
  const viewport = track.clientWidth;
  const maxScroll = Math.max(0, track.scrollWidth - viewport);
  const target = Math.max(0, Math.min(card.offsetLeft - padStart, maxScroll));

  if (behavior === "smooth") {
    track.scrollTo({ left: target, behavior: "smooth" });
  } else {
    track.scrollLeft = target;
  }
}

export default function CaseStudyCarousel({
  group,
  activeCaseStudyId,
  caseSheetActive,
  caseSheetExpanded,
  caseSheetClosing,
  caseCardRefs,
  onOpen,
}) {
  const trackRef = useRef(null);
  const scrollIdleRef = useRef(null);
  const didInitialScrollRef = useRef(false);
  const items = getCaseStudiesForGroup(group);
  const [peakIndex, setPeakIndex] = useState(getDefaultPeakIndex);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? isMobileViewport() : false,
  );

  const expandedIndex = isMobile ? peakIndex : hoveredIndex;

  const scrollToIndex = useCallback((index, behavior = "auto") => {
    const track = trackRef.current;
    if (!track) return;
    scrollToPeakIndex(track, index, behavior);
  }, []);

  const updatePeakFromScroll = useCallback(() => {
    if (!isMobileViewport()) return;

    const track = trackRef.current;
    if (!track || items.length === 0) return;

    const padStart = Number.parseFloat(getComputedStyle(track).paddingLeft) || 0;
    const anchor = track.scrollLeft + padStart;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    Array.from(track.children).forEach((child, index) => {
      const distance = Math.abs(child.offsetLeft - anchor);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setPeakIndex(closestIndex);
  }, [items.length]);

  useEffect(() => {
    didInitialScrollRef.current = false;
    setHoveredIndex(null);
    setPeakIndex(getDefaultPeakIndex());
  }, [group.id, items.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || items.length === 0) return undefined;

    const markScrolling = () => {
      setIsScrolling(true);
      window.clearTimeout(scrollIdleRef.current);
      scrollIdleRef.current = window.setTimeout(() => {
        setIsScrolling(false);
      }, 120);
    };

    const applyLayout = () => {
      const mobile = isMobileViewport();
      setIsMobile(mobile);
      setPeakIndex(getDefaultPeakIndex());
      setHoveredIndex(null);

      window.requestAnimationFrame(() => {
        if (!didInitialScrollRef.current) {
          scrollToStart(track);
          didInitialScrollRef.current = true;
        }
        if (mobile) updatePeakFromScroll();
      });
    };

    applyLayout();

    track.addEventListener("scroll", markScrolling, { passive: true });
    track.addEventListener("scroll", updatePeakFromScroll, { passive: true });
    const mq = window.matchMedia(MOBILE_MQ);
    const onBreakpointChange = () => {
      didInitialScrollRef.current = false;
      applyLayout();
    };
    mq.addEventListener("change", onBreakpointChange);
    window.addEventListener("resize", updatePeakFromScroll);

    return () => {
      track.removeEventListener("scroll", markScrolling);
      track.removeEventListener("scroll", updatePeakFromScroll);
      mq.removeEventListener("change", onBreakpointChange);
      window.removeEventListener("resize", updatePeakFromScroll);
      window.clearTimeout(scrollIdleRef.current);
    };
  }, [group.id, items, scrollToIndex, updatePeakFromScroll]);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const current = isMobile ? peakIndex : hoveredIndex ?? 0;
    const nextIndex = Math.min(items.length - 1, Math.max(0, current + direction));
    scrollToIndex(nextIndex, "smooth");
    if (isMobile) setPeakIndex(nextIndex);
    else setHoveredIndex(nextIndex);
  };

  if (items.length === 0) return null;

  return (
    <div
      className={`case-carousel ${isMobile ? "case-carousel--mobile" : "case-carousel--desktop"} ${
        caseSheetActive ? "case-carousel--has-active" : ""
      } ${caseSheetExpanded ? "case-carousel--hide-source" : ""} ${
        caseSheetClosing ? "case-carousel--closing" : ""
      } ${hoveredIndex !== null ? "case-carousel--is-hovering" : ""} ${
        isScrolling ? "case-carousel--is-scrolling" : ""
      }`}
    >
      <div className="case-carousel-controls" aria-hidden={items.length < 2}>
        <button
          type="button"
          className="case-carousel-btn"
          onClick={() => scrollByCard(-1)}
          aria-label={`Previous ${group.title} case study`}
          disabled={items.length < 2}
        >
          ←
        </button>
        <button
          type="button"
          className="case-carousel-btn"
          onClick={() => scrollByCard(1)}
          aria-label={`Next ${group.title} case study`}
          disabled={items.length < 2}
        >
          →
        </button>
      </div>

      <div
        className="case-carousel-viewport"
        ref={trackRef}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {items.map((cs, index) => {
          const isSource = activeCaseStudyId === cs.id;
          const isExpanded = expandedIndex === index && expandedIndex !== null;
          const thumbVariant =
            (caseStudies.findIndex((item) => item.id === cs.id) % 6) + 1;

          return (
            <article
              key={cs.id}
              ref={(node) => {
                caseCardRefs.current[cs.id] = node;
              }}
              className={`case-tile ${isExpanded ? "case-tile--expanded" : ""} ${
                isSource ? "case-tile--source-active" : ""
              }`}
              onMouseEnter={() => {
                if (!isMobileViewport() && !isScrolling) {
                  setHoveredIndex(index);
                }
              }}
              onFocus={() => {
                if (!isMobile) setHoveredIndex(index);
              }}
              onClick={() => onOpen(cs.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onOpen(cs.id);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`Open ${cs.company} case study`}
            >
              <div className="case-thumb-wrap">
                <div
                  className={`case-thumb case-thumb--${thumbVariant}`}
                  data-case-morph="thumb"
                />
              </div>
              <div className="case-tile-body">
                <span className="case-badge">{cs.status}</span>
                <h4 data-case-morph="title">{cs.company}</h4>
                <p className="case-tag">{cs.tagline}</p>
                <p className="case-q">{cs.question}</p>
                <span className="case-open-label">Open case study →</span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
