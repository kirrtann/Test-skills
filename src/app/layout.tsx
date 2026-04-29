import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Providers } from './providers';

import './globals.css';
import { Header } from '@/components/layout/Header';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export const metadata: Metadata = {
  title: 'MediCare Hospital',
  description: 'World-class healthcare with compassionate doctors and modern facilities.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
