import Stars from '@/components/ui/Stars';
import Marquee from '@/components/ui/Marquee';
import { REVIEWS } from '@/data/reviews';

function ReviewCard({ r }: { r: typeof REVIEWS[number] }) {
  return (
    <article
      style={{
        background: '#0f0f0f',
        borderLeft: '2px solid var(--gold)',
        padding: '28px 28px 28px 26px',
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
        width: 340,
        flexShrink: 0,
        minHeight: 220,
      }}
    >
      <Stars value={r.stars} />
      <p
        style={{
          fontSize: 15,
          lineHeight: 1.6,
          flex: 1,
          color: '#d8d8d8',
          fontFamily: 'var(--body-font)',
        }}
      >
        &ldquo;{r.text}&rdquo;
      </p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 30,
              height: 30,
              background: 'var(--gold)',
              color: '#0d0d0d',
              display: 'grid',
              placeItems: 'center',
              fontFamily: 'var(--head-font)',
              fontWeight: 900,
              fontSize: 14,
              flexShrink: 0,
            }}
          >
            {r.name[0]}
          </div>
          <div>
            <div
              style={{
                fontFamily: 'var(--head-font)',
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: '.06em',
                textTransform: 'uppercase',
              }}
            >
              {r.name}
            </div>
            <div className="muted" style={{ fontSize: 10, fontFamily: 'var(--mono)', letterSpacing: '.1em' }}>
              {r.when}
            </div>
          </div>
        </div>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: '#333' }}>G</span>
      </div>
    </article>
  );
}

export default function SocialProof() {
  return (
    <section className="page" style={{ overflow: 'hidden' }}>
      <div className="container" style={{ marginBottom: 48 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>— Testemunhos</div>
            <h2 style={{ fontSize: 'clamp(40px,5vw,68px)', lineHeight: 1 }}>
              Feedback dos nossos <span className="gold">membros</span>.
            </h2>
          </div>
          <div
            style={{
              fontFamily: 'var(--mono)',
              fontSize: 10,
              color: '#555',
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              alignSelf: 'flex-end',
              paddingBottom: 6,
            }}
          >
            Google Reviews · 5.0 ★
          </div>
        </div>
      </div>

      <Marquee speed={28} gap={16}>
        {REVIEWS.map((r, i) => (
          <ReviewCard key={i} r={r} />
        ))}
      </Marquee>
    </section>
  );
}
