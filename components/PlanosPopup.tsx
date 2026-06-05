'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { IconArrow } from '@/components/icons';

const WA_CAMPANHA = `https://wa.me/351963329814?text=${encodeURIComponent('Olá! Vi a Campanha de Verão do Rise Fit Club e gostava de saber mais!')}`;


export default function PlanosPopup() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setOpen(true), 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!mounted || !open) return null;

  const close = () => setOpen(false);

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
            src="/Pack Campanha Verão.jpeg"
            alt="Pack Campanha Verão — Edição Limitada"
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
          <div className="eyebrow">— Campanha de Verão</div>
          <h2 style={{
            fontFamily: 'var(--head-font)', fontWeight: 900,
            fontSize: 'clamp(36px,4vw,56px)', textTransform: 'uppercase',
            lineHeight: 0.9, color: '#fff',
          }}>
            Oferta <span className="gold">especial</span><br />por tempo limitado.
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: '#ccc', fontFamily: 'var(--body-font)' }}>
            A nossa campanha de Verão está disponível por tempo limitado. Aproveita antes que acabe — as vagas são limitadas.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
            <a
              href={WA_CAMPANHA}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              style={{ justifyContent: 'center' }}
              onClick={close}
            >
              Quero saber mais <IconArrow rot={-90} />
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
