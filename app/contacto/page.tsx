import type { Metadata } from 'next';
import Image from 'next/image';
import { IconWhatsapp, IconPhone, IconIG, IconEmail, IconArrow } from '@/components/icons';
import Magnet from '@/components/ui/Magnet';

export const metadata: Metadata = {
  title: 'Contacto — Rise Fit Club',
  description: 'Entra em contacto com o Rise Fit Club. Respondemos em 24h.',
};

const WA = 'https://wa.me/351963329814';
const wa = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`;

const QUICK_MESSAGES = [
  {
    label: 'Quero saber mais sobre os planos',
    msg: 'Olá! Gostava de saber mais sobre os planos do Rise Fit Club.',
  },
  {
    label: 'Quero marcar uma visita ao espaço',
    msg: 'Olá! Gostava de marcar uma visita ao Rise Fit Club. Quando seria possível?',
  },
  {
    label: 'Tenho interesse em Treino Personalizado',
    msg: 'Olá! Tenho interesse em Treino Personalizado no Rise Fit Club. Podem dar-me mais informações?',
  },
  {
    label: 'Tenho uma dúvida',
    msg: 'Olá! Tenho uma dúvida sobre o Rise Fit Club. ',
  },
];

export default function ContactoPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page" style={{ paddingTop: 160, paddingBottom: 60 }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>— 07 / Contacto</div>
              <h1 style={{ fontSize: 'clamp(56px,9vw,140px)', maxWidth: '14ch' }}>
                Diz-nos <span className="gold">olá</span>. Respondemos em 24h.
              </h1>
            </div>
            <div className="page-hero-logo" aria-hidden>
              <Magnet strength={0.18}>
                <Image
                  src="/Logo Transparente.png"
                  alt=""
                  width={400}
                  height={400}
                  className="logo-anim"
                  style={{ objectFit: 'contain', width: 'clamp(220px,24vw,400px)', height: 'auto' }}
                />
              </Magnet>
            </div>
          </div>
        </div>
      </section>

      <section style={{ paddingBottom: 140 }}>
        <div className="container">
          {/* Header above grid */}
          <div style={{ marginBottom: 32 }}>
            <div className="eyebrow" style={{ marginBottom: 14 }}>— Fala connosco</div>
            <h2 style={{ fontSize: 'clamp(28px,3vw,44px)', lineHeight: 1, marginBottom: 8 }}>
              Escolhe o assunto<br />e abre o <span className="gold">WhatsApp</span>.
            </h2>
            <p className="muted" style={{ fontSize: 15, lineHeight: 1.6, maxWidth: 440, marginTop: 16 }}>
              Clica na opção que se adequa à tua situação — a mensagem fica já pré-escrita, só tens de enviar.
            </p>
          </div>

          <div
            style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 60, alignItems: 'start' }}
            className="contact-grid"
          >
            {/* WhatsApp quick messages */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {QUICK_MESSAGES.map((q, i) => (
                  <a
                    key={i}
                    href={wa(q.msg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="qm-row"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 16,
                      padding: '20px 24px',
                      background: 'var(--surface)',
                      border: '1px solid var(--line)',
                      textDecoration: 'none',
                      transition: 'border-color .2s, background .2s',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                      <span style={{ color: 'var(--gold)', flexShrink: 0 }}><IconWhatsapp /></span>
                      <span style={{
                        fontFamily: 'var(--head-font)',
                        fontWeight: 800,
                        fontSize: 17,
                        textTransform: 'uppercase',
                        letterSpacing: '.02em',
                        color: '#fff',
                      }}>
                        {q.label}
                      </span>
                    </div>
                    <span style={{ color: 'var(--gold)', flexShrink: 0 }}>
                      <IconArrow rot={-90} />
                    </span>
                  </a>
                ))}
              </div>

              {/* Direct WA button */}
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ justifyContent: 'center', marginTop: 8, fontSize: 16, padding: '16px 32px' }}
              >
                Abrir WhatsApp diretamente <IconArrow rot={-90} />
              </a>
            </div>

            {/* Sidebar */}
            <aside style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {/* Other channels */}
              <div style={{ padding: '24px', background: 'var(--surface)', border: '1px solid var(--line)' }}>
                <div className="eyebrow" style={{ marginBottom: 14 }}>— Outras vias</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <IconPhone />
                    <a href="tel:+351963329814" style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--muted)' }}>
                      +351 963 329 814
                    </a>
                  </div>
                  <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                    <IconEmail />
                    <a href="mailto:risefitclub.almargem@gmail.com" style={{ fontFamily: 'var(--mono)', fontSize: 14, color: 'var(--muted)' }}>
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
            .qm-row:hover { border-color: var(--gold) !important; background: #111 !important; }
          `}</style>
        </div>
      </section>
    </div>
  );
}
