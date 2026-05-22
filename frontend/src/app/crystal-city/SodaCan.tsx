import type { SVGProps } from 'react';

/**
 * Stylized aluminum soda can rendered fully in SVG.
 * Designed to feel premium with multi-stop gradients, side highlights,
 * a label area, brand typography and a cherry icon.
 */
export default function SodaCan({
  className,
  ...rest
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 240 420"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Crystal City zero-sugar soda can"
      {...rest}
    >
      <defs>
        {/* Cylinder body gradient: dark edges -> bright midline mimics curvature */}
        <linearGradient id="canBody" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#01170d" />
          <stop offset="12%" stopColor="#063a26" />
          <stop offset="38%" stopColor="#10b981" />
          <stop offset="55%" stopColor="#0a5a37" />
          <stop offset="78%" stopColor="#0e9166" />
          <stop offset="92%" stopColor="#053524" />
          <stop offset="100%" stopColor="#01170d" />
        </linearGradient>

        {/* Vertical sheen for label depth */}
        <linearGradient id="canBodyV" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#000000" stopOpacity="0.35" />
          <stop offset="20%" stopColor="#000000" stopOpacity="0" />
          <stop offset="80%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.45" />
        </linearGradient>

        {/* Top metal cap */}
        <linearGradient id="canTop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#e5e7eb" />
          <stop offset="40%" stopColor="#9ca3af" />
          <stop offset="100%" stopColor="#4b5563" />
        </linearGradient>

        {/* Bottom rim */}
        <linearGradient id="canBottom" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#374151" />
          <stop offset="100%" stopColor="#0b0f0d" />
        </linearGradient>

        {/* Soft glow behind label */}
        <radialGradient id="labelGlow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="#34d399" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
        </radialGradient>

        {/* Cherry on label */}
        <radialGradient id="cherryFill" cx="35%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#fecaca" />
          <stop offset="35%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="120" cy="408" rx="78" ry="6" fill="#000" opacity="0.55" />

      {/* Body */}
      <rect x="46" y="44" width="148" height="346" fill="url(#canBody)" />
      <rect x="46" y="44" width="148" height="346" fill="url(#canBodyV)" />

      {/* Specular highlights (cylinder feel) */}
      <rect x="56" y="48" width="3" height="338" fill="#ffffff" opacity="0.22" />
      <rect x="63" y="48" width="1.5" height="338" fill="#ffffff" opacity="0.14" />
      <rect x="180" y="48" width="2.5" height="338" fill="#ffffff" opacity="0.12" />
      <rect x="186" y="48" width="1" height="338" fill="#ffffff" opacity="0.08" />

      {/* Label backing glow */}
      <ellipse cx="120" cy="220" rx="75" ry="120" fill="url(#labelGlow)" />

      {/* Top cap (silver) */}
      <ellipse cx="120" cy="44" rx="74" ry="13" fill="url(#canTop)" />
      {/* Top inner depression */}
      <ellipse cx="120" cy="46" rx="64" ry="9" fill="#1a1a1a" opacity="0.45" />
      {/* Pull-tab opening (oval cutout) */}
      <ellipse cx="106" cy="45" rx="18" ry="3.5" fill="#050505" />
      {/* Pull-tab ring */}
      <ellipse
        cx="106"
        cy="45"
        rx="14"
        ry="2.6"
        fill="none"
        stroke="#cbd5e1"
        strokeWidth="0.9"
      />
      <ellipse cx="106" cy="45" rx="14" ry="2.6" fill="#9ca3af" opacity="0.4" />

      {/* Top rim ring (lighter sliver under cap) */}
      <ellipse
        cx="120"
        cy="56"
        rx="74"
        ry="3"
        fill="#a7f3d0"
        opacity="0.35"
      />

      {/* === Label content === */}
      {/* Subtle label divider top */}
      <line
        x1="60"
        y1="120"
        x2="180"
        y2="120"
        stroke="#a7f3d0"
        strokeWidth="0.5"
        opacity="0.4"
      />

      {/* Brand serif */}
      <text
        x="120"
        y="180"
        textAnchor="middle"
        fontFamily="Playfair Display, Georgia, serif"
        fontSize="34"
        fill="#ffffff"
        fontWeight="700"
        letterSpacing="0.5"
      >
        Crystal
      </text>

      {/* Brand sans (caps spaced) */}
      <text
        x="120"
        y="208"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="14"
        fill="#a7f3d0"
        fontWeight="600"
        letterSpacing="7"
      >
        CITY
      </text>

      {/* Cherry icon */}
      <g transform="translate(98 240)">
        <path
          d="M 4 0 Q 12 -16 22 -6"
          stroke="#16a34a"
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 22 -6 Q 30 -10 36 -2 Q 28 -2 22 -6 Z"
          fill="#16a34a"
        />
        <circle cx="6" cy="14" r="11" fill="url(#cherryFill)" />
        <circle cx="22" cy="18" r="11" fill="url(#cherryFill)" />
        <circle cx="3" cy="11" r="2.5" fill="#fff" opacity="0.7" />
        <circle cx="19" cy="15" r="2.5" fill="#fff" opacity="0.7" />
      </g>

      {/* Volume tagline */}
      <text
        x="120"
        y="304"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontSize="9"
        fill="#a7f3d0"
        letterSpacing="4"
        opacity="0.85"
      >
        ZERO SUGAR · 350ML
      </text>

      {/* Subtle label divider bottom */}
      <line
        x1="60"
        y1="318"
        x2="180"
        y2="318"
        stroke="#a7f3d0"
        strokeWidth="0.5"
        opacity="0.4"
      />

      {/* Tiny barcode-ish marks for realism */}
      <g opacity="0.55" fill="#a7f3d0">
        <rect x="76" y="340" width="1" height="14" />
        <rect x="79" y="340" width="2" height="14" />
        <rect x="83" y="340" width="1" height="14" />
        <rect x="86" y="340" width="3" height="14" />
        <rect x="91" y="340" width="1" height="14" />
        <rect x="94" y="340" width="2" height="14" />
        <rect x="98" y="340" width="1" height="14" />
        <rect x="101" y="340" width="1" height="14" />
        <rect x="104" y="340" width="3" height="14" />
        <rect x="109" y="340" width="1" height="14" />
        <rect x="112" y="340" width="2" height="14" />
        <rect x="116" y="340" width="1" height="14" />
      </g>

      {/* Bottom rim */}
      <ellipse cx="120" cy="390" rx="74" ry="11" fill="url(#canBottom)" />
      <ellipse cx="120" cy="392" rx="64" ry="6" fill="#000" opacity="0.55" />
    </svg>
  );
}
