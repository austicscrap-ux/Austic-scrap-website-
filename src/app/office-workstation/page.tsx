import { Metadata } from "next";
import OfficeWorkstationContent from "@/components/sections/OfficeWorkstationContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "Office Workstation & Cubicle Buyers | Professional Dismantling",
  description:
    "Sell your old office workstations, cubicles, and partitions to Austic Scrap. Professional dismantling, top market prices, and fast logistics across Kolkata and major Indian cities.",
  keywords: [
    "Office workstation buyers Kolkata",
    "Cubicle dismantling service India",
    "Sell old workstations online",
    "Office partition scrap buyer",
    "Workstation scrap dealer Kolkata",
    "Modular furniture scrap buyer",
    "Corporate cubicle disposal",
    "Used office desk buyer",
    "Bulk workstation scrap India",
    "Professional office dismantling",
  ],
  alternates: {
    canonical: "/office-workstation",
  },
  openGraph: {
    type: "website",
    url: "https://www.austicscrap.com/office-workstation",
    title: "Office Workstation & Cubicle Buyers | Austic",
    description:
      "Sell old workstations, cubicles & partitions at top prices. Professional dismantling and fast logistics across Kolkata & India.",
    siteName: "Austic Scrap & E-Waste Recycling",
    images: [{ url: "/images/home-page.jpg", width: 1200, height: 630, alt: "Office workstation and cubicle dismantling services by Austic Scrap" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Office Workstation & Cubicle Buyers | Austic",
    description:
      "Sell old workstations, cubicles & partitions at top prices. Professional dismantling across India.",
    images: ["/images/home-page.jpg"],
    creator: "@austicscrap",
  },
};

export default function OfficeWorkstationPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Services", url: "/service" },
          { name: "Office Workstation", url: "/office-workstation" },
        ]}
      />
      <ServiceSchema
        name="Office Workstation & Cubicle Buying"
        description="Professional workstation and cubicle dismantling with top market prices. Complete logistics support across Kolkata and major Indian cities."
        url="/office-workstation"
        serviceType="Office Workstation Buying & Dismantling"
        image="/images/home-page.jpg"
      />
      <OfficeWorkstationContent />
    </main>
  );
}

