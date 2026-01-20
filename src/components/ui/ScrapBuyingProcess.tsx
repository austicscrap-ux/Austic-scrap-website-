"use client";

import React from "react";
import { User, Scale, FileText, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: User,
    step: 1,
    title: "Client Meeting",
    desc: "First step of our scrap buying process is to meet clients and discuss the overall requirements",
  },
  {
    icon: Scale,
    step: 2,
    title: "Evaluation of Scrap",
    desc: "Second step is to evaluate scrap price as per standards that will suit both parties’ best",
  },
  {
    icon: FileText,
    step: 3,
    title: "Quotation Subimt",
    desc: "In the third step, we send the best quotation after real-time/spot evaluation of scrap price",
  },
  {
    icon: Handshake,
    step: 4,
    title: "Execution",
    desc: "We execute the scrap moving process in 48 hours depending on the work volume",
  },
];

const ScrapBuyingProcess = () => {
  return (
    <section
      id="process"
      className="services_wrapper wrapper bg-[#fdfd0f] py-16"
    >
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[#127749] text-4xl md:text-5xl font-bold font-secondary mb-6 relative inline-block">
              Our Scrap Buying Process
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1.5 bg-[#127749] rounded-full opacity-70"></span>
            </h3>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed font-medium">
              We've distilled our Scrap Buying process into 4 simple steps – a
              proven method we've perfected over 30 years to deliver fast, fair,
              and hassle-free service!
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="card service-item bg-white p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col border border-yellow-100/50 relative overflow-hidden group">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-50 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>

                <div className="icon-box text-5xl text-secondary mb-6 flex justify-center items-center relative z-10">
                  <div className="w-20 h-20 rounded-full bg-[#fdfd0f]/30 flex items-center justify-center group-hover:bg-[#fdfd0f] transition-colors duration-300">
                    <item.icon className="drop-shadow-sm" />
                  </div>
                  <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs font-bold w-8 h-8 flex items-center justify-center rounded-full border-2 border-white shadow-md">
                    {item.step}
                  </span>
                </div>

                <div className="flex-grow flex flex-col items-center text-center relative z-10">
                  <h4 className="text-2xl font-bold mb-4 text-[#127749] font-secondary group-hover:text-black transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrapBuyingProcess;
