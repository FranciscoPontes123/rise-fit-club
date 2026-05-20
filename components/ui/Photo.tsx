import { CSSProperties } from 'react';

interface PhotoProps {
  label: string;
  h?: number;
  style?: CSSProperties;
}

export default function Photo({ label, h = 320, style = {} }: PhotoProps) {
  return (
    <div
      className="ph"
      style={{ height: h, ...style }}
      data-label={label}
    />
  );
}
