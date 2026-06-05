'use client';

import { useState } from 'react';

interface Props {
  srcs: string[];
  height?: number;
  className?: string;
}

export default function VideoRotator({ srcs, height = 500, className }: Props) {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState<number | null>(null);

  const advance = () => {
    const next = (current + 1) % srcs.length;
    setPrev(current);
    setCurrent(next);
    setTimeout(() => setPrev(null), 1400);
  };

  return (
    <div style={{ position: 'relative', height, overflow: 'hidden' }} className={className}>
      {prev !== null && (
        <video
          key={`prev-${prev}`}
          src={srcs[prev]}
          autoPlay
          muted
          playsInline
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%', objectFit: 'cover',
            animation: 'vrot-out 1.4s cubic-bezier(0.4,0,0.2,1) forwards',
          }}
        />
      )}
      <video
        key={`cur-${current}`}
        src={srcs[current]}
        autoPlay
        muted
        playsInline
        onEnded={advance}
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%', objectFit: 'cover',
          animation: 'vrot-in 1.4s cubic-bezier(0.4,0,0.2,1) forwards',
        }}
      />
      <style>{`
        @keyframes vrot-in  { from { opacity: 0; transform: scale(1.02); } to { opacity: 1; transform: scale(1); } }
        @keyframes vrot-out { from { opacity: 1; transform: scale(1);    } to { opacity: 0; transform: scale(0.99); } }
      `}</style>
    </div>
  );
}
