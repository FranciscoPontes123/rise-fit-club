import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidade — Rise Fit Club',
  description: 'Política de privacidade do Rise Fit Club, em conformidade com o RGPD.',
};

const LAST_UPDATED = '29 de maio de 2026';

export default function PrivacidadePage() {
  return (
    <div className="page-enter">
      <section className="page" style={{ paddingTop: 160, paddingBottom: 60 }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 20 }}>— Legal</div>
          <h1 style={{ fontSize: 'clamp(40px,7vw,100px)', lineHeight: 0.9 }}>
            Política de <span className="gold">Privacidade</span>.
          </h1>
          <p className="muted" style={{ marginTop: 20, fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase' }}>
            Última atualização: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: 140, borderTop: '1px solid var(--line)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48, paddingTop: 60 }}>

            <Block title="1. Responsável pelo Tratamento">
              <p>O responsável pelo tratamento dos seus dados pessoais é o <strong>Rise Fit Club</strong>, com instalações em Almargem do Bispo, Sintra, Portugal.</p>
              <p>Para qualquer questão relacionada com privacidade, pode contactar-nos através do email <a href="mailto:risefitclub.almargem@gmail.com" className="gold">risefitclub.almargem@gmail.com</a>.</p>
            </Block>

            <Block title="2. Dados Recolhidos">
              <p>Recolhemos os seguintes dados pessoais quando preenche o formulário de contacto:</p>
              <ul>
                <li>Nome completo</li>
                <li>Número de telemóvel</li>
                <li>Endereço de email</li>
                <li>Plano de interesse</li>
                <li>Preferência de horário de contacto</li>
              </ul>
              <p>Não recolhemos dados de categorias especiais (dados de saúde, origem étnica, etc.) sem consentimento expresso.</p>
            </Block>

            <Block title="3. Finalidade e Base Legal">
              <p>Os seus dados são utilizados exclusivamente para:</p>
              <ul>
                <li><strong>Responder ao seu pedido de contacto</strong> — base legal: execução de pré-contrato (art. 6.º, n.º 1, al. b) do RGPD)</li>
                <li><strong>Gestão da relação comercial</strong>, caso se torne membro — base legal: execução de contrato</li>
                <li><strong>Envio de informação sobre os nossos serviços</strong>, apenas se der o seu consentimento explícito</li>
              </ul>
            </Block>

            <Block title="4. Subprocessadores">
              <p>Para o processamento do formulário de contacto utilizamos o serviço <strong>Formspree</strong> (formspree.io), com sede nos EUA, que actua como subprocessador. Os dados são transmitidos de forma segura e tratados de acordo com as suas políticas de privacidade, disponíveis em formspree.io/legal/privacy-policy.</p>
            </Block>

            <Block title="5. Conservação dos Dados">
              <p>Os seus dados são conservados pelo período estritamente necessário para a finalidade que motivou a sua recolha:</p>
              <ul>
                <li>Pedidos de contacto não convertidos: <strong>12 meses</strong></li>
                <li>Dados de membros ativos: durante a vigência do contrato e <strong>5 anos</strong> após o seu término, por obrigações legais e fiscais</li>
              </ul>
            </Block>

            <Block title="6. Os Seus Direitos">
              <p>Nos termos do RGPD, tem os seguintes direitos:</p>
              <ul>
                <li><strong>Acesso</strong> — saber quais os dados que temos sobre si</li>
                <li><strong>Retificação</strong> — corrigir dados incorretos ou incompletos</li>
                <li><strong>Apagamento</strong> — solicitar a eliminação dos seus dados</li>
                <li><strong>Portabilidade</strong> — receber os seus dados num formato estruturado</li>
                <li><strong>Oposição</strong> — opor-se ao tratamento para fins de marketing</li>
                <li><strong>Limitação</strong> — restringir o tratamento em determinadas circunstâncias</li>
              </ul>
              <p>Para exercer qualquer um destes direitos, contacte-nos em <a href="mailto:risefitclub.almargem@gmail.com" className="gold">risefitclub.almargem@gmail.com</a>. Tem ainda o direito de apresentar reclamação à <strong>CNPD</strong> (Comissão Nacional de Proteção de Dados) em cnpd.pt.</p>
            </Block>

            <Block title="7. Segurança">
              <p>Implementamos medidas técnicas e organizacionais adequadas para proteger os seus dados contra acesso não autorizado, alteração, divulgação ou destruição.</p>
            </Block>

            <Block title="8. Alterações a esta Política">
              <p>Podemos atualizar esta política periodicamente. A data da última atualização encontra-se no topo desta página. Em caso de alterações significativas, notificaremos os membros ativos por email.</p>
            </Block>

          </div>
        </div>
      </section>
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
