import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';

import Footer from '@/widgets/footer';
import { Header } from '@/widgets/header';

import { Providers } from './providers';

import './globals.css';
import { ReactNode } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const inter = Inter({ subsets: ['cyrillic'], weight: ['400', '500', '600'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    default: 'IT Куб',
    template: 'IT Куб | %s',
  },
  description: 'Тест',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${inter.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <Providers>
          <div className="wrapper">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
