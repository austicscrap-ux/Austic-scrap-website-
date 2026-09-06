import HeroSection from "@/components/ui/HeroSection";
import ChennaiScrapServiceContent from "@/components/sections/ChennaiScrapServiceContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Scrap Buyers in Chennai | Office Scrap Disposal | Austic",
  description:
    "Eco-friendly scrap collection services in Chennai with Austic. We offer professional disposal solutions for office furniture, DG sets, chiller AC plants.",
  alternates: {
    canonical: "/chennai-scrap-service",
  },
  keywords: [
    "scrap buyers Chennai",
    "office scrap buyer OMR Chennai",
    "corporate scrap disposal Guindy",
    "furniture scrap buyer Chennai",
    "DG set buyer Chennai",
    "chiller AC plant scrap buyer",
    "workstation scrap buyer Chennai",
    "industrial scrap buyer Ambattur",
    "old furniture buyer Chennai",
    "metal scrap dealer Chennai",
  ],
  openGraph: {
    title: "Corporate Scrap Buyers in Chennai | Office Scrap Disposal",
    description: "Eco-friendly scrap collection in Chennai. Professional disposal for office furniture, DG sets, chiller AC plants.",
    url: "https://www.austicscrap.com/chennai-scrap-service",
    siteName: "Austic Scrap & E-Waste Recycling",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chennai Scrap Buyers | Austic Scrap",
    description: "Eco-friendly scrap collection services in Chennai.",
  },
};

export default function ChennaiScrapServicePage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Locations", url: "/#locations" },
          { name: "Chennai Scrap", url: "/chennai-scrap-service" },
        ]}
      />
      <HeroSection
        title={
          <>
            Eco-Friendly Scrap{" "}
            <span className="text-[#4CAF50]">Recycling in Chennai</span>
          </>
        }
        subtitle="Premium scrap management for Chennai's vibrant industrial and corporate sectors. Sustainable disposal solutions for office furniture, DG sets, and mechanical plants."
      />
      <ChennaiScrapServiceContent />
    </main>
  );
}
