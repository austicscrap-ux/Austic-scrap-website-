// src/components/sections/TeamSupport.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface TeamSupportItemProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean; // For alternating layout
}

const teamSupportItems: TeamSupportItemProps[] = [
  {
    title: 'TEAM WORK',
    description:
      'Our team is dedicated to providing the best service in the market to ensure customer satisfaction. Our team will collect your scrap with just one call, right from your location—whether it\'s at your doorstep, house, office, or factory/company.',
    imageSrc: '/images/team%20(1).png',
    imageAlt: 'Team Work',
    reverse: false,
  },
  {
    title: 'LABOUR & WORKER',
    description:
      'We have skilled labor and hardworking workers dedicated to providing the best service to our clients in the market. In addition to our labor team, we have an experienced team that plays a vital role in planning, execution, and monitoring of projects to ensure timely completion.',
    imageSrc: '/images/team%20(3).png',
    imageAlt: 'Labour & Worker',
    reverse: true, // This item will have the image on the left
  },
  {
    title: '24 * 7 - SUPPORT',
    description:
      'Austic has a highly experienced team that works around the clock to provide fast and efficient service. Our team will collect your scrap with just one call from your location. Contact us to sell any type of scrap and quickly turn it into cash!',
    imageSrc: '/images/team%20(2).png',
    imageAlt: '24/7 Support',
    reverse: false,
  },
];

const TeamSupport: React.FC = () => {
  return (
    <section className="something py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-[86px] max-w-7xl">
        {teamSupportItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`section-item flex flex-col md:flex-row items-center justify-between mb-20 gap-8 lg:gap-16
              ${item.reverse ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="paras w-full md:w-1/2">
              <h4 className="text-3xl lg:text-4xl font-bold text-text-black-dark mb-6 tracking-wide font-secondary relative inline-block">
                {item.title.split(' ').map((word, i) => (
                  <span key={i} className={word === '&' || word === '*' || word === '-' ? 'text-secondary' : ''}>
                    {word}{' '} 
                  </span>
                ))}
              </h4>
              <p className="sectionsub-tag text-lg text-gray-700 leading-relaxed text-left">
                {item.description}
              </p>
            </div>
            <div className="thumbnail w-full md:w-1/2">
              <div className="relative overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto' }}
                  className="img-fluid w-full rounded-2xl"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSupport;
