'use client';

import { useState } from 'react';
import { IconArrow } from '@/components/icons';

interface FormState {
  nome: string;
  tel: string;
  email: string;
  plano: string;
  horario: string;
}

interface Errors {
  nome?: string;
  tel?: string;
  email?: string;
  plano?: string;
  termos?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ nome: '', tel: '', email: '', plano: '', horario: '' });
  const [termos, setTermos] = useState(false);
  const [errs, setErrs] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const change = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const ne: Errors = {};
    if (!form.nome.trim()) ne.nome = 'obrigatório';
    if (!form.tel.trim() || form.tel.replace(/\D/g, '').length < 9) ne.tel = 'número inválido';
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) ne.email = 'email inválido';
    if (!form.plano) ne.plano = 'escolhe um';
    if (!termos) ne.termos = 'deves aceitar para continuar';
    setErrs(ne);
    if (Object.keys(ne).length > 0) return;
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome: form.nome, tel: form.tel, email: form.email, plano: form.plano, horario: form.horario }),
    });
    if (res.ok) setSent(true);
  };

  if (sent) {
    return (
      <div style={{ padding: '48px 0', textAlign: 'center' }}>
        <div
          style={{
            width: 64,
            height: 64,
            margin: '0 auto 24px',
            borderRadius: '50%',
            background: 'var(--gold)',
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0d0d0d" strokeWidth="3" strokeLinecap="round">
            <path d="M4 12l5 5L20 6" />
          </svg>
        </div>
        <h3 style={{ fontSize: 36 }}>
          Recebido, <span className="gold">{form.nome.split(' ')[0]}</span>
        </h3>
        <p className="muted" style={{ marginTop: 16, fontSize: 16, maxWidth: 420, margin: '16px auto 0', lineHeight: 1.5 }}>
          A nossa equipa entra em contacto em até 24h, dentro do horário que indicaste.
          Entretanto, segue-nos no Instagram{' '}
          <span className="gold">@rise.fitclub</span>.
        </p>
        <button
          onClick={() => {
            setSent(false);
            setForm({ nome: '', tel: '', email: '', plano: '', horario: '' });
            setTermos(false);
            setErrs({});
          }}
          className="btn btn-outline-gold"
          style={{ marginTop: 28 }}
        >
          Enviar outro pedido
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="contact-form-grid">
      <div className={`field${errs.nome ? ' err' : ''}`} style={{ gridColumn: 'span 2' }}>
        <label htmlFor="nome">Nome completo *</label>
        <input id="nome" value={form.nome} onChange={change('nome')} placeholder="O teu nome" />
        {errs.nome && <span className="err-msg">{errs.nome}</span>}
      </div>

      <div className={`field${errs.tel ? ' err' : ''}`}>
        <label htmlFor="tel">Telemóvel *</label>
        <input id="tel" value={form.tel} onChange={change('tel')} placeholder="+351 9__ ___ ___" />
        {errs.tel && <span className="err-msg">{errs.tel}</span>}
      </div>

      <div className={`field${errs.email ? ' err' : ''}`}>
        <label htmlFor="email">Email *</label>
        <input id="email" value={form.email} onChange={change('email')} placeholder="tu@email.com" />
        {errs.email && <span className="err-msg">{errs.email}</span>}
      </div>

      <div className={`field${errs.plano ? ' err' : ''}`}>
        <label htmlFor="plano">Plano de interesse *</label>
        <select id="plano" value={form.plano} onChange={change('plano')}>
          <option value="">Escolhe um plano</option>
          <optgroup label="Planos de acesso">
            <option value="base">Pack 12 às 15 — 27€/mês</option>
            <option value="inter">Pack sem restrição de horário — 35€/mês</option>
            <option value="verao">★ Pack Verão — Paga Jun + Jul, Agosto grátis</option>
          </optgroup>
          <optgroup label="Treino Personalizado">
            <option value="pt-individual">Treino Individual (PT)</option>
            <option value="pt-duo">Treino Duo</option>
            <option value="pt-small-group">Small Group Training</option>
            <option value="online">Acompanhamento Online</option>
            <option value="sala">Acompanhamento em Sala</option>
          </optgroup>
        </select>
        {errs.plano && <span className="err-msg">{errs.plano}</span>}
      </div>

      <div className="field">
        <label htmlFor="horario">Melhor horário para contacto</label>
        <select id="horario" value={form.horario} onChange={change('horario')}>
          <option value="">Sem preferência</option>
          <option value="manha">Manhã (9h–12h)</option>
          <option value="tarde">Tarde (12h–18h)</option>
          <option value="noite">Noite (18h–21h)</option>
        </select>
      </div>

      <div style={{ gridColumn: 'span 2', marginTop: 4 }}>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={termos}
            onChange={(e) => {
              setTermos(e.target.checked);
              if (e.target.checked) setErrs((prev) => ({ ...prev, termos: undefined }));
            }}
            style={{ marginTop: 3, accentColor: 'var(--gold)', width: 16, height: 16, flexShrink: 0 }}
          />
          <span style={{ fontSize: 13, lineHeight: 1.5, color: errs.termos ? 'var(--err, #e05)' : 'inherit' }}>
            Li e aceito a{' '}
            <a href="/privacidade" target="_blank" rel="noopener noreferrer" className="gold" style={{ textDecoration: 'underline' }}>
              Política de Privacidade
            </a>{' '}
            e os{' '}
            <a href="/termos" target="_blank" rel="noopener noreferrer" className="gold" style={{ textDecoration: 'underline' }}>
              Termos e Condições
            </a>
            {' '}*
          </span>
        </label>
        {errs.termos && <span className="err-msg" style={{ marginTop: 4, display: 'block', paddingLeft: 26 }}>{errs.termos}</span>}
      </div>

      <div style={{ gridColumn: 'span 2', display: 'flex', alignItems: 'center', gap: 16, marginTop: 8, flexWrap: 'wrap' }}>
        <button type="submit" className="btn btn-gold" style={{ padding: '16px 28px', fontSize: 16 }}>
          Quero ser contactado <IconArrow rot={-90} />
        </button>
        <span className="muted" style={{ fontSize: 13, fontFamily: 'var(--mono)', letterSpacing: '.08em' }}>
          A nossa equipa entra em contacto em até 24h.
        </span>
      </div>

      <style>{`
        @media (max-width: 680px) {
          .contact-form-grid { grid-template-columns: 1fr !important; }
          .contact-form-grid > div { grid-column: span 1 !important; }
        }
      `}</style>
    </form>
  );
}
