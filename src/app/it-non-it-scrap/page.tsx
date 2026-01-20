import React from "react";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import ServiceGrid from "@/components/ui/ServiceGrid";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import Footer from "@/components/ui/Footer";

const ItNonItScrapPage = () => {
  return (
    <main>
      <Navbar />
      <Hero 
        title="IT & Non-IT Scrap Buyers"
        backgroundImage="/images/IT Asset Disposition Buyer.jpeg" // Reusing a relevant image
      />
      
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-secondary font-secondary">We Buy all types of IT & Non-IT Scrap</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed text-justify">
             <p className="mb-4">
                At Austic Scrap, we provide comprehensive solutions for the disposal and recycling of both IT and Non-IT scrap materials. 
                Whether you are upgrading your office technology or clearing out old inventory, we offer competitive prices and environmentally responsible recycling services.
            </p>
            <p className="mb-4">
                <strong>IT Scrap:</strong> We buy old computers, laptops, servers, printers, networking equipment, and other electronic waste. We ensure data security and proper e-waste management compliance.
            </p>
            <p>
                <strong>Non-IT Scrap:</strong> We also purchase office furniture, old AC units, scrap metal, electrical wiring, generator sets, and dismantling scrap from corporate offices and industrial sites.
            </p>
        </div>
      </section>

      <ServiceGrid />
      <WhyChooseUs />
      <Footer />
    </main>
  );
};

export default ItNonItScrapPage;
