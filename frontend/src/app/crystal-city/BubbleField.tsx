/**
 * Decorative field of bubbles drifting upward across the page.
 * Positions/sizes/delays are deterministic so SSR and CSR markup match.
 */

type Bubble = {
  left: string;
  size: number;
  delay: string;
  duration: string;
  opacity: number;
};

const BUBBLES: Bubble[] = [
  { left: '4%', size: 8, delay: '0s', duration: '14s', opacity: 0.35 },
  { left: '11%', size: 14, delay: '3s', duration: '18s', opacity: 0.4 },
  { left: '18%', size: 6, delay: '6s', duration: '12s', opacity: 0.45 },
  { left: '24%', size: 18, delay: '1.5s', duration: '20s', opacity: 0.3 },
  { left: '31%', size: 10, delay: '4s', duration: '16s', opacity: 0.5 },
  { left: '38%', size: 7, delay: '8s', duration: '13s', opacity: 0.4 },
  { left: '45%', size: 22, delay: '2s', duration: '22s', opacity: 0.25 },
  { left: '52%', size: 9, delay: '5s', duration: '15s', opacity: 0.45 },
  { left: '60%', size: 13, delay: '0.5s', duration: '17s', opacity: 0.35 },
  { left: '67%', size: 6, delay: '7s', duration: '11s', opacity: 0.5 },
  { left: '74%', size: 16, delay: '3.5s', duration: '19s', opacity: 0.3 },
  { left: '81%', size: 11, delay: '6.5s', duration: '14s', opacity: 0.4 },
  { left: '88%', size: 8, delay: '1s', duration: '13s', opacity: 0.45 },
  { left: '94%', size: 20, delay: '4.5s', duration: '21s', opacity: 0.28 },
];

export default function BubbleField() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full bg-crystal-mint animate-rise"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            opacity: b.opacity,
            animationDelay: b.delay,
            animationDuration: b.duration,
            boxShadow: '0 0 12px rgba(167, 243, 208, 0.6)',
          }}
        />
      ))}
    </div>
  );
}
