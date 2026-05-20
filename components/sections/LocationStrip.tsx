import { IconMap, IconClock, IconArrow, IconPhone } from '@/components/icons';

export default function LocationStrip() {
  const mapsUrl =
    'https://maps.google.com/maps?q=Avenida+General+Humberto+Delgado+2A+Almargem+do+Bispo+Sintra&output=embed';

  return (
    <section className="page">
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: 0,
            border: '1px solid var(--line)',
          }}
          className="loc-grid"
        >
          {/* Map */}
          <div style={{ background: '#111', position: 'relative', minHeight: 480 }}>
            <iframe
              src={mapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)', position: 'absolute', inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rise Fit Club — Localização"
            />
          </div>

          {/* Info */}
          <div
            style={{
              padding: '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
              background: 'var(--surface)',
            }}
          >
            <div className="eyebrow">— Encontra-nos</div>
            <h3 style={{ fontSize: 'clamp(32px,4vw,48px)' }}>
              Almargem
              <br />
              do Bispo
            </h3>

            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <IconMap />
              <div>
                <div
                  style={{
                    fontFamily: 'var(--head-font)',
                    fontWeight: 700,
                    letterSpacing: '.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  Av. General Humberto Delgado 2A
                </div>
                <div className="muted" style={{ fontSize: 14, marginTop: 2 }}>
                  Almargem do Bispo, Sintra
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <IconClock />
              <div style={{ fontFamily: 'var(--mono)', fontSize: 13, lineHeight: 1.8 }}>
                <div>
                  <span className="gold">SEG–SEX</span>&nbsp;&nbsp;06:00 — 24:00
                </div>
                <div>
                  <span className="gold">SÁB–DOM</span>&nbsp;&nbsp;07:00 — 22:00
                </div>
                <div
                  className="muted"
                  style={{ marginTop: 6, fontSize: 11, letterSpacing: '.16em' }}
                >
                  ACESSO 24H COM PLANO AVANÇADO
                </div>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                gap: 12,
                marginTop: 'auto',
                flexWrap: 'wrap',
              }}
            >
              <a
                href="https://maps.google.com/maps?q=Avenida+General+Humberto+Delgado+2A+Almargem+do+Bispo+Sintra"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                Como chegar
              </a>
              <a href="tel:+351963329814" className="btn btn-ghost">
                <IconPhone /> +351 963 329 814
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 880px) { .loc-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
