import AssetDisposalContent from "@/components/sections/AssetDisposalContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Asset Disposal in Kolkata | Secure IT Asset Management",
  description:
    "We offer secure and eco-friendly IT asset disposal in Kolkata. Safely dispose of outdated IT Asset with safe data destruction and compliance. Contact us today.",
  alternates: {
    canonical: "/asset",
  },
  keywords: [
    "IT asset disposal Kolkata",
    "secure IT asset management",
    "corporate IT asset liquidation",
    "old computer disposal Kolkata",
    "IT equipment disposal India",
    "enterprise asset management",
    "IT asset buyback program",
    "server disposal service",
    "office IT asset recycling",
    "IT infrastructure decommissioning",
  ],
  openGraph: {
    title: "IT Asset Disposal in Kolkata | Secure Management",
    description: "Secure and eco-friendly IT asset disposal in Kolkata. Safe data destruction and compliance.",
    url: "https://www.austicscrap.com/asset",
    siteName: "Austic Scrap & E-Waste Recycling",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Asset Disposal Kolkata | Austic Scrap",
    description: "Secure IT asset disposal with safe data destruction.",
  },
};

export default function AssetPage() {
  return (
    <main>
      <AssetDisposalContent />
    </main>
  );
}
