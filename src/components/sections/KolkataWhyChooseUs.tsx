// src/components/sections/KolkataWhyChooseUs.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const KolkataWhyChooseUs: React.FC = () => {
  return (
    <motion.section
      className="py-12 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 text-center max-w-3xl">
        <strong className="block text-2xl md:text-3xl font-bold font-josefin-sans mb-4 text-text-black-dark">
          Why Choose Austic?
        </strong>
        <p className="text-lg leading-relaxed text-text-gray">
          Austic draws on extensive experience in the recycling field to expertly handle a wide range of scrap materials. We prioritize eco-friendly practices, working to minimize the environmental impact of each item we process. Our process is characterized by openness, featuring fair rates and consistent updates throughout. We offer bespoke services tailored to each client&apos;s specific needs, aiming for a seamless and rewarding experience.
        </p>
      </div>
    </motion.section>
  );
};

export default KolkataWhyChooseUs;
