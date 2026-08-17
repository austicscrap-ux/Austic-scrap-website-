import './globals.css';

import type { Metadata, Viewport } from 'next';
import { Inter, Josefin_Sans } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import BackToTop from '@/components/common/BackToTop';
import FloatingActions from '@/components/common/FloatingActions';
import StructuredData from '@/components/seo/StructuredData';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-josefin-sans',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.austicscrap.com';

export const viewport: Viewport = {
  themeColor: '#127749',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Austic Scrap | Office Scrap Buyers & E-Waste Recycling in Kolkata & India',
    template: '%s | Austic Scrap & Recycling',
  },
  description:
    'Austic Scrap is a certified scrap buyer & e-waste recycling company in Kolkata and Pan-India. We buy office scrap, computers, servers, IT assets, batteries, DG sets, and metal scrap with secure data destruction.',
  keywords: [
    'Office Scrap Buyers in Kolkata',
    'E-waste Recycling Kolkata',
    'IT Asset Disposition India',
    'ITAD services',
    'Corporate scrap buyer',
    'Scrap vendor Kolkata',
    'Computer scrap recycling',
    'Old AC buyer',
    'Old DG generator scrap',
    'Office workstation scrap',
    'Data destruction and security',
    'Bengaluru e-waste recycling',
    'Delhi NCR scrap buyers',
    'Mumbai scrap buyers',
    'Hyderabad scrap buyers',
    'Chennai scrap service',
    'Pune scrap buyers',
    'Battery recycling',
    'Metal recycling',
  ],
  authors: [{ name: 'Austic Scrap and Recycling', url: SITE_URL }],
  creator: 'Austic Scrap',
  publisher: 'Austic Scrap and Recycling',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-IN': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Austic Scrap & E-Waste Recycling',
    title: 'Austic Scrap | Office Scrap Buyers & E-Waste Recycling',
    description:
      'Turn your office scrap & obsolete IT assets into value. Authorized e-waste recycling, corporate office dismantling, and certified data destruction.',
    images: [
      {
        url: '/images/home%20page.jpg',
        width: 1200,
        height: 630,
        alt: 'Austic Scrap & E-Waste Recycling Office Scrap Management',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Austic Scrap | Office Scrap Buyers & E-Waste Recycling',
    description:
      'Premier office scrap buyers & e-waste recycling services in Kolkata and across India. Instant quotes & doorstep pickup.',
    images: ['/images/home%20page.jpg'],
    creator: '@austicscrap',
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google-site-verification-token',
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || '',
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION || '',
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
    },
  },
  category: 'Recycling & Waste Management',
  icons: {
    icon: [
      { url: '/images/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/images/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} ${josefinSans.variable} font-secondary`}
        suppressHydrationWarning
      >
        <Navbar />
        <FloatingActions />
        {children}
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}

