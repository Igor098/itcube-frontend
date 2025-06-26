import { type ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Providers } from './providers';

import './globals.css';

const inter = Inter({
  subsets: ['cyrillic'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

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
      <body className={`${inter.variable} antialiased`}>
        <div id="modal-root" />
        <Providers>
          <div className="wrapper">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
