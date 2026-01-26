// src/components/sections/AboutContent.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Leaf } from "lucide-react";

const stats = [
  { icon: Calendar, label: "Founded In", value: "2003" },
  { icon: Clock, label: "Support", value: "24/7" },
  { icon: MapPin, label: "Reach", value: "Pan-India" },
  { icon: Leaf, label: "Process", value: "100% Eco" },
];

const AboutContent: React.FC = () => {
  return (
    <section className="about-section py-20 bg-amber-50/30 border-y border-amber-100/50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-[86px] max-w-7xl">
        {/* Top Section: Story & Image */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h5 className="text-[#127749] font-bold tracking-widest uppercase mb-4 text-sm font-secondary">
                Our Story
              </h5>
              <h2 className="text-4xl lg:text-5xl font-bold font-primary text-neutral-900 leading-tight mb-6">
                Transforming <span className="text-[#127749]">Scrap</span> into
                Value Since 2003
              </h2>
              <div className="w-20 h-1.5 bg-[#127749] rounded-full mb-8"></div>

              <div className="text-neutral-600 text-lg leading-relaxed text-justify space-y-6 font-secondary font-medium">
                <p>
                  <span className="font-bold text-neutral-900">Austic</span>{" "}
                  Founded by Mr. Sam Jhon in 2003, Austic Scrap began as a local
                  enterprise in Kolkata with a vision of providing excellent
                  scrap-buying services. Over the years, this vision has
                  transformed the company into a national leader in the scrap
                  management industry. Initially, Austic Scrap built its
                  reputation through reliable offline services. With the advent
                  of digital transformation, the company expanded its reach
                  across India, serving sectors such as corporate offices,
                  banking, insurance, IT, malls, and educational institutions.
                  This growth from a small business to a nationwide powerhouse
                  exemplifies Austic Scrap&apos;s dedication and innovative
                  vision.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Image Content */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10"
            >
              <div className="absolute inset-0 bg-[#127749] rounded-3xl rotate-3 opacity-20 transform translate-x-4 translate-y-4 -z-10"></div>
              <Image
                src="/images/e-waste-kolkata.webp"
                alt="Austic Scrap Facility"
                width={600}
                height={500}
                className="w-full h-auto object-cover rounded-3xl shadow-2xl"
                priority
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-2xl shadow-xl hidden md:block animate-bounce-slow">
                <div className="flex items-center gap-4">
                  <div className="bg-[#127749]/10 p-3 rounded-full text-[#127749]">
                    <Calendar size={32} />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 font-bold uppercase">
                      Experience
                    </p>
                    <p className="text-2xl font-bold text-neutral-900">
                      20+ Years
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-amber-50 transition-colors duration-300 group border border-amber-100/50"
            >
              <div className="bg-white mx-auto w-16 h-16 rounded-full flex items-center justify-center text-[#127749] mb-4 shadow-md group-hover:bg-[#127749] group-hover:text-white transition-all duration-300">
                <stat.icon size={28} />
              </div>
              <h3 className="text-3xl font-bold text-neutral-900 mb-2 font-primary">
                {stat.value}
              </h3>
              <p className="text-neutral-500 font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section: Commitment & Sustainability */}
        <div className="bg-neutral-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('/images/pattern.svg')] opacity-5"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Commitment */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white font-primary border-l-4 border-[#127749] pl-6">
                Our Commitment
              </h3>
              <p className="text-neutral-300 text-lg leading-relaxed text-justify font-secondary">
                Austic Scrap&apos;s success lies in its unwavering commitment to
                customer satisfaction and environmental responsibility. The
                company offers a wide array of scrap management services,
                ranging from IT asset disposition to e-waste recycling and
                office furniture disposal. With a dedicated team available 24/7,
                Austic Scrap ensures prompt and hassle-free scrap pickup right
                at the client&apos;s doorstep, maximizing returns while
                minimizing inconvenience. Adhering to rigorous safety and
                efficiency standards, the company has become a trustworthy
                partner in responsible waste management. From handling large
                volumes of electronic scrap to disposing of outdated office
                furniture, Austic Scrap provides seamless and ethical scrap
                management services.
              </p>
            </div>

            {/* Sustainability */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white font-primary border-l-4 border-[#127749] pl-6">
                Sustainability Focus
              </h3>
              <p className="text-neutral-300 text-lg leading-relaxed text-justify font-secondary">
                Austic Scrap sets itself apart with exceptional service and a
                strong focus on sustainability. Every interaction is handled
                professionally and courteously, ensuring high customer
                satisfaction. By helping businesses maintain organized and
                efficient workspaces, Austic Scrap also contributes to
                environmental conservation. Committed to eco-friendly practices,
                the company recycles or disposes of scrap material in
                environmentally responsible ways. Partnering with Austic Scrap
                means choosing top-quality scrap management services while
                supporting a greener future. This dual commitment to clients and
                the environment has established Austic Scrap as a leader in the
                industry, driving positive change across India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
