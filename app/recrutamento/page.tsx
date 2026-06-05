import type { Metadata } from 'next';
import Image from 'next/image';
import { IconArrow } from '@/components/icons';
import Magnet from '@/components/ui/Magnet';

export const metadata: Metadata = {
  title: 'Recrutamento & Parcerias — Rise Fit Club',
  description: 'Junta-te à equipa Rise Fit Club ou propõe um modelo de parceria. Recrutamento de PT, instrutores, staff e muito mais.',
};

const WA_LINK = 'https://wa.me/351963329814';

const INTERNAL_ROLES = [
  { role: 'Personal Trainer', desc: 'Treino 1-on-1, duo e small group.' },
  { role: 'Instrutor de Sala', desc: 'Acompanhamento de membros em treino livre.' },
  { role: 'Aulas de Grupo', desc: 'Yoga, Pilates, HIIT, Fit Boxe, Circuito, etc.' },
  { role: 'Professor de Jiu-Jitsu', desc: 'Kids e adultos — No-Gi e Gi.' },
  { role: 'Diretor Técnico', desc: 'Coordenação técnica e pedagógica do espaço.' },
  { role: 'Equipa Comercial', desc: 'Captação e gestão de membros e parcerias.' },
  { role: 'Coordenador de Afiliados / Parcerias', desc: 'Gestão de acordos e protocolos externos.' },
  { role: 'Receção', desc: 'Atendimento, check-in e apoio ao membro.' },
  { role: 'Content Creator', desc: 'Produção de conteúdo para redes sociais.' },
  { role: 'Equipa de Limpeza', desc: 'Higiene e manutenção das instalações.' },
];

