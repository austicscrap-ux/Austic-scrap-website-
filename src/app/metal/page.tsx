import HeroSection from "@/components/ui/HeroSection";
import MetalScrapContent from "@/components/sections/MetalScrapContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata = {
  title: "Metal Scrap Buyers in Kolkata | Top Metal Scrap Dealers | Austic",
  description:
    "Get the best rates for your metal scrap in Kolkata. We specialize in buying ferrous and non-ferrous metal scrap. Sell your scrap today.",
  alternates: {
    canonical: "/metal",
  },
  keywords: [
    "Metal scrap buyers in Kolkata",
    "Ferrous metal scrap dealer",
    "Non-ferrous scrap buyer Kolkata",
    "Copper scrap buyer Salt Lake",
    "Aluminum scrap recycling Kolkata",
    "Steel scrap buyer industrial",
    "Iron scrap dealer Howrah",
    "Brass scrap buyer Kolkata",
    "Metal recycling company India",
    "Best metal scrap rates Kolkata",
  ],
  openGraph: {
    type: "website" as const,
    url: "https://www.austicscrap.com/metal",
    title: "Metal Scrap Buyers in Kolkata | Best Rates | Austic",
    description:
      "Top metal scrap buyers in Kolkata. Best rates for copper, aluminum, steel, iron & brass scrap. Industrial-grade recycling services.",
    siteName: "Austic Scrap & E-Waste Recycling",
    images: [{ url: "/images/home-page.jpg", width: 1200, height: 630, alt: "Metal scrap buying and recycling services in Kolkata by Austic Scrap" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Metal Scrap Buyers in Kolkata | Best Rates | Austic",
    description:
      "Top metal scrap buyers in Kolkata. Best rates for copper, aluminum, steel & brass scrap.",
    images: ["/images/home-page.jpg"],
    creator: "@austicscrap",
  },
};

export default function MetalPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Services", url: "/service" },
          { name: "Metal Scrap", url: "/metal" },
        ]}
      />
      <ServiceSchema
        name="Metal Scrap Buying & Recycling"
        description="Leading metal scrap buyer in Kolkata for ferrous and non-ferrous metals including copper, aluminum, steel, iron, and brass at competitive market rates."
        url="/metal"
        serviceType="Metal Scrap Buying & Recycling"
        image="/images/home-page.jpg"
      />
      <HeroSection
        title={
          <>
            Expert Metal Scrap{" "}
            <span className="text-[#4CAF50]">Recycling Services</span>
          </>
        }
        subtitle="Leading collector and recycler of ferrous and non-ferrous metals in Kolkata. We provide industrial-grade scrap management to conserve resources."
        backgroundImage="/images/copper-crop.jpg"
      />
      <MetalScrapContent />
    </main>
  );
}

