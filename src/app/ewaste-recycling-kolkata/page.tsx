import HeroSection from "@/components/ui/HeroSection";
import KolkataEWasteContent from "@/components/sections/KolkataEWasteContent";

export const metadata = {
  title: "E-Waste Recycling in Kolkata | Salt Lake Sector V, New Town & Park Street ITAD",
  description:
    "Authorized e-waste recycling & IT asset disposition (ITAD) in Kolkata. Serving IT companies in Salt Lake Sector V, New Town, Rajarhat, Park Street & Dalhousie with certified data destruction & free doorstep pickup.",
  keywords: [
    "E-waste recycling in Kolkata",
    "IT asset disposition Salt Lake Sector V",
    "Computer scrap buyer New Town Kolkata",
    "Electronic waste disposal Rajarhat",
    "E-waste vendor Park Street Kolkata",
    "Server scrap recycling Dalhousie",
    "Data destruction certificate Kolkata",
    "Laptop scrap buyer Sector V",
    "Howrah e-waste recycling",
    "Hooghly IT scrap disposal",
  ],
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