export default function RecrutamentoPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page" style={{ paddingTop: 160, paddingBottom: 60 }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>— Recrutamento & Parcerias</div>
              <h1 style={{ fontSize: 'clamp(56px,9vw,130px)', lineHeight: 0.88, maxWidth: '16ch' }}>
                Cresce com o <span className="gold">Rise</span>.
              </h1>
              <p className="muted" style={{ fontSize: 18, maxWidth: 600, marginTop: 28, lineHeight: 1.6 }}>
                Duas formas de fazer parte do Rise Fit Club: integrares a nossa equipa interna, ou estabeleceres um modelo de renda/utilização das nossas instalações.
              </p>
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

      {/* Two modalities */}
      <section style={{ borderTop: '1px solid var(--line)', paddingBottom: 100, paddingTop: 60 }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }} className="recruit-modes">

            {/* Integração na Equipa */}
            <div style={{
              background: '#111',
              border: '1px solid var(--line)',
              padding: '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 12 }}>— Modalidade 01</div>
                <h2 style={{ fontFamily: 'var(--head-font)', fontWeight: 900, fontSize: 'clamp(32px,4vw,56px)', textTransform: 'uppercase', lineHeight: 0.9 }}>
                  Integração<br />na <span className="gold">Equipa</span>
                </h2>
              </div>
              <p className="muted" style={{ fontSize: 15, lineHeight: 1.65, maxWidth: 380 }}>
                Faz parte da equipa Rise Fit Club. Trabalha num ambiente profissional, com equipamento de topo e uma estrutura de suporte que te permite focar no que sabes fazer melhor.
              </p>
              <div style={{ padding: '16px 20px', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>O que oferecemos</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {['Instalações totalmente equipadas', 'Suporte administrativo e comercial', 'Comunidade de profissionais', 'Visibilidade e captação de clientes'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: '#bbb', fontFamily: 'var(--mono)' }}>
                      <span style={{ color: 'var(--gold)' }}>—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={`${WA_LINK}?text=${encodeURIComponent('Olá! Tenho interesse em integrar a equipa do Rise Fit Club.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ marginTop: 'auto', justifyContent: 'center' }}
              >
                Candidatar via WhatsApp <IconArrow rot={-90} />
              </a>
            </div>

            {/* Modelo de Renda */}
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--line)',
              padding: '48px 40px',
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
            }}>
              <div>
                <div className="eyebrow" style={{ marginBottom: 12 }}>— Modalidade 02</div>
                <h2 style={{ fontFamily: 'var(--head-font)', fontWeight: 900, fontSize: 'clamp(32px,4vw,56px)', textTransform: 'uppercase', lineHeight: 0.9 }}>
                  Modelo de<br /><span className="gold">Renda</span>
                </h2>
              </div>
              <p className="muted" style={{ fontSize: 15, lineHeight: 1.65, maxWidth: 380 }}>
                Utiliza as nossas instalações num modelo de renda ajustável — por horas ou mensal. Ideal para profissionais independentes que querem um espaço profissional sem os custos fixos de um ginásio próprio.
              </p>
              <div style={{ padding: '16px 20px', background: '#111', border: '1px solid var(--line)' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.2em', textTransform: 'uppercase', color: '#555', marginBottom: 8 }}>Opções disponíveis</div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {['Renda por horas — flexível', 'Renda mensal — valor mediante número de horas', 'Acesso às salas especializadas'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: 10, fontSize: 13, color: '#999', fontFamily: 'var(--mono)' }}>
                      <span style={{ color: '#555' }}>—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={`${WA_LINK}?text=${encodeURIComponent('Olá! Tenho interesse no modelo de renda/parceria do Rise Fit Club.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-gold"
                style={{ marginTop: 'auto', justifyContent: 'center' }}
              >
                Proposta via WhatsApp <IconArrow rot={-90} />
              </a>
            </div>

          </div>
          <style>{`@media (max-width: 760px) { .recruit-modes { grid-template-columns: 1fr !important; } }`}</style>
        </div>
      </section>

      {/* Internal roles */}
      <section className="page" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 16 }}>— Recrutamento Interno</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 24, marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(40px,6vw,88px)', lineHeight: 0.9 }}>
              Vagas em <span className="gold">aberto</span>.
            </h2>
            <p className="muted" style={{ fontSize: 15, maxWidth: 360, lineHeight: 1.6 }}>
              Candidata-te à função que mais se adequa ao teu perfil. Enviamos o teu contacto diretamente para a nossa equipa.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid var(--line)' }}>
            {INTERNAL_ROLES.map((r, i) => (
              <a
                key={i}
                href={`${WA_LINK}?text=${encodeURIComponent(`Olá! Tenho interesse na vaga de ${r.role} no Rise Fit Club.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '48px 1fr auto',
                  alignItems: 'center',
                  gap: 24,
                  padding: '24px 28px',
                  background: 'var(--surface)',
                  borderTop: i > 0 ? '1px solid var(--line)' : 'none',
                  textDecoration: 'none',
                  transition: 'background .15s',
                }}
                className="role-row"
              >
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: '#333', letterSpacing: '.12em' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <div style={{ fontFamily: 'var(--head-font)', fontWeight: 800, fontSize: 20, textTransform: 'uppercase', marginBottom: 4 }}>
                    {r.role}
                  </div>
                  <div className="muted" style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase' }}>
                    {r.desc}
                  </div>
                </div>
                <span style={{ color: 'var(--gold)', display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                  Candidatar <IconArrow rot={-90} />
                </span>
              </a>
            ))}
          </div>
          <style>{`
            .role-row:hover { background: #111 !important; }
            @media (max-width: 560px) { .role-row { grid-template-columns: 1fr auto !important; gap: 12px !important; } .role-row > span:first-child { display: none !important; } }
          `}</style>
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ borderTop: '2px solid var(--gold)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(36px,5vw,72px)', marginBottom: 16 }}>
            Tens dúvidas? <span className="gold">Fala connosco.</span>
          </h2>
          <p className="muted" style={{ fontSize: 16, maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.6 }}>
            Seja para candidatura, parceria ou qualquer outra questão — respondemos no WhatsApp.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            style={{ fontSize: 17, padding: '18px 36px', display: 'inline-flex', alignItems: 'center', gap: 10 }}
          >
            Falar no WhatsApp <IconArrow rot={-90} />
          </a>
        </div>
      </section>
    </div>
  );
}
