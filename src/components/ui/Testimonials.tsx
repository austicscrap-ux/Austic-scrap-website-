"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Quote } from "lucide-react";

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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="wrapper bg-gray-50 py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[#127749] text-3xl md:text-4xl font-semibold font-secondary mb-3">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[300px]">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out transform ${
                  i === currentIndex
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-full"
                }`}
                style={{
                  transform:
                    i === currentIndex
                      ? "translateX(0%)"
                      : i < currentIndex
                        ? "translateX(-100%)"
                        : "translateX(100%)",
                  opacity: i === currentIndex ? 1 : 0,
                }}
              >
                <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg text-center mx-4 relative">
                  <Quote className="text-4xl text-secondary/10 absolute top-4 left-4" />

                  <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-md">
                    <Image
                      src={t.img}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <p className="text-gray-600 italic text-lg mb-6 leading-relaxed relative z-10">
                    "{t.review}"
                  </p>

                  <div className="flex justify-center mb-2 text-yellow-500 text-lg">
                    {[...Array(5)].map((_, starI) => (
                      <span key={starI}>★</span>
                    ))}
                  </div>

                  <h6 className="text-xl font-bold text-text-black mb-1 font-secondary">
                    {t.name}
                  </h6>
                  <span className="text-sm text-secondary block font-medium uppercase tracking-wide">
                    {t.role}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === currentIndex
                    ? "bg-secondary w-8"
                    : "bg-gray-300 hover:bg-secondary/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
