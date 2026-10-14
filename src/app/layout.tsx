
import type { Metadata, Viewport } from 'next';
import { Toaster } from "@/components/ui/toaster"
import CustomCursor from '@/components/ui/custom-cursor';
import './globals.css';
import { PHONE_NUMBER, GOOGLE_MAPS_LINK, INSTAGRAM_LINK } from '@/lib/constants';
import { dm_sans, cormorant, cormorant_italic, dancing_script } from './fonts';
import { cn } from '@/lib/utils';
import Analytics from '@/components/analytics';

const siteUrl = 'https://shreeomannapurna.com';
const title = 'Shree Om Annapurna Caterers - Top Caterers in Ravet, Pune';
const description = 'Top-rated caterers in Ravet, Pune since 2006. Specializing in wedding, corporate, and party catering with authentic Maharashtrian & Indian cuisine.';
// Local files (not a third-party host) so link previews and search never break.
const heroImageUrl = `${siteUrl}/images/hero/hero-background.jpg`;
const logoUrl = `${siteUrl}/images/logo.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: '%s | Shree Om Annapurna Caterers' },
  description: description,
  applicationName: 'Shree Om Annapurna Caterers',
  category: 'Catering',
  keywords: [
    'best caterers in Pune',
    'catering services Ravet',
    'wedding caterers Pune',
    'corporate event catering Pune',
    'party caterers in Pimpri-Chinchwad',
    'Shree Om Annapurna Caterers',
    'authentic Indian catering',
    'Maharashtrian food catering',
    'event catering services',
    'top caterers near me'
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: title,
    description: description,
    url: '/',
    siteName: 'Shree Om Annapurna Caterers',
    images: [
      {
        url: heroImageUrl,
        width: 1600,
        height: 896,
        alt: 'A lavish buffet by Shree Om Annapurna Caterers',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: [heroImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#5E0F1F',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'FoodEstablishment'],
  name: 'Shree Om Annapurna Caterers',
  description,
  image: [heroImageUrl],
  logo: logoUrl,
  '@id': `${siteUrl}/#business`,
  url: siteUrl,
  telephone: PHONE_NUMBER,
  priceRange: '₹₹',
  foundingDate: '2006',
  servesCuisine: ['Maharashtrian', 'Indian'],
  areaServed: ['Ravet', 'Pimpri-Chinchwad', 'Pune', 'Kiwale', 'Dehu Road'].map((name) => ({
    '@type': 'City',
    name,
  })),
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Dattanagar, Sarpanch wasti, near Datta temple, Kiwale',
    addressLocality: 'Ravet',
    addressRegion: 'MH',
    postalCode: '412101',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.643096,
    longitude: 73.766869,
  },
  hasMap: GOOGLE_MAPS_LINK,
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '08:00',
    closes: '22:00',
  },
  sameAs: [GOOGLE_MAPS_LINK, INSTAGRAM_LINK],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={cn(
          "font-body antialiased",
          dm_sans.variable,
          cormorant.variable,
          cormorant_italic.variable,
          dancing_script.variable
        )}>
        <Analytics />
        <CustomCursor />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
