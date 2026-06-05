import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { IconArrow, IconPerson, IconGroup, IconCheck } from '@/components/icons';
import Magnet from '@/components/ui/Magnet';
import PlanosPopup from '@/components/PlanosPopup';

export const metadata: Metadata = {
  title: 'Planos — Rise Fit Club',
  description: 'Planos de acesso ao Rise Fit Club a partir de 27€/mês. Sem contratos, sem letras pequenas.',
};

const WA = 'https://wa.me/351963329814';
const wa = (msg: string) => `${WA}?text=${encodeURIComponent(msg)}`;

const EXTRA_SERVICES = [
  {
    icon: <IconPerson />,
    name: 'Treino Individual',
    sub: 'PT 1-on-1',
    desc: 'Programa completamente personalizado com um coach dedicado. Progressão semanal, ajuste de carga e acompanhamento contínuo.',
    perk: 'Inclui Aconselhamento Nutricional',
    wa: wa('Olá! Tenho interesse no Treino Individual (PT 1-on-1) no Rise Fit Club. Podem dar-me mais informações?'),
  },
  {
    icon: <IconGroup />,
    name: 'Treino Duo',
    sub: '2 pessoas · 1 coach',
    desc: 'Treina em par com um amigo ou parceiro. A mesma qualidade do PT individual, a um custo mais acessível para dois.',
    perk: 'Inclui Aconselhamento Nutricional',
    wa: wa('Olá! Tenho interesse no Treino Duo no Rise Fit Club. Podem dar-me mais informações?'),
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
    wa: wa('Olá! Tenho interesse no Acompanhamento Online do Rise Fit Club. Podem dar-me mais informações?'),
  },
  {
    icon: <IconGroup />,
    name: 'Small Group Training',
    sub: 'Grupos reduzidos · Custo partilhado',
    desc: 'Treino em grupo pequeno com atenção individualizada. A intensidade do PT, com o custo dividido por todos.',
    wa: wa('Olá! Tenho interesse em Small Group Training no Rise Fit Club. Podem dar-me mais informações?'),
  },
  {
    icon: <IconPerson />,
    name: 'Acompanhamento em Sala',
    sub: 'Rota personalizada · Em piso',
    desc: 'O coach acompanha-te durante o teu treino livre, corrige a técnica, ajusta cargas e guia cada exercício no momento.',
    wa: wa('Olá! Tenho interesse no Acompanhamento em Sala no Rise Fit Club. Podem dar-me mais informações?'),
  },
];

