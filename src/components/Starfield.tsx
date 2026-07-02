/**
 * Ambient twinkling starfield for the cosmic backdrop.
 * Positions are derived deterministically from the index so server and
 * client render identically (no hydration mismatch, no Math.random).
 */
const STAR_COUNT = 46;

function pseudo(n: number, salt: number) {
  // Deterministic 0..1 value — stable between server and client.
  const x = Math.sin(n * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export default function Starfield() {
  const stars = Array.from({ length: STAR_COUNT }, (_, i) => {
    const left = pseudo(i, 1) * 100;
    const top = pseudo(i, 2) * 100;
    const size = 1 + pseudo(i, 3) * 2.2;
    const delay = pseudo(i, 4) * 5;
    const duration = 3 + pseudo(i, 5) * 4;
    const gold = pseudo(i, 6) > 0.65;
    return { left, top, size, delay, duration, gold };
  });

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s, i) => (
        <span
          key={i}
          className="animate-twinkle absolute rounded-full"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: s.gold ? "var(--gold-light)" : "#ffffff",
            boxShadow: s.gold
              ? "0 0 6px rgba(245,185,66,0.7)"
              : "0 0 5px rgba(255,255,255,0.5)",
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
