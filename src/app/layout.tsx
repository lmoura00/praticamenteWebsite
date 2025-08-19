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

// Geist Mono is not used directly but kept for potential future use
// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: 'Praticamente - Habilidades Sociais com ABA',
  description: 'Desenvolvendo habilidades sociais em crianças e adolescentes com TEA através da Análise do Comportamento Aplicada (ABA).',
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
          // geistMono.variable, // Removed as it's not currently used
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
