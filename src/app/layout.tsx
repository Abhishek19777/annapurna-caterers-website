import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import CustomCursor from '@/components/ui/custom-cursor';
import './globals.css';

export const metadata: Metadata = {
  title: 'Annapurna Delight - Top Caterers in Ravet, Pune',
  description: 'Authentic Flavours, Unforgettable Events. The Leading Caterers in Ravet, Pune since 2006. Specializing in wedding, corporate, and party catering with authentic Indian cuisine.',
  keywords: [
    'best caterers in Pune',
    'catering services Ravet',
    'wedding caterers Pune',
    'corporate event catering Pune',
    'party caterers in Pimpri-Chinchwad',
    'Annapurna Delight caterers',
    'authentic Indian catering',
    'Maharashtrian food catering',
    'event catering services',
    'top caterers near me'
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Lato:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <CustomCursor />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
