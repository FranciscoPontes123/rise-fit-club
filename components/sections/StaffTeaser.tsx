import Link from 'next/link';
import Photo from '@/components/ui/Photo';
import { TRAINERS } from '@/data/trainers';
import { IconArrow } from '@/components/icons';

export default function StaffTeaser() {
  return (
    <section className="page">
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 56,
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>— Quem te treina</div>
            <h2 style={{ fontSize: 'clamp(40px,5vw,68px)' }}>
              A equipa que <span className="gold">puxa por ti</span>.
            </h2>
          </div>
          <Link href="/staff" className="btn btn-outline-gold">
            Conhecer staff <IconArrow rot={-90} />
          </Link>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }}
          className="staff-grid"
        >
          {TRAINERS.slice(0, 3).map((t, i) => (
            <article
              key={i}
              style={{
                position: 'relative',
                background: 'var(--surface)',
                overflow: 'hidden',
              }}
              className="staff-card"
            >
              <Photo h={460} label={`STAFF · ${t.name.toUpperCase()}`} />

              {/* Info overlay at bottom */}
              <div
                style={{
                  padding: '20px 22px 22px',
                  borderTop: '3px solid var(--gold)',
                  background: '#111',
                }}
              >
                <div
                  className="muted"
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 10,
                    letterSpacing: '.2em',
                    textTransform: 'uppercase',
                    marginBottom: 6,
                  }}
                >
                  0{i + 1}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--head-font)',
                    fontWeight: 800,
                    fontSize: 26,
                    textTransform: 'uppercase',
                    letterSpacing: '.02em',
                    lineHeight: 1,
                  }}
                >
                  {t.name}
                </div>
                <div
                  className="gold"
                  style={{
                    fontSize: 11,
                    marginTop: 6,
                    fontFamily: 'var(--mono)',
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  {t.role}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) { .staff-grid { grid-template-columns: 1fr !important; gap: 2px !important; } }
        .staff-card { transition: filter .2s; }
        .staff-card:hover { filter: brightness(1.06); }
      `}</style>
    </section>
  );
}
