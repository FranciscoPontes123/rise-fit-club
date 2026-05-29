import Link from 'next/link';
import Image from 'next/image';
import { TRAINERS } from '@/data/trainers';
import { IconArrow } from '@/components/icons';

export default function StaffTeaser() {
  return (
    <section className="page" style={{ overflow: 'hidden' }}>
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
            <div className="eyebrow" style={{ marginBottom: 14 }}>— Quem te treina</div>
            <h2 style={{ fontSize: 'clamp(40px,5vw,68px)' }}>
              A equipa que <span className="gold">puxa por ti</span>.
            </h2>
          </div>
          <Link href="/staff" className="btn btn-outline-gold">
            Conhecer staff <IconArrow rot={-90} />
          </Link>
        </div>
      </div>

      <div
        className="staff-scroll"
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
        {TRAINERS.map((t, i) => (
          <article
            key={i}
            className="staff-card"
            style={{
              background: '#111',
              flexShrink: 0,
              width: 280,
              scrollSnapAlign: 'start',
            }}
          >
            <div style={{ position: 'relative', height: 380, overflow: 'hidden' }}>
              <Image
                src={t.photo}
                alt={t.name}
                fill
                style={{ objectFit: 'cover', objectPosition: t.photoPosition ?? 'top' }}
                sizes="280px"
              />
            </div>
            <div
              style={{
                padding: '16px 18px 20px',
                borderTop: '3px solid var(--gold)',
                background: '#111',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--head-font)',
                  fontWeight: 800,
                  fontSize: 22,
                  textTransform: 'uppercase',
                  letterSpacing: '.02em',
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {t.name}
              </div>
              <div
                style={{
                  fontFamily: 'var(--mono)',
                  fontSize: 10,
                  letterSpacing: '.14em',
                  textTransform: 'uppercase',
                  color: '#666',
                  lineHeight: 1.6,
                }}
              >
                {t.role}
              </div>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .staff-scroll::-webkit-scrollbar { height: 2px; }
        .staff-scroll::-webkit-scrollbar-track { background: #111; }
        .staff-scroll::-webkit-scrollbar-thumb { background: var(--gold); }
        .staff-scroll:active { cursor: grabbing; }
        .staff-card { transition: filter .2s; }
        .staff-card:hover { filter: brightness(1.06); }
        @media (max-width: 760px) {
          .staff-scroll { padding-left: 20px !important; }
        }
      `}</style>
    </section>
  );
}
