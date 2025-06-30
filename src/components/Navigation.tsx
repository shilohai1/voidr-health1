
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-lg"
          : "bg-transparent"
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/baf2979c-e25e-43f3-8f02-893f6200dcd2.png"
              alt="Voidr.Health"
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Voidr.Health
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Products
              </button>
              {isProductsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-lg rounded-xl shadow-xl border border-slate-200/50 p-2"
                >
                  <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                    StudyWithAI
                  </a>
                  <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                    ClinicBot
                  </a>
                  <a href="#" className="block px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                    PathoSketch
                  </a>
                </motion.div>
              )}
            </div>
            <a href="#pricing" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
