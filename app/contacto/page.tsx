import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { IconWhatsapp, IconPhone, IconIG, IconEmail, IconClock } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Contacto — Rise Fit Club',
  description: 'Entra em contacto com o Rise Fit Club. Respondemos em 24h.',
};

export default function ContactoPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page" style={{ paddingTop: 160, paddingBottom: 60 }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 20 }}>— 07 / Contacto</div>
          <h1 style={{ fontSize: 'clamp(56px,9vw,140px)', maxWidth: '14ch' }}>
            Diz-nos <span className="gold">olá</span>. Respondemos em 24h.
          </h1>
        </div>
      </section>

      <section style={{ paddingBottom: 140 }}>
        <div className="container">
          <div
            style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'start' }}
            className="contact-grid"
          >
            {/* Form card */}
            <div
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                padding: '40px 40px 36px',
              }}
            >
              <ContactForm />
            </div>

            {/* Sidebar */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {/* WhatsApp */}
              <a
                href="https://wa.me/351963329814"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  gap: 18,
                  padding: '24px 24px',
                  background: '#0f1f15',
                  border: '1px solid #1a3324',
                  alignItems: 'center',
                  transition: 'transform .15s',
                  textDecoration: 'none',
                }}
                className="wa-btn"
              >
                <div style={{ color: '#25D366' }}>
                  <IconWhatsapp />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--head-font)',
                      fontWeight: 800,
                      fontSize: 18,
                      textTransform: 'uppercase',
                      letterSpacing: '.03em',
                    }}
                  >
                    WhatsApp direto
                  </div>
                  <div className="muted" style={{ fontSize: 13, marginTop: 4 }}>
                    +351 963 329 814 · Resposta em minutos
                  </div>
                </div>
              </a>

              {/* Other channels */}
              <div
                style={{
                  padding: '24px 24px',
                  background: 'var(--surface)',
                  border: '1px solid var(--line)',
                }}
              >
                <div className="eyebrow" style={{ marginBottom: 14 }}>— Outras vias</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <IconPhone />
                    <a
                      href="tel:+351963329814"
                      style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--muted)' }}
                    >
                      +351 963 329 814
                    </a>
                  </div>
                  <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <IconEmail />
                    <a
                      href="mailto:risefitclub.almargem@gmail.com"
                      style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--muted)' }}
                    >
                      risefitclub.almargem@gmail.com
                    </a>
                  </div>
                  <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <IconIG />
                    <a
                      href="https://www.instagram.com/rise.fitclub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gold"
                      style={{ fontFamily: 'var(--mono)', fontSize: 14 }}
                    >
                      @rise.fitclub
                    </a>
                  </div>
                </div>
              </div>

            </aside>
          </div>

          <style>{`
            @media (max-width: 980px) {
              .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            }
            .wa-btn:hover { transform: translateY(-2px); }
          `}</style>
        </div>
      </section>
    </div>
  );
}
