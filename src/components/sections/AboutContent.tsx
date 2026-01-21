// src/components/sections/AboutContent.tsx
'use client';

import React from 'react';
import Image from 'next/image';

const AboutContent: React.FC = () => {
  return (
    <section className="about py-12">
      <div className="container mx-auto px-4 lg:px-[86px]">
        <div className="row flex flex-col md:flex-row items-center justify-center">
          <div className="col-md-6 p-4">
            <Image
              src="/images/starbuck logo.png"
              alt="Austic Scrap Logo"
              width={500} // Adjust width as needed
              height={300} // Adjust height as needed
              className="img-fluid w-full h-auto"
            />
          </div>
          <div className="col-md-6 p-4">
            <div className="about-text">
              <h5 className="text-text-primary text-2xl font-josefin-sans font-medium mb-4">
                Welcome To The Austic Scrap
              </h5>
              <p className="text-text-gray text-base leading-relaxed text-justify mb-4">
                <span className="font-bold">Austic</span> Founded by Mr. Sam Jhon in 2003, Austic Scrap began as a local enterprise in Kolkata with a vision of providing excellent scrap-buying services. Over the years, this vision has transformed the company into a national leader in the scrap management industry. Initially, Austic Scrap built its reputation through reliable offline services. With the advent of digital transformation, the company expanded its reach across India, serving sectors such as corporate offices, banking, insurance, IT, malls, and educational institutions. This growth from a small business to a nationwide powerhouse exemplifies Austic Scrap&apos;s dedication and innovative vision.
              </p>
            </div>
          </div>
        </div>
        <div className="container team mt-8">
          <p className="text-text-gray text-base leading-relaxed text-justify mb-4">
            Austic Scrap&apos;s success lies in its unwavering commitment to customer satisfaction and environmental responsibility. The company offers a wide array of scrap management services, ranging from IT asset disposition to e-waste recycling and office furniture disposal. With a dedicated team available 24/7, Austic Scrap ensures prompt and hassle-free scrap pickup right at the client&apos;s doorstep, maximizing returns while minimizing inconvenience. Adhering to rigorous safety and efficiency standards, the company has become a trustworthy partner in responsible waste management. From handling large volumes of electronic scrap to disposing of outdated office furniture, Austic Scrap provides seamless and ethical scrap management services.
          </p>
        </div>
        <div className="container team mt-4">
          <p className="text-text-gray text-base leading-relaxed text-justify mb-4">
            Austic Scrap sets itself apart with exceptional service and a strong focus on sustainability. Every interaction is handled professionally and courteously, ensuring high customer satisfaction. By helping businesses maintain organized and efficient workspaces, Austic Scrap also contributes to environmental conservation. Committed to eco-friendly practices, the company recycles or disposes of scrap material in environmentally responsible ways. Partnering with Austic Scrap means choosing top-quality scrap management services while supporting a greener future. This dual commitment to clients and the environment has established Austic Scrap as a leader in the industry, driving positive change across India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
