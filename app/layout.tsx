import React from "react"
import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';

const geist = Geist({ subsets: ['latin'] });
const geistMono = Geist_Mono({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sid OS Solutions - Software Installation & Support',
  description:
    'Software installation, configuration, and support services for Ubuntu, Windows, dual boot systems. Doorstep and office services available.',
  generator: 'v0.app',
  keywords:
    'software installation, Ubuntu, Windows, dual boot, software support, technical services',
  authors: [{ name: 'Sid OS Solutions' }],
  openGraph: {
    title: 'Sid OS Solutions',
    description:
      'Professional software solutions and installation services',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} ${geistMono.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
