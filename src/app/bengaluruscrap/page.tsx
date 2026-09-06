import HeroSection from "@/components/ui/HeroSection";
import BengaluruScrapContent from "@/components/sections/BengaluruScrapContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Efficient & Eco-Friendly Scrap Collection Services in Bengaluru | Austic",
  description:
    "Streamline your scrap disposal with Austic's reliable services in Bengaluru. From office furniture to metal waste, we ensure hassle-free, eco-friendly recycling for a cleaner city.",
  alternates: {
    canonical: "/bengaluruscrap",
  },
  keywords: [
    "scrap buyers Bengaluru",
    "office scrap buyer Electronic City",
    "corporate scrap disposal Whitefield",
    "furniture scrap buyer Bengaluru",
    "metal scrap dealer Bengaluru",
    "office dismantling Manyata Tech Park",
    "workstation scrap buyer Bengaluru",
    "IT park scrap management Bengaluru",
    "old furniture buyer Koramangala",
    "industrial scrap buyer Peenya Bengaluru",
  ],
  openGraph: {
    title: "Efficient & Eco-Friendly Scrap Collection in Bengaluru",
    description: "Streamline your scrap disposal with Austic's reliable services in Bengaluru. Hassle-free, eco-friendly recycling.",
    url: "https://www.austicscrap.com/bengaluruscrap",
    siteName: "Austic Scrap & E-Waste Recycling",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bengaluru Scrap Buyers | Austic Scrap",
    description: "Eco-friendly scrap collection services in Bengaluru. Office furniture to metal waste.",
  },
};

export default function BengaluruScrapPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Locations", url: "/#locations" },
          { name: "Bengaluru Scrap", url: "/bengaluruscrap" },
        ]}
      />
      <HeroSection
        title={
          <>
            Efficient Scrap Collection &{" "}
            <span className="text-[#4CAF50]">Recycling in Bengaluru</span>
          </>
        }
        subtitle="Premium scrap management for Bengaluru's tech parks, corporate offices, and factories. Sustainable disposal and fair market value for your assets."
      />
      <BengaluruScrapContent />
    </main>
  );
}
