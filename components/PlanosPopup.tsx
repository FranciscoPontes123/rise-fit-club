'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { IconArrow } from '@/components/icons';

const wa = (msg: string) =>
  `https://wa.me/351963329814?text=${encodeURIComponent(msg)}`;

const SLIDE = {
  img:     '/Packs/Pack Base.jpeg',
  eyebrow: '— Pack Base',
  title:   <>Treina por <span className="gold">35€/mês</span>.<br />Sem fidelização.</>,
  body:    'Acesso total ao ginásio, sem contratos e sem letras pequenas. O plano mais direto para quem quer começar.',
  cta:     'Quero este pack',
  wa:      wa('Olá! Tenho interesse no Pack Base (35€/mês) do Rise Fit Club. Podem dar-me mais informações?'),
};

export default function PlanosPopup() {
  const [open, setOpen]       = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setOpen(true), 9000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!mounted || !open) return null;

  const close = () => setOpen(false);
  const s = SLIDE;

  return createPortal(
    <div
      onClick={close}
      style={{
        position: 'fixed', inset: 0, zIndex: 9000,
        background: 'rgba(0,0,0,0.78)',
        backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
        padding: '16px',
        overflowY: 'auto',
        animation: 'popup-bg-in 0.3s ease both',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          maxWidth: 860,
          width: '100%',
          margin: 'auto',
          background: '#0d0d0d',
          border: '2px solid var(--gold)',
          overflow: 'hidden',
          animation: 'popup-in 0.4s cubic-bezier(.16,1,.3,1) both',
          position: 'relative',
        }}
        className="popup-inner"
      >
        {/* Close */}
        <button
          onClick={close}
          aria-label="Fechar"
          style={{
            position: 'absolute', top: 16, right: 16, zIndex: 10,
            width: 36, height: 36,
            background: 'rgba(0,0,0,0.6)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 18, cursor: 'pointer',
            fontFamily: 'var(--mono)',
          }}
        >
          ×
        </button>

        {/* Image */}
        <div style={{ position: 'relative', minHeight: 420 }}>
          <Image
            src={s.img}
            alt={s.eyebrow}
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 760px) 100vw, 430px"
            priority
          />
        </div>

        {/* Content */}
        <div className="popup-content" style={{
          padding: '52px 44px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 20,
        }}>
          <div className="eyebrow">{s.eyebrow}</div>
          <h2 style={{
            fontFamily: 'var(--head-font)', fontWeight: 900,
            fontSize: 'clamp(32px,4vw,52px)', textTransform: 'uppercase',
            lineHeight: 0.95, color: '#fff',
          }}>
            {s.title}
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: '#ccc', fontFamily: 'var(--body-font)' }}>
            {s.body}
          </p>

<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <a
              href={s.wa}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ justifyContent: 'center' }}
              onClick={close}
            >
              {s.cta} <IconArrow rot={-90} />
            </a>
            <button
              onClick={close}
              className="btn btn-ghost"
              style={{ justifyContent: 'center' }}
            >
              Ver todos os packs
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes popup-bg-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes popup-in {
          from { opacity: 0; transform: scale(0.92) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @media (max-width: 640px) {
          .popup-inner { grid-template-columns: 1fr !important; }
          .popup-inner > div:first-child { display: none !important; }
          .popup-content { padding: 36px 24px !important; }
        }
      `}</style>
    </div>,
    document.body
  );
}
