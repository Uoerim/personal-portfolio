import type { Metadata } from 'next';
import { Inter, Space_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] });
const spaceMono = Space_Mono({ variable: '--font-space-mono', weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Yosif Ibrahim',
  description: 'Portfolio of Yosif Ibrahim, a Computer Engineer and Full-Stack Developer specializing in React, Python, and scalable digital solutions.',
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceMono.variable} antialiased`}>
      <body className="bg-white text-[#1a1a1a]">
        {children}
      </body>
    </html>
  );
}

