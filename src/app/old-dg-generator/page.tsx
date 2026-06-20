import HeroSection from "@/components/ui/HeroSection";
import OldDgGeneratorContent from "@/components/sections/OldDgGeneratorContent";

export const metadata = {
  title: "DG Generator Buyers in Kolkata| IT Asset Disposal Services",
  description:
    "We buy old, used, and damaged DG generators from corporate offices and industries in Kolkata. Get the best price and hassle-free pickup. Contact us today!",
};

export default function OldDgGeneratorPage() {
  return (
    <main>
      <HeroSection
        title={
          <>
            Old DG Generator <span className="text-[#4CAF50]">Scrap Buyer</span>{" "}
            in Kolkata
          </>
        }
        subtitle="Premium valuation for used, damaged, and obsolete Diesel Generator sets. We provide professional dismantling and eco-friendly resource recovery."
        backgroundImage="/images/dg set crop.jpg"
      />
      <OldDgGeneratorContent />
    </main>
  );
}
