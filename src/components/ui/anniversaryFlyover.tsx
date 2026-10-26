"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

// Midnight 1 Dec 2026 in Lagos (WAT, UTC+1). After this the celebration disappears on its own.
const CELEBRATION_ENDS = new Date("2026-12-01T00:00:00+01:00");
const DISMISSED_KEY = "memmcol-31-ribbon-dismissed";

const CONFETTI_COLORS = ["#37925E", "#213328", "#F5B82E", "#8FD3A8", "#E4572E"];

function readSession(key: string) {
  try {
    return sessionStorage.getItem(key) === "1";
  } catch {
    return false;
  }
}

function writeSession(key: string) {
  try {
    sessionStorage.setItem(key, "1");
  } catch {
    // Storage blocked (private mode etc.) — the ribbon will simply reappear.
  }
}

function Plane() {
  return (
    <svg
      viewBox="0 0 120 60"
      className="h-20 w-40 md:h-28 md:w-56 shrink-0"
      aria-hidden="true"
    >
      {/* tail */}
      <path d="M8 18 L22 18 L30 30 L10 30 Z" fill="#213328" />
      {/* fuselage */}
      <path
        d="M10 30 C 24 22, 70 20, 96 26 C 106 28, 108 34, 98 37 C 72 42, 26 40, 10 34 Z"
        fill="#37925E"
      />
      {/* windows */}
      <circle cx="80" cy="29" r="3.2" fill="#E8F5EC" />
      <circle cx="70" cy="28.5" r="2.4" fill="#E8F5EC" />
      <circle cx="62" cy="28.5" r="2.4" fill="#E8F5EC" />
      {/* wing */}
      <path d="M44 33 L70 33 L58 50 L46 50 Z" fill="#213328" />
      {/* stripe */}
      <path d="M22 32 C 46 34, 76 34, 100 31" stroke="#F5B82E" strokeWidth="1.6" fill="none" />
      {/* nose + propeller */}
      <circle cx="104" cy="31.5" r="3" fill="#213328" />
      <g className="flyover-prop">
        <rect x="106" y="16" width="2.4" height="31" rx="1.2" fill="#213328" opacity="0.75" />
      </g>
    </svg>
  );
}

function Confetti() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden="true">
      {Array.from({ length: 36 }, (_, i) => (
        <span
          key={i}
          className="flyover-confetti absolute top-[-12px] block h-2.5 w-1.5 rounded-sm"
          style={{
            left: `${(i * 37) % 100}%`,
            backgroundColor: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
            animationDelay: `${3.5 + (i % 9) * 0.12}s`,
            animationDuration: `${2.4 + (i % 5) * 0.35}s`,
          }}
        />
      ))}
    </div>
  );
}

export default function AnniversaryFlyover() {
  const [phase, setPhase] = useState<"idle" | "flying" | "done">("idle");
  const [showRibbon, setShowRibbon] = useState(false);

  useEffect(() => {
    if (new Date() >= CELEBRATION_ENDS) return;

    setShowRibbon(!readSession(DISMISSED_KEY));

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setPhase("done");
      return;
    }

    const timer = setTimeout(() => setPhase("flying"), 1800);
    return () => clearTimeout(timer);
  }, []);

  const finishFlight = () => setPhase("done");

  const dismissRibbon = () => {
    writeSession(DISMISSED_KEY);
    setShowRibbon(false);
  };

  return (
    <>
      {phase === "flying" && (
        <>
          <div
            className="pointer-events-none fixed inset-x-0 top-28 md:top-32 z-40 overflow-hidden h-28 md:h-36"
            aria-hidden="true"
          >
            <div
              className="flyover-path absolute left-0 top-2 flex items-center"
              onAnimationEnd={finishFlight}
            >
              <div className="flyover-banner flex items-center whitespace-nowrap rounded-sm border-2 border-[#213328] bg-white px-4 py-1.5 md:px-6 md:py-2 shadow-md">
                <span className="text-sm md:text-lg font-bold text-darkGreen">
                  🎉 Celebrating 31 Years of <span className="text-primary">MEMMCOL</span>
                </span>
              </div>
              {/* tow line */}
              <div className="h-px w-8 md:w-12 bg-[#213328]" />
              <div className="flyover-bob">
                <Plane />
              </div>
            </div>
          </div>
          <Confetti />
        </>
      )}

      {/* screen readers get the message once, without the animation */}
      <p className="sr-only" role="status">
        {phase !== "idle" && showRibbon ? "Celebrating 31 years of MEMMCOL, 1995 to 2026." : ""}
      </p>

      {phase === "done" && showRibbon && (
        <div className="flyover-ribbon fixed bottom-4 left-4 z-40 flex items-center gap-3 rounded-full bg-darkGreen py-2 pl-4 pr-2 text-sm text-white shadow-lg">
          <span>
            🎉 <span className="font-semibold">31 years</span> of MEMMCOL · 1995–2026
          </span>
          <button
            type="button"
            onClick={dismissRibbon}
            className="flex h-6 w-6 items-center justify-center rounded-full hover:bg-white/15"
            aria-label="Dismiss anniversary message"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </>
  );
}
