import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { IconArrow, IconIG } from '@/components/icons';
import CallmebotForm from '@/components/CallmebotForm';
import { REVIEWS } from '@/data/reviews';
import Magnet from '@/components/ui/Magnet';

export const metadata: Metadata = {
  title: 'Resultados — Rise Fit Club',
  description: 'Histórias reais de transformação de membros do Rise Fit Club.',
};

const IMAGES = [
  { label: 'Paula',    src: '/Transformações/Transformação 1.PNG' },
  { label: 'João',     src: '/Transformações/Transformação 2.PNG' },
  { label: 'Gonçalo',  src: '/Transformações/Transformação 3.PNG' },
  { label: 'Sónia',    src: '/Transformações/Transformação 4.PNG' },
  { label: 'Mónica',   src: '/Transformações/Transformação 5.png' },
  { label: 'João',     src: '/Transformações/Transformação 6.PNG' },
  { label: 'João',     src: '/Transformações/Transformação 7.png' },
  { label: 'Mónica',   src: '/Transformações/Transformação 8.png' },
  { label: 'Ivan',     src: '/Transformações/Transformação 9.png' },
  { label: 'Paula',    src: '/Transformações/Transformação 10.png' },
  { label: 'Bruno',    src: '/Transformações/Transformação 11.png' },
  { label: 'Sofia',    src: '/Transformações/Transformação 12.png' },
  { label: 'Gonçalo',  src: '/Transformações/Transformação 13.png' },
  { label: 'Sofia',    src: '/Transformações/Transformação 14.png' },
  { label: 'Gean',     src: '/Transformações/Transformação 15.png' },
  { label: 'Pendente', src: '/Transformações/Transformação 16.png' },
  { label: 'Bruno',    src: '/Transformações/Transformação 17.png' },
  { label: 'Mónica',   src: '/Transformações/Transformação 18.png' },
  { label: 'Gonçalo',  src: '/Transformações/Transformação 19.png' },
  { label: 'João',     src: '/Transformações/Transformação 20.png' },
];

export default function ResultadosPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="page" style={{ paddingTop: 160 }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 20 }}>— 04 / Resultados & Feedback</div>
              <h1 style={{ fontSize: 'clamp(56px,9vw,140px)', maxWidth: '14ch' }}>
                Resultados dos nossos <span className="gold">membros</span>.
              </h1>
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

      {/* Grid */}
      <section style={{ paddingBottom: 80 }}>
        <div className="container">
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}
            className="trans-grid"
          >
            {IMAGES.map((img, i) => (
              <article key={i} style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'relative', aspectRatio: '9/16' }}>
                  <Image
                    src={img.src}
                    alt={img.label}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    sizes="(max-width: 760px) 100vw, 33vw"
                  />
                </div>
                <div
                  style={{
                    padding: '14px 16px',
                    background: '#111',
                    borderTop: '2px solid var(--gold)',
                    fontFamily: 'var(--mono)',
                    fontSize: 11,
                    letterSpacing: '.2em',
                    textTransform: 'uppercase',
                    color: '#666',
                  }}
                >
                  {img.label}
                </div>
              </article>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 760px) { .trans-grid { grid-template-columns: 1fr 1fr !important; } }
          @media (max-width: 480px) { .trans-grid { grid-template-columns: 1fr !important; } }
        `}</style>
      </section>

      {/* Reviews */}
      <section className="page" style={{ overflow: 'hidden' }}>
        <div className="container" style={{ marginBottom: 40 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>— Testemunhos</div>
              <h2 style={{ fontSize: 'clamp(40px,5vw,68px)', lineHeight: 1 }}>
                Feedback dos nossos <span className="gold">membros</span>.
              </h2>
            </div>
            <a
              href="https://www.instagram.com/rise.fitclub"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: '#666',
                transition: 'color .2s',
              }}
              className="ig-link"
            >
              <IconIG />
              Mais reviews em @rise.fitclub
            </a>
          </div>
        </div>
        <div
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
          className="reviews-scroll"
        >
          {REVIEWS.map((r, i) => (
            <article
              key={i}
              style={{
                background: '#0f0f0f',
                borderLeft: '2px solid var(--gold)',
                padding: '32px 28px 32px 26px',
                width: 320,
                flexShrink: 0,
                scrollSnapAlign: 'start',
              }}
            >
              <p style={{ fontSize: 16, lineHeight: 1.65, color: '#d0d0d0', fontFamily: 'var(--body-font)', margin: 0 }}>
                &ldquo;{r.text}&rdquo;
              </p>
            </article>
          ))}
        </div>
        <style>{`
          .reviews-scroll::-webkit-scrollbar { height: 2px; }
          .reviews-scroll::-webkit-scrollbar-track { background: #111; }
          .reviews-scroll::-webkit-scrollbar-thumb { background: var(--gold); }
          .reviews-scroll:active { cursor: grabbing; }
          .ig-link:hover { color: var(--gold) !important; }
          @media (max-width: 760px) { .reviews-scroll { padding-left: 20px !important; } }
        `}</style>
      </section>

      {/* Leave a review */}
      <section className="page">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 0,
              border: '1px solid var(--line)',
            }}
            className="review-cta-grid"
          >
            <div
              style={{
                padding: '52px 48px',
                background: '#0e0c09',
                borderRight: '1px solid var(--line)',
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
              }}
            >
              <div>
                <div className="eyebrow" style={{ marginBottom: 14 }}>— Feedback</div>
                <h2 style={{ fontSize: 'clamp(32px,3.5vw,52px)', lineHeight: 0.95 }}>
                  Já treinaste no Rise?<br />
                  <span className="gold">Deixa a tua review.</span>
                </h2>
              </div>
              <CallmebotForm />
            </div>

            <div
              style={{
                padding: '60px 52px',
                background: 'var(--surface)',
                display: 'flex',
                flexDirection: 'column',
                gap: 24,
                justifyContent: 'center',
              }}
            >
              <div className="eyebrow">— Ainda não és membro?</div>
              <h2 style={{ fontSize: 'clamp(36px,4vw,60px)', lineHeight: 0.95 }}>
                Começa a tua<br />
                <span className="gold">transformação</span>.
              </h2>
              <p className="muted" style={{ fontSize: 15, lineHeight: 1.6, maxWidth: 360 }}>
                Fala connosco — respondemos em menos de 24 horas e ajudamos a escolher
                o plano certo para o teu objetivo.
              </p>
              <Link
                href="/contacto"
                className="btn btn-gold"
                style={{ justifyContent: 'center', marginTop: 8 }}
              >
                Quero começar <IconArrow rot={-90} />
              </Link>
            </div>
          </div>
          <style>{`@media (max-width: 760px) { .review-cta-grid { grid-template-columns: 1fr !important; } .review-cta-grid > div:first-child { border-right: none !important; border-bottom: 1px solid var(--line); } }`}</style>
        </div>
      </section>
    </div>
  );
}
