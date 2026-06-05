'use client';

export default function Aurora({
  colorStops = ['rgba(251,204,31,0.18)', 'rgba(232,0,13,0.12)', 'rgba(251,204,31,0.08)'],
  style = {},
}: {
  colorStops?: string[];
  style?: React.CSSProperties;
}) {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', ...style }}>
      {colorStops.map((color, i) => (
        <div
          key={i}
          className={`aurora-orb aurora-orb-${i}`}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            background: color,
            willChange: 'transform',
            transform: 'translateZ(0)',
            WebkitTransform: 'translateZ(0)',
            animationName: `aurora-drift-${i}`,
            animationDuration: `${14 + i * 3}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDelay: `${-i * 4}s`,
          }}
        />
      ))}
      <style>{`
        /* Desktop sizes */
        .aurora-orb-0 { width: 55vw; height: 40vw; top: -5%; left: -5%; filter: blur(100px); }
        .aurora-orb-1 { width: 45vw; height: 35vw; top: 25%; right: -10%; filter: blur(100px); }
        .aurora-orb-2 { width: 35vw; height: 25vw; bottom: 0; left: 25%; filter: blur(80px); }

        /* Mobile — bigger orbs, less blur, higher impact */
        @media (max-width: 768px) {
          .aurora-orb-0 { width: 120vw; height: 80vw; top: -10%; left: -20%; filter: blur(60px); }
          .aurora-orb-1 { width: 100vw; height: 70vw; top: 30%; right: -20%; filter: blur(60px); }
          .aurora-orb-2 { width: 90vw;  height: 60vw; bottom: 5%; left: 5%;  filter: blur(50px); }
        }

        @keyframes aurora-drift-0 {
          0%, 100% { transform: translate(0, 0) scale(1) translateZ(0); }
          50%       { transform: translate(4%, 6%) scale(1.08) translateZ(0); }
        }
        @keyframes aurora-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1) translateZ(0); }
          50%       { transform: translate(-5%, 4%) scale(0.92) translateZ(0); }
        }
        @keyframes aurora-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1) translateZ(0); }
          50%       { transform: translate(3%, -5%) scale(1.05) translateZ(0); }
        }
      `}</style>
    </div>
  );
}
