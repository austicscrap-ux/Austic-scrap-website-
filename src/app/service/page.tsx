// src/app/service/page.tsx
import HeroSection from "@/components/ui/HeroSection";
import ServiceCardsSection from "@/components/sections/ServiceCardsSection";
import CtaSection from "@/components/ui/CtaSection";
import {
  ewasteRecyclingCards,
  officeFurnitureCards,
  metalScrapCards,
} from "@/data/services";

export const metadata = {
  title: "Service | Austic Scrap Solutions",
  description:
    "Comprehensive e-waste, office scrap, and metal recycling services in Kolkata.",
  alternates: {
    canonical: "/service",
  },
  keywords: [
    "e-waste recycling services",
    "office scrap services Kolkata",
    "metal recycling services India",
    "IT asset disposition services",
    "corporate scrap management",
    "battery recycling services",
    "electrical scrap disposal",
    "DG generator disposal",
  ],
  openGraph: {
    title: "Our Services | Austic Scrap Solutions",
    description: "Comprehensive e-waste, office scrap, and metal recycling services in Kolkata and across India.",
    url: "https://www.austicscrap.com/service",
    siteName: "Austic Scrap & E-Waste Recycling",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Austic Scrap Solutions",
    description: "Comprehensive e-waste, office scrap, and metal recycling services.",
  },
};

export default function EwastePage() {
  return (
    <main className="bg-gradient-to-br from-amber-50/30 via-white to-emerald-50/20 min-h-screen">
      <HeroSection
        title={
          <>
            Responsible E-Waste{" "}
            <span className="text-[#4CAF50]">Recycling & Disposal</span>
          </>
        }
        subtitle="Leading the way in secure and environmentally friendly electronic waste management. Certified data destruction and sustainable material recovery for a cleaner future."
      />

      <div className="py-20 space-y-5">
        <ServiceCardsSection
          sectionTitle="E-WASTE RECYCLING & DISPOSAL"
          cards={ewasteRecyclingCards}
          titleColorClass="text-neutral-900"
          id="e-waste-services"
        />

        {/* Simple Divider */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
        </div>

        <ServiceCardsSection
          sectionTitle="Office Furniture Recycling"
          cards={officeFurnitureCards}
          titleColorClass="text-neutral-900"
          id="office-services"
        />

        {/* Simple Divider */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
        </div>

        <ServiceCardsSection
          sectionTitle="Metal Scrap Recycling"
          cards={metalScrapCards}
          titleColorClass="text-neutral-900"
          id="metal-services"
        />
      </div>

      <CtaSection />
    </main>
  );
}
