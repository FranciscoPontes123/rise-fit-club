'use client';

import { useState } from 'react';
import { IconArrow } from '@/components/icons';
import { FAQS } from '@/data/faqs';

export default function FaqAccordion() {
  const [open, setOpen] = useState<number>(0);

  return (
    <div style={{ borderTop: '1px solid var(--line)' }}>
      {FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderBottom: '1px solid var(--line)' }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : i)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 24,
                padding: '28px 0',
                textAlign: 'left',
                color: isOpen ? 'var(--gold)' : '#fff',
                transition: 'color .2s',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
                <span
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 12,
                    color: isOpen ? 'var(--gold)' : '#555',
                    letterSpacing: '.2em',
                    flexShrink: 0,
                  }}
                >
                  0{i + 1}
                </span>
                <span
                  style={{
                    fontFamily: 'var(--head-font)',
                    fontWeight: 700,
                    fontSize: 'clamp(22px,2.6vw,32px)',
                    textTransform: 'uppercase',
                    letterSpacing: '.02em',
                  }}
                >
                  {f.q}
                </span>
              </div>
              <span style={{ color: 'var(--gold)', flexShrink: 0 }}>
                <IconArrow rot={isOpen ? 180 : 0} />
              </span>
            </button>

            <div
              style={{
                maxHeight: isOpen ? 400 : 0,
                overflow: 'hidden',
                transition: 'max-height .35s ease',
              }}
            >
              <div style={{ padding: '0 0 28px 64px', maxWidth: 760 }}>
                <p style={{ fontSize: 16, lineHeight: 1.65, color: '#d0d0d0', margin: 0 }}>{f.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
