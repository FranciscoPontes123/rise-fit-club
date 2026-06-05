'use client';

import { useRef, MouseEvent, ReactNode, CSSProperties } from 'react';

interface TiltCardProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
  maxTilt?: number;
}

export default function TiltCard({ children, style, className, maxTilt = 10 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(500px) rotateY(${x * maxTilt * 2}deg) rotateX(${-y * maxTilt * 2}deg) translateZ(10px)`;
    el.style.borderColor = 'rgba(251,204,31,0.55)';
    el.style.boxShadow = '0 12px 40px rgba(0,0,0,0.5), 0 0 24px rgba(251,204,31,0.14)';
    el.style.zIndex = '2';
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(500px) rotateY(0deg) rotateX(0deg) translateZ(0)';
    el.style.borderColor = '';
    el.style.boxShadow = '';
    el.style.zIndex = '';
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transition: 'transform 0.3s cubic-bezier(.23,1,.32,1), box-shadow 0.3s ease, border-color 0.3s ease',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        position: 'relative',
        ...style,
      }}
    >
      {children}
    </div>
  );
}
