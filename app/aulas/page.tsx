import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { IconArrow } from '@/components/icons';
import Magnet from '@/components/ui/Magnet';

export const metadata: Metadata = {
  title: 'Aulas de Grupo — Rise Fit Club',
  description: 'Horário de aulas de grupo do Rise Fit Club: Yoga, Pilates, HIIT, Fit Boxe, Jiu-Jitsu, GAP, Circuito e mais.',
};

type ClassEntry = { time: string; name: string; restricted?: boolean; sub?: string };
type DayEntry   = { day: string; classes: ClassEntry[] };

const SCHEDULE: DayEntry[] = [
  {
    day: 'Segunda',
    classes: [
      { time: '10:30', name: 'Yoga' },
      { time: '18:30', name: 'Circuito' },
      { time: '19:15', name: 'Jiu-Jitsu Kids', restricted: true },
      { time: '20:10', name: 'Jiu-Jitsu Adultos', restricted: true },
    ],
  },
  {
    day: 'Terça',
    classes: [
      { time: '11:00', name: 'Circuito Gym', restricted: true },
      { time: '12:00', name: 'Jiu-Jitsu No-Gi' },
      { time: '18:00', name: 'Pilates' },
      { time: '18:45', name: 'HIIT' },
      { time: '19:20', name: 'Fit Boxe' },
    ],
  },
  {
    day: 'Quarta',
    classes: [
      { time: '10:40', name: 'Ginástica Sénior' },
      { time: '19:15', name: 'Jiu-Jitsu Kids', restricted: true },
      { time: '20:10', name: 'Jiu-Jitsu Adultos', restricted: true },
    ],
  },
  {
    day: 'Quinta',
    classes: [
      { time: '12:00', name: 'Jiu-Jitsu No-Gi' },
      { time: '18:00', name: 'Fit Boxe', restricted: true, sub: 'Small Group' },
      { time: '18:30', name: 'Pilates' },
      { time: '19:15', name: 'GAP' },
      { time: '20:40', name: 'Fit Boxe', restricted: true, sub: 'Small Group' },
    ],
  },
  {
    day: 'Sexta',
    classes: [
      { time: '10:40', name: 'Ginástica Sénior' },
      { time: '19:15', name: 'Jiu-Jitsu Kids', restricted: true },
      { time: '20:10', name: 'Jiu-Jitsu Adultos', restricted: true },
    ],
  },
];

const MODALITIES = [
  { name: 'Yoga',              days: 'Segunda' },
  { name: 'Circuito',          days: 'Segunda' },
  { name: 'Circuito Gym',      days: 'Terça' },
  { name: 'Pilates',           days: 'Terça · Quinta' },
  { name: 'HIIT',              days: 'Terça' },
  { name: 'Fit Boxe',          days: 'Terça · Quinta' },
  { name: 'Ginástica Sénior',  days: 'Quarta · Sexta' },
  { name: 'GAP',               days: 'Quinta' },
  { name: 'Jiu-Jitsu No-Gi',  days: 'Terça · Quinta' },
  { name: 'Jiu-Jitsu Kids',    days: 'Seg · Qua · Sex' },
  { name: 'Jiu-Jitsu Adultos', days: 'Seg · Qua · Sex' },
];

const cols = SCHEDULE.length;

