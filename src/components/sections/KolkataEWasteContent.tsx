'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

const KolkataEWasteContent: React.FC = () => {
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
            <h1>Expert E-Waste Management for Kolkata’s Corporate and Industrial Sectors</h1>
            <Link href="/" className="main-btn">Home</Link>
            <Link href="/form" className="main-btn">Sale Now</Link>
          </div>
        </div>
      </section>

      <section id="feature" className="feature-wrapper">
        <div className="feature-container" data-aos="fade-up">
          <div className="feature-row">
            <div className="feature-col content-area text-center text-md-start my-auto order-1">
              <h2>E-Waste Recycling Services in Kolkata</h2>
              <p>
                Are you dealing with a buildup of outdated electronics in your office or home? Austic Scrap is your solution. As Kolkata’s leading e-waste recycling and disposal service, we specialize in managing old technology, from obsolete computers and monitors to unused mobile phones. Our dedicated team ensures that your e-waste is recycled and repurposed responsibly, minimizing environmental impact. With Salt Lake City and Newtown rapidly developing as key IT hubs in West Bengal, our services are increasingly essential. By choosing Austic Scrap, you efficiently clear your e-waste, optimize your space, and support sustainable practices. Trust us to handle your e-waste professionally, so you can focus on your business and a greener future.
              </p>
            </div>

            <div className="feature-col image-area d-flex justify-content-center align-items-center order-2">
              <div className="image-wrapper" data-aos="zoom-in">
                <picture>
                  <source srcSet="/images/e-waste-kolkata.webp" type="image/webp" />
                  <source srcSet="/images/e-waste-kolkata.jpg" type="image/jpeg" />
                  <img
                    src="/images/e-waste-kolkata.jpg"
                    alt="Series of outdated laptops queued on cardboard boxes, prepared for e-waste recycling and disposal in Kolkata."
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
          </div>

          <div className="asset-col" data-aos="fade-right">
            <h3 className="asset-heading text-center">Our E-Waste Services</h3>
            <div className="asset-types">
              <div className="asset-type" data-aos="fade-up">
                <strong>Laptop Recycling Service : </strong>
                <p>
                  As technology advances, older laptops from the IT sector and corporate offices become outdated and are often replaced. Disposing of these devices improperly can pose risks to both the environment and data security. Our professional laptop recycling services offer a solution that addresses both concerns effectively.
                </p>
              </div>
              <div className="asset-type" data-aos="fade-up" data-aos-delay="100">
                <strong>UPS Recycling Services:</strong>
                <p>
                  UPS systems are essential for keeping businesses running during power outages, but what happens when they reach the end of their lifecycle? We offer specialized UPS recycling services, recovering key components like batteries and capacitors while ensuring that toxic materials are handled with care.
                </p>
              </div>
              <div className="asset-type" data-aos="fade-up" data-aos-delay="200">
                <strong>IT and Telecommunications Equipment Recycling: </strong>
                <p>
                  From servers and routers to networking gear, our team expertly recycles IT and telecommunications equipment, ensuring that valuable materials are recovered and hazardous substances are safely managed. We understand the critical role this equipment plays in Kolkata’s tech sector and handle it with the attention it deserves.
                </p>
              </div>
            </div>
          </div>

          <div className="materials-handled">
            <strong>Why E-Waste Recycling is Crucial for Kolkata </strong>
            <p>
              Kolkata, rapidly evolving into a major IT hub, faces the growing challenge of managing e-waste responsibly, particularly in areas like Newtown, Salt Lake, and Sector V. Improper disposal of electronic devices can release harmful substances like lead and mercury, posing serious risks to both health and the environment. Additionally, many of these outdated gadgets contain valuable metals such as gold, silver, and rare earth elements that can be recovered and repurposed. Addressing e-waste effectively in these key areas is crucial for protecting our community and making the most of these precious resources. That’s why we provide professional e-waste disposal services across Kolkata.
            </p>
          </div>

          <div className="materials-handled">
            <strong>E-Waste Recycling Regulation EPR: </strong>
            <p>
              At Austic Scrap, we follow Extended Producer Responsibility (EPR) regulations, which require manufacturers to take responsibility for their products throughout their entire lifecycle, including disposal. This means we ensure that electronic waste is collected, treated, and recycled correctly. By adhering to EPR guidelines, Austic Scrap helps reduce the environmental impact of e-waste, keeping it out of landfills and ensuring hazardous materials are handled safely. Our commitment to EPR not only protects the environment but also helps businesses avoid fines and demonstrate their commitment to sustainabilit
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


          <div className="why-choose">
            <strong>Why choose Austic for E-waste Recyling </strong>
            <p>
              As Kolkata’s business landscape continues to grow and evolve, Austic Scrap provides e-waste recycling solutions specifically tailored to the needs of the city’s commercial and industrial sectors. Our services are built around Kolkata’s unique challenges, from the burgeoning IT hubs in Salt Lake and Newtown to the commercial centers of Park Street and Dalhousie.
            </p>

            <p>
              <span>Kolkata-Specific E-Waste Solutions:</span>We understand the unique demands of Kolkata’s growing business and IT sectors. Our recycling services are tailored to meet the city’s specific requirements, ensuring that businesses and institutions can safely and efficiently dispose of their electronic waste.
            </p>

            <p>
              <span>Competitive Pricing:</span> We offer top prices for e-waste, ensuring that businesses in Kolkata can recover value from their outdated electronics. Whether you’re a small business or a large corporation, we provide competitive rates for your e-waste, including laptops, desktops, servers, and more.
            </p>

            <p>
              <span> Data Security and Destruction Services: </span> In today’s digital age, <Link href="/data-security">data security</Link> is non-negotiable. We offer comprehensive data destruction services to ensure that all sensitive information is completely erased from your devices, protecting your business from potential threats.
            </p>
            <p>
              <span>End-to-End Support:</span> From the initial consultation to the final disposal of e-waste, we provide end-to-end support to ensure that your electronic waste is managed in the most efficient and responsible way possible.
            </p>

            <p>
              Contact us today to explore our e-waste recycling services in Kolkata and discover how we can help your business manage electronic waste responsibly!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default KolkataEWasteContent;
