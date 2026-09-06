import HeroSection from "@/components/ui/HeroSection";
import OldDgGeneratorContent from "@/components/sections/OldDgGeneratorContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DG Generator Buyers in Kolkata | IT Asset Disposal Services",
  description:
    "We buy old, used, and damaged DG generators from corporate offices and industries in Kolkata. Get the best price and hassle-free pickup. Contact us today!",
  alternates: {
    canonical: "/old-dg-generator",
  },
  keywords: [
    "DG generator buyer Kolkata",
    "old diesel generator buyer",
    "used DG set buyer near me",
    "scrap DG generator buyer India",
    "silent generator scrap buyer",
    "Kirloskar DG set buyer",
    "Cummins generator scrap buyer",
    "industrial generator disposal",
    "corporate DG set buyer Kolkata",
    "DG set scrap rate today",
  ],
  openGraph: {
    title: "DG Generator Buyers in Kolkata | Austic Scrap",
    description: "Buy old, used, and damaged DG generators from corporate offices and industries in Kolkata.",
    url: "https://www.austicscrap.com/old-dg-generator",
    siteName: "Austic Scrap & E-Waste Recycling",
    type: "website",
    images: [{ url: "/images/dg-set-crop.jpg", width: 1200, height: 630, alt: "Old DG generator scrap buyer in Kolkata" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DG Generator Buyers Kolkata | Austic Scrap",
    description: "Buy old, used DG generators. Best price and hassle-free pickup.",
    images: ["/images/dg-set-crop.jpg"],
  },
};

export default function OldDgGeneratorPage() {
  return (
    <main>
      <HeroSection
        title={
          <>
            Old DG Generator <span className="text-[#4CAF50]">Scrap Buyer</span>{" "}
            in Kolkata
          </>
        }
        subtitle="Premium valuation for used, damaged, and obsolete Diesel Generator sets. We provide professional dismantling and eco-friendly resource recovery."
        backgroundImage="/images/dg-set-crop.jpg"
      />
      <OldDgGeneratorContent />
    </main>
  );
}
