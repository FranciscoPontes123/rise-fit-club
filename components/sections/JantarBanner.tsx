import { IconArrow } from '@/components/icons';

const WA_MSG = encodeURIComponent(
  'Olá! Quero confirmar a minha presença no Jantar de Aniversário do Rise Fit Club — dia 20 de Junho, 19h30, Restaurante Kome e Kala. Por favor indiquem-me como proceder. Obrigado/a!'
);
const WA_LINK = `https://wa.me/351963329814?text=${WA_MSG}`;

export default function JantarBanner() {
  return (
    <section style={{
      borderTop: '1px solid var(--line)',
      borderBottom: '1px solid var(--line)',
      background: '#080808',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Gold side accent */}
      <div style={{
        position: 'absolute',
        left: 0, top: 0, bottom: 0,
        width: 3,
        background: 'var(--gold)',
      }} />

      <div className="container" style={{ padding: '56px 32px' }}>
        <div className="jbanner-inner" style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'center',
          gap: '32px 64px',
        }}>
          {/* Left */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              marginBottom: 20,
            }}>
              <div className="eyebrow" style={{ marginBottom: 0 }}>— 2.º Aniversário</div>
              <div style={{
                fontFamily: 'var(--mono)',
                fontSize: 9,
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: '#0d0d0d',
                background: 'var(--gold)',
                padding: '4px 10px',
                fontWeight: 700,
              }}>
                Confirmações até dia 14
              </div>
            </div>

            <h2 style={{
              fontFamily: 'var(--head-font)',
              fontWeight: 900,
              fontSize: 'clamp(32px,4vw,58px)',
              textTransform: 'uppercase',
              lineHeight: 0.95,
              marginBottom: 20,
            }}>
              Jantar de <span className="gold">Aniversário</span>.
            </h2>

            <p style={{
              fontSize: 15,
              lineHeight: 1.7,
              color: '#888',
              fontFamily: 'var(--body-font)',
              maxWidth: 580,
              marginBottom: 24,
            }}>
              Celebramos o nosso <strong style={{ color: '#ccc' }}>2.º aniversário</strong> e queremos
              partilhá-lo contigo. Uma noite de convívio e celebração reservada para a nossa família Rise —
              podes trazer cônjuge e/ou filhos.
            </p>

            {/* Details row */}
            <div className="jbanner-details" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 32px' }}>
              {[
                { icon: '📅', label: '20 de Junho' },
                { icon: '🕢', label: '19h30' },
                { icon: '📍', label: 'Restaurante Kome e Kala · Albogas' },
                { icon: '🎶', label: 'Após jantar: concerto dos DAMA (Agro Aruil)' },
              ].map(({ icon, label }) => (
                <div key={label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontFamily: 'var(--mono)',
                  fontSize: 11,
                  letterSpacing: '.12em',
                  color: '#aaa',
                }}>
                  <span style={{ fontSize: 13 }}>{icon}</span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* Right CTA */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-end' }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ whiteSpace: 'nowrap' }}
            >
              Confirmar presença <IconArrow rot={-90} />
            </a>
            <div style={{
              fontFamily: 'var(--mono)',
              fontSize: 9,
              letterSpacing: '.16em',
              color: '#444',
              textTransform: 'uppercase',
              textAlign: 'right',
            }}>
              via WhatsApp
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .jbanner-inner { grid-template-columns: 1fr !important; }
          .jbanner-details { gap: 10px 20px !important; }
        }
      `}</style>
    </section>
  );
}
