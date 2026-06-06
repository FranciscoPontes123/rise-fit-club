import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Termos e Condições — Rise Fit Club',
  description: 'Termos e condições de utilização dos serviços do Rise Fit Club.',
};

const LAST_UPDATED = '6 de junho de 2026';

export default function TermosPage() {
  return (
    <div className="page-enter">
      <section className="page" style={{ paddingTop: 160, paddingBottom: 60 }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 20 }}>— Legal</div>
          <h1 style={{ fontSize: 'clamp(40px,7vw,100px)', lineHeight: 0.9 }}>
            Termos e <span className="gold">Condições</span>.
          </h1>
          <p className="muted" style={{ marginTop: 20, fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase' }}>
            Última atualização: {LAST_UPDATED}
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: 140, borderTop: '1px solid var(--line)' }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48, paddingTop: 60 }}>

            <Block title="1. Identificação">
              <p>Estes Termos e Condições regem a utilização dos serviços prestados pelo <strong>Rise Fit Club</strong>, com instalações em Almargem do Bispo, Sintra, Portugal.</p>
              <p>Contacto: <a href="mailto:risefitclub.almargem@gmail.com" className="gold">risefitclub.almargem@gmail.com</a> · <a href="https://wa.me/351963329814" target="_blank" rel="noopener noreferrer" className="gold">+351 963 329 814</a></p>
            </Block>

            <Block title="2. Adesão e Inscrição">
              <p>A adesão ao Rise Fit Club implica a aceitação integral dos presentes Termos e Condições. A inscrição é formalizada após contacto com a nossa equipa e pagamento da primeira mensalidade.</p>
              <p>Todos os novos membros beneficiam de uma <strong>avaliação física inicial gratuita</strong>, agendada no momento da inscrição.</p>
            </Block>

            <Block title="3. Planos e Preços">
              <p>Os planos disponíveis, respetivos preços e condições de acesso encontram-se detalhados na página <a href="/planos" className="gold">Planos</a>. O Rise Fit Club reserva-se o direito de alterar os preços, com aviso prévio de 30 dias aos membros ativos.</p>
              <p>Os preços apresentados incluem IVA à taxa legal em vigor.</p>
            </Block>

            <Block title="4. Pagamento">
              <p>Os métodos de pagamento aceites são:</p>
              <ul>
                <li>Transferência bancária</li>
                <li>MBWay</li>
                <li>Numerário</li>
              </ul>
              <p>O pagamento é efetuado mensalmente, até ao dia 2 de cada mês. O não pagamento dentro do prazo pode resultar na suspensão do acesso.</p>
            </Block>

            <Block title="5. Cancelamento">
              <p>Não existe fidelização. O membro pode cancelar a sua subscrição a qualquer momento, desde que o pedido seja submetido <strong>até ao dia 15 do mês anterior</strong> ao pretendido para cessação.</p>
              <p>O cancelamento deve ser comunicado por escrito através do email <a href="mailto:risefitclub.almargem@gmail.com" className="gold">risefitclub.almargem@gmail.com</a> ou via WhatsApp.</p>
            </Block>

            <Block title="6. Regras de Utilização do Espaço">
              <ul>
                <li>É obrigatório o uso de calçado desportivo adequado</li>
                <li>Os equipamentos devem ser limpos após utilização</li>
                <li>É proibido o consumo de alimentos nas salas de treino</li>
                <li>O acesso é pessoal e intransmissível</li>
                <li>O Rise Fit Club não se responsabiliza por objetos perdidos ou roubados</li>
                <li>Comportamentos desrespeitosos para com outros membros ou staff resultam em exclusão imediata sem reembolso</li>
              </ul>
            </Block>

            <Block title="7. Responsabilidade e Saúde">
              <p>O membro declara estar em condições físicas adequadas para a prática de exercício. Em caso de condição médica ou lesão, recomendamos consulta médica prévia e informamos a nossa equipa na avaliação inicial.</p>
              <p>O Rise Fit Club não se responsabiliza por lesões resultantes do incumprimento das instruções do staff ou da má utilização dos equipamentos.</p>
            </Block>

            <Block title="8. Propriedade Intelectual">
              <p>Todo o conteúdo do website do Rise Fit Club (textos, imagens, logótipos, design) é propriedade do Rise Fit Club e não pode ser reproduzido sem autorização prévia por escrito.</p>
            </Block>

            <Block title="9. Alterações aos Termos">
              <p>O Rise Fit Club reserva-se o direito de alterar estes Termos e Condições, notificando os membros ativos com antecedência mínima de 30 dias.</p>
            </Block>

            <Block title="10. Lei Aplicável">
              <p>Estes Termos e Condições são regidos pela lei portuguesa. Em caso de litígio, as partes comprometem-se a recorrer, em primeiro lugar, a meios de resolução alternativa de conflitos. O tribunal competente é o da comarca de Sintra.</p>
              <p>Para resolução de litígios de consumo, pode recorrer ao <strong>Centro de Arbitragem de Conflitos de Consumo</strong> em consumidor.pt.</p>
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
