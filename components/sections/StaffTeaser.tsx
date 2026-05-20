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
            marginBottom: 48,
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
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}
          className="staff-grid"
        >
          {TRAINERS.slice(0, 3).map((t, i) => (
            <article
              key={i}
              style={{
                position: 'relative',
                background: 'var(--surface)',
                border: '1px solid var(--line)',
              }}
            >
              <Photo h={420} label={`STAFF · ${t.name.toUpperCase()}`} />
              <div style={{ padding: '24px 22px', borderTop: '2px solid var(--gold)' }}>
                <div
                  className="muted"
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    letterSpacing: '.18em',
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}
                >
                  0{i + 1} · Coach
                </div>
                <div
                  style={{
                    fontFamily: 'var(--head-font)',
                    fontWeight: 800,
                    fontSize: 28,
                    textTransform: 'uppercase',
                    letterSpacing: '.02em',
                  }}
                >
                  {t.name}
                </div>
                <div
                  className="gold"
                  style={{ fontSize: 13, marginTop: 6, fontFamily: 'var(--mono)', letterSpacing: '.08em' }}
                >
                  {t.role}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`@media (max-width: 880px) { .staff-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
