import Image from 'next/image';

export default function RiseLogo({ size = 44 }: { size?: number }) {
  return (
    <Image
      src="/rise-logo.jpg"
      alt="Rise Fit Club"
      width={size}
      height={size}
      style={{ borderRadius: '50%', objectFit: 'cover' }}
      priority
    />
  );
}
