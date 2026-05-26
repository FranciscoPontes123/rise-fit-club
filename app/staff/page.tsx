import type { Metadata } from 'next';
import Photo from '@/components/ui/Photo';
import { TRAINERS } from '@/data/trainers';

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
            Coaches que <span className="gold">cobram</span>. Quando faltas, sentem.
          </h1>
          <p className="muted" style={{ fontSize: 18, maxWidth: 640, marginTop: 24, lineHeight: 1.6 }}>
            Equipa pequena. Especialistas em força, mobilidade, pilates clínico e BJJ.
            Tratamento adulto, programa real, progressão medida.
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
              <article key={i} style={{ background: 'var(--surface)' }}>
                <Photo h={480} label={t.name.toUpperCase()} />
                <div
                  style={{
                    padding: '18px 20px 20px',
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
                    }}
                  >
                    {t.name}
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
    </div>
  );
}
