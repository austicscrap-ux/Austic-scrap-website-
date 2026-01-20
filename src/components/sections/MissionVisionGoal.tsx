// src/components/sections/MissionVisionGoal.tsx
"use client";

import React from "react";
import { Target, Eye, Gem } from "lucide-react";

interface GoalItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const goalItems: GoalItemProps[] = [
  {
    icon: <Target />,
    title: "Mission",
    description:
      "At FEXMON, our mission is to transform the scrap recycling industry through high-quality, eco-friendly services. We assist businesses in effectively managing electronic waste and excess materials, promoting sustainability and conservation. With a commitment to quality and ethics, we strive to create a cleaner, greener future.",
  },
  {
    icon: <Eye />,
    title: "Vision",
    description:
      "Our vision is to lead India's scrap recycling industry with innovative solutions, environmental stewardship, and a customer-centric ethos. We envision a world of minimal waste and preserved resources. FEXMON strives to establish new standards, setting benchmarks for reliability and excellence.",
  },
  {
    icon: <Gem />,
    title: "Values",
    description:
      "Integrity, transparency, and trust anchor our values. We uphold environmental accountability, embracing sustainable methods to protect our planet. Customer focus propels us beyond expectations. Innovation is pivotal; we constantly refine practices for client service. Stringent standards ensure excellence in all endeavors.",
  },
];

const MissionVisionGoal: React.FC = () => {
  return (
    <section id="services" className="services_wrapper wrapper py-12">
      <div className="container mx-auto px-4">
        <div className="services-row">
          <div className="col-sm-12 text-center mb-10">
            <h3 className="text-grad-green-end-1 text-3xl font-bold font-josefin-sans">
              Our Goal
            </h3>
          </div>
        </div>
        <div className="services-row flex flex-wrap justify-center -mx-2">
          {goalItems.map((item, index) => (
            <div
              key={index}
              className="col-md-4 col-sm-6 mb-4 w-full md:w-1/2 lg:w-1/3 px-2"
            >
              <div className="card service-item bg-white p-6 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg h-full flex flex-col justify-between">
                <div>
                  <div className="icon-box text-5xl mb-4 text-text-primary flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-text-black-dark mb-2">
                      {item.title}
                    </h4>
                    <p className="text-text-gray text-justify text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVisionGoal;
