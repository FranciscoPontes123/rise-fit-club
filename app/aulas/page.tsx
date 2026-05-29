import type { Metadata } from 'next';
import Link from 'next/link';
import { IconArrow } from '@/components/icons';
import { client } from '@/sanity/lib/client';
import { SCHEDULE_QUERY } from '@/sanity/queries';

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Aulas de Grupo — Rise Fit Club',
  description: 'Horário de aulas de grupo do Rise Fit Club: Yoga, Pilates, HIIT, Fit Boxe, Jiu-Jitsu, GAP, Circuito e mais.',
};

type ClassEntry = { time: string; name: string; restricted?: boolean; sub?: string };
type DayEntry = { day: string; classes: ClassEntry[] };

const MODALITIES = [
  { name: 'Yoga', days: 'Segunda' },
  { name: 'Pilates', days: 'Terça · Quinta' },
  { name: 'HIIT', days: 'Terça' },
  { name: 'Fit Boxe', days: 'Terça · Quinta' },
  { name: 'Circuito', days: 'Segunda · Terça' },
  { name: 'GAP', days: 'Quinta' },
  { name: 'Ginástica Sénior', days: 'Quarta · Sexta' },
  { name: 'Jiu-Jitsu', days: 'Seg · Ter · Qua · Qui · Sex' },
  { name: 'Preparação de Atletas', days: 'Aulas Particulares · Jiu-Jitsu' },
  { name: 'Defesa Pessoal / Boxe', days: 'Aulas Particulares' },
];

export default async function AulasPage() {
  const data = await client.fetch<{ days: DayEntry[] } | null>(SCHEDULE_QUERY);
  const SCHEDULE: DayEntry[] = data?.days ?? [];

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page" style={{ paddingTop: 160, paddingBottom: 60 }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 20 }}>— Aulas de Grupo</div>
          <h1 style={{ fontSize: 'clamp(56px,9vw,140px)', maxWidth: '16ch', lineHeight: 0.9 }}>
            O teu <span className="gold">horário</span>.
          </h1>
          <p className="muted" style={{ fontSize: 18, maxWidth: 600, marginTop: 24, lineHeight: 1.6 }}>
            Yoga, Pilates, HIIT, Fit Boxe, Jiu-Jitsu e muito mais — algumas com inscrição obrigatória.
          </p>
        </div>
      </section>

      {/* Schedule grid */}
      <section style={{ background: '#0a0a0a', borderTop: '1px solid var(--line)', paddingBottom: 100 }}>
        <div className="container" style={{ paddingTop: 60 }}>

          {SCHEDULE.length === 0 ? (
            <div style={{
              padding: '80px 0',
              textAlign: 'center',
              fontFamily: 'var(--mono)',
              fontSize: 13,
              color: '#555',
              letterSpacing: '.16em',
              textTransform: 'uppercase',
            }}>
              Horário em atualização — volta em breve.
            </div>
          ) : (
            <>
              {/* Desktop table */}
              <div className="sched-table" style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed' }}>
                  <thead>
                    <tr>
                      {SCHEDULE.map((col) => (
                        <th key={col.day} style={{
                          padding: '20px 16px',
                          background: 'var(--gold)',
                          color: '#0d0d0d',
                          fontFamily: 'var(--head-font)',
                          fontWeight: 900,
                          fontSize: 18,
                          textTransform: 'uppercase',
                          letterSpacing: '.06em',
                          textAlign: 'center',
                          border: '2px solid #0a0a0a',
                        }}>
                          {col.day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: Math.max(...SCHEDULE.map((c) => c.classes.length)) }).map((_, rowIdx) => (
                      <tr key={rowIdx}>
                        {SCHEDULE.map((col) => {
                          const cls = col.classes[rowIdx];
                          if (!cls) return <td key={col.day} style={{ border: '1px solid #111', background: '#0a0a0a' }} />;
                          return (
                            <td key={col.day} style={{
                              padding: '18px 16px',
                              border: '1px solid #161616',
                              background: cls.restricted ? '#0f0f0f' : '#111',
                              verticalAlign: 'top',
                            }}>
                              <div style={{
                                fontFamily: 'var(--mono)',
                                fontSize: 13,
                                color: 'var(--gold)',
                                letterSpacing: '.08em',
                                marginBottom: 6,
                              }}>
                                {cls.time}
                              </div>
                              <div style={{
                                fontFamily: 'var(--head-font)',
                                fontWeight: 800,
                                fontSize: 16,
                                textTransform: 'uppercase',
                                color: cls.restricted ? '#999' : '#fff',
                                lineHeight: 1.1,
                              }}>
                                {cls.restricted && <span style={{ color: 'var(--gold)', marginRight: 2 }}>*</span>}
                                {cls.name}
                              </div>
                              {cls.sub && (
                                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: '#555', letterSpacing: '.14em', textTransform: 'uppercase', marginTop: 4 }}>
                                  {cls.sub}
                                </div>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footnote */}
              <div style={{
                marginTop: 24,
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: 'var(--mono)',
                fontSize: 11,
                color: '#555',
                letterSpacing: '.14em',
                textTransform: 'uppercase',
              }}>
                <span style={{ color: 'var(--gold)', fontSize: 14 }}>*</span>
                Aulas assinaladas não incluídas no regime de livre trânsito — inscrição obrigatória.
              </div>
            </>
          )}
        </div>
      </section>

      {/* Modalities strip */}
      <section className="page" style={{ background: '#0e0c09', borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 20 }}>— Modalidades Disponíveis</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, border: '1px solid var(--line)' }} className="mod-grid">
            {MODALITIES.map((m, i) => (
              <div key={i} style={{
                padding: '28px 24px',
                background: 'var(--surface)',
                borderLeft: i % 4 === 0 ? 'none' : '1px solid var(--line)',
                borderTop: i >= 4 ? '1px solid var(--line)' : 'none',
              }}>
                <div style={{ fontFamily: 'var(--head-font)', fontWeight: 900, fontSize: 20, textTransform: 'uppercase', marginBottom: 8 }}>
                  {m.name}
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: '#555' }}>
                  {m.days}
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 880px) { .mod-grid { grid-template-columns: 1fr 1fr !important; } .mod-grid > div { border-left: none !important; border-top: 1px solid var(--line) !important; } .mod-grid > div:first-child, .mod-grid > div:nth-child(2) { border-top: none !important; } }
            @media (max-width: 480px) { .mod-grid { grid-template-columns: 1fr !important; } .mod-grid > div:nth-child(2) { border-top: 1px solid var(--line) !important; } }
          `}</style>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0d0d0d', borderTop: '2px solid var(--gold)', padding: '80px 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
          <div>
            <h2 style={{ fontSize: 'clamp(36px,5vw,72px)', lineHeight: 0.9 }}>
              Pronto a <span className="gold">começar</span>?
            </h2>
          </div>
          <Link href="/contacto" className="btn btn-gold" style={{ fontSize: 17, padding: '18px 36px' }}>
            Quero começar <IconArrow rot={-90} />
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .sched-table table { table-layout: auto; min-width: 600px; }
        }
      `}</style>
    </div>
  );
}
