'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import RiseLogo from '@/components/RiseLogo';

export default function LoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      router.push('/');
      router.refresh();
    } else {
      setError('Password incorrecta.');
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#050505',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background watermark */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: -40,
          right: -20,
          fontFamily: 'var(--head-font)',
          fontWeight: 900,
          fontSize: 'clamp(180px, 30vw, 400px)',
          color: 'transparent',
          WebkitTextStroke: '1px #111',
          lineHeight: 0.85,
          pointerEvents: 'none',
          userSelect: 'none',
          letterSpacing: '-.02em',
        }}
      >
        RISE
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: 400,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 48 }}>
          <RiseLogo size={44} />
          <span
            style={{
              fontFamily: 'var(--head-font)',
              fontWeight: 900,
              letterSpacing: '.08em',
              fontSize: 18,
              lineHeight: 1,
            }}
          >
            RISE
            <br />
            <span style={{ color: 'var(--gold)', fontSize: 11, letterSpacing: '.32em' }}>FIT · CLUB</span>
          </span>
        </div>

        <div
          style={{
            borderTop: '2px solid var(--gold)',
            paddingTop: 32,
          }}
        >
          <div className="eyebrow" style={{ marginBottom: 16 }}>— Acesso restrito</div>
          <h1
            style={{
              fontFamily: 'var(--head-font)',
              fontWeight: 900,
              fontSize: 36,
              textTransform: 'uppercase',
              lineHeight: 1,
              marginBottom: 32,
            }}
          >
            Site em
            <br />
            <span className="gold">construção</span>.
          </h1>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="rf-field">
              <label htmlFor="pw">Password</label>
              <input
                id="pw"
                type="password"
                placeholder="••••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                autoFocus
              />
              {error && (
                <div
                  style={{
                    fontFamily: 'var(--mono)',
                    fontSize: 10,
                    letterSpacing: '.12em',
                    textTransform: 'uppercase',
                    color: 'var(--red)',
                    marginTop: 4,
                  }}
                >
                  {error}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-gold"
              disabled={loading}
              style={{ justifyContent: 'center', marginTop: 8 }}
            >
              {loading ? 'A verificar…' : 'Entrar'}
            </button>
          </form>
        </div>
      </div>

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
        .rf-field input {
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
        .rf-field input:focus {
          border-color: var(--gold);
          background: #161616;
        }
        .rf-field input::placeholder { color: #444; }
      `}</style>
    </div>
  );
}