export default function AulasPage() {
  const maxRows = Math.max(...SCHEDULE.map((c) => c.classes.length));

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page" style={{ paddingTop: 160, paddingBottom: 60 }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>— Aulas de Grupo</div>
              <h1 style={{ fontSize: 'clamp(56px,9vw,140px)', maxWidth: '16ch', lineHeight: 0.9 }}>
                O teu <span className="gold">horário</span>.
              </h1>
              <p className="muted" style={{ fontSize: 18, maxWidth: 600, marginTop: 24, lineHeight: 1.6 }}>
                Yoga, Pilates, HIIT, Fit Boxe, Jiu-Jitsu e muito mais — algumas com inscrição obrigatória.
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

      {/* Schedule grid */}
      <section style={{ borderTop: '1px solid var(--line)', paddingBottom: 100 }}>
        <div className="container" style={{ paddingTop: 60 }}>
          <div className="sched-scroll">
          <div
            className="sched-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${cols}, 1fr)`,
              gap: 2,
            }}
          >
            {/* Day headers */}
            {SCHEDULE.map((col) => (
              <div key={col.day} style={{
                padding: '20px 16px',
                background: 'var(--gold)',
                color: '#0d0d0d',
                fontFamily: 'var(--head-font)',
                fontWeight: 900,
                fontSize: 18,
                textTransform: 'uppercase',
                letterSpacing: '.06em',
                textAlign: 'center',
              }}>
                {col.day}
              </div>
            ))}

            {/* Class rows */}
            {Array.from({ length: maxRows }).map((_, rowIdx) =>
              SCHEDULE.map((col) => {
                const cls = col.classes[rowIdx];
                if (!cls) {
                  return (
                    <div
                      key={`${col.day}-${rowIdx}-empty`}
                      style={{ background: '#0a0a0a', minHeight: 80 }}
                    />
                  );
                }
                return (
                  <div
                    key={`${col.day}-${rowIdx}`}
                    className="sched-cell"
                    style={{
                      padding: '18px 16px',
                      background: cls.restricted ? '#0f0f0f' : '#111',
                      minHeight: 80,
                    }}
                  >
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
                  </div>
                );
              })
            )}
          </div>
          </div>{/* sched-scroll */}

          <div style={{
            marginTop: 24,
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: 'var(--mono)',
            fontSize: 11,
            color: '#fff',
            letterSpacing: '.14em',
            textTransform: 'uppercase',
          }}>
            <span style={{ color: 'var(--gold)', fontSize: 14 }}>*</span>
            Aulas assinaladas não incluídas no regime de livre trânsito — inscrição obrigatória.
          </div>

          <style>{`
            .sched-cell {
              border: 1px solid transparent;
              transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
            }
            .sched-cell:hover {
              border-color: rgba(251,204,31,0.4);
              background: #181818 !important;
              box-shadow: inset 0 0 0 1px rgba(251,204,31,0.08), 0 0 16px rgba(251,204,31,0.06);
            }
            @media (max-width: 760px) {
              .sched-scroll {
                overflow-x: auto;
                -webkit-overflow-scrolling: touch;
                margin: 0 -20px;
                padding: 0 20px;
              }
              .sched-grid {
                grid-template-columns: repeat(5, minmax(130px, 1fr)) !important;
                min-width: 650px;
              }
            }
          `}</style>
        </div>
      </section>

      {/* Modalities grid */}
      <section className="page" style={{ borderTop: '1px solid var(--line)' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 20 }}>— Modalidades Disponíveis</div>
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 1, border: '1px solid var(--line)' }}
            className="mod-grid"
          >
            {MODALITIES.map((m, i) => (
              <div
                key={i}
                style={{
                  padding: '32px 28px',
                  background: 'var(--surface)',
                  borderLeft: i % 4 === 0 ? 'none' : '1px solid var(--line)',
                  borderTop: i >= 4 ? '1px solid var(--line)' : 'none',
                }}
              >
                <div style={{ fontFamily: 'var(--head-font)', fontWeight: 900, fontSize: 20, textTransform: 'uppercase', marginBottom: 10 }}>
                  {m.name}
                </div>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: '#555' }}>
                  {m.days}
                </div>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 880px) {
              .mod-grid { grid-template-columns: 1fr 1fr !important; }
              .mod-grid > div { border-left: none !important; border-top: 1px solid var(--line) !important; }
              .mod-grid > div:first-child, .mod-grid > div:nth-child(2) { border-top: none !important; }
            }
            @media (max-width: 480px) {
              .mod-grid { grid-template-columns: 1fr !important; }
              .mod-grid > div:nth-child(2) { border-top: 1px solid var(--line) !important; }
            }
          `}</style>
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: '2px solid var(--gold)', padding: '80px 0' }}>
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
    </div>
  );
}
