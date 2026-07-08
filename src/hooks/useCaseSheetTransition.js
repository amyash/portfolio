import { useCallback, useEffect, useRef, useState } from "react";

export const CASE_SHEET_DURATION_MS = 640;
const SHEET = { top: 0.03, left: 0.03, width: 0.94, height: 0.94 };
const MOBILE_BREAKPOINT = "(max-width: 900px)";

export function getSheetRect() {
  const mobile = window.matchMedia(MOBILE_BREAKPOINT).matches;
  if (mobile) {
    return { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
  }
  return {
    left: window.innerWidth * SHEET.left,
    top: window.innerHeight * SHEET.top,
    width: window.innerWidth * SHEET.width,
    height: window.innerHeight * SHEET.height,
  };
}

export function rectToTransform(rect) {
  const sheet = getSheetRect();
  const sx = rect.width / sheet.width;
  const sy = rect.height / sheet.height;
  const tx = rect.left + rect.width / 2 - (sheet.left + sheet.width / 2);
  const ty = rect.top + rect.height / 2 - (sheet.top + sheet.height / 2);
  return { tx, ty, sx, sy };
}

const OPEN_TRANSFORM = { tx: 0, ty: 0, sx: 1, sy: 1 };

export function useCaseSheetTransition(caseCardRefs) {
  const [activeCaseStudyId, setActiveCaseStudyId] = useState(null);
  const [phase, setPhase] = useState("idle");
  const [transform, setTransform] = useState(OPEN_TRANSFORM);
  const [contentReady, setContentReady] = useState(false);
  const [motionLock, setMotionLock] = useState(false);
  const closeTimerRef = useRef(null);
  const readyTimerRef = useRef(null);

  const clearTimers = useCallback(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (readyTimerRef.current) {
      window.clearTimeout(readyTimerRef.current);
      readyTimerRef.current = null;
    }
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const openCaseSheet = useCallback(
    (caseId) => {
      clearTimers();
      const cardEl = caseCardRefs.current[caseId];
      const rect = cardEl?.getBoundingClientRect();
      const from = rect ? rectToTransform(rect) : OPEN_TRANSFORM;

      setContentReady(false);
      setActiveCaseStudyId(caseId);
      setMotionLock(true);
      setTransform(from);
      setPhase("opening");

      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          setMotionLock(false);
          setTransform(OPEN_TRANSFORM);
          setPhase("open");
        });
      });

      readyTimerRef.current = window.setTimeout(() => {
        setContentReady(true);
      }, CASE_SHEET_DURATION_MS * 0.42);
    },
    [caseCardRefs, clearTimers],
  );

  const closeCaseSheet = useCallback(() => {
    if (!activeCaseStudyId || phase === "closing" || phase === "idle") return;

    clearTimers();
    setContentReady(false);
    setMotionLock(false);

    const cardEl = caseCardRefs.current[activeCaseStudyId];
    const rect = cardEl?.getBoundingClientRect();
    if (rect) {
      setTransform(rectToTransform(rect));
    }

    setPhase("closing");

    closeTimerRef.current = window.setTimeout(() => {
      setActiveCaseStudyId(null);
      setPhase("idle");
      setTransform(OPEN_TRANSFORM);
    }, CASE_SHEET_DURATION_MS);
  }, [activeCaseStudyId, caseCardRefs, clearTimers, phase]);

  const isActive = activeCaseStudyId !== null;
  const isExpanded = phase === "open" || phase === "opening";
  const isClosing = phase === "closing";
  const backdropVisible = isExpanded || isClosing;

  return {
    activeCaseStudyId,
    phase,
    transform,
    contentReady,
    motionLock,
    isActive,
    isExpanded,
    isClosing,
    backdropVisible,
    openCaseSheet,
    closeCaseSheet,
  };
}
