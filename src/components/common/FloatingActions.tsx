"use client";

import React from "react";
import { Phone, MessageCircle } from "lucide-react";

const FloatingActions = () => {
  return (
    <>
      <div
        className="fixed right-0 z-[99999999] rounded-l-[10px] bg-black text-white hover:text-white"
        style={{
          top: "170px",
          marginTop: "200px",
          padding: "2px 6px",
        }}
      >
        <a
          href="tel:+916205518929"
          className="block text-white"
          target="_blank"
          rel="noreferrer"
        >
          <Phone size={20} />
        </a>
      </div>

      <div
        className="fixed right-0 z-[99999999] rounded-l-[10px] bg-green-600 text-black hover:text-black"
        style={{
          top: "200px",
          marginTop: "220px",
          padding: "2px 6px",
        }}
      >
        <a
          href="https://wa.me/+916205518929"
          className="block text-black"
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle size={24} />
        </a>
      </div>
    </>
  );
};

export default FloatingActions;
