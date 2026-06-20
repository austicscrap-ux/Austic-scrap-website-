import './globals.css';

import type { Metadata } from 'next';
import { Inter, Josefin_Sans } from 'next/font/google';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import BackToTop from '@/components/common/BackToTop';
import FloatingActions from '@/components/common/FloatingActions';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  variable: '--font-josefin-sans',
});

export const metadata: Metadata = {
  title: 'Office Scrap Buyers in Kolkata | Scrap Vendor Austic',
  description: 'Austic Scrap is a leading e-waste recycling and office scrap management company in Kolkata. Our eco-friendly services ensure safe disposal. Contact us today.',
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
