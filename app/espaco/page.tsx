import type { Metadata } from 'next';
import Image from 'next/image';
import Photo from '@/components/ui/Photo';
import SectionHead from '@/components/ui/SectionHead';
import LocationStrip from '@/components/sections/LocationStrip';
import { IconCheck } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Espaço & Equipamento — Rise Fit Club',
  description: '500m² divididos por função. Equipamento profissional, tatami BJJ, estúdio Pilates e muito mais em Almargem do Bispo.',
};

const GALLERY = [
  { label: 'SALA SECUNDÁRIA', colSpan: 2, h: 500, src: '/sala-secundaria.jpeg', sizes: '(max-width:760px) 100vw, 66vw' },
  { label: 'SALA PRINCIPAL', colSpan: 1, h: 500, src: '/sala-principal.jpeg', sizes: '(max-width:760px) 100vw, 33vw' },
  { label: 'ESTÚDIO · AULAS DE GRUPO', colSpan: 3, h: 380 },
];

const HIGHLIGHTS = [
  {
    title: 'Espaço',
    items: ['2 Salas de Exercício', '1 Sala para Aulas de Grupo', 'Um Gabinete de Avaliações', 'Dois Balneários', 'Mais de 1.5 Toneladas de carga'],
  },
  {
    title: 'Zona Cardio',
    items: ['Passadeiras', 'Bicicleta', 'Remo'],
  },
  {
    title: 'Aulas de Grupo',
    items: ['Pilates', 'GAP', 'Circuito', 'HIIT', 'Localizada', 'Fit Boxe', 'Yoga'],
  },
];

export default function EspacoPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page" style={{ paddingTop: 160 }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 20 }}>— 02 / Espaço & Equipamento</div>
          <h1 style={{ fontSize: 'clamp(56px,9vw,140px)', maxWidth: '14ch' }}>
            O sítio onde o trabalho <span className="gold">acontece</span>.
          </h1>
          <p className="muted" style={{ fontSize: 18, maxWidth: 640, marginTop: 24, lineHeight: 1.6 }}>
            2 espaços especializados para treino individual ou em grupo. Equipamento de topo, escolhido à medida para ti.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ padding: '40px 0 80px' }}>
        <div className="container">
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}
            className="gallery-grid"
          >
            {GALLERY.map((g, i) => (
              <div
                key={i}
                style={{ gridColumn: `span ${g.colSpan}`, position: 'relative', minHeight: g.h }}
              >
                {g.src ? (
                  <Image
                    src={g.src}
                    alt={g.label}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes={g.sizes ?? '(max-width:980px) 50vw, 25vw'}
                    quality={90}
                  />
                ) : (
                  <Photo h={g.h} label={g.label} />
                )}
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 760px) {
            .gallery-grid { grid-template-columns: 1fr !important; }
            .gallery-grid > div { grid-column: span 1 !important; }
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
