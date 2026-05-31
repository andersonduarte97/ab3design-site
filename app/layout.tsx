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
