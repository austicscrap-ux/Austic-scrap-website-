import { Metadata } from "next";
import SecondHandScrapContent from "@/components/sections/SecondHandScrapContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";

export const metadata: Metadata = {
  title: "Second Hand Scrap Buyers | Sell Used Machinery & Equipment",
  description:
    "Turn your second-hand scrap into cash with Austic Scrap. We buy used machinery, industrial equipment, furniture, and metals at competitive prices with complete logistics support.",
  keywords: [
    "Second hand scrap buyers India",
    "Used machinery buyers Kolkata",
    "Sell old equipment online",
    "Industrial scrap dealer Kolkata",
    "Second hand material buyers",
    "Used factory machinery scrap",
    "Old generator scrap buyer",
    "Refurbished equipment buyer",
    "Industrial surplus buyer India",
    "Salvage equipment buyer Kolkata",
  ],
  alternates: {
    canonical: "/second-hand-scrap",
  },
  openGraph: {
    type: "website",
    url: "https://www.austicscrap.com/second-hand-scrap",
    title: "Second Hand Scrap Buyers | Sell Used Machinery | Austic",
    description:
      "Turn second-hand scrap into cash. Buy used machinery, industrial equipment & furniture at competitive prices across India.",
    siteName: "Austic Scrap & E-Waste Recycling",
    images: [{ url: "/images/home-page.jpg", width: 1200, height: 630, alt: "Second hand scrap buying and used machinery services by Austic Scrap" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Second Hand Scrap Buyers | Sell Used Machinery | Austic",
    description:
      "Turn second-hand scrap into cash. Buy used machinery & industrial equipment at competitive prices.",
    images: ["/images/home-page.jpg"],
    creator: "@austicscrap",
  },
};

export default function SecondHandScrapPage() {
  return (
    <main>
      <BreadcrumbSchema
        items={[
          { name: "Services", url: "/service" },
          { name: "Second Hand Scrap", url: "/second-hand-scrap" },
        ]}
      />
      <ServiceSchema
        name="Second Hand Scrap Buying Services"
        description="We buy used machinery, industrial equipment, furniture, and metals at competitive prices with complete logistics support."
        url="/second-hand-scrap"
        serviceType="Second Hand Scrap Buying"
        image="/images/home-page.jpg"
      />
      <SecondHandScrapContent />
    </main>
  );
}

