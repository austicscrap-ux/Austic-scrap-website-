'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

const HyderabadEWasteContent: React.FC = () => {
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
            src="/images/E-waste svg banner.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            className="hero-image"
          />
          <div className="hero-text">
            <h1 style={{ color: 'rgb(254, 251, 251)' }}>Reliable E-Waste disposal Management for Hyderabad’s Tech and Corporate Sectors</h1>
            <p></p>
            <Link href="#" className="main-btn">Learn More</Link>
          </div>
        </div>
      </section>

      <section id="feature" className="feature-wrapper">
        <div className="feature-container" data-aos="fade-up">
          <div className="feature-row">
            <div className="feature-col content-area text-center text-md-start my-auto order-1">
              <h2>E-Waste Management Leadership in Hydrabad</h2>
              <p style={{ color: 'black' }}>
                Hyderabad is the information technology and innovation focal point of India, where many IT startups, multinational companies, and also financial institutions exist. The city produces a lot of electric waste due to the fast-tech development. Austic Scrap and Recycling takes pride in providing high-quality e-waste recycling and IT Asset Disposition (ITAD) services specifically for the dynamic business environment in Hyderabad. Our expertise cuts across various sectors, including IT startups, corporate offices, and banks, to promote responsible disposal and recycling of obsolete electronic assets. We are committed to recovering as many valuable materials as possible from e-waste while reducing its negative impact on the environment, thereby driving forward sustainability for future generations in Hyderabad.
              </p>
            </div>
            <div className="feature-col image-area d-flex justify-content-center align-items-center order-2">
              <div className="image-wrapper" data-aos="zoom-in">
                <picture>
                  <source srcSet="/images/e-waste-hydrabaad.webp" type="image/webp" />
                  <source srcSet="/images/e-waste-hydrabaad.jpg" type="image/jpeg" />
                  <img
                    src="/images/e-waste-hydrabad.jpg"
                    alt="Series of outdated laptops stored in a basket, with one open laptop, designated for e-waste recycling and disposal in Hyderabad. "
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
                <strong>IT Asset Disposition (ITAD) Services In Hydrabad</strong>
                <p>
                  Our ITAD services are tailored to meet the unique needs of Hyderabad’s IT industry. We provide secure and environmentally responsible disposal of IT assets, including computers, servers, and networking equipment. Our process includes comprehensive data destruction to ensure that sensitive information is completely erased before recycling.
                </p>
              </div>
              <div className="asset-type" data-aos="fade-up" data-aos-delay="100">
                <strong>Corporate Office E-Waste Recycling in Hydrabad</strong>
                <p>
                  Corporate offices in Hyderabad are constantly upgrading their technology to stay competitive. Our Eco-Friendly E-Waste services offer a convenient and secure way to dispose of outdated electronics. We handle everything from the collection of e-waste to the secure destruction of data, ensuring that all electronic devices are recycled in compliance with environmental regulations.
                </p>
              </div>
              <div className="asset-type" data-aos="fade-up" data-aos-delay="200">
                <strong>Battery & UPS System Recycling</strong>
                <p>
                  Batteries and UPS systems contain hazardous materials that require careful handling. Our services ensure that these items are disposed of safely, preventing environmental contamination and adhering to strict safety regulations. We also focus on the recovery of materials like lead and lithium, which can be reused in new batteries.
                </p>
              </div>
              <div className="asset-type" data-aos="fade-up" data-aos-delay="200">
                <strong>Banking Sector E-Waste Solutions</strong>
                <p>
                  The banking sector in Hyderabad deals with highly sensitive information and requires secure disposal of electronic devices. Our services are designed to meet the stringent requirements of the banking industry, offering secure <Link href="/dattasecurity">data destruction</Link> and responsible recycling of electronic equipment.
                </p>
              </div>
            </div>
          </div>

          <div className="materials-handled">
            <strong>Why E-Waste Recycling is Crucial for Hyderabad</strong>
            <p>
              Hyderabad, evolving into a worldwide hub for Information Technology (IT), faces the rising challenge of managing e-waste responsibly. The improper disposal of electronic devices can result in the release of dangerous materials like lead and mercury which have acute consequences to both health and environment. In addition, these obsolete electronic gadgets are made up of precious metals such as gold, silver and rare earths that can be reclaimed for reuse.
            </p>
          </div>

          <div className="why-choose">
            <strong>Why We Need E-Waste Recycling In Hydrabad</strong>
            <p>
              When we talk about e-waste, we're referring to more than just old office equipment like computers, laptops, and UPS systems. These discarded electronics often harbor hazardous materials like lead and mercury. If they're not disposed of properly, these toxins can seep into our soil, water, and air, causing serious harm to both our health and the environment. But it's not all bad news. Inside these old gadgets are valuable resources like gold, silver, and copper, just waiting to be recovered. By recycling e-waste, we’re not only protecting the planet from further damage but also making good use of these materials, cutting down the need to extract new raw resources. This kind of responsible management helps us move towards a more sustainable future, where electronic waste is handled in a way that benefits everyone.
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
            <strong>Why choose Austic for E-waste Recyling</strong>
            <p>
              <span>Advanced Technology:</span> We use the latest technology for data destruction and recycling, ensuring that your sensitive information is completely erased and your e-waste is processed in the most efficient way possible.
            </p>
            <p>
              <span>Local Expertise:</span> With years of experience in the Hyderabad market, we have a deep understanding of the city’s regulatory landscape and industry needs. Our services are designed to meet local requirements while delivering the highest standards of quality.
            </p>
            <p>
              <span>Comprehensive Services:</span> We offer a full range of e-waste management services, from IT asset disposition to data center decommissioning. Whatever your e-waste needs, we have the expertise and resources to meet them.
            </p>
            <p>
              <span>Fair Pricing:</span> We believe in offering competitive rates without compromising on quality. Our pricing is transparent and fair, ensuring that you get the best value for your money.
            </p>
            <p>
              <span>End-to-End Support:</span> From the initial consultation to the final disposal of e-waste, we provide end-to-end support to ensure that your electronic waste is managed in the most efficient and responsible way possible.
            </p>
            <p>
              Contact us today to explore our e-waste recycling services in Hyderabad and discover how we can help your business manage electronic waste responsibly!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HyderabadEWasteContent;
