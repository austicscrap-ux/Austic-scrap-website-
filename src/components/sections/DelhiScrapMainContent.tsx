// src/components/sections/DelhiScrapMainContent.tsx
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
    title: 'Corporate furniture scrap',
    description:
      'Are you upgrading your office furniture in Delhi? That’s great! But what about the old stuff? Don’t worry—Austic is here to help. We work for corporate offices, banks, insurance, and IT companies. Austic provides services including buying and recycling office furniture such as desks, office chairs, reception counters, or filing cabinets. Our skilled team makes the removal process easy and smooth. IT Company and Software Office Scrap',
    delay: 0,
  },
  {
    title: 'Office Workstation scrap',
    description:
      'Is your office filled up with old workstations or office furniture? We understand—it happens in offices. That’s why Austic is here! We are devoted to buying and disposing of old office workstations in Delhi. Our labor and team will carefully dismantle the office workstation along with the old chairs. Let us handle the heavy lifting so you can enjoy a more organized workspace!',
    delay: 100,
  },
  {
    title: 'IT Companies and software offices scrap',
    description:
      'In IT companies and the tech corporate world, staying up-to-date often means upgrading their IT assets. But what happens to the old IT asset that gets outdated is very hectic for corporate officers to maintain. So, Austic is here to buy all kinds of old and used IT asset scrap in Delhi. We understand how important it is to keep tech industries\' data safe, so we handle everything—from securely wiping old devices to recycling them responsibly.',
    delay: 200,
  },
  {
    title: 'Old Computer and IT Scrap',
    description:
      'As technology keeps moving, hardware is outdated, and old computers and IT equipment can quickly become outdated. But don’t let them pile up. Austic offers an easy solution! Our team will pick up your old devices and ensure they’re recycled in an environmentally friendly way. We are accountable for data security and destruction, so our technical team erases or removes all the data safely so your data doesn\'t get breached.',
    delay: 300,
  },
  {
    title: 'electronic scrap',
    description:
      'Electronic waste is becoming a big challenge with all the tech advances in Delhi. “That’s where Austic comes in. We’re here to handle your old electronics. We pick up electronic waste, dispose of it safely, and recycle it. This keeps harmful stuff out of the wrong places. By choosing Austic, you\'re helping Delhi stay clean and green.',
    delay: 400,
  },
  {
    title: 'AC Scrap',
    description:
      'We all know how essential air conditioners are in corporate offices in Delhi’s heat. But when they stop working, getting rid of ducted AC can be tough because ducted AC systems are very heavy to manage. We are here to buy all kinds of old office air conditioners, such as ducted AC systems, split air conditioning systems, and cassette AC systems. Our professional AC technician safely removes your old office AC, taking care of hazardous materials. Old air conditioners are being safely and eco-friendly disposed of.',
    delay: 500,
  },
];

const DelhiScrapMainContent: React.FC = () => {
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
              Scrap Collection Services in Delhi: Sustainable Recycling with Austic
            </h2>
            <p className="text-text-gray text-base leading-relaxed text-justify mb-4">
              At Austic, we’re here to make scrap collection and recycling in Delhi hassle-free for you. We understand that life can get busy in the office, so we’re ready to help. Whether you manage a corporate office, IT company, shopping center, bank, insurance firm, or organization, our services include purchasing and recycling office scrap, office workstations, and IT and non-IT scrap. Our goal is to provide an easy and stress-free waste management service that not only handles your office scrap but also helps keep our city clean and green.
            </p>
            <p className="text-text-gray text-base leading-relaxed text-justify">
              We collect various types of scrap—office waste, old workstations, metal, electrical parts, furniture, wood items, and even server equipment. Our process is simple: our inspection team will first inspect the site and see which kind of scrap the company wants to dispose of, whether it is e-waste or furniture, then our team will give you a clear and fair quote in the market once the deal is closed between us, then our highly skilled labor and technician dismantle the whole office, and our logistic team arranges a quick and easy pickup. We make sure everything runs smoothly, with as little disruption to your office routine as possible.
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
                src="/images/workstation scrap buyer.jpeg" // Assuming .jpeg
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
            Scrap we buy
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

export default DelhiScrapMainContent;
