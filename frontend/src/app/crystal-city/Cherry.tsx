import { useId, type SVGProps } from 'react';

/**
 * Glossy red cherry pair with stem and leaf.
 * Uses React.useId so each instance has SSR-stable unique gradient ids.
 */
export default function Cherry({
  className,
  ...rest
}: SVGProps<SVGSVGElement>) {
  const reactId = useId();
  const grad = `cherry-${reactId}`;
  const leaf = `leaf-${reactId}`;

  return (
    <svg
      viewBox="0 0 120 140"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Glossy red cherry"
      {...rest}
    >
      <defs>
        <radialGradient id={grad} cx="35%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#fecaca" />
          <stop offset="20%" stopColor="#fb7185" />
          <stop offset="55%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#5b0a0a" />
        </radialGradient>
        <linearGradient id={leaf} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22c55e" />
          <stop offset="100%" stopColor="#14532d" />
        </linearGradient>
      </defs>

      {/* Stem */}
      <path
        d="M 60 18 C 64 36 56 52 58 70"
        stroke="#3f2410"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Leaf */}
      <path
        d="M 60 22 Q 90 12 102 30 Q 84 36 60 22 Z"
        fill={`url(#${leaf})`}
      />
      <path
        d="M 64 24 Q 82 22 98 30"
        stroke="#052e16"
        strokeWidth="0.8"
        fill="none"
        opacity="0.6"
      />

      {/* Cherry body shadow underneath */}
      <ellipse cx="60" cy="128" rx="28" ry="4" fill="#000" opacity="0.45" />

      {/* Cherry body */}
      <circle cx="60" cy="92" r="34" fill={`url(#${grad})`} />

      {/* Glossy primary highlight */}
      <ellipse cx="48" cy="78" rx="9" ry="13" fill="#fff" opacity="0.75" />
      <circle cx="58" cy="76" r="2.4" fill="#fff" opacity="0.85" />
      {/* Bottom contour shadow for depth */}
      <ellipse cx="68" cy="112" rx="16" ry="6" fill="#3b0a0a" opacity="0.45" />
    </svg>
  );
}
