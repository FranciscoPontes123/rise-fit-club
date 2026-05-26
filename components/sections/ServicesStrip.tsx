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
              Cinco modalidades.
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
                  gridTemplateColumns: '64px 1fr 1.6fr 32px',
                  gap: '0 32px',
                  padding: '26px 0',
                  borderBottom: '1px solid var(--line)',
                  alignItems: 'center',
                  transition: 'background .15s',
                  cursor: 'default',
                }}
              >
                {/* Index */}
                <div
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    color: '#444',
                    letterSpacing: '.2em',
                    paddingLeft: 4,
                  }}
                  className="svc-index"
                >
                  0{i + 1}
                </div>

                {/* Name + sub */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <Ico />
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--head-font)',
                        fontWeight: 800,
                        fontSize: 'clamp(20px,2.4vw,32px)',
                        textTransform: 'uppercase',
                        letterSpacing: '.02em',
                        lineHeight: 1,
                      }}
                    >
                      {s.name}
                    </div>
                    <div
                      className="muted"
                      style={{
                        fontFamily: 'var(--mono)',
                        fontSize: 10,
                        letterSpacing: '.18em',
                        textTransform: 'uppercase',
                        marginTop: 5,
                      }}
                    >
                      {s.sub}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p
                  className="muted svc-desc"
                  style={{ fontSize: 14, lineHeight: 1.55, margin: 0 }}
                >
                  {s.desc}
                </p>

                {/* Arrow */}
                <div
                  className="svc-arrow"
                  style={{
                    color: 'var(--gold)',
                    opacity: 0,
                    transition: 'opacity .2s, transform .2s',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <IconArrow rot={-90} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .svc-row:hover { background: var(--surface); padding-left: 16px; padding-right: 16px; margin-left: -16px; margin-right: -16px; }
        .svc-row:hover .svc-arrow { opacity: 1 !important; transform: translateX(4px); }
        .svc-row:hover .svc-index { color: var(--gold) !important; }
        @media (max-width: 760px) {
          .svc-row { grid-template-columns: 40px 1fr !important; gap: 0 16px !important; }
          .svc-desc { display: none; }
          .svc-arrow { display: none; }
        }
      `}</style>
    </section>
  );
}
