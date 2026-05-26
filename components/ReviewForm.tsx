'use client';

import { useState } from 'react';
import { IconArrow } from './icons';

type State = 'idle' | 'sending' | 'ok' | 'error';

export default function ReviewForm() {
  const [state, setState] = useState<State>('idle');
  const [nome, setNome] = useState('');
  const [texto, setTexto] = useState('');
  const [stars, setStars] = useState(5);
  const [nomeErr, setNomeErr] = useState('');
  const [textoErr, setTextoErr] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let ok = true;
    if (!nome.trim()) { setNomeErr('Indica o teu nome.'); ok = false; } else setNomeErr('');
    if (texto.trim().length < 10) { setTextoErr('Escreve pelo menos 10 caracteres.'); ok = false; } else setTextoErr('');
    if (!ok) return;

    setState('sending');
    try {
      const res = await fetch('https://formspree.io/f/xgoqawbb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ nome, estrelas: stars, review: texto }),
      });
      setState(res.ok ? 'ok' : 'error');
    } catch {
      setState('error');
    }
  }

  if (state === 'ok') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '8px 0' }}>
        <div
          style={{
            fontFamily: 'var(--head-font)',
            fontWeight: 800,
            fontSize: 28,
            textTransform: 'uppercase',
            color: 'var(--gold)',
          }}
        >
          Obrigado, {nome}!
        </div>
        <p className="muted" style={{ fontSize: 15, lineHeight: 1.6 }}>
          A tua review foi recebida. Faz parte da história do Rise.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Stars */}
      <div>
        <label
          style={{
            display: 'block',
            fontFamily: 'var(--mono)',
            fontSize: 11,
            letterSpacing: '.18em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: 10,
          }}
        >
          Classificação
        </label>
        <div style={{ display: 'flex', gap: 4 }}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setStars(n)}
              aria-label={`${n} estrelas`}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px 2px',
                fontSize: 28,
                color: n <= stars ? 'var(--gold)' : '#2a2a2a',
                transition: 'color .15s',
              }}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      {/* Name */}
      <div className="rf-field">
        <label htmlFor="rf-nome">Nome</label>
        <input
          id="rf-nome"
          type="text"
          placeholder="O teu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          disabled={state === 'sending'}
        />
        {nomeErr && <div className="err-msg" style={{ marginTop: 6 }}>{nomeErr}</div>}
      </div>

      {/* Review text */}
      <div className="rf-field">
        <label htmlFor="rf-texto">A tua experiência</label>
        <textarea
          id="rf-texto"
          placeholder="Conta a tua experiência no Rise..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          disabled={state === 'sending'}
          rows={5}
          style={{ resize: 'vertical' }}
        />
        {textoErr && <div className="err-msg" style={{ marginTop: 6 }}>{textoErr}</div>}
      </div>

      {state === 'error' && (
        <div className="err-msg">Algo correu mal. Tenta novamente.</div>
      )}

      <button
        type="submit"
        className="btn btn-gold"
        disabled={state === 'sending'}
        style={{ justifyContent: 'center' }}
      >
        {state === 'sending' ? 'A enviar…' : <>Enviar review <IconArrow rot={-90} /></>}
      </button>

      <style>{`
        .rf-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .rf-field label {
          font-family: var(--mono);
          font-size: 11px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--gold);
        }
        .rf-field input,
        .rf-field textarea {
          background: #111;
          border: 1px solid #3a3a3a;
          color: #fff;
          padding: 14px 16px;
          font-size: 15px;
          font-family: var(--body-font);
          outline: none;
          transition: border-color .2s, background .2s;
          width: 100%;
        }
        .rf-field input:focus,
        .rf-field textarea:focus {
          border-color: var(--gold);
          background: #161616;
        }
        .rf-field input::placeholder,
        .rf-field textarea::placeholder {
          color: #555;
        }
      `}</style>
    </form>
  );
}
