// src/components/ui/Card.tsx
'use client';

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import Image from 'next/image';

const cardVariants = cva(
  'bg-white rounded-lg shadow-md transition-all duration-300 overflow-hidden',
  {
    variants: {
      variant: {
        default: 'hover:shadow-lg hover:-translate-y-1',
        elevated: 'shadow-xl hover:shadow-2xl',
        outlined: 'border border-gray-200 hover:border-secondary-color',
      },
      hover: {
        true: 'hover:shadow-lg hover:-translate-y-1 cursor-pointer',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      hover: true,
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, hover, image, title, description, footer, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cardVariants({ variant, hover, className })}
        {...props}
      >
        {image && (
          <div className="relative w-full overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width || 500}
              height={image.height || 300}
              className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        {(title || description || children) && (
          <div className="p-6">
            {title && (
              <h3 className="text-xl font-semibold text-text-black-dark mb-2 font-josefin-sans">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-text-gray text-base leading-relaxed">
                {description}
              </p>
            )}
            {children}
          </div>
        )}
        {footer && (
          <div className="p-6 pt-0 border-t border-gray-100">
            {footer}
          </div>
        )}
      </div>
    );
  }
);
Card.displayName = 'Card';

export { Card, cardVariants };
