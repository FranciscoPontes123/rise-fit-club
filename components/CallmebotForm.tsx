'use client';

import { useState } from 'react';
import { sendReview } from '@/app/actions/sendReview';
import { IconArrow } from './icons';

type State = 'idle' | 'sending' | 'ok' | 'error';

export default function CallmebotForm() {
  const [state, setState] = useState<State>('idle');
  const [nome, setNome]   = useState('');
  const [texto, setTexto] = useState('');
  const [stars, setStars] = useState(5);
  const [nomeErr, setNomeErr]   = useState('');
  const [textoErr, setTextoErr] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    let valid = true;
    if (!nome.trim())              { setNomeErr('Indica o teu nome.');              valid = false; } else setNomeErr('');
    if (texto.trim().length < 10)  { setTextoErr('Escreve pelo menos 10 caracteres.'); valid = false; } else setTextoErr('');
    if (!valid) return;

    setState('sending');
    try {
      await sendReview(nome.trim(), stars, texto.trim());
      setState('ok');
    } catch {
      setState('error');
    }
  }

  if (state === 'ok') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '8px 0' }}>
        <div style={{ fontFamily: 'var(--head-font)', fontWeight: 800, fontSize: 28, textTransform: 'uppercase', color: 'var(--gold)' }}>
          Obrigado, {nome}!
        </div>
        <p className="muted" style={{ fontSize: 15, lineHeight: 1.6 }}>
          Obrigado pela tua review e por fazeres parte do Rise Fit Club.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Stars */}
      <div>
        <label style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 10 }}>
          Classificação
        </label>
        <div style={{ display: 'flex', gap: 4 }}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setStars(n)}
              aria-label={`${n} estrelas`}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 2px', fontSize: 28, color: n <= stars ? 'var(--gold)' : '#2a2a2a', transition: 'color .15s' }}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      {/* Name */}
      <div className="cbf-field">
        <label htmlFor="cbf-nome">Nome</label>
        <input
          id="cbf-nome"
          type="text"
          placeholder="O teu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          disabled={state === 'sending'}
        />
        {nomeErr && <div className="cbf-err">{nomeErr}</div>}
      </div>

      {/* Review text */}
      <div className="cbf-field">
        <label htmlFor="cbf-texto">A tua experiência</label>
        <textarea
          id="cbf-texto"
          placeholder="Conta a tua experiência no Rise..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          disabled={state === 'sending'}
          rows={5}
          style={{ resize: 'vertical' }}
        />
        {textoErr && <div className="cbf-err">{textoErr}</div>}
      </div>

      {state === 'error' && (
        <div className="cbf-err">Algo correu mal. Tenta novamente.</div>
      )}

      <button type="submit" className="btn btn-gold" disabled={state === 'sending'} style={{ justifyContent: 'center' }}>
        {state === 'sending' ? 'A enviar…' : <>Enviar review <IconArrow rot={-90} /></>}
      </button>

      <p style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.12em', color: '#555', lineHeight: 1.6 }}>
        Ao enviar, aceitas a nossa{' '}
        <a href="/privacidade" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Política de Privacidade</a>.
        O teu nome e review serão recebidos internamente pela equipa do Rise Fit Club.
      </p>

      <style>{`
        .cbf-field { display: flex; flex-direction: column; gap: 8px; }
        .cbf-field label { font-family: var(--mono); font-size: 11px; letter-spacing: .18em; text-transform: uppercase; color: var(--gold); }
        .cbf-field input, .cbf-field textarea {
          background: #111; border: 1px solid #3a3a3a; color: #fff;
          padding: 14px 16px; font-size: 15px; font-family: var(--body-font);
          outline: none; transition: border-color .2s, background .2s; width: 100%;
        }
        .cbf-field input:focus, .cbf-field textarea:focus { border-color: var(--gold); background: #161616; }
        .cbf-field input::placeholder, .cbf-field textarea::placeholder { color: #555; }
        .cbf-err { font-family: var(--mono); font-size: 11px; letter-spacing: .12em; color: #e05; margin-top: 4px; }
      `}</style>
    </form>
  );
}
