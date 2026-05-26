'use client';

import { useRef, MouseEvent, ReactNode } from 'react';

interface MagnetProps {
  children: ReactNode;
  strength?: number;
  style?: React.CSSProperties;
}

export default function Magnet({ children, strength = 0.38, style }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * strength;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = 'translate(0, 0)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block', transition: 'transform 0.35s cubic-bezier(.23,1,.32,1)', ...style }}
    >
      {children}
    </div>
  );
}
