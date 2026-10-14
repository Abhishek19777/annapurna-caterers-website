import { DM_Sans, Cormorant_Garamond, Dancing_Script } from 'next/font/google';

// Body: DM Sans – clean, friendly, very readable on phones.
export const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

// Display: Cormorant Garamond – refined high-contrast serif for a premium feel.
export const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: 'normal',
  variable: '--font-display',
  display: 'swap',
});

// Italic is its own single-style instance (Turbopack can't load two styles in one call).
export const cormorant_italic = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['500', '600'],
  style: 'italic',
  variable: '--font-display-italic',
  display: 'swap',
});

// Script: used for the logo and the "Welcome to" line only.
export const dancing_script = Dancing_Script({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-dancing-script',
  display: 'swap',
});
