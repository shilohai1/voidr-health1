
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <motion.h1
        className="text-4xl md:text-6xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
          AI Tools
        </span>
        <br />
        for Med Students, Residents
        <br />
        and Doctors
      </motion.h1>

      <motion.p
        className="text-xl md:text-2xl text-slate-600 mb-8 font-light italic"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        From a med student. For a med student.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Button
          onClick={scrollToWaitlist}
          className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          <motion.span
            animate={{ 
              boxShadow: ["0 0 0 0 rgba(34, 197, 94, 0.4)", "0 0 0 10px rgba(34, 197, 94, 0)"] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity 
            }}
            className="inline-block"
          >
            Join the Waitlist
          </motion.span>
        </Button>
      </motion.div>
    </div>
  );
};
