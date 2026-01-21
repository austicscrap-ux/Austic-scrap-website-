"use client";

import React from "react";
import { motion } from "framer-motion";
import { Recycle, Wrench, Building2, Truck } from "lucide-react";

const HomeAbout: React.FC = () => {
  const squares = [
    {
      icon: <Recycle />,
      title: "E-Waste Recycling",
      backText:
        "Electronic waste recycling safely disposes of electronics and recovers valuable materials",
      colorClass: "from-grad-green-end-1 to-grad-green-start-2",
    },
    {
      icon: <Wrench />,
      title: "Workstation Dismantling",
      backText:
        "Workstation dismantling safely removes and recycles office setups efficiently.",
      colorClass: "from-grad-green-end-1 to-grad-green-start-2",
    },
    {
      icon: <Building2 />,
      title: "Corporate Scrap",
      backText:
        "Corporate scrap services recycle office materials for eco-friendly disposal.",
      colorClass: "from-grad-green-end-1 to-grad-green-start-2",
    },
    {
      icon: <Truck />,
      title: "Office Shifting",
      backText:
        "Office shifting relocates furniture and equipment with minimal disruption.",
      colorClass: "from-grad-green-end-1 to-grad-green-start-2",
    },
  ];

  return (
    <section id="feature" className="py-12">
      <div className="container mx-auto px-4 lg:px-[86px]">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Left Part */}
          <div className="w-full md:w-1/2 text-center md:text-left my-auto order-2 md:order-1 p-4">
            <h5 className="text-text-primary text-2xl font-josefin-sans font-medium mb-4">
              Welcome to Our Service
            </h5>
            <p className="text-text-gray text-base leading-relaxed text-justify">
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

          {/* Right Part */}
          <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2 p-4">
            <div
              className="grid grid-cols-2 gap-2 w-full max-w-md"
              style={{ perspective: "1000px" }}
            >
              {squares.map((square, index) => (
                <motion.div
                  key={index}
                  className="relative w-full aspect-square flex justify-center items-center text-white text-2xl opacity-100 rounded-lg overflow-hidden cursor-pointer"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Front Side */}
                  <div
                    className={`absolute w-full h-full flex flex-col justify-center items-center rounded-lg p-2 bg-gradient-to-br ${square.colorClass}`}
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div className="text-color-wheat text-4xl mb-4">
                      {square.icon}
                    </div>
                    <h3 className="text-color-wheat text-xl text-center">
                      {square.title}
                    </h3>
                  </div>

                  {/* Back Side */}
                  <div
                    className={`absolute w-full h-full flex flex-col justify-center items-center rounded-lg p-2 text-color-wheat bg-gradient-to-br ${square.colorClass}`}
                    style={{
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <p className="text-base text-center">{square.backText}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
