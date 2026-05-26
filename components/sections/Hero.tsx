import Link from 'next/link';
import { IconArrow } from '@/components/icons';
import Aurora from '@/components/ui/Aurora';
import CountUp from '@/components/ui/CountUp';
import Magnet from '@/components/ui/Magnet';

const STATS = [
  { display: '24/7', countTo: null,  suffix: '',  v: 'Acesso por app Danalock' },
  { display: '5',    countTo: 5,     suffix: '',  v: 'Modalidades sob o mesmo tecto' },
  { display: '35€',  countTo: 35,    suffix: '€', v: 'Plano de acesso a partir de' },
  { display: '0€',   countTo: null,  suffix: '',  v: 'Sem joia de inscrição' },
];

const WORDS = ['ELEVA', 'O', 'TEU', 'NÍVEL'] as const;

export default function Hero() {
  return (
    <section
      style={{
        padding: 0,
        borderTop: 'none',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, background: '#000' }}>
        <div
          className="ph"
          style={{ height: '100%', border: 'none' }}
          data-label="HERO · GINÁSIO À NOITE · LUZ BAIXA · BARRA OLÍMPICA"
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(60% 80% at 30% 50%, rgba(201,168,76,.10), transparent 60%), linear-gradient(180deg, rgba(0,0,0,.4), rgba(0,0,0,.85) 70%, #0d0d0d 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,.02) 0 1px, transparent 1px 3px)',
              mixBlendMode: 'overlay',
            }}
          />
        </div>
        {/* Aurora glow layer */}
        <Aurora />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: 140, paddingBottom: 80, width: '100%' }}>
        {/* Meta line */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 48,
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <div className="eyebrow">— Almargem do Bispo · Sintra</div>
          <div className="eyebrow" style={{ color: '#A0A0A0' }}>Est. — Underground Gym · Não é uma cadeia</div>
        </div>

        {/* H1 with word-by-word blur reveal */}
        <h1 style={{ fontSize: 'clamp(64px,12vw,200px)', lineHeight: 0.86, maxWidth: '13ch' }}>
          {WORDS.map((w, i) => (
            <span
              key={i}
              className="hero-word"
              style={{
                display: 'inline-block',
                marginRight: '.2em',
                color: i === 1 ? 'var(--gold)' : '#fff',
                animationDelay: `${i * 110 + 150}ms`,
              }}
            >
              {w}
            </span>
          ))}
        </h1>

        {/* Grid */}
        <div
          style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48, marginTop: 48, alignItems: 'end' }}
          className="hero-grid"
        >
          <p style={{ fontSize: 'clamp(16px,1.6vw,20px)', lineHeight: 1.5, maxWidth: 560, color: '#d9d9d9' }}>
            Treino real, equipa real, sem teatro. Treino livre, personalizado, aulas
            de grupo, pilates clínico e jiu jitsu — tudo isto aqui, no Rise Fit Club.
          </p>
          <div
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'flex-end' }}
            className="hero-cta"
          >
            <Magnet>
              <Link href="/planos" className="btn btn-gold">
                Ver Planos <IconArrow rot={-90} />
              </Link>
            </Magnet>
            <Magnet>
              <Link href="/contacto" className="btn btn-ghost">
                Quero ser contactado
              </Link>
            </Magnet>
          </div>
        </div>

        {/* Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            marginTop: 80,
            borderTop: '1px solid #2a2a2a',
            borderBottom: '1px solid #2a2a2a',
          }}
          className="hero-stats"
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              style={{
                padding: '24px 20px',
                borderLeft: i === 0 ? 'none' : '1px solid #2a2a2a',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--head-font)',
                  fontWeight: 900,
                  fontSize: 42,
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
                  fontSize: 12,
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  marginTop: 8,
                  fontFamily: 'var(--mono)',
                }}
              >
                {s.v}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side rotated label */}
      <div
        className="hero-side"
        style={{
          position: 'absolute',
          right: -20,
          top: '40%',
          transform: 'rotate(90deg)',
          transformOrigin: 'right top',
          fontFamily: 'var(--mono)',
          color: '#444',
          fontSize: 11,
          letterSpacing: '.4em',
          textTransform: 'uppercase',
          display: 'flex',
          gap: 24,
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
        @keyframes word-reveal {
          from { opacity: 0; filter: blur(14px); transform: translateY(10px); }
          to   { opacity: 1; filter: blur(0px);  transform: translateY(0); }
        }
        .hero-word {
          opacity: 0;
          animation: word-reveal 700ms cubic-bezier(.22,1,.36,1) both;
        }
        @media (max-width: 880px) {
          .hero-grid  { grid-template-columns: 1fr !important; }
          .hero-cta   { justify-content: flex-start !important; }
          .hero-stats { grid-template-columns: repeat(2,1fr) !important; }
          .hero-stats > div:nth-child(3) { border-left: none !important; border-top: 1px solid #2a2a2a; }
          .hero-stats > div:nth-child(4) { border-top: 1px solid #2a2a2a; }
          .hero-side  { display: none; }
        }
      `}</style>
    </section>
  );
}
