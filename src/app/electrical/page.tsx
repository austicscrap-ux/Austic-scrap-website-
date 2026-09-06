import HeroSection from "@/components/ui/HeroSection";
import ElectricalScrapContent from "@/components/sections/ElectricalScrapContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Electrical Scrap Buyers in Kolkata | Reliable Electrical Scrap Disposal | Austic",
  description:
    "We buy electrical scrap from Corporate offices, banks, and Organizations. Safe and eco-friendly disposal of your electrical waste. Contact us for best prices",
  alternates: {
    canonical: "/electrical",
  },
  keywords: [
    "electrical scrap buyers Kolkata",
    "electrical waste disposal",
    "copper wire scrap buyer",
    "transformer scrap buyer Kolkata",
    "switchgear scrap buyer",
    "cable scrap buyer India",
    "panel board scrap buyer",
    "electrical equipment disposal",
    "corporate electrical scrap disposal",
    "industrial electrical scrap buyer",
  ],
  openGraph: {
    title: "Electrical Scrap Buyers in Kolkata | Austic Scrap",
    description: "Buy electrical scrap from corporate offices, banks, and organizations. Safe and eco-friendly disposal.",
    url: "https://www.austicscrap.com/electrical",
    siteName: "Austic Scrap & E-Waste Recycling",
    type: "website",
    images: [{ url: "/images/electrical-scrap-compressed.jpg", width: 1200, height: 630, alt: "Electrical scrap buying services in Kolkata" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrical Scrap Buyers Kolkata | Austic Scrap",
    description: "Electrical scrap buying from corporate offices and banks.",
    images: ["/images/electrical-scrap-compressed.jpg"],
  },
};

export default function ElectricalPage() {
  return (
    <main>
      <HeroSection
        title={
          <>
            Electrical <span className="text-[#4CAF50]">Scrap Buyers</span> in
            Kolkata
          </>
        }
        subtitle="Leading the way in professional electrical waste management. We offer the best market rates for corporate and industrial electrical assets."
        backgroundImage="/images/electrical-scrap-compressed.jpg"
      />
      <ElectricalScrapContent />
    </main>
  );
}
