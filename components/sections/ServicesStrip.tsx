'use client';

import Link from 'next/link';
import { SERVICES } from '@/data/services';
import { ICON_MAP, IconArrow } from '@/components/icons';

export default function ServicesStrip() {
  return (
    <section className="page" style={{ paddingTop: 120, paddingBottom: 120 }}>
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 24,
            flexWrap: 'wrap',
            marginBottom: 48,
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>— O que oferecemos</div>
            <h2 style={{ fontSize: 'clamp(40px,5.5vw,72px)' }}>
              Cinco modalidades.
              <br />
              <span className="gold">Um só tecto.</span>
            </h2>
          </div>
          <Link href="/planos" className="btn btn-outline-gold">
            Ver planos · Preços <IconArrow rot={-90} />
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5,1fr)',
            gap: 0,
            border: '1px solid var(--line)',
          }}
          className="svc-grid"
        >
          {SERVICES.map((s, i) => {
            const Ico = ICON_MAP[s.icon];
            return (
              <div
                key={s.id}
                style={{
                  padding: '32px 28px',
                  borderLeft: i === 0 ? 'none' : '1px solid var(--line)',
                  background: 'var(--surface)',
                  position: 'relative',
                  minHeight: 280,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 18,
                  transition: 'background .2s',
                }}
                className="svc-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Ico />
                  <span
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      color: '#444',
                      letterSpacing: '.16em',
                    }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--head-font)',
                      fontWeight: 800,
                      fontSize: 24,
                      letterSpacing: '.02em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {s.name}
                  </div>
                  <div
                    className="muted"
                    style={{
                      fontSize: 12,
                      letterSpacing: '.18em',
                      textTransform: 'uppercase',
                      marginTop: 4,
                      fontFamily: 'var(--mono)',
                    }}
                  >
                    {s.sub}
                  </div>
                </div>
                <p className="muted" style={{ fontSize: 14, lineHeight: 1.55, marginTop: 'auto' }}>
                  {s.desc}
                </p>
                <div
                  className="svc-bar"
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: 2,
                    background: 'var(--gold)',
                    transform: 'scaleY(0)',
                    transformOrigin: 'top',
                    transition: 'transform .25s ease',
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .svc-grid { grid-template-columns: repeat(3,1fr) !important; }
          .svc-grid > div:nth-child(4) { border-left: none; border-top: 1px solid var(--line); }
          .svc-grid > div:nth-child(5) { border-top: 1px solid var(--line); }
        }
        @media (max-width: 680px) {
          .svc-grid { grid-template-columns: 1fr !important; }
          .svc-grid > div { border-left: none !important; border-top: 1px solid var(--line); }
          .svc-grid > div:first-child { border-top: none; }
        }
        .svc-card:hover { background: #1e1e1e; }
        .svc-card:hover .svc-bar { transform: scaleY(1) !important; }
      `}</style>
    </section>
  );
}
