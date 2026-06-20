import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  containerClassName?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  id, 
  className = "", 
  containerClassName = "" 
}) => {
  return (
    <section 
      id={id} 
      className={`relative w-full overflow-hidden section-padding ${className}`}
    >
      <div className={`container mx-auto px-4 lg:px-[86px] z-10 relative ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
