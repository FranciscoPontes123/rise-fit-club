import type { Metadata } from 'next';
import Link from 'next/link';
import { PLANS } from '@/data/plans';
import { IconCheck, IconClock, IconArrow, IconPerson, IconGroup } from '@/components/icons';
import Magnet from '@/components/ui/Magnet';
import SpotlightCard from '@/components/ui/SpotlightCard';

export const metadata: Metadata = {
  title: 'Planos — Rise Fit Club',
  description: 'Planos de acesso ao Rise Fit Club a partir de 27€/mês. Sem contratos, sem letras pequenas.',
};

const EXTRA_SERVICES = [
  {
    icon: <IconPerson />,
    name: 'Treino Individual',
    sub: 'PT 1-on-1',
    desc: 'Programa completamente personalizado com um coach dedicado. Progressão semanal, ajuste de carga e acompanhamento contínuo.',
    perk: 'Inclui Aconselhamento Nutricional',
  },
  {
    icon: <IconGroup />,
    name: 'Treino Duo',
    sub: '2 pessoas · 1 coach',
    desc: 'Treina em par com um amigo ou parceiro. A mesma qualidade do PT individual, a um custo mais acessível para dois.',
    perk: 'Inclui Aconselhamento Nutricional',
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
    perk: 'Inclui Aconselhamento Nutricional',
  },
  {
    icon: <IconGroup />,
    name: 'Small Group Training',
    sub: 'Grupos reduzidos · Custo partilhado',
    desc: 'Treino em grupo pequeno com atenção individualizada. A intensidade do PT, com o custo dividido por todos.',
  },
  {
    icon: <IconPerson />,
    name: 'Acompanhamento em Sala',
    sub: 'Rota personalizada · Em piso',
    desc: 'O coach acompanha-te durante o teu treino livre, corrige a técnica, ajusta cargas e guia cada exercício no momento.',
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
            Sem contratos abusivos. Sem letras pequenas. Cancela a qualquer
            momento. Tudo o que pagas, está visível em baixo.
          </p>
        </div>
      </section>

      {/* 1 — Serviços de acompanhamento */}
      <section className="page" style={{ background: '#0e0c09', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 14 }}>— Treino Personalizado</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(48px,7vw,110px)', lineHeight: 0.9 }}>
              Treino <span className="gold">à medida</span>.
            </h2>
            <p className="muted" style={{ fontSize: 16, maxWidth: 400, lineHeight: 1.6 }}>
              Resultados mais rápidos com um coach dedicado. Programa feito para o teu corpo, os teus objetivos e o teu ritmo.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 0, border: '1px solid var(--line)' }} className="pt-grid">
            {EXTRA_SERVICES.map((s, i) => (
              <div key={i} style={{
                padding: '36px 32px',
                borderLeft: i % 3 === 0 ? 'none' : '1px solid var(--line)',
                borderTop: i >= 3 ? '1px solid var(--line)' : 'none',
                background: 'var(--surface)',
                display: 'flex', flexDirection: 'column', gap: 16,
              }}>
                {s.icon}
                <div>
                  <div style={{ fontFamily: 'var(--head-font)', fontWeight: 800, fontSize: 24, textTransform: 'uppercase' }}>{s.name}</div>
                  <div className="muted" style={{ fontSize: 12, letterSpacing: '.18em', textTransform: 'uppercase', marginTop: 4, fontFamily: 'var(--mono)' }}>{s.sub}</div>
                </div>
                <p className="muted" style={{ fontSize: 14, lineHeight: 1.55 }}>{s.desc}</p>
                {'perk' in s && (
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                    fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.16em',
                    textTransform: 'uppercase', color: 'var(--gold)',
                    borderTop: '1px solid #2a2a2a', paddingTop: 14,
                  }}>
                    <IconCheck /> {s.perk}
                  </div>
                )}
                <Link href="/contacto" className="btn btn-outline-gold" style={{ marginTop: 'auto', justifyContent: 'center' }}>
                  Saber mais <IconArrow rot={-90} />
                </Link>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 880px) { .pt-grid { grid-template-columns: 1fr 1fr !important; } .pt-grid > div { border-left: none !important; border-top: 1px solid var(--line) !important; } .pt-grid > div:first-child, .pt-grid > div:nth-child(2) { border-top: none !important; } }
            @media (max-width: 560px) { .pt-grid { grid-template-columns: 1fr !important; } .pt-grid > div:nth-child(2) { border-top: 1px solid var(--line) !important; } }
          `}</style>
        </div>
      </section>

      {/* 2 — Pack Verão destaque */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1200 0%, #0d0d0d 60%)',
        borderTop: '2px solid var(--gold)',
        borderBottom: '1px solid #2a2000',
        padding: '72px 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div aria-hidden style={{
          position: 'absolute', right: -20, top: '50%', transform: 'translateY(-50%)',
          fontFamily: 'var(--head-font)', fontWeight: 900, fontSize: 'clamp(120px,18vw,260px)',
          color: 'transparent', WebkitTextStroke: '1px #1e1500', lineHeight: 1,
          pointerEvents: 'none', userSelect: 'none',
        }}>VERÃO</div>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40, flexWrap: 'wrap' }}>
            <span style={{
              background: 'var(--gold)', color: '#0d0d0d',
              fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.22em',
              textTransform: 'uppercase', padding: '5px 14px', fontWeight: 700,
            }}>★ Edição Limitada</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.16em', color: '#666', textTransform: 'uppercase' }}>
              — Campanha de Verão · Pack Mensal 35€
            </span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="campaign-grid">
            <div>
              <h2 style={{ fontSize: 'clamp(40px,6vw,88px)', lineHeight: 0.9, marginBottom: 24 }}>
                Pack <span className="gold">Verão</span>.
              </h2>
              {/* A oferta */}
              <div style={{
                padding: '24px 28px',
                background: 'rgba(201,168,76,.08)',
                border: '1px solid rgba(201,168,76,.3)',
                marginBottom: 28,
              }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 10 }}>A oferta</div>
                <div style={{ fontFamily: 'var(--head-font)', fontWeight: 900, fontSize: 'clamp(20px,2.5vw,30px)', lineHeight: 1.15 }}>
                  Paga Junho e Julho —<br />
                  <span className="gold">Agosto fica grátis.</span>
                </div>
              </div>
              <p className="muted" style={{ fontSize: 15, lineHeight: 1.6, maxWidth: 380, marginBottom: 32 }}>
                Sem restrição de horário. Edição limitada, disponível por tempo limitado.
              </p>
              <Magnet>
                <Link href="/contacto?plano=verao" className="btn btn-gold" style={{ fontSize: 17, padding: '18px 36px' }}>
                  Quero o Pack Verão <IconArrow rot={-90} />
                </Link>
              </Magnet>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8 }}>
                <span style={{ fontFamily: 'var(--head-font)', fontWeight: 900, fontSize: 'clamp(80px,10vw,130px)', lineHeight: 0.85, color: 'var(--gold)' }}>35</span>
                <div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 18, color: '#ccc' }}>€ / mês</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.18em', color: '#666', textTransform: 'uppercase', marginTop: 4 }}>Sem fidelização</div>
                </div>
              </div>
              {['Sem restrição de horário', 'Avaliação Física Premium', 'Plano de Treino Individual', 'Aconselhamento Nutricional'].map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center', fontSize: 15, color: '#d0d0d0' }}>
                  <IconCheck /> {p}
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media (max-width: 760px) { .campaign-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
      </section>

      {/* 3 — Grelha 3 packs */}
      <section className="page">
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 14 }}>— Planos de Acesso</div>
          <h2 style={{ fontSize: 'clamp(40px,5vw,72px)', marginBottom: 48 }}>
            Escolhe o teu <span className="gold">plano</span>.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, alignItems: 'stretch' }} className="plan-grid">
            {PLANS.map((p) => (
              <SpotlightCard
                key={p.id}
                spotlightColor={p.featured ? 'rgba(201,168,76,0.16)' : 'rgba(201,168,76,0.07)'}
                style={{
                  position: 'relative',
                  background: p.featured ? '#181410' : 'var(--surface)',
                  border: p.featured ? '2px solid var(--gold)' : '1px solid var(--line)',
                  padding: '40px 32px 32px',
                  display: 'flex', flexDirection: 'column', gap: 24,
                  transform: 'none',
                  boxShadow: p.featured ? '0 0 0 0 transparent' : 'none',
                }}
              >
                {p.campaign && (
                  <div style={{
                    position: 'absolute', top: -1, left: 20,
                    background: 'var(--gold)', color: '#0d0d0d',
                    fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.22em',
                    textTransform: 'uppercase', padding: '4px 12px', fontWeight: 700,
                  }}>★ Edição Limitada</div>
                )}
                <div>
                  <div className="muted" style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.2em', textTransform: 'uppercase' }}>
                    {p.kicker}
                  </div>
                  <div style={{ fontFamily: 'var(--head-font)', fontWeight: 900, fontSize: 36, textTransform: 'uppercase', lineHeight: 1, marginTop: 6 }}>
                    {p.name}
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                  <span className="muted" style={{ fontSize: 16 }}>€</span>
                  <span style={{
                    fontFamily: 'var(--head-font)', fontWeight: 900,
                    fontSize: 80, lineHeight: 0.9,
                    color: p.featured ? 'var(--gold)' : '#fff',
                  }}>{p.price}</span>
                  <span className="muted" style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase' }}>/ mês</span>
                </div>

                <div style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '12px 14px', background: p.featured ? 'rgba(201,168,76,.08)' : '#111', border: '1px solid var(--line)' }}>
                  <IconClock />
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: p.featured ? 'var(--gold)' : '#888' }}>{p.access}</span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {p.perks.map((perk, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, fontSize: 14, color: '#d0d0d0' }}>
                      <IconCheck /> <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <Magnet style={{ marginTop: 'auto' }}>
                  <Link href={`/contacto?plano=${p.id}`} className={p.featured ? 'btn btn-gold' : 'btn btn-outline-gold'} style={{ justifyContent: 'center', width: '100%' }}>
                    Quero este plano <IconArrow rot={-90} />
                  </Link>
                </Magnet>
              </SpotlightCard>
            ))}
          </div>


          <style>{`
            @media (max-width: 980px) {
              .plan-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
              .plan-grid > * { transform: none !important; }
            }
          `}</style>
        </div>
      </section>
    </div>
  );
}
