// src/app/delhiscrap/page.tsx
import HeroSection from "@/components/ui/HeroSection";
import DelhiScrapMainContent from "@/components/sections/DelhiScrapMainContent";
import DelhiWhyChooseUs from "@/components/sections/DelhiWhyChooseUs";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata = {
  title: "Office Scrap Collection Experts in Delhi NCR | Austic",
  description:
    "Austic specializes in office scrap collection in Delhi NCR, offering quick and hassle-free removal of office outdated item, IT equipment, and electronic waste. Get a fair quote today!",
  alternates: {
    canonical: "/delhiscrap",
  },
  keywords: [
    "Office scrap buyers in Delhi NCR",
    "Corporate scrap collection Noida Gurgaon",
    "IT equipment scrap buyer Delhi",
    "Office furniture disposal Ghaziabad",
    "Scrap vendor Connaught Place Delhi",
    "Old workstation buyer Greater Noida",
    "Computer scrap recycling Delhi NCR",
    "Industrial scrap dealer Faridabad",
    "E-waste disposal service Delhi",
    "Bulk scrap buyer Dwarka Janakpuri",
  ],
  openGraph: {
    type: "website" as const,
    url: "https://www.austicscrap.com/delhiscrap",
    title: "Office Scrap Collection Experts in Delhi NCR | Austic",
    description:
      "Professional office scrap collection and recycling in Delhi NCR. Fast doorstep pickup from Noida, Gurgaon, Ghaziabad & across Delhi.",
    siteName: "Austic Scrap & E-Waste Recycling",
    images: [{ url: "/images/home-page.jpg", width: 1200, height: 630, alt: "Office scrap buyers and recycling services in Delhi NCR by Austic Scrap" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Office Scrap Collection Experts in Delhi NCR | Austic",
    description:
      "Professional office scrap collection and recycling in Delhi NCR. Fast doorstep pickup from Noida, Gurgaon & across Delhi.",
    images: ["/images/home-page.jpg"],
    creator: "@austicscrap",
  },
};

export default function DelhiScrapPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Locations", url: "/#locations" },
          { name: "Delhi NCR Scrap", url: "/delhiscrap" },
        ]}
      />
      <HeroSection
        title={
          <>
            Reliable Office Scrap Buyers &{" "}
            <span className="text-[#4CAF50]">Vendors in Delhi</span>
          </>
        }
        subtitle="Quick and hassle-free removal of office assets, IT equipment, and electronic waste. Professional scrap management for Delhi's leading corporate sectors."
      />
      <DelhiScrapMainContent />
      <DelhiWhyChooseUs />
    </main>
  );
}
