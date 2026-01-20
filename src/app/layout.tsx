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
  keywords: "E-waste Recycling, Electronic waste recycling, IT Asset Disposition, IT Asset Disposal, E-waste Recycling in Kolkata, Electronic waste recycling in Kolkata, IT Asset Disposition in Kolkata, IT Asset Disposal in Kolakat, scrap buyer, scrap buyer near me, scrap buyer in Kolkata, scrap Dealer , scrap dealer near me  , scrap buyer in salt lake ,scrap buyer in park street, scrap buyer in newtown , old scrap buyer , old scrap buyer near me, scrap buyer india , scrap dealer , scrap dealer in kolkata,  , scrap dealer in park street , second hand scrap dealer, second hand scrap dealer in kolkata , junk yard buyer , junk yard buyer in kolkata,  solar scrap buyer , solar scrap buyer in Kolkata, second hand solar scrap buyer ,cracked solar buyer ,Furniture buyer in kolkata , old furniture buyer in kolkata  , office furniture buyer in kolkata, home furniture buer in kolkata, computer buyer ,computer buyer in kolkata , second hand computer buyer ,laptop buyer , laptop buyer in kolkata, second hand laptop buyer in kolkata , second hand laptop buyer ,copper scrap buyer ,copper scrap buyer in kolkata , alimunium scrap buyer,alimunium scrap buyer in kolkata, electrical scrap buyer in kolkata , iron scrap buyer in kolkata, wooden scrap buyer near me , wooden scrap buyer in kolkata,  waaste paper buyer , waste paper buyer near me , waste paper buyer in kolkata ,metal scrap buyer near me , metal scrap buyer in kolkata, paper scrap buyer , paper scrap buyer near me , paper scrap in kolkata ",
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
