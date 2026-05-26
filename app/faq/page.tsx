import type { Metadata } from 'next';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'FAQ — Rise Fit Club',
  description: 'Perguntas frequentes sobre o Rise Fit Club — acesso, planos, cancelamento, estacionamento e muito mais.',
};

export default function FaqPage() {
  return (
    <div className="page-enter">
      <section className="page" style={{ paddingTop: 160, paddingBottom: 60 }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 20 }}>— 06 / FAQ</div>
          <h1 style={{ fontSize: 'clamp(56px,9vw,140px)', maxWidth: '14ch' }}>
            <span className="gold">FAQ</span>
          </h1>
        </div>
      </section>

      <section style={{ paddingBottom: 140 }}>
        <div className="container" style={{ maxWidth: 980 }}>
          <FaqAccordion />
        </div>
      </section>
    </div>
  );
}
