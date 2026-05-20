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
          <div className="eyebrow" style={{ marginBottom: 20 }}>— 03 / Staff</div>
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
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}
            className="staff-grid"
          >
            {TRAINERS.map((t, i) => (
              <article
                key={i}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                  transition: 'border-color .2s',
                }}
                className="staff-card"
              >
                <div style={{ position: 'relative' }}>
                  <Photo h={420} label={t.name.toUpperCase()} />
                  <div
                    style={{
                      position: 'absolute',
                      top: 14,
                      left: 14,
                      padding: '6px 10px',
                      background: 'rgba(13,13,13,.85)',
                      border: '1px solid var(--gold)',
                      color: 'var(--gold)',
                      fontFamily: 'var(--mono)',
                      fontSize: 10,
                      letterSpacing: '.18em',
                      textTransform: 'uppercase',
                    }}
                  >
                    0{i + 1} · Coach
                  </div>
                </div>
                <div style={{ padding: '24px 22px', borderTop: '2px solid var(--gold)' }}>
                  <div
                    style={{
                      fontFamily: 'var(--head-font)',
                      fontWeight: 800,
                      fontSize: 30,
                      textTransform: 'uppercase',
                      letterSpacing: '.02em',
                      lineHeight: 1,
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="gold"
                    style={{ fontSize: 13, marginTop: 8, fontFamily: 'var(--mono)', letterSpacing: '.08em' }}
                  >
                    {t.role}
                  </div>
                  <p className="muted" style={{ fontSize: 14, lineHeight: 1.55, marginTop: 14 }}>
                    Mais de uma década no piso. Especialista em programar progressão sem
                    queimar o aluno. Trata-te como adulto — espera o mesmo de ti.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 18 }}>
                    {t.tags.map((tag) => (
                      <span key={tag} className="tag tag-gold">{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <style>{`
            .staff-card:hover { border-color: var(--gold) !important; }
            @media (max-width: 880px) { .staff-grid { grid-template-columns: 1fr !important; } }
          `}</style>
        </div>
      </section>
    </div>
  );
}
