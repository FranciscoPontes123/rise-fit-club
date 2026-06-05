'use client';

import { usePathname } from 'next/navigation';
import Nav from './Nav';
import Footer from './Footer';
import Aurora from './ui/Aurora';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bare = pathname === '/login' || pathname.startsWith('/studio');

  return (
    <>
      <div
        aria-hidden
        style={{
          position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
          transform: 'translateZ(0)',
          WebkitTransform: 'translateZ(0)',
          willChange: 'transform',
        }}
      >
        <Aurora colorStops={['rgba(251,204,31,0.13)', 'rgba(232,0,13,0.09)', 'rgba(251,204,31,0.07)']} />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        {!bare && <Nav />}
        <main>{children}</main>
        {!bare && <Footer />}
      </div>
    </>
  );
}
