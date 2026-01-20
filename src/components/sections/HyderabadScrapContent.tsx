'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';

const HyderabadScrapContent: React.FC = () => {
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
            <h1>Reliable Scrap Collection and Disposal Services in Hyderabad</h1>
            <Link href="/" className="main-btn">Home</Link>
            <Link href="/contact" className="main-btn">Sale Now</Link>
          </div>
        </div>
      </section>

      <section id="feature" className="imteyaz_wrapper wrapper">
        <div className="imteyaz_container" data-aos="fade-up">
          <div className="imteyaz_row">
            <div className="imteyaz_col-md-6 text-center text-md-start my-auto order-1">
              <h2 style={{ color: '#127749' }}>
                Hyderabad Scrap Collection Services: Reliable Solutions for your office and Organization Disposal
              </h2>
              <p style={{ textAlign: 'left' }}>
                In Hyderabad, a city known for its booming corporate and industrial sectors, efficient scrap management is crucial for maintaining both productivity and sustainability. Austic Scrap offers tailored scrap buying solutions to meet the unique needs of businesses across the city. Whether it's old office furniture, outdated machinery, or metal scrap, Austic ensures a smooth, stress-free process that prioritizes both environmental sustainability and adherence to local regulations. With a focus on customer satisfaction, they provide dependable scrap collection and disposal services, helping businesses declutter while supporting a cleaner, greener Hyderabad, all while offering competitive prices for scrap materials.
              </p>
            </div>
            <div className="imteyaz_col-md-6 d-flex justify-content-center align-items-center order-2">
              <div className="imteyaz_logo-square" data-aos="zoom-in">
                <Image
                  src="/images/workstation scrap buyer"
                  alt="Workstation Scrap Buyer"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className="imteyaz-col-12" data-aos="fade-right">
            <h3 className="imteyaz-heading text-center">Our Services in Mumbai</h3>
            <div className="imteyaz-types">
              <div className="imteyaz-type" data-aos="fade-up">
                <strong>Scrap Collection: </strong>
                <p>
                  We offer fast and reliable scrap collection services across Hyderabad, providing efficient solutions for various types of recyclable materials. Our team handles the collection of metals, plastics, electronics, and more, ensuring environmentally responsible disposal. We specialize in both ferrous and non-ferrous metals, a wide range of plastic waste, and safe management of e-waste like computers and phones. Our services are tailored to meet the needs of residents and businesses in Hyderabad, offering flexible scheduling, quick pickups, and competitive rates. Trust us for hassle-free scrap management that supports sustainability.
                </p>
              </div>

              <div className="imteyaz-type" data-aos="fade-up" data-aos-delay="100">
                <strong>Office Workstation Buyer</strong>
                <p>
                  In Hyderabad, Austic extends its services to include the buying of old workstations from businesses looking to upgrade or dispose of their office setups. We ensure a smooth and eco-friendly disposal process, helping companies manage space and resources efficiently while adhering to sustainability practices.
                </p>
              </div>

              <div className="imteyaz-type" data-aos="fade-up" data-aos-delay="200">
                <strong>DG Set and Chiller AC System Collection</strong>
                <p>
                  For businesses and industries in Hyderabad, managing the disposal of old DG sets and chiller AC systems requires careful handling. Austic offers specialized services for the safe collection, dismantling, and disposal of these bulky systems. Our expert team ensures that all processes comply with local safety regulations and environmental guidelines, making it easy for companies to responsibly manage large equipment disposal in Hyderabad.
                </p>
              </div>

              <div className="imteyaz-type" data-aos="fade-up" data-aos-delay="300">
                <strong>Corporate Office Furniture Disposal</strong>
                <p>
                  Planning an office renovation or relocating in Hyderabad? Austic is your trusted partner for the hassle-free disposal of old office furniture. As a leading buyer of office desks, chairs, filing cabinets, and other furnishings, we ensure a smooth collection and recycling process. Whether you're upgrading your workspace or clearing out for a new setup, our team helps you efficiently manage old office furniture disposal in Hyderabad, keeping your office organized while promoting sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <strong>Why Choose Austic?</strong>
          <p>
            At Austic, we leverage our deep expertise in managing scrap materials to handle a wide range of items with precision. Our commitment to sustainable practices ensures that we minimize environmental impact at every step of our process. We pride ourselves on transparency, offering competitive pricing and regular updates to keep you informed throughout the entire service journey. Our tailored approach guarantees that each service is customized to meet the unique needs of our clients, providing a smooth and efficient experience that aligns with your specific requirements.
          </p>
        </div>
      </section>
    </>
  );
};

export default HyderabadScrapContent;
