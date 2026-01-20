'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

const PuneEWasteContent: React.FC = () => {
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
            <h1>E-Waste Management Solutions for Pune’s Evolving Tech and Industrial Sector</h1>
            <Link href="/" className="main-btn">Home</Link>
            <Link href="/contact" className="main-btn">Sale Now</Link>
          </div>
        </div>
      </section>

      <section id="feature" className="feature-wrapper">
        <div className="feature-container" data-aos="fade-up">
          <div className="feature-row">
            <div className="feature-col content-area text-center text-md-start my-auto order-1">
              <h2>E-Waste Management Leadership in Pune</h2>
              <p>
                Pune, a perfect place balancing both heritage and contemporary, is famous for its institutions of learning, but it is also finding its way in the area of investments and industries. As this vibrant city carves its niche in IT and manufacturing, one problem looms large: the management of electronic waste. At Austic Scrap and Recycling, we pledge to offer solutions for e-waste management that specifically cater to the growing needs in Pune’s steppe business.
              </p>
            </div>
            <div className="feature-col image-area d-flex justify-content-center align-items-center order-2">
              <div className="image-wrapper" data-aos="zoom-in">
                <Image src="/images/workstation scrap buyer" alt="Workstation Scrap Buyer" width={500} height={500} />
              </div>
            </div>
          </div>

          <div className="asset-col" data-aos="fade-right">
            <h3 className="asset-heading text-center">E-Waste Recycling Services of Our Company for Pune</h3>
            <p>At Austic, we understand that all sectors in Pune have varying needs when it comes to e-waste management. Hence, we have developed the following interventions to suit those needs:</p>
            <div className="asset-types">
              <div className="asset-type" data-aos="fade-up">
                <strong>IT Asset Disposal (ITAD) for Pune's Tech Industry:</strong>
                <p>
                  The IT Asset Disposal services we provide will come in handy to all technology companies based in Pune that are constantly innovating and updating their IT infrastructures. We provide complete data eradication services and also observe all environmental standards during the recycling process.
                </p>
              </div>
              <div className="asset-type" data-aos="fade-up" data-aos-delay="100">
                <strong>Corporate E-Waste Solutions:</strong>
                <p>
                  As businesses in Pune continually upgrade their technology, we provide effective solutions for managing corporate e-waste. Our comprehensive services encompass everything from collection to recycling, all while ensuring adherence to local waste management regulations.
                </p>
              </div>
              <div className="asset-type" data-aos="fade-up" data-aos-delay="200">
                <strong>Battery & Power System Recycling:</strong>
                <p>
                  In a city where reliable power is crucial, the proper disposal of batteries and UPS systems is essential. Our recycling services ensure safe handling and disposal of these items, preventing environmental harm and recovering valuable materials for reuse. This service is particularly important for Pune’s energy-dependent industries.
                </p>
              </div>
              <div className="asset-type" data-aos="fade-up" data-aos-delay="200">
                <strong>Data Center Equipment Decommissioning:</strong>
                <p>
                  Pune’s data centers are critical to its IT infrastructure. Our decommissioning services include secure data destruction and the recycling of servers, networking equipment, and other data center components. We ensure that sensitive information is completely erased and that all materials are processed in an environmentally responsible manner.
                </p>
              </div>
              <div className="asset-type" data-aos="fade-up" data-aos-delay="200">
                <strong>Manufacturing Industry E-Waste Management:</strong>
                <p>
                  Our e-waste management services cater to Pune’s manufacturing industry as well. We focus on recovering valuable materials from outdated machinery and electronic components, thereby promoting sustainable practices within this vital sector
                </p>
              </div>
            </div>
          </div>

          <div className="materials-handled">
            <strong>E-Waste Recycling in Pune</strong>
            <p>
              With advancements in technology, the shrinking Pune city is set to witness untold volumes of e-waste shortly. This waste, if care is not taken, can pose great risks to the environment and humankind. It is known that improper dumping of disused electronic equipment, such as computers, can expose the environment to toxic components such as lead and mercury and endanger the health of people and wildlife. The good news though is that these wastes contain claimable materials as precious metals like Gold, Silver, and Rare Earth Elements. It is already possible for e-waste to be recycled even with the rapid growth of technology in Pune.
            </p>
          </div>

          <div className="materials-handled">
            <strong>The Importance of E-Waste Management in Pune</strong>
            <p>
              Pune’s rapid growth in technology and education makes responsible e-waste management a critical aspect of the city’s sustainability efforts. By recycling electronic waste, we can recover valuable materials and prevent the release of harmful substances into the environment. Our services are designed to help Pune’s businesses and institutions contribute to the city’s green initiatives, ensuring that Pune’s technological advancements goes hand in hand with environmental responsibility.
            </p>
          </div>

          <div className="why-choose">
            <strong>Why We Need E-Waste Recycling</strong>
            <p>
              E-waste includes all types of old office equipment like computers, laptops, and UPS systems. These aren’t just discarded items; they contain harmful substances like lead and mercury that can damage the environment if not handled properly. Fortunately, there’s a positive side: these old electronics also have valuable materials like gold, silver, and copper inside. By recycling e-waste responsibly in a tech-focused city like Pune, we not only protect the environment but also recover these important resources and reduce the need to mine new ones. This practice meets legal requirements and helps Pune maintain its status as a leading tech city while promoting a more sustainable future.
            </p>
          </div>

          <ul className="scrap-list">
            <li>Office Computers & Laptops: Our company recycles office computers and laptops that are at the end of their service life, with data protection and environmental protection in view.</li>
            <li>Desktops & CPUs: Our safe disposal solutions recover useful resources—from big desktops to essential CPUs.</li>
            <li>UPS Systems & Batteries: Since UPS systems and batteries come with hazardous materials, we handle them with extra care to ensure their responsible disposal.</li>
            <li>Battery</li>
          </ul>

          <div className="why-choose">
            <strong>Why Choose Austic for E-Waste Management in Pune?</strong>
            <p>
              <span>Get the Best Price:</span> At Austic Scrap and Recycling, we pride ourselves on offering the most competitive prices for electronic waste across Pune and Maharashtra. Our commitment to providing exceptional value sets us apart in the e-waste management industry, ensuring that you receive the best return on your electronic scrap.
            </p>
            <p>
              <span>Cutting-Edge Data Security: </span> For Pune’s thriving tech and educational sectors, data security is paramount. Our services include advanced data destruction techniques that ensure your sensitive information is thoroughly erased before the recycling process begins. This added layer of security aligns with the city’s high standards for data privacy and protection.</p>
            <p>
              <span>Expertise in Local Regulations:</span> Navigating the regulatory landscape in Pune can be complex. Austic’s deep understanding of local e-waste regulations ensures that our services comply with all necessary guidelines. We provide peace of mind by managing your e-waste in accordance with Pune’s specific environmental and legal requirements.
            </p>
            <p><span>Dedicated Customer Support:</span>At Austic, we prioritize customer service with a dedicated team ready to address your specific needs. From initial consultation to final disposal, our customer support ensures a seamless and responsive experience tailored to the unique demands of Pune’s diverse sectors.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PuneEWasteContent;
