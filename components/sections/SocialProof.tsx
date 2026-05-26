import Stars from '@/components/ui/Stars';
import Marquee from '@/components/ui/Marquee';
import { REVIEWS } from '@/data/reviews';

function ReviewCard({ r }: { r: typeof REVIEWS[number] }) {
  return (
    <article
      style={{
        background: 'var(--surface)',
        border: '1px solid var(--line)',
        padding: '28px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        width: 320,
        flexShrink: 0,
        minHeight: 230,
      }}
    >
      <Stars value={r.stars} />
      <p style={{ fontSize: 15, lineHeight: 1.55, flex: 1 }}>&ldquo;{r.text}&rdquo;</p>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              background: 'var(--gold)',
              color: '#0d0d0d',
              display: 'grid',
              placeItems: 'center',
              fontFamily: 'var(--head-font)',
              fontWeight: 800,
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
                fontSize: 14,
                letterSpacing: '.05em',
                textTransform: 'uppercase',
              }}
            >
              {r.name}
            </div>
            <div className="muted" style={{ fontSize: 11, fontFamily: 'var(--mono)', letterSpacing: '.1em' }}>
              {r.when}
            </div>
          </div>
        </div>
        <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: '#444' }}>G</span>
      </div>
    </article>
  );
}

export default function SocialProof() {
  return (
    <section className="page">
      <div className="container" style={{ marginBottom: 48 }}>
        <div className="eyebrow" style={{ marginBottom: 14 }}>— 03 / Testemunhos</div>
        <h2 style={{ fontSize: 'clamp(40px,5vw,68px)', lineHeight: 1 }}>
          Feedback dos nossos <span className="gold">membros</span>.
        </h2>
      </div>

      <Marquee speed={30} gap={20}>
        {REVIEWS.map((r, i) => (
          <ReviewCard key={i} r={r} />
        ))}
      </Marquee>
    </section>
  );
}
