// src/components/sections/ScrapBuyingProcess.tsx
"use client";

import React from "react";
import { User, Scale, FileText, Handshake } from "lucide-react";

interface ProcessStep {
  icon: React.ReactNode;
  stepNumber: number;
  title: string;
  description: string;
}

const processSteps: ProcessStep[] = [
  {
    icon: <User />,
    stepNumber: 1,
    title: "Client Meeting",
    description:
      "First step of our scrap buying process is to meet clients and discuss the overall requirements",
  },
  {
    icon: <Scale />,
    stepNumber: 2,
    title: "Evaluation of Scrap",
    description:
      "Second step is to evaluate scrap price as per standards that will suit both parties’ best",
  },
  {
    icon: <FileText />,
    stepNumber: 3,
    title: "Quotation Submit",
    description:
      "In the third step, we send the best quotation after real-time/spot evaluation of scrap price",
  },
  {
    icon: <Handshake />,
    stepNumber: 4,
    title: "Execution",
    description:
      "We execute the scrap moving process in 48 hours depending on the work volume",
  },
];

const ScrapBuyingProcess: React.FC = () => {
  return (
    <section id="services" className="services_wrapper wrapper py-12">
      <div className="container mx-auto px-4 lg:px-[86px]">
        <div className="services-row">
          <div className="col-sm-12 text-center mb-10">
            <h3 className="text-grad-green-end-1 text-3xl font-bold font-josefin-sans">
              Our Scrap Buying process
            </h3>
            <p className="text-text-gray text-justify max-w-2xl mx-auto mt-4">
              We've distilled our Scrap Buying process into 4 Steps – the same
              steps we have been using for more than 30 years to deliver fast
              and hassle-free service!
            </p>
          </div>
        </div>
        <div className="services-row flex flex-wrap justify-center -mx-2">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="col-md-3 col-sm-6 mb-4 w-full md:w-1/2 lg:w-1/4 px-2"
            >
              <div className="card service-item bg-white p-6 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg h-full flex flex-col justify-between">
                <div>
                  <div className="icon-box text-5xl mb-4 text-text-primary flex items-center justify-center">
                    {step.icon}{" "}
                    <span className="ml-2 text-2xl font-bold">
                      {step.stepNumber}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-text-black-dark mb-2">
                      {step.title}
                    </h4>
                    <p className="text-text-gray text-justify text-base">
                      {step.description}
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

export default ScrapBuyingProcess;
