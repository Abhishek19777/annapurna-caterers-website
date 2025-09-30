
import { Lato, Playfair_Display, Dancing_Script } from 'next/font/google';

export const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

export const playfair_display = Playfair_Display({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-playfair-display',
  display: 'swap',
});

export const dancing_script = Dancing_Script({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-dancing-script',
  display: 'swap',
});
