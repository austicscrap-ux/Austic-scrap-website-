import React from "react";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import ServiceGrid from "@/components/ui/ServiceGrid";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import Footer from "@/components/ui/Footer";

const MetalRecyclingPage = () => {
  return (
    <main>
      <Navbar />
      <Hero 
        title="Metal Recycling Services"
        backgroundImage="/images/coppper crop.jpg"
      />
      
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-secondary font-secondary">Expert Metal Scrap Recycling</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed text-justify">
             <p className="mb-4">
                Austic Scrap is a leader in metal recycling, handling ferrous and non-ferrous metals like copper, aluminum, brass, steel, and iron.
                We ensure that your metal scrap is processed and recycled responsibly, contributing to a circular economy and saving natural resources.
            </p>
            <p>
                We offer the best market rates based on daily metal prices. Whether you have industrial metal waste or construction scrap, we provide efficient collection and payment solutions.
            </p>
        </div>
      </section>

      <ServiceGrid />
      <WhyChooseUs />
      <Footer />
    </main>
  );
};

export default MetalRecyclingPage;
