import Link from 'next/link';
import RiseLogo from './RiseLogo';
import { IconMap, IconPhone, IconIG } from './icons';

const NAV_LINKS = [
  { href: '/', label: 'Início' },
  { href: '/espaco', label: 'Espaço' },
  { href: '/planos', label: 'Planos' },
  { href: '/staff', label: 'Staff' },
  { href: '/resultados', label: 'Resultados' },
  { href: '/contacto', label: 'Contacto' },
  { href: '/faq', label: 'FAQ' },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: '#080808',
        borderTop: '1px solid #1a1a1a',
        paddingTop: 80,
        paddingBottom: 32,
      }}
    >
      <div className="container">
        <div
          style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.4fr', gap: 48 }}
          className="foot-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <RiseLogo size={56} />
              <span
                style={{
                  fontFamily: 'var(--head-font)',
                  fontWeight: 900,
                  letterSpacing: '.06em',
                  fontSize: 22,
                  lineHeight: 1,
                }}
              >
                RISE
                <br />
                <span style={{ color: 'var(--gold)', fontSize: 13, letterSpacing: '.3em' }}>FIT · CLUB</span>
              </span>
            </div>
            <p className="muted" style={{ maxWidth: 320, lineHeight: 1.55, fontSize: 14 }}>
              Ginásio feito para todos. Se queres liberdade, o Rise é para ti.
              Se queres acompanhamento, o Rise é para ti.
            </p>
          </div>

          {/* Navegar */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>— Navegar</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      fontFamily: 'var(--head-font)',
                      fontWeight: 600,
                      letterSpacing: '.06em',
                      textTransform: 'uppercase',
                      fontSize: 14,
                      opacity: 0.85,
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
            <div className="eyebrow" style={{ marginBottom: 18 }}>— Modalidades</div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 10,
                fontSize: 14,
                color: 'var(--muted)',
              }}
            >
              <li>Treino Livre</li>
              <li>Treino Personalizado</li>
              <li>Aulas de Grupo</li>
              <li>Pilates Clínico</li>
              <li>Jiu Jitsu</li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 18 }}>— Contacto</div>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                fontFamily: 'var(--mono)',
                fontSize: 13,
                lineHeight: 1.55,
              }}
            >
              <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <IconMap />
                <span className="muted">
                  Av. General Humberto Delgado 2A<br />
                  Almargem do Bispo, Sintra
                </span>
              </li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <IconPhone />
                <span className="muted">+351 963 329 814</span>
              </li>
              <li style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <IconIG />
                <a
                  href="https://www.instagram.com/rise.fitclub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gold"
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
            paddingTop: 24,
            borderTop: '1px solid #1a1a1a',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div
            className="muted"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
            }}
          >
            © 2026 Rise Fit Club · Almargem do Bispo, Sintra · PT
          </div>
          <div
            className="muted"
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 11,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
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
        .foot-link:hover { color: var(--gold) !important; opacity: 1 !important; }
      `}</style>
    </footer>
  );
}
