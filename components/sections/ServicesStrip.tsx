'use client';

import Link from 'next/link';
import { SERVICES } from '@/data/services';
import { ICON_MAP, IconArrow } from '@/components/icons';

export default function ServicesStrip() {
  return (
    <section className="page">
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 24,
            flexWrap: 'wrap',
            marginBottom: 56,
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>— O que oferecemos</div>
            <h2 style={{ fontSize: 'clamp(40px,5.5vw,72px)' }}>
              As nossas modalidades.
              <br />
              <span className="gold">Um só tecto.</span>
            </h2>
          </div>
          <Link href="/planos" className="btn btn-outline-gold">
            Ver planos · Preços <IconArrow rot={-90} />
          </Link>
        </div>

        <div style={{ borderTop: '1px solid var(--line)' }}>
          {SERVICES.map((s, i) => {
            const Ico = ICON_MAP[s.icon];
            return (
              <div
                key={s.id}
                className="svc-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '52px 1fr auto',
                  gap: '0 24px',
                  padding: '22px 0',
                  borderBottom: '1px solid var(--line)',
                  alignItems: 'center',
                  position: 'relative',
                }}
              >
                {/* Gold left accent */}
                <div className="svc-accent" />

                {/* Index */}
                <div
                  className="svc-index"
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 10,
                    color: '#333',
                    letterSpacing: '.24em',
                    paddingLeft: 2,
                    transition: 'color .2s',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>

                {/* Name + icon */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 14, minWidth: 0 }}>
                  <span className="svc-icon" style={{ flexShrink: 0, opacity: 0.45, transition: 'opacity .2s' }}>
                    <Ico />
                  </span>
                  <div
                    className="svc-name"
                    style={{
                      fontFamily: 'var(--head-font)',
                      fontWeight: 900,
                      fontSize: 'clamp(22px,3vw,42px)',
                      textTransform: 'uppercase',
                      letterSpacing: '.015em',
                      lineHeight: 1,
                      color: '#e8e4dc',
                      transition: 'color .2s',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {s.name}
                  </div>
                </div>

                {/* Sub tag */}
                <div
                  className="svc-sub"
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 14,
                    letterSpacing: '.16em',
                    textTransform: 'uppercase',
                    color: '#666',
                    textAlign: 'right',
                    transition: 'color .2s',
                    whiteSpace: 'nowrap',
                    paddingLeft: 16,
                  }}
                >
                  {s.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .svc-row { cursor: default; }
        .svc-accent {
          position: absolute;
          left: -24px;
          top: 0;
          bottom: 0;
          width: 2px;
          background: var(--gold);
          transform: scaleY(0);
          transform-origin: bottom;
          transition: transform .25s cubic-bezier(.16,1,.3,1);
        }
        .svc-row:hover .svc-accent { transform: scaleY(1); }
        .svc-row:hover .svc-index { color: var(--gold) !important; }
        .svc-row:hover .svc-name { color: #fff !important; }
        .svc-row:hover .svc-sub { color: #999 !important; }
        .svc-row:hover .svc-icon { opacity: 0.8 !important; }
        @media (max-width: 760px) {
          .svc-row { grid-template-columns: 40px 1fr !important; }
          .svc-sub { display: none !important; }
          .svc-accent { left: -16px; }
        }
      `}</style>
    </section>
  );
}
