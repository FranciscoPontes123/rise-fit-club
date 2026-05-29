import { REVIEWS } from '@/data/reviews';
import { IconIG } from '@/components/icons';

function ReviewCard({ r }: { r: typeof REVIEWS[number] }) {
  return (
    <article
      style={{
        background: '#0f0f0f',
        borderLeft: '2px solid var(--gold)',
        padding: '32px 28px 32px 26px',
        display: 'flex',
        flexDirection: 'column',
        width: 320,
        flexShrink: 0,
        minHeight: 180,
        scrollSnapAlign: 'start',
      }}
    >
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.65,
          color: '#d0d0d0',
          fontFamily: 'var(--body-font)',
          margin: 0,
        }}
      >
        &ldquo;{r.text}&rdquo;
      </p>
    </article>
  );
}

export default function SocialProof() {
  return (
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

      {/* Horizontal scroll */}
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
          <ReviewCard key={i} r={r} />
        ))}
      </div>

      <style>{`
        .reviews-scroll::-webkit-scrollbar { height: 2px; }
        .reviews-scroll::-webkit-scrollbar-track { background: #111; }
        .reviews-scroll::-webkit-scrollbar-thumb { background: var(--gold); }
        .reviews-scroll:active { cursor: grabbing; }
        .ig-link:hover { color: var(--gold) !important; }
        @media (max-width: 760px) {
          .reviews-scroll { padding-left: 20px !important; }
        }
      `}</style>
    </section>
  );
}
