import type { Metadata } from 'next';
import Image from 'next/image';
import SectionHead from '@/components/ui/SectionHead';
import LocationStrip from '@/components/sections/LocationStrip';
import Magnet from '@/components/ui/Magnet';
import { IconCheck } from '@/components/icons';
import VideoRotator from '@/components/ui/VideoRotator';

const SALA_PRINCIPAL = [
  '/Sala Principal/1.MOV',
  '/Sala Principal/2.MOV',
  '/Sala Principal/3.MOV',
  '/Sala Principal/4.MOV',
  '/Sala Principal/5.MOV',
];

const SALA_SECUNDARIA = [
  '/Sala Secundária/1.MOV',
  '/Sala Secundária/2.MOV',
  '/Sala Secundária/3.MOV',
  '/Sala Secundária/4.MOV',
  '/Sala Secundária/5.MOV',
  '/Sala Secundária/6.MOV',
  '/Sala Secundária/7.MOV',
];

export const metadata: Metadata = {
  title: 'Espaço & Equipamento — Rise Fit Club',
  description: '500m² divididos por função. Equipamento profissional, tatami BJJ, estúdio Pilates e muito mais em Almargem do Bispo.',
};

const HIGHLIGHTS = [
  {
    title: 'Espaço',
    items: ['2 Salas de Exercício', '1 Sala para Aulas de Grupo', 'Um Gabinete de Avaliações', 'Dois Balneários', 'Mais de 1.5 Toneladas de carga'],
  },
  {
    title: 'Zona Cardio',
    items: ['Passadeiras', 'Bicicleta', 'Elíptica'],
  },
  {
    title: 'Aulas de Grupo',
    items: ['Pilates', 'GAP', 'Circuito', 'HIIT', 'Localizada', 'Fit Boxe', 'Yoga', 'Jiu-Jitsu', 'Preparação de Atletas', 'Defesa Pessoal'],
  },
];

export default function EspacoPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page" style={{ paddingTop: 160 }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>— 02 / Espaço & Equipamento</div>
              <h1 style={{ fontSize: 'clamp(56px,9vw,140px)', maxWidth: '14ch' }}>
                O sítio onde o trabalho <span className="gold">acontece</span>.
              </h1>
              <p className="muted" style={{ fontSize: 18, maxWidth: 640, marginTop: 24, lineHeight: 1.6 }}>
                2 espaços especializados para treino individual ou em grupo. Equipamento de topo, escolhido à medida para ti.
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

      {/* Videos */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }} className="video-grid">
            <VideoRotator srcs={SALA_PRINCIPAL} height={500} className="sala-video" />
            <VideoRotator srcs={SALA_SECUNDARIA} height={500} className="sala-video" />
          </div>
        </div>
        <style>{`
          @media (max-width: 760px) {
            .video-grid { grid-template-columns: 1fr !important; }
            .video-grid video { height: 320px !important; }
          }
        `}</style>
      </section>

      {/* Highlights */}
      <section className="page">
        <div className="container">
          <SectionHead eyebrow="Highlights" title="O que tens à tua disposição" />
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 0,
              border: '1px solid var(--line)',
            }}
            className="hl-grid"
          >
            {HIGHLIGHTS.map((h, i) => (
              <div
                key={i}
                style={{
                  padding: '32px 28px',
                  borderLeft: i === 0 ? 'none' : '1px solid var(--line)',
                  background: 'var(--surface)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--head-font)',
                    fontWeight: 800,
                    fontSize: 24,
                    textTransform: 'uppercase',
                    marginBottom: 18,
                    letterSpacing: '.02em',
                  }}
                >
                  {h.title}
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {h.items.map((it, j) => (
                    <li key={j} style={{ display: 'flex', gap: 10, fontSize: 14 }}>
                      <IconCheck /> <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <style>{`
            @media (max-width: 980px) {
              .hl-grid { grid-template-columns: repeat(2,1fr) !important; }
              .hl-grid > div:nth-child(3) { border-top: 1px solid var(--line); border-left: none !important; }
            }
            @media (max-width: 560px) {
              .hl-grid { grid-template-columns: 1fr !important; }
              .hl-grid > div { border-left: none !important; border-top: 1px solid var(--line); }
              .hl-grid > div:first-child { border-top: none; }
            }
          `}</style>
        </div>
      </section>

      <LocationStrip />
    </div>
  );
}
