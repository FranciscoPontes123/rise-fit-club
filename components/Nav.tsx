'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { IconMenu, IconClose } from './icons';
import Magnet from './ui/Magnet';

const NAV_ITEMS = [
  { href: '/', label: 'Início' },
  { href: '/espaco', label: 'Espaço' },
  { href: '/planos', label: 'Planos' },
  { href: '/aulas', label: 'Aulas' },
  { href: '/staff', label: 'Staff' },
  { href: '/resultados', label: 'Resultados' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/faq', label: 'FAQ' },
  { href: '/recrutamento', label: 'Recrutamento' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
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
        background: scrolled ? '#090909' : 'transparent',
        borderBottom: scrolled ? '1px solid #1e1e1e' : '1px solid transparent',
        transition: 'background .2s ease, border-color .2s ease',
      }}
    >
      {/* Gold accent line — only when scrolled */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 2,
          background: 'var(--gold)',
          transform: scrolled ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left',
          transition: 'transform .35s cubic-bezier(.16,1,.3,1)',
        }}
      />

      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 74 }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Image src="/Logo Transparente.png" alt="Rise Fit Club" width={36} height={36} style={{ objectFit: 'contain' }} />
          <span
            style={{
              fontFamily: 'var(--head-font)',
              fontWeight: 900,
              letterSpacing: '.18em',
              fontSize: 15,
              color: '#f0ece4',
              lineHeight: 1,
            }}
          >
            RISE FIT CLUB
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: 'flex', gap: 32 }} className="nav-desktop">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: 'var(--mono)',
                  fontWeight: 500,
                  fontSize: 11,
                  letterSpacing: '.18em',
                  textTransform: 'uppercase',
                  color: active ? 'var(--gold)' : '#888',
                  transition: 'color .15s',
                  paddingBottom: 2,
                  borderBottom: active ? '1px solid var(--gold)' : '1px solid transparent',
                }}
                className="nav-link"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA + burger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Magnet>
            <Link href="/contacto" className="btn btn-gold" style={{ padding: '10px 18px', fontSize: 12, letterSpacing: '.1em' }}>
              Começa Já
            </Link>
          </Magnet>
          <button
            className="nav-burger"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="menu"
            style={{ display: 'none', color: '#fff', padding: 4 }}
          >
            {mobileOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{ background: '#080808', borderTop: '2px solid var(--gold)', padding: '32px 0' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {NAV_ITEMS.map((item, i) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    padding: '18px 0',
                    fontFamily: 'var(--head-font)',
                    fontSize: 28,
                    fontWeight: 800,
                    letterSpacing: '.04em',
                    textTransform: 'uppercase',
                    color: active ? 'var(--gold)' : '#fff',
                    borderBottom: '1px solid #141414',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  {item.label}
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: '#444', letterSpacing: '.16em' }}>
                    0{i + 1}
                  </span>
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
        .nav-link:hover { color: #fff !important; }
      `}</style>
    </header>
  );
}
