import type { Metadata } from 'next';
import Link from 'next/link';
import { PLANS } from '@/data/plans';
import { IconCheck, IconDash, IconClock, IconArrow, IconPerson, IconGroup } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Planos — Rise Fit Club',
  description: 'Planos de acesso ao Rise Fit Club a partir de 35€/mês. Sem contratos, sem joias.',
};

const EXTRA_SERVICES = [
  {
    icon: <IconPerson />,
    name: 'Treino Individual',
    sub: 'PT 1-on-1',
    desc: 'Programa completamente personalizado com um coach dedicado. Progressão semanal, ajuste de carga e acompanhamento contínuo.',
  },
  {
    icon: <IconGroup />,
    name: 'Treino Duo',
    sub: '2 pessoas · 1 coach',
    desc: 'Treina em par com um amigo ou parceiro. A mesma qualidade do PT individual, a um custo mais acessível para dois.',
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="ico">
        <rect x="4" y="6" width="24" height="18" rx="2" />
        <path d="M10 24l6 3 6-3" />
        <path d="M12 14l4 4 4-4" />
      </svg>
    ),
    name: 'Acompanhamento Online',
    sub: 'Remoto · Flexível',
    desc: 'Coaching à distância com programa personalizado, check-ins semanais e ajustes em tempo real.',
  },
];

export default function PlanosPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page" style={{ paddingTop: 160, paddingBottom: 60 }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 20 }}>— 05 / Planos</div>
          <h1 style={{ fontSize: 'clamp(56px,9vw,140px)', maxWidth: '14ch' }}>
            Escolhe o teu <span className="gold">acesso</span>.
          </h1>
          <p className="muted" style={{ fontSize: 18, maxWidth: 640, marginTop: 24, lineHeight: 1.6 }}>
            Sem contratos abusivos. Sem joias. Sem letras pequenas. Cancela a qualquer
            momento. Tudo o que pagas, está visível em baixo.
          </p>
        </div>
      </section>

      {/* Treino à medida — first */}
      <section
        className="page"
        style={{
          background: '#0e0c09',
          borderTop: '2px solid var(--gold)',
        }}
      >
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 14 }}>— Treino Personalizado</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(48px,7vw,110px)', lineHeight: 0.9 }}>
              Treino <span className="gold">à medida</span>.
            </h2>
            <p className="muted" style={{ fontSize: 16, maxWidth: 400, lineHeight: 1.6 }}>
              Resultados mais rápidos com um coach dedicado. Programa feito para o
              teu corpo, os teus objetivos e o teu ritmo.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 0,
              border: '1px solid var(--line)',
            }}
            className="svc-grid"
          >
            {EXTRA_SERVICES.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: '36px 32px',
                  borderLeft: i === 0 ? 'none' : '1px solid var(--line)',
                  background: 'var(--surface)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
              >
                {s.icon}
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--head-font)',
                      fontWeight: 800,
                      fontSize: 24,
                      textTransform: 'uppercase',
                    }}
                  >
                    {s.name}
                  </div>
                  <div
                    className="muted"
                    style={{ fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', marginTop: 4, fontFamily: 'var(--mono)' }}
                  >
                    {s.sub}
                  </div>
                </div>
                <p className="muted" style={{ fontSize: 14, lineHeight: 1.55 }}>{s.desc}</p>
                <Link href="/contacto" className="btn btn-outline-gold" style={{ marginTop: 'auto', justifyContent: 'center' }}>
                  Saber mais <IconArrow rot={-90} />
                </Link>
              </div>
            ))}
          </div>
          <style>{`@media (max-width: 760px) { .svc-grid { grid-template-columns: 1fr !important; } .svc-grid > div { border-left: none !important; border-top: 1px solid var(--line); } .svc-grid > div:first-child { border-top: none; } }`}</style>
        </div>
      </section>

      {/* Plans — after treino à medida */}
      <section className="page">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 14 }}>— Planos de Acesso</div>
          <h2 style={{ fontSize: 'clamp(40px,5vw,72px)', marginBottom: 48 }}>
            Acesso ao <span className="gold">ginásio</span>.
          </h2>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, alignItems: 'stretch' }}
            className="plan-grid"
          >
            {PLANS.map((p) => (
              <article
                key={p.id}
                style={{
                  position: 'relative',
                  background: p.featured ? '#181410' : 'var(--surface)',
                  border: p.featured ? '2px solid var(--gold)' : '1px solid var(--line)',
                  padding: '40px 32px 32px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 24,
                  transform: p.featured ? 'translateY(-12px)' : 'none',
                  boxShadow: p.featured ? '0 30px 80px -30px rgba(201,168,76,.35)' : 'none',
                }}
              >

                <div>
                  <div
                    className="muted"
                    style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase' }}
                  >
                    {p.kicker}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--head-font)',
                      fontWeight: 900,
                      fontSize: 48,
                      textTransform: 'uppercase',
                      lineHeight: 1,
                      marginTop: 6,
                    }}
                  >
                    {p.name}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                  <span className="muted" style={{ fontSize: 18 }}>€</span>
                  <span
                    style={{
                      fontFamily: 'var(--head-font)',
                      fontWeight: 900,
                      fontSize: 88,
                      lineHeight: 0.9,
                      color: p.featured ? 'var(--gold)' : '#fff',
                    }}
                  >
                    {p.price}
                  </span>
                  <span
                    className="muted"
                    style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '.16em', textTransform: 'uppercase' }}
                  >
                    / mês
                  </span>
                </div>

                <div>
                  <div className="eyebrow" style={{ marginBottom: 10 }}>— Horário de acesso</div>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 8,
                      fontFamily: 'var(--mono)',
                      fontSize: 13,
                    }}
                  >
                    {p.hours.map((h, j) => (
                      <li key={j} style={{ color: j === 2 ? 'var(--muted)' : '#fff' }}>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ borderTop: '1px solid var(--line)', paddingTop: 18 }}>
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 12,
                    }}
                  >
                    {p.perks.map((perk, j) => (
                      <li
                        key={j}
                        style={{
                          display: 'flex',
                          gap: 10,
                          fontSize: 14,
                          color: perk.y ? '#fff' : '#5a5a5a',
                          textDecoration: perk.y ? 'none' : 'line-through',
                        }}
                      >
                        {perk.y ? <IconCheck /> : <IconDash />}
                        <span>{perk.t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contacto"
                  className="btn btn-gold"
                  style={{ justifyContent: 'center', marginTop: 'auto', textAlign: 'center' }}
                >
                  Quero o plano {p.name}
                </Link>
              </article>
            ))}
          </div>

          {/* Danalock strip */}
          <div
            style={{
              marginTop: 48,
              padding: '24px 28px',
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              display: 'flex',
              gap: 18,
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <IconClock />
            <div style={{ fontSize: 14, color: '#d0d0d0', lineHeight: 1.5, flex: 1, minWidth: 280 }}>
              Todos os planos incluem{' '}
              <span className="gold">acesso por app Danalock</span> — sem chaves, sem
              cartões. Cancelas com 30 dias de aviso, sem fidelização anual.
            </div>
            <Link href="/faq" className="btn btn-outline-gold">
              Ver FAQ <IconArrow rot={-90} />
            </Link>
          </div>

          <style>{`
            @media (max-width: 980px) {
              .plan-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
              .plan-grid > article { transform: none !important; }
            }
          `}</style>
        </div>
      </section>
    </div>
  );
}
