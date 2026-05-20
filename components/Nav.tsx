'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import RiseLogo from './RiseLogo';
import { IconMenu, IconClose } from './icons';

const NAV_ITEMS = [
  { href: '/', label: 'Início' },
  { href: '/espaco', label: 'Espaço' },
  { href: '/planos', label: 'Planos' },
  { href: '/staff', label: 'Staff' },
  { href: '/resultados', label: 'Resultados' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/faq', label: 'FAQ' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(13,13,13,.92)' : 'transparent',
        backdropFilter: scrolled ? 'saturate(140%) blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid #1f1f1f' : '1px solid transparent',
        transition: 'all .25s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 78 }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <RiseLogo size={46} />
          <span
            style={{
              fontFamily: 'var(--head-font)',
              fontWeight: 900,
              letterSpacing: '.06em',
              fontSize: 18,
              lineHeight: 1,
            }}
          >
            RISE
            <br />
            <span style={{ color: 'var(--gold)', fontSize: 11, letterSpacing: '.3em' }}>FIT · CLUB</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 36 }} className="nav-desktop">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: 'var(--head-font)',
                  fontWeight: 600,
                  fontSize: 15,
                  letterSpacing: '.1em',
                  textTransform: 'uppercase',
                  color: active ? 'var(--gold)' : '#fff',
                  borderBottom: active ? '1px solid var(--gold)' : '1px solid transparent',
                  paddingBottom: 4,
                  transition: 'all .2s',
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA + burger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link href="/contacto" className="btn btn-gold" style={{ padding: '12px 18px' }}>
            Começa Já
          </Link>
          <button
            className="nav-burger"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="menu"
            style={{ display: 'none' }}
          >
            {mobileOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: '#0d0d0d', borderTop: '1px solid #1f1f1f', padding: '24px 0' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {NAV_ITEMS.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    padding: '14px 0',
                    fontFamily: 'var(--head-font)',
                    fontSize: 22,
                    fontWeight: 700,
                    letterSpacing: '.05em',
                    textTransform: 'uppercase',
                    color: active ? 'var(--gold)' : '#fff',
                    borderBottom: '1px solid #1a1a1a',
                    display: 'block',
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 980px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
