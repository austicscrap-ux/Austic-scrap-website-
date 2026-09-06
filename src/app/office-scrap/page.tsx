import { Metadata } from "next";
import OfficeScrapContent from "@/components/sections/OfficeScrapContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "Office Scrap Buyers | Best Rates for Office Furniture & Equipment",
  description:
    "Austic Scrap buys all types of office scrap — workstations, chairs, partitions, electronics, and more. Best market rates with hassle-free doorstep pickup across Kolkata and India.",
  keywords: [
    "Office scrap buyers India",
    "Office furniture buyers Kolkata",
    "Office scrap dealer Salt Lake",
    "Sell office furniture online",
    "Corporate office scrap disposal",
    "Old desk chair scrap buyer",
    "Office partition scrap dealer",
    "Bulk office equipment buyer",
    "Used office furniture recycling",
    "Commercial scrap buyer India",
  ],
  alternates: {
    canonical: "/office-scrap",
  },
  openGraph: {
    type: "website",
    url: "https://www.austicscrap.com/office-scrap",
    title: "Office Scrap Buyers | Best Market Rates | Austic",
    description:
      "Sell office furniture, workstations, chairs & electronics at the best rates. Hassle-free doorstep pickup across Kolkata & India.",
    siteName: "Austic Scrap & E-Waste Recycling",
    images: [{ url: "/images/home-page.jpg", width: 1200, height: 630, alt: "Office scrap buying services with doorstep pickup by Austic Scrap" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Office Scrap Buyers | Best Market Rates | Austic",
    description:
      "Sell office furniture, workstations & electronics at the best rates. Doorstep pickup across India.",
    images: ["/images/home-page.jpg"],
    creator: "@austicscrap",
  },
};

export default function OfficeScrapPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Services", url: "/service" },
          { name: "Office Scrap", url: "/office-scrap" },
        ]}
      />
      <ServiceSchema
        name="Office Scrap Buying Services"
        description="Complete office scrap buying — workstations, chairs, partitions, electronics, and more at best market rates with doorstep pickup."
        url="/office-scrap"
        serviceType="Office Scrap Buying"
        image="/images/home-page.jpg"
      />
      <OfficeScrapContent />
    </main>
  );
}

