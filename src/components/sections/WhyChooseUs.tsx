// src/components/sections/WhyChooseUs.tsx
"use client";

import React from "react";
import { Factory, IndianRupee, MapPin, Recycle } from "lucide-react";

interface WhyChooseItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const whyChooseItems: WhyChooseItemProps[] = [
  {
    icon: <Factory />,
    title: "Focused on Scrap Buying for Businesses",
    description:
      "Our services are designed with the commercial sectors in mind. We provide efficient scrap buying services to cater specifically to the Kolkata market.",
  },
  {
    icon: <IndianRupee />,
    title: "Best Prices for Scrap",
    description:
      "At Austic Scrap, we offer competitive prices for old air conditioning units, ensuring that you receive the best value based on Kolkata’s market rates.",
  },
  {
    icon: <MapPin />,
    title: "Hassle-Free Pickup Across Kolkata",
    description:
      "No matter where your business is located, whether in the heart of the city or outskirts, we handle the entire process including pickup, transport, and payment.",
  },
  {
    icon: <Recycle />,
    title: "Environmentally Responsible Recycling",
    description:
      "We are committed to protecting Kolkata’s environment by recycling air conditioners responsibly, managing hazardous materials according to environmental standards.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="why-choose-austic-scrap-company-section py-12 px-5 bg-gradient-to-br from-grad-green-end-1 via-grad-green-start-4 to-grad-green-end-4 mx-auto my-12 rounded-xl shadow-lg">
      <div className="why-choose-austic-scrap-company-container max-w-6xl mx-auto">
        <h2 className="why-choose-austic-scrap-company-title text-3xl md:text-4xl text-text-black-dark text-center mb-10 font-josefin-sans">
          Why Choose Austic Scrap Company in Kolkata?
        </h2>
        <div className="why-choose-austic-scrap-company-content flex flex-wrap justify-between">
          {whyChooseItems.map((item, index) => (
            <div
              key={index}
              className="why-choose-austic-scrap-company-point bg-white p-5 rounded-lg flex items-start shadow-md transition-all duration-300 hover:bg-gradient-to-br hover:from-grad-dark-green-start hover:to-grad-dark-green-end hover:text-white hover:-translate-y-1 w-full md:w-[calc(50%-20px)] m-2"
            >
              <div className="why-choose-austic-scrap-company-icon text-4xl text-grad-green-end-1 mr-5 transition-colors duration-300 group-hover:text-white">
                {item.icon}
              </div>
              <div className="why-choose-austic-scrap-company-text">
                <h3 className="text-xl text-text-black-dark mb-2 transition-colors duration-300 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="text-text-gray text-base leading-relaxed transition-colors duration-300 group-hover:text-white">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
