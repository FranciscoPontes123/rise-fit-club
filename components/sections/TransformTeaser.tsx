import Link from 'next/link';
import Photo from '@/components/ui/Photo';
import { TRANSFORMATIONS } from '@/data/transformations';
import { IconArrow } from '@/components/icons';

export default function TransformTeaser() {
  return (
    <section className="page" style={{ background: '#0a0a0a' }}>
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
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}
          className="staff-grid"
        >
          {TRANSFORMATIONS.map((t, i) => (
            <article
              key={i}
              style={{ background: 'var(--surface)', border: '1px solid var(--line)' }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                <Photo h={300} label="ANTES" />
                <Photo h={300} label="DEPOIS" />
              </div>
              <div style={{ padding: '24px 22px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--head-font)',
                      fontWeight: 800,
                      fontSize: 22,
                      textTransform: 'uppercase',
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="gold"
                    style={{ fontFamily: 'var(--head-font)', fontWeight: 800, fontSize: 24 }}
                  >
                    {t.weight}
                  </div>
                </div>
                <div
                  className="muted"
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    letterSpacing: '.18em',
                    textTransform: 'uppercase',
                    marginBottom: 14,
                  }}
                >
                  {t.months} meses · Programa PT
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.55, color: '#d0d0d0' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
