import Stars from '@/components/ui/Stars';
import { REVIEWS } from '@/data/reviews';

export default function SocialProof() {
  return (
    <section className="page">
      <div className="container">
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 80, alignItems: 'start' }}
          className="rev-grid"
        >
          {/* Heading */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 14 }}>— 03 / Testemunhos</div>
            <h2 style={{ fontSize: 'clamp(40px,5vw,68px)', lineHeight: 1 }}>
              Feedback dos nossos <span className="gold">membros</span>.
            </h2>
          </div>

          {/* Cards */}
          <div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}
            className="rev-cards"
          >
            {REVIEWS.slice(0, 3).map((r, i) => (
              <article
                key={i}
                style={{
                  background: 'var(--surface)',
                  padding: '28px 24px',
                  border: '1px solid var(--line)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  minHeight: 260,
                }}
              >
                <Stars value={r.stars} />
                <p style={{ fontSize: 15, lineHeight: 1.55 }}>&ldquo;{r.text}&rdquo;</p>
                <div
                  style={{
                    marginTop: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
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
                      <div
                        className="muted"
                        style={{ fontSize: 11, fontFamily: 'var(--mono)', letterSpacing: '.1em' }}
                      >
                        {r.when}
                      </div>
                    </div>
                  </div>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: '#444' }}>G</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 980px) {
          .rev-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .rev-cards { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
