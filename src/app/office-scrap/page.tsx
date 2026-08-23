import { Metadata } from "next";
import OfficeScrapContent from "@/components/sections/OfficeScrapContent";

export const metadata: Metadata = {
  title: "Office Scrap Buyers | Best Rates for Office Furniture & Equipment",
  description:
    "Austic Scrap buys all types of office scrap — workstations, chairs, partitions, electronics, and more. Best market rates with hassle-free doorstep pickup across Kolkata and India.",
  keywords: [
    "office scrap buyers",
    "office furniture buyers",
    "office scrap dealer Kolkata",
    "sell office furniture",
    "corporate office scrap disposal",
  ],
  alternates: {
    canonical: "/office-scrap",
  },
};

export default function OfficeScrapPage() {
  return <OfficeScrapContent />;
}
