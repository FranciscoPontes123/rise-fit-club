import Link from 'next/link';
import Image from 'next/image';
import { IconArrow } from '@/components/icons';
import Aurora from '@/components/ui/Aurora';
import Magnet from '@/components/ui/Magnet';


const LINES = [
  { text: 'ELEVA O TEU', delay: 80 },
  { text: 'NÍVEL', delay: 200, gold: true },
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
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
            <div>
              <div style={{ overflow: 'hidden' }}>
                {LINES.map((line, i) => (
                  <div
                    key={i}
                    className="hero-line"
                    style={{
                      fontFamily: 'var(--head-font)',
                      fontWeight: 900,
                      fontSize: 'clamp(64px,11vw,180px)',
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
              <p
                className="hero-sub"
                style={{
                  fontFamily: 'var(--body-font)',
                  fontSize: 'clamp(15px,1.4vw,20px)',
                  color: '#888',
                  marginTop: 28,
                  letterSpacing: '.04em',
                }}
              >
                A tua transformação começa agora.
              </p>
            </div>
            <div className="hero-logo-big" aria-hidden>
              <Magnet strength={0.18}>
                <Image
                  src="/Logos/Logo Transparente.png"
                  alt=""
                  width={400}
                  height={400}
                  className="hero-logo-img"
                  style={{ objectFit: 'contain', width: 'clamp(220px,24vw,400px)', height: 'auto' }}
                />
              </Magnet>
            </div>
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
              gridTemplateColumns: '1.4fr 0.9fr',
              gap: 40,
              alignItems: 'end',
            }}
          >
            {/* Paragraph */}
            <p
              style={{
                fontSize: 'clamp(17px,1.8vw,24px)',
                lineHeight: 1.65,
                color: '#909090',
                margin: 0,
                fontFamily: 'var(--body-font)',
              }}
            >
              Um espaço com acompanhamento constante, onde nunca te irás sentir sozinho.
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
        @keyframes logo-enter {
          from { opacity: 0; transform: translateY(32px) scale(0.88); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        @keyframes logo-float {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-14px); }
        }
        .hero-logo-img {
          animation:
            logo-enter 1.1s cubic-bezier(.16,1,.3,1) 0.35s both,
            logo-float 5s ease-in-out 1.5s infinite;
          filter: drop-shadow(0 0 40px rgba(251,204,31,.18));
        }
        @media (max-width: 640px) {
          .hero-bottom { grid-template-columns: 1fr !important; }
          .hero-bottom > div:last-child { grid-column: auto !important; }
          .hero-side { display: none; }
          .hero-logo-big { display: none; }
        }
      `}</style>
    </section>
  );
}
