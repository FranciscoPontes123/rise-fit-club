'use client';

import { usePathname } from 'next/navigation';
import Nav from './Nav';
import Footer from './Footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const bare = pathname === '/login' || pathname.startsWith('/studio');

  return (
    <>
      {!bare && <Nav />}
      <main>{children}</main>
      {!bare && <Footer />}
    </>
  );
}
