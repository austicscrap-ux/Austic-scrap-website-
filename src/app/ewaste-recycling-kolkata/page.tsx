import HeroSection from "@/components/ui/HeroSection";
import KolkataEWasteContent from "@/components/sections/KolkataEWasteContent";

export const metadata = {
  title: "Best E-Waste Recycling in Kolkata| IT Asset Disposal Services",
  description:
    "Get trusted e-waste recycling services in Kolkata. We specialize in secure IT asset disposal, eco-friendly recycling solutions, and safe data destruction",
};

export default function KolkataEWastePage() {
  return (
    <main>
      <HeroSection
        title={
          <>
            Expert E-Waste <span className="text-[#4CAF50]">Management</span>{" "}
            for Kolkata
          </>
        }
        subtitle="Leading the way in responsible technology disposal for corporate and industrial sectors. We provide certified recycling and high market value for your assets."
        backgroundImage="/images/e-waste-recycling-kolkata.jpeg"
      />
      <KolkataEWasteContent />
    </main>
  );
}
