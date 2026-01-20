// src/components/sections/TestimonialCarousel.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  photo: string;
  name: string;
  title: string;
  review: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    photo: '/images/taj.png',
    name: 'Amit Sharma',
    title: 'Corporate Office',
    review:
      'Austic Scrap made disposing of our old office furniture during our renovation hassle-free! They offered great prices, and their team was quick, efficient, and respectful. Highly recommend for businesses in Pune!',
    rating: 5,
  },
  {
    photo: '/images/kas.jpeg',
    name: 'Rohit Deshmukh',
    title: 'Manufacturing Sector',
    review:
      'Austic Scrap consistently provides excellent service for our industrial scrap disposal. Their efficiency and commitment to eco-friendly practices are commendable. A reliable partner!',
    rating: 5,
  },
  {
    photo: '/images/taj.png',
    name: 'Priya Kapoor',
    title: 'Facility Manager',
    review:
      'We were upgrading our series of DG sets, and Austic made the removal and disposal process completely hassle-free. Their team came in and safely dismantled the equipment.',
    rating: 5,
  },
  {
    photo: '/images/sudha.png',
    name: 'Anjali Singh',
    title: 'Small Business Owner',
    review:
      'I’ve used Austic Scrap for several of our office clean-ups, and they’ve always provided top-notch service. Whether it’s old office desks or outdated machinery, their team makes the entire process easy and ensures everything is disposed of properly. Excellent customer service!',
    rating: 5,
  },
  {
    photo: '/images/taj.png',
    name: 'Vikas Kumar',
    title: 'Metal Industry',
    review:
      'Austic Scrap offers the best rates for metal scrap in Pune. They handle everything from pick-up to recycling, and their service is reliable and punctual. It\'s great to know that our scrap is being disposed of in an eco-friendly way.',
    rating: 5,
  },
  {
    photo: '/images/taj.png',
    name: 'Neha Gupta',
    title: 'Office Administrator',
    review:
      'I was really impressed by how professional Austic Scrap was when we needed to dispose of our old office furniture. From the initial inquiry to the actual pick-up, everything was seamless. Their team was friendly and efficient, and they offered competitive pricing for our scrap.',
    rating: 5,
  },
  {
    photo: '/images/kas.jpeg',
    name: 'Suresh Menon',
    title: 'IT Company CEO',
    review:
      'Whenever we have an office renovation or need to clear out old equipment, Austic is always my first call. They’re quick, reliable, and have a strong commitment to sustainability. I trust them completely with our scrap disposal needs.',
    rating: 5,
  },
  {
    photo: '/images/taj.png',
    name: 'Deepa Reddy',
    title: 'Logistics Manager',
    review:
      'Austic Scrap handled the removal of our outdated machinery with expertise and care. Their team was efficient and followed all the necessary safety procedures. It was a smooth and painless experience, and I’ll definitely continue working with them.',
    rating: 5,
  },
  {
    photo: '/images/sudha.png',
    name: 'Rajesh Sharma',
    title: 'Environmental Consultant',
    review:
      'Disposing of our old AC chiller was a bit of a challenge, but Austic Scrap made it so easy. Their team knew exactly how to handle the equipment safely and ensure it was disposed of in line with environmental standards. They’re the best for handling complex disposal tasks!',
    rating: 5,
  },
  {
    photo: '/images/taj.png',
    name: 'Pooja Verma',
    title: 'Sustainability Coordinator',
    review:
      'We are always looking for ways to reduce our environmental impact, and Austic Scrap helped us achieve that. They provide great rates for scrap and offer eco-conscious disposal methods. I feel confident knowing that our waste is being handled responsibly.',
    rating: 5,
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial-section flex justify-center items-center py-12 bg-testimonial-pink">
      <div className="testimonial-container overflow-hidden w-full max-w-5xl relative">
        <div
          className="testimonial-slide flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial min-w-full p-8 text-center rounded-lg shadow-md
                         bg-gradient-to-br from-grad-green-end-1 via-grad-green-start-4 to-grad-green-end-4" // Using custom gradient colors
            >
              <Image
                src={testimonial.photo}
                alt={`Client ${testimonial.name}`}
                width={100}
                height={100}
                className="client-photo w-24 h-24 rounded-full mx-auto mb-5"
              />
              <h6 className="text-lg text-color-wheat font-semibold">
                {testimonial.name} — {testimonial.title}
              </h6>
              <p className="client-review text-white mb-2">
                {testimonial.review}
              </p>
              <div className="client-rating flex justify-center">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="star text-yellow-400 text-xl">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
