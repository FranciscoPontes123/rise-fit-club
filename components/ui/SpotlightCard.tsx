'use client';

import { useRef, MouseEvent, ReactNode, CSSProperties } from 'react';

interface SpotlightCardProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  spotlightColor?: string;
  spotlightSize?: number;
}

export default function SpotlightCard({
  children,
  style,
  className,
  spotlightColor = 'rgba(201,168,76,0.13)',
  spotlightSize = 320,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = ref.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--sx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--sy', `${e.clientY - rect.top}px`);
  };

  const handleMouseLeave = () => {
    const card = ref.current;
    if (!card) return;
    card.style.setProperty('--sx', '-999px');
    card.style.setProperty('--sy', '-999px');
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`spotlight-card${className ? ` ${className}` : ''}`}
      style={{ position: 'relative', overflow: 'hidden', ...style }}
    >
      <div
        className="spotlight-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          background: `radial-gradient(${spotlightSize}px circle at var(--sx, -999px) var(--sy, -999px), ${spotlightColor}, transparent 70%)`,
        }}
      />
      <div style={{ position: 'relative', zIndex: 2, height: '100%' }}>
        {children}
      </div>
    </div>
  );
}
