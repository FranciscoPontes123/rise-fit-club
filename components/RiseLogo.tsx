import Image from 'next/image';

export default function RiseLogo({ size = 44, square }: { size?: number; square?: boolean }) {
  return (
    <Image
      src="/rise-logo.jpg"
      alt="Rise Fit Club"
      width={size}
      height={size}
      style={{ borderRadius: square ? 0 : '50%', objectFit: 'cover' }}
      priority
    />
  );
}
