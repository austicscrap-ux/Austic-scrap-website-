import React from 'react';

const AssetDisposalContent: React.FC = () => {
  return (
    <div className="product-container">
      <section className="scrap-section">
        <div className="scrap-container">
          <div className="scrap-row">
            <div className="scrap-col-12">
              <h1>IT Asset Disposal Services in Kolkata</h1>
              <p className="scrap-paragraph">
                We're passionate about helping businesses like yours tackle the growing problem of electronic waste. As Kolkata's trusted IT asset disposal experts, we make it easy to clear out those old computers, servers, and other tech clutter. Our team will pick up your outdated equipment directly from your office or doorstep, saving you time and hassle.
              </p>
              <p>Once we collect your electronic waste, it's transported to our state-of-the-art recycling facility. Our skilled technicians carefully disassemble each device, ensuring your sensitive data is completely wiped clean. We're committed to protecting your business from data breaches. By recycling valuable metals and components, we help conserve resources and minimize our environmental impact.
              </p>
              <p>Austic Scrap is more than just a recycling company; we're your partners in sustainability. Our customized solutions and friendly service make the entire process smooth and hassle-free. Let us handle your electronic waste responsibly, so you can focus on growing your business. Contact us today for a free quote!
              </p>
            </div>
          </div>
          <div className="scrap-row">
            <div className="scrap-col-12">
              <h3 className="scrap-heading text-center">Types of IT Assets</h3>
              <div className="scrap-types">
                <div className="scrap-type">
                  <h2>Computers and Laptops</h2>
                  <p>
                    Computers and laptops are common IT assets that require proper disposition. They contain valuable metals such as gold, silver, and copper, which can be recovered through recycling. Proper disposition practices involve dismantling the devices, recovering the metals, and safely disposing of hazardous substances.
                  </p>
                </div>
                <div className="scrap-type">
                  <h2>Servers and Networking Equipment</h2>
                  <p>
                    Servers and networking equipment generate significant amounts of e-waste. They contain valuable materials such as gold, silver, and copper, which can be recovered through recycling. Proper disposition practices involve dismantling the devices, recovering the metals, and safely disposing of hazardous substances.
                  </p>
                </div>
                <div className="scrap-type">
                  <b>Storage Devices</b>
                  <p>
                    Storage devices such as hard drives and solid-state drives (SSDs) contain sensitive data that must be securely erased before disposal. Proper disposition practices involve securely erasing data, dismantling the devices, and recovering valuable materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssetDisposalContent;
