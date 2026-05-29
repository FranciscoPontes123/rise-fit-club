import Link from 'next/link';
import Image from 'next/image';
import { IconArrow } from '@/components/icons';

const IMAGES = [
  { label: 'Transformação 1', src: '/Transformação 1.PNG' },
  { label: 'Transformação 2', src: '/Transformação 2.PNG' },
  { label: 'Transformação 3', src: '/Transformação 3.PNG' },
  { label: 'Transformação 4', src: '/Transformação 4.PNG' },
  { label: 'Transformação 5', src: '/Transformação 5.png' },
  { label: 'Transformação 6', src: '/Transformação 6.PNG' },
];

export default function TransformTeaser() {
  return (
    <section className="page" style={{ background: '#080808', overflow: 'hidden' }}>
      <div className="container" style={{ marginBottom: 40 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>— Resultados reais</div>
            <h2 style={{ fontSize: 'clamp(40px,5vw,68px)' }}>
              Transformações.
              <br />
              <span className="gold">Sem filtros.</span>
            </h2>
          </div>
          <Link href="/resultados" className="btn btn-outline-gold">
            Ver todas <IconArrow rot={-90} />
          </Link>
        </div>
      </div>

      <div
        className="transform-scroll"
        style={{
          display: 'flex',
          gap: 2,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          paddingLeft: 'max(32px, calc((100vw - 1320px) / 2 + 32px))',
          paddingRight: 32,
          paddingBottom: 16,
          cursor: 'grab',
        }}
      >
        {IMAGES.map((img, i) => (
          <article
            key={i}
            style={{
              flexShrink: 0,
              width: 240,
              scrollSnapAlign: 'start',
              background: '#111',
            }}
          >
            <div style={{ position: 'relative', aspectRatio: '9/16', width: 240 }}>
              <Image
                src={img.src}
                alt={img.label}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                sizes="240px"
              />
            </div>
            <div
              style={{
                padding: '12px 14px',
                borderTop: '2px solid var(--gold)',
                fontFamily: 'var(--mono)',
                fontSize: 10,
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: '#555',
              }}
            >
              {img.label}
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .transform-scroll::-webkit-scrollbar { height: 2px; }
        .transform-scroll::-webkit-scrollbar-track { background: #111; }
        .transform-scroll::-webkit-scrollbar-thumb { background: var(--gold); }
        .transform-scroll:active { cursor: grabbing; }
        @media (max-width: 760px) { .transform-scroll { padding-left: 20px !important; } }
      `}</style>
    </section>
  );
}
