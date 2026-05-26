import type { Metadata } from 'next';
import { Barlow_Condensed, Syne, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

const barlowCondensed = Barlow_Condensed({
  variable: '--font-barlow-condensed',
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  display: 'swap',
});

const syne = Syne({
  variable: '--font-syne',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rise Fit Club — Almargem do Bispo, Sintra',
  description:
    'Underground gym em Almargem do Bispo. Treino livre, personalizado, aulas de grupo, pilates clínico e jiu jitsu sob o mesmo tecto.',
  openGraph: {
    title: 'Rise Fit Club',
    description: 'Underground gym em Almargem do Bispo, Sintra.',
    locale: 'pt_PT',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt"
      className={`${barlowCondensed.variable} ${syne.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
