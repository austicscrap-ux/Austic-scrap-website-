import HeroSection from "@/components/ui/HeroSection";
import AssetDispositionContent from "@/components/sections/AssetDispositionContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata = {
  title: "IT Asset Disposition in Kolkata | Secure ITAD Services | Austic",
  description:
    "We provide secure IT asset disposition (ITAD) in Kolkata, ensuring safe, eco-friendly disposal of IT assets with certified data destruction. Contact us today.",
  alternates: {
    canonical: "/asset-disposition",
  },
  keywords: [
    "IT asset disposition Kolkata",
    "Secure ITAD services India",
    "Certified data destruction Kolkata",
    "IT asset decommissioning",
    "Corporate IT disposal service",
    "Server decommissioning Kolkata",
    "Data center asset recovery",
    "NIST 800-88 data sanitization",
    "Enterprise ITAD company India",
    "IT equipment disposal certified",
  ],
  openGraph: {
    type: "website" as const,
    url: "https://www.austicscrap.com/asset-disposition",
    title: "Secure IT Asset Disposition (ITAD) in Kolkata | Austic",
    description:
      "Certified IT asset disposition with secure data destruction. Eco-friendly ITAD services for Kolkata enterprises.",
    siteName: "Austic Scrap & E-Waste Recycling",
    images: [{ url: "/images/home-page.jpg", width: 1200, height: 630, alt: "Secure IT asset disposition and ITAD services in Kolkata by Austic Scrap" }],
  },
  twitter: {
    card: "summary_large_image" as const,
    title: "Secure IT Asset Disposition (ITAD) in Kolkata | Austic",
    description:
      "Certified IT asset disposition with secure data destruction. Eco-friendly ITAD services for enterprises.",
    images: ["/images/home-page.jpg"],
    creator: "@austicscrap",
  },
};

export default function AssetDispositionPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Services", url: "/service" },
          { name: "IT Asset Disposition", url: "/asset-disposition" },
        ]}
      />
      <ServiceSchema
        name="IT Asset Disposition (ITAD) Services"
        description="Certified corporate IT asset disposition, secure data sanitization (NIST 800-88), enterprise server buyback, and e-waste recycling."
        url="/asset-disposition"
        serviceType="IT Asset Disposition & Decommissioning"
        image="/images/it-asset-disposition-buyer.jpeg"
      />
      <HeroSection
        title={
          <>
            Secure IT Asset <span className="text-[#4CAF50]">Disposition</span>{" "}
            in Kolkata
          </>
        }
        subtitle="Certified data destruction and eco-friendly IT disposal. We provide Kolkata businesses with reliable, professional management of outdated technology assets."
        backgroundImage="/images/it-asset-disposition-buyer.jpeg"
      />
      <AssetDispositionContent />
    </main>
  );
}
