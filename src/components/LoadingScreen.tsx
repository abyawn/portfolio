import React, { useCallback, useEffect, useRef, useState } from "react";
import '../assets/styles/LoadingScreen.scss';

interface Props {
  /** Called once the screen has finished fading out and can be unmounted. */
  onFinish: () => void;
  /**
   * Total time the bar takes to fill. The segments below are scaled to match,
   * so this stays a single dial.
   */
  duration?: number;
}

const FADE_MS = 400;

/**
 * The bar advances in two quick chunks with a short stall between them. A
 * perfectly smooth sweep reads as decoration; a small stall reads as loading.
 * Deliberately brief - the splash should register, not detain.
 */
const SEGMENTS = [
  { to: 68, run: 460, hold: 220 },
  { to: 100, run: 340, hold: 0 },
];

const BASE_TOTAL = SEGMENTS.reduce((sum, s) => sum + s.run + s.hold, 0);

/** How long the full bar sits before the screen dismisses itself. */
const REST_BEFORE_EXIT = 240;

/** Progress at a given moment, following the segment timeline. */
function progressAt(elapsed: number): number {
  let t = elapsed;
  let from = 0;

  for (const seg of SEGMENTS) {
    if (t < seg.run) {
      const k = t / seg.run;
      const eased = 1 - Math.pow(1 - k, 2);
      return from + (seg.to - from) * eased;
    }
    t -= seg.run;
    if (t < seg.hold) return seg.to;
    t -= seg.hold;
    from = seg.to;
  }
  return 100;
}

const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function LoadingScreen({ onFinish, duration = BASE_TOTAL }: Props) {
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const reduced = useRef(prefersReducedMotion()).current;
  // Guards against a click and a keypress both firing the exit.
  const entered = useRef(false);

  const enter = useCallback(() => {
    if (entered.current) return;
    entered.current = true;
    setProgress(100);
    setLeaving(true);
    window.setTimeout(onFinish, reduced ? 0 : FADE_MS);
  }, [onFinish, reduced]);

  // Anyone who asked for less motion goes straight through.
  useEffect(() => {
    if (reduced) enter();
  }, [reduced, enter]);

  // Fill the bar, then dismiss on its own after a beat. No manual gate.
  useEffect(() => {
    if (reduced) return;
    const start = performance.now();
    const scale = duration / BASE_TOTAL;
    let frame = 0;
    let exitTimer = 0;

    const tick = (now: number) => {
      const elapsed = (now - start) / scale;
      setProgress(progressAt(elapsed));

      if (elapsed < BASE_TOTAL) {
        frame = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        setReady(true);
        exitTimer = window.setTimeout(enter, REST_BEFORE_EXIT);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(exitTimer);
    };
  }, [duration, reduced, enter]);

  // Click or key skips ahead at any point.
  useEffect(() => {
    if (reduced) return;
    const go = () => enter();
    window.addEventListener("keydown", go);
    window.addEventListener("mousedown", go);
    window.addEventListener("touchstart", go);
    return () => {
      window.removeEventListener("keydown", go);
      window.removeEventListener("mousedown", go);
      window.removeEventListener("touchstart", go);
    };
  }, [reduced, enter]);

  // Hold the page still underneath so the splash can't be scrolled away from.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  if (reduced) return null;

  const shown = Math.round(progress);

  return (
    <div className={`loading-screen${leaving ? " is-leaving" : ""}`}>
      <div className="loading-inner">
        <h1 className="loading-name">ABYAN PATNAM</h1>

        <div className="loading-track">
          <div className="loading-fill" style={{ width: `${progress}%` }} />
        </div>

        <p className="loading-status" role="status" aria-live="polite">
          <span className="loading-label">{ready ? "READY" : "LOADING"}</span>
          <span className="loading-percent">{shown}%</span>
        </p>
      </div>
    </div>
  );
}
