'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

const BengaluruEWasteContent: React.FC = () => {
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
            <h1>Efficient E-Waste Recycling for Bengaluru’s Tech-Driven Ecosystem</h1>
            <Link href="/" className="main-btn">Home</Link>
            <Link href="/contact" className="main-btn">Sale Now</Link>
          </div>
        </div>
      </section>

      <section id="feature" className="feature-wrapper">
        <div className="feature-container" data-aos="fade-up">
          <div className="feature-row">
            <div className="feature-col content-area text-center text-md-start my-auto order-1">
              <h2>E-Waste Management Leadership in Bengaluru</h2>
              <p>
                Bengaluru, 'the Silicon Valley of India,' is a leader in Bengaluru’s technology and innovation and entrepreneurship industries. With a vast array of Bengaluru’s IT companies, Bengaluru’s startups, and Bengaluru’s research institutions, the city generates a significant amount of electronic waste. Managing this e-waste responsibly is critical for sustaining Bengaluru’s reputation as a leader in both technology and environmental stewardship. At Austic Scrap and Recycling, we provide specialized Bengaluru e-waste management services tailored to Bengaluru’s dynamic tech ecosystem. Our focus is on secure disposal, data protection, and the recovery of valuable materials from electronic waste, all while supporting the city’s commitment to sustainability and innovation.
              </p>
            </div>
            <div className="feature-col image-area d-flex justify-content-center align-items-center order-2">
              <div className="image-wrapper" data-aos="zoom-in">
                <picture>
                  <source srcSet="/images/laptop-set.webp" type="image/webp" />
                  <source srcSet="/images/laptop-set.jpg" type="image/jpeg" />
                  <img
                    src="/images/laptop-set.jpg"
                    alt="Series of old Lenovo ThinkPad laptops collected from an office for e-waste recycling in Bengaluru"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
          </div>

          <div className="materials-handled">
            <strong>Why E-Waste Recycling is Crucial for Bengaluru </strong>
            <p>
              Bengaluru, evolving into a worldwide hub for Information Technology (IT), faces the rising challenge of managing e-waste responsibly. The improper disposal of electronic devices can result in the release of dangerous materials like lead and mercury which have acute consequences to both health and environment. In addition, these obsolete electronic gadgets are made up of precious metals such as gold, silver and rare earths that can be reclaimed for reuse.
            </p>
          </div>

          <div className="why-choose">
            <strong>Why We Need E-Waste Recycling </strong>
            <p>
              E-waste includes all types of old office equipment like computers, laptops, and UPS systems. These aren’t just discarded items; they contain harmful substances like lead and mercury that can damage the environment if not handled properly. Fortunately, there’s a positive side: these old electronics also have valuable materials like gold, silver, and copper inside. By recycling e-waste responsibly in a tech-focused city like Bengaluru, we not only protect the environment but also recover these important resources and reduce the need to mine new ones. This practice meets legal requirements and helps Bengaluru maintain its status as a leading tech city while promoting a more sustainable future.
            </p>
          </div>

          <ul className="scrap-list">
            <li>
              Office Computers & Laptops: Our company recycles office computers and laptops that are at the end of their service life, with data protection and environmental protection in view.
            </li>
            <li>
              Desktops & CPUs: Our safe disposal solutions recover useful resources—from big desktops to essential CPUs.
            </li>
            <li>
              UPS Systems & Batteries: Since UPS systems and batteries come with hazardous materials, we handle them with extra care to ensure their responsible disposal.
            </li>
            <li>Battery</li>
          </ul>

          <div className="asset-col" data-aos="fade-right">
            <h3 className="asset-heading text-center">Our E-Waste Services</h3>
            <div className="asset-types">
              <div className="asset-type" data-aos="fade-up">
                <strong>IT Asset Disposition for Tech Companies: </strong>
                <p>
                  Bengaluru’s tech companies are at the forefront of innovation, leading to rapid technology turnover. Our IT asset disposition services ensure the secure disposal of outdated equipment, with comprehensive data destruction and environmentally responsible recycling.
                </p>
              </div>
              <div className="asset-type" data-aos="fade-up" data-aos-delay="100">
                <strong>Startup Ecosystem E-Waste Solutions:</strong>
                <p>
                  Bengaluru startups often face the challenge of managing outdated electronics. Our Bengaluru startup e-waste solutions are designed to support these growing businesses, offering bulk purchasing of e-waste, secure data destruction, and eco-friendly recycling practices.
                </p>
              </div>
              <div className="asset-type" data-aos="fade-up" data-aos-delay="200">
                <strong>Research Institution Equipment Recycling: </strong>
                <p>
                  Bengaluru’s reputation as a research hub means that institutions frequently upgrade their equipment. Our Bengaluru research institution recycling services focus on recovering valuable materials from obsolete devices, supporting the city’s ongoing commitment to innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="why-choose">
            <strong>Why choose Austic for E-waste Recyling </strong>
            <p>
              In a city as dynamic as Bengaluru, it’s essential to choose an e-waste recycling partner that understands the unique challenges and opportunities of the tech ecosystem. Austic Scrap and Recycling stands out for our commitment to sustainability, <Link href="/dattasecurity">data security learn more</Link>, and customer satisfaction. Our comprehensive range of services is designed to meet the specific needs of Bengaluru’s startups, IT companies, and research institutions, ensuring that your e-waste is handled in the most responsible and efficient manner possible.
            </p>
            <p>
              <span>End-to-End Support:</span> From the initial consultation to the final disposal of e-waste, we provide end-to-end support to ensure that your electronic waste is managed in the most efficient and responsible way possible.
            </p>
            <p>
              Contact us today to explore our e-waste recycling services in Bengaluru and discover how we can help your business manage electronic waste responsibly!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default BengaluruEWasteContent;
