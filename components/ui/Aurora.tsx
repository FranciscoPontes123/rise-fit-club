'use client';

export default function Aurora({
  colorStops = ['rgba(251,204,31,0.18)', 'rgba(232,0,13,0.12)', 'rgba(251,204,31,0.08)'],
  style = {},
}: {
  colorStops?: string[];
  style?: React.CSSProperties;
}) {
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', ...style }}>
      {colorStops.map((color, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            borderRadius: '50%',
            filter: 'blur(100px)',
            background: color,
            animationName: `aurora-drift-${i}`,
            animationDuration: `${14 + i * 3}s`,
            animationTimingFunction: 'ease-in-out',
            animationIterationCount: 'infinite',
            animationDelay: `${-i * 4}s`,
            ...(i === 0 && { width: '55vw', height: '40vw', top: '-5%', left: '-5%' }),
            ...(i === 1 && { width: '45vw', height: '35vw', top: '25%', right: '-10%' }),
            ...(i === 2 && { width: '35vw', height: '25vw', bottom: '0', left: '25%' }),
          }}
        />
      ))}
      <style>{`
        @keyframes aurora-drift-0 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(4%, 6%) scale(1.08); }
        }
        @keyframes aurora-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-5%, 4%) scale(0.92); }
        }
        @keyframes aurora-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(3%, -5%) scale(1.05); }
        }
      `}</style>
    </div>
  );
}
