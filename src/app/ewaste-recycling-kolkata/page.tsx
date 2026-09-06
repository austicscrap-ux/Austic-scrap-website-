import HeroSection from "@/components/ui/HeroSection";
import KolkataEWasteContent from "@/components/sections/KolkataEWasteContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata = {
  title: "E-Waste Recycling in Kolkata | Salt Lake Sector V, New Town & Park Street ITAD",
  description:
    "Authorized e-waste recycling & IT asset disposition (ITAD) in Kolkata. Serving IT companies in Salt Lake Sector V, New Town, Rajarhat, Park Street & Dalhousie with certified data destruction & free doorstep pickup.",
  alternates: {
    canonical: "/ewaste-recycling-kolkata",
  },
  keywords: [
    "E-waste recycling in Kolkata",
    "IT asset disposition Salt Lake Sector V",
    "Computer scrap buyer New Town Kolkata",
    "Electronic waste disposal Rajarhat",
    "E-waste vendor Park Street Kolkata",
    "Server scrap recycling Dalhousie",
    "Data destruction certificate Kolkata",
    "Laptop scrap buyer Sector V",
    "Howrah e-waste recycling",
    "Hooghly IT scrap disposal",
  ],
  openGraph: {
    type: "website" as const,
    url: "https://www.austicscrap.com/ewaste-recycling-kolkata",
    title: "E-Waste Recycling in Kolkata | Certified ITAD | Austic",
    description:
      "Authorized e-waste recycling in Kolkata. Serving Salt Lake Sector V, New Town, Rajarhat with certified data destruction & free pickup.",
    siteName: "Austic Scrap & E-Waste Recycling",
    images: [{ url: "/images/e-waste-recycling-kolkata.jpeg", width: 1200, height: 630, alt: "E-waste recycling and IT asset disposition services in Kolkata by Austic Scrap" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "E-Waste Recycling in Kolkata | Certified ITAD | Austic",
    description:
      "Authorized e-waste recycling in Kolkata. Serving Salt Lake Sector V, New Town & Rajarhat with certified data destruction.",
    images: ["/images/e-waste-recycling-kolkata.jpeg"],
    creator: "@austicscrap",
  },
};

export default function KolkataEWastePage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Services", url: "/service" },
          { name: "E-Waste Recycling Kolkata", url: "/ewaste-recycling-kolkata" },
        ]}
      />
      <HeroSection
        title={
          <>
            Expert E-Waste <span className="text-[#4CAF50]">Management</span>{" "}
            for Kolkata
          </>
        }
        subtitle="Leading the way in responsible technology disposal for corporate and industrial sectors. We provide certified recycling and high market value for your assets."
        backgroundImage="/images/e-waste-recycling-kolkata.jpeg"
      />
      <KolkataEWasteContent />
    </main>
  );
}
