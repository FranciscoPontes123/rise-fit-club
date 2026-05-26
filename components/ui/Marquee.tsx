'use client';

import { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  speed?: number;
  gap?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
}

export default function Marquee({
  children,
  speed = 35,
  gap = 20,
  direction = 'left',
  pauseOnHover = true,
}: MarqueeProps) {
  const duration = `${Math.round(10000 / speed)}s`;

  return (
    <div style={{ overflow: 'hidden', width: '100%' }}>
      <div
        className={`marquee-track${pauseOnHover ? ' marquee-pause' : ''}`}
        style={{
          display: 'flex',
          gap,
          width: 'max-content',
          animationName: 'marquee-scroll',
          animationDuration: duration,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        <div style={{ display: 'flex', gap, flexShrink: 0 }}>{children}</div>
        <div style={{ display: 'flex', gap, flexShrink: 0 }} aria-hidden>{children}</div>
      </div>
      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-pause:hover { animation-play-state: paused; }
      `}</style>
    </div>
  );
}
