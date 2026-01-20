import React from "react";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import ServiceGrid from "@/components/ui/ServiceGrid";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import Footer from "@/components/ui/Footer";

const OfficeWorkstationPage = () => {
  return (
    <main>
      <Navbar />
      <Hero 
        title="Office Workstation Buyers"
        backgroundImage="/images/office furniture scrap.jpeg"
      />
      
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-secondary font-secondary">Sell Your Old Workstations</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed text-justify">
             <p className="mb-4">
                Upgrading your office layout? We specialize in dismantling and buying old office workstations, cubicles, and partitions. 
                Austic Scrap ensures safe and efficient removal of your office setups with minimal disruption to your operations.
            </p>
            <p>
                We offer top prices for wooden, metal, and glass workstations. Contact us today for a free valuation and quick pickup service across Kolkata and major cities.
            </p>
        </div>
      </section>

      <ServiceGrid />
      <WhyChooseUs />
      <Footer />
    </main>
  );
};

export default OfficeWorkstationPage;
