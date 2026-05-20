import { IconStar } from '@/components/icons';

export default function Stars({ value = 5, size = 16 }: { value?: number; size?: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: 2 }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <IconStar key={i} filled={i < Math.round(value)} size={size} />
      ))}
    </span>
  );
}
