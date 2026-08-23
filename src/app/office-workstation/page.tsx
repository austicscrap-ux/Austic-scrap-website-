import { Metadata } from "next";
import OfficeWorkstationContent from "@/components/sections/OfficeWorkstationContent";

export const metadata: Metadata = {
  title: "Office Workstation & Cubicle Buyers | Professional Dismantling",
  description:
    "Sell your old office workstations, cubicles, and partitions to Austic Scrap. Professional dismantling, top market prices, and fast logistics across Kolkata and major Indian cities.",
  keywords: [
    "office workstation buyers",
    "cubicle dismantling",
    "sell old workstations",
    "office partition scrap",
    "workstation scrap dealer",
  ],
  alternates: {
    canonical: "/office-workstation",
  },
};

export default function OfficeWorkstationPage() {
  return <OfficeWorkstationContent />;
}
