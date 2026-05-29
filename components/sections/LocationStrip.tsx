import { IconClock, IconPhone, IconIG, IconEmail } from '@/components/icons';

export default function LocationStrip() {
  return (
    <section className="page">
      <div className="container">
        <div
          style={{
            border: '1px solid var(--line)',
            background: 'var(--surface)',
            padding: '52px 56px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 48,
            alignItems: 'start',
          }}
          className="loc-grid"
        >
          {/* Location */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>— Encontra-nos</div>
            <h3 style={{ fontSize: 'clamp(32px,3.5vw,48px)', lineHeight: 1 }}>
              Almargem<br />do Bispo
            </h3>
            <p className="muted" style={{ fontSize: 14, marginTop: 16, lineHeight: 1.6 }}>
              Sintra · Portugal
            </p>
          </div>

          {/* Hours */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>— Horário</div>
            <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <IconClock />
              <div style={{ fontFamily: 'var(--mono)', fontSize: 13, lineHeight: 2 }}>
                <div><span className="gold">SEG — DOM</span></div>
                <div>Horário alargado</div>
                <div className="muted" style={{ fontSize: 11, letterSpacing: '.14em', marginTop: 4 }}>
                  INCLUI FERIADOS
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>— Contacto</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <a
                href="https://wa.me/351963329814"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  fontFamily: 'var(--mono)',
                  fontSize: 14,
                  color: '#ccc',
                  transition: 'color .15s',
                }}
                className="loc-link"
              >
                <IconPhone />
                +351 963 329 814
              </a>
              <a
                href="mailto:risefitclub.almargem@gmail.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  fontFamily: 'var(--mono)',
                  fontSize: 14,
                  color: '#ccc',
                  transition: 'color .15s',
                }}
                className="loc-link"
              >
                <IconEmail />
                risefitclub.almargem@gmail.com
              </a>
              <a
                href="https://www.instagram.com/rise.fitclub"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  fontFamily: 'var(--mono)',
                  fontSize: 14,
                  color: '#ccc',
                  transition: 'color .15s',
                }}
                className="loc-link"
              >
                <IconIG />
                @rise.fitclub
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .loc-link:hover { color: var(--gold) !important; }
        @media (max-width: 880px) { .loc-grid { grid-template-columns: 1fr 1fr !important; padding: 36px 28px !important; gap: 32px !important; } }
        @media (max-width: 560px) { .loc-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
