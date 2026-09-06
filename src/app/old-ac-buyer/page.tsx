import HeroSection from "@/components/ui/HeroSection";
import AcScrapContent from "@/components/sections/AcScrapContent";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ServiceSchema from "@/components/seo/ServiceSchema";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Old AC Buyer & Second AC Buyer in Kolkata | Austic Scrap",
  description:
    "Sell your old and used air conditioners in Kolkata. We are the top buyer for second-hand ACs, office cooling systems, and scrap AC units. Best rates guaranteed.",
  alternates: {
    canonical: "/old-ac-buyer",
  },
  keywords: [
    "old AC buyer Kolkata",
    "second hand AC buyer",
    "used air conditioner buyer Kolkata",
    "scrap AC buyer near me",
    "commercial AC scrap buyer",
    "VRV VRF system scrap buyer",
    "chiller plant scrap buyer",
    "office AC disposal Kolkata",
    "old split AC buyer",
    "AC copper scrap buyer Kolkata",
  ],
  openGraph: {
    title: "Old AC Buyer & Second AC Buyer in Kolkata",
    description: "Sell old and used air conditioners in Kolkata. Best rates for second-hand ACs and scrap AC units.",
    url: "https://www.austicscrap.com/old-ac-buyer",
    siteName: "Austic Scrap & E-Waste Recycling",
    type: "website",
    images: [{ url: "/images/air-con-compressed.jpg", width: 1200, height: 630, alt: "Old AC buyer and scrap AC disposal in Kolkata" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Old AC Buyer Kolkata | Austic Scrap",
    description: "Sell old and used air conditioners in Kolkata. Best rates guaranteed.",
    images: ["/images/air-con-compressed.jpg"],
  },
};

export default function ACPage() {
  return (
    <main>
      <HeroSection
        title={
          <>
            Old AC Buyer &{" "}
            <span className="text-[#4CAF50]">Second AC Buyer</span> in Kolkata
          </>
        }
        subtitle="Leading the way in responsible AC disposal. We offer premium rates for old office cooling systems, ensuring eco-friendly recycling and fast pickup."
        backgroundImage="/images/air-con-compressed.jpg"
      />
      <AcScrapContent />
    </main>
  );
}
