export default function Ellipsis() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-0 flex h-[860px] justify-center overflow-hidden"
      aria-hidden="true"
    >
      <svg
        className="shrink-0"
        width={1400}
        height={860}
        viewBox="0 0 1400 860"
        fill="none"
      >
      <defs>
        <linearGradient id="arc-dome" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#37925E" stopOpacity="0.13" />
          <stop offset="70%" stopColor="#37925E" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#37925E" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="arc-stroke" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#37925E" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#37925E" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path d="M-160 860 A 860 860 0 0 1 1560 860" fill="url(#arc-dome)" />

      <path
        d="M-160 860 A 860 860 0 0 1 1560 860"
        stroke="url(#arc-stroke)"
        strokeWidth="1.5"
      />
      <path
        d="M20 860 A 680 680 0 0 1 1380 860"
        stroke="url(#arc-stroke)"
        strokeWidth="1.5"
      />
      <path
        d="M190 860 A 510 510 0 0 1 1210 860"
        stroke="url(#arc-stroke)"
        strokeWidth="1.5"
      />

      <path
        className="arc-pulse"
        d="M20 860 A 680 680 0 0 1 1380 860"
        stroke="url(#arc-stroke)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="70 2070"
        opacity="0.9"
      />
      <path
        className="arc-pulse"
        style={{ animationDelay: "-7s", animationDuration: "19s" }}
        d="M190 860 A 510 510 0 0 1 1210 860"
        stroke="url(#arc-stroke)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="50 1555"
        opacity="0.8"
      />
      </svg>
    </div>
  );
}
