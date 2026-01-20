// src/components/sections/MumbaiScrapMainContent.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ScrapItem {
  title: string;
  description: string;
  delay: number;
}

const scrapItems: ScrapItem[] = [
  {
    title: 'Workstation Scrap',
    description:
      'Do you have old workstations taking up valuable space in your Mumbai office? You aren’t alone on this one. It appears that the workstation tends to accumulate centuries’ worth of obsolete furniture and devices; however, Austic has the right solution for your problem. We specifically deal with purchasing and disassembling shunned office workstations alongside their other components like used tables, old chairs, etc. We want to help everyone who is considering removing their workstation scrap material. we are here to pay the best price for your second-hand scrap in the market',
    delay: 0,
  },
  {
    title: 'Old DG Set scrap',
    description:
      'If you have an obsolete DG set that is no longer useful, Austic is here to help. We specialize in purchasing secondhand DG sets in Mumbai, ensuring that you get the best value for your outdated Old Diesel Generator. Our team handles everything from safe disassembly to the responsible removal and transport of your DG set. We take care of the entire process, from start to finish, so you don’t have to worry about a thing. Trust Austic to make the removal of your old DG set easy and hassle-free.',
    delay: 100,
  },
  {
    title: 'Old Office Air Conditioner',
    description:
      'In Mumbai\'s intense heat, air conditioners are vital in corporate offices, but dealing with old or non-functional units can be challenging, especially ducted AC systems, which are heavy and difficult to handle. Austic specializes in buying all types of office air conditioners, including ducted, split, and cassette AC systems. Our expert technicians ensure the safe removal of your old AC units, carefully managing any hazardous materials. We prioritize eco-friendly disposal, making the process seamless for you while ensuring that your outdated air conditioners are responsibly handled.',
    delay: 200,
  },
];

const MumbaiScrapMainContent: React.FC = () => {
  return (
    <section id="feature" className="imteyaz_wrapper wrapper py-12">
      <div className="imteyaz_container container mx-auto px-4">
        <div className="imteyaz_row flex flex-col md:flex-row items-center justify-center">
          {/* Content Part */}
          <motion.div
            className="imteyaz_col-md-6 w-full md:w-1/2 p-4 text-center md:text-left order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-grad-green-end-1 text-3xl md:text-4xl font-bold font-josefin-sans mb-6">
              Efficient Scrap Disposal and Sustainable Waste Solutions for Mumbai’s Businesses
            </h2>
            <p className="text-text-gray text-base leading-relaxed text-justify mb-4">
              In Mumbai's busy business environment, managing waste effectively is essential. Austic offers reliable scrap buying services for offices, businesses, and banks. We handle everything from old equipment to office furniture, ensuring your workspace remains tidy and organized. Our team makes the process simple and efficient, taking care of all the details. Committed to eco-friendly practices, we help Mumbai’s companies dispose of scrap responsibly while contributing to a cleaner, more sustainable city.
            </p>
          </motion.div>
          {/* Image Part */}
          <motion.div
            className="imteyaz_col-md-6 w-full md:w-1/2 p-4 flex justify-center items-center order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="imteyaz_logo-square">
              <Image
                src="/images/workstation scrap buyer.jpeg"
                alt="Workstation Scrap Buyer"
                width={500}
                height={300}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="imteyaz-col-12 w-full mt-12"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="imteyaz-heading text-center text-3xl md:text-4xl font-bold font-josefin-sans mb-10 text-text-black-dark">
            Our Scrap Buying Services
          </h3>
          <div className="imteyaz-types grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scrapItems.map((item, index) => (
              <motion.div
                key={index}
                className="imteyaz-type bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item.delay / 1000 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <strong className="block text-xl font-semibold font-josefin-sans mb-2 text-text-black-dark">
                  {item.title}
                </strong>
                <p className="text-text-gray text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MumbaiScrapMainContent;
