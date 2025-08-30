import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { cn } from '@/lib/utils';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Praticamente - Habilidades Sociais com ABA',
  description: 'Desenvolvendo habilidades sociais em crianças e adolescentes com TEA através da Análise do Comportamento Aplicada (ABA).',
  verification: {
    google: '03q7RF1WQrV3pP_ctXSyQ-mgbSP8uh299fWGw7TcbVs',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={cn(
          geistSans.variable,
          'antialiased min-h-screen flex flex-col'
        )}
      >
        <Header />
        <main >{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}