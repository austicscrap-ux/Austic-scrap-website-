import React from "react";
import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import ServiceGrid from "@/components/ui/ServiceGrid";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import Footer from "@/components/ui/Footer";

const SecondHandScrapPage = () => {
  return (
    <main>
      <Navbar />
      <Hero 
        title="Second Hand Scrap Buyers"
        backgroundImage="/images/home page.jpg"
      />
      
      <section className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center text-secondary font-secondary">We Buy Second Hand Scrap</h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed text-justify">
             <p className="mb-4">
                Turn your second-hand scrap into cash with Austic Scrap. We buy a wide range of second-hand materials including machinery, equipment, furniture, and metals.
            </p>
            <p>
                Our team evaluates your items fairly and provides instant quotes. We handle the dismantling, loading, and transportation, making the selling process effortless for you.
            </p>
        </div>
      </section>

      <ServiceGrid />
      <WhyChooseUs />
      <Footer />
    </main>
  );
};

export default SecondHandScrapPage;
