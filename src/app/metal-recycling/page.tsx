import { Metadata } from "next";
import MetalRecyclingContent from "@/components/sections/MetalRecyclingContent";

export const metadata: Metadata = {
  title: "Metal Recycling Services | Copper, Aluminum, Steel Scrap Buyers",
  description:
    "Austic Scrap is a leader in metal recycling — copper, aluminum, brass, steel, and iron. Best market rates based on daily metal prices with eco-friendly processing across Kolkata and India.",
  keywords: [
    "metal recycling",
    "copper scrap buyers",
    "aluminum scrap buyers",
    "steel scrap recycling",
    "metal scrap dealer Kolkata",
  ],
  alternates: {
    canonical: "/metal-recycling",
  },
};

export default function MetalRecyclingPage() {
  return <MetalRecyclingContent />;
}
