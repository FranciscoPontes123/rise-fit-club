import Link from 'next/link';
import { IconArrow } from '@/components/icons';
import Aurora from '@/components/ui/Aurora';
import CountUp from '@/components/ui/CountUp';
import Magnet from '@/components/ui/Magnet';

const STATS = [
  { display: '24/7', countTo: null,  suffix: '',  v: 'Acesso por app' },
  { display: '5',    countTo: 5,     suffix: '',  v: 'Modalidades' },
  { display: '35€',  countTo: 35,    suffix: '€', v: 'A partir de / mês' },
  { display: '0€',   countTo: null,  suffix: '',  v: 'Sem joia' },
];

const LINES = [
  { text: 'ELEVA O', delay: 80 },
  { text: 'TEU', delay: 200 },
  { text: 'NÍVEL', delay: 320, gold: true },
];

export default function Hero() {
  return (
    <section
      style={{
        padding: 0,
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, background: '#050505' }}>
        <div
          className="ph"
          style={{ height: '100%', border: 'none', opacity: 0.35 }}
          data-label="HERO · GINÁSIO À NOITE · LUZ BAIXA · BARRA OLÍMPICA"
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(160deg, rgba(0,0,0,.5) 0%, rgba(0,0,0,.2) 40%, rgba(0,0,0,.85) 100%)',
          }}
        />
        <Aurora />
      </div>

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 2,
          paddingTop: 150,
          paddingBottom: 64,
          width: '100%',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Top meta row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 48,
          }}
        >
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 10,
              color: '#555',
              letterSpacing: '.28em',
              textTransform: 'uppercase',
            }}
          >
            Almargem do Bispo · Sintra
          </span>
          <span
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 10,
              color: '#3a3a3a',
              letterSpacing: '.28em',
              textTransform: 'uppercase',
            }}
          >
            Est. — Underground Gym
          </span>
        </div>

        {/* Headline — clip-path line reveal */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ overflow: 'hidden' }}>
            {LINES.map((line, i) => (
              <div
                key={i}
                className="hero-line"
                style={{
                  fontFamily: 'var(--head-font)',
                  fontWeight: 900,
                  fontSize: 'clamp(72px,13vw,210px)',
                  lineHeight: 0.88,
                  color: line.gold ? 'var(--gold)' : '#fff',
                  textTransform: 'uppercase',
                  letterSpacing: '-.01em',
                  animationDelay: `${line.delay}ms`,
                  display: 'block',
                  willChange: 'clip-path',
                }}
              >
                {line.text}
              </div>
            ))}
          </div>

          {/* Divider */}
          <div
            className="hero-rule"
            style={{
              borderTop: '1px solid #2a2a2a',
              margin: '40px 0 36px',
            }}
          />

          {/* Bottom info strip */}
          <div
            className="hero-bottom"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.4fr 0.9fr 1fr',
              gap: 40,
              alignItems: 'end',
            }}
          >
            {/* Paragraph */}
            <p
              style={{
                fontSize: 'clamp(14px,1.3vw,17px)',
                lineHeight: 1.65,
                color: '#909090',
                margin: 0,
                fontFamily: 'var(--body-font)',
              }}
            >
              Treino real, equipa real, sem teatro. Treino livre,
              personalizado, aulas de grupo, pilates clínico e jiu
              jitsu — tudo isto aqui, no Rise Fit Club.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <Magnet>
                <Link
                  href="/planos"
                  className="btn btn-gold"
                  style={{ justifyContent: 'center', width: '100%' }}
                >
                  Ver Planos <IconArrow rot={-90} />
                </Link>
              </Magnet>
              <Magnet>
                <Link
                  href="/contacto"
                  className="btn btn-ghost"
                  style={{ justifyContent: 'center', width: '100%' }}
                >
                  Quero ser contactado
                </Link>
              </Magnet>
            </div>

            {/* Stats — 2×2 grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 1,
                background: '#1e1e1e',
              }}
            >
              {STATS.map((s, i) => (
                <div
                  key={i}
                  style={{
                    padding: '14px 12px',
                    background: 'var(--bg)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--head-font)',
                      fontWeight: 900,
                      fontSize: 30,
                      color: 'var(--gold)',
                      lineHeight: 1,
                    }}
                  >
                    {s.countTo != null ? (
                      <CountUp to={s.countTo} suffix={s.suffix} duration={1.6} />
                    ) : (
                      s.display
                    )}
                  </div>
                  <div
                    className="muted"
                    style={{
                      fontFamily: 'var(--mono)',
                      fontSize: 9,
                      letterSpacing: '.14em',
                      textTransform: 'uppercase',
                      marginTop: 5,
                    }}
                  >
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Side rotated label */}
      <div
        className="hero-side"
        style={{
          position: 'absolute',
          right: -24,
          top: '38%',
          transform: 'rotate(90deg)',
          transformOrigin: 'right top',
          fontFamily: 'var(--mono)',
          color: '#2e2e2e',
          fontSize: 10,
          letterSpacing: '.4em',
          textTransform: 'uppercase',
          display: 'flex',
          gap: 20,
          whiteSpace: 'nowrap',
        }}
      >
        <span>@rise.fitclub</span>
        <span>·</span>
        <span>Almargem do Bispo</span>
        <span>·</span>
        <span>Sintra · PT</span>
      </div>

      <style>{`
        @keyframes line-reveal {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0% 0 0); }
        }
        .hero-line {
          clip-path: inset(0 100% 0 0);
          animation: line-reveal 0.9s cubic-bezier(.16,1,.3,1) both;
        }
        @media (max-width: 1040px) {
          .hero-bottom { grid-template-columns: 1fr 1fr !important; gap: 24px !important; }
          .hero-bottom > div:last-child { grid-column: 1 / -1; grid-template-columns: repeat(4,1fr) !important; }
        }
        @media (max-width: 640px) {
          .hero-bottom { grid-template-columns: 1fr !important; }
          .hero-bottom > div:last-child { grid-column: auto !important; }
          .hero-side { display: none; }
        }
      `}</style>
    </section>
  );
}
