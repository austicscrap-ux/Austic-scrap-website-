'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

const MumbaiEWasteContent: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <Image
            src="/images/Ewsate greenbackground and right logo.png"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="hero-image"
          />
          <div className="hero-text">
            <h1>Comprehensive E-Waste Solutions for Mumbai’s Corporate and Financial Sectors</h1>
            <Link href="/" className="main-btn">Home</Link>
            <Link href="/contact" className="main-btn">Sale</Link>
          </div>
        </div>
      </section>

      <section id="feature" className="feature-wrapper">
        <div className="feature-container" data-aos="fade-up">
          <div className="feature-row">
            <div className="feature-col content-area text-center text-md-start my-auto order-1">
              <h2>E-Waste Management Leadership in Mumbai</h2>
              <p>
                Mumbai, India's bustling financial capital, generates significant e-waste due to its thriving business sector, rapid urbanization, and the constant turnover of technology. With industries, corporate offices, and residential areas continuously upgrading their devices, the city sees an ever-growing pile of discarded electronics. At Austic Scrap and Recycling, we understand the unique challenges this presents. We specialize in buying Information Technology (IT) e-waste scrap and offering IT Asset Disposition (ITAD) services. Our expertise extends across sectors, from the banking industry to corporate offices, where we handle the responsible disposal of outdated IT assets. We also work with small businesses, purchasing electronic waste in bulk, and ensuring that all e-waste is processed with the utmost care. By focusing on efficient recycling, we recover valuable materials like metals, plastics, and rare earth elements, helping to reduce the environmental footprint and promote sustainability in Mumbai.
              </p>
            </div>
            <div className="feature-col image-area d-flex justify-content-center align-items-center order-2">
              <div className="image-wrapper" data-aos="zoom-in">
                <picture>
                  <source srcSet="/images/e-waste-mumbai.webp" type="image/webp" />
                  <source srcSet="/images/e-waste-mumbai.jpg" type="image/jpeg" />
                  <img src="/images/e-waste-mumbai.jpg" alt="Collection of outdated CPUs stacked for responsible e-waste recycling in Mumbai" loading="lazy" />
                </picture>
              </div>
            </div>
          </div>

          <div className="materials-handled">
            <strong>The Importance of E-Waste Recycling in Mumbai</strong>
            <p>
              Mumbai's rapid growth results in increased e-waste. Proper recycling is crucial to recover valuable materials and prevent environmental harm. Our services help Mumbai businesses manage electronic waste responsibly, supporting a greener city.
            </p>
          </div>

          <div className="why-choose">
            <strong>Best E-Waste Recycling & Disposal Services in Mumbai</strong>
            <p>
              When we talk about e-waste, we're referring to more than just old office equipment like computers, laptops, and UPS systems. These discarded electronics often harbor hazardous materials like lead and mercury. If they're not disposed of properly, these toxins can seep into our soil, water, and air, causing serious harm to both our health and the environment. But it's not all bad news. Inside these old gadgets are valuable resources like gold, silver, and copper, just waiting to be recovered. By recycling e-waste, we’re not only protecting the planet from further damage but also making good use of these materials, cutting down the need to extract new raw resources. This kind of responsible management helps us move towards a more sustainable future, where electronic waste is handled in a way that benefits everyone.
            </p>
          </div>

          <ul className="scrap-list">
            <li>Office Computers & Laptops: Our company recycles office computers and laptops that are at the end of their service life, with data protection and environmental protection in view.</li>
            <li>Desktops & CPUs: Our safe disposal solutions recover useful resources—from big desktops to essential CPUs.</li>
            <li>UPS Systems & Batteries: Since UPS systems and batteries come with hazardous materials, we handle them with extra care to ensure their responsible disposal.</li>
            <li>Battery</li>
          </ul>

          <div className="asset-col" data-aos="fade-right">
            <h3 className="asset-heading text-center">Our E-Waste Services</h3>
            <div className="asset-types">
              <div className="asset-type" data-aos="fade-up">
                <strong>IT Asset Disposition (ITAD) Services In Mumbai</strong>
                <p>
                  Our ITAD services ensure secure disposal of IT assets, from data destruction to recycling. We adhere to stringent environmental standards and utilize advanced technology for total data erasure, safeguarding sensitive information
                </p>
              </div>
              <div className="asset-type" data-aos="fade-up" data-aos-delay="100">
                <strong>Corporate Office E-Waste Recycling In Mumbai</strong>
                <p>
                  We offer specialized e-waste recycling for Mumbai's corporate offices, including secure data destruction and recycling of electronics like computers and laptops. Our services are designed to support responsible electronic waste management and minimize environmental footprints.
                </p>
              </div>
              <div className="asset-type" data-aos="fade-up" data-aos-delay="200">
                <strong>Battery & UPS System Recycling</strong>
                <p>
                  Batteries and UPS systems require careful handling due to their hazardous components. Our Mumbai services ensure safe disposal, preventing environmental contamination and adhering to safety standards.
                </p>
              </div>
            </div>
          </div>

          <div className="why-choose">
            <strong>Why choose Austic for E-waste Recyling</strong>
            <p><span>Advanced Technology:</span> Cutting-edge data destruction technology ensures complete data erasure.</p>
            <p><span>Local Expertise:</span> Deep understanding of Mumbai’s regulations and industry needs.</p>
            <p><span>Eco-Friendly Practices:</span> Commitment to sustainability with a focus on recycling and reuse.</p>
            <p><span>Comprehensive Services:</span> Full range of e-waste management services to meet all needs.</p>
            <p><span>Competitive Rates:</span> Fair pricing with high recycling standards.</p>
            <p>Contact us today for efficient e-waste recycling services in Mumbai and discover how we can help your business.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MumbaiEWasteContent;
