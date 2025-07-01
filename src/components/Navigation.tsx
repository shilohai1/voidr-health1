"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={cn(
        "fixed top-4 left-60 -translate-x-1/2 z-50 w-[70%] max-w-6xl px-4 py-3 rounded-3xl",
        "border backdrop-blur-lg shadow-1xl transition-all duration-300",
        isScrolled
          ? "bg-white/80 border-slate-200/50"
          : "bg-white/10 border-white/20"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Nav Container */}
      <div className="relative flex items-center w-full h-full">
        {/* Left: Logo */}
        <div className="flex items-center justify-between space-x-2 h-12">
          <img
            src="/lovable-uploads/baf2979c-e25e-43f3-8f02-893f6200dcd2.png"
            alt="Voidr.Health"
            className="w-[130px] h-[130px]"
          />
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <a
            href="#products"
            className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
          >
            Products
          </a>
          <a
            href="#pricing"
            className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="text-slate-700 hover:text-blue-600 font-medium transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </motion.nav>
  );
};
