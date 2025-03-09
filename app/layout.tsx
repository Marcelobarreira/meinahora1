import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Mei na Hora - Consultoria MEI',
  description: 'Facilitamos a vida do Microempreendedor Individual! Abra, regularize ou cancele seu CNPJ MEI de forma rápida, segura e 100% online. Atendimento especializado para todas as suas necessidades MEI.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${geistSans.variable}  antialiased`}>{children}</body>
    </html>
  );
}
