'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CorporateScrapContent: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="product-container">
      <section className="scrap-section">
        <div className="scrap-container">
          <div className="scrap-row">
            <div className="scrap-col-12">
              <h1>Coporate Office Scrap Buyers in Kolkata</h1>

              <p className="scrap-paragraph">
                Looking to dispose of old office furniture in Kolkata? Our Kolkata-based scrap-buying company specializes in buying and recycling office furniture and other corporate scrap materials. We offer a seamless, environmentally responsible solution for businesses looking to upgrade their office space and get rid of unwanted items like used tables, chairs, cabinets, and workstations. Whether you're a corporate office in Park Street, a bank in Dalhousie, or a start-up in Salt Lake, we make the process simple and hassle-free.
              </p>
              <p>
                Our team will come to your location, collect the unwanted furniture, and transport it to our modern recycling facility. Here, we dismantle each piece, recovering valuable materials like wood, metal, and plastic for reuse. This approach not only ensures proper waste management but also supports environmental sustainability by reducing landfill waste and conserving natural resources.
              </p>
            </div>

            <div className="asset-col" data-aos="fade-right">
              <h3 className="asset-heading text-center">types of DG Generators we Buy</h3>
              <div className="asset-types">
                <div className="asset-type" data-aos="fade-up">
                  <strong>Wooden Furniture: </strong>
                  <p>
                    Old desks, tables, and shelving units made from wood don’t need to end up in landfills. At our Kolkata-based scrap buying company, we specialize in recycling wooden office furniture by dismantling it, recovering the wood, and processing it for reuse in new products. Whether you're upgrading your office or downsizing, we ensure a smooth and eco-friendly disposal of your wooden furniture.
                  </p>
                </div>
                <div className="asset-type" data-aos="fade-up" data-aos-delay="100">
                  <strong>Mixed-Material Office Furniture Recycling:</strong>
                  <p>
                    Many office furniture pieces are made from a mix of wood, metal, and plastic. Our expert team handles the dismantling and separation of these materials to maximize recycling efficiency. Whether it’s a workstation, chair, or cabinet, we ensure each material is properly sorted and processed for reuse, reducing waste and supporting sustainability.
                  </p>
                </div>
                <div className="asset-type" data-aos="fade-up" data-aos-delay="200">
                  <strong>Conference Room Furniture Disposal: </strong>
                  <p>
                    Upgrading your conference room? We take care of the hassle by removing large conference tables, presentation desks, and chairs from your meeting rooms. No matter where your office is located—be it the busy streets of central Kolkata or the IT hub in New Town—we provide reliable transport and expert recycling for these larger pieces of furniture.
                  </p>
                </div>
                <div className="asset-type" data-aos="fade-up" data-aos-delay="200">
                  <strong>Cabinet and Shelving Recycling: </strong>
                  <p>
                    If you have file cabinets, storage units, or shelving to dispose of, we can help. Many of these items are made from a mix of wood and metal, both of which can be separated and recycled. From compact filing cabinets to heavy-duty industrial shelving, we handle it all, providing businesses in Kolkata with an eco-friendly, hassle-free solution to office scrap disposal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <strong style={{ marginLeft: '10px', color: '#127441' }}>Partner with Us for Scrap Management</strong>
      <p style={{ marginLeft: '10px', color: 'black', textAlign: 'justify', marginRight: '10px' }}>
        Our Kolkata-based scrap-buying service offers top prices for old office furniture while ensuring responsible recycling practices. By partnering with us, you not only clear out unwanted items but also contribute to environmental sustainability. Contact us today to sell your used office furniture and enjoy a seamless scrap management experience!
      </p>
    </div>
  );
};

export default CorporateScrapContent;
