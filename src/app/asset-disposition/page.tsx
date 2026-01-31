import HeroSection from "@/components/ui/HeroSection";
import AssetDispositionContent from "@/components/sections/AssetDispositionContent";

export const metadata = {
  title: "IT Asset Disposition in Kolkata | Secure ITAD Services | Austic",
  description:
    "We provide secure IT asset disposition (ITAD) in Kolkata, ensuring safe, eco-friendly disposal of IT assets with certified data destruction. Contact us today",
};

export default function AssetDispositionPage() {
  return (
    <main>
      <HeroSection
        title={
          <>
            Secure IT Asset <span className="text-[#4CAF50]">Disposition</span>{" "}
            in Kolkata
          </>
        }
        subtitle="Certified data destruction and eco-friendly IT disposal. We provide Kolkata businesses with reliable, professional management of outdated technology assets."
        backgroundImage="/images/IT Asset Disposition Buyer.jpeg"
      />
      <AssetDispositionContent />
    </main>
  );
}
