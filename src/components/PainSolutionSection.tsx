
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
              <h2 className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                The Problem
              </h2>
              <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Medical school is overwhelming for us, documentation is draining, and studying takes forever.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-green-600 uppercase tracking-wide">
                Our Solution
              </h2>
              <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                Voidr.Health automates video explainers, clinical summaries, and whiteboard-style learning — powered by AI.
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
                className="w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl shadow-2xl flex items-center justify-center"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">AI-Powered Learning</h3>
                  <p className="text-slate-600">Transform complex medical concepts into digestible content</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
