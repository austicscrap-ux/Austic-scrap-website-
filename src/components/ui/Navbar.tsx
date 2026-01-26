"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Service", href: "/service" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-md" : "bg-transparent",
      )}
      role="banner"
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-[86px]">
        <Link
          href="/"
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md"
          aria-label="Austic Scrap Home"
        >
          <Image
            src="/images/starbuck logo.png"
            alt="Austic Scrap Logo"
            width={60}
            height={60}
            className="h-14 w-auto object-contain"
            priority
          />
          <p
            className="text-2xl font-primary font-bold tracking-wider"
            style={{
              background: "linear-gradient(190deg, #0e510e, #00FB82, #127749)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AUSTIC SCRAP
          </p>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex" aria-label="Main navigation">
          <ul className="flex items-center gap-6" role="menubar">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label} role="none">
                  <Link
                    href={link.href}
                    className={cn(
                      "text-base font-medium transition-colors duration-300 rounded-md px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-dark",
                      isActive
                        ? "text-primary-dark font-semibold"
                        : "text-neutral-700 hover:text-primary",
                    )}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Toggler */}
        <button
          className="lg:hidden rounded-md p-2 text-neutral-800 transition-colors hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-40 bg-black/40 transition-opacity",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      <div
        id="mobile-menu"
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[80%] max-w-xs bg-primary-dark shadow-xl transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="flex h-20 items-center justify-end px-4">
          <button
            className="rounded-md p-2 text-neutral-200 transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="px-4 pt-4">
          <h2 id="mobile-menu-title" className="sr-only">
            Main Menu
          </h2>
          <ul className="flex flex-col gap-2" role="menubar">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label} role="none">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block rounded-md px-4 py-3 text-lg font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
                      isActive
                        ? "bg-white/20 text-white"
                        : "text-neutral-300 hover:bg-white/10 hover:text-white",
                    )}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
