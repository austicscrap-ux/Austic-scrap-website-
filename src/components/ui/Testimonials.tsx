"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";
import SectionWrapper from "@/components/common/SectionWrapper";

const testimonials = [
  {
    name: "Rohit Deshmukh",
    role: "Manufacturing Sector",
    img: "/images/kas.jpeg",
    review:
      "I’ve used Austic Scrap for several of our office clean-ups, and they’ve always provided top-notch service. Whether it’s old office desks or outdated machinery, their team makes the entire process easy and ensures everything is disposed of properly. Excellent customer service!",
  },
  {
    name: "Priya Kapoor",
    role: "Facility Manager",
    img: "/images/taj.png", // Verify if image name matches original
    review:
      "We were upgrading our series of DG sets, and Austic made the removal and disposal process completely hassle-free. Their team came in and safely dismantled the equipment.",
  },
  {
    name: "Patil",
    role: "Business Owner",
    img: "/images/sudha.png",
    review:
      "Austic Scrap offers the best rates for metal scrap in Pune. They handle everything from pick-up to recycling, and their service is reliable and punctual. It's great to know that our scrap is being disposed of in an eco-friendly way.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper
      id="testimonials"
      className="bg-amber-50/30 border-y border-amber-100/50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#127749] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="flex flex-col items-center text-center mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-[#127749] uppercase bg-[#127749]/10 rounded-full font-secondary">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-primary font-bold text-neutral-900 mb-6 leading-tight">
            What Our <span className="text-[#127749]">Clients</span> Say
          </h2>
          <div className="w-24 h-1.5 bg-[#127749] mx-auto rounded-full" />
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto relative px-4 md:px-10">
        <div className="relative min-h-[500px] md:min-h-[400px]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`absolute top-0 left-0 w-full transition-all duration-1000 ease-in-out transform ${
                i === currentIndex
                  ? "opacity-100 translate-x-0 scale-100 z-10"
                  : "opacity-0 translate-x-12 scale-95 z-0"
              }`}
            >
              <div className="bg-white p-10 md:p-16 rounded-[40px] shadow-2xl relative border border-neutral-100/50">
                <Quote className="text-8xl text-[#127749]/5 absolute -top-4 -left-4 transform -rotate-12" />

                <div className="flex flex-col md:flex-row items-center gap-10">
                  <div className="relative-flex-shrink-0">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform -rotate-3 transition-transform duration-500 hover:rotate-0">
                      <Image
                        src={t.img}
                        alt={t.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-grow text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-4 text-[#127749] text-xl">
                      {[...Array(5)].map((_, starI) => (
                        <span key={starI}>★</span>
                      ))}
                    </div>

                    <p className="text-neutral-600 italic text-lg md:text-2xl mb-8 leading-relaxed font-secondary">
                      "{t.review}"
                    </p>

                    <div>
                      <h4 className="text-2xl font-bold text-neutral-900 font-primary">
                        {t.name}
                      </h4>
                      <span className="text-sm text-[#127749] font-bold uppercase tracking-widest">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                i === currentIndex
                  ? "bg-[#127749] w-12"
                  : "bg-neutral-200 hover:bg-[#127749]/40 w-2.5"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Testimonials;
