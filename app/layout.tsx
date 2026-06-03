import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import WhatsAppButton from '@/components/ui/WhatsAppButton';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ab3Design | Criação de Sites e Automações',
  description:
    'Criamos sites modernos e automações inteligentes para negócios que querem resultados reais.',
  metadataBase: new URL('https://www.ab3design.com.br'),
  openGraph: {
    title: 'ab3Design | Criação de Sites e Automações',
    description:
      'Criamos sites modernos e automações inteligentes para negócios que querem resultados reais.',
    url: 'https://www.ab3design.com.br',
    siteName: 'ab3Design',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ab3Design — Design que converte. Código que escala.',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ab3Design | Criação de Sites e Automações',
    description:
      'Criamos sites modernos e automações inteligentes para negócios que querem resultados reais.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
