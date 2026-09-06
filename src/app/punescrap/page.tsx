// src/app/punescrap/page.tsx
import HeroSection from "@/components/ui/HeroSection";
import PuneScrapMainContent from "@/components/sections/PuneScrapMainContent";
import PuneWhyChooseUs from "@/components/sections/PuneWhyChooseUs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Efficient Scrap Buying and Disposal Services in Pune | Austic",
  description:
    "Discover reliable scrap buying services in Pune with Austic. We offer hassle-free disposal for office and Factory Contact us for best price.",
  alternates: {
    canonical: "/punescrap",
  },
  keywords: [
    "scrap buyers Pune",
    "office scrap buyer Hinjawadi",
    "corporate scrap disposal Magarpatta",
    "furniture scrap buyer Pune",
    "factory scrap dealer Pune",
    "office dismantling Kharadi",
    "workstation scrap buyer Pune",
    "industrial scrap buyer Pimpri-Chinchwad",
    "old furniture buyer Pune",
    "AC scrap buyer Pune",
  ],
  openGraph: {
    title: "Efficient Scrap Buying and Disposal Services in Pune",
    description: "Reliable scrap buying services in Pune. Hassle-free disposal for office and factory scrap.",
    url: "https://www.austicscrap.com/punescrap",
    siteName: "Austic Scrap & E-Waste Recycling",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pune Scrap Buyers | Austic Scrap",
    description: "Efficient scrap buying and disposal services in Pune.",
  },
};

export default function PuneScrapPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Locations", url: "/#locations" },
          { name: "Pune Scrap", url: "/punescrap" },
        ]}
      />
      <HeroSection
        title={
          <>
            Efficient Scrap Buying and{" "}
            <span className="text-[#4CAF50]">Disposal in Pune</span>
          </>
        }
        subtitle="Reliable scrap management for Pune's tech corridors and industrial zones. Get fair market value and hassle-free pickup for your office and factory assets."
      />
      <PuneScrapMainContent />
      <PuneWhyChooseUs />
    </main>
  );
}