export default function PlanosPage() {
  return (
    <div className="page-enter">
      <PlanosPopup />
      {/* Hero */}
      <section className="page" style={{ paddingTop: 160, paddingBottom: 60 }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>— 05 / Planos</div>
              <h1 style={{ fontSize: 'clamp(56px,9vw,140px)', maxWidth: '14ch' }}>
                Escolhe o teu <span className="gold">acesso</span>.
              </h1>
              <p className="muted" style={{ fontSize: 18, maxWidth: 640, marginTop: 24, lineHeight: 1.6 }}>
                Sem fidelização. Treina sempre que fizer sentido para ti.
              </p>
            </div>
            <div className="page-hero-logo" aria-hidden>
              <Magnet strength={0.18}>
                <Image
                  src="/Logos/Logo Transparente.png"
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

      {/* 1 — Serviços de acompanhamento */}
      <section className="page" style={{ borderTop: '1px solid var(--line)' }}>
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
                <a
                  href={s.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-gold"
                  style={{ marginTop: 'auto', justifyContent: 'center' }}
                >
                  Saber mais <IconArrow rot={-90} />
                </a>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 880px) { .pt-grid { grid-template-columns: 1fr 1fr !important; } .pt-grid > div { border-left: none !important; border-top: 1px solid var(--line) !important; } .pt-grid > div:first-child, .pt-grid > div:nth-child(2) { border-top: none !important; } }
            @media (max-width: 560px) { .pt-grid { grid-template-columns: 1fr !important; } .pt-grid > div:nth-child(2) { border-top: 1px solid var(--line) !important; } }
          `}</style>
        </div>
      </section>

      {/* 2 — Packs gallery */}
      <section className="page" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 14 }}>— Os nossos Packs</div>
          <div style={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 24, marginBottom: 56,
          }}>
            <h2 style={{ fontSize: 'clamp(40px,6vw,96px)', lineHeight: 0.9 }}>
              Os nossos <span className="gold">packs</span>.
            </h2>
            <p className="muted" style={{ fontSize: 15, maxWidth: 360, lineHeight: 1.6 }}>
              Cada pack foi pensado para um ritmo de vida diferente.<br />
              Sem contratos, sem letras pequenas.
            </p>
          </div>

          <div className="packs-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 20,
            alignItems: 'start',
          }}>
            {([
              { src: '/Packs/Pack Base.jpeg',                  alt: 'Pack Mensal Base — 35€/mês',           stagger: false, featured: false, wa: wa('Olá! Tenho interesse no Pack Base (35€/mês) do Rise Fit Club. Podem dar-me mais informações?') },
              { src: '/Packs/Pack Hora de Almoço.png',        alt: 'Pack Hora de Almoço — 27€/mês',        stagger: true,  featured: false, wa: wa('Olá! Tenho interesse no Pack Hora de Almoço (27€/mês) do Rise Fit Club. Podem dar-me mais informações?') },
              { src: '/Packs/Pack Treino Personalizado.jpeg',  alt: 'Treino Personalizado — desde 40€/mês', stagger: false, featured: false, wa: wa('Olá! Tenho interesse no Pack de Treino Personalizado do Rise Fit Club. Podem dar-me mais informações?') },
              { src: '/Packs/Pack Campanha Verão.jpeg',        alt: 'Campanha de Verão — Edição Limitada',  stagger: true,  featured: true,  wa: wa('Olá! Vi a Campanha de Verão do Rise Fit Club e gostava de saber mais!') },
            ] as const).map((pack, i) => (
              <a
                key={i}
                href={pack.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="pack-card"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  border: pack.featured ? '2px solid var(--gold)' : '1px solid rgba(255,255,255,0.08)',
                  marginTop: pack.stagger ? 40 : 0,
                  background: '#0d0d0d',
                  display: 'block',
                  textDecoration: 'none',
                }}
              >
                {pack.featured && (
                  <div style={{
                    position: 'absolute', top: 14, left: 0, zIndex: 10,
                    background: 'var(--gold)', color: '#0d0d0d',
                    fontFamily: 'var(--mono)', fontSize: 9, letterSpacing: '.22em',
                    textTransform: 'uppercase', padding: '5px 14px', fontWeight: 700,
                  }}>★ Edição Limitada</div>
                )}
                <div className="pack-img-wrap" style={{ overflow: 'hidden' }}>
                  <Image
                    src={pack.src}
                    alt={pack.alt}
                    width={600}
                    height={800}
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                  />
                </div>
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 64 }}>
            <Magnet>
              <a
                href={wa('Olá! Gostava de saber mais sobre os planos do Rise Fit Club.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ fontSize: 16, padding: '16px 44px' }}
              >
                Falar com a equipa <IconArrow rot={-90} />
              </a>
            </Magnet>
          </div>
        </div>

        <style>{`
          .pack-card {
            cursor: pointer;
            transition: transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94),
                        box-shadow 0.4s ease,
                        border-color 0.4s ease;
          }
          .pack-card:hover {
            transform: translateY(-10px);
            border-color: var(--gold) !important;
            box-shadow: 0 32px 64px rgba(0,0,0,0.7), 0 0 28px rgba(201,168,76,0.14);
          }
          .pack-card .pack-img-wrap img {
            transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94);
          }
          .pack-card:hover .pack-img-wrap img {
            transform: scale(1.04);
          }
          @media (max-width: 880px) {
            .packs-grid { grid-template-columns: 1fr 1fr !important; }
            .pack-card { margin-top: 0 !important; }
          }
          @media (max-width: 520px) {
            .packs-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </div>
  );
}
