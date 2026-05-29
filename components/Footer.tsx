import Link from 'next/link';
import RiseLogo from './RiseLogo';
import { IconPhone, IconIG, IconEmail } from './icons';

const NAV_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/espaco', label: 'Espaço' },
  { href: '/planos', label: 'Planos' },
  { href: '/aulas', label: 'Aulas de Grupo' },
  { href: '/staff', label: 'Staff' },
  { href: '/resultados', label: 'Resultados' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/faq', label: 'FAQ' },
  { href: '/recrutamento', label: 'Recrutamento' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#060606',
        borderTop: '2px solid var(--gold)',
        paddingTop: 80,
        paddingBottom: 0,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Watermark */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: -20,
          right: -10,
          fontFamily: 'var(--head-font)',
          fontWeight: 900,
          fontSize: 'clamp(140px, 22vw, 300px)',
          color: 'transparent',
          WebkitTextStroke: '1px #141414',
          lineHeight: 0.85,
          letterSpacing: '-.02em',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        RISE
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.4fr', gap: 48 }}
          className="foot-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <RiseLogo size={52} />
              <span
                style={{
                  fontFamily: 'var(--head-font)',
                  fontWeight: 900,
                  letterSpacing: '.18em',
                  fontSize: 15,
                  color: '#f0ece4',
                  lineHeight: 1,
                }}
              >
                RISE FIT CLUB
              </span>
            </div>
            <p
              style={{
                maxWidth: 300,
                lineHeight: 1.6,
                fontSize: 14,
                color: '#666',
                fontFamily: 'var(--body-font)',
              }}
            >
              Centro de treino feito para todos. Se queres liberdade, o Rise é para ti. Se queres acompanhamento, o Rise é para ti.
            </p>
          </div>

          {/* Navegar */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>— Navegar</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 11,
                      letterSpacing: '.12em',
                      textTransform: 'uppercase',
                      color: '#555',
                      transition: 'color .15s',
                    }}
                    className="foot-link"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Modalidades */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>— Modalidades</div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: '#555',
              }}
            >
              <li>Avaliação Premium Gratuita</li>
              <li>Treino Livre</li>
              <li>Treino Personalizado</li>
              <li>Small Group Training</li>
              <li>Aulas de Grupo</li>
              <li>Método Neurofuncional</li>
              <li>Preparação de Atletas</li>
              <li>Jiu-Jitsu</li>
              <li>Ginástica Sénior</li>
              <li>Acompanhamento Online</li>
              <li>Preparação de Atletas</li>
              <li>Defesa Pessoal / Boxe</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 20 }}>— Contacto</div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
                fontFamily: 'var(--mono)',
                fontSize: 12,
                lineHeight: 1.55,
              }}
            >
              <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <IconPhone />
                <a
                  href="https://wa.me/351963329814"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#666', fontSize: 12 }}
                >
                  +351 963 329 814
                </a>
              </li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <IconEmail />
                <a
                  href="mailto:risefitclub.almargem@gmail.com"
                  style={{ color: '#666', fontSize: 12 }}
                >
                  risefitclub.almargem@gmail.com
                </a>
              </li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <IconIG />
                <a
                  href="https://www.instagram.com/rise.fitclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold"
                  style={{ fontSize: 12 }}
                >
                  @rise.fitclub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          style={{
            marginTop: 72,
            paddingTop: 20,
            paddingBottom: 24,
            borderTop: '1px solid #141414',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 10,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: '#333',
            }}
          >
            © 2026 Rise Fit Club · Almargem do Bispo, Sintra · PT
          </div>
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 10,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: '#333',
            }}
          >
            Privacidade · Termos · Cookies
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .foot-grid { grid-template-columns: 1fr 1fr !important; gap: 36px !important; }
        }
        @media (max-width: 560px) {
          .foot-grid { grid-template-columns: 1fr !important; }
        }
        .foot-link:hover { color: var(--gold) !important; }
      `}</style>
    </footer>
  );
}
