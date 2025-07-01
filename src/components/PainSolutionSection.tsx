
"use client";
import React from "react";
import { motion } from "framer-motion";

export const PainSolutionSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-red-600 uppercase tracking-wide">
                The Problem
              </h2>
              <p className="text-2xl md:text-2xl font-bold text-slate-900 leading-tight">
                Medical school is way too overwhelming for us. Documentation is extremely draining, and studying takes almost forever😭
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-semibold text-green-600 uppercase tracking-wide">
                Our Solution
              </h2>
              <p className="text-2xl md:text-2xl font-bold text-slate-900 leading-tight">
                Voidr.Health automates video explainers, clinical summaries, creating short prescriptions and whiteboard-style learning — powered by AI.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden"
              >
                <img 
                  src="/lovable-uploads/9213e7ba-095b-4588-a9f5-2ad055951ad4.png" 
                  alt="Medical student studying anatomy" 
                  className="w-full h-full object-cover rounded-3xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
