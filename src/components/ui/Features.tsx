"use client";

import React from "react";
import { Recycle, Wrench, Building2, Truck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Recycle,
    title: "E-Waste Recycling",
    desc: "Electronic waste recycling safely disposes of electronics and recovers valuable materials",
    colorClass: "red",
  },
  {
    icon: Wrench,
    title: "Workstation Dismantling",
    desc: "Workstation dismantling safely removes and recycles office setups efficiently.",
    colorClass: "green",
  },
  {
    icon: Building2,
    title: "Corporate Scrap",
    desc: "Corporate scrap services recycle office materials for eco-friendly disposal.",
    colorClass: "yellow",
  },
  {
    icon: Truck,
    title: "Office Shifting",
    desc: "Office shifting relocates furniture and equipment with minimal disruption.",
    colorClass: "blue",
  },
];

const Features = () => {
  return (
    <section id="feature" className="feature_wrapper wrapper bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center"
        >
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1 mt-10 md:mt-0">
            <h5 className="text-secondary text-2xl font-medium mb-4 font-secondary">
              Welcome to Our Service
            </h5>
            <p className="text-justify text-text-gray mb-4">
              AUSTIC SCRAP is a scrap service provider based in Kolkata that was
              founded in 2003 with a mission to transform electronic waste
              management in Kolkata. We have been recognized as the leaders in
              the scrap buying and recycling industry over the past 20 years. We
              manage to get scrap for sourcing and recycling from corporate
              offices, luxury hotels, institutions, banking sector
              organizations, etc. e-waste management and recycling, buying used
              office scrap from corporations, disposal of IT assets, and
              purchasing all sorts of scrap from prestigious companies all over
              Kolkata and India are other similar services that we offer.
              Furthermore, our office and showroom dismantling services for
              green disposal of electronic waste have earned us praise. Our goal
              is to give the best price for scrap around Kolkata while rendering
              top-notch service to our clients. Autistic Scrap Company has a
              well-qualified expert team that can work around the clock to
              ensure rapid response time to guarantee a smooth operation with
              customer satisfaction at its best.
            </p>
          </div>

          {/* Right Content - 4 Squares */}
          <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
            <div className="grid grid-cols-2 gap-2 max-w-[500px] w-full aspect-square">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="group relative w-full h-full perspective-1000"
                >
                  <div
                    className="relative w-full h-full transition-all duration-600 transform-style-3d group-hover:rotate-y-180 rounded-[10px]"
                    //  Using specific gradient from style.css for all items
                    style={{
                      background: "linear-gradient(125deg, #127749, #55bc8e)",
                    }}
                  >
                    {/* Front */}
                    <div className="absolute inset-0 backface-hidden flex flex-col justify-center items-center text-white p-2">
                      <item.icon className="text-4xl mb-4 text-wheat" />
                      <h3 className="text-xl font-semibold text-center text-wheat font-secondary">
                        {item.title}
                      </h3>
                    </div>

                    {/* Back */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-white rounded-[10px] flex justify-center items-center p-4 text-center">
                      <p className="text-text-gray text-sm md:text-base font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
