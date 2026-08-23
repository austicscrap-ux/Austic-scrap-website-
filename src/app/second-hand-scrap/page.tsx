import { Metadata } from "next";
import SecondHandScrapContent from "@/components/sections/SecondHandScrapContent";

export const metadata: Metadata = {
  title: "Second Hand Scrap Buyers | Sell Used Machinery & Equipment",
  description:
    "Turn your second-hand scrap into cash with Austic Scrap. We buy used machinery, industrial equipment, furniture, and metals at competitive prices with complete logistics support.",
  keywords: [
    "second hand scrap buyers",
    "used machinery buyers",
    "sell old equipment",
    "industrial scrap dealer",
    "second hand material buyers",
  ],
  alternates: {
    canonical: "/second-hand-scrap",
  },
};

export default function SecondHandScrapPage() {
  return <SecondHandScrapContent />;
}
