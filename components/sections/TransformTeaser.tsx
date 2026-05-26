import Link from 'next/link';
import Photo from '@/components/ui/Photo';
import { TRANSFORMATIONS } from '@/data/transformations';
import { IconArrow } from '@/components/icons';

export default function TransformTeaser() {
  return (
    <section className="page" style={{ background: '#080808' }}>
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
            <div className="eyebrow" style={{ marginBottom: 14 }}>— Resultados reais</div>
            <h2 style={{ fontSize: 'clamp(40px,5vw,68px)' }}>
              Antes & depois.
              <br />
              <span className="gold">Sem filtros.</span>
            </h2>
          </div>
          <Link href="/resultados" className="btn btn-outline-gold">
            Ver histórias <IconArrow rot={-90} />
          </Link>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 2 }}
          className="transform-grid"
        >
          {TRANSFORMATIONS.map((t, i) => (
            <article key={i} style={{ background: '#0f0f0f' }}>
              {/* Before/after split */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1 }}>
                <div style={{ position: 'relative' }}>
                  <Photo h={280} label="ANTES" />
                  <span
                    style={{
                      position: 'absolute',
                      top: 10,
                      left: 10,
                      fontFamily: 'var(--mono)',
                      fontSize: 9,
                      letterSpacing: '.2em',
                      textTransform: 'uppercase',
                      color: '#888',
                      background: 'rgba(0,0,0,.6)',
                      padding: '3px 6px',
                    }}
                  >
                    Antes
                  </span>
                </div>
                <div style={{ position: 'relative' }}>
                  <Photo h={280} label="DEPOIS" />
                  <span
                    style={{
                      position: 'absolute',
                      top: 10,
                      left: 10,
                      fontFamily: 'var(--mono)',
                      fontSize: 9,
                      letterSpacing: '.2em',
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      background: 'rgba(0,0,0,.6)',
                      padding: '3px 6px',
                    }}
                  >
                    Depois
                  </span>
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '20px 20px 22px', borderTop: '1px solid #1a1a1a' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--head-font)',
                      fontWeight: 800,
                      fontSize: 20,
                      textTransform: 'uppercase',
                      letterSpacing: '.02em',
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="gold"
                    style={{ fontFamily: 'var(--head-font)', fontWeight: 900, fontSize: 22 }}
                  >
                    {t.weight}
                  </div>
                </div>
                <div
                  className="muted"
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 10,
                    letterSpacing: '.18em',
                    textTransform: 'uppercase',
                    marginBottom: 12,
                  }}
                >
                  {t.months} meses · Programa PT
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.55, color: '#888' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`@media (max-width: 900px) { .transform-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
