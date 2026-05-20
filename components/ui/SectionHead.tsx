interface SectionHeadProps {
  eyebrow?: string;
  title: React.ReactNode;
  kicker?: string;
  align?: 'left' | 'center';
}

export default function SectionHead({ eyebrow, title, kicker, align = 'left' }: SectionHeadProps) {
  return (
    <div
      style={{
        textAlign: align,
        marginBottom: 48,
        maxWidth: 880,
        margin: align === 'center' ? '0 auto 48px' : '0 0 48px',
      }}
    >
      {eyebrow && (
        <div className="eyebrow" style={{ marginBottom: 14 }}>
          — {eyebrow}
        </div>
      )}
      <h2 style={{ fontSize: 'clamp(40px,6vw,80px)' }}>{title}</h2>
      {kicker && (
        <p className="muted" style={{ marginTop: 18, fontSize: 18, maxWidth: 640, lineHeight: 1.55 }}>
          {kicker}
        </p>
      )}
    </div>
  );
}
