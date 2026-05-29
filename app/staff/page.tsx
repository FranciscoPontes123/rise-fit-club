import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { TRAINERS } from '@/data/trainers';
import { IconArrow } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Staff — Rise Fit Club',
  description: 'Conhece a nossa equipa de coaches especialistas em força, pilates clínico, BJJ e treino funcional.',
};

export default function StaffPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page" style={{ paddingTop: 160 }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 20 }}>— Staff</div>
          <h1 style={{ fontSize: 'clamp(56px,9vw,140px)', maxWidth: '14ch' }}>
            A tua <span className="gold">Rise Team</span>.
          </h1>
          <p className="muted" style={{ fontSize: 18, maxWidth: 640, marginTop: 24, lineHeight: 1.6 }}>
            Equipa dedicada a ti, com especialistas em força, mobilidade, pilates clínico e perda de peso.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section style={{ paddingBottom: 140 }}>
        <div className="container">
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }}
            className="staff-grid"
          >
            {TRAINERS.map((t, i) => (
              <article key={i} style={{ background: '#111' }}>
                <div style={{ position: 'relative', height: 480, overflow: 'hidden' }}>
                  <Image
                    src={t.photo}
                    alt={t.name}
                    fill
                    style={{ objectFit: 'cover', objectPosition: t.photoPosition ?? 'top' }}
                    sizes="(max-width: 560px) 100vw, (max-width: 880px) 50vw, 33vw"
                  />
                </div>
                <div
                  style={{
                    padding: '18px 20px 22px',
                    borderTop: '3px solid var(--gold)',
                    background: '#111',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--head-font)',
                      fontWeight: 800,
                      fontSize: 28,
                      textTransform: 'uppercase',
                      letterSpacing: '.02em',
                      lineHeight: 1,
                      marginBottom: 8,
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 10,
                      letterSpacing: '.16em',
                      textTransform: 'uppercase',
                      color: '#666',
                      lineHeight: 1.6,
                    }}
                  >
                    {t.role}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <style>{`
            @media (max-width: 880px) { .staff-grid { grid-template-columns: 1fr 1fr !important; } }
            @media (max-width: 560px) { .staff-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>

      {/* Recrutamento CTA */}
      <section style={{ background: '#0d0d0d', borderTop: '2px solid var(--gold)', padding: '80px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
          <div>
            <h2 style={{ fontSize: 'clamp(36px,5vw,72px)', lineHeight: 0.9 }}>
              Queres juntar-te à<br /><span className="gold">Rise Team</span>?
            </h2>
            <p className="muted" style={{ marginTop: 16, fontSize: 16, maxWidth: 400, lineHeight: 1.6 }}>
              Estamos sempre abertos a novos talentos. Candidata-te ou propõe um modelo de parceria.
            </p>
          </div>
          <Link href="/recrutamento" className="btn btn-gold" style={{ fontSize: 17, padding: '18px 36px' }}>
            Ver oportunidades <IconArrow rot={-90} />
          </Link>
        </div>
      </section>
    </div>
  );
}
