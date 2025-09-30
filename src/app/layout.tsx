
import type { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster"
import CustomCursor from '@/components/ui/custom-cursor';
import './globals.css';
import { PHONE_NUMBER, ADDRESS, GOOGLE_MAPS_LINK } from '@/lib/constants';

const siteUrl = 'https://shreeomannapurna.com';
const title = 'Shree Om Annapurna Caterers - Top Caterers in Ravet, Pune';
const description = 'Authentic Flavours, Unforgettable Events. The Leading Caterers in Ravet, Pune since 2006. Specializing in wedding, corporate, and party catering with authentic Indian cuisine.';
const heroImageUrl = `https://i.ibb.co/LhYyzvr5/A-lavish-Indian-food-buffet-setup-for-a-celebration.jpg`;
const logoUrl = 'https://i.ibb.co/hFVdCxhw/Catering-Logo-with-Traditional-Thali-Icon.png';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: title,
  description: description,
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
        width: 1200,
        height: 630,
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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Shree Om Annapurna Caterers',
  image: heroImageUrl,
  logo: logoUrl,
  '@id': siteUrl,
  url: siteUrl,
  telephone: PHONE_NUMBER,
  priceRange: '₹₹',
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
    longitude: 73.766869 
  },
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
  sameAs: [GOOGLE_MAPS_LINK],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <CustomCursor />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
