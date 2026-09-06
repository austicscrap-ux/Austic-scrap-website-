import { Metadata } from "next";
import ItNonItScrapContent from "@/components/sections/ItNonItScrapContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "IT & Non-IT Scrap Buyers in Kolkata & India | Austic Scrap",
  description:
    "Sell your old computers, laptops, servers, office furniture, AC units, and industrial scrap at the best market rates. Austic Scrap offers eco-friendly IT & Non-IT scrap buying services across India.",
  keywords: [
    "IT scrap buyers Kolkata",
    "Non-IT scrap buyers India",
    "Old computer buyers Kolkata",
    "Office furniture scrap dealer",
    "Corporate scrap disposal service",
    "Server rack scrap buyer",
    "Laptop scrap recycling Kolkata",
    "Printer scanner scrap buyer",
    "Industrial machinery scrap",
    "Bulk IT asset buyer India",
  ],
  alternates: {
    canonical: "/it-non-it-scrap",
  },
  openGraph: {
    type: "website",
    url: "https://www.austicscrap.com/it-non-it-scrap",
    title: "IT & Non-IT Scrap Buyers | Best Market Rates | Austic",
    description:
      "Sell old computers, laptops, servers, office furniture & industrial scrap at best rates. Eco-friendly disposal across Kolkata & India.",
    siteName: "Austic Scrap & E-Waste Recycling",
    images: [{ url: "/images/home-page.jpg", width: 1200, height: 630, alt: "IT and non-IT scrap buying services across India by Austic Scrap" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IT & Non-IT Scrap Buyers | Best Market Rates | Austic",
    description:
      "Sell old computers, laptops, servers & office furniture at best rates. Eco-friendly disposal across India.",
    images: ["/images/home-page.jpg"],
    creator: "@austicscrap",
  },
};

export default function ItNonItScrapPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Services", url: "/service" },
          { name: "IT & Non-IT Scrap", url: "/it-non-it-scrap" },
        ]}
      />
      <ServiceSchema
        name="IT & Non-IT Scrap Buying Services"
        description="Buy and recycle all IT scrap (computers, servers, laptops) and non-IT scrap (furniture, AC, machinery) at competitive market rates."
        url="/it-non-it-scrap"
        serviceType="IT & Non-IT Scrap Buying"
        image="/images/home-page.jpg"
      />
      <ItNonItScrapContent />
    </main>
  );
}

