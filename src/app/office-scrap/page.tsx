import React from "react";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import ServiceGrid from "@/components/ui/ServiceGrid";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import Footer from "@/components/ui/Footer";

const OfficeScrapPage = () => {
  return (
    <main>
      <Navbar />
      <Hero 
        title="Office Scrap Buyers"
        backgroundImage="/images/office furniture scrap.jpeg"
      />
      
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-secondary font-secondary">Best Office Scrap Dealers</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed text-justify">
             <p className="mb-4">
                Looking to clear out old office furniture or equipment? Austic Scrap is your trusted partner for buying all kinds of office scrap. 
                From workstations and chairs to partitions and old electronics, we offer the best market rates and hassle-free pickup services.
            </p>
            <p>
                We serve corporate offices, banks, institutes, and commercial establishments, ensuring a smooth and eco-friendly disposal process for all your scrap materials.
            </p>
        </div>
      </section>

      <ServiceGrid />
      <WhyChooseUs />
      <Footer />
    </main>
  );
};

export default OfficeScrapPage;
