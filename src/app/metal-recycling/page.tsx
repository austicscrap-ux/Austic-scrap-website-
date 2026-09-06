import { Metadata } from "next";
import MetalRecyclingContent from "@/components/sections/MetalRecyclingContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "Metal Recycling Services | Copper, Aluminum, Steel Scrap Buyers",
  description:
    "Austic Scrap is a leader in metal recycling — copper, aluminum, brass, steel, and iron. Best market rates based on daily metal prices with eco-friendly processing across Kolkata and India.",
  keywords: [
    "Metal recycling services India",
    "Copper scrap buyers Kolkata",
    "Aluminum scrap recycling",
    "Steel scrap recycling India",
    "Metal scrap dealer Kolkata",
    "Brass scrap buyer Howrah",
    "Iron scrap recycling Kolkata",
    "Daily metal scrap prices",
    "Industrial metal recycling",
    "Non-ferrous metal buyer India",
  ],
  alternates: {
    canonical: "/metal-recycling",
  },
  openGraph: {
    type: "website",
    url: "https://www.austicscrap.com/metal-recycling",
    title: "Metal Recycling | Copper, Aluminum, Steel Scrap Buyers | Austic",
    description:
      "Best market rates for copper, aluminum, brass, steel & iron scrap. Eco-friendly metal recycling across Kolkata & India.",
    siteName: "Austic Scrap & E-Waste Recycling",
    images: [{ url: "/images/home-page.jpg", width: 1200, height: 630, alt: "Metal recycling services for copper aluminum and steel by Austic Scrap" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Metal Recycling | Copper, Aluminum, Steel Scrap Buyers | Austic",
    description:
      "Best market rates for copper, aluminum, brass & steel scrap. Eco-friendly metal recycling across India.",
    images: ["/images/home-page.jpg"],
    creator: "@austicscrap",
  },
};

export default function MetalRecyclingPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Services", url: "/service" },
          { name: "Metal Recycling", url: "/metal-recycling" },
        ]}
      />
      <ServiceSchema
        name="Metal Recycling Services"
        description="Complete metal recycling for copper, aluminum, brass, steel, and iron at daily market rates with eco-friendly processing."
        url="/metal-recycling"
        serviceType="Metal Recycling"
        image="/images/home-page.jpg"
      />
      <MetalRecyclingContent />
    </main>
  );
}

