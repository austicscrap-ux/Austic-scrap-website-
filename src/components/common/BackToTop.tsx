"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      // Same threshold as original JS
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-6 right-6 z-50 bg-[#127749] hover:bg-[#0e512e] w-11 h-11 rounded-full flex items-center justify-center shadow-lg shadow-black/20 transition-all duration-300 hover:scale-110
        ${isVisible ? "opacity-100 visible" : "opacity-0 invisible"}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="text-white w-5 h-5" />
    </button>
  );
};

export default BackToTop;

