// src/components/sections/AcScrapContent.tsx
'use client';

import React from 'react';
import SectionWrapper from '@/components/common/SectionWrapper';

const AcScrapContent: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1>
            Air Conditioner Scrap Buyer In Kolkata
          </h1>

          <p>
            Austic Scrap Company is Kolkata’s leading air conditioner scrap buyer, catering to the unique needs of businesses across the city. From corporate offices in Salt Lake to shopping centers in Esplanade, banks in Dalhousie, hotels in Park Street, and IT departments in New Town, we understand the importance of upgrading air conditioning systems to meet modern standards. However, as your business grows or updates its infrastructure, dealing with outdated air conditioning units can become a hassle. This is where Austic Scrap steps in as your trusted buyer for old, unused AC units in Kolkata.
          </p>
          <p>
            Our specialized services in Kolkata ensure a hassle-free, streamlined process for businesses looking to sell their old air conditioning units. We handle everything from collection to providing the best market rates for your old equipment. Whether you have a single unit or an entire building’s worth of air conditioners, our goal is to provide you with a reliable and profitable solution to offload your AC scrap.
          </p>
        </div>

        <div className="mb-12">
          <h3>
            Why Businesses in Kolkata Need Air Conditioner Scrap Buyers
          </h3>
          <p>
            Kolkata’s climate and business landscape demand robust cooling solutions, especially for commercial sectors like IT, retail, and hospitality. Over time, these systems become inefficient and need upgrading. However, disposing of old air conditioning units is not just a matter of clearing space—it’s about finding a responsible and efficient way to get rid of them.
          </p>
          <p>
            Improper disposal of AC units poses risks to the environment and violates regulations regarding hazardous waste. By selling your air conditioning scrap to Austic Scrap Company, you ensure compliance with these laws while also receiving fair compensation for your old equipment. We prioritize environmental sustainability, ensuring that your air conditioning units are recycled properly.
          </p>
        </div>

        <div className="mb-12">
          <h2>
            Our Recycling Process
          </h2>
          <p>
            From little window units to massive central systems, we handle
            all kinds of air conditioners. Regardless of size, we begin by
            removing the outdated equipment from your location. They are
            delivered to our recycling facility after being collected.
          </p>
        </div>
        
        <div className="mb-12">
          <h3>
            Types of Air Conditioners We Buy in Kolkata
          </h3>
          <ul className="space-y-4">
            <li className="flex flex-col sm:flex-row sm:items-baseline gap-2">
              <span className="font-bold text-lg text-primary min-w-[180px]">Window AC Units:</span> 
              <span className="text-neutral-600">Widely used in smaller offices and retail spaces, window AC units are common in many commercial buildings. We buy these units and ensure they are recycled responsibly.</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-baseline gap-2">
              <span className="font-bold text-lg text-primary min-w-[180px]">Split Air conditioners:</span> 
              <span className="text-neutral-600">Common in commercial offices and institutions across Kolkata, we specialize in purchasing split AC units that are often upgraded to more energy-efficient systems.</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-baseline gap-2">
              <span className="font-bold text-lg text-primary min-w-[180px]">Central AC Systems:</span> 
              <span className="text-neutral-600">Larger businesses and institutions, such as malls and hotels, use central AC systems that need periodic upgrades. We manage the removal and recycling of these large systems efficiently.</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-baseline gap-2">
              <span className="font-bold text-lg text-primary min-w-[180px]">Industrial AC Units:</span> 
              <span className="text-neutral-600">Factories and larger commercial properties often use heavy-duty air conditioning systems. We specialize in buying industrial AC scrap, offering businesses a reliable solution for disposing of these complex systems.</span>
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AcScrapContent;
