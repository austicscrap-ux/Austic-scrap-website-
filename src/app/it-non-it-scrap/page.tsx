import { Metadata } from "next";
import ItNonItScrapContent from "@/components/sections/ItNonItScrapContent";

export const metadata: Metadata = {
  title: "IT & Non-IT Scrap Buyers in Kolkata & India | Austic Scrap",
  description:
    "Sell your old computers, laptops, servers, office furniture, AC units, and industrial scrap at the best market rates. Austic Scrap offers eco-friendly IT & Non-IT scrap buying services across India.",
  keywords: [
    "IT scrap buyers",
    "Non-IT scrap buyers",
    "old computer buyers Kolkata",
    "office furniture scrap",
    "corporate scrap disposal",
  ],
  alternates: {
    canonical: "/it-non-it-scrap",
  },
};

export default function ItNonItScrapPage() {
  return <ItNonItScrapContent />;
}
