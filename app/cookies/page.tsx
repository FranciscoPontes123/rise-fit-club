import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies — Rise Fit Club',
  description: 'Política de cookies do Rise Fit Club.',
};

const LAST_UPDATED = '29 de maio de 2026';

export default function CookiesPage() {
  return (
    <div className="page-enter">
      <section className="page" style={{ paddingTop: 160, paddingBottom: 60 }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 20 }}>— Legal</div>
          <h1 style={{ fontSize: 'clamp(40px,7vw,100px)', lineHeight: 0.9 }}>
            Política de <span className="gold">Cookies</span>.
          </h1>
          <p className="muted" style={{ marginTop: 20, fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase' }}>
            Última atualização: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: 140, borderTop: '1px solid var(--line)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48, paddingTop: 60 }}>

            <Block title="1. O que são Cookies?">
              <p>Cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita um website. Permitem ao site recordar as suas preferências e melhorar a sua experiência de navegação.</p>
            </Block>

            <Block title="2. Cookies que Utilizamos">
              <p>O website do Rise Fit Club utiliza apenas cookies estritamente necessários ao seu funcionamento:</p>
              <table>
                <thead>
                  <tr>
                    <th>Cookie</th>
                    <th>Finalidade</th>
                    <th>Duração</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>__next*</td>
                    <td>Funcionamento técnico do website (Next.js)</td>
                    <td>Sessão</td>
                  </tr>
                  <tr>
                    <td>Preferências de sessão</td>
                    <td>Manter o estado da navegação</td>
                    <td>Sessão</td>
                  </tr>
                </tbody>
              </table>
              <p>Não utilizamos cookies de rastreamento, publicidade ou analytics de terceiros.</p>
            </Block>

            <Block title="3. Cookies de Terceiros">
              <p>O formulário de contacto utiliza o serviço <strong>Formspree</strong>. Este serviço pode definir os seus próprios cookies para funcionamento técnico. Consulte a política de cookies do Formspree em formspree.io para mais informação.</p>
            </Block>

            <Block title="4. Como Gerir os Cookies">
              <p>Pode controlar e/ou eliminar cookies a qualquer momento através das definições do seu browser. A maioria dos browsers permite:</p>
              <ul>
                <li>Ver os cookies armazenados e eliminá-los individualmente</li>
                <li>Bloquear cookies de terceiros</li>
                <li>Bloquear todos os cookies</li>
                <li>Eliminar todos os cookies ao fechar o browser</li>
              </ul>
              <p>Note que bloquear cookies estritamente necessários pode afetar o funcionamento correto do website.</p>
              <p>Para saber como gerir cookies no seu browser específico, consulte a sua documentação de ajuda:</p>
              <ul>
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="gold">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/pt-PT/kb/cookies-informacao-que-os-websites-guardam-no-seu-computador" target="_blank" rel="noopener noreferrer" className="gold">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/pt-pt/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="gold">Safari</a></li>
                <li><a href="https://support.microsoft.com/pt-pt/windows/eliminar-e-gerir-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="gold">Microsoft Edge</a></li>
              </ul>
            </Block>

            <Block title="5. Alterações a esta Política">
              <p>Podemos atualizar esta política periodicamente para refletir alterações na nossa utilização de cookies. A data da última atualização encontra-se no topo desta página.</p>
            </Block>

            <Block title="6. Contacto">
              <p>Para qualquer questão relacionada com a nossa utilização de cookies, contacte-nos em <a href="mailto:risefitclub.almargem@gmail.com" className="gold">risefitclub.almargem@gmail.com</a>.</p>
            </Block>

          </div>
        </div>
      </section>

      <style>{`
        table { width: 100%; border-collapse: collapse; margin: 8px 0; }
        th { text-align: left; padding: 10px 14px; background: var(--surface); font-family: var(--mono); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; color: var(--gold); border: 1px solid var(--line); }
        td { padding: 10px 14px; border: 1px solid var(--line); font-family: var(--mono); font-size: 13px; color: #999; }
      `}</style>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ borderTop: '1px solid var(--line)', paddingTop: 32 }}>
      <h2 style={{ fontFamily: 'var(--head-font)', fontWeight: 800, fontSize: 22, textTransform: 'uppercase', letterSpacing: '.04em', marginBottom: 20, color: 'var(--gold)' }}>
        {title}
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15, lineHeight: 1.7, color: '#c0c0c0' }}>
        {children}
      </div>
    </div>
  );
}
