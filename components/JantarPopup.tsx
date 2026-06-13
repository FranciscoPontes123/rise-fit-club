'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { IconArrow } from '@/components/icons';

const WA_MSG = encodeURIComponent(
  'Olá! Quero confirmar a minha presença no Jantar de Aniversário do Rise Fit Club — dia 20 de Junho, 19h30, Restaurante Kome e Kala. Por favor indiquem-me como proceder. Obrigado/a!'
);
const WA_LINK = `https://wa.me/351963329814?text=${WA_MSG}`;

export default function JantarPopup() {
  const [open, setOpen]       = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setOpen(true), 600);
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
        position: 'fixed', inset: 0, zIndex: 9100,
        background: 'rgba(0,0,0,0.82)',
        backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
        overflowY: 'auto',
        animation: 'jpop-bg-in 0.3s ease both',
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
          animation: 'jpop-in 0.4s cubic-bezier(.16,1,.3,1) both',
          position: 'relative',
        }}
        className="jpop-inner"
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
        <div style={{ position: 'relative', minHeight: 460 }}>
          <Image
            src="/Packs/Jantar de Aniversário.jpeg"
            alt="Jantar de Aniversário Rise Fit Club"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            sizes="(max-width: 640px) 100vw, 430px"
            priority
          />
          {/* Gold overlay badge */}
          <div style={{
            position: 'absolute', bottom: 20, left: 20,
            background: 'var(--gold)',
            color: '#0d0d0d',
            fontFamily: 'var(--mono)',
            fontSize: 10,
            letterSpacing: '.18em',
            textTransform: 'uppercase',
            padding: '6px 12px',
            fontWeight: 700,
          }}>
            20 Jun · 19h30
          </div>
        </div>

        {/* Content */}
        <div className="jpop-content" style={{
          padding: '48px 40px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18,
        }}>
          <div className="eyebrow">— 2.º Aniversário</div>

          <h2 style={{
            fontFamily: 'var(--head-font)', fontWeight: 900,
            fontSize: 'clamp(28px,3.5vw,46px)', textTransform: 'uppercase',
            lineHeight: 0.95, color: '#fff',
          }}>
            Jantar de<br /><span className="gold">Aniversário</span>.
          </h2>

          <p style={{ fontSize: 14, lineHeight: 1.7, color: '#bbb', fontFamily: 'var(--body-font)' }}>
            Celebramos o nosso <strong style={{ color: '#fff' }}>2.º aniversário</strong> e queremos
            partilhá-lo contigo. Uma noite de convívio e celebração reservada exclusivamente para a
            nossa família Rise.
          </p>

          {/* Event details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              { icon: '📅', text: '20 de Junho' },
              { icon: '🕢', text: '19h30' },
              { icon: '📍', text: 'Restaurante Kome e Kala — Albogas' },
              { icon: '🎶', text: 'Depois: concerto dos DAMA (Agro Aruil)' },
            ].map(({ icon, text }) => (
              <div key={text} style={{
                display: 'flex', alignItems: 'flex-start', gap: 10,
                fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.1em', color: '#ccc',
              }}>
                <span style={{ fontSize: 13, lineHeight: 1.4 }}>{icon}</span>
                <span style={{ lineHeight: 1.5 }}>{text}</span>
              </div>
            ))}
          </div>

          <div style={{
            padding: '10px 14px',
            borderLeft: '2px solid var(--gold)',
            fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.13em',
            color: '#888', lineHeight: 1.6,
          }}>
            Podes trazer cônjuge e/ou filhos — indica o n.º de pessoas na confirmação.<br />
            <span style={{ color: 'var(--gold)' }}>⚠ Confirmações até domingo, dia 14.</span>
          </div>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
            style={{ justifyContent: 'center' }}
            onClick={close}
          >
            Confirmar presença <IconArrow rot={-90} />
          </a>

          <button
            onClick={close}
            className="btn btn-ghost"
            style={{ justifyContent: 'center' }}
          >
            Ver mais tarde
          </button>
        </div>
      </div>

      <style>{`
        @keyframes jpop-bg-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes jpop-in {
          from { opacity: 0; transform: scale(0.92) translateY(16px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @media (max-width: 640px) {
          .jpop-inner { grid-template-columns: 1fr !important; }
          .jpop-inner > div:first-child { min-height: 220px !important; }
          .jpop-content { padding: 32px 24px !important; }
        }
      `}</style>
    </div>,
    document.body
  );
}
