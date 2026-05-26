import type { Metadata } from 'next';
import Link from 'next/link';
import Photo from '@/components/ui/Photo';
import { TRANSFORMATIONS } from '@/data/transformations';
import { IconArrow } from '@/components/icons';
import ReviewForm from '@/components/ReviewForm';

export const metadata: Metadata = {
  title: 'Resultados — Rise Fit Club',
  description: 'Histórias reais de transformação de membros do Rise Fit Club. Sem antes-e-depois falsos.',
};

export default function ResultadosPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page" style={{ paddingTop: 160 }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 20 }}>— 04 / Resultados & Feedback</div>
          <h1 style={{ fontSize: 'clamp(56px,9vw,140px)', maxWidth: '14ch' }}>
            Resultados dos nossos <span className="gold">membros</span>.
          </h1>
        </div>
      </section>

      {/* Transformation rows */}
      <section style={{ paddingBottom: 60 }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            {TRANSFORMATIONS.map((t, i) => (
              <article
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1.2fr',
                  gap: 0,
                  border: '1px solid var(--line)',
                  background: 'var(--surface)',
                }}
                className="trans-row"
              >
                <Photo h={420} label={`ANTES · ${t.name.toUpperCase()}`} />
                <Photo h={420} label={`DEPOIS · ${t.months} MESES`} />
                <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      letterSpacing: '.2em',
                      color: 'var(--gold)',
                      textTransform: 'uppercase',
                    }}
                  >
                    0{i + 1} · Programa PT
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--head-font)',
                      fontWeight: 800,
                      fontSize: 40,
                      textTransform: 'uppercase',
                      lineHeight: 0.9,
                    }}
                  >
                    {t.name}
                  </div>
                  <div style={{ display: 'flex', gap: 24, marginTop: 6 }}>
                    <div>
                      <div
                        className="muted"
                        style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase' }}
                      >
                        Resultado
                      </div>
                      <div
                        className="gold"
                        style={{ fontFamily: 'var(--head-font)', fontWeight: 800, fontSize: 32, marginTop: 4 }}
                      >
                        {t.weight}
                      </div>
                    </div>
                    <div>
                      <div
                        className="muted"
                        style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase' }}
                      >
                        Duração
                      </div>
                      <div
                        className="gold"
                        style={{ fontFamily: 'var(--head-font)', fontWeight: 800, fontSize: 32, marginTop: 4 }}
                      >
                        {t.months} M
                      </div>
                    </div>
                  </div>
                  <p style={{ fontSize: 16, lineHeight: 1.55, marginTop: 10, color: '#d9d9d9' }}>
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 980px) {
            .trans-row { grid-template-columns: 1fr 1fr !important; }
            .trans-row > div:last-child { grid-column: span 2 !important; }
          }
          @media (max-width: 560px) {
            .trans-row { grid-template-columns: 1fr !important; }
            .trans-row > div:last-child { grid-column: span 1 !important; }
          }
        `}</style>
      </section>

      {/* Leave a review */}
      <section className="page">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 0,
              border: '1px solid var(--line)',
            }}
            className="review-cta-grid"
          >
            {/* Left — inline review form */}
            <div
              style={{
                padding: '52px 48px',
                background: '#0e0c09',
                borderRight: '1px solid var(--line)',
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
              }}
            >
              <div>
                <div className="eyebrow" style={{ marginBottom: 14 }}>— Feedback</div>
                <h2 style={{ fontSize: 'clamp(32px,3.5vw,52px)', lineHeight: 0.95 }}>
                  Já treinaste no Rise?<br />
                  <span className="gold">Deixa a tua review.</span>
                </h2>
              </div>
              <ReviewForm />
            </div>

            {/* Right — start your journey CTA */}
            <div
              style={{
                padding: '60px 52px',
                background: 'var(--surface)',
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
                justifyContent: 'center',
              }}
            >
              <div className="eyebrow">— Ainda não és membro?</div>
              <h2 style={{ fontSize: 'clamp(36px,4vw,60px)', lineHeight: 0.95 }}>
                Começa a tua<br />
                <span className="gold">transformação</span>.
              </h2>
              <p className="muted" style={{ fontSize: 15, lineHeight: 1.6, maxWidth: 360 }}>
                Fala connosco — respondemos em menos de 24 horas e ajudamos a escolher
                o plano certo para o teu objetivo.
              </p>
              <Link
                href="/contacto"
                className="btn btn-gold"
                style={{ justifyContent: 'center', marginTop: 8 }}
              >
                Quero começar <IconArrow rot={-90} />
              </Link>
            </div>
          </div>
          <style>{`@media (max-width: 760px) { .review-cta-grid { grid-template-columns: 1fr !important; } .review-cta-grid > div:first-child { border-right: none !important; border-bottom: 1px solid var(--line); } }`}</style>
        </div>
      </section>
    </div>
  );
}
