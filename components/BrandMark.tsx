export function BrandMark({ size = 38 }: { size?: number }) {
  return (
    <svg
      className="mark"
      style={{ width: size, height: size }}
      viewBox="-8 -8 116 116"
      role="img"
      aria-label="MVD hashtag mark"
    >
      <rect x="-6" y="-6" width="112" height="112" rx="28" fill="var(--card)" stroke="var(--line)" strokeWidth="2" />
      <g fill="none" stroke="currentColor" strokeLinecap="round">
        <path pathLength="1" vectorEffect="non-scaling-stroke" d="M42 7 C38 29 34 53 29 93" strokeWidth="9.5" />
        <path pathLength="1" vectorEffect="non-scaling-stroke" d="M73 7 C69 29 65 53 60 93" strokeWidth="8.6" />
        <path pathLength="1" vectorEffect="non-scaling-stroke" d="M11 35 C38 31 66 29 92 26" strokeWidth="9.2" />
        <path pathLength="1" vectorEffect="non-scaling-stroke" d="M8 69 C34 65 62 63 89 60" strokeWidth="8.2" />
      </g>
    </svg>
  );
}
