"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface HeroSectionProps {
  title: string;
  breadcrumb?: BreadcrumbItem[];
  titleWidth?: string;
  height?: string;
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  breadcrumb,
  titleWidth = "max-w-[300px]",
  height = "h-[150px] lg:h-[212px]",
  className,
}) => {
  return (
    <div
      className={cn(
        "relative w-full flex flex-col justify-center items-center bg-[#f7f9fa] border-b border-gray-100",
        height,
        className,
      )}
    >
      <div className="container mx-auto px-4 lg:px-[86px]">
        <div className={cn("flex flex-col gap-2", titleWidth)}>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {title}
          </h1>
          {breadcrumb && breadcrumb.length > 0 && (
            <nav className="flex items-center text-sm font-medium">
              <Link
                href="/"
                className="text-gray-500 hover:text-[#03C5CE] transition-colors"
              >
                Home
              </Link>
              {breadcrumb.map((item, index) => (
                <React.Fragment key={index}>
                  <span className="mx-2 text-gray-400">/</span>
                  <Link
                    href={item.href}
                    className={cn(
                      "transition-colors",
                      index === breadcrumb.length - 1
                        ? "text-[#03C5CE] cursor-default"
                        : "text-gray-500 hover:text-[#03C5CE]",
                    )}
                  >
                    {item.label}
                  </Link>
                </React.Fragment>
              ))}
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};
