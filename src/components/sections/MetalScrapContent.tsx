import React from 'react';
import SectionWrapper from '@/components/common/SectionWrapper';

const MetalScrapContent: React.FC = () => {
  return (
    <SectionWrapper>
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1>Metal Scrap</h1>
          <p>
            Our scrap-buying company in Kolkata specializes in collecting, transporting, and recycling metal scrap from businesses in various sectors like corporate, banking, hospitality, and industrial. We recycle metals such as steel, aluminum, copper, and brass to conserve resources and reduce the environmental impact of mining. Our process is seamless, from collection to processing in our advanced facility. Recycling metal scrap helps businesses earn revenue, save on production costs, and comply with environmental regulations
          </p>
        </div>

        <div>
          <h3 className="text-center mb-12 relative inline-block w-full">
            Types of Metal Scrap
            <span className="block w-24 h-1 bg-secondary mx-auto mt-4 rounded-full"></span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-base p-8">
              <h4 className="text-primary mb-4">Aluminum Scrap</h4>
              <p className="mb-0">
                Aluminum scrap includes discarded aluminum cans, foil, and structural components. Aluminum is a lightweight and highly recyclable metal. The recycling process involves sorting, shredding, and melting the aluminum to produce new aluminum products.
              </p>
            </div>
            
            <div className="card-base p-8">
              <h4 className="text-primary mb-4">Copper Scrap</h4>
              <p className="mb-0">
                Copper scrap includes discarded electrical wiring, plumbing pipes, and other copper-containing materials. Copper is a highly valuable metal, and recycling involves stripping insulation from wires, sorting, and melting the copper for reuse.
              </p>
            </div>
            
            <div className="card-base p-8">
              <h4 className="text-primary mb-4">Steel Scrap</h4>
              <p className="mb-0">
                Steel scrap includes discarded steel beams, automotive parts, and appliances. Steel is commonly recycled through shredding, magnetic separation, and melting. The recycled steel is used in the production of new steel products.
              </p>
            </div>
            
            <div className="card-base p-8">
              <h4 className="text-primary mb-4">Iron Scrap</h4>
              <p className="mb-0">
                Iron scrap includes discarded iron materials. Recycling iron involves collecting, sorting, and melting the scrap to produce new iron products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MetalScrapContent;
