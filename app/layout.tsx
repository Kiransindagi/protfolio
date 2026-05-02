import type { Metadata } from 'next';
import { Space_Grotesk, Space_Mono } from 'next/font/google';
import '../app/globals.css';
import { cn } from '@/lib/utils';
import SmoothScroll from '@/components/SmoothScroll';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-grotesk',
  weight: ['300', '400', '500', '600', '700'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Kiran Sindagi — AI/ML Engineer',
  description: 'AI/ML Engineering student, building intelligent systems that work in the real world.',
};

import CursorFog from '@/components/ui/CursorFog';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(spaceGrotesk.variable, spaceMono.variable, 'antialiased')} suppressHydrationWarning>
        <CursorFog />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
