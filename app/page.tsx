import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import ServicesStrip from '@/components/sections/ServicesStrip';
import SocialProof from '@/components/sections/SocialProof';
import StaffTeaser from '@/components/sections/StaffTeaser';
import TransformTeaser from '@/components/sections/TransformTeaser';
import LocationStrip from '@/components/sections/LocationStrip';
export const metadata: Metadata = {
  title: 'Rise Fit Club — Underground Gym · Almargem do Bispo, Sintra',
  description:
    'Treino real, equipa real, sem teatro. Treino livre, personalizado, aulas de grupo, pilates clínico e jiu jitsu em Almargem do Bispo, Sintra.',
};

export default function HomePage() {
  return (
    <div className="page-enter">
      <Hero />
      <ServicesStrip />
      <SocialProof />
      <StaffTeaser />
      <TransformTeaser />
      <LocationStrip />
    </div>
  );
}
